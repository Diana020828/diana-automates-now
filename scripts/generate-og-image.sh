#!/usr/bin/env bash
#
# Genera la OG-image del portafolio (1200x630) por idioma a partir de
# assets/og/og-image.template.svg, en la paleta cálida del sitio.
#
#   public/og-image-es.png   (es)
#   public/og-image-en.png   (en)
#   public/og-image.png      (copia del idioma por defecto / fallback)
#
# Uso:  npm run og:generate   ·   ./scripts/generate-og-image.sh
# Para cambiar el diseño edita assets/og/og-image.template.svg.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
TEMPLATE="$ROOT_DIR/assets/og/og-image.template.svg"
OUT_DIR="$ROOT_DIR/public"

WIDTH=1200
HEIGHT=630
DEFAULT_LOCALE="es"
LOCALES=("es" "en")

# Textos por idioma. El "&" debe ir como "&amp;" (es XML).
declare -A TECH TECH_SIZE TECH_SPACING SUBTITLE
TECH[es]="// AUTOMATIZACIÓN DE MARKETING"
TECH_SIZE[es]="26"
TECH_SPACING[es]="3"
SUBTITLE[es]="Especialista en Automatización de Marketing"

TECH[en]="// MARKETING AUTOMATION"
TECH_SIZE[en]="28"
TECH_SPACING[en]="4"
SUBTITLE[en]="Marketing Automation Specialist"

[[ -f "$TEMPLATE" ]] || { echo "ERROR: falta la plantilla $TEMPLATE" >&2; exit 1; }

# Rasterizador disponible (rsvg preferido por calidad; magick/convert de fallback)
if command -v rsvg-convert >/dev/null 2>&1; then RENDERER="rsvg"
elif command -v magick >/dev/null 2>&1; then RENDERER="magick"
elif command -v convert >/dev/null 2>&1; then RENDERER="convert"
else echo "ERROR: necesitas rsvg-convert o ImageMagick (magick/convert)." >&2; exit 1; fi

render() {
  local svg="$1" png="$2"
  case "$RENDERER" in
    rsvg)    rsvg-convert -w "$WIDTH" -h "$HEIGHT" -o "$png" "$svg" ;;
    magick)  magick -background none -density 144 "$svg" -resize "${WIDTH}x${HEIGHT}" "$png" ;;
    convert) convert -background none -density 144 "$svg" -resize "${WIDTH}x${HEIGHT}" "$png" ;;
  esac
}

# Escapa "&" para el reemplazo de Bash (nuestras cadenas llevan "&amp;").
esc() { local s="$1"; s="${s//\\/\\\\}"; s="${s//&/\\&}"; printf '%s' "$s"; }

template="$(cat "$TEMPLATE")"
tmpdir="$(mktemp -d)"; trap 'rm -rf "$tmpdir"' EXIT

for locale in "${LOCALES[@]}"; do
  svg="${template//@@TECH@@/$(esc "${TECH[$locale]}")}"
  svg="${svg//@@TECH_SIZE@@/${TECH_SIZE[$locale]}}"
  svg="${svg//@@TECH_SPACING@@/${TECH_SPACING[$locale]}}"
  svg="${svg//@@SUBTITLE@@/$(esc "${SUBTITLE[$locale]}")}"
  printf '%s' "$svg" > "$tmpdir/og-$locale.svg"
  out="$OUT_DIR/og-image-$locale.png"
  echo "Generando og-image-$locale.png con $RENDERER ..."
  render "$tmpdir/og-$locale.svg" "$out"
  [[ "$locale" == "$DEFAULT_LOCALE" ]] && cp "$out" "$OUT_DIR/og-image.png"
done

echo "OK -> public/og-image-{es,en}.png (+ og-image.png) ${WIDTH}x${HEIGHT}"

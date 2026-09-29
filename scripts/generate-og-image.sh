#!/usr/bin/env bash
#
# Generates the portfolio Open Graph image (1200x630) per language from
# assets/og/og-image.template.svg, in the "Nature distilled" system.
#
#   public/og-image-es.png   (es)
#   public/og-image-en.png   (en)
#   public/og-image.png      (copy of the default language / fallback)
#
# Usage:  npm run og:generate   ·   ./scripts/generate-og-image.sh
# Edit the design in assets/og/og-image.template.svg and the copy below.
#
# Brand fonts are downloaded once into assets/og/.fonts (git-ignored) and used
# through an isolated fontconfig, so the render is identical on any machine
# without touching the user's fonts.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
TEMPLATE="$ROOT_DIR/assets/og/og-image.template.svg"
OUT_DIR="$ROOT_DIR/public"
FONT_DIR="$ROOT_DIR/assets/og/.fonts"

WIDTH=1200
HEIGHT=630
DEFAULT_LOCALE="es"
LOCALES=("es" "en")

# Copy per language. "&" must be written as "&amp;" (XML).
declare -A KICKER LINE1 LINE2 LINE3 LINE3_WIDTH STAGE1 STAGE2 STAGE3 STAGE4
KICKER[es]="Diana Pinzon · Automatización de marketing"
LINE1[es]="Cada lead,"
LINE2[es]="con seguimiento."
LINE3[es]="En automático."
LINE3_WIDTH[es]="560"
STAGE1[es]="Lead nuevo"
STAGE2[es]="Entra al CRM"
STAGE3[es]="Respuesta por WhatsApp"
STAGE4[es]="Llamada agendada"

KICKER[en]="Diana Pinzon · Marketing automation"
LINE1[en]="Every lead,"
LINE2[en]="followed up."
LINE3[en]="Automatically."
LINE3_WIDTH[en]="580"
STAGE1[en]="New lead"
STAGE2[en]="Added to the CRM"
STAGE3[en]="WhatsApp reply"
STAGE4[en]="Call booked"

FONTS=(
  "Fraunces.ttf|https://github.com/google/fonts/raw/main/ofl/fraunces/Fraunces%5BSOFT,WONK,opsz,wght%5D.ttf"
  "Fraunces-Italic.ttf|https://github.com/google/fonts/raw/main/ofl/fraunces/Fraunces-Italic%5BSOFT,WONK,opsz,wght%5D.ttf"
  "InstrumentSans.ttf|https://github.com/google/fonts/raw/main/ofl/instrumentsans/InstrumentSans%5Bwdth,wght%5D.ttf"
)

[[ -f "$TEMPLATE" ]] || {
  echo "ERROR: missing template $TEMPLATE" >&2
  exit 1
}

# Renderer: Inkscape honours the downloaded fonts best; rsvg and ImageMagick
# are fallbacks.
if command -v inkscape >/dev/null 2>&1; then
  RENDERER="inkscape"
elif command -v rsvg-convert >/dev/null 2>&1; then
  RENDERER="rsvg"
elif command -v magick >/dev/null 2>&1; then
  RENDERER="magick"
else
  echo "ERROR: install inkscape, rsvg-convert or ImageMagick." >&2
  exit 1
fi

mkdir -p "$FONT_DIR"
for entry in "${FONTS[@]}"; do
  name="${entry%%|*}"
  url="${entry#*|}"
  if [[ ! -f "$FONT_DIR/$name" ]]; then
    echo "Downloading font $name ..."
    curl -sfL -o "$FONT_DIR/$name" "$url" || {
      echo "ERROR: could not download $name" >&2
      rm -f "$FONT_DIR/$name"
      exit 1
    }
  fi
done

tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT
export XDG_DATA_HOME="$tmpdir/share"
export XDG_CACHE_HOME="$tmpdir/cache"
mkdir -p "$XDG_DATA_HOME/fonts" "$XDG_CACHE_HOME"
cp "$FONT_DIR"/*.ttf "$XDG_DATA_HOME/fonts/"
fc-cache -f "$XDG_DATA_HOME/fonts" >/dev/null 2>&1 || true

render() {
  local svg="$1" png="$2"
  case "$RENDERER" in
    inkscape) inkscape "$svg" --export-type=png --export-filename="$png" \
      --export-width="$WIDTH" --export-height="$HEIGHT" >/dev/null 2>&1 ;;
    rsvg) rsvg-convert -w "$WIDTH" -h "$HEIGHT" -o "$png" "$svg" ;;
    magick) magick -background none -density 144 "$svg" -resize "${WIDTH}x${HEIGHT}" "$png" ;;
  esac
}

# Escapes "&" for Bash replacement (our strings use "&amp;")
esc() {
  local s="$1"
  s="${s//\\/\\\\}"
  s="${s//&/\\&}"
  printf '%s' "$s"
}

template="$(cat "$TEMPLATE")"

for locale in "${LOCALES[@]}"; do
  svg="$template"
  for key in KICKER LINE1 LINE2 LINE3 LINE3_WIDTH STAGE1 STAGE2 STAGE3 STAGE4; do
    declare -n values="$key"
    svg="${svg//@@${key}@@/$(esc "${values[$locale]}")}"
    unset -n values
  done
  printf '%s' "$svg" >"$tmpdir/og-$locale.svg"
  out="$OUT_DIR/og-image-$locale.png"
  echo "Generating og-image-$locale.png with $RENDERER ..."
  render "$tmpdir/og-$locale.svg" "$out"
  [[ "$locale" == "$DEFAULT_LOCALE" ]] && cp "$out" "$OUT_DIR/og-image.png"
done

echo "OK -> public/og-image-{es,en}.png (+ og-image.png) ${WIDTH}x${HEIGHT}"

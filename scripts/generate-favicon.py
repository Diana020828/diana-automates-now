#!/usr/bin/env python3
"""Generate the "DP" favicon set in the "Nature distilled" style.

The initials are converted to vector paths from Fraunces (a favicon SVG cannot
load web fonts), using the font cached by scripts/generate-og-image.sh in
assets/og/.fonts. Outputs:

    public/favicon.svg         vector favicon (modern browsers)
    public/favicon.ico         16/32/48 px fallback
    public/apple-touch-icon.png  180 px, iOS home screen

Usage: python3 scripts/generate-favicon.py   (needs fontTools and ImageMagick)
"""

import subprocess
import tempfile
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
FONT = ROOT / "assets" / "og" / ".fonts" / "Fraunces.ttf"
PUBLIC = ROOT / "public"

PLUM = "#2A1B2E"
CREAM = "#F6F1E7"
TERRACOTTA = "#D2553A"

SIZE = 64
CAP_HEIGHT = 23  # rendered height of the capitals inside the 64 px box


def initials_path(text: str) -> tuple[str, float]:
    """SVG path of `text` scaled to CAP_HEIGHT, with its advance width."""
    font = instancer.instantiateVariableFont(
        TTFont(FONT), {"wght": 640, "opsz": 72, "SOFT": 100, "WONK": 0}
    )
    glyph_set = font.getGlyphSet()
    cmap = font.getBestCmap()
    cap = font["OS/2"].sCapHeight or font["head"].unitsPerEm * 0.7
    scale = CAP_HEIGHT / cap
    pen = SVGPathPen(glyph_set)
    x = 0.0
    for char in text:
        name = cmap[ord(char)]
        # Flip the y axis (fonts grow upwards, SVG downwards)
        glyph_set[name].draw(TransformPen(pen, (scale, 0, 0, -scale, x, 0)))
        x += glyph_set[name].width * scale
    return pen.getCommands(), x


def build_svg() -> str:
    path, width = initials_path("DP")
    dx = (SIZE - width) / 2 - 2
    dy = SIZE / 2 + CAP_HEIGHT / 2
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {SIZE} {SIZE}">
  <title>Diana Pinzon</title>
  <rect width="{SIZE}" height="{SIZE}" rx="16" fill="{PLUM}"/>
  <path transform="translate({dx:.2f} {dy:.2f})" d="{path}" fill="{CREAM}"/>
  <circle cx="{dx + width + 3.5:.2f}" cy="{dy - 2.5:.2f}" r="3.5" fill="{TERRACOTTA}"/>
</svg>
"""


def main() -> None:
    if not FONT.exists():
        raise SystemExit(
            "Missing Fraunces: run scripts/generate-og-image.sh once to cache it"
        )
    svg = build_svg()
    (PUBLIC / "favicon.svg").write_text(svg, encoding="utf-8")
    with tempfile.TemporaryDirectory() as tmp:
        pngs = []
        for size in (16, 32, 48, 180):
            png = Path(tmp) / f"icon-{size}.png"
            subprocess.run(
                [
                    "magick",
                    "-background",
                    "none",
                    "-density",
                    "600",
                    str(PUBLIC / "favicon.svg"),
                    "-resize",
                    f"{size}x{size}",
                    str(png),
                ],
                check=True,
            )
            pngs.append(png)
        subprocess.run(
            ["magick", *map(str, pngs[:3]), str(PUBLIC / "favicon.ico")], check=True
        )
        (PUBLIC / "apple-touch-icon.png").write_bytes(pngs[3].read_bytes())
    print("OK -> public/favicon.svg, favicon.ico, apple-touch-icon.png")


if __name__ == "__main__":
    main()

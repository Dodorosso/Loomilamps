# Loomilamps — Version History

Each folder here is a full, standalone snapshot of the site at a point in time
(index.html, product-loom1.html, style.css, script.js, assets/). Open any
version's `index.html` directly in a browser to compare it against the live
files in the project root, which always hold the latest version.

| Version | Description |
|---|---|
| `v1-kraft-bg-green-shadow` | Tan/kraft-colored background (`#008c40` green swapped to kraft as base), cardboard fiber-grain texture everywhere, dark ink text-shadows on headings. |
| `v2-white-cardboard-no-shadow` | Early attempt at a whiter background with cardboard texture; headline shadows removed. |
| `v3-white-bg-no-pattern-colored-shadows` | Background switched to a plain warm off-white (`--color-bg`) with only soft, non-repeating radial-gradient light blooms — no tiling noise/fiber pattern anywhere (removed from body *and* all cards, since the SVG turbulence tiles were visibly repeating on large screens/cards). Headings keep their bold hard-drop-shadow style, but now use a contrasting accent color (pink or green) instead of ink-on-ink, so they stay legible. Card-level texture replaced by flat pastel colors + thick borders + hard shadows + dashed accents for the paper-cutout feel. |
| `v4-light-yellow-bg-cardboard-cards-pink-shadows` | Background changed to a very light, calm, elegant buttery yellow (`#fffbe8`). Cardboard-noise texture (corrugated flute lines + SVG fiber grain filter) was selectively added back **only** onto the product cards, keeping them looking like highly physical, premium vintage board-game cardboard. All headings across both pages (`h1`, `h2`, `h3`, including page titles, section headers, and card titles) now consistently use the friendly, bold pink hard-drop-shadow for playful and absolute legibility. |

## Convention going forward
Whenever a meaningful visual/design change is requested and applied to the
live files in the project root, copy the full set of live files into a new
`versions/vN-short-description/` folder *before or right after* making the
change, so each iteration remains browsable and comparable.

# Theme V1

## Goals

- Custom Hugo theme: maker-log
- Dark mode only (primary)
- Desktop-first, mobile responsive
- Fast loading, no JS frameworks
- No Tailwind, no React, no Vue

## Status

Built:
- baseof.html (root + _default/)
- Header with site title + navigation
- Footer
- _default/single.html
- _default/list.html
- projects/single.html (with status/type badges, external links)
- projects/list.html (project cards)
- project-journal/single.html (logbook entry styling)
- home.html (dashboard layout)
- SCSS structure (LibSass, @import)

Not yet built:
- Books section
- Movies section
- References section
- Tooling section
- Pagination styling
- Tag / taxonomy list pages
- Mobile navigation
- Search

## Pages

Built:
- Home
- Projects (list + single)
- Project Journal (single)
- Posts (list + single via _default)
- About (via _default/single)
- Taxonomy pages (via _default/list fallback)

Planned:
- Books
- Movies
- References
- Tooling

## Components

Built:
- Navigation (menu.html, root-relative URLs via relLangURL)
- Footer
- Project media cards (proj-card, 16:9 image grid)
- Status badges (.badge--status-*)
- Type badges (.badge--type)
- Article header / meta
- Entry list (list pages)
- Journal logbook entries (h2 timestamp styling)
- Homepage intro block
- Homepage journal entry rows (single-line with project label + anchor link)

Planned:
- Mobile nav toggle
- Pagination controls
- Tag list component
- Table of contents sidebar

## SCSS Structure

Location: `themes/maker-log/assets/scss/`

Files:
- `main.scss` — @import entry point
- `_variables.scss` — design tokens
- `_reset.scss` — box-sizing, margin reset
- `_base.scss` — typography, links, code, blockquote
- `_layout.scss` — site-wrapper, header, main, footer
- `_components.scss` — all component styles

Transpiler: LibSass (Hugo extended built-in).
Dart Sass NOT available in this environment.
Do NOT use @use or @forward — use @import only.

## Layout Templates

```
layouts/
  baseof.html                  ← root fallback
  home.html                    ← homepage
  _default/
    baseof.html                ← canonical base
    single.html                ← generic single page
    list.html                  ← generic list page
  projects/
    single.html                ← project page with badges + links
    list.html                  ← project list with cards
  project-journal/
    single.html                ← journal logbook layout
  _partials/
    head.html
    head/css.html              ← LibSass pipeline
    head/js.html
    header.html
    footer.html
    menu.html                  ← uses relLangURL for root-relative links
    terms.html
    home-project-card.html     ← media card partial for homepage
```

## Visual Style

See design-system.md for full palette and typography.

Summary:
- Background: #111827
- Surface: #1F2937
- Text: #E5E7EB
- Accent: #38BDF8 (Telemetry Blue)
- Fonts: IBM Plex Sans (headings), Source Serif 4 (body), JetBrains Mono (code/labels)
- Engineering notebook aesthetic — not a portfolio, not a landing page

# Implementation Notes

Decisions and constraints discovered during development.
Read before making changes to templates or SCSS.

## Hugo Environment

Hugo version: 0.163.1+extended (LibSass built-in).
Dart Sass is NOT installed.

SCSS rules:
- Use `@import` only. Do NOT use `@use` or `@forward`.
- Entry point: `themes/maker-log/assets/scss/main.scss`
- Processed via `css.Sass` in `_partials/head/css.html`

## Navigation

Menu URLs from `hugo.toml` are relative strings (e.g. `"projects/"`).

Use `relLangURL` to make them root-relative:
```
{{- $attrs := dict "href" (.URL | relLangURL) }}
```

Do NOT use `absLangURL` — it produces `https://abishevs.dev/...` which
breaks localhost development.

Do NOT use `.URL` directly — it produces relative paths that get appended
to the current page URL.

## Theme Location

Active theme: `themes/maker-log/`
Old theme still present: `themes/hugo-coder/` (do not modify or delete)

`hugo.toml` must have `theme = "maker-log"` to use the new theme.

## Layout Resolution

Hugo resolves layouts in this order: site `layouts/` → theme `layouts/`.

The site-level `layouts/` contains only `404.html` and `partial/custom-info.html`.
All other templates live in `themes/maker-log/layouts/`.

Use `_default/` for generic fallbacks.
Create section-specific layouts under `layouts/<section>/` only when needed.

## Journal Entry Extraction

Project journal pages are single markdown files with multiple `## heading` entries.
Org-mode exports headings as:

```html
<h2 id="slug">
  <span class="timestamp-wrapper">
    <span class="timestamp">[YYYY-MM-DD Day HH:MM]</span>
  </span>
  Entry title text
</h2>
```

To extract entries in templates, use `findRE` on `.Content`:

```
findRE `<h2 id="([^"]+)">.*?<span class="timestamp">\[([^\]]+)\]</span></span>\s*([^<]+)` .Content
```

This gives the full h2 tag per entry. Then extract:
- ID: `findRE \`id="([^"]+)"\``  then strip `id="` and `"`
- Timestamp: `findRE \`\[([^\]]+)\]\``  then strip `[` and `]`
- Label: strip all HTML tags, then strip leading `[timestamp] ` prefix

## Homepage Journal Entry Ordering

Pages are sorted date-descending by default (newest first).
Entries within a page are in document order (oldest first within the file).

To get the 3 most recent entries globally:
1. Reverse page order so oldest pages go first
2. Append all entries from each page in document order
3. Use `last 3` to take the tail of the combined slice

```
range (where site.RegularPages "Section" "project-journal") | collections.Reverse
```

## Project Card Fallback (linkToSource)

If `linkToSource = true` AND `sourceCodeUrl` is set, the card links externally.
Otherwise it links to the internal project page.

This applies to both `projects/list.html` and `home-project-card.html`.

## Frontmatter — Do Not Add New Fields

See anti-patterns.md and content-compatibility.md.

Existing project fields in use:
- `status` — active | archived | prototype | testing | research | planning | complete
- `projectType` — embedded | web | cli | simulation | tooling
- `thumbnail` — path to image
- `sourceCodeUrl`, `linkToSource`, `demoUrl`, `liveUrl`, `reportUrl`, `journalUrl`

Do not rename or replace these.

# Homepage

## Goal

Discovery dashboard for an engineering notebook.
Not a marketing landing page.

## Layout

Sections in order:

1. Intro
2. Current Investigations (conditional — only shown if any exist)
3. Active Projects
4. Recent Journal Entries
5. Recent Posts

## Sections

### Intro

Displays:
- Avatar (96px circle, from `site.Params.avatarurl`)
- Name (from `site.Params.author`)
- School/affiliation (from `site.Params.school`, mono label in accent color)
- Bio (first item of `site.Params.info`)

### Current Investigations

Projects with `status: research` or `status: planning`.

Rendered as media cards (same as Active Projects).

Hidden entirely if no matching projects exist.

### Active Projects

Show exactly 3 cards.

Priority:
1. Projects with `status: active`, `prototype`, or `testing`
2. If fewer than 3 active projects exist, pad with most recent other projects

Rendered as a media card grid:
- 16:9 image from `thumbnail`
- Hatched placeholder if no thumbnail
- Title (truncated, single line)
- Status badge + type badge
- Entire card is a clickable link
- Respects `linkToSource` → `sourceCodeUrl` fallback

### Recent Journal Entries

Show 3 entries total across all project-journal pages.

Selection:
- Collect all `## heading` entries from all journal pages
- Pages processed oldest-first so `last 3` returns genuinely most recent
- Entries are org-mode exported h2s with timestamp format `[YYYY-MM-DD Day HH:MM]`

Each entry displays:
- Project label (journal page title, in accent mono)
- Entry heading text (truncated, single line, links to `page#anchor`)
- Timestamp string (muted mono, right-aligned)

### Recent Posts

Latest 5 posts from `posts/` section.

Each entry: title (links to post) + date (right-aligned).

"All posts →" link at bottom.

## Implementation Notes

- Journal entries extracted via `findRE` on `.Content` (rendered HTML)
- Anchor IDs come from Hugo's auto-generated heading slugs
- No JavaScript required
- All data sourced from existing frontmatter and `hugo.toml` params

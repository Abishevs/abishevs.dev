# Project Status

Last updated: 2026-06-28

## Content Sections

| Section | Pages | Status | Filters | Profile |
|---------|-------|--------|---------|---------|
| Projects | 17 | ✅ Complete | status, domain | project |
| Project Journal | 2 | ✅ Complete | — | journal |
| Posts | 4 | ✅ Complete | — | post |
| Workflows | 3 | ✅ Complete | status, domain | workflow |
| Work Experience | 4 | ✅ Complete | — | career |
| Education | 2 | ✅ Complete | — | education |
| Technologies | 8 | ✅ Complete | category, favorite, dailyDriver | technology |
| Reading | 2 | ✅ Complete | status, readingType, technologies | reading |
| Media | 3 | ✅ Complete | status, mediaType, technologies | media |
| Timeline | — | ✅ Complete | track filtering, year selection | — |
| Graph | — | ✅ Complete | section filtering, search, focus | — |
| Search | — | ✅ Complete | instant, grouped by section | — |

## Features

| Feature | Status | Notes |
|---------|--------|-------|
| Content Profile system | ✅ | Generic rendering from profiles.toml |
| Knowledge Node architecture | ✅ | Shared partials, backlinks, related |
| Configuration-driven content | ✅ | All UI text in data/ files |
| Track system | ✅ | Single source: tracks.toml |
| Timeline V3 — Signal Traces | ✅ | Year selection, activity, milestones, enrichment |
| Technology auto-linking | ✅ | Badges link if page exists, sorted (linked first) |
| Technology badges visual distinction | ✅ | Linked = bordered, unlinked = muted |
| Math rendering (KaTeX) | ✅ | Server-side, inline + block, zero JS |
| Engineering Semantics | ✅ | Render hooks, terminal, output, extensible |
| Source+Output pairing | ✅ | CSS sibling selectors |
| Terminal component | ✅ | Auto-prompt from terminal.toml |
| Copy button (all code types) | ✅ | Strips prompts for terminal, skips line numbers |
| Resource system ([[links]]) | ✅ | Generic label/url pairs |
| Navigation (intent-based) | ✅ | Panels, data-driven, mobile accordion |
| Homepage | ✅ | Intro → Now → Featured → Knowledge System → Recent Changes |
| Knowledge Graph (D3) | ✅ | Force-directed, filtering, focus mode |
| Search | ✅ | Client-side, instant, / shortcut |
| 404 page | ✅ | "Signal Lost" themed |
| Footer stats | ✅ | Data-driven labels from tracks.toml |
| Influence list (shared) | ✅ | Used by Reading + Media, tech filter + badges |
| Bidirectional discovery | ✅ | Backlinks + "Appears In" for technologies |

## Configuration Files

| File | Purpose |
|------|---------|
| `data/knowledge/profiles.toml` | Profile definitions + section→profile mapping |
| `data/knowledge/tracks.toml` | Track colors, labels, timeline/graph order |
| `data/knowledge/statuses.toml` | Shared status definitions (projects, workflows) |
| `data/knowledge/domains.toml` | Engineering domain classifications |
| `data/knowledge/labels.toml` | Shared UI labels (relationships, meta, nav, search) |
| `data/knowledge/terminal.toml` | Terminal prompt config (user, host, dir) |
| `data/homepage.toml` | Homepage section titles |
| `data/navigation.toml` | Nav categories, items, descriptions |
| `data/projects/config.toml` | Project list filter labels |
| `data/technologies/config.toml` | Technology list filter labels |
| `data/workflows/config.toml` | Workflow list filter labels |
| `data/reading/config.toml` | Reading list filter labels |
| `data/media/config.toml` | Media list filter labels |
| `data/timeline/enrichment.json` | External timeline data (merged at build) |

## Profiles Defined

| Profile | Section | Title | Subtitle | Meta | Tech |
|---------|---------|-------|----------|------|------|
| project | projects | title | — | status, projectType | technologies |
| workflow | workflows | title | — | status, domains | tools |
| technology | technologies | title | — | category, favorite, dailyDriver, firstUsed | — |
| reading | reading | title (+ author suffix) | — | year, readingType, readingStatus, favorite | technologies |
| media | media | title (+ creator suffix) | — | year, mediaType, watchStatus, favorite | technologies |
| career | work-experience | position | org, duration, location, type | status | technologies |
| education | education | programme | institution, degree, duration, location | status | — |
| post | posts | title | — | — | — |
| journal | project-journal | title | — | — | — |

## SCSS Architecture

```
main.scss
├── _variables.scss     — Design tokens
├── _reset.scss         — CSS reset
├── _base.scss          — Base element styles
├── _layout.scss        — Page structure
├── _components.scss    — All UI components
├── _engineering.scss   — Engineering Semantics (code, terminal, output)
└── _syntax.scss        — Chroma syntax highlighting classes
```

## JavaScript

| File | Purpose |
|------|---------|
| `main.js` | Navigation panels, project/influence filtering, copy buttons |
| `timeline.js` | Signal trace timeline (data-driven from tracks.toml) |
| `graph.js` | D3 force-directed knowledge graph |
| `search.js` | Client-side search with section grouping |

## Render Hooks

| Hook | Renders |
|------|---------|
| `render-passthrough.html` | KaTeX math (inline + block) |
| `render-codeblock.html` | Generic → `.engineering-code` |
| `render-codeblock-bash/sh/shell/zsh/fish.html` | Terminal component |
| `render-codeblock-text.html` | Execution output |

## Content Frontmatter Fields

### Shared (all types)
- `title`, `description`, `date`, `draft`
- `related` — array of internal paths
- `[[links]]` — label + url pairs
- `technologies` — array (auto-linked to /technologies/)

### Projects
- `status`, `projectType`, `thumbnail`, `linkToSource`
- `startDate`, `endDate`, `[[activity]]`, `[[milestones]]`

### Workflows
- `status`, `domains`, `tools`, `current`
- `startDate`, `endDate`

### Technologies
- `category`, `favorite`, `dailyDriver`, `firstUsed`
- `keywords` (alternate discovery terms)

### Reading
- `author`, `year`, `readingType`, `readingStatus`, `favorite`

### Media
- `creator`, `year`, `mediaType`, `watchStatus`, `favorite`

### Work Experience
- `position`, `organization`, `location`, `employmentType`
- `startDate`, `endDate`, `current`

### Education
- `programme`, `institution`, `degree`, `location`
- `startDate`, `endDate`, `current`

## What's NOT Implemented (from steering)

These items appear in steering/specs but are not yet built:

- **Courses** as standalone Knowledge Nodes (mentioned in education steering)
- **Certifications/Publications/Talks** content types (education future compat)
- **Mermaid/PlantUML/Graphviz** diagram rendering (engineering semantics extensibility)
- **Python REPL / SQL / interactive** specialized renderers
- **Git branch** in terminal prompt (terminal.toml supports user/host/dir only)
- **Reading: genre sub-filtering** within book type (architecture supports it via technologies)
- **Activity model from git history** (enrichment.json is manual currently)
- **Homepage journal entries** (mentioned in implementation-notes, not currently rendered)

## Technical Stack

- Hugo v0.163.3+extended (LibSass)
- SCSS via `@import` (no Dart Sass)
- Vanilla JavaScript (no framework)
- D3.js (CDN) for graph
- KaTeX CSS (CDN) for math
- Content authored in Org Mode → ox-hugo → Hugo markdown

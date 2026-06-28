# Architecture — Current State

Last updated: 2026-06-28

## Philosophy

The website is a **public engineering knowledge system** — not a portfolio, not a résumé.

It documents how engineering knowledge evolves over time through projects, workflows, professional experience, education and writing.

Every piece of content is a **Knowledge Node**. Pages are **Views** over the same underlying knowledge. Navigation encourages **exploration by intent** rather than by filesystem structure.

---

## Site Structure

```
abishevs.dev/
├── content/
│   ├── _index.md              ← Homepage (## intro, ## now sections)
│   ├── projects/              ← Engineering artefacts
│   ├── project-journal/       ← Build logs (org-mode exported)
│   ├── posts/                 ← Blog articles
│   ├── workflows/             ← Engineering environments
│   ├── work-experience/       ← Professional engineering case studies
│   ├── education/             ← Educational environments
│   ├── technologies/          ← Knowledge hubs (languages, tools, platforms)
│   ├── books/                 ← Influential ideas
│   ├── timeline/              ← Chronological View (aggregates others)
│   ├── graph/                 ← Knowledge Graph View (visualizes relationships)
│   ├── search/                ← Site-wide search
│   └── about.md               ← Philosophy, not résumé
├── data/
│   ├── knowledge/
│   │   ├── statuses.toml      ← Shared status definitions (projects, workflows, work-exp)
│   │   └── domains.toml       ← Shared domain classifications
│   ├── navigation.toml        ← Nav categories + items + direct links
│   ├── projects/config.toml   ← Project list page UI labels
│   └── technologies/config.toml ← Technology list page labels
└── themes/maker-log/
    ├── layouts/
    │   ├── _partials/knowledge/   ← Shared Knowledge Node components
    │   ├── projects/              ← Project layouts
    │   ├── project-journal/       ← Journal layout
    │   ├── work-experience/       ← Work experience layouts
    │   ├── education/             ← Education layouts
    │   ├── workflows/             ← Workflow layouts
    │   ├── technologies/          ← Technology layouts
    │   ├── books/                 ← Book layouts
    │   ├── timeline/              ← Timeline View layout
    │   ├── graph/                 ← Knowledge Graph layout
    │   ├── search/                ← Search layout
    │   └── _default/             ← Fallback layouts + index.json
    ├── assets/scss/
    │   ├── main.scss             ← Entry point (@import only)
    │   ├── _variables.scss       ← Colors, fonts, layout
    │   ├── _reset.scss
    │   ├── _base.scss
    │   ├── _layout.scss
    │   └── _components.scss      ← All component styles
    └── assets/js/
        ├── main.js               ← Nav panels + generic list filtering
        ├── graph.js              ← D3 force-directed knowledge graph
        └── search.js             ← Client-side search
```

---

## How Everything Connects

```
┌─────────────────────────────────────────────────────────────────────┐
│                        KNOWLEDGE SYSTEM                               │
│                                                                       │
│  Content (authored manually)                                          │
│  ├── Projects, Workflows, Work Exp, Education, Books, Posts, Journals │
│  ├── Each has: title, description, related = ["/path/..."]            │
│  └── Each links to others via `related` frontmatter                   │
│                                                                       │
│  Relationships (bidirectional)                                        │
│  ├── related.html    → "Continue Exploring" (outbound)                │
│  ├── backlinks.html  → "Linked From" (inbound)                        │
│  └── discovered.html → "Appears In" (Technology auto-discovery)       │
│                                                                       │
│  Views (no content, visualize existing nodes)                         │
│  ├── Timeline  → chronological: groups by year, colored tracks        │
│  ├── Graph     → topological: force-directed, shows all connections   │
│  ├── Search    → textual: instant search across all nodes             │
│  └── Homepage  → curated: featured + activity feed                    │
│                                                                       │
│  Navigation (data-driven from navigation.toml)                        │
│  ├── Explore   → Projects, Workflows, Books, Technologies             │
│  ├── Journey   → Timeline, Knowledge Graph, Work Exp, Education       │
│  ├── Writing   → Blog, Project Journal                                │
│  └── Direct    → About, Search                                        │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Knowledge Node Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    KNOWLEDGE NODE                             │
│                                                              │
│  Frontmatter:                                                │
│  ├── title, description, date                                │
│  ├── status          → data/knowledge/statuses.toml          │
│  │   (projects, workflows, work-exp only)                    │
│  ├── domains/projectType → data/knowledge/domains.toml       │
│  ├── related = ["/path/to/other/node", ...]                  │
│  └── type-specific fields (tools, category, author, etc.)    │
│                                                              │
│  Content: Rich markdown with ## sections                     │
│                                                              │
│  Rendered by:                                                │
│  ├── knowledge/node-meta.html    (status + domains + dates)  │
│  ├── knowledge/external-links.html                           │
│  ├── knowledge/related.html      (Continue Exploring)        │
│  ├── knowledge/backlinks.html    (Linked From)               │
│  ├── knowledge/discovered.html   (Appears In — tech only)    │
│  └── knowledge/node-nav.html     (section link + prev/next)  │
└─────────────────────────────────────────────────────────────┘
```

### Relationship Model

```
                    related (manual, bidirectional)
    ┌──────────────────────────────────────────────────┐
    │                                                  │
    ▼                                                  ▼
 Project ──related──▶ Technology ◀──discovered── Work Exp
    │                     ▲                         │
    │                     │ keywords match          │
    └──related──▶ Workflow ──related──▶ Education   │
                                                    │
                 Book ──related──────────────────────┘
```

- `related` → manually authored, rendered as "Continue Exploring"
- `backlinks` → auto-computed inverse of `related`, rendered as "Linked From"
- `discovered` → Technology pages scan all pages' `keywords`/`technologies`/`tools` fields

---

## Content Types

### Types with shared project statuses (statuses.toml)

| Type | Key Fields | Timeline Track |
|------|-----------|----------------|
| Projects | status, projectType, keywords, sourceCodeUrl | project (point) |
| Work Experience | organization, position, startDate, endDate, technologies | career (duration) |
| Education | institution, programme, degree, startDate, endDate | education (duration) |
| Workflows | tools, domains, startDate, endDate | workflow (duration) |

### Types with custom metadata (no shared statuses)

| Type | Key Fields | Timeline Track |
|------|-----------|----------------|
| Technologies | category, firstUsed, favorite, dailyDriver | — |
| Books | author, year, readingStatus, favorite | book (point) |
| Posts | description | — |
| Project Journal | toc, related | — |

---

## Views

### Timeline

Aggregates all content types chronologically. Groups by year, sorted descending.

- **Point events**: Projects (by date), Books (by date)
- **Duration events**: Work Experience, Education, Workflows (startDate–endDate)
- **Visual**: Track-colored dots + duration bars
- **Filtering**: Toggle tracks (project, career, education, workflow, book)
- **Interaction**: Full-row clickable items, uses generic JS filter system

### Knowledge Graph

Interactive D3.js force-directed graph of all Knowledge Nodes and their relationships.

- **Data**: Hugo generates nodes (id, title, section, description) + edges (from `related` fields) as inline JSON
- **Filtering**: Toggle sections on/off
- **Search**: Find node by title, highlight + center
- **Focus mode**: Click node → fade unrelated, highlight neighbors; click again → navigate
- **Zoom/pan**: Scroll + drag
- **Scalability**: Node radius based on degree, zoom handles density

### Search

Client-side instant search across all Knowledge Nodes.

- **Index**: Hugo generates `/index.json` at build time (title, url, section, description, tags)
- **Matching**: Multi-word substring matching against title + description + tags
- **Results**: Grouped by section, matching terms highlighted with `<mark>`
- **Keyboard**: `/` to focus from anywhere, `Escape` to blur
- **No external dependencies**: Vanilla JS

---

## Navigation

```
┌──────────────────────────────────────────────────────────────────┐
│ Eduards Abishevs    Explore   Journey   Writing   About   Search │
└──────────────────────────────────────────────────────────────────┘

Categories (hover panels, data-driven from navigation.toml):
  Explore  → Projects, Workflows, Books, Technologies
  Journey  → Timeline, Knowledge Graph, Work Experience, Education
  Writing  → Blog, Project Journal

Direct links:
  About, Search
```

---

## Filtering Architecture

All list pages share a single generic JS filter system in `main.js`:

```
Filter chip: data-filter="<dimension>" data-value="<value>"
Card:        data-<dimension>="<value>"

JS reads active[dim], checks card.dataset[dim].includes(val)
```

| Page | Dimensions |
|------|-----------|
| Projects | `status`, `domains` |
| Technologies | `domains`, `favorite`, `daily` |
| Books | `status`, `favorite` |
| Workflows | `status`, `domains` |
| Timeline | `track` |

---

## Design System

```
Background:   #111827
Surface:      #1F2937
Text:         #E5E7EB
Muted:        #9CA3AF
Border:       #374151

Primary:      #38BDF8  (Telemetry Blue — links, interactive, active)
Secondary:    #9F7AEA  (Insight Purple — knowledge, research, learning)
Success:      #22C55E
Warning:      #F59E0B
Error:        #EF4444

Track Colors:
  Project:    #38BDF8
  Career:     #22C55E
  Education:  #F59E0B
  Workflow:   #EC4899
  Book:       #FB923C
  Technology: #9F7AEA
  Journal:    #6EE7B7
  Post:       #E5E7EB

Fonts:
  Headings:   IBM Plex Sans
  Body:       Source Serif 4
  Code/UI:    JetBrains Mono
```

---

## Adding a New Content Type

1. Create `themes/maker-log/archetypes/<section>.md`
2. Create `content/<section>/_index.md`
3. Create `layouts/<section>/list.html` and `single.html`
4. Use `related.html`, `backlinks.html`, `node-nav.html` in layouts
5. Add section-specific metadata rendering for type-unique fields
6. Add entry to `data/navigation.toml`
7. Add `range` block to `layouts/timeline/list.html` if applicable
8. Add section to `layouts/graph/list.html` node generation
9. Duration-based types reuse `.work-entry` class; cards reuse `.proj-card`

**Zero changes needed to:** shared partials, JS filter system, search index, graph visualization.

---

## Technical Constraints

- Hugo v0.163.3+extended (LibSass, no Dart Sass)
- SCSS: `@import` only, no `@use`/`@forward`
- No `else with` in Hugo templates — use `else if`
- Hugo taxonomies disabled — Knowledge Node architecture handles relationships
- Site functional without JavaScript (nav via CSS hover, content always visible)
- Content authored in Org Mode, exported to Hugo markdown
- D3.js loaded from CDN for graph visualization only

---

## Implemented ✓

- Knowledge Node architecture (shared partials, data, relationships, backlinks)
- Projects (filtering by status + domain, cards, linkToSource fallback)
- Project Journal (org-mode timestamp extraction, entry index)
- Work Experience (3 entries, clickable cards)
- Education (Chalmers, clickable cards)
- Workflows (Linux Desktop, Development Environment, filtering)
- Technologies (category/firstUsed/favorite/dailyDriver, auto-discovery, filtering)
- Books (readingStatus/favorite, "Title by Author" display, filtering)
- Timeline (all content types, track-colored duration bars, filtering by track)
- Knowledge Graph (D3 force-directed, filtering, search, focus mode, zoom/pan)
- Search (client-side, instant, grouped by section, keyboard shortcut)
- Navigation (intent-based, contextual panels, data-driven, direct links)
- Homepage (intro, now, featured, activity feed)
- About page (philosophy-focused)
- 404 page ("Signal Lost" themed)
- Footer (knowledge base stats)

### Not Yet Implemented
- Tag enrichment (existing content mostly has empty keywords)

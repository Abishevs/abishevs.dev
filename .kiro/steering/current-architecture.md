# Architecture — Current State

Last updated: 2026-06-27

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
│   ├── workflows/             ← Engineering environments (rich pages)
│   │                             Workflow pages are intentionally content-first.
│   │                             Unlike Projects or Work Experience, the body
│   │                             structure is not prescribed by the layout.
│   │                             Authors are free to organize the document using
│   │                             sections that best communicate the engineering
│   │                             environment or practice. The template is
│   │                             responsible for navigation, metadata,
│   │                             relationships and presentation—not the
│   │                             document's internal structure.
│   ├── work-experience/       ← Professional engineering case studies
│   ├── education/             ← Educational environments
│   └── timeline/              ← Chronological View (no content, aggregates others)
├── data/
│   ├── knowledge/
│   │   ├── statuses.toml      ← Shared status definitions
│   │   └── domains.toml       ← Shared domain classifications
│   ├── navigation.toml        ← Nav panel content (categories + items + descriptions)
│   └── projects/
│       └── config.toml        ← Project list page UI labels
└── themes/maker-log/
    ├── layouts/
    │   ├── _partials/knowledge/   ← Shared Knowledge Node components
    │   ├── projects/              ← Project-specific layouts
    │   ├── project-journal/       ← Journal layout
    │   ├── work-experience/       ← Work experience layouts
    │   ├── education/             ← Education layouts
    │   ├── workflows/             ← Workflow layouts
    │   ├── timeline/              ← Timeline View layout
    │   └── _default/             ← Fallback Knowledge Node layouts
    ├── assets/scss/
    │   ├── main.scss             ← Entry point (@import only)
    │   ├── _variables.scss       ← Colors, fonts, layout
    │   ├── _reset.scss
    │   ├── _base.scss
    │   ├── _layout.scss
    │   └── _components.scss      ← All component styles
    └── assets/js/main.js         ← Nav panels + project filtering
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
│  ├── domains/projectType → data/knowledge/domains.toml       │
│  ├── related = ["/path/to/other/node", ...]                  │
│  └── type-specific fields (tools, organization, etc.)        │
│                                                              │
│  Content: Rich markdown with ## sections                     │
│                                                              │
│  Rendered by:                                                │
│  ├── knowledge/node-meta.html    (status + domains + dates)  │
│  ├── knowledge/external-links.html                           │
│  ├── knowledge/related.html      (generic, groups by section)│
│  └── knowledge/node-nav.html     (exploration footer)        │
└─────────────────────────────────────────────────────────────┘
```

### Shared Partials

| Partial | Purpose | Interface |
|---------|---------|-----------|
| `knowledge/node-meta.html` | Status badge + domain badges + dates | `dict "page" . "domainKey" "projectType"` |
| `knowledge/badge-status.html` | Single status badge | `dict "status" "active" "statuses" map` |
| `knowledge/badge-domains.html` | Domain badge group | `dict "domains" slice "domainData" map` |
| `knowledge/external-links.html` | Labeled external links | `dict "links" (slice of dicts)` |
| `knowledge/related.html` | Resolve `related` paths, group by section | `dict "page" .` |
| `knowledge/node-nav.html` | Section link + tags + prev/next | `dict "page" .` |

### Relationship Model

```
Frontmatter:
  related = ["/projects/modest", "/workflows/linux-desktop", "/work-experience/ericsson-summer-2025"]

Resolution:
  site.GetPage → group by .Section → render "Continue Exploring"

Output:
  Continue Exploring
  ├── Projects
  │   └── MODEST → /projects/modest/
  ├── Workflows
  │   └── Linux Desktop → /workflows/linux-desktop/
  └── Work Experience
      └── Summer Intern — Ericsson → /work-experience/ericsson-summer-2025/
```

---

## Content Types

### Duration-based (reuse .work-entry/.work-meta CSS)

| Type | Key Fields | Track (Timeline) |
|------|-----------|-----------------|
| Work Experience | organization, position, startDate, endDate, current, technologies | career |
| Education | institution, programme, degree, startDate, endDate, current | education |
| Workflows | tools, domains, startDate, endDate, current | workflow |

### Artefact-based

| Type | Key Fields | Track (Timeline) |
|------|-----------|-----------------|
| Projects | status, projectType, thumbnail, sourceCodeUrl, linkToSource | project |
| Project Journal | (markdown with timestamped ## entries) | — |
| Posts | authors, tags, categories, series | — |

---

## Navigation

```
┌────────────────────────────────────────────────────────────┐
│ Eduards Abishevs         Explore   Journey   Writing  About │
└────────────────────────────────────────────────────────────┘
                              │
                              ▼ (hover → contextual panel)
                    ┌─────────────────────────────┐
                    │ Engineering artefacts and    │
                    │ long-term work.              │
                    │─────────────────────────────│
                    │ Projects                     │
                    │ Systems I've built...        │
                    │ Workflows                    │
                    │ Engineering environments...  │
                    └─────────────────────────────┘

Categories:
  Explore  → Projects, Workflows
  Journey  → Timeline, Work Experience, Education
  Writing  → Blog, Project Journal
  About    → Direct link
```

Data-driven from `data/navigation.toml`. Adding an item = one TOML block.

---

## Timeline (View)

The Timeline is **not a content type** — it's a View that aggregates existing nodes.

```
Timeline
├── queries site.RegularPages by Section
│   ├── projects      → point events (.Date)
│   ├── work-experience → duration events (startDate–endDate)
│   ├── education     → duration events (startDate–endDate)
│   └── workflows     → duration events (startDate–endDate)
├── sorts by date descending
├── groups by year
└── renders: track | title (linked) | duration
```

---

## Homepage

```
┌─────────────────────────────────────┐
│ (from _index.md ## intro)           │  ← Who + what this site is
│                                     │
│ NOW                                 │  ← Hand-written current focus
│ (from _index.md ## now)             │     (from _index.md body)
│                                     │
│ FEATURED WORK                       │  ← Pinned projects (hugo.toml)
│ [card] [card]                       │
│                   All projects →    │
│                                     │
│ ACTIVITY                            │  ← Unified feed (journals +
│ journal  Before summer results  ... │     posts + projects, top 8)
│ post     Is it time for Emacs?  ... │
│ ...                                 │
└─────────────────────────────────────┘

Footer (every page):
  13 projects · 2 journals · 2 posts · building since 2024
  © 2023–2026 Eduards Abishevs
```

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
4. Use `node-meta.html`, `related.html`, `node-nav.html` in layouts
5. Add section-specific metadata rendering only for type-unique fields
6. Add entry to `data/navigation.toml`
7. Add `range` block to `layouts/timeline/list.html` if applicable
8. Duration-based types reuse `.work-entry`, `.work-list`, `.work-meta` classes

**Zero changes needed to:** shared partials, SCSS (unless new visual pattern), JS, data files.

---

## Technical Constraints

- Hugo v0.163.3+extended (LibSass, no Dart Sass)
- SCSS: `@import` only, no `@use`/`@forward`
- No `else with` in Hugo templates — use `else if`
- `cond` evaluates both branches eagerly — use `if/else if` for nullable values
- Site functional without JavaScript (desktop nav via CSS hover)
- Content authored in Org Mode, exported to Hugo markdown

---

## What Exists vs What's Planned

### Implemented ✓
- Knowledge Node architecture (shared partials, data, relationships)
- Projects (with filtering, cards, linkToSource fallback)
- Project Journal (org-mode timestamp extraction, entry index, dedicated list layout)
- Work Experience (3 Ericsson entries)
- Education (Chalmers)
- Workflows (Linux Desktop, Development Environment)
- Timeline Index (aggregates all duration-based types)
- Navigation (intent-based, contextual panels, data-driven)
- Homepage (intro, now, featured, activity feed)
- Footer (knowledge base stats)
- Books (content type with readingStatus/favorite metadata, filters, backlinks, sample content)
- About page (philosophy-focused, no résumé)
- Backlinks (automatic "Linked From" on every Knowledge Node)
- Taxonomy/tag page styling
- Insight Purple accent (research, knowledge, learning)
- Technologies (content type with category/firstUsed/favorite/dailyDriver metadata, auto-discovery from keywords/technologies/tools across site)

### Not Yet Implemented
- Tag enrichment (existing content mostly has empty tags)

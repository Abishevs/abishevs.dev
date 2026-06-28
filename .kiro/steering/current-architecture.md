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
│   ├── timeline/              ← Chronological View (signal traces)
│   ├── graph/                 ← Knowledge Graph View (D3 force-directed)
│   ├── search/                ← Site-wide search
│   └── about.md               ← Philosophy, not résumé
├── data/
│   ├── knowledge/
│   │   ├── statuses.toml      ← Shared status definitions
│   │   ├── domains.toml       ← Shared domain classifications
│   │   ├── tracks.toml        ← Track colors, labels, timeline order (single source)
│   │   ├── profiles.toml      ← Content Profile rendering definitions
│   │   └── labels.toml        ← Shared UI labels (configuration-driven)
│   ├── homepage.toml           ← Homepage section config
│   ├── navigation.toml         ← Nav categories + items + direct links
│   ├── projects/config.toml    ← Project list page labels
│   ├── technologies/config.toml ← Technology list page labels
│   ├── books/config.toml       ← Book list page labels
│   ├── workflows/config.toml   ← Workflow list page labels
│   └── timeline/
│       └── enrichment.json     ← External timeline data (merged at build)
└── themes/maker-log/
    ├── layouts/
    │   ├── _partials/knowledge/   ← Shared Knowledge Node components
    │   │   ├── profile-header.html ← Generic profile-driven renderer
    │   │   ├── related.html        ← Continue Exploring
    │   │   ├── backlinks.html      ← Linked From
    │   │   ├── discovered.html     ← Appears In (technologies)
    │   │   ├── node-meta.html      ← Legacy: status + domains + dates
    │   │   ├── external-links.html ← Generic link renderer
    │   │   └── node-nav.html       ← Section link + prev/next
    │   ├── projects/              ← Project layouts
    │   ├── project-journal/       ← Journal layout
    │   ├── work-experience/       ← Work experience layouts
    │   ├── education/             ← Education layouts
    │   ├── workflows/             ← Workflow layouts
    │   ├── technologies/          ← Technology layouts
    │   ├── books/                 ← Book layouts
    │   ├── timeline/              ← Timeline View (signal traces)
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
        ├── main.js               ← Nav panels + filtering + code copy buttons
        ├── timeline.js           ← Signal trace timeline (data-driven)
        ├── graph.js              ← D3 force-directed knowledge graph
        └── search.js             ← Client-side search
```

---

## Content Profile Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CONTENT PROFILE SYSTEM                             │
│                                                                       │
│  Content (frontmatter)                                                │
│  └── Describes WHAT the node IS                                       │
│       title, description, status, technologies, [[links]], etc.       │
│                                                                       │
│  Profile (data/knowledge/profiles.toml)                               │
│  └── Describes HOW to RENDER it                                       │
│       title field, subtitle fields, meta renderers, techField         │
│                                                                       │
│  Template (profile-header.html)                                       │
│  └── Generic structural LAYOUT                                        │
│       Resolves profile → renders fields → no domain logic             │
│                                                                       │
│  Resolution:                                                          │
│    Page.Params.profile → explicit override                            │
│         ↓ fallback                                                    │
│    profiles._defaults[Page.Section] → section mapping                 │
└─────────────────────────────────────────────────────────────────────┘
```

### Profile Definition Structure

```toml
[project]
techField = "technologies"           # field containing tech badges

[[project.meta]]
field = "status"                     # frontmatter field to read
type = "status"                      # renderer type

[[project.meta]]
field = "projectType"
type = "domains"
```

### Meta Renderer Types

| Type | Renders as | Example |
|------|-----------|---------|
| `status` | Colored status badge | `[ACTIVE]` |
| `domains` | Domain badge group | `Embedded · CLI` |
| `badge` | Single badge | `Language` |
| `flag` | Boolean label | `★ Favorite` |
| `text` | Text with optional prefix | `Since 2022` |

### Adding a New Content Type

1. Add profile to `data/knowledge/profiles.toml`
2. Add section→profile mapping in `[_defaults]`
3. Create `content/<section>/_index.md`
4. Copy any existing `single.html` (they're all identical)
5. Done — no template logic changes needed

---

## Resource System (Links)

```toml
# In any content frontmatter:
[[links]]
label = "Source"
url = "https://github.com/..."

[[links]]
label = "Live Site"
url = "https://example.com"

[[links]]
label = "Documentation"
url = "https://docs.example.com"
```

Labels are freeform. Rendered by `external-links.html` as `Source · Live Site · Documentation`.

---

## Track System (data/knowledge/tracks.toml)

Single source of truth for colors and labels used across Timeline and Graph.

```toml
[project]
section = "projects"
label = "Projects"
color = "#38BDF8"
timelineOrder = 4

[technology]
section = "technologies"
label = "Technologies"
color = "#9F7AEA"
# No timelineOrder = excluded from timeline
```

Controls:
- Timeline filter buttons, JS colors/labels, rendering order
- Graph filter buttons, JS colors/labels
- Footer statistics labels

---

## Timeline V3 — Signal Traces

```
┌──────────────────────────────────────────────────────────────────────┐
│ [2020] [2021] [2022] [2023] [2024] [2025] [2026]  ← year pills      │
├──────────────────────────────────────────────────────────────────────┤
│ Career                                                                │
│ Ericsson — Summer    ░░░░░░░░░░░░░░░░░████                           │
│                                                                       │
│ Education                                                             │
│ Chalmers             ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░→      │
│                                                                       │
│ Projects                                                              │
│ Split Keyboard                      ████    ████                      │
│ MODEST                                                ██              │
└──────────────────────────────────────────────────────────────────────┘

░ = lifetime (dim)    █ = activity (bright)    → = ongoing    ◆ = milestone
```

### Features
- **Percentage-based layout** — responsive, no horizontal scroll
- **Year range selection** — click two years to zoom (adaptive axis: months/quarters/years)
- **Track filtering** — toggle sections on/off
- **Activity segments** — from `[[activity]]` in frontmatter or enrichment JSON
- **Milestones** — clickable diamonds with optional URL
- **Data merging** — items from frontmatter + `data/timeline/*.json` merged by URL
- **Data-driven** — tracks from `tracks.toml`, no hardcoded colors in JS/SCSS

### Enrichment Data Format

```json
[
  {
    "title": "dotfiles",
    "url": "https://github.com/user/dotfiles",
    "track": "workflow",
    "start": "2023-03-15",
    "end": "",
    "current": true,
    "activity": [
      { "start": "2023-03-15", "end": "2023-04-10", "label": "Initial config" }
    ],
    "milestones": [
      { "date": "2023-09-03", "title": "Switched to Hyprland", "url": "/workflows/linux-desktop/" }
    ]
  }
]
```

---

## Configuration-Driven Content

```
┌─────────────────────────────────────────────────────────────────────┐
│                  SEPARATION OF CONCERNS                               │
│                                                                       │
│  Content (content/)          → What knowledge is shared               │
│  Configuration (data/)       → What the interface displays            │
│  Presentation (themes/)      → How it is rendered                     │
│                                                                       │
│  All user-facing text lives in data/ files:                           │
│  ├── labels.toml      → "Continue Exploring", "Updated", "← All"     │
│  ├── homepage.toml    → "Featured Work", "Knowledge System", "Now"    │
│  ├── */config.toml    → filter labels, empty states, section titles   │
│  └── tracks.toml      → track names for timeline/graph/footer         │
│                                                                       │
│  Templates contain ZERO editable prose.                               │
│  Changing wording never requires editing layouts.                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Technology Badges — Auto-Linking

```
Project frontmatter:
  technologies = ["C", "Python", "FreeCAD"]

Rendering:
  [C]        → <a href="/technologies/c/">C</a>        (page exists)
  [Python]   → <a href="/technologies/python/">Python</a>  (page exists)
  [FreeCAD]  → <span>FreeCAD</span>                    (no page)

Technology page "Appears In":
  ← automatically discovers all pages with matching keywords/technologies
```

Bidirectional discovery without manual `related` fields.

---

## Math & Code

### KaTeX Math Rendering
- Inline: `$E = mc^2$`
- Block: `$$\int_0^\infty ...$$ `
- Hugo passthrough delimiters enabled in `hugo.toml`
- KaTeX loaded from CDN, auto-renders on page load
- Block math styled with surface background + border

### Code Blocks
- Hugo Chroma syntax highlighting (class-based, `noClasses = false`)
- Copy button appears on hover (vanilla JS in `main.js`)
- Styled with design system colors (`$color-bg`, `$color-border`)
- Inline `code` gets surface background + border

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
│  ├── technologies    → badges (auto-linked to /technologies/)│
│  ├── related = ["/path/to/other/node", ...]                  │
│  ├── [[links]]       → generic external links                │
│  │   ├── label = "Source"                                    │
│  │   └── url = "https://..."                                 │
│  ├── [[activity]]    → timeline segments                     │
│  ├── [[milestones]]  → timeline markers                      │
│  └── profile-specific fields (tools, author, position, etc.) │
│                                                              │
│  Rendered by profile-header.html:                            │
│  ├── Resolves profile from profiles.toml                     │
│  ├── Renders title (configurable field)                      │
│  ├── Renders subtitle fields                                 │
│  ├── Renders meta (status, domains, badges, flags, text)     │
│  ├── Renders tech badges (auto-linked)                       │
│  └── Renders [[links]]                                       │
│                                                              │
│  Then shared partials:                                        │
│  ├── related.html      → "Continue Exploring"                │
│  ├── backlinks.html    → "Linked From"                       │
│  ├── discovered.html   → "Appears In" (tech only)            │
│  └── node-nav.html     → section link + prev/next            │
└─────────────────────────────────────────────────────────────┘
```

---

## Design System

```
Background:   #111827
Surface:      #1F2937
Text:         #E5E7EB
Muted:        #9CA3AF
Border:       #374151

Primary:      #38BDF8  (Telemetry Blue)
Secondary:    #9F7AEA  (Insight Purple)
Success:      #22C55E
Warning:      #F59E0B
Error:        #EF4444

Track Colors (from tracks.toml):
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

## Technical Constraints

- Hugo v0.163.3+extended (LibSass, no Dart Sass)
- SCSS: `@import` only, no `@use`/`@forward`
- Hugo API: use `hugo.Data` not `site.Data` (deprecated)
- No `else with` in Hugo templates — use `else if`
- Hugo taxonomies disabled — Knowledge Node architecture handles relationships
- Site functional without JavaScript (nav via CSS hover, content always visible)
- Content authored in Org Mode, exported to Hugo markdown
- KaTeX from CDN for math rendering
- D3.js from CDN for graph visualization
- `[[resources]]` is a Hugo reserved key — use `[[links]]` instead
- Math passthrough enabled via `[markup.goldmark.extensions.passthrough]`

---

## Implemented ✓

- Content Profile architecture (generic rendering, data-driven)
- Knowledge Node architecture (shared partials, data, relationships, backlinks)
- Configuration-driven content (all UI text in data/ files)
- Track system (single source: tracks.toml → timeline + graph + footer)
- Timeline V3 — Signal Traces (year selection, activity, milestones, enrichment merge)
- Technology auto-linking (badges link to existing technology pages)
- Math rendering (KaTeX, inline + block)
- Code blocks (syntax highlighting, copy button)
- Resource system (generic [[links]] in frontmatter)
- Projects (filtering by status + domain, cards, linkToSource fallback)
- Project Journal (org-mode timestamp extraction, entry index)
- Work Experience (clickable cards, career profile)
- Education (Chalmers, education profile)
- Workflows (tools, filtering, workflow profile)
- Technologies (auto-discovery, filtering, technology profile)
- Books (readingStatus/favorite, book profile)
- Knowledge Graph (D3 force-directed, filtering, search, focus mode)
- Search (client-side, instant, grouped by section)
- Navigation (intent-based, contextual panels, data-driven)
- Homepage (intro, now, featured, knowledge system, activity feed)
- About page (philosophy-focused)
- 404 page ("Signal Lost" themed)
- Footer (knowledge base stats, data-driven labels)

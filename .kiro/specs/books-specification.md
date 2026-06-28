# Books Specification

## Goal

Implement Books as first-class Knowledge Nodes that document how ideas have influenced engineering thinking.

Books are manually authored, content-first pages enriched by the standard Knowledge Node architecture.

---

# Content Type

Section: `content/books/`

Each book is a single markdown file.

---

# Metadata

Books use a custom metadata model. They do not use the shared project statuses from `statuses.toml`.

Reading status is book-specific: it describes the reading relationship, not a project lifecycle.

```toml
title = ""
description = ""

author = ""
year = ""
readingStatus = ""   # reading | completed | abandoned
favorite = false
related = []
```

## Field Definitions

* **author** — the book's author. Factual. Displayed prominently.
* **year** — publication year. Factual context.
* **readingStatus** — current reading state. Three values only:
  * `reading` — currently being read
  * `completed` — finished reading
  * `abandoned` — stopped reading intentionally
* **favorite** — boolean. Personal signal meaning "this one especially shaped my thinking."
* **related** — standard Knowledge Node relationship paths.

## Fields Excluded

* **status** — the shared project lifecycle statuses (research, planning, active, complete, archived) do not apply. Books have reading states, not project states.
* **domains** — engineering domains classify project scope. Books are classified by their influence, not by domain.
* **rating** — no numeric or star ratings.
* **pages/progress** — no reading statistics.

---

# Reading Status Values

| Value | Meaning | Color |
|-------|---------|-------|
| reading | Currently being read | `#38BDF8` (blue) |
| completed | Finished reading | `#22C55E` (green) |
| abandoned | Stopped intentionally | `#9CA3AF` (muted) |

These are rendered as a simple badge, not from statuses.toml.

---

# Page Structure — Single

```
Header
  Title
  Author · Year
  Reading status badge
  Favorite indicator (if true)

Body (authored markdown)
  ## Why I Read This
  ## Key Ideas
  ## Influence on Engineering

Relationships
  knowledge/related.html    (Continue Exploring)
  knowledge/backlinks.html  (Linked From)
  knowledge/node-nav.html   (section link + prev/next)
```

The markdown structure is suggested, not enforced.

---

# Page Structure — List

```
Header
  Title
  Description

Filters
  Reading Status (reading | completed | abandoned)
  ★ Favorite

Book entries (grouped or flat, sorted by date desc)
  Title + Author
  Reading status badge
  Favorite star (if true)
  Description
```

Uses existing filter architecture (proj-filters, filter-chip, proj-card JS).

---

# List Page Filters

| Filter | Rationale |
|--------|-----------|
| Reading Status | Visitors can see what I'm currently reading vs what shaped me historically |
| Favorite | Highlights the most influential books |

Filters intentionally excluded:
* Domain — books cross domains; classification is reductive
* Language — not meaningful for discovery with a small curated collection
* Year — publication year is metadata, not a discovery axis

---

# Relationships

Books use the standard `related` field.

Example:
```toml
related = ["/projects/modest", "/technologies/c", "/workflows/embedded-development"]
```

These render via `knowledge/related.html` (grouped by section, "Continue Exploring").

Backlinks render via `knowledge/backlinks.html` — when a Project or Technology references a Book in its own `related` field, the Book page shows "Linked From".

---

# Navigation

Already present in `data/navigation.toml` under Explore:
```toml
[[explore.items]]
name = "Books"
url  = "books/"
desc = "Ideas that influenced my engineering thinking."
```

No changes needed.

---

# SCSS

Reuse existing classes: `.work-list`, `.work-entry`, `.page-header`, `.proj-filters`, `.filter-chip`.

New classes needed:
* `.book-meta` — author + year + reading status on single page
* `.book-meta__author` — author styling
* `.book-meta__year` — year styling
* `.book-badge--reading` / `--completed` / `--abandoned` — reading status colors
* `.book-entry__fav` — favorite star on list cards

Minimal additions. No new visual patterns.

---

# Design

Book pages use Insight Purple (`#9F7AEA`) as their accent where appropriate (per design system: purple for knowledge, research, learning, books).

The reading status badge uses semantic colors (blue for active reading, green for completed, muted for abandoned).

---

# Future Expansion

The architecture supports without redesign:

* More books (curated, not comprehensive)
* Additional relationship types
* Timeline integration (if books gain date-completed metadata)
* Technology pages recommending relevant books via backlinks
* Search integration

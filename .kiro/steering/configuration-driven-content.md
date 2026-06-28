# Configuration-Driven Content

## Purpose

The website should separate **content**, **configuration**, and **presentation**.

A theme should define how information is rendered.

It should not contain user-authored text that is expected to evolve over time.

Whenever practical, editable text should live outside the theme so it can be updated without modifying layouts or presentation logic.

---

# Separation of Responsibilities

Each layer has a single responsibility.

## Content

`content/`

Contains authored Knowledge Nodes.

Examples include:

* Projects
* Technologies
* Workflows
* Books
* Posts
* Work Experience
* Education

These represent the knowledge base itself.

---

## Configuration

`data/`

Contains structured information that controls behaviour, labels, descriptions and reusable content.

Examples include:

* navigation
* homepage sections
* filter labels
* status definitions
* domain definitions
* UI descriptions
* section introductions
* timeline labels
* card metadata

Configuration should describe **what** the interface should display.

It should not contain presentation logic.

---

## Presentation

`themes/`

Contains layouts, partials, SCSS and JavaScript.

Presentation determines:

* structure
* rendering
* styling
* interaction

Presentation should avoid embedding editable prose whenever possible.

---

# Editable Text

Any text that is expected to evolve over time should preferably be stored in configuration rather than templates.

Examples include:

* navigation descriptions
* section introductions
* card descriptions
* helper text
* empty-state messages
* filter names
* homepage copy
* timeline descriptions

Changing wording should not require editing template files.

---

# Stable Text

Some text belongs naturally inside templates because it is part of the presentation itself.

Examples include:

* semantic HTML
* accessibility labels
* structural wrappers
* generic UI behaviour

These should remain implementation details of the theme.

---

# Configuration over Hardcoding

Whenever a value is likely to be customized or iterated upon, prefer configuration over hardcoded strings.

For example:

Instead of:

```go-html-template
<h2>Featured Work</h2>
<p>Projects I'm particularly proud of.</p>
```

Prefer:

```go-html-template
{{ $cfg := site.Data.homepage.featured }}

<h2>{{ $cfg.title }}</h2>
<p>{{ $cfg.description }}</p>
```

The template remains responsible for layout.

The data remains responsible for wording.

---

# Structured Data

Configuration should remain structured rather than becoming large blocks of markdown.

Prefer:

```toml
[featured]

title = "Featured Work"

description = "Projects that best represent my engineering interests."
```

over embedding long HTML or presentation-specific formatting.

Large authored documents should instead remain regular content pages.

---

# Theme Portability

The theme should remain portable.

A different user adopting the theme should be able to:

* change wording,
* rename sections,
* customize navigation,
* rewrite homepage descriptions,

without modifying layouts or source code.

Whenever possible, customization should occur through data files.

---

# Maintainability

Changing wording should never require searching through templates.

A developer should immediately know where editable text belongs.

Templates should become increasingly generic over time.

Data should become increasingly expressive.

---

# Design Principle

The presentation layer answers:

> "How should this be displayed?"

The configuration layer answers:

> "What should be displayed?"

The content layer answers:

> "What knowledge is being shared?"

Maintaining this separation keeps the architecture easier to understand, easier to customize and easier to evolve as the knowledge system grows.


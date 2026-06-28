# Engineering Semantics

## Purpose

The website is an engineering publishing platform rather than a traditional blog.

Authors should describe engineering concepts rather than presentation.

Whenever possible, standard Org Mode constructs should be interpreted semantically and rendered using engineering-oriented components.

Presentation should be inferred from meaning rather than manually specified.

---

# Philosophy

The author writes:

* source code
* mathematics
* figures
* tables
* diagrams
* executable examples

The theme determines how these should be presented.

The author should not think about HTML, CSS, Hugo shortcodes or visual styling.

---

# Standard Org Mode First

Prefer standard Org Mode whenever possible.

Avoid introducing custom shortcodes simply to achieve presentation.

The preferred workflow is:

Org

↓

ox-hugo

↓

Markdown

↓

Semantic interpretation

↓

Engineering components

---

# Semantic Rendering

The theme should identify engineering concepts rather than isolated Markdown constructs.

Examples:

Source code

↓

Engineering Example

Mathematics

↓

Equation Block

Figure

↓

Engineering Figure

Terminal Session

↓

Terminal Component

Simulation

↓

Simulation Result

Protocol Description

↓

Protocol Visualization

---

# Presentation from Meaning

The language of a source block should influence its presentation.

Examples:

Shell languages

↓

Terminal

Programming languages

↓

Source Code

Diagram languages

↓

Diagram Renderer

Mathematics

↓

Equation Renderer

The author should not manually choose presentation components.

---

# Progressive Enhancement

The semantic interpretation layer should remain extensible.

Adding support for new engineering concepts should require minimal changes to existing templates.

Future renderers should integrate naturally with the existing semantic architecture.

---

# Design Principle

Content describes engineering intent.

The theme determines engineering presentation.

Presentation should never leak into authoring.

The author should remain focused on engineering knowledge rather than website implementation.


# Engineering Publishing Specification

## Purpose

The website is authored primarily using Org Mode and exported through ox-hugo.

It should therefore provide first-class support for publishing technical engineering content rather than behaving like a generic blog.

Engineering content should render naturally without requiring manual HTML or custom markdown for common technical constructs.

The theme should treat engineering communication as a first-class concern.

---

# Philosophy

An engineering document is more than paragraphs.

It consists of multiple complementary forms of communication.

Examples include:

* mathematics
* source code
* algorithms
* diagrams
* figures
* tables
* references
* callouts
* engineering notes

The theme should render these consistently throughout every Knowledge Node.

---

# Org Mode First

Org Mode should remain the primary authoring format.

Authors should be encouraged to use standard Org syntax rather than Hugo-specific shortcodes whenever possible.

The preferred workflow is:

Org Mode

↓

ox-hugo

↓

Markdown

↓

Hugo

↓

Engineering website

The implementation should preserve this pipeline.

---

# Mathematics

Support both inline and display mathematics.

Examples:

Inline

```latex
\( E = mc^2 \)
```

Display

```latex
\[
\int_a^b f(x)\,dx
\]
```

The rendering engine should produce high-quality typography suitable for engineering documentation.

The implementation should evaluate KaTeX as the preferred renderer due to performance and visual quality.

Math should integrate naturally into articles without requiring manual HTML.

---

# Source Code

Source code should be treated as a first-class content type.

Support:

* syntax highlighting
* line numbers
* filenames
* captions
* language detection
* copy button
* line highlighting (future)

Use Hugo's Chroma highlighter wherever practical.

Avoid introducing custom syntax highlighting systems.

---

# Figures

Figures should support:

* captions
* numbering (future)
* labels
* cross references (future)

Images should remain responsive.

Engineering figures should receive more visual emphasis than decorative imagery.

---

# Tables

Support complex engineering tables.

Tables should remain readable on mobile.

Investigate responsive overflow behaviour without sacrificing semantics.

Avoid converting tables into cards.

---

# Callouts

Support semantic engineering callouts.

Examples include:

* Note
* Warning
* Tip
* Important
* Definition
* Observation

These should be authored using standard Org constructs whenever possible.

Rendering should remain visually consistent across the website.

---

# Footnotes

Support Org Mode footnotes.

Rendering should prioritize readability.

Future enhancements may include:

* hover previews
* backlink navigation

---

# Cross References

Support future cross-referencing between:

* figures
* equations
* sections
* tables

The implementation should avoid preventing future numbered references.

---

# Diagrams

Investigate first-class support for engineering diagrams.

Potential candidates include:

* Mermaid
* Graphviz
* PlantUML

The architecture should make diagram rendering extensible without coupling the theme to one specific technology.

---

# Inline Technical Elements

Support common inline constructs.

Examples include:

* inline code
* keyboard shortcuts
* filenames
* commands
* variables

These should be visually distinct while remaining unobtrusive.

---

# Technical Metadata

Code blocks may expose additional metadata.

Potential examples:

* filename
* language
* caption
* execution result (future)

The renderer should gracefully support additional metadata without requiring layout changes.

---

# Progressive Enhancement

The implementation should remain functional without JavaScript whenever possible.

Interactive enhancements such as:

* copy buttons,
* equation references,
* collapsible code,

should progressively enhance rather than replace the underlying HTML.

---

# Theme Architecture

Rendering should remain modular.

Possible partials include:

* math
* code
* figures
* tables
* callouts
* diagrams

Each renderer should remain independently maintainable.

---

# Design Philosophy

The website should resemble an engineering notebook or technical documentation rather than a traditional blog.

A visitor should feel equally comfortable reading:

* mathematical derivations,
* embedded firmware articles,
* ASIC verification notes,
* robotics documentation,
* engineering journals.

The rendering system should support these naturally without requiring authors to think about presentation.

The theme should adapt to engineering content rather than requiring engineering content to adapt to the theme.


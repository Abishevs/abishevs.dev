# Architecture

## Existing Site Requirements

Maintain support for:

- Hugo taxonomies
- tags
- categories
- series
- authors

Maintain support for:

- menu.main

Maintain support for:

- existing archetypes

Maintain support for:

- Org Mode generated markdown

Do not introduce requirements that break Org Mode export.

Static site generator:
Hugo

Theme:
Custom Hugo theme

Content source:
Org Mode exported to Hugo markdown

Styling:
SCSS

Interactivity:
Vanilla JavaScript

Avoid:

- React
- Vue
- Angular
- Tailwind

Use:

- Hugo templates
- Hugo partials
- Hugo taxonomies
- Hugo frontmatter

The site should remain fully functional without JavaScript.

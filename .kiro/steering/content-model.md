# Content Model

The site consists of the following content types.

## Posts

Frontmatter:

- title
- description
- slug
- authors
- tags
- categories
- externalLink
- series

Must remain supported.

## Projects

Frontmatter:

- status
- projectType
- thumbnail
- technologies
- linkToSource
- related
- startDate, endDate

Resources (generic):

```toml
[[links]]
label = "Source"
url = "https://github.com/..."

[[links]]
label = "Live Site"
url = "https://example.com"
```

Timeline data (optional):

```toml
[[activity]]
start = "2025-01-01"
end = "2025-03-15"
label = "Sprint description"

[[milestones]]
date = "2025-03-15"
title = "Milestone name"
url = "/optional/link/"
```

Must remain supported.

Contains:

- Overview
- Status
- Journal entries
- Build logs
- Changelog

Possible statuses:

- Research
- Planning
- Active
- Prototype
- Testing
- Deployed
- Complete
- Archived

## Project Journal

Markdown structure:

# Notes

## Entry

Entry is in a specific format always aswell, that can be used!

format is: [2026-05-16 Sun 4:08] 

Multiple journal entries may exist under the same page.

The theme should support visual styling of Entry sections.

Examples:

- Learning notes
- Progress updates
- Technical discoveries

Do not require changing journal structure.

## Books

Ideas that influenced engineering thinking.

## Movies

Viewing log and reviews.

## References

External resources worth keeping.

## Tooling

Workflows, editors, configurations, scripts.

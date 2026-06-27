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
- demoUrl
- reportUrl
- journalUrl
- sourceCodeUrl
- linkToSource

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

Reading log and reviews.

## Movies

Viewing log and reviews.

## References

External resources worth keeping.

## Tooling

Workflows, editors, configurations, scripts.

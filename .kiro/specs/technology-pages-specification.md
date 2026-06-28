# Technology Pages Specification

## Goal

Implement Technology pages as first-class Knowledge Nodes that connect every major content type across the website.

Technology pages are manually authored documents enriched by automatically discovered relationships.

They are intended to become the primary exploration hubs of the knowledge system.

---

# Content Type

Create a new content section:

```text
content/technologies/
```

Each technology is its own Knowledge Node.

Examples:

```
c.md
rust.md
python.md
linux.md
git.md
neovim.md
systemverilog.md
stm32.md
mqtt.md
docker.md
```

---

# Page Structure

Technology pages remain content-first.

The markdown body is authored manually.

The layout enriches the content with automatically generated relationship sections.

Suggested order:

```
Hero

Metadata

Overview

Experience & Thoughts

Journey

Automatically Related Content

Continue Exploring
```

---

# Hero

Display:

* title
* short summary
* optional logo/icon
* category
* first used (optional)
* favorite indicator (if true)
* daily driver indicator (if true)

---

# Authored Content

The markdown should focus on:

* why I use it
* how I discovered it
* engineering philosophy
* lessons learned
* tradeoffs
* personal experiences
* interesting observations

Do not encourage encyclopedia-style definitions.

---

# Automatically Discovered Relationships

Automatically discover references from every Knowledge Node.

Supported sources include:

* Projects
* Workflows
* Work Experience
* Education
* Project Journal
* Blog Posts

Grouping should preserve content type.

Example:

Projects

* CAN Bus Analyzer
* Robotic Arm

Workflows

* Embedded Development

Experience

* Ericsson Internship

Posts

* Why I Switched to Neovim

Project Journal

* Robotic Arm Development Log

---

# Journey

Optionally display a chronological timeline of significant interactions with the technology.

Possible sources:

* manually authored milestones
* Timeline events
* project dates
* work experience

The goal is to show how the relationship evolved.

---

# Related Technologies

Support manually curated relationships.

Examples:

C

↓

Related

* Make
* GCC
* GDB
* STM32
* FreeRTOS

This relationship is authored rather than inferred.

---

# Evidence Summary

Instead of proficiency ratings, display factual information.

Examples:

* First used
* Active workflows
* Projects
* Professional experience
* Journal entries
* Articles

These should summarize the evidence available throughout the knowledge system.

---

# Navigation

Technology pages should encourage exploration.

Example footer:

Continue Exploring

Projects

Workflows

Timeline

Related Technologies

---

# Data Model

Technology pages do not use the shared project status system.

See the Technology Philosophy steering document for rationale.

Suggested frontmatter:

```yaml
title:

summary:

category:

firstUsed:

favorite:

dailyDriver:

related:

relatedTechnologies:

aliases:

tags:
```

Field definitions:

* **category** — technology classification (language, tool, platform, framework, library, standard, protocol, hardware). Supports filtering and grouping on list pages.
* **firstUsed** — approximate year or date when the relationship began. Factual, not evaluative.
* **favorite** — boolean. Personal affinity signal. Does not measure skill.
* **dailyDriver** — boolean. Currently part of the active engineering toolbox. Expected to change over time.
* **related** — paths to other Knowledge Nodes (standard relationship model).
* **relatedTechnologies** — paths to other Technology pages (manually curated connections).
* **aliases** — alternative names for discovery (e.g., "C language", "ANSI C").
* **tags** — standard Hugo taxonomy.

Fields explicitly excluded:

* **status** — technologies do not have lifecycles. The shared statuses.toml is designed for projects.
* **domains** — engineering domains describe project scope, not technology identity. Category serves this purpose for technologies.

The markdown body remains intentionally flexible.

---

# Future Compatibility

The architecture should support future additions without redesign.

Examples:

* search
* backlinks
* usage statistics
* technology graphs
* dependency visualization
* timeline integration
* featured technologies

---

# Design Principles

Technology pages should feel like engineering notebooks rather than reference manuals.

The visitor should leave understanding:

* why this technology matters,
* how it shaped my engineering journey,
* where it appears across the website,
* and what to explore next.

Every Technology page should strengthen the interconnected nature of the website.


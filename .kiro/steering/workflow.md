# Workflow Philosophy

## Purpose

A Workflow represents **how I work**, not merely which software I use.

The website distinguishes between technologies, projects, experience, timeline events and workflows because each answers a different question.

* **Explore** answers *"What is this technology, tool or concept?"*
* **Projects** answer *"What have I built?"*
* **Experience** answers *"Where have I worked or studied?"*
* **Timeline** answers *"When did something happen?"*
* **Workflows** answer *"How do I combine all of these into my engineering practice?"*

A Workflow is therefore an engineering system rather than a single tool.

Examples include:

* Linux Desktop
* Embedded Development
* RTL / ASIC Development
* Mechanical CAD
* Electronics Design
* University Study
* Writing & Documentation
* Knowledge Management

Software such as Neovim, tmux, Arch Linux or KiCad are components of workflows rather than workflows themselves.

---

# Identity vs State

Every Workflow has a stable identity but an evolving state.

The Workflow page should remain the same URL throughout its lifetime while its current configuration evolves.

Instead of creating "Workflow v2" or "Workflow v3", the page continuously documents the current state while preserving its history.

Visitors should always understand:

* why this workflow exists,
* how it works today,
* how it evolved,
* and what lessons were learned along the way.

---

# Structure

Every Workflow should naturally be divided into four conceptual sections.

## Overview

The timeless philosophy.

This section explains:

* why the workflow exists,
* the engineering philosophy behind it,
* guiding principles,
* tradeoffs,
* intended use cases.

This changes infrequently.

---

## Current Setup

The living implementation.

Examples include:

* operating system
* editor
* terminal
* compiler
* debugger
* hardware
* automation
* scripting
* build system
* aliases
* dotfiles
* keybindings
* supporting tools

This section is expected to evolve frequently.

It represents today's workflow rather than historical snapshots.

---

## Evolution

Every Workflow tells a story.

Instead of versioned pages, each Workflow maintains an evolution timeline describing significant milestones.

Examples:

* adopted a new editor
* migrated operating systems
* replaced build systems
* simplified tooling
* removed unnecessary complexity
* major redesigns

The evolution section should explain *why* changes were made rather than merely listing them.

Growth is part of the portfolio.

---

## Resources

Supporting material associated with the workflow.

Examples:

* dotfiles
* repositories
* templates
* scripts
* screenshots
* diagrams
* articles
* videos
* references

Resources should complement the workflow rather than duplicate information found elsewhere.

---

# Relationship with Explore

Explore contains reusable building blocks.

Examples:

* Neovim
* tmux
* Arch Linux
* KiCad
* STM32
* C
* SystemVerilog

Workflow pages should reference these entities instead of repeating their documentation.

Explore explains individual tools.

Workflows explain how those tools are combined.

---

# Relationship with Timeline

Timeline records when important workflow changes occurred.

Examples:

* Started using Arch Linux
* Switched from VS Code to Neovim
* Adopted tmux
* Built first custom dotfiles
* Migrated to DWM

Timeline entries link back to their corresponding Workflow whenever appropriate.

The Workflow itself contains a narrative evolution, while the Timeline contains chronological milestones across the entire website.

---

# Relationship with Projects

Projects should reference the Workflow used during development.

Likewise, Workflow pages should showcase representative projects that demonstrate the workflow in practice.

This creates a two-way relationship between engineering practice and engineering output.

---

# Design Philosophy

Workflow pages are not blogs.

They are not tutorials.

They are not changelogs.

They are engineering documentation describing a continuously evolving way of working.

The goal is to communicate engineering thinking rather than simply listing software.

Visitors should leave understanding not only what tools are used, but why those tools were chosen, how they fit together and how the workflow has matured over time.


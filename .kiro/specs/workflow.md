# Workflow Feature Specification

## Goal

Implement a first-class **Workflows** section that showcases engineering practices rather than individual technologies.

A Workflow is a living document describing how a complete engineering environment is assembled, why it exists, how it evolved and which technologies, projects and experiences are connected to it.

This section should become one of the defining features of the website and differentiate it from traditional portfolio sites.

---

# Navigation

Create a Explore level navigation entry:

```
Workflows
```

The page should contain:

* Featured workflows
* Search
* Filters
* Categories
* Recently updated
* Active vs Archived workflows

Example cards:

```
Embedded Development
Linux Desktop
RTL / ASIC Development
Mechanical CAD
Writing & Documentation
Knowledge Management
Website Development
```

---

# Workflow Data Model

Each Workflow has a permanent identity.

Required metadata:

```
title
slug
summary
status (active | archived | experimental)

started
lastUpdated

category

tags

coverImage (optional)

featured (bool)

relatedProjects[]
relatedExperience[]
relatedTimeline[]
relatedExplore[]

resources[]
```

---

# Workflow Page Layout

Every Workflow page follows the same structure.

```
Hero
Overview
Current Setup
Evolution
Resources
Related Content
```

Each section has a clear responsibility.

---

# Hero

Contains:

* title
* short description
* status badge
* start date
* last updated
* category
* estimated maturity
* quick statistics

Example statistics:

* Technologies used
* Related projects
* Years maintained
* Resources available

---

# Overview

Purpose:

Explain the engineering philosophy.

Should answer:

* Why does this workflow exist?
* What problems does it solve?
* Why this approach instead of alternatives?
* What principles guide it?
* Who is it intended for?

This section should read like an engineering article rather than documentation.

---

# Current Setup

This is the living implementation.

Organize information into reusable cards.

Possible groups include:

```
Operating System

Editor

Terminal

Shell

Programming Languages

Compilers

Build Systems

Debuggers

Version Control

Automation

Testing

Documentation

Hardware

Utilities

Productivity

Communication
```

Every tool references an Explore page whenever available.

Each card may include:

* short description
* purpose
* why it was chosen
* alternatives considered
* links
* screenshots
* configuration snippets

---

# Evolution

The evolution section is chronological.

Each milestone contains:

```
date

title

summary

reason

impact

optional images
```

Example:

```
2023

Migrated from VS Code to Neovim

Reason

Wanted a faster keyboard-driven workflow.

Impact

Unified development environment across embedded, systems and website projects.
```

Evolution should emphasize decisions and lessons rather than feature changes.

---

# Resources

Optional but encouraged.

Supported resource types:

* Git repositories
* Dotfiles
* Configuration files
* Scripts
* Templates
* Articles
* Videos
* Images
* Documentation

Resources should appear as reusable cards.

---

# Related Content

Automatically display relationships.

Projects

```
Robotic Arm

Website

...
```

Experience

```
Work expierience

University

...
```

Explore

```
Neovim

Arch Linux

tmux

Git

C

STM32
```

Timeline

Relevant milestones connected to this workflow.

---

# Timeline Integration

Workflow milestones should automatically appear on the global timeline.

Examples:

```
Started using Arch Linux

Built first DWM configuration

Migrated to tmux

Created personal dotfiles

Switched to stow 

```

Timeline entries should link back to the Workflow page.

---

# Search

Users should be able to search by:

* workflow title
* technology
* category
* tags
* related project
* related experience

---

# Filtering

Support filtering by:

Status

* Active
* Archived
* Experimental

Category

Technology

Engineering Discipline

Recently Updated

---

# Cross Linking

The website should feel like a connected knowledge graph.

Example:

Explore (Neovim)

↓

Referenced by

* Linux Desktop
* Embedded Development
* Website Development

Workflow

↓

Used in

* Robotic Arm
* Personal Website

Project

↓

Developed with

* Linux Desktop Workflow

Experience

↓

Used professionally during work. 

Navigation between these entities should require as few clicks as possible.

---

# Future Expansion

The architecture should support future additions such as:

* setup screenshots
* hardware galleries
* embedded diagrams
* downloadable dotfiles
* benchmark results
* version history
* statistics
* workflow comparison
* interactive architecture diagrams

The data model should be extensible without requiring structural redesign.

---

# Design Principles

Workflow pages are:

* Living documents
* Engineering handbooks
* Highly interconnected
* Long-form where appropriate
* Technical without becoming tutorials
* Opinionated
* Focused on engineering decisions

They are NOT:

* Blog posts
* Changelogs
* Tool documentation
* Static portfolio pages
* Software manuals

A visitor should finish reading a Workflow with a clear understanding of **how the engineering environment works, why each decision was made and how it evolved over time.**


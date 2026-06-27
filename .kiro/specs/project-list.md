# Projects

## Purpose

The Projects page is the primary hub of the website.

It serves as the entry point into all engineering projects and should communicate what I am currently building, researching, or maintaining.

This page should prioritize exploration and discovery over acting as a traditional portfolio.

Visitors should be encouraged to browse projects, understand what they are about, and dive into individual project pages.

---

## Goals

The page should:

* Present all projects in a visually consistent way.
* Make it easy to identify active and archived work.
* Encourage exploration through project cards.
* Showcase engineering work rather than marketing accomplishments.
* Feel like browsing an engineering notebook rather than a portfolio.

---

## Constraints

The implementation **must remain fully backwards compatible** with the existing Hugo content model.

Do not require:

* changes to existing frontmatter
* changes to archetypes
* changes to URLs
* changes to Org Mode exports
* changes to existing markdown

Use the existing project frontmatter when available.

Additional optional frontmatter fields may be introduced only if they are completely optional and existing projects continue to render correctly.

---

## Project List Layout

Projects should be presented as cards in a responsive grid.

Each project card should display:

* Thumbnail (when available)
* Project title
* Short description
* Project status
* Project type
* Tags (optional)

Cards should have a clear visual hierarchy and should encourage clicking through to the full project page.

Cards should not resemble modern SaaS feature cards.

Instead, they should feel closer to engineering documentation or technical notebook entries.

---

## Project Status

Status should be visually emphasized.

Supported values:

* Active
* Prototype
* Archived
* Deployed

Status should immediately communicate the maturity of the project.

---

## Project Type

Project type is secondary metadata.

Examples:

* Embedded
* CLI
* Tooling
* Web
* Simulation

This should help visitors quickly understand the project's domain.

---

## Individual Project Page

Each project has its own page.

The project page should feel like opening a project's engineering notebook.

It should be documentation-first rather than presentation-first.

The content written in markdown is the primary focus.

The layout should enhance the content rather than replace it.

---

## Project Metadata

Display project metadata near the top of the page.

Possible information:

* Status
* Project Type
* Date
* Source Code
* Demo
* Report
* Journal

Only display links that exist.

---

## Content Sections

The existing markdown structure should remain unchanged.

Current sections include:

* Overview
* Background
* Motivation
* Features
* How It Works
* Challenges
* Current Status
* Journal Entries
* Lessons Learned

The theme should visually distinguish these sections while preserving the markdown structure.

---

## Navigation

If a project journal exists, provide an easy way to navigate to it.

Likewise, project journals should make it easy to return to the associated project.

Navigation should feel seamless.

---

## Design Direction

The page should communicate:

* curiosity
* experimentation
* engineering
* systems thinking

Avoid:

* corporate portfolio layouts
* startup landing page aesthetics
* excessive whitespace
* oversized hero sections
* marketing language

Prefer:

* technical documentation
* engineering notebooks
* readable typography
* moderate information density
* clear visual hierarchy

---

## Success Criteria

A visitor should be able to:

* quickly understand what each project is
* distinguish active work from archived work
* navigate naturally into project pages
* continue exploring related engineering work

The Projects page should become the primary exploration hub of the website.

## Project Navigation & Filtering

The Projects page should help visitors explore projects without becoming cluttered.

Filtering should feel like navigating technical documentation rather than using an e-commerce catalog.

---

### Status Overview

Provide a compact overview of project status.

Example:

```
Active (5)
Prototype (3)
Archived (8)
Deployed (2)
```

Status should be visually emphasized and easy to scan.

---

### Project Domains

Projects should also be browsable by engineering discipline.

Examples include:

* Embedded
* Electronics
* Mechanical
* Robotics
* Simulation
* Tooling
* CLI
* Web
* PCB
* 3D Printing

A project may belong to multiple domains.

The goal is to communicate the multidisciplinary nature of the projects rather than forcing every project into a single category.

---

### Presentation

Status and project domains should appear as compact clickable chips.

Counts may be displayed to indicate the number of matching projects.

The presentation should remain subtle.

Avoid large tag clouds or oversized filtering interfaces.

The controls should feel similar to metadata found in technical documentation.

---

### Layout

Filtering controls should appear above the project grid.

They should act as an overview of the project collection rather than dominating the page.

The project cards should remain the primary visual focus.

---

### Filtering Behaviour

Filtering should be optional.

Visitors should immediately see all projects without interacting with filters.

Selecting one or more filters should progressively narrow the visible projects.

Multiple filters should be combinable when appropriate.

---

### Design Philosophy

The filtering system should communicate:

* organization
* engineering discipline
* structure
* discoverability

It should not feel like:

* a product catalogue
* a shopping website
* a tag cloud
* a dashboard full of statistics

The emphasis remains on exploring engineering work, not navigating data.


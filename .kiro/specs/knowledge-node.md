# Knowledge Node

## Purpose

A Knowledge Node is the fundamental building block of the Maker Log website.

Every meaningful piece of engineering knowledge published on the website is represented as a Knowledge Node.

Projects, articles, work experience, workflows, books and future content types are all specialized Knowledge Nodes.

This specification defines the common architecture shared by every Knowledge Node.

Individual content type specifications should only define what makes that content unique.

---

# Philosophy

The website is not a collection of independent pages.

It is an interconnected engineering knowledge system.

Knowledge Nodes exist independently from the pages that present them.

A single Knowledge Node may appear in multiple Views without duplication.

Examples include:

* Homepage
* Project Index
* Timeline Index
* Related Content
* Search
* Future Knowledge Graph

Knowledge should be written once and reused everywhere.

---

# Design Goals

Knowledge Nodes should:

* be self-contained
* be reusable
* encourage exploration
* expose relationships
* provide engineering context

Knowledge Nodes should avoid:

* isolated information
* duplicate content
* dead ends
* unnecessary navigation

Every Knowledge Node should naturally lead visitors towards related knowledge.

---

# Core Principles

Every Knowledge Node should answer four questions.

## What is it?

The primary purpose of the node.

Examples:

Project

Book

Workflow

Article

Technology

Work Experience

---

## Why does it exist?

Provide engineering motivation.

Explain why the node matters.

Focus on engineering decisions rather than achievements.

---

## How does it connect?

Expose meaningful relationships.

Knowledge becomes valuable through context.

---

## Where can I continue?

Every page should naturally lead to additional exploration.

Visitors should rarely reach a dead end.

---

# Common Metadata

Every Knowledge Node should expose consistent metadata.

Required:

* Title
* Description
* Date or Start Date

Optional:

* Last Updated
* Status
* Domains
* Tags
* Authors
* Thumbnail
* External Links

The exact metadata depends on the content type.

Presentation should remain visually consistent throughout the website.

---

# Relationships

Relationships are first-class metadata.

Relationships should communicate engineering context rather than simple hyperlinks.

Possible relationships include:

* Related Projects
* Related Articles
* Related Books
* Related Technologies
* Related Workflows
* Related Work Experience
* Related Education
* Related Timeline Events
* Related Learning Topics

Future relationship types should be supported.

Relationships should remain optional.

---

# Navigation

Navigation should encourage exploration.

Every Knowledge Node should naturally expose related nodes.

Typical navigation:

Project

↓

Journal

↓

Technology

↓

Timeline

↓

Work Experience

↓

Related Project

↓

Book

↓

Article

The visitor should feel guided rather than redirected.

---

# Shared Layout

Every Knowledge Node should follow a consistent information hierarchy.

Recommended structure:

Metadata

↓

Summary

↓

Main Content

↓

Related Knowledge

↓

Timeline Context

↓

Navigation

Individual content types may extend this structure.

---

# Timeline Integration

Every Knowledge Node may optionally participate in the Timeline Index.

Timeline participation should remain independent from page layout.

Timeline metadata may include:

* Start Date
* End Date
* Timeline Track
* Related Events

Timeline participation should require minimal additional configuration.

---

# Classification

Knowledge Nodes participate in the Classification System.

Status

Exactly one.

Domains

Zero or more.

Tags

Zero or more.

Classification should remain reusable across all content types.

---

# Related Knowledge

Every Knowledge Node should expose a Related Knowledge section whenever meaningful.

Possible sections include:

Related Projects

Related Articles

Related Workflows

Related Technologies

Related Books

Related Work Experience

Related Timeline Events

Only display sections that contain content.

Avoid empty placeholders.

---

# Context

Knowledge should always be presented within context.

Examples:

A Project should expose:

* Technologies
* Timeline
* Journal
* Related Work

A Book should expose:

* Projects inspired
* Related Articles

A Workflow should expose:

* Related Projects
* Related Tools
* Timeline

The goal is to answer:

"Why is this connected?"

rather than merely displaying links.

---

# Metadata Presentation

Metadata should resemble engineering documentation.

Prioritize:

* clarity
* consistency
* scanability

Avoid decorative presentation.

Metadata should appear calm and technical.

Examples include:

Status

Domains

Started

Updated

Organization

Technologies

---

# Reusable Components

The implementation should provide reusable components shared by every Knowledge Node.

Examples include:

* Metadata block
* Related Knowledge block
* Timeline block
* Status badge
* Domain badge
* External links
* Section headers
* Navigation footer

Content types should compose these components rather than duplicate them.

---

# Extensibility

Future Knowledge Nodes should require minimal implementation.

Adding a new content type should primarily involve:

* defining frontmatter
* defining page content
* defining relationships

Existing shared components should automatically provide:

* metadata
* navigation
* related content
* timeline integration
* classification

The architecture should minimize duplication.

---

# Future Compatibility

The implementation should remain compatible with future features including:

* Timeline Index
* Search
* Knowledge Graph
* Backlinks
* Relationship Explorer
* Related Content
* Recommendations

No Knowledge Node should assume a particular View.

Views should consume Knowledge Nodes rather than the reverse.

---

# Engineering Principles

Every Knowledge Node should communicate engineering thinking rather than self-promotion.

Emphasize:

* motivation
* experimentation
* design decisions
* lessons learned
* engineering trade-offs
* evolution

The website documents engineering growth rather than accomplishments.

---

# Implementation Roadmap

## Phase 1

Introduce shared metadata architecture.

---

## Phase 2

Introduce reusable relationship model.

---

## Phase 3

Introduce shared Knowledge Node components.

* Metadata
* Related Knowledge
* Navigation
* Timeline integration

---

## Phase 4

Refactor existing Project pages to adopt the Knowledge Node architecture.

---

## Phase 5

Implement future content types using this specification rather than creating bespoke page architectures.

---

# Success Criteria

The Knowledge Node architecture is successful when:

* Every content type feels consistent.
* Shared components are reused throughout the theme.
* Visitors naturally discover related engineering knowledge.
* New content types require minimal implementation effort.
* The website increasingly resembles an interconnected engineering handbook rather than a collection of independent pages.

Every future feature should build upon the Knowledge Node architecture rather than bypassing it.


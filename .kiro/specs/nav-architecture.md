# Navigation Architecture

## Purpose

The current navigation exposes the website's directory structure.

As the Maker Log knowledge system grows, this approach does not scale.

The navigation should instead expose **ways of exploring engineering knowledge**.

Visitors should navigate by intent rather than by content type.

The navigation should remain compact regardless of how many Knowledge Node types are added in the future.

---

# User Story

As a visitor,

I do not know how the website is internally organized.

I simply want to explore projects, understand the engineering journey, read articles or learn more about the engineer behind the work.

The navigation should help me answer those questions without requiring me to understand the website's internal content model.

---

# Navigation Philosophy

Top-level navigation should answer questions.

Not expose folders.

Every top-level item should represent a way of exploring the knowledge system.

The navigation should remain stable even as new content types are introduced.

Adding a new Knowledge Node should rarely require adding a new top-level navigation item.

---

# Navigation Hierarchy

The primary navigation should contain four sections.

## Home

Landing page.

Current interests.

Featured content.

Latest activity.

---

## Explore

Answers:

**"What has been built?"**

Contains engineering artefacts and things to explore.

Initially:

* Projects

Future examples:

* Workflows
* Technologies
* Books
* Search

The exact contents should remain configurable.

---

## Journey

Answers:

**"How did this engineering journey evolve?"**

Chronological and contextual views.

Initially:

* Timeline
* Work Experience
* Education

Future additions should naturally fit here.

---

## Writing

Answers:

**"What has been learned?"**

Long-form written content.

Initially:

* Blog
* Project Journal

Future examples:

* Notes
* Learning Logs
* Technical Essays

---

## About

Personal information.

Website philosophy.

Contact.

External links.

This section should remain intentionally small.

---

# Scalability

The navigation must scale gracefully.

Adding a new Knowledge Node should usually involve placing it inside an existing navigation category.

Examples:

Books

→ Explore

Workflows

→ Explore

Work Experience

→ Journey

Education

→ Journey

Learning Notes

→ Writing

Only fundamentally new ways of exploring the website should introduce new top-level navigation items.

---

# Desktop Experience

Desktop navigation should remain clean and compact.

Dropdown menus are preferred over expanding the number of top-level navigation items.

The navigation should never resemble a long horizontal list of links.

Visual emphasis should remain subtle and documentation-oriented.

---

# Mobile Experience

Mobile navigation should preserve the same hierarchy.

Expandable sections are preferred over long scrolling menus.

The mobile experience should prioritize quick understanding over exposing every destination immediately.

---

# Visual Style

Navigation should follow the Maker Log design language.

Avoid:

* marketing navigation
* oversized mega menus
* excessive animations
* decorative icons for every item

Prefer:

* calm typography
* subtle hover states
* compact dropdowns
* engineering documentation aesthetics

---

# Future Compatibility

This navigation architecture should remain valid as the website grows.

Examples of future Knowledge Nodes:

* Books
* Technologies
* Workflows
* Hardware
* Papers
* Talks
* Learning Topics

These should naturally fit into the existing hierarchy without redesigning the navigation.

---

# Success Criteria

The navigation is successful when:

* Visitors can understand the structure within a few seconds.
* The top-level navigation remains compact.
* New content types rarely require new top-level navigation items.
* Navigation reflects how visitors think rather than how content is stored.
* The navigation reinforces the philosophy of the Engineering Knowledge System rather than exposing the underlying filesystem.


# Timeline Index

## Purpose

The Timeline Index is one of the primary navigation views of the Maker Log website.

Unlike the Project Index, which organizes Knowledge Nodes by project, the Timeline Index organizes Knowledge Nodes chronologically.

Its purpose is to help visitors understand what was happening simultaneously throughout different stages of the engineering journey.

The Timeline Index visualizes existing Knowledge Nodes.

It does not introduce or own information.

---

# Goals

The Timeline Index should allow visitors to:

* understand engineering progression over time
* discover related Knowledge Nodes through chronology
* explore concurrent activities
* navigate naturally into projects, articles, workflows, work experience and future content

The Timeline should encourage exploration rather than simply displaying dates.

---

# Information Architecture

The Timeline Index is a View over existing Knowledge Nodes.

The page should never duplicate information already available elsewhere.

Instead it should summarize and connect existing content.

Every visible item should link to its own Knowledge Node.

---

# Timeline Tracks

The Timeline consists of configurable parallel tracks.

Tracks organize chronology without changing the underlying knowledge model.

Example tracks:

* Projects
* Career
* Education
* Learning
* Workflows
* Books
* Articles

Tracks should remain configurable.

The theme must not assume a fixed list.

---

# Timeline Events

Timeline Events provide chronological context.

A Timeline Event may represent:

* beginning a project
* ending a project
* starting employment
* finishing employment
* beginning education
* finishing education
* learning a technology
* publishing an article
* adopting a workflow
* reading an influential book

Timeline Events should remain lightweight.

Their primary purpose is connecting existing Knowledge Nodes through time.

---

# Chronology

The Timeline should support both:

Point events

Example:

Started Chalmers

Published Article

Duration events

Example:

Ericsson Internship

ChipLedger

Bachelor Programme

Duration events should be visually distinguishable from point events.

---

# Parallel Activities

Engineering rarely progresses linearly.

The Timeline should communicate concurrent activity.

Examples:

Education

████████████████

Projects

```
████████
```

Career

```
    █████
```

Learning

██████████████████

Visitors should immediately understand what activities overlapped.

---

# Navigation

Every visible Timeline item should be clickable.

Clicking a Timeline item should navigate to the underlying Knowledge Node.

Examples:

Timeline

↓

Project

↓

Related Workflow

↓

Technology

↓

Book

↓

Timeline

Navigation should feel continuous.

---

# Context

Every Knowledge Node participating in the Timeline should expose contextual metadata.

Examples include:

Started

Ended

Track

Related Timeline Events

The Timeline should use existing metadata whenever possible.

Avoid introducing duplicate metadata.

---

# Filtering

Filtering should remain lightweight.

Examples:

Track

Status

Domains

Year

Filtering should never dominate the interface.

The Timeline itself remains the primary visual element.

---

# Presentation

The Timeline should resemble engineering documentation rather than a résumé.

Visual inspiration:

* Git history
* Engineering notebooks
* Research logs
* Technical diagrams

Avoid:

* corporate career timelines
* marketing storytelling
* oversized graphics
* decorative illustrations

The emphasis is readability.

---

# Interaction

The initial implementation should require minimal JavaScript.

Preferred interactions include:

* expand/collapse years
* expand/collapse tracks
* highlight related items
* smooth navigation

The page should remain readable without JavaScript whenever practical.

---

# Reusable Components

The Timeline should reuse existing Knowledge Node components whenever possible.

Examples:

* metadata
* status badges
* domain badges
* cards
* navigation
* relationship summaries

The Timeline should introduce as few unique components as possible.

---

# Future Compatibility

The Timeline should prepare for future features including:

* interactive graph
* relationship highlighting
* search integration
* backlinks
* knowledge explorer

The underlying data model should remain independent from visualization.

---

# Roadmap

## Phase 1

Introduce Timeline Events.

* new content type
* archetype
* list layout
* single layout

---

## Phase 2

Integrate existing Projects.

Projects should automatically appear within the Timeline using their existing metadata.

---

## Phase 3

Integrate Work Experience.

Support duration bars.

Support organization metadata.

---

## Phase 4

Integrate Education.

Support institutions.

Support courses.

Support duration.

---

## Phase 5

Integrate Workflows.

Examples:

Ubuntu

↓

Arch Linux

↓

DWM

↓

Hyprland

↓

Emacs

Workflows become first-class Timeline participants.

---

## Phase 6

Integrate Books.

Books appear as influential events connected to projects and articles.

---

## Phase 7

Improve Timeline visualization.

Introduce:

* parallel tracks
* duration bars
* compact year navigation
* responsive layouts

---

## Phase 8

Introduce interaction.

* filtering
* highlighting
* expand/collapse
* relationship previews

---

## Phase 9

Prepare Knowledge Graph integration.

Reuse the same relationship model.

Do not duplicate logic.

---

# Success Criteria

The Timeline Index is successful when visitors can:

* understand engineering progression chronologically
* recognize concurrent activities
* discover related Knowledge Nodes naturally
* navigate seamlessly between different content types
* understand the context in which projects, work, education and learning occurred

The Timeline should become one of the primary methods of exploring the website while remaining entirely driven by the existing Knowledge Node architecture.


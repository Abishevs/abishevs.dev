# Project Journal Feature 

Implement the next iteration of the **Project Journal** by first researching the existing implementation before proposing changes.

Do **not** immediately start rewriting templates.

The goal of this task is to understand the current architecture, evaluate its strengths and weaknesses, and propose improvements that align with the website's philosophy and existing Knowledge Node architecture.

## Phase 1 — Research

Study the current implementation in detail.

Investigate:

* `content/project-journal/`
* `layouts/project-journal/`
* any overridden layouts
* shared Knowledge Node partials
* Org Mode exported markdown
* ox-hugo output patterns
* custom shortcodes
* video embedding
* date parsing
* journal entry parsing
* frontmatter
* SCSS specific to Project Journal (if any)

Document your findings.

In particular, explain:

* how journal entries are currently detected,
* how timestamps are extracted,
* how entry ordering works,
* how media is embedded,
* what assumptions the parser currently makes.

---

## Phase 2 — Evaluate

Critically evaluate the current user experience.

Examples of questions to answer:

* Is displaying only the first journal entry after the title the best introduction?
* Is navigation between entries clear?
* Does the page encourage reading chronologically?
* Does it scale to journals containing hundreds of entries?
* Are dates visually prominent enough?
* Is it easy to skim months of progress?
* Are embedded videos and images integrated naturally?
* Does the layout reflect an engineering notebook or simply a long markdown page?

Identify pain points before proposing solutions.

---

## Phase 3 — Generate Design Alternatives

Produce several different layout concepts.

For each concept explain:

* intended reading experience,
* strengths,
* weaknesses,
* scalability,
* implementation complexity,
* compatibility with existing content.

Examples might include (but are not limited to):

* chronological engineering notebook,
* timeline-driven journal,
* collapsible dated entries,
* notebook with sticky navigation,
* activity feed,
* hybrid document + timeline.

Do not assume any of these are the correct solution.

Instead, reason from the existing content.

---

## Phase 4 — Architecture Review

Determine whether Project Journal should continue using the default Knowledge Node layout or have its own specialized implementation.

Consider:

* Which shared components should remain?
* Which parts deserve custom rendering?
* Which parsing logic belongs in reusable partials?
* Which logic is specific to Project Journal?

The goal is to maximize reuse without forcing Project Journal into a layout designed for other content types.

---

## Phase 5 — Proposal

Before implementing anything, present a proposal containing:

* recommended direction,
* rationale,
* wireframe or layout sketch,
* component breakdown,
* parsing improvements,
* reusable partials,
* migration plan,
* expected user experience.

Do not implement until the proposal has been reviewed.

---

## Constraints

Remember that Project Journal content is authored in Org Mode and exported through ox-hugo.

The markdown is the source of truth.

Do not require manual HTML editing after export.

The implementation should embrace ox-hugo's output rather than fight it.

Support existing:

* custom HTML,
* Hugo shortcodes,
* embedded videos,
* rich markdown,
* timestamped entries,
* future long-running journals.

---

## Design Philosophy

The Project Journal is not a blog.

It is an engineering development log.

Visitors should feel like they are reading the evolution of a project over time, including experiments, failures, design decisions, discoveries and milestones.

The layout should encourage exploration of that journey rather than simply presenting a long markdown document.

Whenever possible, leverage the existing architecture, steering documents and specifications already present in the repository.

If you discover inconsistencies between the current implementation and the project's architectural philosophy, explain them before proposing changes rather than silently working around them.


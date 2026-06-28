The Knowledge Graph has now been implemented and is functioning as the conceptual view of the engineering knowledge system.

This task is **not** to redesign it from scratch.

Instead, treat this as **Graph v2**: improving the graph's usability, scalability and ability to communicate relationships as the knowledge base grows.

Before making changes, study the current implementation, understand its architecture and evaluate it against the overall philosophy of the website.

---

# Phase 1 — Research

Review:

* the current graph implementation
* D3 rendering
* node generation
* edge generation
* related relationship model
* Knowledge Node architecture
* Technologies
* Projects
* Workflows
* Timeline
* navigation

Document:

* how nodes are generated,
* how relationships are resolved,
* how node metadata is represented,
* current limitations.

---

# Phase 2 — Evaluate

The graph is **not** intended to replace the Timeline.

Timeline answers:

> "When did things happen?"

The Knowledge Graph answers:

> "How are ideas connected?"

Evaluate whether the current implementation supports this purpose.

Consider:

* discoverability
* scalability
* readability
* navigation
* exploration

---

# Phase 3 — Filtering

Investigate adding interactive filtering.

Possible filters include:

* Projects
* Technologies
* Workflows
* Work Experience
* Education
* Books
* Blog Posts
* Project Journal

Users should be able to hide or isolate categories without rebuilding the graph.

Explain the implementation strategy before adding it.

---

# Phase 4 — Search

Investigate graph search.

Desired behaviour:

* search by page title
* highlight matching node
* smoothly center the graph on the result
* visually emphasize the selected node
* preserve current graph state

The search should support future scalability.

---

# Phase 5 — Node Metadata

Evaluate how additional metadata can improve exploration.

Examples:

* content type
* short description
* first used
* project count
* relationship count

Do not overload the visualization.

Information should remain concise and useful.

---

# Phase 6 — Relationship Evolution

The current graph uses generic `related` relationships.

Review whether the architecture should support richer relationship types in the future.

Examples include:

* uses
* influenced by
* introduced during
* part of
* evolved into
* related

Do **not** implement typed relationships unless the architecture naturally supports them.

Instead, propose how the graph could evolve while remaining compatible with the current Knowledge Node model.

---

# Phase 7 — Scalability

Assume the website eventually contains:

* 50+ Technologies
* 100+ Projects
* 50+ Books
* 200+ Blog Posts
* many years of journals

Evaluate how the current visualization would behave.

If necessary, propose improvements for:

* performance
* layout
* clustering
* rendering
* interaction

Avoid premature optimization.

---

# Phase 8 — UX Improvements

Review the current interaction model.

Consider improvements such as:

* improved hover cards
* better node highlighting
* fading unrelated nodes on selection
* keyboard navigation
* accessible interaction
* touch support

Each improvement should make exploration easier rather than simply adding visual effects.

---

# Design Philosophy

The Knowledge Graph is the conceptual map of the engineering knowledge system.

It is not intended to impress through visualization.

Its purpose is to help visitors discover meaningful connections between Projects, Technologies, Workflows, Books, Education, Experience and Writing.

Every proposed improvement should strengthen exploration, understanding and navigation.

Avoid decorative complexity.

Prefer clarity, maintainability and architectural consistency.

If you discover architectural limitations that would be better solved in the Knowledge Node model rather than in the visualization itself, document those findings before implementing UI changes.


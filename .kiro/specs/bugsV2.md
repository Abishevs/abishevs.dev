# Bugs V2 to be resolved

While scrolling through the website I found things that don't make much sense
given the content type.

## 1. Workflows Statuses
Status active doesn't provide anything usefull. 
My take on it is: 

I think Workflows should instead emphasize...

Evolution.

Imagine

Linux Desktop

2023

Arch

↓

2024

DWM

↓

2025

Better automation

↓

2026

Niri

That's much richer.

This also aligns beautifully

Notice what happens.

Projects

↓

Lifecycle

Technologies

↓

Relationship

Books

↓

Influence

Workflows

↓

Practice

Each content type has its own philosophy.

Not the same metadata.

## Books should have sections not just filters. 

## 3. Timeline should visualize activity, not just chronology

The current Timeline is primarily an ordered list of point events and durations.

This works for showing **when** something started, but it fails to represent **how engineering work actually evolves**.

Many engineering efforts are long-lived with intermittent periods of active development.

Examples include:

* Personal Website
* Personal Knowledge System
* Linux Desktop
* Long-term embedded projects

Rendering these as a continuous duration incorrectly implies constant activity.

Instead, the Timeline should distinguish between:

* **Lifetime** — when a Knowledge Node exists.
* **Activity** — periods of active work.
* **Milestones** — significant events occurring during the lifetime.

This would allow the Timeline to communicate:

* bursts of development,
* pauses,
* overlapping work,
* long-term maintenance,
* periods of intense focus.

The Timeline should evolve from a chronological index into a historical visualization of engineering activity.

---

## 4. Homepage should teach visitors how to explore the knowledge system

The homepage currently presents:

* introduction,
* current focus,
* featured projects,
* recent activity.

While this communicates recent work, it does not communicate how the website itself is structured.

Since the website is a public engineering knowledge system rather than a traditional portfolio, visitors should quickly understand how different Knowledge Nodes relate to one another.

Introduce a dedicated section that acts as an entry point into the knowledge system.

Possible structure:

* Projects
* Technologies
* Workflows
* Books
* Timeline
* Knowledge Graph

Each item should briefly explain its purpose and encourage exploration.

The homepage should answer:

> "How should I explore this website?"

rather than assuming visitors already understand its architecture.

---

## 5. Homepage should distinguish "Featured" from "Current"

Featured Projects answer:

> "What work best represents me?"

Current Focus answers:

> "What am I exploring right now?"

Recent Activity answers:

> "What changed recently?"

These represent different concepts and should remain visually distinct.

Current Focus should emphasize engineering themes rather than individual projects.

Examples include:

* RTL Design
* Embedded Systems
* Personal Knowledge System
* Systems Programming

This provides context for ongoing interests without duplicating Featured Projects.

---

## 6. Homepage should introduce the knowledge system before the activity feed

The Activity feed is valuable once visitors understand the structure of the website.

However, it currently appears before visitors have developed a mental model of the site.

The homepage should prioritize orientation before chronology.

Suggested order:

1. Hero / Introduction
2. Featured Work
3. Explore the Knowledge System
4. Current Focus
5. Recent Activity

This creates a clearer progression:

* Who am I?
* What should you see first?
* How is the site organized?
* What am I currently interested in?
* What has changed recently?

---

## 7. Activity feed should evolve into "Recent Changes"

The current Activity feed behaves similarly to a traditional blog feed.

The website is not primarily a blog.

Instead, the feed should represent changes across the knowledge system.

Examples include:

* New Project
* Updated Workflow
* New Journal Entry
* Added Technology
* Finished Book
* New Blog Post

The feed becomes analogous to a project's changelog, highlighting the evolution of the engineering knowledge base rather than simply listing recently published content.

---

## 8. Homepage should surface relationships, not only content

The website's defining characteristic is the relationships between Knowledge Nodes.

The homepage should occasionally surface these connections.

Examples:

* Recently connected Technologies
* Books influencing current Workflows
* Technologies used in Featured Projects
* Related Knowledge suggestions

This reinforces that the website is a connected knowledge system rather than a collection of isolated pages.

The goal is to encourage exploration through relationships rather than navigation alone.

## Goal of the homepage
The homepage should optimize for first-time visitors.

Because: 
Every other page on your site assumes the visitor already has context. The homepage is the only place that must simultaneously explain who you are, what this website is, and how to explore it. That's a different responsibility than simply showcasing content, and I think recognizing that explicitly will help guide future design decisions.


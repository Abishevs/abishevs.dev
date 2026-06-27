# Project Classification System

## Purpose

Projects are classified using two independent systems:

* Status
* Domains

Together they form the primary navigation mechanism for the engineering index.

The classification system should encourage exploration while remaining calm, organized and documentation-oriented.

It should never resemble an e-commerce filter panel or tag cloud.

---

# Status

Status represents the engineering lifecycle of a project.

Every project should have exactly one status.

Status is first-class metadata and should receive dedicated visual styling.

## Supported Statuses

The theme must support arbitrary status values.

The set of available statuses is **not hardcoded inside the theme**.

Instead, statuses should be configurable by the site owner through Hugo configuration or data files.

Each status definition should contain:

* identifier
* display name
* short description
* visual style (optional)

Example:

```yaml
research:
  label: "Research"
  description: "Early investigation, planning and technology exploration."

prototype:
  label: "Prototype"
  description: "Proof-of-concept implementation focused on experimentation."

active:
  label: "Active"
  description: "Currently under active development."

deployed:
  label: "Deployed"
  description: "Publicly available while continuing active development."

complete:
  label: "Complete"
  description: "Engineering goals achieved. Stable with no planned development."

archived:
  label: "Archived"
  description: "Preserved for historical reference."
```

Projects reference only the identifier.

Example:

```yaml
status: active
```

---

## Status Presentation

Status should be displayed on:

* Project cards
* Individual project pages
* Project index
* Status overview

Each supported status should receive a distinct visual style.

Unknown statuses should automatically fall back to a generic metadata badge.

---

## Status Overview

The Projects index should contain a compact engineering-style overview explaining the available statuses.

Example:

```text
Project Status

Research     Investigating ideas and architecture.
Prototype    Proof-of-concept implementation.
Active       Under active development.
Deployed     Publicly available and maintained.
Complete     Finished and stable.
Archived     Historical reference.
```

This should resemble technical documentation rather than a legend or dashboard.

---

# Domains

Domains classify projects by engineering discipline.

Unlike status, a project may belong to multiple domains.

Domains are intentionally open-ended.

Examples include:

* Embedded
* Firmware
* Electronics
* PCB
* Mechanical
* Robotics
* Simulation
* Tooling
* CLI
* Web
* Linux
* Automation
* CAD
* Reverse Engineering

The theme must not assume a fixed set of domains.

---

## Domain Definitions

Like statuses, domains should be configurable outside the theme.

Each domain may define:

* identifier
* display name
* short description

Example:

```yaml
embedded:
  label: "Embedded"
  description: "Firmware, microcontrollers and low-level hardware."

mechanical:
  label: "Mechanical"
  description: "Mechanical design, CAD and physical systems."
```

Projects reference only identifiers.

```yaml
projectType:
  - embedded
  - pcb
  - firmware
```

---

## Domain Presentation

Domains should appear:

* On project cards
* On project pages
* As a compact overview on the Projects index

The Projects index may include a concise reference section describing each engineering domain.

The purpose is to help visitors understand the multidisciplinary nature of the projects rather than simply counting tags.

---

# Design Philosophy

Status and Domains together form the primary navigation system of the engineering index.

They should communicate:

* engineering discipline
* project maturity
* organization
* discoverability

The presentation should feel closer to an engineering handbook or technical documentation than to a portfolio filter or tag cloud.

Readers should understand both *what* a project is and *where* it currently is in its engineering lifecycle before opening it.


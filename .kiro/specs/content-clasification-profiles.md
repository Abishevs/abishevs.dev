# Content Profiles Specification

## Purpose

The current architecture classifies Knowledge Nodes using domains.

Domains work well for organization, filtering and discovery.

However, domains are beginning to influence presentation, causing rendering logic to become increasingly coupled to domain-specific conditionals.

For example:

* Website projects expose Live Site and Demo links.
* Embedded projects expose firmware, PCB and datasheet resources.
* CLI tools expose installation instructions.
* Robotics projects may expose CAD, simulations and videos.

This should not be implemented through template conditionals.

Instead, introduce a Content Profile system.

---

# Philosophy

Domains describe **what** something is.

Profiles describe **how** something is presented.

These are separate concepts.

A Project may belong to multiple engineering domains while still sharing the same presentation profile as another project.

The profile determines which metadata and resources should be rendered.

---

# Separation of Concerns

Knowledge Node

↓

Content Type

↓

Domains

↓

Profile

↓

Resources

↓

Presentation

Domains classify.

Profiles render.

Resources provide content.

---

# Domains

Domains remain unchanged.

Their purpose is:

* filtering
* grouping
* discovery
* search
* navigation

Domains should never directly control template rendering.

---

# Profiles

Introduce a new configuration layer.

Suggested location:

```text
data/profiles/
```

Examples:

```text
website.toml

embedded.toml

robotics.toml

cli.toml

desktop.toml

documentation.toml
```

Profiles define:

* metadata groups
* resource ordering
* section visibility
* icons
* labels
* optional actions

Profiles contain presentation configuration rather than engineering classification.

---

# Resources

Replace individual metadata fields with a unified resource model.

Example:

```yaml
resources:

- type: github
  url:

- type: live
  url:

- type: documentation
  url:

- type: report
  url:

- type: datasheet
  url:

- type: pcb
  url:

- type: bom
  url:

- type: cad
  url:
```

Resources remain generic.

Profiles determine how they are presented.

---

# Resource Definitions

Resource types should be centrally defined.

Suggested location:

```text
data/resources.toml
```

Each resource should define:

* label
* icon
* description
* ordering
* optional grouping

Templates should never hardcode resource labels.

---

# Profile Rendering

Templates should become generic.

Pseudo flow:

Knowledge Node

↓

Read profile

↓

Read resource definitions

↓

Render only resources that exist

↓

Display in profile-defined order

No profile-specific conditionals should exist within layouts whenever practical.

---

# Multiple Domains

Projects may belong to several domains.

Profiles remain singular.

Example:

Domains

* Embedded
* Robotics

Profile

* embedded

The profile determines presentation.

Domains determine categorization.

---

# Future Compatibility

Profiles should remain extensible.

Possible future capabilities include:

* image galleries
* download sections
* hardware specifications
* benchmark tables
* interactive demos
* verification results
* publication references

These should be configurable through profile definitions rather than hardcoded layouts.

---

# Theme Philosophy

The theme should become an engine for rendering Knowledge Nodes.

Knowledge should live in content.

Configuration should live in data.

Presentation should live in layouts.

Profiles act as the bridge between configuration and presentation.

Adding a new project category should primarily involve creating configuration rather than modifying templates.

---

# Design Goal

The long-term goal is for the addition of a new engineering discipline to require little or no template modification.

A new profile should define:

* which resources are expected,
* how metadata is organized,
* which actions appear,
* how supporting information is displayed.

The renderer should simply consume that configuration.


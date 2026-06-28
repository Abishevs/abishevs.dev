# Temporal Activity Model Specification

## Purpose

The current Timeline represents when Knowledge Nodes were created or existed.

This is sufficient for simple chronological ordering but fails to represent how engineering work actually evolves.

Many engineering activities are intermittent.

Projects pause.

Technologies are learned gradually.

Books are read over weeks.

Personal websites are maintained continuously over years with bursts of activity.

The Timeline should therefore distinguish between:

* lifetime,
* activity,
* milestones.

The Timeline becomes a visualization of this temporal model rather than a simple chronological list.

---

# Design Philosophy

Time is multidimensional.

A Knowledge Node should answer three independent questions.

## Lifetime

"When did this become part of my engineering journey?"

Example:

```
Personal Website

2023 ─────────────────────────────── Present
```

Lifetime represents existence.

---

## Activity

"When was I actively working with it?"

Example:

```
██████

       ███

             █████████
```

Activity represents effort rather than existence.

It is expected that activity occurs in bursts separated by periods of inactivity.

---

## Milestones

"What important events happened?"

Examples:

* Started
* Prototype complete
* First deployment
* Graduation
* First professional use
* Publication

Milestones are point events that provide context.

---

# Temporal Model

Every Knowledge Node may expose the following information.

```yaml
startDate:

endDate:

updated:

activity:

  - start:
    end:
    label:

  - start:
    end:
    label:

milestones:

  - date:
    title:
    description:
```

Every field is optional except where required by the content type.

---

# Field Semantics

## startDate

The first point where this became part of my engineering journey.

Examples:

* project started
* book started
* workflow adopted
* technology first used
* education began

---

## endDate

When the node ceased to be active.

Null indicates the node is still part of the journey.

This represents lifetime rather than activity.

---

## updated

Latest meaningful modification.

This is metadata.

It is **not** considered an activity period.

---

## activity

Represents explicit periods of meaningful work.

Each range should contain:

```
start
end
optional label
```

Example:

```yaml
activity:

- start: 2025-06
  end: 2025-08
  label: Summer Development

- start: 2026-01
  end: 2026-03
  label: Thesis Work
```

Activity periods may overlap.

They may also be open-ended.

```
end: null
```

---

## milestones

Significant events within the lifetime.

Examples:

```yaml
milestones:

- date: 2025-05-10
  title: First prototype

- date: 2025-08-20
  title: Public release
```

Milestones are informational and do not affect activity visualization.

---

# Manual vs Automatic Activity

The architecture should support both authored and generated activity.

Priority order:

## 1. Explicit activity ranges

If activity ranges exist they are the source of truth.

---

## 2. Generated activity

If explicit ranges do not exist they may be inferred.

Possible sources include:

* Project Journal timestamps
* Git history
* generated databases
* external scripts
* Org Mode timestamps

---

## 3. Fallback

If no activity information exists:

```
activity =

startDate → endDate
```

This guarantees every node remains visualizable.

---

# Future Compatibility

The activity model should intentionally support external generation.

Future tooling may generate activity from:

* Git commits
* Project Journals
* Org Mode
* personal logging tools
* exported databases
* custom Python scripts

The Timeline implementation should not distinguish between manually authored and generated activity.

It simply consumes normalized activity ranges.

---

# Timeline Visualization

The Timeline should visualize three separate concepts.

## Lifetime

A thin, low-contrast horizontal line.

Represents existence.

---

## Activity

Thicker highlighted segments rendered on top of the lifetime.

Multiple segments indicate bursts of work.

```
────────────────────────────

████

      ████

             ██████
```

---

## Milestones

Rendered as small markers placed on the lifetime.

Examples:

●

◆

⬢

These remain subtle.

---

# Timeline Behaviour

The Timeline should no longer behave as a chronological list.

Instead it should resemble a historical engineering map.

Visitors should immediately understand:

* what existed,
* what was actively developed,
* what happened simultaneously,
* what paused,
* what continued for years.

Long-running projects should no longer appear as continuously active unless activity data supports that conclusion.

---

# Content Type Defaults

Projects

Supports:

* lifetime
* activity
* milestones

---

Workflows

Supports:

* lifetime
* activity

---

Technologies

Supports:

* lifetime
* activity

The activity represents periods of active learning or use.

---

Books

Supports:

* lifetime
* reading activity

---

Education

Normally continuous.

Activity defaults to lifetime.

---

Work Experience

Normally continuous.

Activity defaults to lifetime.

---

Posts

Single point events.

---

Project Journals

Generate activity for related projects rather than appearing independently.

---

# Design Principles

The Timeline is a storytelling view rather than a project management tool.

It should communicate how engineering work evolves through time.

The implementation should prioritize:

* historical accuracy,
* readability,
* scalability,
* future automation,
* compatibility with generated activity sources.

The Timeline should require little manual maintenance while remaining capable of representing complex engineering histories.


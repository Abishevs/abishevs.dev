# Temporal Model

## Purpose

The temporal model describes how Knowledge Nodes exist and evolve through time.

It is consumed by the Timeline view and potentially future visualizations.

It is independent of any specific renderer.

---

# Three Temporal Concepts

## Lifetime

When this node became part of the engineering journey.

Represented by `startDate` and `endDate`.

If `endDate` is absent or empty, the node is still active.

## Activity

When meaningful work occurred.

Represented as an array of date ranges: `[[activity]]` in frontmatter.

Activity is optional. If absent, the Timeline falls back to treating the entire lifetime as active.

## Milestones

Significant point events within the lifetime.

Represented as `[[milestones]]` in frontmatter.

Optional. Provides context without affecting activity visualization.

---

# Participation by Content Type

| Type | Lifetime | Activity | Milestones |
|------|----------|----------|------------|
| Projects | startDate–endDate | bursts (optional) | optional |
| Workflows | startDate–endDate | bursts (optional) | — |
| Technologies | firstUsed–present | learning/use bursts (optional) | — |
| Books | date (point) | reading period (optional) | — |
| Education | startDate–endDate | continuous (default) | optional |
| Work Experience | startDate–endDate | continuous (default) | optional |
| Posts | date (point) | — | — |
| Project Journals | — | generates activity for parent project | — |

---

# Priority Order

1. Explicit `[[activity]]` ranges in frontmatter → source of truth
2. Generated data (future: git history, journal timestamps) → future compatible
3. Fallback: startDate–endDate treated as continuous activity

---

# Frontmatter Convention

```toml
# Lifetime
startDate = "2025-01-01"
endDate = ""

# Activity (optional)
[[activity]]
start = "2025-01-01"
end = "2025-03-15"
label = "Initial development"

[[activity]]
start = "2025-06-01"
end = "2025-08-31"
label = "Summer sprint"

# Milestones (optional)
[[milestones]]
date = "2025-03-15"
title = "First prototype"

[[milestones]]
date = "2025-08-20"
title = "Public release"
```

---

# Design Constraints

- Fields are optional — existing content works unchanged
- Technologies use `firstUsed` as their lifetime start (already exists)
- Books use `date` as point event (no startDate needed)
- Work Experience and Education default to continuous (no activity needed)
- The Timeline renderer consumes normalized data regardless of origin
- No new required fields — backward compatible

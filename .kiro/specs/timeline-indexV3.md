# Timeline V3 — Activity Visualization

## Motivation

The current Timeline successfully answers:

> "When did this happen?"

However, it still struggles to communicate a more interesting question:

> "How did this evolve over time?"

Engineering work is rarely continuous.

Projects pause.

Technologies are learned gradually.

Workflows evolve.

Books are read over periods of time.

Long-running projects often consist of many short bursts of focused work separated by months of maintenance or inactivity.

Representing these as simple durations or Gantt charts incorrectly implies continuous effort.

The Timeline should evolve from a chronological index into a visualization of engineering activity.

---

## Design Goals

The Timeline should communicate:

* lifetime,
* intensity,
* continuity,
* overlap,
* pauses,
* long-term evolution.

It should **not** attempt to become a project management Gantt chart.

Historical understanding is more important than chronological precision.

---

## Mobile First

The visualization must remain effective on both desktop and mobile.

Avoid solutions that depend on large horizontal timelines or horizontal scrolling.

The experience should remain compact regardless of the number of years represented.

---

## Activity Signatures

Every Knowledge Node should expose a compact visual representation of its activity over time.

Rather than drawing exact durations to scale, the visualization should communicate the **shape** of the activity.

Possible examples include:

* segmented traces,
* sparklines,
* density bars,
* normalized activity signatures.

The implementation should investigate which visualization communicates activity most effectively while remaining compact.

The visualization should prioritize recognition over precision.

A visitor should immediately understand:

* continuous effort,
* intermittent maintenance,
* short-lived work,
* recurring revisits.

without requiring exact date measurements.

---

## Lifetime vs Activity

These concepts should remain visually distinct.

Lifetime communicates existence.

Activity communicates engineering effort.

For example:

Lifetime

────────────────────────

Activity

▁▂█▁▁▄▁██▂

or

━━━    ━━━━━   ━━━

or another suitable visualization.

The exact presentation is intentionally left open.

---

## Engineering Aesthetic

The visualization should feel inspired by engineering rather than office software.

Potential inspiration includes:

* PCB routing
* oscilloscope traces
* logic analyzer waveforms
* signal integrity plots
* circuit diagrams

These are inspirations rather than requirements.

Avoid skeuomorphic decoration.

The visualization should remain clean, subtle and purposeful.

---

## Visual Hierarchy

Each Timeline entry should communicate information in roughly this order:

1. Title
2. Lifetime
3. Activity signature
4. Key metadata
5. Related content (future)

The activity visualization should become a secondary identifier for a Knowledge Node.

Over time, visitors should begin recognizing recurring activity patterns at a glance.

---

## Progressive Disclosure

The Timeline should remain compact.

Detailed information should only appear when requested.

Potential interactions include:

* expanding a node,
* hovering,
* selecting,
* navigating to the Knowledge Node.

The default Timeline should prioritize scanning rather than detailed inspection.

---

## Historical Accuracy

The visualization should communicate patterns rather than exact scheduling.

For example:

A project that spans three years but only receives occasional maintenance should clearly appear different from:

* a six-month internship,
* a continuously active education,
* a short book,
* a workflow used every day.

The Timeline should help visitors understand **how engineering attention shifted throughout time**.

---

## Future Data Sources

The visualization should not depend on manually authored activity forever.

It should remain compatible with future generated activity from:

* Git history
* Project Journals
* Org Mode
* generated databases
* personal logging tools
* external Python scripts

Regardless of the source, the Timeline should consume a normalized temporal activity model.

---

## Scalability

The visualization should continue working when the website contains:

* hundreds of projects,
* many technologies,
* decades of experience,
* thousands of activity events.

Avoid designs that scale only for a small dataset.

Compactness and readability should remain priorities.

---

## Implementation Notes

The purpose of this task is **not** to produce a perfect visualization immediately.

Instead:

* review the current implementation,
* investigate alternative visual representations,
* prototype several approaches,
* evaluate readability on both desktop and mobile,
* recommend the approach that best communicates engineering history.

The implementation should prioritize clarity over novelty.

The Timeline should become one of the defining views of the knowledge system rather than simply another chronological list.


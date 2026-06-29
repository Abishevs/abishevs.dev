+++
draft = true
date = 2024-01-01
title = "Theme Showcase — Workflow"
description = "Example workflow page demonstrating tools, domains, and evolution documentation."

startDate = "2024-01-01"
endDate = ""
current = true
tools = ["Emacs", "tmux", "Git", "GCC", "Python", "Rust"]
domains = ["development", "tooling"]

status = "active"
related = ["/workflows/linux-desktop", "/technologies/python"]
+++

## Overview

This page demonstrates the **workflow** profile. Workflows show engineering environments — how tools combine into a working practice.

## Profile Features

- ✅ Status badge (ACTIVE)
- ✅ Domain badges (Development, Tooling)
- ✅ Tool badges — linked when technology page exists (Emacs, Python, Rust) / plain otherwise (tmux, Git, GCC)
- ✅ Related knowledge (Continue Exploring)
- ✅ Backlinks

## Current Setup

```bash
# Session startup script
tmux new-session -d -s dev
tmux send-keys 'cd ~/projects && emacs .' Enter
tmux new-window -n build
tmux send-keys 'make watch' Enter
tmux attach -t dev
```

## Evolution

Key equation for productivity improvement over time:

$$
\text{Efficiency}(t) = 1 - e^{-\lambda t}
$$

Where $\lambda$ represents the learning rate for the new tooling.

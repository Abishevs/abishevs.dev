+++
draft = true
date = 2023-01-01
title = "Linux Desktop"
description = "Tiling window manager workflow built around keyboard-driven navigation and minimalism."

startDate = "2023-01-01"
endDate = ""
current = true
tools = ["Arch Linux", "Hyprland", "Waybar", "Kitty", "Rofi", "Dunst"]
domains = ["desktop", "linux"]

status = "active"
related = ["/projects/modest", "/workflows/development-environment"]
+++

## Overview

A keyboard-driven Linux desktop environment optimized for engineering work. The philosophy is minimalism — every tool earns its place through daily utility rather than aesthetics.

The desktop should disappear. Attention belongs on the work, not the interface.

Guiding principles:

- Keyboard over mouse
- Configuration as code (dotfiles)
- Minimal visual noise
- Fast window management
- Reproducible across machines

## Current Setup

- **OS:** Arch Linux (rolling release, minimal base)
- **WM:** Hyprland (Wayland tiling compositor)
- **Bar:** Waybar (workspace indicators, clock, system info)
- **Terminal:** Kitty (GPU-accelerated, splits)
- **Launcher:** Rofi (app launcher, window switcher)
- **Notifications:** Dunst (minimal, keyboard-dismissible)
- **File manager:** Terminal (lf) + Thunar for media

## Evolution

**2023** — Started with Ubuntu. Quickly hit limitations with GNOME's rigidity for tiling workflows.

**2023** — Migrated to Arch Linux with DWM. First exposure to tiling window managers. Patched DWM source directly.

**2024** — Switched from DWM to Hyprland. Wayland support, smoother animations, easier configuration without recompiling.

**2024** — Adopted dotfiles management via Git bare repo. Full desktop reproducible from a single clone.

## Resources

- [Dotfiles repository](https://github.com/Abishevs/dotfiles)
- Arch Wiki — primary reference for system configuration

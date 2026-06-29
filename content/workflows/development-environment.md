+++
draft = true
date = 2023-06-01
title = "Development Environment"
description = "Terminal-centric development workflow centred around Emacs, tmux and CLI tools."

startDate = "2023-06-01"
endDate = ""
current = true
tools = ["Emacs", "tmux", "Git", "GCC", "Make", "GDB", "ripgrep"]
domains = ["development", "tooling"]

status = "active"
related = ["/workflows/linux-desktop", "/work-experience/ericsson-summer-2025"]
+++

## Overview

A terminal-first development environment optimised for C, SystemVerilog and Python. The philosophy is composability — small tools connected through the shell rather than monolithic IDEs.

Guiding principles:

- Editor as operating system (Emacs)
- Terminal multiplexing for session persistence
- Version control as engineering discipline
- Build systems over manual compilation
- Debugger fluency

## Current Setup

- **Editor:** Emacs (org-mode, magit, lsp-mode, vterm)
- **Multiplexer:** tmux (persistent sessions, splits, remote pairing)
- **VCS:** Git (bare repos for dotfiles, worktrees for branches)
- **Build:** Make, CMake, custom scripts
- **Debug:** GDB (TUI mode), Valgrind
- **Search:** ripgrep, fd, fzf

## Evolution

**2023** — Started with VS Code. Functional but disconnected from the terminal workflow.

**2024** — Switched to Neovim. Discovered the power of modal editing and terminal integration.

**2025** — Migrated to Emacs. Org-mode became indispensable for engineering notes and this website's content pipeline.

## Resources

- Emacs configuration managed within dotfiles
- Org-mode exports directly to Hugo markdown for this website

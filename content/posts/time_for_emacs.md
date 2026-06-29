+++
title = 'Is it time to try out EMACS?'
date = 2026-06-06T16:23:05+02:00
description = "Exploring Emacs as a development environment after years of Neovim."
draft = false
+++

# Background

I have been a Neovim user since February 2023 (at least that’s when I uploaded my first nvim config). Since then I have been hooked on vim motions. I have them everywhere now — Overleaf, browser, and even my desktop environment re-uses similar bindings for navigation.

Lately I’ve had to use VSCode a lot for embedded work and during times where I had to use Windows.
But I’ve been following [Tsoding Daily](https://www.youtube.com/@lsodingDaily) livestreams/recordings and got curious about his programming workflow, since he uses Emacs.

Thus, late at night at a very convenient time — when I should have been sleeping to study for exams the next day — I got the idea that I *had* to try out Emacs myself.

I landed on Doom Emacs since configuring Emacs from scratch without any knowledge sounds painful.

# Is Emacs vs Vim real talk?

I have tried Doom Emacs and at first glance it is amazing.

Of course I use Evil mode (vi emulation), but it also has all the Emacs bindings underneath.

Compile command mode (`SPC c c`) is a neat feature. It can be configured to run `make`, project-specific commands, or basically whatever the project needs. The nice part is that the compile buffer stays persistent, so you can keep editing code while seeing the output update.

The interactive buffers being first-level citizens is convenient.

Org mode? You mean a built-in Wimwiki, but somehow better? Interesting.

## Is Emacs a black hole?

I have heard that Emacs is a black hole — that it is a terrible editor, but eventually becomes your internal dev OS and you get bound to it and won’t be able to leave.

Lisp makes it very hacky, but also kind of junky in a charming way, because you can basically do anything you want. Plugins can either fight each other for resources or somehow work in perfect synergy.

Neovim with Lua feels more structured. It just works and in a way feels more mature than Lisp. But with Lisp you can redefine things live, write your own functions easily, and even make project-specific bindings or automations that only exist for the current session.

## What now?

We shall see how this goes. I might stick around for a while and try to learn Lisp and its possibilities.

So far, I might actually like it more than Neovim.

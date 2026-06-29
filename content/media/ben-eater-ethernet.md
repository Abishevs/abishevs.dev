+++
draft = true

date = 2024-02-10
title = "How Does Ethernet Work?"
description = "Building an Ethernet interface from scratch to understand the physical layer."

creator = "Ben Eater"
year = "2023"
mediaType = "youtube"
watchStatus = "completed"
favorite = true
technologies = ["Networking", "Electronics"]
related = ["/media/ben-eater"]

[[links]]
label = "Video"
url = "https://www.youtube.com/watch?v=XaGXPObx2Gs"
+++

## Why I Watched This

Ethernet is something I use daily but never thought about at the physical level.

## Key Ideas

- Manchester encoding makes clock recovery possible without a separate wire
- The preamble is just a square wave for PLL synchronization
- CRC is computed in hardware with a shift register and XOR gates

## Influence on Engineering

Changed how I think about communication protocols — there's always a physical layer with real timing constraints beneath the abstraction.

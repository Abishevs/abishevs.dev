+++
date = 2023-06-15
title = "Making an 8-bit CPU — ALU Design"
description = "Designing and building an arithmetic logic unit from 74LS-series chips."

creator = "Ben Eater"
year = "2019"
mediaType = "youtube"
watchStatus = "completed"
favorite = false
technologies = ["Digital Logic", "Electronics"]
related = ["/media/ben-eater"]

[[links]]
label = "Video"
url = "https://www.youtube.com/watch?v=dXdoim96v5A"
+++

## Why I Watched This

Wanted to understand how an ALU actually works at the gate level before writing RTL.

## Key Ideas

- Carry propagation is the bottleneck — motivates carry-lookahead adders
- 2's complement subtraction is just addition with inverted input + carry-in
- The condition flags (zero, carry, negative) fall out naturally from the circuit

## Influence on Engineering

This video made me realize that RTL descriptions map 1:1 to physical gates. Watching the build before writing SystemVerilog made the abstraction concrete.

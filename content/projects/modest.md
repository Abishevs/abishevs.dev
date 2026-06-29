+++
draft = false
date = 2026-05-07T20:05:00+02:00
lastmod = 2026-05-23T17:16:00+02:00

title = "MODEST"
description = "Modular pOkerchip DispEnsing SysTem (MODEST) for home poker games."
keywords = ["3D Printing"]

status = "research"
projectType = ["embedded", "mechanical"]
thumbnail = "/images/modest/modest_thumnail.webp"

related = ["/project-journal/modest", "/education/chalmers-mechatronics", "/workflows/linux-desktop"]

# Temporal
startDate = "2026-05-07"

technologies = ['C', 'STM32', 'FreeCAD']

[[activity]]
start = "2026-05-07"
end = "2026-05-23"
label = "Initial research & CAD"

[[milestones]]
date = "2026-05-07"
title = "Project started"

+++

# Overview

Modular poker chip dispensing system is tool meant to be used on home poker games to be able to focus more of on the game instead of counting out chips for each buy-in.


{{< figure src="/images/modest/modest_thumnail.webp" caption="<span class=\"figure-number\">Figure 1: </span> Just a picture of the MODEST." >}}

# Motivation

Because it is fun, there is realy not a single good reason to spend this much time on a project like this besides passion for the process :D

# Features

* Modular design adding new modules will be easy 
* big (negative feature I think)
* It looks cool

# How It Works

Micrcontroller say to the steppers to spin, then it spins and stops for a bit for the exit hole, it does until the ordered chip count is dispensed. Easy enough right?

# Challenges

Tolerances, timing and chosing STM32 with HAL for firmware which takes more time to learn (my bad but it is cool, yet again PROCESS matters more).

# Current Status

- It can dispense `n` ammount of chips (hardcoded in code rn, forgot to make selection menu...).
- Decently reliable, even though it overshoots the exit hole it doesn not compound too much over time.
- it is BIG 160mm in diameter...

# Lessons Learned

At this intial stage:
- firmware takes time
- tolarances are tedious to get right. 
- Stepper drivers makes a huge difference, choose wisely.

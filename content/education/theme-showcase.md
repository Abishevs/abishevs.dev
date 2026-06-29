+++
draft = true
date = 2020-09-01

title = "Theme Showcase — Education"
description = "Example education page demonstrating the education profile."

programme = "MSc Computer Science"
institution = "Example University"
degree = "Master of Science"
startDate = "2020-09-01"
endDate = ""
current = true
location = "Stockholm, Sweden"

status = "active"
related = ["/technologies/python", "/technologies/c"]
+++

## Overview

This page demonstrates the **education** profile. Education pages document learning environments.

## Profile Features

- ✅ Title from `programme` field
- ✅ Subtitle: institution, degree, duration (shows "Present" for current), location
- ✅ Status badge (ACTIVE)
- ✅ Related knowledge
- ✅ Backlinks

## Notable Coursework

Linear algebra fundamentals — eigenvalue decomposition:

$$
A\mathbf{v} = \lambda\mathbf{v}
$$

Where $A$ is an $n \times n$ matrix, $\mathbf{v}$ is the eigenvector, and $\lambda$ is the corresponding eigenvalue.

## Lab Work

```python
# Control systems lab — step response analysis
import control
import numpy as np

# Second-order system: H(s) = wn^2 / (s^2 + 2*zeta*wn*s + wn^2)
wn = 10.0   # natural frequency
zeta = 0.7  # damping ratio

sys = control.TransferFunction([wn**2], [1, 2*zeta*wn, wn**2])
t, y = control.step_response(sys, T=np.linspace(0, 2, 1000))
```

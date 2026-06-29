+++
draft = true
date = 2025-03-01T10:00:00+02:00
lastmod = 2026-06-28T12:00:00+02:00

title = "Theme Showcase — Project"
description = "Example project demonstrating all theme features: math, code, badges, links, timeline data."
keywords = ["Example", "Showcase"]

status = "active"
projectType = ["embedded", "cli"]
thumbnail = ""
technologies = ["C", "Python", "Rust", "STM32", "Qt"]

related = ["/workflows/development-environment", "/education/chalmers-mechatronics"]

startDate = "2025-03-01"

[[activity]]
start = "2025-03-01"
end = "2025-04-15"
label = "Initial development"

[[activity]]
start = "2025-09-01"
end = "2025-10-10"
label = "Hardware integration"

[[milestones]]
date = "2025-04-15"
title = "First prototype"
url = ""

[[milestones]]
date = "2025-10-10"
title = "Field testing complete"
url = "/project-journal/split-keyboard/"

[[links]]
label = "Source"
url = "https://github.com/example/project"

[[links]]
label = "Documentation"
url = "https://docs.example.com"

[[links]]
label = "Live Demo"
url = "https://demo.example.com"
+++

## Overview

This page demonstrates every feature available in the maker-log theme for **project** pages.

## Math Rendering

Inline math: The transfer function is $H(s) = \frac{1}{s^2 + 2\zeta\omega_n s + \omega_n^2}$ where $\zeta$ is the damping ratio.

Block math for display equations:

$$
\mathbf{F} = m\mathbf{a} = m\frac{d^2\mathbf{r}}{dt^2}
$$

A more complex example — the discrete Fourier transform:

$$
X[k] = \sum_{n=0}^{N-1} x[n] \cdot e^{-j2\pi kn/N}
$$

## Code Blocks

C firmware example with syntax highlighting:

```c
#include <stdio.h>
#include "stm32f4xx_hal.h"

#define MOTOR_STEPS 200
#define MICROSTEPS  16

typedef struct {
    GPIO_TypeDef *port;
    uint16_t pin;
    uint32_t step_count;
} stepper_t;

void stepper_step(stepper_t *motor, int direction) {
    HAL_GPIO_WritePin(motor->port, motor->pin, GPIO_PIN_SET);
    HAL_Delay(1);
    HAL_GPIO_WritePin(motor->port, motor->pin, GPIO_PIN_RESET);
    motor->step_count += direction;
}
```

Python data processing:

```python
import numpy as np
from scipy.signal import butter, filtfilt

def lowpass_filter(data: np.ndarray, cutoff: float, fs: float, order: int = 4):
    """Apply Butterworth low-pass filter."""
    nyq = 0.5 * fs
    normal_cutoff = cutoff / nyq
    b, a = butter(order, normal_cutoff, btype='low')
    return filtfilt(b, a, data)

# Usage
raw_signal = np.loadtxt("sensor_data.csv")
filtered = lowpass_filter(raw_signal, cutoff=50.0, fs=1000.0)
```

Rust CLI tool:

```rust
use clap::Parser;

#[derive(Parser)]
#[command(name = "example", about = "Theme showcase CLI")]
struct Cli {
    /// Input file path
    #[arg(short, long)]
    input: String,

    /// Enable verbose output
    #[arg(short, long, default_value_t = false)]
    verbose: bool,
}

fn main() {
    let cli = Cli::parse();
    println!("Processing: {}", cli.input);
}
```

## Inline Code

Configuration values like `MOTOR_STEPS = 200` or shell commands like `make flash` render with subtle styling.

## Features Demonstrated

- ✅ Status badge (ACTIVE)
- ✅ Domain badges (Embedded, CLI)
- ✅ Technology badges — linked when page exists (C, Python, Rust, STM32) / plain when not (Qt)
- ✅ External links (Source · Documentation · Live Demo)
- ✅ Timeline activity segments
- ✅ Milestones (with and without URLs)
- ✅ Related content (Continue Exploring)
- ✅ Backlinks (Linked From)
- ✅ Math rendering (inline + block)
- ✅ Code blocks with copy button + syntax highlighting
- ✅ Section navigation (← All Projects, prev/next)

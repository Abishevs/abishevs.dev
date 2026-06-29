+++
draft = true
date = 2025-06-15T14:00:00+02:00
title = "Theme Showcase — Blog Post"
description = "Example post demonstrating the post profile with rich content."
+++

## Overview

This page demonstrates the **post** profile. Posts are the simplest content type — title, date, and content. No special metadata.

## Profile Features

- ✅ Title
- ✅ Date
- ✅ Related knowledge
- ✅ Backlinks
- ✅ Section navigation (prev/next)

## Technical Writing with Math

When designing a low-pass filter for ADC readings, the cutoff frequency $f_c$ determines how much noise is attenuated. For a first-order RC filter:

$$
f_c = \frac{1}{2\pi RC}
$$

With $R = 10\text{k}\Omega$ and $C = 100\text{nF}$, we get $f_c \approx 159\text{ Hz}$.

## Code in Posts

```c
// Moving average filter — simple and effective
#define WINDOW_SIZE 8

static int16_t buffer[WINDOW_SIZE];
static uint8_t index = 0;

int16_t moving_average(int16_t new_sample) {
    buffer[index++ % WINDOW_SIZE] = new_sample;
    int32_t sum = 0;
    for (uint8_t i = 0; i < WINDOW_SIZE; i++) sum += buffer[i];
    return sum / WINDOW_SIZE;
}
```

Inline references like `WINDOW_SIZE` or `moving_average()` get subtle code styling.

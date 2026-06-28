+++
draft = true
date = 2025-01-15
title = "Theme Showcase — Reading"
description = "Example reading page demonstrating the reading profile with author, reading status, and influence documentation."

author = "Example Author"
year = 2023
readingType = "book"
readingStatus = "completed"
favorite = true
related = ["/technologies/python"]
+++

## Overview

This page demonstrates the **book** profile. Books document ideas that influenced engineering thinking.

## Profile Features

- ✅ Title with "by Author" suffix
- ✅ Year badge
- ✅ Reading status badge (Completed)
- ✅ Favorite flag (★ Favorite)
- ✅ Related knowledge
- ✅ Backlinks

## Key Ideas

The central theorem presented in this book:

$$
\text{Information} = -\sum_{i} p_i \log_2(p_i)
$$

Shannon entropy measures uncertainty — directly applicable to signal encoding in embedded systems.

## Influence

```python
# This book inspired a different approach to data compression
def huffman_encode(frequencies: dict) -> dict:
    """Build Huffman tree from symbol frequencies."""
    import heapq
    heap = [[freq, [sym, ""]] for sym, freq in frequencies.items()]
    heapq.heapify(heap)
    while len(heap) > 1:
        lo = heapq.heappop(heap)
        hi = heapq.heappop(heap)
        for pair in lo[1:]:
            pair[1] = '0' + pair[1]
        for pair in hi[1:]:
            pair[1] = '1' + pair[1]
        heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])
    return {sym: code for sym, code in sorted(heap[0][1:], key=lambda p: p[0])}
```

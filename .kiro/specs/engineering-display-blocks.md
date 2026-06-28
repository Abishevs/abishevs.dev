# Engineering Display Blocks

## Purpose

The website is evolving into an engineering publishing platform rather than a traditional blog.

Many engineering concepts cannot be communicated effectively using only paragraphs, images and source code.

This specification describes future display blocks that should eventually become first-class engineering content within the theme.

This document intentionally does **not** prescribe an implementation.

Instead, it defines long-term architectural goals.

---

# Philosophy

Engineering documentation should be authored using standard Org Mode whenever practical.

The preferred order is:

1. Native Org Mode
2. ox-hugo export
3. Hugo render hooks
4. Hugo shortcodes (only when no suitable Org representation exists)

The theme should adapt to engineering content.

Engineering content should not adapt to the theme.

---

# Design Goals

Future engineering blocks should:

* communicate engineering concepts clearly,
* remain semantically meaningful,
* degrade gracefully,
* integrate with Knowledge Nodes,
* support future cross references,
* remain mobile friendly.

Whenever possible they should be generated from structured data rather than handcrafted HTML.

---

# Register Maps

Support displaying memory mapped peripherals.

Potential features:

* address
* offset
* register name
* access mode
* reset value
* description
* expandable bit fields

Future enhancements:

* hover documentation
* bit highlighting
* register navigation

---

# Bit Fields

Support visualizing register layouts.

Example:

```
31                     16 15     8 7      0

+-----------------------+--------+--------+

| Reserved              | MODE   | ENABLE |

+-----------------------+--------+--------+
```

Future enhancements may include interactive highlighting.

---

# Memory Layouts

Support visual representations of:

* Flash
* RAM
* EEPROM
* linker layouts
* stack/heap organization

Possible future interactions:

* expandable regions
* hover descriptions

---

# Truth Tables

Support compact digital logic tables.

Potential future features:

* highlighting outputs
* Karnaugh map integration
* logic simplification references

---

# Timing Diagrams

Support digital timing diagrams.

Examples:

* SPI
* UART
* I²C
* CAN
* GPIO
* FPGA waveforms

Long-term goal:

Investigate integration with waveform description formats rather than static images.

---

# Protocol Frames

Support protocol frame visualization.

Examples:

* CAN
* Ethernet
* UART
* USB
* BLE

Potential future features:

* byte grouping
* bit annotations
* checksum highlighting

---

# Pinouts

Support connector and MCU pin layouts.

Examples:

* STM32
* ESP32
* RP2040
* Raspberry Pi

Potential future enhancements:

* hover descriptions
* alternate functions
* filtering

---

# State Machines

Support engineering state diagrams.

Potential implementations may include:

* Mermaid
* Graphviz
* PlantUML

The architecture should remain renderer-independent.

---

# Assembly Blocks

Support richer assembly presentation.

Possible enhancements:

* instruction explanations
* register highlighting
* address columns
* machine code bytes
* execution notes

---

# Algorithms

Support pseudocode as a distinct content type.

Separate from source code.

Examples:

* scheduling algorithms
* state machines
* control algorithms

---

# PCB Layouts

Future support for engineering imagery.

Examples:

* PCB renders
* schematics
* routing screenshots
* board revisions

Possible future metadata:

* revision
* board version
* fabrication date

---

# Simulation Results

Support scientific plots and simulation outputs.

Examples:

* oscilloscope captures
* FFT plots
* Bode plots
* logic analyzer traces
* sensor measurements

The theme should provide consistent presentation rather than treating these as generic images.

---

# Data Tables

Support engineering datasets.

Examples:

* benchmark results
* measurements
* calibration values
* timing results

Future enhancements may include:

* sorting
* highlighting
* unit formatting

---

# Extensibility

Engineering display blocks should eventually become modular.

Possible architecture:

```
Engineering Renderer

↓

Code

↓

Math

↓

Figures

↓

Tables

↓

Display Blocks

↓

Register Maps

↓

Timing Diagrams

↓

Truth Tables

↓

Protocol Frames

...
```

Adding a new engineering block should not require redesigning the rendering system.

---

# Future Investigation

Before implementing any engineering block:

1. Determine whether Org Mode already supports it.
2. Determine how ox-hugo exports it.
3. Investigate Hugo render hooks.
4. Only introduce custom shortcodes when no suitable representation exists.

Avoid inventing custom authoring syntax prematurely.

The long-term goal is to preserve a portable Org Mode workflow while providing an engineering-focused publishing experience.


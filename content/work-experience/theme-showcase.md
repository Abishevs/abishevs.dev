+++
draft = true
date = 2024-06-01

title = "Theme Showcase — Work Experience"
description = "Example work experience page demonstrating career profile with organization, duration, and technologies."

position = "Senior Firmware Engineer"
organization = "Example Corp"
startDate = "2024-06-01"
endDate = "2025-05-31"
current = false
location = "Gothenburg, Sweden"
employmentType = "Full-time"
technologies = ["C", "Python", "STM32", "SystemVerilog"]

status = "complete"
related = ["/education/chalmers-mechatronics"]

[[links]]
label = "Company"
url = "https://example.com"
+++

## Overview

This page demonstrates the **career** profile. Work experience pages document professional engineering environments.

## Profile Features

- ✅ Title from `position` field (Senior Firmware Engineer)
- ✅ Subtitle: organization, duration, location, employment type
- ✅ Status badge (COMPLETE)
- ✅ Technology badges — linked where pages exist
- ✅ External links (Company)
- ✅ Related knowledge
- ✅ Backlinks

## Responsibilities

Firmware development for motor control systems. Key equation for PID tuning:

$$
u(t) = K_p e(t) + K_i \int_0^t e(\tau) d\tau + K_d \frac{de(t)}{dt}
$$

## Technical Contribution

```c
// Real-time interrupt handler — 10kHz control loop
void TIM2_IRQHandler(void) {
    if (TIM2->SR & TIM_SR_UIF) {
        TIM2->SR &= ~TIM_SR_UIF;
        int16_t error = setpoint - adc_read(CURRENT_SENSE);
        integral += error;
        int16_t output = Kp * error + Ki * integral + Kd * (error - prev_error);
        pwm_set_duty(clamp(output, 0, 4095));
        prev_error = error;
    }
}
```

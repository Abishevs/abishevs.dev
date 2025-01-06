+++
title = 'Robot Arm Simulator'
date = 2024-12-16
keywords = ["Python", "GUI", "Simulation"] 
thumbnail = '/images/roboarmthumbnail.png'
description = 'Desktop app (PySide6) with 3D view of a robotic arm, with controlls. Central server (Py WS) for controlling servos over Wifi.'
+++

## The vison
It started with a simple goal: build a desktop app to control a robotic arm and
visualize its movements in real-time. But like any good project, it grew beyond
its initial scope. Why stop there when you can create a multi-client
architecture? Now, one GUI controls the arm, and others can join as viewers,
creating a collaborative robotics experience.

Source code on [GitHub](https://github.com/Abishevs/RobotArmSimulator.git)

## Description
The Robotic Arm Simulation and Control Platform is a desktop GUI application
designed to control a real robotic arm. The GUI communicates with a server that
maintains the "true state" of the arm segment positions. The first GUI client
to connect becomes the "Controller," gaining the ability to control the robotic
arm, while subsequent clients are assigned a "Viewer" role to observe the arm's
current position.

### Watch the robotic arm simulator in action!
<iframe  width="560" height="315" src="https://www.youtube.com/embed/qluetKPBPwk?si=8fZOAtvAbCLjRqGj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Key Features
- Real-time Control: Control the robotic arm in real-time through a
  user-friendly GUI.
- Multi-client Support: Multiple clients can connect, with one controlling and
  others viewing.
- Modular Design: Organized into separate projects for the GUI, server, and
  ESP32 client.

## Highlights
- Interactive GUI: The PySide6-based GUI provides an intuitive interface for
  controlling the robotic arm.
- WebSocket Server: The server ensures smooth communication and synchronization
  between the GUI and the robotic arm.
- ESP32 Client: The Arduino-based client handles the physical control of the
  robotic arm.

## What I Learned
This project deepened my understanding of WebSocket communication, Python GUI
design with PySide6, and microcontroller programming with the ESP32. It also
taught me the value of modular design and careful debugging when working across
multiple platforms.

## Future Plans
- Real Robotic Arm Development: Ongoing development of a real robotic arm to
  fully test the platform.
- Software Enhancements: Version 2.0 of the software is in development,
  focusing on adding a feedback loop and movement restrictions.

## Impact
This platform bridges the gap between simulation and real-world robotics. It's
not only a valuable tool for hobbyists and educators but also a stepping stone
for more advanced robotic systems.

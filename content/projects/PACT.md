+++
title = 'PACT (Project Automation and Cloning Tool)'
date = 2024-12-30
thumbnail = '/images/pactthumbnail.png'
+++

## The Vision
Programming involves a lot of repetitive setup—creating directories, copying templates, initializing Git, and setting up tmux sessions. It’s tedious, but essential. That’s where PACT comes in: a tool tailored to automate these steps and make them seamless for developers.

PACT isn't designed to cater to everyone—**it’s my tool for my workflow**, embracing the [suckless philosophy](https://suckless.org/philosophy/) of simplicity and minimalism. 
If you're ready to be blown away check out the source code [GitHub](https://github.com/Abishevs/PACT).

## Why I Built It

- Breaking Free from Rust: The original PACT was written in Rust. While functional, it didn’t align with my vision of simplicity for this project. C offered a clean slate.
- Learning by Doing: Writing PACT in C deepened my understanding of the language and the suckless idiom.
- Customizable Without Complexity: No external dependencies, just a simple config.h for all configurations.

## Features That Matter
### Customizable Project Setup:

Creates structured directories tailored to your project type. Copies templates and boilerplate files automatically. Configurable via config.h—no external configs needed.

### Integrated Git and tmux:

Initializes Git repositories. Launches tmux sessions with all the essentials preloaded.
### Efficient Cloning:

Clones repositories and organizes them within your preferred directory structure. Offers optional renaming for clarity.

## Why PACT is Essential to My Workflow

PACT isn’t just a tool; it’s part of how I program. With a single command, I can go from idea to working environment in seconds. Whether it’s starting a new project or cloning an existing one, PACT simplifies the boring stuff so I can focus on coding.

Here’s a breakdown of how I use it daily:

- New Projects: With one command, PACT creates directories, copies templates, initializes Git, and starts tmux—all set up for coding.
- Cloning Repositories: PACT doesn’t just clone; it organizes and preps the environment, ready to go with tmux running.

## What I Learned
Building PACT in C was a deep dive into:

- The suckless philosophy: understanding simplicity and efficiency at a core level. C’s intricacies: pointers, memory management, and modular design.
- Practical automation: crafting a tool that’s fast, lightweight, and purpose-built.

## The Rewrite Journey The transition from Rust to C wasn’t just about
language. It was about embracing a philosophy:

- Simplicity: No unnecessary dependencies, just the essentials.
- Transparency: Configurations in config.h mean no hidden surprises.
- Efficiency: The tool does what it’s supposed to—no more, no less.

## Future Plans 
PACT is already blazing fast and incredibly useful, but here’s

### what’s next:
- Alias Support: Enable the use of user-defined aliases in init_command.
- More Templates [My Templates](https://github.com/Abishevs/PACT_Templates): Expand the available boilerplate templates for different languages and frameworks.

## Impact on My Workflow 
PACT is more than just a utility; it’s a game-changer for productivity. It’s the glue between my love for automation and my daily development process. Writing it in C made me appreciate the power of simplicity, and every time I run it, I know it’s exactly how I want to work.




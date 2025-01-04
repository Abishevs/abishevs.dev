+++
title = 'Snake Game In C'
date = 2025-01-03T22:17:21+01:00
tags = ['C', 'Terminal']
thumbnail = "/gifs/snakegame.gif"
+++

# Terminal-Based Snake Game
One bored weekend, I thought: "Why not write a snake game in C?". 
It's a relatively easy project, letting me focus on C syntax and improve my proficiency.

You can try it by following instructions on zee [GitHub](https://github.com/Abishevs/TerminalSnakeGame.git)

<script src="https://asciinema.org/a/696925.js" id="asciicast-696925" async="true"></script>

## Features
- Godly and only supported vim motions aka hjkl
- Quitting the game with shift + q (aka Left Thumb + q)
- Cannot eat itself (it dies)
- Cannot escape the frame (it dies)
- Loves red square food (it grows)
- Score (memorization required)

## Objectives 
- Dynamically build a frame using unicode characters 
eg "┌", "┐", "└", "┘", "─", "│".

Example:
```c
┌────────┐
│        │
│        │
└────────┘
```

- Learn what a Linked-list is.
- Have a working Snake Game

## Complications along the way

There were some obstacles along the way, some simple but some took some time to
debug. **Might have been slightly influenced by the late-night hour on the clock**. 

### Building the frame
After going into raw terminal mode. I could move the cursor where I wanted.
But centering the frame was harder than I thought. 

Characters in a terminal are longer than they are wide. Which meant that 
I had to multiply the width by 2 to get a square looking frame. So while that looked
like a square each snake body was still 1 char wide. Making it go twice as fast vertically
(obviously). 

Solution: Make the snake body take up two characters. 
Still a problem: Food is only one character plus a whitespace. That's why its
offset...

### Linked-list
Implementing a linked list in C was an amazing experience. It let me work
directly with memory addresses and practice manual memory allocation—a
fundamental skill in C.

Each segment of the snake's body has a pointer to the `next`, with the tail's
next pointer set to `NULL`. This structure makes it super convenient for the
snake to follow along the path that the head is moving. Watching it all come
together was both satisfying and educational!

To be able to easily add a new body after the tail. I simply made a reference
which kept track of pointers to head and tail. I didn't even need know how many
body elements there are. As updates would just propogate down to the tail!

### Code flow
I spent a lot of time making the code as readable as possible, prioritizing
clarity and functionality. Using pointers wherever I could helped minimize data
copying and made me more comfortable with their quirks (and occasional chaos).
My goal was for each function to do just one thing, which not only made the
code easier to read but also simplified debugging.

That said, not everything went smoothly. For instance, I wanted to add a menu
with a "Press Enter to Start" screen. After hours of tinkering and messing with
the main loop, I hit a roadblock: trying to balance functionality with
cleanliness in the code. Eventually, I decided to scrap the menu idea and focus
purely on gameplay. Maybe I'll revisit it in the future, but for now,
simplicity feels like the right choice—and it works.


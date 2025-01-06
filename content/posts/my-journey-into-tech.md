+++
title = 'From Breaking Toys to Terminal Nerd: My Journey Into Tech'
date = 2025-01-05T15:28:15+01:00
draft = false 
+++

<!-- title = 'Mastering the Terminal: My Journey to an Efficient Workflow Inspired by ThePrimeagen and Luke Smith' -->

## My Ongoing Journey Into Tech
I’ve been thinking a lot about how my journey in tech began. There’s still plenty left to rewrite or fill in, but I want to share the story so far. Maybe someone out there can relate, or maybe it’s just for me to reflect. Either way, here it goes.

## Early Curiosities: Hardware, Tinkering, and Breaking Stuff
From a very young age, I was fascinated by how things worked. My grandfather was a huge influence, he could fix almost anything, whether it was electronics or woodworking projects. He never threw anything away, so we had plenty of old TVs and random electronics lying around. At the age of eight, he taught me to solder, and that was life-changing. Looking back, I guess it makes sense that my two favorite TV channels were Discovery and the Science Channel—I wanted to learn about every machine or gadget I came across.

I used to take apart every toy I owned, boxes piling up with motors, wires, and little circuits. My parents weren’t thrilled because it meant my toys were more often broken than fixed, but I loved discovering how they worked. Sometimes I’d power a motor and watch it spin, then switch the wires to see it spin the other way. That was pure magic. We lived in the city when it wasn’t summer, but I always felt more at home at my grandma’s house outside the city. I even had a small shed my grandpa built. That was my own little workshop, where I’d tinker all day.

I preferred being alone and exploring my geeky interests—everything from mechanical projects to electronics. I only really connected with people who were similarly passionate, whether it was math, programming, or even gaming. It was like if you had your own nerdy zone of genius, I wanted to hang out with you and see what you were all about.

## The First Glimpse of Programming: Web Dev and Distractions
Despite loving hardware, my first exposure to programming was through web development—HTML, CSS, and JavaScript. That happened when I was around 13, thanks to a family friend who worked from home doing remote web dev. They even installed Linux Ubuntu for me, which was my introduction to the world of Linux. But back then, I got sidetracked by gaming. I played a ton of CS:GO on Steam, and I had all sorts of troubles running it on Ubuntu—couldn’t get windowed mode right, couldn’t lower the resolution, and my old PC simply couldn’t handle full HD and high settings. Eventually, I ended up reinstalling Windows.

But those friends gave me resources to learn basic web dev. It was hard, it was boring at times, and I ended up drifting back to my dream of going pro in CS:GO. For four years, I grinded that game, pouring in countless hours building muscle memory and mechanics. I got decently good, but life soon took a different turn.

## Moving to Sweden: Choosing Between Gaming and Studying
I was born and raised in Latvia, but eventually moved to Sweden with no knowledge of Swedish. It felt like starting over. I had to choose: either keep chasing the dream in CS:GO or focus on studying, going to the gym, reading books, and reflecting on life. After a few months, I decided to buckle down and focus on studying. I became curious about building websites, learned the ropes of VPS management, Apache/Nginx, and even took on a part-time gig helping a cleaning company with their WordPress site. I had to rebuild it from the ground up, move it to my VPS, manage backups, and so on.

That was pretty challenging—figuring out which information to put on a website, how to structure or design it. Honestly, I’ve never been super creative in that domain. Still, I learned a lot, and it kept me afloat until I could apply to Swedish high school in a rigorous program called “Teknikvetenskap” (Tech Science). The two years leading up to high school were me cramming Swedish as hard as I could, just so I could write and speak at a high school level. My Swedish teacher was pretty impressed by my first assignment. Sure, my grammar was overcomplicated due to my Latvian and Russian roots, but I was determined.

## High School: The First True Taste of Coding
In high school, I took my first official programming class. Funny enough, I had always said I’d never be a programmer—my childhood self just wanted to stay in the mechanical and hardware realm. But that class changed everything. We started by installing VS Code and following the teacher’s instructions. I still remember the confusion of nested for-loops for drawing grids in Python. Putting that `\n` in the right spot was a headache.

Eventually, we got a project assignment to build a text-based terminal adventure game based on classic literature. My group chose the book "1984" by George Orwell. Even though it was pair programming, I went all-in and spent countless hours on it. Around that time, I discovered [ThePrimeagen](https://www.youtube.com/c/theprimeagen) on YouTube and fell down the rabbit hole of using NeoVim on WSL. Keybindings, configs, everything was new, but it ignited something in me.

I also dove into object-oriented programming a bit earlier than the curriculum demanded, because I hated the idea of stuffing everything into global variables. So I created a central Game class to store data, track rooms, and dynamically update text. I was pretty proud of the Menu class—methods to print menus, validate user input, and handle options like “help” or “hints.” The logic and flow felt so satisfying to build, even if the final game might not have been the most exciting to play.

For the final project of that introductory course, we were formally introduced to classes. By then, I was already running with the concept. I built a Monte Carlo simulation of poker odds—2 to 9 players, support for pre-flop, flop, and turn calculations, argument-based modes, the works. I even structured it as a Python package that could be pip-installed. Arg parsing, well-documented modules, the whole deal. It was overkill for a course assignment, but I couldn’t stop. I was hooked.

## The Window Manager Phase: Ubuntu, i3, and Arch Linux
Sometime after that first intro course—about a year later—my curiosity about Linux desktop environments really spiked. I discovered i3, and its philosophy of keybinding-driven workflows enchanted me. I loved the idea of controlling everything from the keyboard, focusing on muscle memory (like my CS:GO days, but for computing).

I had a locked-down school laptop that needed Windows for official tasks and CAD, so I stuck Arch in a minimal VM for coding. My classmates thought I was crazy, but I refused to go back to Windows for development. Eventually, I replaced Ubuntu on my home machine with a minimal Arch setup because I was so impressed by pacman and everything I’d learned about streamlined Linux workflows.

## Enter the Realm of Split Keyboard 
By the first semester of my third year in high school, I finally took the leap and bought a split keyboard after researching it for ages (inspired again by ThePrimeagen’s streams). As soon as I started typing on it, I knew it was a game-changer. Much like practicing CS:GO movements or mastering i3 keybindings, I spent weeks retraining my muscle memory so each finger had its dedicated zone.

It turned out to be incredibly comfortable—I could bind keys for special characters without wrenching my wrists (especially on the Swedish layout, which hides {} behind awkward Alt Gr combos). My posture improved, my wrists felt better, and my overall workflow soared. That third year in high school was really the pinnacle of my setup: Arch on my main machine, i3 or dwm, NeoVim + Tmux for editing, and a split keyboard to bring it all together. These days, I don’t change my setup nearly as often; I’m pretty happy with how everything “just works.”

## Discovering the Suckless World and Minimalism
Eventually, I started playing around with Arch full-time at home after learning how blazingly fast pacman is. That’s when I discovered [Luke Smith](https://lukesmith.xyz/). Through his videos, I got to know about [Suckless software—programs](https://suckless.org) like `dwm`, `st` and `dmenu` and why they “suck less” thanks to their simplicity. At the time, I didn’t know any C, so modifying and configuring Suckless tools felt a bit alien, but I fell in love with the flexibility it offered over i3.

Luke Smith’s philosophy on minimalism and thoughtful computing struck a chord. I started questioning how I use social media. I still haven’t cut myself off from Instagram or TikTok, but I do enjoy RSS feeds through `newsboat`. I love old-but-gold terminal tools like `mpv` for videos, `nsxiv` for images, `lf` for file management, and so on. Sometimes, I still waste time on mainstream news or YouTube, but I’m trying to reduce the noise and focus on building my own scripts and programs to streamline my workflow.


## Off to University: A Dream Program
By the time I graduated high school, I knew I wanted to merge my love of coding and hardware. I applied to universities and was thrilled to be accepted into a Bachelor of Engineering in Mechatronics at Chalmers. So I packed up, moved to a different city, and started the next chapter—finally in a program that truly resonates with my interests. Yes, it’s challenging to be in a new place all on my own, but it’s also exciting to see how far I can go, blending mechanical, electrical, and software worlds into one.


## What’s Next?
So, that’s where I’m at. There’s more to tell—like the details of my Arch setup, the scripts I’ve written to automate tasks, or how mechanical tinkering has merged with my newfound love for coding. But I’m still figuring out how to structure all that into a coherent story.

If you’ve made it this far, thanks for reading! This journey is definitely ongoing, and I’m excited about whatever new discoveries, hurdles, and rabbit holes come next. Sometimes it’s messy, but I love getting lost in the details of software and hardware. Stay tuned for more posts on my workflow, my mechanical projects, and my continuous (and occasionally chaotic) adventure in tech.

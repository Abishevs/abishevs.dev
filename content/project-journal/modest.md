+++
title = "MODEST Build Logs"
date = 2026-05-07
draft = false
toc = true
related = ["/projects/modest"]
+++

## <span class="timestamp-wrapper"><span class="timestamp">[2026-05-08 Fri 01:30]</span></span> First ever test fit prototype &amp; disc mechanism. {#first-ever-test-fit-prototype-and-disc-mechanism-dot}

Today, late at night, I 3D printed MODESTs' first 6 slot disc prototype. For the perfect fit, perfect rotation, manual dispensing trials.

It was made of 2 seperate parts, placed on the table to simply see alignments, see chip slot tolerances.
Surprisngly, the disc mechanism was promising it might actually work! This is good news as I was sceptical at first- will this ever work? Will a vertical feeder be able to sweep out chips?
The answer was yes! But it was not perfect of course. I made the depth of each slot higher than the chip itself. This meant that it would always stack 2 chips to feed out "1".

I elevated the mechanism by roughly one chip, and then it was able to feed out a single chip!
Off to Fusion360 I go!


## <span class="timestamp-wrapper"><span class="timestamp">[2026-05-11 Mon 10:08]</span></span> Improved previous version prototype with assembly on a fixed z-axis with an exit hole! {#improved-previous-version-prototype-with-assembly-on-a-fixed-z-axis-with-an-exit-hole}

From the first test the question resided- will spinning it by hand on a fixed axis be able to dispense a single chip? How are tolerances now?
TL;DR: It now works, roughly but not perfect. Long answer the disc is now thin, it is roughly 60% of a one chip thickness thus it can bend now.

{{< video "/videos/modest/prototype1.mp4" >}}


## <span class="timestamp-wrapper"><span class="timestamp">[2026-05-16 Sat 04:08]</span></span> It was time to build a motorized working prototype {#it-was-time-to-build-a-motorized-working-prototype}

I came to the CASE lab at around 22:00. Prior working in Fusion360 for around 3 full days desinging the full assembly. It was now time to 3D print all the assembly parts as well and gather hardware I will need.

Of course it wasn't smooth sailing. The designed disc was meant be seated on a one 608 bearing (22mm diameter), guess what that bearing was not in stock anymore. So I had to re-design, switched to biggest one we had in stock 688 (16mm diameter). The design of the disc parametric, thus I thought it would be easy to change, but I also had extra stiffness ribs which got destroyed when I changed to another bearing...  Spent over 2 hours trying to fix it, and finnaly said: "no" and just deleted the stiffening ribs all together. Sliced all the parts and started the prints (3D print "farm" is indeed convient) all were running in parallel. Problem there was also that I tried to fixed the feature instead of just deleting the feature and re-creating a new one. Ehh guess what I was tired, I had been CAD:ing for a lot hours before it.

MODESTs' enclouser would take over 3 hours to print so I was eager to launch the print as soon as possible, it looked good. The first layer failed twice, I think that was the sign. Because half way in the print I saw it- THERE IS NO EXIT HOLE FOR THE CHIPS. What now I thought? 1) Do I stop it now, design the exit hole and print again? wasting another extra 2hours? or 2) let it print, see how it ends up being and then figure it out.  I chose option 2), I took a drill and a dremmel and made the exit hole afterwards, worked out great. At a glance it looked like it was there from the beginning.

{{< video "/videos/modest/prototype2v1.mp4" >}}


## <span class="timestamp-wrapper"><span class="timestamp">[2026-06-14 Sun 18:08]</span></span> Before summer results {#before-summer-results}

Well it is already summer, anyways. This is the progress so far (see the video below).

MVP reached for pre-summer phase, more CAD todo. This version is still only a bit of proof of concept as out-feeder, how to stack multiple such modules are still under question.

I will also now design a new, smaller design. So we shall see if full disc design will live or this will be the last update with this design.

{{< video "/videos/modest/prototype2v2.mp4" >}}

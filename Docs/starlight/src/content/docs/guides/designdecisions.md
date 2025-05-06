---
title: Designing The Machine
description: I made a bunch of decisions, some are smart, some are dumb, but they all have a reason behind them.
---
## **Why is it built like that?**
So you likely looked at the pictures, maybe skimmed the BOM, and thought, interesting....  This page dives deeper into some of the design philosophy and the specific choices made.  Most of it can be summarized as either chasing rigidity or purchasing precision.  

## The Core Philosophy: "Fabricatability" & Purchased Precision
I stumbled upon this idea called "Fabricatability" from the awesome folks behind the Jubilee 3D printer, and it perfectly captured the goal here:

- Use parts you can actually buy in single quantities.
- Use parts available internationally.
- Make the docs clear enough upfront.
- Buildable with common tools (think hand drill, 3D printer – no mill needed to build the mill!).
- Use standard stuff where possible.
- Basically, design it so one person can realistically build it without specialized skills or tools.

Coupled with that was the idea of purchasing precision where it's cheap. Why machine a massive, perfectly flat base if you can buy one?: 

## Key Design Choices & The Reasoning:

### The Base: Granite Slab + Steel Angle

- The first "maybe this could work" moment for the project was when I discovered you could buy "grade A" granite surface plates on amazon and precision ground right angle's for ~$250 USD. 
- This provides an incredibly precise, rigid, and heavy base, mimicking the construction of much larger industrial CNC machines.  The mass from the granite would provide great damping properties, as well as a flat and stable reference. 

 {put an image of  just the granite and Misumi upright here}
 
## Linear Motion: Custom Stages, Not Pre-Built

Originally the hope was to purchase some pre built linear stages from China, they're relatively cheap, come with a ball screw and would make this an even simpler build. If you look a bit closer at their typical construction Often there are only 2 bearing blocks per Rail (you want 4) 
and the non-starter is that the Ball screw supports are often just bolted onto cantilevered plates, this imparts a huge bending moment on them when you're moving the axis, and like so many other things, Leaves a whole bunch of performance on the table. 

My solution was to design custom linear stages, I chose to use the common Openbuilds C-beam system.  
The end geometry is superior because I'm able to use 4 bearing blocks per axis & I can bolt the balls crew supports directly to the end plates for the extrusions. This drastically shortens the load path and supports the load in a much better way.  Even using 3D printed plastic as the endcap the end result is more rigid. 
Since both balls crews and the extrusions come in relatively standard lengths I chose to design it to accommodate that, the hope being you purchase the parts finished and not have to do any machining to fit. 

{Put a picture here of the cantilevered beam vs the design I ended up going with. }

## The Spindle: Sieg X2 Head

The ultimate goal of a mill is to cut material, and the Spindle is an integral part of that. For this particular build I chose a replacement Sieg x2 head, this is because it has some beefy bearings and can stand up to a significant milling load, which is required to cut steel effectively. The bearing diameter is close to the overal diameter of most Chinese spindles on the market, making them significantly stronger in all loading cases.  The “downside” is that cannot be spun as fast, but again for steel that is kind of ideal.   In addition to the monster bearings the milling head is a cast iron piece, this heavy casting helps dampen unwanted vibration and iron is significantly more rigid than aluminum which is a very common spindle connection.  Additionally additionally, the head has an r8 collet attachment. Tormach has a system called TTS or Tormach Tooling system, which allows an r8 collet to be used as if it were a much more expensive ATC system. Plus it’s cheap! 
The lower spindle speed can be a little bit limiting if you’re looking to mill something softer than steel such as aluminum, if you’d like the ability to do both you can always bolt a Chinese spindle to the side of the Sieg milling head. 
{ Add a photo of the milling head with the Chinese spindle on the side, or a picture of the r8 TTS system}

## Assembly: Minimal Tools Required

The goal of the entire assembly process was to adhere to the “fabricatability” mandate. You shouldn’t need a lathe or mill.  This was achieved by focusing on purchasing parts that came with their precision already applied (granite surface plate) or could be configured with 3d printed parts to take advantage of geometry.   I also used 3d prints extensively as a method of transferring hole locations and making assembly steps easier.  Where possible I kept the required tolerance to achieve a satisfactory fit as loose as possible, assuming people were creating this using hand tools.  

{Insert a photo of the assembly process}

## Portability (sort of)
When I first designed this thing, I was living in a 2 bedroom apartment with no workshop, and I even moved it into an apartment in NYC during the first few prototype designs.  One of the goals of the design was that I could break it down into small enough pieces that I could easily carry it into a car (in pieces) and then assemble it again without issue.  Mass is fantastic for a milling machine to stop unwanted vibrations, but the mass doesn’t need to be continuous and there is even some benefit to having decoupled masses. The final design is in the 300 lb range but breaks down into pieces that are no heavier than 80 lbs.  This also technically makes it shippable, even though the shipping costs would be VERY cost prohibitive. 

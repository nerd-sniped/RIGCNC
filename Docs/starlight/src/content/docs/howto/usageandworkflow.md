---
title: Usage and Workflow
description: Everyone's gotta start somewhere
---
Ok, so you built it, now what? 
All the parts have been wrestled together, you drilled a million holes in the granite plate (that sucked more than you expected right?)
Many users of RIGCNC are building it to learn more about how CNC machines work and to see if they would be useful in their process (we encourage hobbyists to build a machine before putting up 40k plus on a big person machine)  Think of this section as a crash course in that process. 

## Basic Workflow CAD -> CAM -> CUT
- Idea -> CAD Model (CAD-Computer-Aided Design):
	-  You "need" a 3D model of the part you want to make. I say need in quotes because the language we use to define part geometry is actually designed to be human readable and programmer friendly, but practically speaking unless your part is very simple it's much more common these days to use a program to generate the necessary code. 
- Model -> Toolpaths (CAM- Computer-Aided Manufacturing)
	- The machine (and all machines) don't understand a 3D model alone, the next step is to generate g-code, which is a machine readable instruction set on how to behave.  
	- CAM software takes your 3D modell, lets you define machine, material, and process parameters (end mill, speeds and feeds, cutting strategies)
	- The generated G-code file (usually a <.nc> or <.gcode> file then can be sent to the machine and executed. 
- Toolpaths -> Motion
	- The software that controls the motors on the CNC machine can take the G-code instruction set and turn that into physical motions of the machine
	- The software also allows you to control when, how and how fast the code is executed, as well as setting up the coordinate system (the G-code assumes the origin is in a specific spot but the machine needs to be calibrated to know where that is in reference to your actual stock piece)
## Getting Ready to Cut (Preflight Checklist):
1. Power up & Home
2. Secure your Stock (Work holding)
3. Load the Tool
4. Set Your Work Zero (X,Y,Z)
5. Load G-Code
6. Final Checks
7. Send it
## Sending It (Making Chips)
1. Turn on the Spindle
2. Start the Job
3. Watch and LISTEN
4. Job Complete
## Post-Cut Clarity
1. Clean up
2. Inspect
3. Remove part
4. Optimize 

That's pretty much it, Each step (CAD, CAM, Work holding etc...) has it's own learning curve, this this workflow is the core of using the RIGCNC (or any CNC machine)
---
title: CNC Fundamentals
description: I'll try to put the FUN in Fundamentals
---
# CNC Fundamentals
CNC? G-code? CAM? What's with all the Acronyms? 
So, you're diving into the world of CNC (Computer Numerical Control). 
A lot of the terms maybe new and I thought it would make sense to break down some of the core ideas to make sure everyone is on the same page. 
## What is CNC?
CNC or Computer Numerical Control just means a computer uses numbers to control a machine.  Before Computers were part of machining, a person would be standing at a milling center turning hand wheels, using the numbers on the hand wheels to keep track of where the machine is.  The computer essentially replaces the person at the machine and can turn the handwheels for us.  
## Axes (X, Y, Z) 
The computer keeps track of it's position in space using X Y and Z coordinates.  By convention, the spindle aligns with the Z axis, in a typical machining configuration this means Z is up and down. X is left and right, and Y is forward and backward.   For those familiar with 3D printers, this is the same convention. One thing that occasionally trips people up is that in a milling machine, it's common to have the milling head stationary, and the work piece move. The axes movement is with reference to the head so a moving the X axis in the positive direction leads to the milling bed moving towards the negative direction. Just something to keep in mind while working on these systems. 
## G-code: 
  Its important to remember that all of these machines are dumb and don't understand "cut a circle here" it understands things in a format "Move quickly to X=10 , Y = 5 " or (G0 X10 Y5) or "move in a straight line at a speed of 100 to Z=-2" (G1 Z-2 F100) 
This list of commands is called Gcode. Gcode is one of the oldest coding languages still in common use today, it's a limited language meaning it doesn't have any logic operators or programmer defined variables. When it was first introduced in the 60s it was primarily written by hand and more literally replaced a person standing at a wheel in front of a machine. It was a set of instructions for movement and the way its written is both human and machine readable.  Now its much less common to be writing gcode by hand and we much more often use a CAM program to write Gcode that is MUCH more complex than would be reasonable to ask of a person.  

## CAM (Computer-Aided Manufacturing)
The earliest forms of Gcode were written by hand and were typically direct replacements of what an operator would be doing manually. CAM allows a programmer to select pre defined parameters for cutting materials and auto generate the gcode for a given machine.  
The modern CAM workflow is 
- Tell the machine where you 3D model is
- Where the stock material is
- Where the machine is in relation to that block
- What tools are being used to cut the material
- How the material should be cut (roughing passes, finishing, speeds, feeds, depths...)
The CAM software then figures out all the precise commands to use and builds a Gcode file from the high level instructions. 
This is the equivalent of slicing software for 3D printing. It allows you to put in a handful of variables and generate thousands of lines of code. 
## Stepper Motors (and other kinds)
CNC machines generate motion by attaching motors to each of the axis, when the motors spin the axis move in a linear and predictable way. Almost all control motors these days are brushless DC motors.  The most common type on a hobby CNC system is a stepper motor, this is a special construction of a brushless motor that is designed to have a high torque at a low speed (and low current draw) allowing them to operate at stall torque nearly continuously. People use these because if they're sized correctly for the application they are the cheapest and computationally simplest way to build an accurate motion control system.

Its important to note that a steppers torque capacity is highest and only measured in full step mode. Many people run their steppers in micro step mode, which is fine for 3D printers but has serious problems for CNC.  The available torque is only 50% at half steps and 30% at quarter steps.  That means if you have a "High Torque 3 Nm" Nema 23 stepper motor, but you run it in quarter step mode the motor only has the torque of a Nema 17 motor.  For this reason it is often better to use a gear box or belt ratio with a stepper motor in full step mode to improve its accuracy instead of relying on micro stepping (at least in applications where you need torque at speed 3D printers are so light it barely matters)

Another type of control motor is a Servo, which technically is a control strategy, but most people mean a closed loop brushless DC motor.  The difference is that these motors are typically not typically designed for continuous stall torque usage but can generate more torque for their size because physics, math and control schemes.  BLDC motors are better for when high speed rotation is necessary, they maintain their torque at higher RPMs than steppers, because of switching frequency and losses.

There are also hybrid steppers, which are stepper motors with a control loop often called closed loop steppers, These are a little bit of a best of both worlds scenario, you still need to size them correctly for the application but they can throw an error when they're about to skip steps which is a normal steppers biggest downside. 

Long story short, you're probably dealing with steppers of some kind, I just felt like the extra context would be nice. 

## CNC Controller
CNC controllers are their own rabbit hole. This is the electronic circuit board that connects the gcode we generated with the stepper motors were trying to control. It also handles things like tool libraries, limit switches, Macros, etc...  Some CNC controllers operate as a program on a PC (MACH 3 and 4, acorn CNC) and some are "headless" meaning they have their own operating system and don't require a live PC connection (BlackBox from Open Builds, Masso Controllers)  There are Pro's and Con's to each.  I personally prefer the Headless versions because they're purpose built, dedicated hardware and tend to have fewer connection and interface issues.    

The choice is largely a selective one, but try to not cheap out on it. This is literally the only thing you're going to be interfacing with on the machine. ALL of your hard work, careful planning, and ability to make parts is going to flow through this unit, so making it pleasant or even convenient to use will greatly increase your desire to use the machine.  If there's any place to "treat" yourself in a CNC build it's the CNC controller.  Most controllers are also very easy to swap to a new build so if you decide to upgrade machines the CNC controller can often follow you to the new hardware. 
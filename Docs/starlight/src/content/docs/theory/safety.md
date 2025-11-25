---
title: Safety
description: A guide in my new Starlight docs site.
---
## TL;DR 
- **PPE:** Eye Protection is mandatory. 
    - Hearing Protection is a good idea
- **Never leave the Mill unattended,** 
    - Not only is it fully capable of breaking itself and all the things around it, itll rub materials together until they start a fire and not even know it.
- **Secure Everying** 
    - We're dealing with very high forces here. Feeling solid in your hand, and actually being held tight are two different things. A mill can toss a piece of metal across the room with no warning.
- **Keep Hands, Hair, Clothing, Jewelry Outside the Moving Vehicle** 
    - A mill can suck you hand in and chew it up without breaking stride. Respect the spinning blades

## Pre flight Check

- Inspect the machine:
	- Check for loose fasteners, damaged cables, worn belts, and coolant leaks.
	- Verify axis travel is unobstructed; remove wrenches, gauges, or setup blocks.
- Workholding:
	- Use a proper vise, clamps, or fixtures—no hand-held work, ever.
	- Ensure stock is fully supported and clamped—no rocking or springing.
- Tooling:
	- Use sharp, undamaged tools of known quality.
	- Seat tools fully in the holder/collet; torque to spec.
	- Confirm tool length offsets are correct and reasonable.
- Software and control:
	- Load the correct G-code file and version.
	- Verify units (mm vs in), work coordinate system (e.g., G54), and safe Z.
	- Home all axes; set a clear, reachable E‑stop and feed-hold.

## During Operation

- Start safe:
	- Begin with single-block or reduced feed override for first cuts.
	- Keep one hand near feed-hold/E‑stop during initial passes.
- Watch and listen:
	- Abnormal chatter, squeal, smoke, or vibration means stop and reassess.
	- Chips should be consistent and not dust-like (too slow) or blue/burnt (too fast).
- Chip and coolant management:
	- Direct chips away from leadscrews, rails, and electronics.
	- Keep coolant or mist under control; avoid puddles on floors.
- No reaching in:
	- Never reach near the tool or work while moving. Stop the spindle first.
- Avoid distractions:
	- No phones or multitasking; keep spectators at a safe distance with PPE.

## Protecting Your Machine and Workspace
- Program conservatively:
	- Use conservative depth of cut, width of cut, and feed for first runs or unknown materials.
	- Ramp or helix into cuts; avoid full-width plunges.
- Collision avoidance:
	- Use CAM simulation and machine dry runs. Verify max travels and clearance.
	- Set soft limits and verify work zero is above the part surface at setup.
- Keep things clean:
	- Brush or vacuum chips frequently; don’t let chips accumulate on rails or screws.
	- Wipe down and lightly oil exposed steel after cutting corrosive materials.
- Electrical safety:
	- Ground the machine properly and use a surge protector.
	- Keep electronics enclosures closed during operation; power down before service
- Tool and spindle protection:
	- Don’t exceed tool stick-out more than needed.
	- Verify spindle warm-up routine at the start of the day (especially for high RPM).
	- Stop immediately if you crash or stall—inspect spindle/toolholder runout before continuing.

## Materials and Tooling Notes
- Metals:
	- Aluminum: Use high RPM, moderate feed, good chip evacuation to avoid welding.
	- Steel: Lower RPM, stable workholding, flood/mist recommended. Watch heat.
	- Stainless/Titanium: Even more conservative—avoid rubbing; use sharp tools and coolant.
- Plastics and wood:
	- Manage heat and chip welding for plastics; avoid excessive RPM.
	- Wood dust is combustible—use dust collection; keep ignition sources away.
- Unknown materials:
	- Start with very light cuts and low engagement; test a scrap first.

## Emergency and Incident Response
- If something sounds wrong: Hit feed-hold, then E‑stop if needed.
- If a tool breaks or part moves: Stop, power down, re-inspect workholding, tool, spindle, and axes before restart.
- Smoke, smell, or electrical fault: E‑stop, then disconnect power at the main. Do not open electronics until fully powered down and capacitors discharged.
- Report and learn: Note what happened, update your CAM/feeds/fixtures, and perform a fresh dry run.

**Disclaimer**
DIY CNC machines can cause injury or damage if used improperly. Operators are responsible for safe setup and operation. When in doubt, stop and reassess before proceeding.

[Link to the discord](https://discord.gg/gqbpDNPKsQ)
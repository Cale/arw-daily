---
title: Community HamClock Backend Server Now Available
date: 2026-02-24
excerpt: This free service keeps your HamClock running indefinitely.
source: HamClock.com
sourceurl: https://hamclock.com/
tags:
- post
- HamClock
---
The first known community backend server for HamClock is now available for all HamClock users. The project, [hamclock.com](https://hamclock.com/), is free for anyone to use and will keep existing HamClock installs running indefinitely.

> Major work beyond OHB includes: rewriting the VOACAP propagation engine with cubic interpolation, building weather pressure maps in both millibar and inHg units at five resolutions, adding aurora map generation, real-time PSK Reporter spot data, Kp index from NOAA SWPC, overhauling satellite TLE tracking, and hardening the entire server for production use serving 1,600+ HamClocks.

With the [passing](https://daily.hamweekly.com/2026/01/hamclock-creator-elwood-downey-wb0oew-silent-key-hamclock-to-shut-down/) of HamClock creator Elwood Downey (WB0OEW), HamClock will stop working in June unless users point their installations to a new backend service. Updating existing HamClock installations is a simple task. Users have two options, updating their hosts file, or updating the command used to start HamClock. Both require only simple text changes.

Hamclock.com is run by Bruce Edrich (W4BAE) and is built upon [open-hamclock-backend](https://github.com/BrianWilkinsFL/open-hamclock-backend).

Headlines from *Amateur Radio Daily* are made available to HamClock via open-hamclock-backed.
---
title: 'DXLook Adds a New Antenna View: How Well is Your Antenna Actually Working?'
date: 2026-11-02
excerpt: No test gear, no second station, and no need to ask a friend for an S-meter report.
source: DXLook
sourceurl: https://dxlook.com/
tags:
- post
- DXLook
---
*The following is a press release from [DXLook](https://dxlook.com/):*

No test gear, no second station, and no need to ask a friend for an S-meter report.

**[DXLOOK.COM](https://dxlook.com/), Nov. 2, 2026**. Sooner or later, every ham wonders the same thing: Is my antenna actually any good?

DXLook now offers a practical way to answer that question using real-world reception reports.

The new **Antenna** view — available under **Maps → Antenna** using the 🧭 button — takes your callsign, finds nearby stations, and compares how your signal performs against theirs at the same receiving stations.

### How it works

Receivers around the world continuously report what they hear to networks such as **WSPRnet** and **PSK Reporter**.

When the same receiver hears both you and another station located within 300 km of you at roughly the same time, most of the variables are shared: the receiving station, local noise, propagation path, and receiver conditions.

That makes the comparison much more meaningful.

DXLook repeats this process across many nearby stations and receivers, then uses the median result so that one unusually strong or weak neighbour does not distort the picture.

**WSPR:** comparisons use the same 2-minute transmission slot and data from the last 1 to 7 days. Reported transmit power is normalized out of the comparison.

The result is intentionally simple:

On 20 m over the last 7 days, you were 2 dB stronger than nearby stations.

**FT8** and **FT4**: PSK Reporter does not include transmit power, so direct signal-strength comparisons can be misleading. A station running 100 W would naturally appear about 10 dB stronger than one running 10 W, regardless of antenna performance.

DXLook works around this by calculating each neighbour’s typical difference relative to your station and removing that baseline from the comparison.

The absolute power difference effectively drops out, leaving a relative pattern that shows **where your station performs better or worse than its own typical result.**

FT8 and FT4 comparisons are grouped by receiver and 30-minute time block using reports from the last 24 hours.

### What you see

The Antenna view breaks results down by:

- Direction, using 30° sectors
- Distance range
- 3-hour UTC time windows

Results are displayed in a polar chart and directly on the map.

Green arcs indicate directions where your signal performed better than the nearby reference stations; red arcs indicate weaker performance. Dashed arcs identify results based on fewer than 20 paired decodes.

A companion table explains the results in plain language and provides simple rule-based observations.

For example, if your signal is consistently weak beyond 6,000 km, DXLook may suggest looking at antenna height, ground conditions, or radial systems. If performance drops off toward the ends of a horizontal dipole, it may point out that this can be normal for that antenna pattern and ask how the antenna is oriented.

## What it’s useful for

**Check an antenna change**. Raise the antenna, add radials, rotate a dipole, or modify the installation, then compare the results before and after.

**Find the weak side**. See which directions or distance ranges consistently underperform instead of relying on individual QSOs or anecdotal signal reports.

**Compare two antennas at the same location**. Operate the second antenna under another callsign and compare their results directly.

### What makes it different

Station-to-station comparison tools already exist, particularly for WSPR, and some of them do an excellent job.

DXLook approaches the problem differently in three areas:

1. **It chooses the reference stations automatically**. Nearby stations within 300 km become the comparison group, and their results are combined using a median. You do not need to manually choose a reference station or know anything about its antenna system.
2. **It can analyze FT8 and FT4 without knowing transmit power**. Because the method removes each neighbour’s usual signal offset, DXLook can extract directional and distance patterns from modes where transmit power is not reported.
3. **Direction, distance, and time are analyzed together**. Instead of presenting only a single dB difference, the Antenna view shows how performance changes with bearing, path length, and UTC time — and translates those results into readable observations.

### What it won’t tell you

The Antenna view is not an antenna analyzer and does not calculate absolute gain in dBi.

For **FT8 and FT4**, the result represents the shape of your relative performance: where your station performs better or worse than its own typical result. It does not determine whether your antenna is globally better or worse than another station’s antenna.

**WSPR**, because transmit power is reported, can also provide a meaningful overall signal comparison.

Recent data is required: WSPR uses reports from the last 1 to 7 days, while FT8 and FT4 use the last 24 hours.

Results are refreshed every 30 minutes.

    “The data was already out there, coming from thousands of receivers around the world. The Antenna view simply lines those reports up in a way that lets you see what your antenna is actually doing.” — Rodrigo Vazquez, AK6FP

**Where: [dxlook.com](https://dxlook.com/) → Maps → Antenna**

The DXLook guide also includes a dedicated chapter with worked examples and additional explanation of the methodology.

**About DXLook:** DXLook is a real-time HF and VHF propagation visualization platform for amateur radio, created and operated by Rodrigo Vazquez, AK6FP. It combines reception reports from multiple networks and presents them through interactive maps, propagation tools, and space-weather data
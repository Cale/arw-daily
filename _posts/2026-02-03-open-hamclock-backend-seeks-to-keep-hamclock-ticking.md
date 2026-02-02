---
title: open-hamclock-backend Aims to Keep HamClock Ticking
date: 2026-02-03
excerpt: The goal is to preserve HamClock for years to come.
source: open-hamclock-backend
sourceurl: https://github.com/BrianWilkinsFL/open-hamclock-backend
tags:
- post
- HamClock
- Open Source
---
A group of ham radio operators have stepped up to keep HamClock operating beyond it's [scheduled sunset](https://daily.hamweekly.com/2026/01/hamclock-creator-elwood-downey-wb0oew-silent-key-hamclock-to-shut-down/) in June. An open source replacement for the backend processes required to keep the popular HamClock project alive is well under way. 

Developed by Brian (KO4AQF) and Austin (KN4LNB), [open-hamclock-backend](https://github.com/BrianWilkinsFL/open-hamclock-backend) is designed to be a drop-in replacement for the backend server that populates HamClock with its signature set of 40+ data points and visualizations.

From Brian (KO4AQF):

*HamClock relies on an internet backend to provide live space-weather, propagation, DX, and news data. With the passing of its original developer, that backend is no longer being maintained, which means many HamClocks will gradually lose live functionality even though the devices themselves still work.*

*An open-source replacement backend is now being developed that recreates the same data feeds HamClock expects, using publicly available sources such as NOAA, space-weather services, PSK Reporter, and DX information sites. From the HamClock’s point of view, nothing changes — it connects to the same paths and receives the same data formats, without any firmware modification. We are very close to replicating nearly every possible data source and making slight improvements along the way.*

*The system is free, open-source, and designed to run locally on a small Linux system, allowing individual hams or clubs to keep existing HamClocks fully operational. The goal is preservation, not reinvention — keeping HamClock working exactly as intended for years to come.*

Currently, open-hamclock-backend is designed to be self-hosted, requiring any user wishing to extend HamClock's usefulness beyond June to run the software themselves. However, options are being considered for a centralized version to be stood up for all HamClock users to take advantage of.
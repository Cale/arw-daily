---
title: Open AMBE Voice Codec Decodes, Encodes D-STAR, DMR
date: 2026-11-18
excerpt: Companion xombe-stick acts as drop-in replacement for AMBE-300X USB sticks.
source: x0rro
sourceurl: https://github.com/x0rro/xombe
tags:
- post
- AMBE
- D-STAR
- DMR
---
From the author that released [xara](https://www.zeroretries.org/i/223963879/vara-vs-xara-the-bigger-picture), comes a new set of open source tools that may lower the barrier to entry to digital voice modes such as D-STAR and DMR.

[xombe](https://github.com/x0rro/xombe) is a library written in C that implements AMBE 2400 and AMBE+2 which is used by D-STAR and DMR for encoding and decoding digital voice. This new library is at the heart of [xombe-stick](https://github.com/x0rro/xombe-stick) which intends to be a drop-in replacement for AMBE-300X USB sticks. The xombe-stick takes the form of firmware for the Raspberry Pi Pico 2. 

In theory, xombe-stick could replace expensive AMBE USB sticks such as the DVStick 30 which is often paired with the BlueDV software solution. This combination of hardware and software can allow ham radio operators to utilize D-STAR and DMR without the need to invest in expensive transceivers and hotspots.  

The author notes that [patents around AMBE](https://en.wikipedia.org/wiki/Multi-Band_Excitation) may still be in play and users should consider obtaining an AMBE license. 
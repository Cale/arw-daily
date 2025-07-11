---
title: S50CLX Telnet DXCluster focuses on POTA, BOTA, SOTA, WWFF
date: 2025-07-11
excerpt: An array of options help to narrow searches.
source: S50CLX DXCluster
sourceurl: https://s50clx.infrax.si/
tags:
- post
- S50CLX DXCluster
---
*The following is a message from Danilo (S50U):*

## POTA, SOTA, WWFF, BOTA enthusiasts!

POTA (Parks On The Air), SOTA (Summits On The Air), WWFF (World Wide Flora and Fauna), WWBOTA (World Wide Bunkers on The Air) are internationally renowned programmes. They encourage licensed radio amateurs to operate outdoors within nature parks, mountain peaks or protected areas. Operators making contacts from bunkers, parks, from summits or from protected flora and fauna areas are called activators and operators who are contacted are called hunters.

On the S50CLX telnet DXCluster I implemented the collection of spots from BOTA, POTA, SOTA, WWFF that are not part of the classical telnet DXCluster network (botacluster, potaapp, sotawatch, wwffwatch). Such spots are tagged with [-POTA-] [-SOTA-] [-WWFF-] [-BOTA] respectively. In the comment field a spot tagged as such carries:

POTA:   
- International POTA reference number, example: SI-0831
- Mode of operation, example: FM
- POTA reference name, example: Preval Vrh Ravni

SOTA:   
- International SOTA peak reference number; example: S5/CP-002
- Mode of operation; example: SSB
- SOTA summit name, altitude, points; example: Porezen, 1630m, 8 points

WWFF:   
- International WWFF reference number; example: S5FF-0262
- Mode of operation; example: FT8
- WWFF reference name, example:: Cerkno – Soteska Potoka Zapoška

BOTA:   
- International BOTA reference number, example:: B/S5-0513
- Mode of operation, example: CW
- BOTA bunker name, example: Gorje Utrdba 1 – utrdba,bunker
Filtering

With the right settings, the exact DX spots you want can be received and this is achieved using the filters below. To change an existing filter, simply overwrite it with a new command. Each command (BOLD formatted text) must be entered on a new line. Confirm the entry by pressing ENTER.

- for receiving only POTA spots, command: ACC/SPOTS INFO -POTA-
- for receiving only SOTA spots, command: ACC/SPOTS INFO -SOTA-
- for receiving only WWFF spots, command: ACC/SPOTS INFO -WWFF-
- for receiving only BOTA spots, command: ACC/SPOTS INFO -BOTA-
- for receiving POTA and SOTA spots execute the command: ACC/SPOTS INFO -POTA- OR INFO -SOTA-
- for receiving only POTA, SOTA, WWFF and BOTA spots execute the command. ACC/SPOTS INFO -POTA- OR INFO -SOTA- OR INFO -WWFF- OR INFO -BOTA-

The CLEAR/SPOTS ALL command removes all set filters and the S50CLX passes us all DXCluster and optionally RBN (SET/SKIMMER &lt;mode&gt;) spots.

In cases where you do not want to receive POTA, SOTA, WWFF, BOTA spots e.g. in a contests, use the command as the first filter before all others. REJ/SPOTS 1 INFO -POTA- OR INFO -SOTA- OR INFO -WWFF- OR INFO -BOTA-

In addition, you can search the database of spots with the text contained in the comment field. For example to check DX spots for a recent activation from a POTA park with reference number SI-0772 execute the command SH/DX INFO SI-0772

S50CLX DXSpider DXCluster

Spots forwarding is based on the DXSpider DXCluster software validation and normalisation algorithm, rejecting duplicates and ensuring quality spots. All this in the face of increasingly frequent malicious attacks on the global amateur DXCluster network. Some spots are duplicated (same callsign and frequency) with POTA spots where the maximum frequency of spots sent. In these cases the user is forwarded the first one that arrives in the system regardless of tagging. The age of the S50CLX dxcluster duplicated, double spots is 300 seconds.

The S50CLX DXCluster can be reached via telnet at s50clx.infrax.si port 41112

Suitable for your HamClock, your daily Logger, your telnet client program...etc. In case of problems email me which spots you want to receive and I'll set them up for you. The email address is correct at qrz.com.

My small contribution to the promotion of outdoor activities in hamradio. Spread the news, thanks. 🙂

73 Danilo S50U sysop S50CLX DXCluster
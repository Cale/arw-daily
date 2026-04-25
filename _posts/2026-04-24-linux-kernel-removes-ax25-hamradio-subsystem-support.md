---
title: Linux Kernel Drops AX.25 and Amateur Radio Subsystem Support
date: 2026-04-24
excerpt: Unmaintained code under scrutiny by AI generated bug reports.
source: Phoronix
sourceurl: https://www.phoronix.com/news/Linux-7.1-Removes-Old-Net
tags:
- post
- Linux
- AX.25
- AI
---
Earlier today Linus Torvalds [merged](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=64edfa65062dc4509ba75978116b2f6d392346f5) a pull request to [remove AX.25 and hamradio subsystem support from the Linux kernel](https://www.phoronix.com/news/Linux-7.1-Removes-Old-Net). While the headline sounds ominous, most modern AX.25 implementations occur in software at the user level without relying on the kernel level implementation. [Direwolf](https://github.com/wb2osz/direwolf), for example, does not require kernel level AX.25 support. Other software relying on AX.25 may take advantage of dedicated AX.25 Python libraries.

The change comes as a result of AI based bug detection services capable of identifying critical issues among code that may no longer be maintained or utilized by end users. Torvalds [stated](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=64edfa65062dc4509ba75978116b2f6d392346f5) that the amateur radio related code in the Linux kernel no longer had any active maintainers:

> Amateur radio did have occasional users (or so I think) but most users switched to user space implementations since its all super slow stuff. Nobody stepped up to maintain the kernel code.

According to [typesense](https://linux-commits-search.typesense.org/?commits%5Bquery%5D=ax25) the last Linux kernel commit related to AX.25 was 6 years ago.

Additional code removed includes ISDN support, [bus mouse](https://en.wikipedia.org/wiki/Bus_mouse) support, and various network drivers including support for old 3Com devices. 
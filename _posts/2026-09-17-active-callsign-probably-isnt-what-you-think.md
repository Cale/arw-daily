---
title: '"Active" call sign probably isn’t what you think'
date: 2026-09-17
excerpt: Understand what "active" means when you look up a call sign.
source: Rob Rosenberger (K4HST)
sourceurl: https://daily.hamweekly.com/2026/09/active-callsign-probably-isnt-what-you-think/
tags:
- post
- Call Signs
---
*By Rob Rosenberger (K4HST)*

Do this: visit the [FCC call sign lookup](https://wireless2.fcc.gov/UlsApp/UlsSearch/searchLicense.jsp) and search for W0QUF. It says right there on the page: "Status: Active." **Except it's not**. Look farther right and you'll see its grace period started in January. Now search for it at the [ARRL call sign lookup](https://www.arrl.org/advanced-call-sign-search). They give you no hint it's in a grace period.

Do an FCC lookup on KD0NZJ. It's long expired, right? **Except it's not**. Look to the left and you'll see a "PA" icon, which means it remains active [pursuant to FCC rule 1.62](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-1/subpart-A/subject-group-ECFRb4174c447257359/section-1.62). If you look it up on ARRL, it'll say "(Administrative Update Applied)" below the expiration date. They give you no hint you can lawfully communicate with them.

Neither FCC nor ARRL offer visual cues on their search pages when you look up a call sign. You must inspect the data with your **calibrated eyeballs** to confirm its status.

So, let's go over what you need to know. We'll break it down into five categories:

A **"live"** call sign is marked active and can transmit. It has not reached its expiration date. Roughly 90% of all "active" call signs fall into this category.

A **"dagger"** call sign is marked active and can transmit regardless its expiration date. A "pending application" extends its life. Roughly 430 call signs fall into this category (a scant 0.05%) and the FCC often spends years resolving them.

A **"grace"** call sign is marked active yet cannot transmit. It exceeded its expiration date, lies within its two-year grace period, and has no pending application. Roughly 10% of all "active" call signs fall into this category.

A **"zombie"** call sign is marked active yet cannot transmit. It exceeded its grace period with no pending application, yet the ULS database failed to mark it expired. The most recent example is KI4FHE. (If you run an FCC lookup, do not have any liquids in your mouth! You've been warned.) Zombies might pop up for a day or two if the second anniversary of their expiration date falls on a holiday Monday.

A **"dead"** call sign is marked canceled, expired, or terminated. Enough said.

You might ask "where did these five terms come from?" The short answer: The interwebs apparently had no terms for them and I needed a **taxonomy** for the [niche PDF amateur radio call books](https://w4zbb.org/resources) I produce. My searches of online amateur radio literature, developer repositories, and the FCC's ULS documentation revealed no similar published model ... so I offer this to the public domain:

| Terminology | FCC Status | ULS LicenseStatus | Expiration Date | Additional Condition | Output / Action |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **Live** | Active | A | Future | None | Standard black text |
| **Dagger** | Active | A | Past (Any length) | Pending application | Superscript dagger (†) e.g. WQXN317 since 2021-04-20 |
| **Grace** | Inactive | A | Past (< 2 years) | No pending app | Dark red text e.g. WA4RHD |
| **Zombie** | Inactive | A | Past (>= 2 years) | No pending app | Triggers logging warning e.g. KI4FHE from 2026-04-26 to 2026-09-09 |
| **Dead** | Inactive | Non-A | N/A | None | Excluded from output |

Ta da! You now understand what "active" means when you look up a call sign on a search page. Calibrate your eyeballs for the FCC, shame the ARRL webmaster for me, and 73!
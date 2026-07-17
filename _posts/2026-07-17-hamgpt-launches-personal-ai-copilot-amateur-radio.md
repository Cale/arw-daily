---
title: HAMgpt Launches as a Personal AI Copilot Built Specifically for Amateur Radio
date: 2026-07-17
excerpt: '"What can I do with my radio today?"'
source: HAMgpt
sourceurl: https://hamgpt.co/
tags:
- post
- Press Release
- HAMgpt
---
**New platform combines an operator's license, station, location and live band conditions to answer a practical question: "What can I do with my radio today?"**

July 2026 — HAMgpt, a new AI assistant created specifically for amateur radio operators, is now open to the public at hamgpt.co.

Unlike a general-purpose chatbot, HAMgpt is built around the real operating situation of each ham. It can take into account the operator's license class, country, grid square, radios, antennas and operating history, then combine that station profile with live propagation, space weather, DX activity and current on-air conditions.

Its main purpose is to answer one deceptively simple question:

> What can I do with my radio today?

Amateur radio offers an enormous range of possibilities: local repeaters, HF DX, satellites, digital modes, POTA, emergency communications, antenna building, contesting and experimentation. For many newly licensed operators, however, the first experience is much less exciting. They pass the exam, buy an HT or an entry-level rig, turn it on, hear static or silence, and do not know what to try next.

HAMgpt was built to help with that exact moment.

"Many new hams do not leave the hobby because they lack information," said Rodrigo Vazquez, AK6FP / LU6ERV, creator of HAMgpt. "They leave because nobody tells them what to actually do with the radio in their hand. HAMgpt is not trying to out-explain a general chatbot. It is trying to be the reason someone gets on the air instead of putting the radio back in the box."

## A Personal Digital Elmer

In amateur radio, an experienced operator who helps others learn the hobby is traditionally known as an Elmer. HAMgpt is designed to work like a personal digital Elmer that already knows the operator's station.

Users can save their license class, location, exact radio models and antennas. HAMgpt reuses that information across conversations, so the operator does not need to explain the same setup every time. That context changes the quality of the answer.

A general explanation of repeaters may be technically correct, but a new ham with an HT usually needs something much more practical: which nearby repeater is likely to be reachable, what offset and tone to use, how to program that specific radio, and what to say when making the first call.

An HF operator may not need another generic explanation of propagation. The useful answer is which bands are active right now, which ones are covered by the station's antenna, what paths are currently open, and where it may be worth calling CQ.

HAMgpt is designed to connect those pieces.

## Personalized to the Operator and the Station

HAMgpt uses a persistent station profile that can include:

- License class and country.
- Maidenhead grid locator.
- Multiple radios, including exact makes and models.
- Multiple antennas and the bands they cover.
- Operating history and imported logbook data.

Every answer can be adjusted to the user's actual station and legal privileges.

For example, HAMgpt can help:

- Identify repeaters that may realistically be worked with a particular HT or mobile rig.
- Suggest HF bands based on live conditions and the antennas installed at the station.
- Recommend satellite passes that fit the operator's equipment.
- Find nearby POTA parks to activate.
- Explain how to configure a specific rig for FT8, Winlink, APRS or satellite work.
- Provide antenna dimensions and construction guidance for the operator's target band and available space.

This is what separates HAMgpt from a generic ham-radio Q&A system. The goal is not merely to answer, "What is a repeater?" or "What is an inverted-V?" The goal is to answer, "What should I try with my station right now?"

## Powered by Live Data from DXLook

HAMgpt is the sister project of DXLook, the live amateur radio propagation and activity platform also developed by Vazquez. The two projects divide the problem clearly:

- DXLook shows what is happening on the air right now.
- HAMgpt helps an individual operator decide what to do about it.

HAMgpt uses DXLook's live data services for band conditions, propagation, space weather and on-air activity. This allows it to go beyond textbook answers about how a band normally behaves.

Instead of saying that 10 meters can be good for DX when conditions improve, HAMgpt can use current data to explain whether 10 meters is active now, what paths appear open, and whether the operator's own antenna and rig are suitable for taking advantage of it.

DXLook acts as the live sensor layer. HAMgpt acts as the personal decision and guidance layer on top of it.

## Designed for Trust in a Regulated Hobby

Accuracy matters in any technical field, but amateur radio has an additional complication: it is a regulated service.

Wrong information about frequency privileges, transmit power, band plans, repeater settings or operating rules can cause more than confusion. It can put an operator outside the privileges of the license.

HAMgpt is therefore built around a "deterministic-first" approach.

Critical information such as license privileges, official exam questions, live band data and verified technical values is obtained from structured tools, official sources and rule-based systems whenever possible. The AI reasoning layer is used where interpretation is actually useful, such as troubleshooting a station, explaining an analyzer reading, planning an antenna build or combining several pieces of information into an operating recommendation.

The product also applies multiple accuracy checks intended to prevent invented frequencies, incorrect tone or offset values, and advice outside the operator's license privileges.

License class is treated as a hard constraint throughout the product, not as an optional profile detail.

## What HAMgpt Can Do Today

HAMgpt is already live with a broad set of features intended for both new and experienced operators.

### Live operating guidance

HAMgpt provides a live view of band conditions, space weather and recent DX activity. Recommendations can be filtered through the operator's own radios and antennas, helping identify which bands are not only open, but actually usable from that station.

It can also provide:

- Repeater suggestions based on location and equipment.
- Satellite pass predictions with direction, elevation and timing.
- Nearby POTA parks for activation.
- Local net and APRS activity.
- Band-opening and solar-flare notifications.

### Antenna design and building help

HAMgpt includes a complete antenna-building layer rather than acting only as a calculator.

Operators can request build sheets for:

- Dipoles.
- Inverted-V antennas.
- Verticals.
- Yagis and beam antennas.
- Moxon antennas.
- Magnetic loops.

The system can provide element lengths, spacing, boom dimensions, feed and matching options, expected performance, material suggestions and safety information. For magnetic loops, it can also calculate tuning capacitance, expected bandwidth, efficiency and capacitor voltage requirements.

To-scale diagrams can be generated directly in the chat.

HAMgpt can also help with practical construction tasks such as winding a choke balun, building a 49:1 transformer, choosing wire or tubing, weatherproofing feed points, and trimming an antenna to resonance.

### NanoVNA and image analysis

Operators can upload a NanoVNA .s1p file and receive an SWR-versus-frequency plot showing the resonant point, usable bandwidth and the 2:1 SWR line, together with a plain-language explanation of what the sweep means.

HAMgpt can also analyze photos of:

- Radio displays.
- SWR meters.
- Antenna analyzers.
- Smith charts.
- Antenna installations.
- Station wiring.

For exact measurements, a NanoVNA data file remains the preferred source, but photo analysis can be useful for identifying what an instrument or rig display is showing.

### Radio-specific help

HAMgpt recognizes a growing range of popular rigs from manufacturers such as Yaesu, Icom, Kenwood, Elecraft, FlexRadio, Xiegu, Apache Labs and others.

Operators can ask model-specific questions about setup, features and common operating problems, including:

- Menu and operating setup.
- Digital-mode configuration.
- CAT, PTT and audio troubleshooting.
- Tuner and antenna compatibility.
- Satellite and full-duplex capability.
- Common problems and error conditions.
- Help selecting a rig for a particular operating goal.

### Winlink Express setup

HAMgpt includes dedicated step-by-step help for Winlink Express, one of the most useful but sometimes difficult pieces of amateur radio software to configure.

It can guide an operator through:

- Account creation and registration.
- VARA HF and VARA FM setup.
- Digirig, SignaLink and CAT cable connections.
- COM ports, PTT and audio levels.
- Sending the first message.
- Troubleshooting failed connections.

### Learning and exam preparation

HAMgpt includes the official NCVEC practice question pools for all three U.S. amateur radio license classes:

- Technician.
- General.
- Amateur Extra.

The quiz system automatically selects the appropriate pool based on the operator's current license, while still allowing the user to choose any exam level.

### Logbook and station history

Operators can import an ADIF logbook and receive a summary of their own on-air activity.

HAMgpt also keeps searchable conversation history, making it easier to return to previous antenna designs, setup instructions, troubleshooting sessions or operating plans.

## International and Multilingual Support

HAMgpt is not designed as a U.S.-only system.

It currently provides full license-class-aware support for operators in:

- The United States.
- Canada.
- The United Kingdom.
- Australia.
- Japan.
- Argentina.

Guidance follows the relevant license classes, band plans and power limits for each supported country.

HAMgpt can also help with reciprocal and temporary operating questions, including CEPT, IARP, visitor permits and call sign requirements while traveling.

The assistant supports English, Spanish, Italian, Portuguese, French, German and additional languages, allowing operators to ask technical questions in the language they are most comfortable using.

## Built by a Working Ham

HAMgpt and DXLook are independently built and operated by Rodrigo Vazquez, AK6FP / LU6ERV, an active amateur radio operator.

The project grew from a simple observation: amateur radio does not suffer from a shortage of information.

The hobby already has excellent manuals, databases, clubs, forums, videos, band-plan documents and specialist tools. The harder problem is turning all of that into a useful next step for one specific operator, using one specific radio and antenna, under current band conditions.

"The rig someone owns, the antenna they installed, their license privileges, their grid and what the bands are doing right now all matter," Vazquez said. "Without that context, an answer can be technically correct and still not help the operator get on the air."

## Availability

HAMgpt is available now at [hamgpt.co](https://hamgpt.co).

A free, ad-free tier is available with daily usage limits. HAMgpt Plus offers higher limits, additional live-data lookups and deeper personalization based on the operator's station and logbook.

There are no ads on either plan.

## About HAMgpt

HAMgpt is a personal AI copilot for amateur radio operators. Instead of providing only generic explanations, it combines an operator's license class, location, radios, antennas and logbook with live band conditions and on-air activity to provide practical, station-specific guidance.

HAMgpt is the sister project of DXLook, a live amateur radio propagation and activity platform. Both products are built and operated by Rodrigo Vazquez, AK6FP / LU6ERV.

**Website:** [https://hamgpt.co](https://hamgpt.co)   
**DXLook:** [https://dxlook.com](https://dxlook.com)   
**Press contact:** [qso@dxlook.com](mailto:qso@dxlook.com)
---
title: Latest FreeDV GUI Includes RADE HF Digital Voice Mode
date: 2024-10-22
excerpt: New mode begins over the air tests.
source: FreeDV
sourceurl: https://freedv.org/freedv-2-0-0-20241018-released/
tags:
- post
- FreeDV
- RADE
- Digital Voice
---
The latest version of FreeDV [includes a new digital voice over HF mode](https://freedv.org/freedv-2-0-0-20241018-released/) titled Radio Autoencoder (RADE). Previous updates have abbreviated the mode as RADAE. The new mode has been in development since early 2024 and is now entering a phase of real time, over the air testing. A [September FreeDV update](https://freedv.org/davids-freedv-update-september-2024/) includes recorded samples of the mode from over the air tests. The samples include QSOs ranging from 800-13,000 km and 2-5db SNR.

**Editor's note:** To this ham's ear, the voice quality from the provided examples sound far superior to any previously released FreeDV HF digital voice modes!

[RADE description from the GitHub project]():

> A hybrid Machine Learning/DSP system for sending speech over HF radio channels. The RADAE encoder takes vocoder features such as pitch, short term spectrum and voicing and generates a sequence of analog PSK symbols. These are placed on OFDM carriers and sent over the HF radio channel. The decoder takes the received PSK symbols and produces vocoder features that can be sent to a speech decoder. The system is trained to minimise the distortion of the vocoder features over HF channels. Compared to classical DSP approaches to digital voice, the key innovation is jointly performing transformation, prediction, quantisation, channel coding, and modulation in the ML network.
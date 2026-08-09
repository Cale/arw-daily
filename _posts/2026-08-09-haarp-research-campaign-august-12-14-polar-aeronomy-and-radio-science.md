---
title: HAARP to Conduct Research Campaign Supporting PARS Summer School
date: 2026-08-09
excerpt: 21 experiments related to ionospheric research will take place.
source: HAARP
sourceurl: https://haarp.gi.alaska.edu/
eventdate: 2026-08-12
eventdateend: 2026-08-14
tags:
- post
- event
- HAARP
---
*The following is a press release from the High-frequency Active Auroral Research Program at the University of Alaska Fairbanks:*

The High-frequency Active Auroral Research Program ([HAARP](https://haarp.gi.alaska.edu/)) will be conducting a research campaign August 12–14 UTC, with operating times specified in the table below. Operating frequencies will vary, but all HAARP transmissions will be between 2.8 MHz and 10 MHz. Actual transmit days and times are highly variable based on real-time ionospheric and/or geomagnetic conditions. All information is subject to change.
 
This campaign is being conducted in support of research proposals from the [Polar Aeronomy and Radio Science (PARS) Summer School](https://haarp.gi.alaska.edu/pars2026). PARS is primarily funded by the Subauroral Geophysical Observatory award (#2054361) from the National Science Foundation, and brings students from across the nation to HAARP to conduct research. This year, 21 unique experiments will take place. Scientific goals of these experiments range from studies on the effects of ionospheric conditions on GPS satellite signals to generation and propagation of extremely low frequency/very low frequency (ELF/VLF) waves. More information on PARS can be found at [https://haarp.gi.alaska.edu/pars2026](https://haarp.gi.alaska.edu/pars2026)
 
Note that due to the number of experiments and the need to make real-time schedule adjustments based on ionospheric conditions, no frequencies are specified in the table below. The included transmission notice supplement contains information on the frequencies HAARP is authorized to transmit. *HAARP transmissions will only occur on our authorized frequencies.* There are no specific data collection requests from funded investigators, but reception reports are appreciated and may be submitted to our online form at [https://haarp.gi.alaska.edu/form/reception-reports](https://haarp.gi.alaska.edu/form/reception-reports).
 
**August 12**   
0000-0515 UTC   

**August 13**   
0115-0630 UTC   
2200-2400 UTC

**August 14**   
0000-0315 UTC
 
For updates on ionospheric conditions in Gakona, please consult ionograms from the HAARP Diagnostic Suite: [https://haarp.gi.alaska.edu/diagnostic-suite](https://haarp.gi.alaska.edu/diagnostic-suite)
 
## Additional Resources for Reading Ionograms
 
*Understanding HF Propagation and Reading Ionograms* from Bootstrap Workbench:   
[https://www.youtube.com/watch?v=oTFKNCo3Cl8](https://www.youtube.com/watch?v=oTFKNCo3Cl8)
 
*Reading Your Ionogram–Keeping It Simple* from John (VE6EY):   
[https://play.fallows.ca/wp/radio/shortwave-radio/reading-your-ionogram-keeping-it-simple/](https://play.fallows.ca/wp/radio/shortwave-radio/reading-your-ionogram-keeping-it-simple/)
 
## General Information for HAARP Radio Enthusiasts
 
1. The HAARP Ionospheric Research Instrument (IRI) transmits in the frequency range 2.750 to 9.600 MHz, with certain frequencies blocked out as specified in the FCC license for call sign WI2XFX. The frequency authorization chart below shows the HAARP transmission frequencies.
2. The emission bandwidth may be up to 46 kHz; the actual value depends on the frequency, modulation and experiment requirements.
3. The lower frequency transmissions many times are based on a harmonic of the local ionosphere's gyro frequency; the actual frequency depends on the experiment. The fundamental gyro frequency above HAARP varies from roughly 1.5 MHz at lower altitudes to 1.2 MHz at higher altitudes. The 2nd or 3rd harmonic is often used to heat the ionosphere in conjunction with another frequency to produce low frequency effects.
4. The mid-range frequencies often are used for artificial airglow experiments but, again, the frequencies used will depend on the experiment as well as time of day, season, solar activity and sunspot cycle.
5. The higher frequency transmissions many times are based on the critical plasma frequency for the F2 region (foF2) as measured by the Gakona ionosonde ([https://haarp.gi.alaska.edu/diagnostic-suite](https://haarp.gi.alaska.edu/diagnostic-suite)). The transmission frequencies may be above, below or at the critical frequency depending on the experiment. The critical plasma frequency in the vicinity of HAARP varies widely depending on, among other things, time of day, season, solar activity and sunspot cycle.
6. One or two carriers are transmitted and one or both of the carriers may be modulated. The types of modulation vary with the experiment requirements. Modulation may be AM, FM, or Pulse, including Linear FM (LFM) or a complex waveform or a time sequence of different modulations. LFM is very common. Communications modulations and protocols such as SSB, PSK, FSK, and QAM are never used. A glossary and brief description of the modulation modes is provided at the end of the original document.
7. Frequencies and timing are precise to allow synchronization with diagnostics. Both are controlled by locking them to the Global Positioning System (GPS).
8. Most experiments depend on ionospheric and geomagnetic conditions that are mostly unpredictable. The transmission frequencies for a given experiment may change to track changes in those conditions with little or no notice.
9. A scheduled experiment that depends on certain ionospheric or geomagnetic conditions may be rescheduled or cancelled if the required conditions do not occur.
10. Additional information can be found on the HAARP webpage at: [https://haarp.gi.alaska.edu/](https://haarp.gi.alaska.edu/)

 
## Monitoring HAARP IRI Transmissions with a Software Defined Radio Receiver
 
1. Listeners with an SDR receiver capable of 8 MHz bandwidth can monitor the entire frequency band noted above. A center frequency of 6.35 MHz may be used with 8 MHz bandwidth.
2. The HAARP IRI uses Coordinated Universal Time (UTC) for all operations. Transmissions most often are programmed to Start at the top of the minute, i.e., HH:MM:00, but some start at 30 seconds, i.e., HH:MM:30. Transmissions usually Stop on the 30-second mark, i.e., HH:MM:30, to allow time to retune the transmitter/antenna for the next experiment. There may be exceptions to the Start and Stop times.
3. The SDR software should be run on a PC whose real-time clock is synchronized to UTC using the Network Time Protocol (NTP).
4. When a carrier is seen to pop up on the SDR's displayed spectra, listeners can identify the center frequency using the SDR software and then reduce the bandwidth to further analyze the signal.
5. If two SDRs are available, one can be used in a wideband mode to locate the signals and the other can be used in a narrowband mode to analyze specific signals after they are identified.
6. A useful method for locating IRI transmissions that are on or near the ionosphere's critical frequency f0F2 is to view the latest Gakona Ionogram (Ionosonde tab at [https://haarp.gi.alaska.edu/diagnostic-suite](https://haarp.gi.alaska.edu/diagnostic-suite)). Find the current f0F2, which is labeled in the upper-left corner of the Ionogram, and then tune the SDR to that frequency with a moderate displayed frequency span.
7. SDRs with a 50 kHz bandwidth setting are able to monitor the modulated carrier after it is located. However, the center frequency may be stepped through a range of frequencies or may change according to experiment requirements to another, far-removed frequency. Carrier frequency changes > 200 kHz require at least 30 seconds for retuning.
8. Not all experiments use a modulated carrier or the full emission bandwidth; some use only a pure carrier.
9. Some experiments require a transmitter On – transmitter Off cycle. The cycle times and On-Off ratios vary from experiment to experiment but Off times typically are minutes or fractions of a minute. Transmission On times can last from a couple of minutes to a few hours.
10. Radio propagation conditions and the IRI beam direction will affect the reception of the IRI transmissions or cause a fadeout at the receiving antenna location. Propagation conditions and beam directions can change significantly and rapidly during an experiment.
11. Some experiments require the IRI beam to be pointed along or near the local magnetic zenith. This means the beam is pointed parallel or nearly parallel to the local magnetic field lines. The magnetic zenith at the HAARP facility is approximately 76° elevation and 16° west of south.
12. Although the HAARP IRI transmits only in the HF range, the transmissions can, and some experiments are designed to, generate ELF, SLF, ULF, and VLF emissions in the D- and E-regions of the ionosphere. Other experiments may not be designed to generate these low frequency emissions but the emissions are generated as a side effect. Modulated heating of the D- and E-region electrons by the HF transmissions in turn modulates the plasma conductivity, which generates a virtual antenna at altitudes between 70 and 85 km. Emissions up to 20 kHz have been demonstrated but most are below a few kilohertz. These low frequency emissions can propagate in the Earth-Ionosphere Waveguide or by other mechanisms, depending on frequency, and conceivably can travel great distances.

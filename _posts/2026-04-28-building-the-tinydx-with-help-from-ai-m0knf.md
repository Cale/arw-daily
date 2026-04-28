---
title: Building the TinyDX – With a Little Help From AI
date: 2026-04-28
excerpt: The TinyDX is a miniature FT8/4 ~1W transceiver designed to be powered and operated via a USB connection to a smartphone or tablet.
source: M0KNF
sourceurl: https://daily.hamweekly.com/2026/04/building-the-tinydx-with-help-from-ai-m0knf/
tags:
- post
- TinyDX
- AI
---
*By Chris Bolton (M0KNF)*

The [TinyDX](https://antrak.org.tr/blog/tinydx-my-quest-for-designing-the-smallest-digital-modes-hf-transceiver/) is a miniature FT8/4 QRP ~1W transceiver designed to be powered and operated via a USB connection to a smartphone/tablet running an FT8 app such as FT8TW for android or IFTX for IOS. It is able to operate on any 2 of the HF “high” bands, 20M, 17M 15M, 12M, 10M which are defined by the builder during the software configuration process. The TinyDx does not have CAT control but uses the transmit audio signal to switch the PA and receiver during the transmit/receive cycle. Band and mode are selected via 2 hardware switches on the main board.

Designer Barbaros (Barb) Asuroglu WB2CBA has shared the design on GitHub with all of the necessary fabrication files for the boards to be built and populated by the PCB manufacturer JLCPCB. The cost of having the boards built by JLCPCB is around £30 per set for an order quantity of 5 sets plus shipping. Choosing this option just leaves the individual to connect the pre-built boards together and load the bootloader and firmware as per [the instructions on Barb’s blog](https://antrak.org.tr/blog/tinydx-my-quest-for-designing-the-smallest-digital-modes-hf-transceiver/).

To load the software the builder should be familiar with the Arduino IDE platform and the use of the Arduino UNO to install the bootloader and a USB to TTL adapter to load the software. For those with experience in this area it’s a simple enough task but for those who haven’t, it does present a bit of a learning curve as well as the additional cost for the programming devices ~£30.

As an alternative option to having the TinyDX factory built, I decided to embark on a trial hand build using unpopulated boards from JLCPCB and components from trusted sources such as Digikey and Mouser. I ordered 10 sets of PCBs and components with a view to offering the spares to anyone at my local club who might be interested in having a go themselves. Sourcing the right components turned out be quite a challenge as the part numbers supplied by Barb are specific to the JLCPCB parts library. I wasn’t fully aware of this until I finished the Tx board and started testing that I realised there was a major problem. I managed to trace the issue to excessive current draw on the supply to the VFO which turned out to be due to the wrong crystal type. Barb helpfully pointed out the error of my ways and pointed me to the searchable parts library on the JLCPCB website.

The TinyDX consists of 3 tiny PCBs that have been designed to be stacked and soldered together via 2 x 6 long pin headers. This approach makes it extremely difficult to separate the boards for any subsequent fault finding or rework. So for the trial build I used low profile turned pin headers and sockets to enable the boards to be easily separated. Most of the discrete components are 603 pitch which are probably the smallest sized components that can be soldered by hand. I adopted the approach of soldering each component in order of height starting with the ICs and then the discrete devices by type and value eg all of the 10k resistors, all of the 10nF capacitors etc thus slowly building up the boards with small groups of components. I found that that this approach helps to ensure that the right value components are placed in the correct locations. All of the components were soldered using a Lexivon LX-771 butane gas torch fitted with a catalytic nozzle and low temperature solder paste.

With all 3 boards completed and “sandwiched” together, initial testing commenced connecting the TinyDX via its USB connection to a PC running WSJTX. The TinyDX was identified as a USB sound card with power supplied to the transceiver via the same USB connection. A red LED on the board blinks briefly on start up to indicate that the AT328P microcontroller has initialised and a blue LED flashes to indicate when the sound card is being used by WSJTX. The receiver appeared to be working well with a clean signals displayed and decoded on WSJTX but, the TinyDX would not respond to tune or transmit commands.

![TinyDX transceiver](https://assets.midnightcheese.com/amateur-radio-daily/images/tinydx.png)

I was confident that the fault was not a design related issue so my thoughts turned towards workmanship or the possibility of another component selection error. To rule out workmanship issues I built a 2nd TinyDX and observed exactly the same problem of no transmit which at least gave me confidence that at least I had a repeatable build process. In the absence of any detailed summary of circuit operation I copied the TinyDX code into the Gemini AI platform. I had never used AI in this way before and was amazed at how well it was able to provide an overview of how each of the key hardware components and the code worked together. During my ongoing conversation with the AI “bot” it offered to produce a test script that could be used to test the TX switching routine through the Arduino IDE serial monitor. I accepted the offer and loaded the TinyDX with the AI generated code, enabling me to trace the fault to the voltage bias level on the Tx switching signal being too high. So, after rechecking my components placing against the circuit diagram, I returned to the JLCPCB website and uploaded the fabrication files for the board to check the component placing for the factory build process and... Eureka! I could see that there was an error on the PCB’s silkscreen in that the locations for the 2 resistors that form the 10:1 voltage divider had been transposed.

![TinyDX PCB](https://assets.midnightcheese.com/amateur-radio-daily/images/tinydx-pcb.png)

With the resistors correctly placed and the Tx switch operating as expected I put the TinyDX into operation and was astonished to get a response to my first CQ call on 20M from an operator in Italy quickly followed by more QSOs into Eastern Europe.

For me the enjoyment is in the challenge of the build and the learning along the way, but there’s no doubt that the TinyDX offers the mobile operator the ultimate in convenience and portability for FT8 operations.

![TinyDx connected to a smartphone](https://assets.midnightcheese.com/amateur-radio-daily/images/tinydx-with-smartphone.png)

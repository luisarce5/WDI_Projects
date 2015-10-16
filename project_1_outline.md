# Project #1: Speed Match Memory Game

### Overview

The **Game** is a speed memory game that helps to practice information processing, that is the initial identification of incoming sensory input.

The **Game** consists of:
* A **Board** with a **Container** displaying a random **Card**.
* On each **Move** the currently displayed **Card** disappears and is replaced by a new random **Card**.
* The **Player** recalls if the currently displayed **Card** is identical to the **Card** displayed immediately before and indicates so on the **Board**.
* Each time the **Player** recalls correctly, he/she scores points.
* The **Board** will indicate if the **Player** recalled correclty or not on each **Move**.
* Regardless of whether the **Player** recalls correctly or not, the **Game** will display another **Card**.
* The **Game** ends after a timer reaches zero.
---
### Game Objective

The purpose of the **Game** is to recall correctly as many Cards as possible before the timer runs out.

---
### Layout
The **Board* will have a **Container** where a **Card** will be displayed.  

The **Card** will show an image of a given **Shape** (for instance square, circle, triangle, star) of a given **Color** (for instance red, blue, green, yellow) randomly chosen.

---
### Start
* An initial random **Card** is momentarily flashed in the **Container**.
* Once the initial **Card** disappears, another **Card** is displayed.  Such **Card** then remains on the **Container** until the **Player** makes a **Move**.  
---
### How to Play
* The **Player** observes the **Card** currently displayed in the **Container** and makes a **Move** by clicking **YES** if there was a **Match** or **NO** if there was no **Match**.
* The **Player** scores points if the **Match** was correct.

---

### Back End
#### Functions
* makeCard ()
* giveShape ()
* giveColor ()
* Move ()
* Match ()
* checkWin ()
* score ()
* timer ()

#### Objects
* Array with preceding Card and current Card
* score board




### FORMATING SAMPLES
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

*Think back to how the instructions for your homework have been formatted* )

* [Rubric to ask for help ](https://gist.githubusercontent.com/ColinTheRobot/d434c89546135dab3ac6/raw/3d5e9647a46e51aa86001f3d845897a280cda14a/gistfile1.md)

    Score | Expectations
    ----- | ------------
    **0** | _Does not meet expectations._
    **1** | _Meets expectactions, good job!_
    **2** | _Exceeds expectations, you wonderful creature, you!_

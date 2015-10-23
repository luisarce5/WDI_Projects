# Project #1: Speed Match Memory Game

### Overview

The **Game** is a speed memory game that helps to practice information processing.

---

### Game Objective

The objective of the **Game** is to recall correctly the shape and color of the previously displayed card in order to compare them with the shape and color of the currently displayed card and then determine if there was a complete match, partial match or no match.  Both speed and accuracy are measured.  The **Game** lasts 45 seconds.  

---
### Instructions

* The **Game** initiates by displaying a random **Card** which remains displayed on the **Board** for 2 seconds.  Then such **Card** automatically disappears from the **Board** and a second random **Card** is displayed.
* After the second **Card** is displayed, the **Player** can then provide input by selecting any of the following buttons: **Yes**, **Partial** or **No**.
* The **Player** must recall both the shape and color of the  **Card** displayed immediately before (the *previous* **Card**) and compare it to the currently displayed **Card** (the *current* **Card**).  
  * If the *current* **Card** is identical to the *previous* **Card**, the **Player** should click **Yes**.  
  * If the *current* **Card** matches either the color or the shape of the *previous* "Card", the **Player** should click **Partial**.  So for instance a red square followed by a red circle would be a **Partial** match; and a green triangle followed by a blue triangle would be a **Partial** match.
  * If the *current* **Card** is completely different to the *previous* **Card**, the **Player** should click **No**.
* After the **Player** has clicked any of the **Yes**, **Partial**, or **No** buttons, the *current* **Card** disappears and is replaced by a new random **Card**.  Then, the **Player** can continue playing as each time a new **Card** is displayed and the **Player** provides a response.
* Each time the **Player** recalls correctly and provides a correct response, the **Player** scores points.
* The **Board** will indicate if the **Player** recalled correctly or not on each **Move** by showing either an "X" or a "check mark".
* Regardless of whether the **Player** provides a correct response or not, the **Game** will display another **Card**.
* The **Game** ends after 45 seconds and displays a final board with the statiscs of the game played.

---
### Scoring
* For each correct answer, the **Player** scores 100 points which is added to and displayed on the **Score** box.
* Each time the Player provides a correct response, a bullet point is added to the **Bonus** box.  
* If the **Player** provides an incorrect response before reaching 4 consecutive correct moves, the **Bonus** bullet points are lost and reset to zero.
* After 4 consecutive correct responses, the **Player** scores 500 bonus points; and the **Bonus** box is reset to zero bullet points.  

---

### Layout
The **Board** has a **Container** where a random **Card** is displayed on each move.

The **Card** will show an image of a given random **Shape** (square, circle, triangle or diamond) of a given **Color** (for instance red, blue, green or yellow).

There are three buttons for input by the **Player**: **Yes** button, **Partial** button and **No** button.

There is a **Start** button to start the **Game**.  The **Start** button can be clicked again after a **Game** has ended and the game statics have been displayed in order to play a new **Game**.


---


window.onload = function () {
  console.log ("HTML file linked to JavaScript file");

  // $("#button1").click(function() {
  //     makeCard();
  //   });
  // };
$("#button1").on("click", makeCard);
};

var startGame = function () {
};

var cardLog = [];
//  will store the properties (color & shape) of the cards displayed since Game Start
// element index 0 = previous card array
// element index 1 = current card array
// card array => 1st element = color ; 2nd element = shape

var randomColor = false;

var makeCard = function () {
  console.log ("previous cardLog is " + cardLog);
  var container = $('.container2'); // select the div that will hold the Card
  var shape = giveShape(); // assignment of random shape
  console.log ("the shape is " + shape);
  // if (randomColor == true) {
    // in the Game's first level only the shapes are randomly generated,
    // so each color is fixed to a specific shape.  That is, the cards will
    // only show red circle, blue square, green XXXcircle or yellow XXXsquare
    var color = giveColor(); // assignment of random color
  var newCardData = [color[0],shape[0]]; // store color & shape properties in array
  // add class of color number to newCard div  // pending as perhaps not required
  // add class of shape number to newCard div // pending as perhaps not required
  $( '.container2').empty(); // clean all the content of the div that will hold the Card
  //document.getElementById(elementID).innerHTML = "";
  var newCard = $('<div>').addClass(shape[1]); // create a new div and add the class of 'shape'
  newCard.css('background-color', color[1]); //set the background color of that div
  newCard.appendTo(container); // Append the Card to the Container2
  console.log ("newCardData is " + newCardData);
  cardLog.push(newCardData);
  console.log ("new cardLog is " + cardLog);
};

var giveColor = function () { // generates a random color
  //returns an array: 1st element = color number; 2nd element = color as text
    color_number = Math.ceil(Math.random()*4);
    // console.log (color_number);
    switch (color_number) {
      case 1: return [color_number,"red"];
      case 2: return [color_number,"blue"];
      case 3: return [color_number,"green"];
      case 4: return [color_number,"yellow"];
    }; // close switch
}; // close function

var giveShape = function () { // generates a random shape
  //returns an array: 1st element = shape number; 2nd element = shape as text
  shape_number = Math.ceil(Math.random()*4);
  switch (shape_number) {
    case 1: return [shape_number,"circle"];
    case 2: return [shape_number,"square"];
    case 3: return [shape_number,"triangle"];
    case 4: return [shape_number,"diamond"];
  };
};

var shapes = ['circle','square','triangle','diamond'];
var colors = ['red','blue','green','yellow'];

var Move = function () {
  makeCard ();
  // Player indicates if the card matches preceding card
  // Check for Match
  // Update Score
  // Update Board indicating Match result
};

var Match = function () {
  cardLog.length

// checks if the newly generated random Card
// matches the previously displayed random Card
};

var checkWin = function () {
  // checks if player's input coincides with Match output
};

var score = function () {
};

var timer = function () {
}

// TEMP TESTS
// console.log ("newCardData is " + newCardData);
// var temp = cardLog[1];
// console.log ("temp value is " + cardLog[1]);
// cardLog.splice(0,1,cardLog[1]);
// console.log ("interm cardLog is " + cardLog);
// // array.splice(startIndex, howManyElements, newItem)
// // cardLog[0] = cardLog[1];
// cardLog.splice(1,1,newCardData);
// console.log("new cardLog is " + cardLog);
// cardLog = [[1,2],
//            [3,4]
//          ];
// console.log (cardLog);
// newCard = [5,6];
// console.log (newCard);
// cardLog.splice (1, 1, newCard);
// console.log (cardLog);

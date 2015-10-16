window.onload = function () {
  console.log ("HTML file linked to JavaScript file");
  $('#button1').on('click', makeCard);
  $('#button2').on('click', {answer: "yes"}, checkWin);
  $('#button3').on('click', {answer: "partial"}, checkWin);
  $('#button4').on('click', {answer: "no"}, checkWin);
  };

var checkWin = function (event) {
  console.log ("Clicked on " + event.data.answer);
  // var response = event.data.answer;
  // if (response == match () ) {
  //   console.log ("Player wins")
  // } else {
  //   console.log ("Player loses")
  // };
};

var startGame = function () {
};

var color_index = ['red','blue','green','yellow'];
var shape_index = ['circle','square','triangle','diamond'];
var cardLog = [];
//  will store the properties (color & shape) of the cards displayed since Game Start
// cardLog array => each index number contains color and shape

var makeCard = function () {
  console.log ("previous cardLog is " + cardLog);
  var container = $('.container2'); // select the div that will hold the Card
  var shape = giveShape(); // assignment of random shape
  // if (randomColor == true) {
    // in the Game's first level only the shapes are randomly generated,
    // so each color is fixed to a specific shape.  That is, the cards will
    // only show red circle, blue square, green XXXcircle or yellow XXXsquare
  var color = giveColor(); // assignment of random color
  var newCardData = [color,shape]; // store color & shape properties in array
  // add class of color number to newCard div  // pending as perhaps not required
  // add class of shape number to newCard div // pending as perhaps not required
  $( '.container2').empty(); // clean all the content of the div that will hold the Card
  //document.getElementById(elementID).innerHTML = "";
  var newCard = $('<div>').addClass(shape_index[shape]); // create a new div and add the class of 'shape'
  newCard.css('background-color', color_index[color]); //set the background color of that div
  newCard.appendTo(container); // Append the Card to the Container2
  console.log ("newCardData is " + newCardData);
  cardLog.push(newCardData);
  console.log ("new cardLog is " + cardLog);
  match ();
};

var giveColor = function () { // generates a random color
  color_number = Math.floor(Math.random() * color_index.length);
  return color_number;
};

var giveShape = function () { // generates a random shape
  shape_number = Math.floor(Math.random() * shape_index.length);
  return shape_number;
};

var move = function () {
  makeCard ();
  // Player indicates if the card matches preceding card
  // Check for Match
  // Update Score
  // Update Board indicating Match result
};

var match = function () {
// checks if the newly generated random Card
// matches the previously displayed random Card
// 'Complete' Match: shape and color both match
// 'Partial' Match: either shapes match or colors match
  var lastCard = cardLog[cardLog.length-1];
  var prevCard = cardLog[cardLog.length-2];
  console.log (prevCard);
  console.log (lastCard);
  if (lastCard[0] == prevCard[0] & lastCard[1] == prevCard[1]) {
    console.log ("Complete Match");
    return "yes";
  } else if (lastCard[0] == prevCard[0] || lastCard[1] == prevCard[1]) {
    console.log ("Partial Match");
    return "partial";
  } else {
    console.log ("No Match");
    return "no";
  };
}; // the first time Match is run at the Game start,


var score = function () {
};

var timer = function () {
};

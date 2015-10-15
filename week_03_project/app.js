
window.onload = function () {
  console.log ("HTML file linked to JavaScript file");
  makeCard ();
};

var cardLog = []; // stores the properties (color & shape) of the last two cards displayed

var makeCard = function () {
  var container = $('.container2'); // select the div that will hold the Card
  var color = giveColor(); // assignment of random color
  var shape = giveShape(); // assignment of random shape
  var newCard = $('<div>').addClass(shape[1]); // create a new div and add the class of 'shape'
  var newCardData = [color[0],shape[0]]; // store color & shape properties in array
  // add class of color number to newCard div  // pending as perhaps not required
  // add class of shape number to newCard div // pending as perhaps not required
  newCard.css('background-color', color[1]); //set the background color of that div
  newCard.appendTo(container); // Append the Card to the Container2
  console.log (newCardData);
}


var Move = function () {
  makeCard ();
  // Player indicates if the card matches preceding card
  // Check for Match
  // Update Score
  // Update Board indicating Match result

}

var Match = function () {
// checks if the newly generated random Card
// matches the previously displayed random Card
}

var checkWin = function () {
  // checks if player's input coincides with Match output
}

var score = function () {
}

var timer = function () {
}


var giveColor = function () {
  //returns an array: 1st element = color number; 2nd element = color as text
  color_number = Math.ceil(Math.random()*4);
  console.log (color_number);
  switch (color_number) {
    case 1: return [color_number,"red"];
    case 2: return [color_number,"blue"];
    case 3: return [color_number,"green"];
    case 4: return [color_number,"yellow"];
  }; // close switch
}; // close function

var giveShape = function () {
  //returns an array: 1st element = shape number; 2nd element = shape as text
  shape_number = Math.ceil(Math.random()*4);
  switch (shape_number) {
    case 1: return [shape_number,"circle"];
    case 2: return [shape_number,"square"];
    case 3: return [shape_number,"circle"];
    case 4: return [shape_number,"square"];
  };
}

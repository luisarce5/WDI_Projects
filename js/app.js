window.onload = function () {
  console.log ("HTML file linked to JavaScript file");
  $('#button1').on('click', makeCard);
  $('#button2').on('click', {answer: yes}, checkWin);
  $('#button3').on('click', {answer: partial}, checkWin);
  $('#button4').on('click', {answer: no}, checkWin);
  };

// var checkWin = function (event) { // Listens to find if
//   // the "Yes", "Partial" or "No" buttons were clicked and
//   // feeds that information to match() to determine if "win".
//   console.log ("you clicked: " + event.data.answer);
//   if (event.data.answer == match ()) {
//     console.log ("Yeah you win!");
//     var matchDisplay= $('match_display'); // select div that will display win or lose message after each Move
//     matchDisplay.empty(); // clean the div from the display of previous Move
//     var matchDisplayContent = $('<p>').addClass('result_display');
//     matchDisplayContent.innerHTML = "WIN"; // the square is ASCII for ✔️
//   } else {
//     var matchDisplay= $('match_display'); // select div that will display win or lose message after each Move
//     matchDisplay.empty(); // clean the div from the display of previous Move
//     var matchDisplayContent = $('<p>').addClass('result_display');
//     matchDisplayContent.innerHTML = "LOSE";
//   }
// };

var yes = 'yes';
var partial = 'partial';
var no = 'no';

var checkWin = function (event) { // compares user's input with correct answer to check for Win
  console.log ("you clicked: " + event.data.answer);
  console.log (match());
  var matchDisplay= $('.match_display'); // select div that will display win or lose message after each Move
  matchDisplay.empty(); // inside div, clean display from previous Move
  var matchDisplayContent = $('<p>').addClass('result'); // add <p> to display
  matchDisplayContent.appendTo(matchDisplay); // append the new div to matchDisplay div

  if (event.data.answer == match()) {
    console.log ("WIN");
    $('.result').append( "&#x2713;");//&#x2713 = check mark;
  } else {
    console.log ("LOSS");
    $('.result').append( "X");
  }
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
  var container2 = $('.container2'); // select the div that will hold the Card
  var shape = giveShape(); // assignment of random shape
  // if (randomColor == true) {
    // in the Game's first level only the shapes are randomly generated,
    // so each color is fixed to a specific shape.  That is, the cards will
    // only show red circle, blue square, green XXXcircle or yellow XXXsquare
  var color = giveColor(); // assignment of random color
  var newCardData = [color,shape]; // store color & shape properties in array
  // add class of color number to newCard div  // pending as perhaps not required
  // add class of shape number to newCard div // pending as perhaps not required
  container2.empty(); // clean all the content of the div that will hold the Card
  // $( '.container2').empty(); // clean all
  //document.getElementById(elementID).innerHTML = "";
  var newCard = $('<div>').addClass(shape_index[shape]); // create a new div and add the class of 'shape'
  newCard.css('background-color', color_index[color]); //set the background color of that div
  newCard.appendTo(container2); // Append the Card to the Container2
  console.log ("newCardData is " + newCardData);
  cardLog.push(newCardData); // update the array with history of cards with the new card data
  console.log ("new cardLog is " + cardLog);
  match (); // ?? do i need to run it at this specific point
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
    return yes;
  } else if (lastCard[0] == prevCard[0] || lastCard[1] == prevCard[1]) {
    console.log ("Partial Match");
    return partial;
  } else {
    console.log ("No Match");
    return no;
  };
}; // the first time Match is run at the Game start,


var score = function () {
};

var timer = function () {
};

window.onload = function () { // load your event listeners
  console.log ("HTML file linked to JavaScript file");
  $('#button_start').on('click', startGame); // listens for player to click 'Start' game button
  $('#button_yes').on('click', {answer: yes}, checkWin); // listens for player to click 'yes'
  $('#button_partial').on('click', {answer: partial}, checkWin); // listens for player to click 'partial'
  $('#button_no').on('click', {answer: no}, checkWin); // listens for player to click 'no'
};

var yes = 'yes'; // variable used as a value in object in event listener and as input in match ()
var partial = 'partial'; // variable used as a value in object in event listener and as input in match ()
var no = 'no'; // variable used as a value in object in event listener and as input in match ()
var result = null; // initialize variable with match result [win (true) or lose (false)] as empty
var scoreBoard = 0; // initialize score as zero
var cardsDisplayed = 0; // initialize the number of Cards displayed
var correctMoves = 0; // intialize the number of correct moves
var accuracy = 0; // initialize accuracy % as zero
var color_index = ['red','blue','green','yellow'];
var shape_index = ['circle','square','triangle','diamond'];
var cardLog = []; //  will store the properties (color & shape) of the cards displayed since game start
// cardLog array => each index element contains color and shape

var startGame = function () {
  startTimer(); // start timer
  makeCard(); // calls makeCard to create & display the 1st card
  setTimeout(makeCard, 2000);
  // calls makeCard () to create & display the 2nd card after 2 seconds.
  // thereafter, a new Card will only be displayed after receiving the player's input click about
  // whether they think there was a a complete match (yes), partial match (partial) or no match (no)
  stopGame(); //calls function to stop Game which is based on a timer
};

var makeCard = function () { // crates and displays a new card on each move
  cardsDisplayed += 1;
  console.log ("cardsDisplayed is: " + cardsDisplayed);
  console.log ("makeCard function called");
  // startTimer();
  console.log ("previous cardLog is " + cardLog);
  var container2 = $('.container2'); // select the div that will hold the Card
  var shape = giveShape(); // assignment of random shape
  // if (randomColor == true) {
    // in the Game's first level only the shapes are randomly generated,
    // so each color is fixed to a specific shape.  That is, the cards will
    // only show red circle, blue square, green XXXcircle or yellow XXXsquare
  var color = giveColor(); // assignment of random color using function
  console.log (color_index[color]);
  var newCardData = [color,shape]; // store color & shape properties in array
  container2.empty(); // clean all the content of the div that will hold the Card
  var newCard = $('<div>').addClass(shape_index[shape]); // create a new div and add the class of 'shape'
  if (newCardData[1]==2) {  // if shape == triangle, then follow different steps to draw it with CSS
    // this is because of the way that CSS draws triangles
      newCard.css('background-color', 'white'); //set the background color of that div to white to match the div background
      newCard.css('border-bottom-color', color_index[color]);
      newCard.appendTo(container2); // Append the Card to the Container
  } else {
      newCard.css('background-color', color_index[color]); //set the background color of that div
      newCard.appendTo(container2); // Append the Card to the Container2
    }
    console.log ("newCardData is " + newCardData);
    cardLog.push(newCardData); // update the array with history of cards with the new card data
    console.log ("new cardLog is " + cardLog);
};

var checkWin = function (event) { // compares user's input with correct answer to check for Win
  console.log ("you clicked: " + event.data.answer);
  console.log (match());
  var matchDisplay= $('.match_display'); // select div that will display win or lose message after each Move
  matchDisplay.empty(); // inside div, clean display from previous Move
  var matchDisplayContent = $('<p>').addClass('result'); // add <p> to display
  matchDisplayContent.appendTo(matchDisplay); // append the new div to matchDisplay div

  if (event.data.answer == match()) {
    correctMoves += 1;
    console.log ("number correctMoves is: " + correctMoves);
    console.log ("WIN");
    result = true; // assigns value of true if win
    score(result); // call function to update the scoreBoard
    $('.result').append( "&#x2713;");//&#x2713 = check mark symbol;
  } else {
    console.log ("LOSS");
    result = false;
    score(result);
    $('.result').append( "X");
  };
  accuracy = Math.round((correctMoves / (cardsDisplayed -1))*100); // % of correctMoves. Used (cardsDisplayed - 1) since first card displayed is not evaluated
  makeCard(); // calls makeCard to create and display the following card
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
  // I think I do NOT need it anymore as the info is passed thru the checkWin function
  // Player indicates if the card matches preceding card
  // Check for Match
  // Update Score
  // Update Board indicating Match result
};

var match = function () {
// checks if the newly generated random Card  matches the previously displayed random Card
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

var score = function (result) { // checks the Match result and updates scoreBoard accordingly
  // NOT USED // var scoreDisplay = $('.score_box>p:first').html(); // selects the div displaying the scoreBoard
  // NIT USED //scoreDisplay.empty (); // cleans the scoreBoard to update it with the new score
  if (result == true) {
      scoreBoard = scoreBoard + 100;
      console.log (scoreBoard);
      $('.score_box>p:first').html(scoreBoard); // selects the div displaying the scoreBoard and updates it
  } else {
      scoreBoard = scoreBoard;
      console.log (scoreBoard);
      $('.score_box>p:first').html(scoreBoard);;
  };
};

var startTimer = function () { // starts timer
  console.log ('timer started');
  timerHandle = setInterval(function() {
    var currentTime = Number ($('.timer>p:first').html());
    currentTime++; // Number converts string to number
    // retrieves intial value inside 'timer' which is "0" as per HTML
    $('.timer>p:first').html(currentTime);
    // replaces the displayed value of previous currenTime with new currentTime
  }, 1000); // every 1,000 miliseconds = 1 second
};

var stopGame = function () {
  console.log ("stopGame function called");
  setTimeout(function() {
    console.log ("setTimeout function called");
    stopTimer(); // calls stopTimer to stop timer
    endGame(); // calls endGame to show final Game Over display
  }, 10000); // after x=10 seconds
};


// setTimeout(function() {
//   console.log("Well, how do you do!");
// }, 2000);

var stopTimer = function () {
  clearInterval(timerHandle); // clearInterval() stops timerHandle, i.e. stops timer
}; //tested OK

var endGame = function () {  // ends the game after X seconds and displays board with game peformance statistics
  console.log('endGame function called');
  var textBox = $('.text_box');
  textBox.empty(); // empty the div class 'text-box'
  var textBoxContent = $('<p>').addClass('Game_Over_Message');
  textBoxContent.appendTo(textBox);
  $('.Game_Over_Message').append( "GAME OVER");
  var game_over_holder = $('.container_holder');
  game_over_holder.empty(); // empty the div class 'container_holder'
  game_over_holder.css('background-color', 'RGB(0,100,250)')
  var containerTextContent = $('<p>').addClass('statistics');
  containerTextContent.appendTo(game_over_holder);
  $('.statistics').append('Your Game statistics are: ' + '<br /> <br />');
  $('.statistics').append('Accuracy: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + (accuracy) +' %' + '<br />');
  $('.statistics').append('Cards displayed: ' + cardsDisplayed+'<br />');
  $('.statistics').append('Correct moves: &nbsp&nbsp&nbsp' + correctMoves +'<br />');
};

// var content = element.innerHTML;
// element.innerHTML = content;

// endGame();
  // replace the div class 'text_box' with " Game Over // Game statics are as follows:... "
  // place game performance statics in the div container holder
  // disactivate yes, partial and no buttons

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

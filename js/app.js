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
var accuracy = 0; // initialize accuracy %
var bonusDisplay = 0; // initializing; will increase by one each time there are consecutive right moves;
                      // goes up to 4; will reset to zero after one wrong move or after 4 consecutive right moves
                      // if reset after 4 consecutive right moves, then bonusCounter increases by one
var bonusCounter = 0; // intitalizing; keeps tracks of number of cycles of 4 consecutive right moves
var addBonusPoints = false; // intializing to false; will be true after 4 consecutive right moves
                            //if true on a move bonus points will be added to score on that moveß
var color_index = ['red','blue','green','yellow']; // define colors for cards
var shape_index = ['circle','square','triangle','diamond']; // define shapes used for cards
var timerSeconds = (61*1000); // sets game timer to 61 seconds
var avgResponseTime = 0; // initialize average response time
var cardLog = []; //  will store the properties (color & shape) of the cards displayed since game start
// cardLog array => each index element contains color and shape
// with this array, the code can be later modified to allow evaluation of match to any n-x cards not only n-1 as currently

var startGame = function () {
  placeNewBoard(); // places a new board if a game is started after a previous Game Over
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
  console.log ("previous cardLog is " + cardLog);
  var container2 = $('.container2'); // select the div that will hold the Card
  var shape = giveShape(); // assignment of random shape
  var color = giveColor(); // assignment of random color using function
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
    $('.container2').fadeOut(100).fadeIn(100); // causes the container with the card to flash each time a new Card is displayed
    $('.container1').fadeOut(100).fadeIn(100);
    console.log ("newCardData is " + newCardData);
    cardLog.push(newCardData); // update the array with history of cards with the new card data
    console.log ("new cardLog is " + cardLog);
};

var checkWin = function (event) { // compares player's input with correct answer to check for Win
  console.log ("you clicked: " + event.data.answer);
  console.log (match());
  var matchDisplay= $('.match_display'); // select div that will display win ('check mark') or lose ('X') message after each Move
  matchDisplay.empty(); // in that div, clean display from previous Move
  var matchDisplayContent = $('<p>').addClass('result'); // add <p> to the display
  matchDisplayContent.appendTo(matchDisplay); // append the new <p> to matchDisplay div

  if (event.data.answer == match() ) {  // if player's input is right =>
    correctMoves += 1; // increase correctMoves counter
    console.log ("number correctMoves is: " + correctMoves);
    console.log ("WIN");
    result = true; // assign value of true if right move which is passed to score()
    $('.result').append( "&#x2713;");//&#x2713 = 'check mark' symbol; displays 'check mark' after right move

    if (bonusDisplay == 0) { // if bonusDisplay is zero, then
      $('#bonus_number').empty();// empty the text inside the bonus <p>, to erase either the initial '----'
                                // or the previous bonus bullet points earned
    };

    bonusDisplay += 1; // increase bonusDisplay (which keeps track of bullet points inside Bonus box)
    console.log ("bonusDisplay is: " + bonusDisplay);
    $('.bonus>p:first').append("&#149&nbsp;"); // select first <p> within div class 'bonus' and append bullet point
    console.log (addBonusPoints);
    if (bonusDisplay == 4) { // check for 4 consecutive right moves
        addBonusPoints = true; // add bonus points boolean once there have been 4 consecutive moves which is passed to score()
        bonusCounter += 1; // increase bonusCounter by one after 4 consecutive right moves
        bonusDisplay = 0; // reset bonusDisplay to zero after 4 right moves
        console.log ("bonusCount is: " + bonusCounter);
        console.log ("bonusCount is: " + bonusDisplay);
    };
    score(result, addBonusPoints); // call function to update the scoreBoard
  } else { // if player's input is wrong =>
      console.log ("LOSS");
      result = false; // assigns value of false if wrong move
      addBonusPoints = false;
      $('.result').append( "X"); // displays 'X' after wrong move
      bonusDisplay = 0; // if wrong move reset bonusDiplay to zero
      $("#bonus_number").text("-"); // reset the bonus box display
      score(result, addBonusPoints); // call function to update the scoreBoard
  };
  $('.match_display').fadeOut(100).fadeIn(100); // causes the container with the match display to flash each time the player responds
  accuracy = ((correctMoves / (cardsDisplayed -1))*100).toFixed(2); // % of correctMoves. Used (cardsDisplayed - 1) since first card displayed is not evaluated
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

var score = function (result, addBonusPoints) { // checks the Match result and updates scoreBoard accordingly
  // NOT USED // var scoreDisplay = $('.score_box>p:first').html(); // selects the div displaying the scoreBoard
  // NOT USED //scoreDisplay.empty (); // cleans the scoreBoard to update it with the new score
  console.log ("score function called");
  console.log ("addBonusPoints inside score() = " + addBonusPoints);
  console.log ("previous score board is " + scoreBoard);
  if (result == true) {
      scoreBoard = scoreBoard + 100; // if right Move add 100 pts to scoreBoard
      console.log ("scoreBoard after adding 100: " + scoreBoard);
      if (addBonusPoints == true) { // if 4 consecutive right moves, add 500 pts to scoreBoard
        scoreBoard = scoreBoard + 500;
        console.log ("scoreBoard after adding 500: " + scoreBoard);
      };
      addBonusPoints = false; // reset addBonusPoints to false after adding bonus points to score
      $('.score_box>p:first').html(scoreBoard); // selects the div displaying the scoreBoard and updates it
  } else {
      scoreBoard = scoreBoard;
      $('.score_box>p:first').html(scoreBoard);;
  };
};

var startTimer = function () { // starts timer
  console.log ('timer started');
  timerHandle = setInterval(function() {
    var currentTime = Number ($('.timer>p:first').html());
    // Number () converts string to number
    // retrieves initial value inside 'timer' which is "0" as per HTML and tnen retrieves subsequent
    currentTime++;
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
  }, timerSeconds); // after x seconds as defined in global variables
};

var stopTimer = function () {
  clearInterval(timerHandle); // clearInterval() stops timerHandle, i.e. stops timer
  // replace intial display value of timer on board
}; //tested OK

var endGame = function () {  // ends the game after X seconds and displays board with game peformance statistics
  console.log('endGame function called');
  avgResponseTime = ((timerSeconds/1000)/cardsDisplayed).toFixed(2); // display 2 decimals
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
  $('.statistics').append('Avg response: &nbsp&nbsp&nbsp&nbsp' + avgResponseTime + " seconds/card" +'<br />');
  $('.statistics').append('Bonus rounds: &nbsp&nbsp&nbsp&nbsp'+ bonusCounter +'<br />');
  $('#button_yes').off('click', checkWin); // disactivate event listener for button
  $('#button_partial').off('click', checkWin);
  $('#button_no').off('click', checkWin);
};

var placeNewBoard = function () { // places a new Board with original properties
  // and resets variables if Game is restarted after GameOver
  if (cardsDisplayed > 1) {
    scoreBoard = 0; // reset score
    cardsDisplayed = 0; //reset the number of Cards displayed
    correctMoves = 0; // reset the number of correct moves
    $('.timer>p:first').html('0'); // reset the value of timer as displayed on board to zero.
    var newBoard = $('.container_holder');
    newBoard.empty();
    newBoard.css('background-color', "transparent");
    var newContainer1 = $('<div>').addClass('container1');
    newContainer1.appendTo(newBoard);
    var newMatchDisplay = $('<div>').addClass('match_display');
    newMatchDisplay.appendTo(newBoard);
    var newContainer2 = $('<div>').addClass('container2');
    newContainer2.appendTo(newBoard);
    $('#button_yes').on('click', {answer: yes}, checkWin); // reactivate event listener because it was turned off when Game Over
    $('#button_partial').on('click', {answer: partial}, checkWin); //
    $('#button_no').on('click', {answer: no}, checkWin); //
  };
};





//                               null
//                .on( events [, selector ] [, data ], handler )
// $('#button_no').on('click',              {answer: no}, checkWin);
//
//                .off( events [, selector ] [, handler ] )

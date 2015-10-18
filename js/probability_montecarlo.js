var cardLog = [];

var makeCard = function () {
  var shape = giveShape(); // assignment of random shape
  var color = giveColor(); // assignment of random color using function
  var newCardData = [color,shape]; // store color & shape properties in array
  cardLog.push(newCardData); // update the array with history of cards with the new card data
};

var makeCard2 = function () {
  var shape = giveShape(); // assignment of random shape
  var color = giveColor(); // assignment of random color using function
  var newCardData = [color,shape]; // store color & shape properties in array
  cardLog.push(newCardData); // update the array with history of cards with the new card data
  match();
};

yes_counter = 0;
partial_counter =0;
no_counter = 0;

var match = function () {
  var lastCard = cardLog[cardLog.length-1];
  var prevCard = cardLog[cardLog.length-2];
  if (lastCard[0] == prevCard[0] & lastCard[1] == prevCard[1]) {
    return yes;
    yes_counter += 1;
  } else if (lastCard[0] == prevCard[0] || lastCard[1] == prevCard[1]) {
    return partial;
    partial_counter +=1;
  } else {
    return no;
    not_counter +=1;
  };
};

var giveColor = function () { // generates a random color
  color_number = Math.floor(Math.random() * 4);
  return color_number;
};

var giveShape = function () { // generates a random shape
  shape_number = Math.floor(Math.random() * 4);
  return shape_number;
};

makeCard();

for (i=0; i<1,000; i++) {
  makeCard2();
};
console.log (yes_counter/1000);
console.log (partial_counter/1000);
console.log (no_counter/1000);

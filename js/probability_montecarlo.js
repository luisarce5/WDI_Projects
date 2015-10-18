// Montecarlo simulation to determine probability of outcomes in Speed Memory Game
var cardLog = [[0,0]];
var yes_counter = 0;
var partial_counter =0;
var no_counter = 0;
var n =1000000;

for (i=0; i<n; i++) {
  var shape = Math.floor(Math.random() * 4); // assignment of random shape
  var color = Math.floor(Math.random() * 4); // assignment of random color using function
  var newCardData = [color,shape]; // store color & shape properties in array
  cardLog.push(newCardData); // update the array with history of cards with the new card data
  var lastCard = cardLog[cardLog.length-1];
  var prevCard = cardLog[cardLog.length-2];
  if (lastCard[0] == prevCard[0] & lastCard[1] == prevCard[1]) {
    yes_counter += 1;
  } else if (lastCard[0] == prevCard[0] || lastCard[1] == prevCard[1]) {
    partial_counter +=1;
  } else {
    no_counter +=1;
  };
};
console.log ("probability (yes): " + (yes_counter/n*100).toFixed(2) + "%");
console.log ("probability (partial): " + (partial_counter/n*100).toFixed(2) + "%");
console.log ("probability (no): " + (no_counter/n*100).toFixed(2) + "%");

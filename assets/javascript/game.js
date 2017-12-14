//computer creates a random number between 19 and 120
var computersRandomlyGeneratedNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(computersRandomlyGeneratedNumber);
//when the user clicks a button, a number is generated between 1 and 12
//(assign each button a number randomly)
// when guesses match random number you win, when it doesn't they lose
var wins = 0;
var losses = 0;

var possibleButtonAdderValues = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log(possibleButtonAdderValues);
//when game ends the random computer number is reset and a new computer number is generated
//new numbers are assigned to the buttons.

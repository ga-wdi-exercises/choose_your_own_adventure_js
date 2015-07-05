Minimum Requirements:
// (1) 3 questions per path - completed
// (2) 7 places the user could end up at - completed
// (3) 1 question must be answered with multiple responses - completed
// (4) 1 integer response - completed
// (5) 1 string response - completed
// (6) 1 loop - completed

// Questions:
// (1) how do I keep prompting the player to move through the questions? I've got an alert set, but that won't prompt a user for more info. - solved by substituting "prompt" for "alert"
// (2) how do I properly test this code? repl.it isn\'t prompting a user for input as I expected. - solved by using jfiddle
// (3) how do I loop through the array that contains the integers pushed into it after each user answer, then return the sum of those integers to reveal an overall score?


var userAnswers = [];
userAnswers.push(firstChoice, secondChoice, thirdChoice);
var sumOfAnswers = 0;
for (var i=0; i>1; i++) {
  return sumOfAnswers[i];
}

var letsPlay = prompt("Hello! Are you ready to see what playing Chutes & Ladders is like? Type yes, no, or maybe");

 if (letsPlay == "yes" || letsPlay == "maybe") {
   //first user destination
   var firstChoice = prompt("Let's get started! You will need to type the number of your selection for each question in this game. Would you like to 1. ride a bike 2. bake a cake 3. rescue a kitten from high up in a tree?");
 } else if (letsPlay == "no") {
   //second user destination
   alert("No hard feelings. See you next time!");
 }

  if (firstChoice == 1) {
   //third user destination
    alert("You crashed! Game over. Go get some band-aids.");
  } else if (firstChoice == 2 || firstChoice == 3) {
    //fourth user destination
    var secondChoice = prompt("Well done! Would you like to 1. plant flowers 2. read a book 3. steal cookies from the cookie jar?");
  }

 if (secondChoice == 3) {
   //fifth user destination
   alert("You pinched your finger while shutting the jar. Game over! Go get a bag of ice.");
  } else if (secondChoice == 1 || secondChoice == 2) {
    //sixth user destination
    var thirdChoice = prompt("Great choice! You get a bonus selection for doing so well. Would you like to 1. eat ice cream 2. take a nap 3. run amok? Type your two selections one after the other without spaces (xx)");
  }

  alert(sumOfAnswers);

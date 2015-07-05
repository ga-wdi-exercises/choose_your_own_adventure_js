// Question(s):
// (1) How do I loop through the array that contains the user's answers that were pushed into it after each round, then return the sum of those integers to reveal an overall score? Ideally the total score would be returned after each round of play.


var userAnswers = [];
userAnswers.push(firstChoice, secondChoice, thirdChoice);

function totalScore(userAnswers) {
  var sumOfAnswers = 0;
  for (var i=0; i<userAnswers.length; i++) {
    sumOfAnswers += userAnswers[i];
  }
  alert("Your score is " + sumOfAnswers + " and as soon I get the code right I'll evaluate whether or not you won");
}

var letsPlay = prompt("Hello! Are you ready to play Chutes & Ladders? \n (yes/no/maybe)");

// Round 1
 if (letsPlay == "yes" || letsPlay == "maybe") {
   //first user destination
   var firstChoice = prompt("Let's get started! You will need to type the number of your selection for each question in this game. Would you rather: \n 1. Ride a bike \n 2. Bake a cake \n 3. Rescue a kitten from high up in a tree");
 } else if (letsPlay == "no") {
   //second user destination
   alert("See you next time!");
 }

// Round 2
  if (firstChoice == 1) {
   //third user destination
    alert("You crashed! Game over. Go get some band-aids.");
  } else if (firstChoice == 2 || firstChoice == 3) {
    //fourth user destination
    var secondChoice = prompt("Well done! Would you rather: \n 1. Plant flowers \n 2. Read a book \n 3. Steal cookies from the cookie jar");
  }

// Round 3
 if (secondChoice == 3) {
   //fifth user destination
   alert("You pinched your finger while shutting the jar. Game over! Go get a bag of ice.");
  } else if (secondChoice == 1 || secondChoice == 2) {
    //sixth user destination
    var thirdChoice = prompt("Great choice! You get a bonus selection for doing so well. Would you rather: \n 1. Eat ice cream \n 2. Take a nap \n 3. Run amok \n Type your two selections one after the other without spaces (xx)");
  }

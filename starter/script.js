// put code here!
console.log("Hello there welcome to the circus! I'm Jeff the carny.");
var name = prompt("What's your name?");
console.log("Hi " + name +"!");
var game = prompt("Would you like to play a game? Yes or No", "Yes or No").toUpperCase();
if (game === 'YES') {
  console.log ("Excellent! Let's play a simple game to start and test your guessing ability");
    var oneOrTwo = prompt("I have a number behind my back is it 1 or 2?", "1 or 2");
    if (oneOrTwo == 1) {
      console.log ("Correct!");
      var question = prompt("Would you like to hear the next question for a prize?", "Yes, No, Maybe").toUpperCase();
      if (question === 'YES') {
        var weight = prompt("Get this right and you can win a fluffy unicorn...How much do I weigh?", "Enter a number");
        while (weight < 150) {
          console.log ("Close...");
          weight = prompt("Guess again");
        }
        console.log("You are pretty good at this, here is a fluffy unicorn");
    }
    else if (question === 'MAYBE') {
      var prize = prompt("Name a prize would you like to play for?", "Car, toy, stuffed animal, etc.");
      console.log("Cool a " + prize + " go see carny Dave to play the ring toss for that");
    }
    else {
      var million = prompt("How much money would it take to get you to play for a prize?", "$$$");
      console.log(million + "! That's way more money than I would pay for a prize!");
    }
    }
    else {
      console.log("Wrong! You lose, but I'll give you 1 more chance to win a prize.");
      var color = prompt("What color is my dog?", "Pick a Color").toUpperCase();
      if (color === 'WHITE' || color === 'BLACK' ) {
        console.log("Congrats you are correct here is t-shirt.");
      }
      else {
        console.log("You lost twice, get lost you are no good at this game. Bye");
        var leave = prompt("Now that the carny is gone what would you like to do?");
        console.log("Cool let's " + leave);
      }
    }
  }
  else {
   console.log ("That's too bad...");
   var clowns = prompt("Do you like clowns?", "Love or Hate").toUpperCase();
   if (clowns === 'LOVE') {
     console.log("That's odd not sure why you like them...but they start in 5 minutes in the big tent");
     var odd = prompt("If you could be a clown what would be your name?");
     console.log("Cool name, have fun at the show");
   }
   else {
     console.log("Me too they are weird...My suggestion would be to go to the ferris wheel instead");
     var height = prompt("Are you afraid of heights?");
     console.log("That's ok I believe that it's broken today. Enjoy the rest of the carnival");
   }
 };

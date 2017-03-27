// put code here!
// Don't finish your entire pack of gum!

// "Welcome to High School! What's your name?"
// Prompt Input Name
var gameStart = function() {
  var name = prompt("What's your name?");

var direction = prompt("Hi" + " " + name + "! Time for a long day of classes. Which direction will you go? Straight, Left, Right, or Exit?").toLowerCase();

    switch(direction) {
      // Straight
        case 'straight':
        // You run into a teacher who thinks you're skipping and is very upset. Do you 1: offer them some gum or 2: explain your way out?
            var straight = prompt("You run into a teacher who thinks you're tardy and is very upset. Do you 1: offer them some gum or 2: explain your way out?").toString();
            // User input 1: Offer a piece of gum so they get off your case
            if (straight === '1') {
              alert("Is that a bribe? That's detention and I'm confiscating that gum! GAME OVER!");
              playAgain();
            }
            // User input 2: Explain your way out of the situation
            else {
              alert("My mistake, I have a hard time distinguishing the bell from the ringing in my ears. Have a great day! YOU WIN!");
              playAgain();
            };
            break;
      // Left
        case 'left':
            var left = prompt("You take the long way to class. Your mouth feels dry so you take out a piece of gum. Someone sees the pack and asks for a piece. Do you 1: give them some or 2: refuse?").toString();
            // User input 1: Sure, I still have 9 pieces left!
            if (left === '1') {
              alert("'Aww thanks!' they say. You catch a whiff of their horrifying breath and you feel like you did them a service. YOU WIN!");
              playAgain();
            }
            // User input 2: Don't give them a piece. You only have 9 left!
            else {
              alert("'You're a jerk!' they say. They then breathe their hot stinky breath in your face, and after you pass out from the toxins and they steal your entire pack. GAME OVER!");
              playAgain();
            }
            break;
        case 'right':
          var right = prompt("Your crush is walking towards you. They're wearing a t-shirt that says I HEART GUM. Do you want to 1: Offer them your entire pack or 2: Offer them a piece?");
          //User input 1: Your crush really appreciates it... but you have no more gum left so
          if (right === '1') {
            alert("Your crush really appreciates it... but you have no more gum left so... GAME OVER!");
            playAgain();
          }
          // User input 2: Your crush really appreciates it but resents you for not sharing the rest.
          else {
            alert("Your crush really appreciates it but resents you for not sharing the rest. Oh well, YOU WIN!");
            playAgain();
          }
          break;
        case 'exit':
          var exit = prompt("Now that you're playing hookie, your gum is pretty much safe. You've got two options of where to go: 7-11 or the park?");
          // 7-11: Distraught and freshly out of gum, the sales clerk assumes you stole their last piece and takes it from you.
          if (exit == '7-11') {
            alert("Distraught and freshly out of gum, the sales clerk assumes you stole their last pack and takes it from you. GAME OVER!");
            playAgain();
          }
          // Park: It's a great day outside! You eat a piece of gum and enjoy the sun.
          else if (exit == 'park') {
            alert("It's a great day outside! You eat a piece of gum and enjoy the sun. YOU WIN!");
            playAgain();
          }
          break;
        default:
          // add new loop and function that starts the game over if you put a bad set of characters
        }
}

    var playAgain = function() {
      prompt("Would you like to play again?")
      while (playAgain === "yes") {
        gameStart();
      }
    }

    var playGame = prompt("It's the first week of High School and you've been given a pack of gum. Try not to lose all of it to win! Do you want to play?").toLowerCase();
    while (playGame === "yes" || playGame === "y") {
      gameStart();
    }
//Still needs a loop

function adventure() {

  console.log("Hello. Welcome to Planet Express.");

  var name = prompt("Please identify yourself - enter 'Leela', 'Fry', 'Amy', or 'Bender'");

  console.log("The Professor shuffles into the room. 'Good News Everyone! This weekend is Superbowl MLXXV, and Mars needs 50,000 pizzas delivered!  Who's with me?");

  var q1answer = prompt("Will you join the gang on this mission, " + name + "? Choose 'Y' or 'N'");

  if (q1answer === 'Y') {
    console.log("OK " + name + "! The NFL is giving us 1 million Earth bucks to pay for the pizzas, and Hermes has budgeted 1 thousand Earth bucks for incidentals. We can get the pizzas from Domino's for $20/pizza and spend the full million, or we can go to this shady cheap place, Acme, and get $15 pizzas, which will leave us with $250,000.");

    var q2answer = prompt("'Where should we buy the pizzas, " + name + "? Acme might actually be putting cat feces in their pizza sauce, but they're cheaper, and we could all split the leftover cash (don't tell Hermes). Domino's probably won't make anyone sick.' Choose 'D' for Domino's or 'A' for Acme.");

    if (q2answer === 'D') {
      console.log("Great! You chose an ok pizza at a fair price. Now let's deliver that pizza! ..Oh no. Looks like you're running low on fuel and probably need at least 1 ton of dark matter to make it to Mars.");

      var q3answer = prompt("Would you like to stop now to refuel or take your chances? Choose 'c' for chance it or 'r' for refuel.");

      if (q3answer === 'r') {
        console.log("Smart move. You stop at the nearest refueling station and the attendant walks up.");

        var darkMatter = prompt("''Yo. Dark matter's $750/ton. How much you want?' Enter a number between 1 and 5.");

        darkMatter = parseInt(darkMatter);
        var price = darkMatter * 750;

        while (darkMatter > 2) {
          console.log("That'll be "+ price +" Earth bucks. Oh you only have $1,500? Try again.");
        }
        console.log("That'll be " + price + " Earth bucks.");
      } else {
      console.log("Well you ran out of fuel after about 10 minutes. Fortunately there were enough escape pods to get everyone home safely, but you had to abandon the pizza. The NFL was furious and put a hit out on each of you. Good luck.");
      }
    } else {
      if (name == 'Bender') {
        console.log("Well, the good news is that you and your team get to split $250,000. The bad news is that your team came down with dysentary and died, so you get the whole $250K. ..Wait that's good news, congratulations you heartless bastard!");
      } else {
        console.log("Well, the good news is that you and your team get to split $250,000. The bad news is that your team came down with dysentary and died.");
      }
    }
  } else {
      if (name == 'Fry') {
        console.log("Too busy watching Leela get fitted for a monocle? Lame. Ok bye.");
        var playAgain = prompt("Play again? Enter 'y' or 'n'");
        if (playAgain == 'y') {
          adventure();
        } else {
          return "The End.";
        }
      } else if (name == 'Leela') {
        console.log("'Ah yes you had that appointment to get fitted for a monocle. I guess Bender will have to fly the ship!' The ship crashes shortly after take-off; Bender was the only survivor. Hope you like your new monocle.");
        return "The End. Call adventure() to play again.";
      } else if (name == 'Amy') {
        console.log("'Ah-whaaaat? Did I ask a question? Where did I leave my slipper...?' The Professor shuffles away and you are free to go visit your parents on Mars.");
        return "The End. Call adventure() to play again.";
      } else {
        console.log("'Oh you have plans? Enjoy your date with that femputer!' Your date stands you up though, too bad.");
        return "The End. Call adventure() to play again.";
      }
    }
  }

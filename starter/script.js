//first prompt
var userInput = prompt("Hello there! Welcome to the world of Pokemon!\n\nFirst, what is your name?");
var pathOne = prompt(userInput + "! Your very own Pokemon legend is about to unfold! Let's go!\n\nDo you want to choose Bulbasaur, Charmander, or Squirtle?");
var evolvedForm = {
  Squirtle: "Wartortle",
  Charmander: "Charmeleon",
  Bulbasaur: "Ivysaur"
}
var attack = {
  Squirtle: "Bubble",
  Charmander: "Ember",
  Bulbasaur: "Vine Whip",
  Pikachu: "Thundershock"
}

//function that determines whether or not the user will train its chosen Pokemon or challenge the gym
function trainOrChallenge() {
  if (choice != "Pikachu") {
  var decision = prompt("You chose " + choice + "!\n\nWould you like to train your Pokemon or challenge the first gym?\nEnter 'train' or 'challenge'");
  } else {
  var decision = prompt("Professor Oak says: 'Ah! I'm sorry, but the Pokemon you want is not available. I will give you this one instead.'\n\nYou received a Pikachu!\n\nWould you like to train Pikachu or challenge the first gym?\nEnter 'train' or 'challenge'");
  }
  //declare variable for while loop
  var exitLoop = false;
  if (decision == "train") {
    //loop begins
    while (!exitLoop) {
      var hoursTrained = prompt("Train for how many hours?");
      alert(choice + " gained " + hoursTrained ** 3 + " XP!");
      //evolve if not Pikachu and hoursTrained >= 16
      if (choice != "Pikachu" && hoursTrained >= 16) {
        alert("Your " + choice + " evolved into " + evolvedForm[choice] + "!");
      }
      var keepTraining = prompt("Would you like to keep training?");
      if (keepTraining == "no" && hoursTrained > 10 ) {
        //exits loop
        exitLoop = true;
        //choice is Charmander and it is evolved
        if (choice == "Charmander" && hoursTrained >= 16) {
          alert("You challenge Gym Leader Brock. Your " + evolvedForm[choice] + "'s " + attack[choice] + " attack is weak against rock Pokemon, but you trained well. You win the battle!");
        }
        //choice is Charmander and it is not evolved, or choice is Pikachu
        else if (choice == "Charmander" || choice == "Pikachu") {
        alert("You challenge Gym Leader Brock. Your " + choice + "'s " + attack[choice] + " attack is weak against rock Pokemon, but you trained well. You win the battle!");
        }
        //choice is Bulbasaur or Squirtle, and it is not evolved
        else if (hoursTrained < 16) {
        alert("You challenge Gym Leader Brock. Your " + choice + "'s " + attack[choice] + " attack is strong against rock Pokemon. You win the battle!");
        }
        //choice is Bulbasaur or Squirtle, and it is evolved
        else {
        alert("You challenge Gym Leader Brock. Your " + evolvedForm[choice] + "'s " + attack[choice] + " attack is strong against rock Pokemon. You win the battle!");
        }
      } else if (keepTraining == "no") {
        //exits loop
        exitLoop = true;
        alert("You challenge Gym Leader Brock, but you didn't train enough. You lose the battle. Better luck next time!");
      }
    }
  }
  else if (decision == "challenge") {
    alert("You challenge Gym Leader Brock. Your " + choice + " is too weak to battle! You forfeit the match. Why don't you train next time...");
  }
}

//begin switch statement
switch(pathOne.toLowerCase()) {

  case "charmander":
    choice = "Charmander";
    trainOrChallenge();
    break;

  case "squirtle":
    choice = "Squirtle";
    trainOrChallenge();
    break;

  case "bulbasaur":
    choice = "Bulbasaur";
    trainOrChallenge();
    break;

  default:
    choice = "Pikachu";
    trainOrChallenge();
}

/*Psuedocode

Hello there! Welcome to the world of Pokemon! First, what is your name?
 - "Erica"
 "Erica"! Your very own Pokemon legend is about to unfold! Let's go! Do you want to choose bulbasaur, squirtle, or charmander?
 - "Charmander"
    You chose the fire pokemon, Charmander! Would you like to train or challenge the first gym?
      -"Train"
        Charmander gained XP. Would you like keep training or challenge the first gym?
      -"challenge gym"
        You challenge Gym Leader Brock. Your Charmander's Ember attack is weak against rock Pokemon! You lose the battle.
      - other
 - "Squirtle"
    You chose the water pokemon, Squirtle! Would you like to train or challenge the first gym?
      -"Train"
        Squirtle gained XP. Would you like keep training or challenge the first gym?
      -"challenge gym"
        You challenge Gym Leader Brock. Your Squirtle's Bubble attack is strong against rock Pokemon! You win the battle!
      - other
 - "Bulbasaur"
    You chose the grass pokemon, Bulbasaur! Would you like to train or challenge the first gym?
      -"Train"
        Bulbasaur gained XP. Would you like keep training or challenge the first gym?
      -"challenge gym"
        You challenge Gym Leader Brock. Your Bulbasaur's Vine Whip attack is strong against rock Pokemon! You win the battle!
      - other
 - other
    Professor Oak says: "Erm, sorry but the pokemon you want is not available. I will give you this Pikachu!" You received a pikachu.
*/

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

function trainOrChallenge() {
  if (choice != "Pikachu") {
  var decision = prompt("You chose " + choice + "!\n\nWould you like to train your Pokemon or challenge the first gym?\nEnter 'train' or 'challenge'");
  } else {
  var decision = prompt("Professor Oak says: 'Ah! I'm sorry, but the Pokemon you want is not available. I will give you this one instead.'\n\nYou received a Pikachu!\n\nWould you like to train Pikachu or challenge the first gym?\nEnter 'train' or 'challenge'");
  }
  var exitLoop = false;
  if (decision == "train") {
    while (!exitLoop) {
      var hoursTrained = prompt("Train for how many hours?");
      alert(choice + " gained " + hoursTrained ** 3 + " XP!");
      if (choice != "Pikachu" && hoursTrained >= 16) {
        alert("Your " + choice + " evolved into " + evolvedForm[choice] + "!");
      }
      var keepTraining = prompt("Would you like to keep training?");
      if (keepTraining == "no" && hoursTrained > 10 ) {
        exitLoop = true;
        if (choice == "Charmander" && hoursTrained >= 16) {
          alert("You challenge Gym Leader Brock. Your " + evolvedForm[choice] + "'s " + attack[choice] + " attack is weak against rock Pokemon, but you trained well. You win the battle!");
        } else if (choice == "Charmander" || choice == "Pikachu") {
        alert("You challenge Gym Leader Brock. Your " + choice + "'s " + attack[choice] + " attack is weak against rock Pokemon, but you trained well. You win the battle!");
        } else if (hoursTrained < 16) {
        alert("You challenge Gym Leader Brock. Your " + choice + "'s " + attack[choice] + " attack is strong against rock Pokemon. You win the battle!");
        } else {
        alert("You challenge Gym Leader Brock. Your " + evolvedForm[choice] + "'s " + attack[choice] + " attack is strong against rock Pokemon. You win the battle!");
        }
      } else if (keepTraining == "no") {
        exitLoop = true;
        alert("You challenge Gym Leader Brock, but you didn't train enough. You lose the battle. Better luck next time!");
      }
    }
  }
  else if (decision == "challenge") {
    alert("You challenge Gym Leader Brock. Your " + choice + " is too weak to battle! You forfeit the match. Why don't you train next time...");
  }
}

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

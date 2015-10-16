// Kory J. Campbell Choose Your Own Adventure Game

alert("Welcome to Joe's Pizzeria Delivery! A Text-Based Adventure. Press OK.");
alert("You are a delivery bicycler who has to deliver pizzas to your customers safely! What will this entail..... Press Ok.");

var userInput = prompt("You walk out the Pizzeria, on your way to your customer and you see a little red-haired boy who ask for a slize of pizza. Do you want to give him a slice of your pizza? [type Y or N]");

if(userInput == "Y") {
  prompt("The red-haired boy takes your pizza happily...however after he quickly gulps it down he asks for another slice...do you fulfill his greedy wishes? [type Y or N]");
}

if(userInput == "Y") {
  alert("The red-haired boy eats your slices...and as you lay the pizxa down in preparation to get on your bike, he steals your entire pizza. :( GAMEOVER");
} else(userInput == "N"); {
  alert("The red-haired boy turns bloodshot red...and turns into a pizza eating dragon, which scares you. You drop the pizza and run off, leaving the box there with the pizza eating dragon. :( GAMEOVER");
}

if(userInput == "N") {
  alert("The red-haired boy turns into a pizxa eating dragon. You are brave so you turn to face the dragon...and little does he kmnow you have bruce lee level kung fu skills. You run up the dragon's neck, and roundhouse kick him, knocking the dragon out. Way to go! [Press OK to continue.]");
}
// put code here!

var choice = "";
var type = prompt("You're finally old enough to choose your first Pokemon! Professor Oak gives you 3 pokeballs to choose from. What type of Pokemon do you choose? Water, Fire or Grass (W, F, G)?");
if (choice == "W" || "Water") {
  alert("Your first Pokemon is Squirtle!");
}
else if (choice == "F" || "Fire") {
  alert("Your first Pokemon is Charmander!");
}
else if (choice == "G" || "Grass") {
  alert("Your first Pokemon is Bulbasoar!");
}
else {
  alert("Sorry, that is not a valid answer.");
}

var journey = prompt("What city will you travel to first? Lavender Town, Veridian City, or Fuchsia City (L, V, or C)?");
if (choice == "L" || "Lavender") {
  var interruption = prompt("On your way there, you encounter a wild Pikachu! Would you like to catch it (Y/N)?");
  if (choice == "Y" || "Yes") {
    alert("You've caught a Pikachu!");
  }
  else if (choice == "N" || "No"){
    alert("Ash Ketchum would be disappointed in you.");
  }
  else {
    alert("Sorry, that is not a valid answer.");
  }
}
else if (choice == "V" || "Veridian") {
  alert("Oh no! Team Rocket has captured your Pokemon!");
}
else if (choice == "F" || "Fuchsia") {
  alert("Are you ready to battle gym leader James?");
}
else {
  alert("Sorry, that is not a valid answer.");
}

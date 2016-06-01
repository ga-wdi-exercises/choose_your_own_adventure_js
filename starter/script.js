// put code here!
// var text;
var name = prompt("What is your name?", "name");
console.log("Hi " + name + ".");

var keepAsking = true
while (keepAsking == true){
  var excited = prompt("Are you excited for your trip to Madagascar? (Y/N)")
  switch (excited) {
    case "Y":
      console.log("Great me too!");
      keepAsking = false;
      break;
    case "N":
      console.log("Work on that attitude!");
    default:
      console.log("Try again.");
  }
}
var keepAsking = true
while(keepAsking == true){
  var startingPoint = prompt("Let's get going! Planes (P), Trains (T) or Automobiles (A)?")
  switch(startingPoint) {
    case "P":
      console.log("Smart choice. Crossing oceans can get tricky.");
      keepAsking = false;
      break;
    case "T":
      console.log("Is there some super secret train to Africa that I'm just not aware about? Try again.");
      break;
    case "A":
      console.log("Best of luck, hope your car has floaties.");
  }
}
var keepAsking = true
while(keepAsking == true){
  var miles = prompt("How many miles do we need to fly?")
    if (miles < 8000){
      console.log("I hope you at least made the African Continent and not the Atlantic Ocean")
    }
    else if (miles <= 9000){
      console.log("Congratulations, you've made it!")
      keepAsking = false;
      break;
    }
    else{
      console.log("You've overshot your destination, good luck with the sharks.")
    }
}
var sightSee = prompt("Which region do you want to explore - North (N), South (S), East (E) or West (W)?")
switch(sightSee){
  case "N":
    console.log("Checkout Ankarana National Park and Nosy Be!");
    break;
  case "S":
    console.log("Checkout Isalo National Park!");
    break;
  case "E":
    console.log("Checkout Andasibe National Park!");
    break;
  case "W":
    console.log("Checkout Baobob's Alley!")
}

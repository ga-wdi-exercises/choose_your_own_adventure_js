var finished = false;
var adventure = function() {
  alert("You live a life of obscurity in a dense, crowded city. All your life you've been hearing bards telling tales and singing ballads of adventures and heroes. It all sounds so exiting and marvelous. But it's not for you.\nOr is it?");

  var yourClass = prompt( "What is your defining characteristic? Are you\n1. Strong \n2. Smart \n3. Agile \n4. Happy? (Input 1, 2, 3 or 4)" );

  switch (parseInt(yourClass)) {
    case 1:
      alert("You are blacksmith apprentice.");
      yourClass = "str";
      break;
    case 2:
      alert("You are a humble scholar.");
      yourClass = "int";
      break;
    case 3:
      alert("You are a petty thief.");
      yourClass = "dex";
      break;
    case 4:
      alert("Happy people have no history.")
      end();
      break;
  }
  if(finished) {
    return
  }
  alert(
    "You get tired from being pushed around. All your efforts get you nothing. Nothing ever changes. But you don't want to be stuck like this your entire life.\nYou want to make a mark upon the world, want to hear bards sing praises about you. It's time to make a name for yourself.\nIt's time to go on an adventure."
  )
  var storm = prompt ("You get out of the city and travel down the road. The road is blocked and a thunderstorm is brewing quickly. Do you \n1. Look for food\n2. Look for shelter\n3. Look for the way forward\n4. Run back to town")
  switch (parseInt(storm)) {
    case 1:
      alert("You are ignoring the storm and scavenge for some nuts and berries. Unfortunately, that brings you under a lonely tree in the middle of a small clearing. The tree is struck by lightning.")
        if (yourClass === "dex") {
          alert("You quickly roll out of the way of a falling tree and run for the forest.");
        } else {
          alert("You are crushed by a giant tree.");
          // end();
          return;
        }
    case 2:
      alert("You decide to hide in the forest and wait it out.");
        if (yourClass === "int") {
          alert("")
        }

  }
}
adventure();

function end() {
  var end = prompt("The End. Re-try (y/n)?")
    switch (end) {
      case "y":
        adventure();
        break;
      default:
        finished = true;
        alert("The End.");
        break;
  }
}

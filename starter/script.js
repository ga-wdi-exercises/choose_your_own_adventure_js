
var doorValue = prompt("You are trap in a house and must escape. You see 3 colored doors: red, green and blue. Choose a color.");
  function gameStart() {
    switch (doorValue) {
        case 'red':
            var pieValue = prompt("You enter a room with an evil grandma. She forces you to eat her pie. Pick between apple or blueberry.");
            pie(pieValue);
            break;

        case 'green':
            var ageValue = prompt("You enter a room with an ugly troll. He forces you to guess his age. Pick between 1-100.");
            var ageInt = parseInt(ageValue);
            guessAge(ageInt);
            break;

        case 'blue':
            var dogValue = prompt("You enter a room with a cute doggie. There are 2 treats infront of her: bacon or mushroom. Pick a treat for the doggie.")
            dogTreat(dogValue);
          break;

        default:
          loop();
    }
  }


gameStart();


function loop() {
    // var door = 0;
    while (true) {
        doorValue = prompt("Wrong color! Pick red, green or blue.");
        if (doorValue === 'red' || doorValue === 'green' || doorValue === 'blue') {
            // door = 1;
            gameStart();
            break;
        }
    };
}

function pie(pieValue) {
  if (pieValue === 'apple') {
    alert("Classic! Evil grandma will feed you forever. Oh no, you're stuck for eternity!");
  }
  else if (pieValue === 'blueberry') {
    alert("Good! Evil grandma lets you leave. You've escaped!");
  } else {
    alert("Invalid input. Please start over.");
  }
}

function guessAge(ageInt) {
  if (ageInt === 95) {
    alert("Correct! Troll is shocked! He lets you leave as a reward. You've escaped!");
  }
  else if (ageInt < 96 && ageInt > 0) {
    alert("You guess wrong! The troll will now eat you.")
  }
  else {
    alert("You must pick between 1-100. Please start over.")
  }
}

function dogTreat(dogValue) {
  if (dogValue === 'bacon') {
    alert("She loves you unconditinally! Oh no, you're stuck for eternity!")
  }
  else if (dogValue === 'mushroom') {
    var command = prompt("She ate the magical mushroom! She can now talk. Give her a command: bark or paw.")
    switch (command) {
      case 'bark':
          alert("She says 'I love you forever!'. Oh no, you're stuck for eternity!")
        break;
      case 'paw':
          alert("She gives you a key and says 'Get home safe!' You've escaped!")
        break;
    }
  }
  else {
    alert("You didn't give her any treat :( Please start over.")
  }
}

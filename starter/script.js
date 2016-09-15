// choose your own adventure:
// function
//  if
//  else
//  switch
//  case
//  break
// put code here!
// each scene should have it's own function

var name = prompt("Hello! What is your name?");

var pokemon = prompt("Hello, " + name + "." + " Quick! You see a Pikachu and A Charmander! Which one do you want to battle? Choose: [p] for Pickachu or [c] for Charmander?");
  if (pokemon === "p") {
  var p = prompt("Awesome, you got a Pikachu! Ready for a gym battle? Do you want to battle Brock or Misty?" );
pikachu();
// call the function, here for Pikachu

} else if (pokemon === "c") {
    var c = prompt("Sweet, man! a Charmander! Ready for a gym battle? Do you want to battle Erika or Misty?");
charmander();

} else {
    alert("No, you aren't following the rules!!");
}

function pikachu() {
  if (p === "Brock") {
    prompt("You lost, bro. Brock rocked you. Back to the Pokemon Center");
} else if (p === "Misty") {
    prompt("Lol. That wasn't even a fair fight. Owned");
  }
}

function charmander() {
  if (c === "Erika") {
    confirm("You beasted her! Nice Job!! Oh no, It's TEAM ROCKET. Should we battle them?");
} else if (c === "Misty") {
    confirm("Whoa, she killed you! Go back to the Pokemon Center!");
  }
}

// you wanna play again? while loop. or switch

var name = prompt("Hello! What is your name?");

var pokemon = prompt("Hello, " + name + "." + " Quick! You see a Pikachu, a Charmander, and a Squirtle! Which one do you want to battle? Choose: [p] for Pikachu, [c] for Charmander, [s] for Squirtle");
  if (pokemon === "p") {
    var p = prompt("Awesome, you got a Pikachu! Ready for a gym battle? Do you want to battle Brock or Misty?" );
pikachu();

} else if (pokemon === "c") {
    var c = prompt("Sweet, man! a Charmander! Ready for a gym battle? Do you want to battle Erika or Misty?");
charmander();

} else if (pokemon === "s") {
    var s = confirm("That's cool. You picked Squirtle. Oh crap, it's Team Rocket! Want to battle them?");
teamRocket();

} else {
    alert("No, you aren't following the rules!!");
}

function pikachu() {
  if (p === "Brock") {
    var win = confirm("You lost, bro. Brock rocked you. Back to the Pokemon Center");
    PokemonCenter();
} else if (p === "Misty") {
    var lose = confirm("Lol. That wasn't even a fair fight. Owned. Oh crap, it's TEAM ROCKET!!! WANNA BATTLE THEM?!");
  teamRocket();
  }
}

function charmander() {
  if (c === "Erika") {
    var win = confirm("You beasted her! Nice Job!! Oh no, It's TEAM ROCKET. Should we battle them?");
  teamRocket();

} else if (c === "Misty") {
    var lose = confirm("Whoa, she killed you! Go back to the Pokemon Center!");
    PokemonCenter();
  }
}

function teamRocket() {
  if (s === true) {
    var win = confirm("Haha, TEAM ROCKETS blasting off again! Okay, let's go to the Pokemon Center!");
    PokemonCenter();

  } else {
    var lose = confirm("Welp, TEAM ROCKET doesn't care if you don't want to fight! So they took all your Pokemon and you fainted. Game over.");
    console.log("Game over.");
  }
}

function PokemonCenter() {
  var welcome = confirm("Welcome to the Pokemon Center! We can heal your Pokemon back to perfect health! Shall we heal your Pokemon?");
    if (welcome === true) {
      confirm("Okay! We'll need your Pokemon! .  .  .  .  .   .   .   .   .     . Thank you! Your Pokemon are fully healed. We hope to see you again.");
    } else {
      alert("You don't want our help? Well, game over.");
      console.log("Game over.");
    }
}

// switch ()
// you wanna play again? while loop. or switch

var name = prompt("What is your name?", "name");
var game = prompt(name + ", would you like to play a game (y or n)?");
var pill = prompt("Great! Now, red pill or blue pill? (red or blue)");

function getInput(){
  if (game === "y") {
    return pill;
    return prompt("Down the rabbit hole we go");
  } else if (game === "n"){
    return alert("Laaaame!");
  }
}
getInput();

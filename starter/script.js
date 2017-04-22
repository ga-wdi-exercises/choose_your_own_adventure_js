// put code here!

// Dungeon Adventures (Cave Man)
var user = prompt("Welcome to the Dungeon, You wake up to an abrupt LOUD noise! Do you investigate? yes or no");

switch(user) {
  case "yes":
    var yes = prompt ("You decide to investigate and you enter the Hall of the Dead. Its a crossroads!! What direction do you go? left or right ");
  case "no":
    var no = prompt("The room becomes dark...GAME OVER...");
    }

switch(yes) {
  // if (case "yes" === "yes") {
  case "left":
     var left = prompt("you walk left at the crossroads, entering the moonpool room and come across a MONSTER!! What do you do? run or fight or scream");
  case "right": {}
    var right = prompt("You walk right down a long hallway and never return...GAME OVER...");


}

switch(left) {
  case "run":
    var run = prompt("You trip and fall and the monster catches you...GAME OVER...");
  case "fight":
    var fight = prompt(" You grab an axe and swing away ('Signs' movie reference)");
    var swings = 0;
      for (swings = 0; swings < 2; swings++) {
        console.log(swings);
        prompt("You swing!");
        prompt("You defeat the Monster");
      }
  case "scream":
    var scream = prompt("Why did you scream? Why?");
}

switch (fight) {
  prompt("You see the light atht the end of the dungeon? what do you do? (walk or run)")
}
// switch (right) {
//   alert("Retry");
// }
// var user prompt
// switch (user)
// case blank
// var action

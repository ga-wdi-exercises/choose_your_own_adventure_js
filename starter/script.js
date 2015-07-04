// Minimum Requirements:
// (1) 3 questions per path
// (2) 7 places the user could end up at
// (3) 1 question must be answered with multiple responses
// (4) 1 integer response
// (5) 1 string response - completed
// (6) 1 loop
//
// Questions:
// (1) how do I keep prompting the player to move through the questions? I've got an alert set, but that won't prompt a user for more info.
// (2) how do I properly test this code? repl.it isn't prompting a user for input as I expected.

var letsPlay = prompt("Hello! Are you ready to see what playing Chutes & Ladders is like? Type yes, no, or maybe");

 if (letsPlay == "yes" || letsPlay == "maybe") {
   alert("Great! Let's get started. Would you like to ride a bike, bake a cake, or rescue a kitten from high up in a tree?");
 } else if (letsPlay == "no") {
   alert("No hard feelings. See you next time!");
 }

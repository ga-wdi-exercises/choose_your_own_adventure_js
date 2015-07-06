var allowedToGoToNextLocation = false;
console.log("Welcome to Harry Potter, Make Your Own Adventure GAME!");
console.log("Your Owl just came in the mail! You've been accepted to Hogwarts. It's time to go to Diagon Alley");
console.log("You made it to the alley, and diagon alley is through this brick wall. You know you have to tap one of the bricks, but you forgot which one!");
var brickChoice = prompt("Do you tap the 'red' brick, 'blue' brick, or 'yellow' brick?", "red").toLowerCase();
console.log(brickChoice);
while(brickChoice != "blue") {
  brickChoice = prompt("The brick shoots out of the wall and hits you in the face. Ouch! Out of what can only be called spite, it nestles itself back into the wall. Pick again!", "red").toLowerCase();
}
console.log("Good choice! The secret wizarding marketplace opens itself up to you. Before you walk more than 10 steps, Draco Malfoy and his son, Draco Malfoy (no relation) are standing in your way. They seem mad.");
var malfoyDecision = prompt("Who are you? Why are you alone? What house are you in? It better be slytherin.", "You Can Type G, H, R, or S").toUpperCase();
if(malfoyDecision === "G") {
  console.log("He hisses his disapproval and challenges you to a duel. Picking Gryffindor was a bold choice, particularly since you don't have a wand yet, so this is looking pretty bleak. You look around at your options.");
  var challengeMalfoyDecision = prompt("You can 'fight', 'run', or 'bribe'", "fight").toLowerCase();
  switch(challengeMalfoyDecision) {
    case "fight":
      var fightObjectChoice = prompt("You see a 'stone', a 'rat', and a dusty old 'hat'. What will you use?", "stone").toLowerCase();
        switch(fightObjectChoice) {
          case "stone":
            console.log("wow you really are brave. Your decision to choose gryffindor was probably the right one. Unfortunately bravery won't protect you from the avada kedavra curse barreling toward your head. Sorry.")
            break;
          case "rat":
            console.log("You bend down to pick up the rat. Right when you touch it, it transforms into a human before your eyes. You're very surprised, the old rat now man is slightly surprised, and malfoy is not at all surprised as he curses you into oblivion.");
            break;
          case "hat":
            console.log("You pick up the hat and put it on, looking rather stupid. A sword falls out of it and directly onto your skull. It hurts a lot, and you fall over. Malfoy uses this time to attack and you're killed instantly. Probably shouldn't fight established wizards next time.");
            break;
        }
      break;
    case "run":
      console.log("'Running away, eh?' Malfoy snides. He decides he's going to aim a curse into your back just for giggles.");
      var dodgeMalfoysCurseDirection = prompt("Dodge 'right' or 'left'?", "right").toLowerCase();
      if(dodgeMalfoysCurseDirection === "right") {
        console.log("Probably should have told you about that wall you just ran into. But I didn't. And now you're dead. Sorry.");
      }
      else {
        console.log("You want to go left, right? That is to say, right is not the choice you are making, instead you'd like to go left. Right?");
        var obfuscatedQuestion = prompt("'Right', 'Left'").toLowerCase();
        if(obfuscatedQuestion === "right") {
          console.log("Right! Left it is. I thought so. You run eastward, which just so happens to be left of your previous south-bound journey. You dodge malfoy's curse splendidly. You come out of the alley at a different location. It appears you lost him.");
          allowedToGoToNextLocation = true;
        }
        else {
          console.log("Yeah. I don't really understand either. While you stand pondering your options, the curse hits you square in the back. Bad luck!");
        }
      }
      break;
    case "bribe":
      console.log("Now you're talking his language! His eyes brighten at the idea of getting more money and asks how much you're willing to spend.");
      var howMuchToBribeMalfoy = prompt("Well. How deep are your pockets?", "100");
      if(howMuchToBribeMalfoy > 99) {
        console.log("Malfoy looks pleased. And his son, Malfoy Junior, is also pleased. Everyone is pleased. Except you. You're not so pleased. You just lost " + howMuchToBribeMalfoy + " units of currency. Probably dollars, but I wasn't paying attention. Anyway, the Malfoys are happy. You're not. That's the main point. But now you can keep venturing onward! So that's good!");
        allowedToGoToNextLocation = true;
      }
      else {
        console.log("'Cheapskate', Malfoy yells in derision. He pulls out his wand and blast you into 5,405 pieces. I counted.");
      }
      break;
  }
}
else{
  console.log("He nods in approval. 'Very well then,' he mutters, 'You may proceed.''");
  allowedToGoToNextLocation = true;
}
if(allowedToGoToNextLocation = true) {
  var nextLocation = prompt("Phew. You're solidly in Diagon Alley now. You see 'Gringotts', 'Ollivanders', and 'Animal' emporium. Where to?");
  console.log("You venture forward toward " + nextLocation + ", a glitter of optimism in your eye. Or is that cataracts? Either way there's a whole world in front of you! Come back next time to play more! Congratulations for making it to the end.");
}

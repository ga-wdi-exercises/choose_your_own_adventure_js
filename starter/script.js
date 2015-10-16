var lineBreak = function() {
  console.log("----------------------------");
}
var userName = prompt("What is your name?")
lineBreak();

console.log("Welcome, " + userName + " You are searching for the Holy Grail and have made it to the temple where the Grail is rumored to be. You face three challenges. Luckily, you have a diary to help you. As you walk towards the entrance, you approach the first challenge.")
lineBreak();

console.log("You hear a whizzing coming from above you. Do you kneel?")
lineBreak();

var challengeOne = prompt("Of course! A penitant man is humble. - Enter: y \n Nah, I am good. Better to be on my feet in case I need to run. Enter: n");

/* Challenge One - Response Yes - Move on*/
if (challengeOne == "y") {
  console.log("Good choice. You narrowly avoid getting your head chopped off. You dust yourself off and continue on the path.");
  lineBreak();
  console.log("You come to a giant grid of letters. The diary says that for the second challenge you need to proceed in the footsteps of the word of God. You figure out that you have to spell God. What letter do you pick to start?");

/* OUTCOME Challenge Two - Response G - Game Ends */
  var challengeTwo = prompt("Clearly, the answer is G since God starts with G. Enter g \n Let's think about this - when these clues were written, no one spoke English! The answer is Jehovah. Enter j \n Actually, in the Latin alphabet Jehovah start with an I: Enter i");
    if (challengeTwo == "g") {
      console.log("You fall into a deep pit, break your neck, and die. Sorry about that - at least it was quick.");

/* Challenge Two - Reponse J - Enter Loop*/
    } else if (challengeTwo == "j") {
      console.log("Eek! You should have gone with the Latin spelling! You fall into a pit, but barely grab onto the ledge. How much strength do you have?");

/* Challenge Two - Response J - Loop */
      var hangOn = prompt("Enter a value between 1 and 10 for how much strength you have. ");
        while(hangOn < 7) {
          var hangOn = prompt("Better muster more strength! That is not enough. Pick again.")
        }
        console.log("Phew! That is what it takes! You manage to crawl out and proceed to spell out the name in Latin.");
      lineBreak();

/* Challenge Two - Response I */
    } else if (challengeTwo == "i"){
      console.log("Good thing you studied Latin. You move forward.")
    }


  // How far do you jump?
  // Which cup do you choose?


/* OUTCOME Challenge One - Response No - You Die */
} else {
  console.log("You lost your head, and are now dead. Sorry about that.")
};

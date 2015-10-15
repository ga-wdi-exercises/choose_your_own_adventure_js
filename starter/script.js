// put code here!
var maze = prompt("You wake up with amnesia in the middle of a maze with a bomb strapped to your chest.  There's two doors and a screw driver laying on the ground.  Do you choose the left door (L), the right door (R), or decide to try and disarm the bomb with the screwdriver (D)?");

if (maze === "L"){
  console.log("Good choice.  Left is lucky.  You come across a long corridor filled with water.  The water is very murky.  What will you do?");
  var swim = prompt("How many years of experience do you have in swimming?(ex. 2)");
  if (swim >= 4) {
    console.log("You made it across the water but you are dead tired");
    var out = prompt("Take a nap (n) or make the final push(p)?");
    if (out === "n") {
      console.log("You awake from a nap just in time to hear the bomb go off.  Goodbye");
    }
    else if (out === "p") {
      console.log("You just make it out of the maze and your bomb is disarmed!");
    }
  }
    else if (swim < 4) {
      console.log("You had to turn around and run back. There is only 5 minutes left.  On the way back you notice a window but it is out of reach.")
      var climb = prompt("Will you climb (c) or  run (r)?");
      if (climb === "c") {
        console.log("Congratulations you made it out in time!");
      } else {
        console.log("You ran fast but the bomb went off and you lose!");
      }
    }
}
    else if (maze === "R"){
      console.log("You come across a wizard who will turn your bomb off if you pass his challenges");
      var magicNum = prompt("What is the magic number (1-100?)");
      // while(magicNum<40) {
      //   prompt("What is the magic number (1-100?)");
      // } need to fix loop so it is not infinite
      if (magicNum >= 40) {
      console.log("You have passed the challenge! Your next question will be the toughest yet!");
        var question = prompt("What is my favorite color? Red (R), Blue (B), or (G)");
        if (question === "R"){
          console.log("That is my favorite color you win!");
        } else if (question === "B") {
          console.log("That is my least favorite color I will destroy you!.  You lose.")
        } else if (question === "G") {
          console.log("Hmmmmm I am still not sure if I like you or not so I will have to ask you one final question....");
          var code = prompt("Do you love to code? (Yes or No)");
          if (code === "Yes") {
            console.log("The wizard loves to go too and he let you free!");
          } else if (code === "No") {
            console.log("You do not have to worry about class anymore.  The wizard destroyed you.");
          }
        }
      }
    }
    else if (maze === "D") {
      var panel = prompt("Pry open the panel with the screw driver (P) or take extra time to undo the screws (U)");
      if (panel === "P") {
        console.log("OH NO! The screw driver snapped!");
        var boogie = prompt("Run Left (L), run right (R), or wait it out (W)");
        if (boogie === "L") {
          console.log("You tripped and fell in a pool of water and drowned");
        } else if (boogie === "R") {
          console.log("A wizard that loves coding undid your bomb because you love to code too!")
        } else if (boogie ===  "W") {
          console.log("The clock is slowly ticking and the minute it strikes 0 nothing happens..... the the bomb goes off you lose");
        }
      } else if (panel === "U") {
        console.log("You opened the panel but a lot of precious time has been wasted.  You must hurry!");
        var wire = prompt("Which wire will you cut? The blue (B), Yellow(Y), or the Red (R)?");
        if (wire==="B") {
          console.log("The bomb has been disarmed?  Now you'll have to figure out how to get out before you starve.....");
        } else if (wire === "Y") {
          console.log("BOOOOOOOOOOOOOOOOM! GAME OVER!");
        } else if (wire === "R") {
          console.log("The counter is going down faster now!");
          var lastOption = prompt("Make a run for it (R) or pray (P)?")
          if (lastOption=== "R") {
            console.log("Not fast enough. YOU DEAD!");
          } else if (lastOption==="P") {
            console.log("Your prayers weren't answered.....you lose");
          }
        }
      }
    }

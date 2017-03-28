// put code here!
let userResponse = prompt("Enter a number between 1 and 50.");

if (userResponse <= 25 && userResponse > 0) {
  userResponse = null;
  userResponse = prompt("You wake up in a empty room. The walls are white and there is no door. You notice that there is a (t)ile on the left wall that is loose, a red (b)utton on the floor in the corner, and that you are feeling really (s)leepy. What do you do? (t/b/s)");

  if (userResponse.toLowerCase() === 't') {
    let keypadEnt = true;
     userResponse = prompt('You start to pry up the tile. You find there is a hole behind with a keypad and a post it note.  The post-it note has the word "Jabroni" inscribed on it.  What do you type on the keypad?');

    while (keypadEnt === true) {
      if (userResponse === 'Jabroni') {
        keypadEnt = false;

        userResponse = prompt('You hear a unlocking sound  behind the wall. A cleverly disguised door opens and Neo from the matrix is standing there.  He asked you if you want the (r)ed pill or the (b)lue pill. (r/b)');

        if (userResponse.toLowerCase() === 'b') {
          userResponse = null;
          userResponse = prompt('You wake up in your bed. It was all a dream. You look at your alarm clock and realize its time to get up for work.'
        } else if (userResponse.toLowerCase() === 'r')
          userResponse = null;
          userResponse = prompt('You take the red pill. You realize that is just a Jolly Rancher.  Neo laughs and you follow him into the matrix.'
      } else {
        userResponse = prompt("The keypad's screen says \"You have entered in the wrong password, try again.\"");
      }
    }
  } else if (userResponse === 'b') {
      userResponse = null;
      userResponse = prompt("You walk over to the button. Do you (p)ress the button, or do you stand up and start (y)elling?");

    if (userResponse === 'p') {
      userResponse = null;
      userResponse = prompt("You press the button and then you hear, \" That's a wrap for today!\" You just completed the final scene for the television show you star in.  Time to go to the bar and celebrate!");

    } else if (userResponse === 'y'){
      userResponse = null;
      alert("You start yelling and out of no where you hear someone yell \"Cuttttt!\" You just upset the director of the television show that you star in.  Apparently that was not in the script.");

    }

  } else if (userResponse.toLowerCase() === 's') {
    userResponse = null;
    userResponse = prompt("You take a nap. After some time, you wake up and realize that you were dreaming the whole time.  It's lunch time and you want to eat _______.");
    alert("You make " + userResponse.toLowerCase() + " for lunch!");
  }
} else if (userResponse <= 50 && userResponse > 25) {
  userResponse = null;
  userResponse = prompt('You are watching TV.  Your receiver only can pick up 5 channels, what channel do you choose? (7/10/13/18/22)');

  switch (userResponse) {
    case 7:
    case 13:
    case 18:
      userResponse = prompt('You find that the TV channel is just static.  Just as you are about the change channels, ');

      break;
    case 10:
      //IDEA
      break;
    case 22:

      break;
    default:

  }


}

// } else if (userResponse <= 75 && userResponse > 50) {
//   // Dimly Lit Tunnel
//
//   userResponse = prompt("You find yourself in a dimly lit tunnel. You hear some rustling in the dark.  Do you (r)un away or do you (i)nvestigate the sound? (r/i)");
//   if (userResponse === "r") {
//   	userResponse = prompt('You turn around and run. You find you have reached a dead end.  Do you (h)ide amongst some rubble, (c)lose your eyes and pretend nothing is there, or do you (p)repare to fight? (h/c/p)');
//   	switch (userResponse) {
//   		case 'h':
//   		case 'c':
//   			userResponse = prompt('You find that it was just a scurrying rat, so you continue on.. As you walk some more you see two paths, one path leads (l)eft and seems to go deeper and the other path leads (r)ight. Choose. (l/r)');
//   			break;
//   		case 'p':
//   			// TODO: Prepared to fight you ready your fists, only to find it was a scurying rat.  You laugh and continue on. As you walk some more you see two paths, one path leads (l)eft and seems to go deeper and the other path leads (r)ight. Choose. (l/r)
//   			if (l === true) {
//   				// TODO: You follow the tunnel. You find that your observations where wrong.  You see light, you continue to follow it and you reach the exit.  CONGRATULATIONS! You excaped the tunnel.  You are going to the pub, what are you going to drink? (Enter drink name)
//   				// TODO: You had a {DRINK} and laughed with all your buddies about the fabled rat.
//   			} else if (r === true) {
//   				// TODO: You continue right to find that there is a blocked path with rocks.  Beside that path, there is a deep bottomless whole. How do you cross the rubble, do you (c)lear the path, c(l)imb over the rubble, or do you (j)ump the rubble? (c/l/j)
//   				if (c) {
//   					//TODO: You clear the bath pushing the rubble into the hole.  Once the path is clear you continue on. As you move through the tunnel, you can feel air moving.  This a good sign.  You turn
//   				} else if (l) {
//
//           } else if (j) {
//
//           }
//   			}
//   			break;
//   		default:
//   			// TODO: You did not enter the correct response.  Check again.
//   	} else if (userResponse === "i") {
//   		userResponse = prompt("You look around and see a small shadow in the corner. As you watch the shadow, you realize that its just a rat. You");
//   	}
//   } else {
//   	userResponse = prompt("Your response is either not a number or it is outside the number range. Enter a number between 1 and 75.");
//   }

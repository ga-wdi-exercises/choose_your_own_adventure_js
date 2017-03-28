// put code here!
let userResponse = prompt("Enter a number between 1 and 50.");

if (userResponse <= 25 && userResponse > 0) {
  userResponse = null;
  userResponse = prompt("You wake up in a empty room. The walls are white and there is no door. You notice that there is a (t)ile on the left wall that is loose, a (p)aperclip on the floor in the corner, and that you are feeling really (s)leepy. What do you do? (t/p/s)");

  if (userResponse.toLowerCase() === 't') {
    userResponse = null;
    userResponse = prompt().toLowerCase();

    if (false) {
      userResponse = null;
      userResponse = prompt().toLowerCase();

    } else if (false){
      userResponse = null;
      userResponse = prompt().toLowerCase();

    }
  } else if (userResponse === 'p') {
      userResponse = null;
      userResponse = prompt().toLowerCase();
    //IDEA:

    if (false) {
      userResponse = null;
      userResponse = prompt().toLowerCase();

    } else if (false){
      userResponse = null;
      userResponse = prompt().toLowerCase();

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
    //IDEA: static channel. words come up on on the screen, you're freak out.  You try to turn off the channel. While loop 5 times.

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

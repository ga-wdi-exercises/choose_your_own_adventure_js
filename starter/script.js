// put code here!
var userResponse = prompt("Enter a number between 1 and 75.");

if (userResponse <= 25 && userResponse > 0) {
  //IDEA: White Empty Room
  //TODO:

  if (true) {

  } else if (true) {

  }







} else if (userResponse <= 50 && userResponse > 25) {
  //IDEA: watching TV










} else if (userResponse <= 75 && userResponse > 50) {
  // Dimly Lit Tunnel

    // You find yourself in a dimly lit tunnel. You hear some rustling in the dark.  Do you (r)un away or do you (i)nvestigate the sound? (r/i)

    // TODO: - RUN - You turn around and run. You find you have reached a dead end.  Do you (h)ide amongst some rubble, (c)lose your eyes and pretend nothing is there, or do you (p)repare to fight? (h/c/p)

      switch (userResponse) {
        case 'h':
        case 'c':
          // TODO: You find that it was just a scurrying rat, so you continue on.. As you walk some more you see two paths, one path leads (l)eft and seems to go deeper and the other path leads (r)ight. Choose. (l/r)

          break;
        case 'p':
          // TODO: Prepared to fight you ready your fists, only to find it was a scurying rat.  You laugh and continue on. As you walk some more you see two paths, one path leads (l)eft and seems to go deeper and the other path leads (r)ight. Choose. (l/r)

          if (l === true) {
            // TODO: You follow the tunnel. You find that your observations where wrong.  You see light, you continue to follow it and you reach the exit.  CONGRATULATIONS! You excaped the tunnel.  You are going to the pub, what are you going to drink? (Enter drink name)

              // TODO: You had a {DRINK} and laughed with all your buddies about the fabled rat.

          } else if (r === true) {
            // TODO: You continue right to find that there is a blocked path with rocks.  Beside that path, there is a deep bottomless whole. How do you cross the rubble, do you (c)lear the path, c(l)imb over the rubble, or do you (j)ump the rubble? (c/l/j)

            if (c) {
              //TODO: You clear the bath pushing the rubble into the hole.  Once the path is clear you follow the
            } else if (l) {

            } else if (j) {

            }
          }


          break;
        default:
          // TODO: You did not enter the correct response.  Check again.

      }








} else {
  userResponse = prompt("Your response is either not a number or it is outside the number range. Enter a number between 1 and 75.");
}

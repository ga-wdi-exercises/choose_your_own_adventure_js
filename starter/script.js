function main(){
  console.log("You are trapped inside a maze.  You hear an ominous growl behind you.  Ahead, there are three paths forward into the maze.");

  var userPrompt = prompt("Choose left, middle, or right.");
  if (userPrompt == "left"){
    console.log("You come upon a forked path.");
    userPrompt = prompt("Choose right or left.  Hurry, whatever is chasing you is very close.");
    if (userPrompt == "left") {
      console.log("You come upon a tall stone wall blocking your path.  You hear your pursuer closing in behind you.")
      userPrompt = prompt("Try to climb the wall or turn and fight.  Enter climb or fight");
      if (userPrompt == "climb"){
        console.log("Fifteen feet up the wall your hands slip.  You tumble backwards and hear a snap.  It is your neck.")
        return;
      }
      else if (userPrompt == "fight"){
        console.log("You brace your back against the wall, ready to face your pursuer. However, it is on you in a flash.  It graps you in its talons and rushes off toward your certain demise.")
        return;
      }
    }
    else if (userPrompt == "right") {
      console.log("You turn a corner and come upon a stone door.  It is locked.  Do you attempt to open it or do you turn to fight whatever creature is hunting you?")
      userPrompt = prompt("Enter door or fight.");
    }
        if (userPrompt == "fight"){
          console.log("You spin on your heel to face your pursuer.  Unfortunately, it is too fast. You feel its jaws closing around your neck before losing consciousness.  If only you had tried the door...")
          return;

        }else if (userPrompt == "door"){
          console.log("With some difficultly you wrench open the door and throw yourself through the threshold.  The sound of your pursuer have faded and you head deeper into a dark poorly lit stone room.  You come to another door and try the handle.  It is locked.  You notice twelve keys littering the ground in front of the door.")
          userPrompt = prompt("Choose a key.  Enter 1 through 12.");
          while (userPrompt != 8) {
            if (userPrompt == 9) {
              console.log("This key is not a key. Beforer you can drop it, you feel a sharp sting on your wrist. You drop to the floor, everything goes black.")
              return;
          }
            userPrompt = prompt("This key does not fit.  Try another.");
          }
          console.log("The key works, you step into the next room and are blinded by a brilliant light.  You feel a comforting warmth and, for no reason at all, a certainty that you have reached the best possible destination.")
          console.log("Congratulations, you have traversed the maze!");
          return;
        }
    }
    else if (userPrompt == "middle"){
      console.log("You sprint toward the middle path and vault over a small wall.  The sounds of your pursuer fade into the distance.  You notice a small glimmering chest on the ground in front of you.");
      userPrompt = prompt("Open the chest? Yes or no.");
      if (userPrompt == "yes") {
        console.log("The chest creaks as it opens.  Something small leaps out of the chest onto your face.  You struggle to breath but can't.  You lose consciousness.");
        return;
      }
      if (userPrompt == "no") {
        console.log("You step past the chest, through a small tunnel, and into a moonlit courtyard.  Suddently you feel an overwhelming thirst.  You notice two eartenware cups on the ground in the middle of the courtyard.");
        userPrompt = prompt("Choose the left or right cup.");
        if (userPrompt == "right"){
          console.log("As clear liquid from the second cup slides down your throat you suddently feel unbearable warm. After another moment, you burst into flames and collapse onto the ground.");
          return;
        }
        else if (userPrompt == "left") {
          console.log("You feel refreshed after drinking from the left cup.  Inexplicably, you feel safe.  You lay down and fall asleep.  When you wake, it is light out and you notice a ladder leading out of the courtyard.  You climb the ladder to safety.");
          console.log("Congratulations!  You have traverded the maze sucessfully.");
        }
      }
    }
    else if (userPrompt == "right") {
      console.log("The tunnel forks.");
      userPrompt = prompt("Left or right.");
      if (userPrompt == "left"){
        console.log("You trip and fall, dying instantly");
        return;
      }
      if (userPrompt == "right") {
        console.log("As you turn around the bend, you notice a small tunnel.  With nowhere else to run and your pursuer closing in, you duck inside.  At the end of the tunnel you come upon two bowls of rice.  You are seized by a sudden hunger.");
        userPrompt = prompt("Choose the right or the left bowl");
        if (userPrompt == "right"){
          console.log("The rice sticks in your throat.  You gasp for air but the rice is lodged thick.  You keel forward onto the ground.");
          return;
        }
        else if (userPrompt == "left"){
          console.log("The rice tastes delicious.  Feeling renewed, you continue down the tunnel.  You come upon a ladder leading in two directions: up into the ceiling and down further into the ground.");
          userPrompt = prompt("Choose a direction, up or down.");
          if (userPrompt == "up") {
            console.log("You climb upward and into a brilliant, soothing light.  You feel content and sure that your journey has reached a positive conclusion.")
            console.log("Congratulations!  You have sucessfully traversed the maze.")
            return;
          }
          else if (userPrompt == "down") {
            console.log("As you descend on the ladder, your hands slip and you plummet toward certain death.")
            return;
          }
        }
    }
  }

}
main();

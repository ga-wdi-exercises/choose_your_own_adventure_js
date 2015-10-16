console.log("You awake tied to a PVC pipe in a tunnel.  You know things got weird last night but this is something new.  You look around - There is a hatch 20 feet to the left.  There is a door 20 feet to the right.  All you can think about is that your mission is to find \"Ye Old Flask\" and that you are very hungry. After breaking free of you bonds you now need to decide which way to go.");

var firstResponse = prompt('Will you go left (l), will you go right (r), or will you stay (s) here and wait?');

var lysolRoom = "You open a rusty door that leads into a squalid room full of your worst horrors... canisters of Lysol.  There is also an old man polishing the cans religiously.";

var reactorRoom = "As you open the smooth metal hatch a bright light shines through at you.  You think you are safe, but you realize you are now in a highly radioactive reactor room with nuclear material leaking out of the side of the reactor.  The only door out is directly to the right of the reactor.  There is also a mutant cheetah in a corner.";

var stayHall = "You sit down and take a nap.  You wake up to find yourself too hungry to move on.  You can barely move.  Your sight begins to fade... you feel warm...... You have met your end.";


if (firstResponse === 'l'){
  console.log(lysolRoom);
  var firstChoice = lysolRoom;
}else if(firstResponse ==='r'){
  console.log(reactorRoom);
  var firstChoice = reactorRoom;
}else if(firstResponse ==='s'){
  console.log(stayHall);
  var firstChoice = stayHall;
}else{
    //needs to be a while loop
    prompt('Will you go left (l), will you go right (r), or will you stay (s) here and wait?');
}

//for lysolRoom

 function lysolResponseFunction(){
   lysolResponse = prompt("Would you like to talk to the man (m), inspect a can of lysol (i), or go back (b)?");

    if(lysolResponse === 'i'){
      console.log("As you go to pick the can of lysol up, it explodes violently, resulting in your immediate death.");
    }else if(lysolResponse === 'm'){
      console.log("The man looks up and simply asks if you know the magic number.");
      manResponse = prompt("Give the man a number");
      if (manResponse <= 50){
        console.log("The man says, \"You know nothing.  Now you will become a can of lysol.\"  In an instant you feel all go black as you become one of the countless cans of lysol in the room.");
      }else if(manResponse > 50){
        console.log("The man says, \"You truly understand the mysteries of the universe, now enjoy this old flask!\".  You drink deeply from \"Ye Olde Flask\" and enter nirvana!");
      }
    }else if(lysolResponse === 'b'){
      console.log("You return to the corridor, but you are too famished to continue.  This is where you end.");
    }else{
      lysolResponseFunction();
    }
  }
//calls lysol room function if first choice is to the left, recursively calls if user inputs incorrect command
if (firstChoice === lysolRoom){
  lysolResponseFunction();
}
//working on reactorRoom function
function reactorResponseFunction(){
  reactorResponse = prompt("Would you like to get closer to the reactor (r), exit out the door to the right (d), or check out the mutant cheetah (c)?");

  if(reactorResponse === 'r'){
    console.log("You begin to glow with each step towards the reactor.  Strangely you feel yourself becoming stronger with each step as well.  You begin to see visions of strange things.  By the time you reach the melted core of the reactor you feel yourself begin to slip into a higher dimension... the things you see cannot be expressed in any other terms but the secrets of the Universe...  You attained enlightenment.");
  }else if(reactorResponse === 'd'){
    console.log("The door has a key pad with nine characters.  A cryptic message that is barely readable says \"Ent-r pas-w--d, hint it'- va--e is u-der 10\"");
    doorResponse = prompt("Enter a number into the keypad.");
      while(doorResponse != 4){
        doorResponse = prompt("Enter a number into the keypad.");
      }
      console.log("The door creeks open fully!  It is dark, but you rush through as you are anxious to put distance between you and the reactor in meltdown status.  Once you are through, you look around... you just came out of a freezer in a McDonalds that is closed for the night.  You slam the door shut.  You are slightly dissapointed, but hey why don't you treat yourself to some chicken nuggets.  Too bad you didn't find \"Ye Ole Flask\"...");
  }else if(reactorResponse === 'c'){
    console.log("The cheetah immediatly attacks you and you are eaten.  What did you think would happen?");
  }else{
    reactorResponseFunction();
  }
}
//calls reactorResponseFunction
if (firstChoice === reactorRoom){
  reactorResponseFunction();
}






//old Reactor room if statement below

// if(firstChoice === reactorRoom){
//   reactorResponse = prompt("Would you like to get closer to the reactor (r), exit out the door to the right (d), or check out the mutant cheetah (c)?");
//
//   if(reactorResponse === 'r'){
//     console.log("You begin to glow with each step towards the reactor.  Strangely you feel yourself becoming stronger with each step as well.  You begin to see visions of strange things.  By the time you reach the melted core of the reactor you feel yourself begin to slip into a higher dimension... the things you see cannot be expressed in any other terms but the secrets of the Universe...  You attained enlightenment.");
//   }else if(reactorResponse === 'd'){
//     console.log("The door has a key pad with nine characters.  A cryptic message that is barely readable says \"Ent-r pas-w--d, hint it'- va--e is u-der 10\"");
//     doorResponse = prompt("Enter a number into the keypad.");
//     while(doorResponse != 4){
//       doorResponse = prompt("Enter a number into the keypad.")
//     }
//     console.log("The door creeks open fully!  It is dark, but you rush through as you are anxious to put distance between you and the reactor in meltdown status.  Once you are through, you look around... you just came out of a freezer in a McDonalds that is closed for the night.  You slam the door shut.  You are slightly dissapointed, but hey why don't you treat yourself to some chicken nuggets.  Too bad you didn't find \"Ye Ole Flask\"...");
//     //weird code below
//     // if (manResponse <= 50){
//     //   console.log("The man says, \"You know nothing.  Now you will become a can of lysol.\"  In an instant you feel all go black as you become on of the countless cans of lysol in the room.")
//     // }else if(manResponse > 50){
//     //   console.log("The man says, \"You truly understand the mysteries of the universe, now enjoy this old flask!\".  You receive \"Ye Olde Flask\" and enter nirvana!");
//     // }
//   }else if(reactorResponse === 'c'){
//     console.log("The cheetah immediatly attacks you and you are eaten.  What did you think would happen?")
//   }else{
//     prompt("Would you like to get closer to the reactor (r), exit out the door to the right (d), or check out the mutant cheetah (c)?");
//   }
// }

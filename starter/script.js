// My TERRIBLE Weird Fiction Choose Your Own Adventure. Enjoy!

console.log("You are standing on the front porch of the dilapidated home of Clark Smith, an infamous explorer. An elusive man, Smith was known for his boldness of character and relentless curiosity. Weeks after his disappearance, a letter arrived at your doorstep hastily signed by Smith himself. The envelope containing the letter held a worn key and a torn scrap of paper with his address. A few days after the letter arrived, a neighbor found Smith dead in his foyer.");

console.log("It is said that Smith excavated something of great scientific value from the depths of the earth and his journal may shed some light on where you can find it and what happened to him. The massive door in front of you has disturbing markings hacked into its wooden frame. You turn the handle of the door to find it locked. You hesitate, fingering Smith's key in your pocket.");

var useLeave = prompt("USE Clark Smith's key or LEAVE and go home?");
if (useLeave.toUpperCase() === 'USE' || useLeave.toUpperCase() === 'KEY') {
  console.log("You insert the key into the lock and turn it. There is a loud clank as the heavy bolt slides away. You slowly push the door open and look down the dark hallway. A deep chill moves through you and in the distance you hear a strange slurping noise that sends shivers down your spine.");
  var leaveEnter = prompt("Do you ENTER the house or LEAVE?");
  if (leaveEnter.toUpperCase() === "ENTER") {
    console.log("You slowly step inside. Nothing could have prepared you for the state of Smith's home. The entire house is in ruins. A heavy chandelier dangles above you while the broken sconces sputter sparks down the hallway. The slurping grows louder and you begin to second guess your decision to step inside.")
    var exploreGo = prompt("EXPLORE or LEAVE?")
    if (exploreGo.toUpperCase() === "EXPLORE") {
      console.log("You take a deep breath in and start walking down the hallway toward the horrible sound. Your stomach turns with every step. You briefly hesitate at the doorway where the sound is coming from before deciding you can't turn back now. As you turn the corner you find a creature beyond comprehension. You try to make sense of the its countless heads and limbs but your vision fails you and you drop to the floor. You are never heard from again.");
    } else {
      console.log("You decide that finding the journal and whatever Smith discovered isn't worth the risk. You rush out the front door and back to the safety of your home. Late in the following evening while lounging by the fireplace in your study you hear a faint noise coming from the hallway. Your stomach drops when you realize it's the same chilling sound you heard the night before. Your minds unravels as you attempt to comprehend what kind of unnatural creature could make such a sound. Just as you begin to feel ill you remember that you keep your pistol stashed in the desk at the other end of the room.");
      var hideGrab = prompt("HIDE under the table or GRAB your pistol?");
      if (hideGrab.toUpperCase() === "HIDE") {
        console.log("You hide under the table and put your hands over your ears as you try to block out the sound but it only seems to make it louder. Your heart races. Surely this must be a dream.");
        var waitRun = prompt("Continue to WAIT or RUN away?");
          if (waitRun.toUpperCase() === "WAIT") {
            console.log("You do your best to remain still and quiet but the creature is irrevocably drawn to you. As you try to duck out from underneath the table something wet and cold wraps around your ankle. Your vision fails you as you slump over and lose consciousness. You are never heard from again.");
          } else if (waitRun.toUpperCase() === "RUN") {
            console.log("You crawl out from under the table and run away from the sound as fast as you can. Your senses must have deceived you as you turn the corner and find the horrifying creature waiting for you. While trying to make sense of the creature’s countless heads and limbs your vision fails you and you drop to the floor. You are never heard from again.");
          }
      } else {
        console.log("You make a break for the desk. Frantically, you toss everything out of the drawer. The sound of falling books and pens seems to have attracted the creature's attention. You finally wrap your hand around the gun.");
        var scareAimRun = prompt("Shoot the pistol in the air to SCARE the creature away? AIM at the doorway and wait? RUN out the back door?")
        if (scareAimRun.toUpperCase() === "SCARE") {
          console.log("A surge of adrenaline runs through you as you fire the pistol into the air and scream.");
          var scream = prompt("What do you yell?");
          if (scream.length > 10) {
            console.log("You scream " + "'" + scream + "' " + "at the top of your lungs and fire the pistol a second time. The slurping ceases immediately and you listen intently for what seems like an eternity. After a couple hours pass you run out of your house and never return. You move to a new town, far away in a distant county in hope of finding peace but it isn’t long before the terrible sound returns. You spend the last few months of your life moving from town to town before being driven mad. Like Smith before you, you are never seen alive again.")
          } else {
            console.log("You scream " + "'" + scream + "' " + "as loud as you can but the creature's pace only quickens. Overcome with terror you drop the gun and fall to your knees. A massive shadow creeps up the rug in front of you before blocking out all the light in the room. As you try to reach for the gun your vision fails you and you drop to the floor.");
          }
        } else if (scareAimRun.toUpperCase() === "AIM") {
          console.log("You wait, feeling confident and in control of the situation. Suddenly the wet, slurping sound ceases. After thirty seconds you think about peeking around the corner to see if the creature is still there but you wonder if you should wait a little longer.")
          var minutes = prompt("How many minutes do you decide to wait?");
          if (parseInt(minutes) >= 30) {
            console.log("After " + minutes + " minutes pass you run out of your house and never return. You move to a new town, far away in distant county in hope of finding peace but it isn’t long before the terrible sound returns. You spend the last few months of your life moving from town to town before being driven mad. Like Smith before you, you are never seen alive again.")
          } else {
            console.log("You wait " + minutes + " minutes then turn the corner and walk directly into the creature. Trying to make sense of the creature’s countless heads and limbs is an impossibility. You do everything you can to raise the gun and fire but your vision quickly fails you and you drop to the floor. You are never heard from again.");
          }
        } else if (scareAimRun.toUpperCase() === "RUN") {
          console.log("You run toward the back door and realize your senses must have deceived as you find the horrifying creature waiting for you in the hallway. Trying to make sense of the creature’s many limbs and irregular shape is an impossibility. You do everything you can to raise the gun and fire but your vision quickly fails you and you drop to the floor. You are never heard from again.");
        }
      }
    }
  } else if (leaveEnter.toUpperCase() === "LEAVE") {
    console.log("The awful noise unnerves you deeply. You think back on the rumors surrounding the once famed explorer. A trip to a dark and distant land. Weeks spent deep underground in ancient caverns. It changed him deeply. When he returned he distanced himself from his friends and colleagues and spoke incoherently about things that made little sense. You listen once more to that wet, slurping sound. Overwhelmed with fear you decide some things are better left unlearned.");
  }
} else {
    console.log("You grow anxious as you recall the rumors surrounding the once famed explorer. A trip to a dark and distant land. Weeks spent deep underground in ancient caverns. It changed him deeply. When he returned he distanced himself from his friends and colleagues and spoke incoherently about things that made little sense. You shiver and head back home. Overwhelmed with anxiety you decide some things are better left unlearned.");
}

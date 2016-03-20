// put code here!
// takes 3 inputs: the input enter, the number of available choices, and a variable storing the prompt presenting
// the choices from the last node
function inputCrusher (input, availChoiceNum){
  if (parseInt(input) >= 1 && parseInt(input) <= availChoiceNum) {
    return input;
  } else {
    while (!(parseInt(input) >= 1 && parseInt(input) <= availChoiceNum)){
      input = prompt("Please enter a number between 1 and "+availChoiceNum);
    }
  }
}

function nodeMaster(){
  console.log("After years of turnip-farming for protoSkyNet, you abruptly realize that the work is slowly eating away at your soul."+
  " As decades of rationalizations implode, the dust settles and you have a improbable realization that you could become a web developer."+
  " You enroll at GA. You do the pre-work with unsettling vigor. You begin the attempt to internalize the logic of the code."+
  " Your mind reels from the effort; there, many merge-conflicts pop up like those turnips that dance so cruelly in your mind. "+
  " The first week ends and your head is smarting with copious merge-conflicts. Your classmate asks if you are going to happy hour."+
  " You think to yourself, 'Turnipher$ git checkout beer / git merge master'. You have been at the computer for a long time.");
  var nodeMasterChoice = prompt("Go to happy hour? [1] Yes [2] No");
  if(inputCrusher(nodeMasterChoice, 2)==2){
    turnipElevator();
  } else {
    happyHourInsanity();
  }
}

function turnipElevator(){
  console.log("You step into the elevator and breath a sigh of relief. You're going head home and watch 'Insurance Fraud Fail Compilation' videos" +
  " on YouTube and pass out after drinking the remainder of the boxed wine you have, which is actually now just bagged-wine because you" +
  "removed it from the box since it was only just getting in the way. However, when you go to punch the floor for the lobby, all of the buttons " +
  "coalesce into a single, large button with a Turnip icon. The elevator begins to plummet, and the emergency button has somehow vanished." +
  " There is but one option. Or you can choose not to act. Actually, the only real choice, according to Kirkegaard, is the choice to choose. Or something.");
  var feelTheTernip = prompt("Do you [1] wait or do you [2] press the button?");
  if(inputCrusher(feelTheTernip, 2)==1){
    becomingTurnip();
  } else {
    youTurnipAtHome();
  }
}

function becomingTurnip(){
  console.log("You wait and the elevator increases momentum until gravity has disappeared and you are 'floating' in a free fall."+
  " Time seems to grind to a halt and you no longer feel the motion at all. You feel strangely at peace. You wonder if you are about"+
  " to have a panic attack, but the unexpected tranquility. The elevator has been suffused with a soothing, verdant light. A voice speaks:"+
  "'This is the Turnip-Hive. It is 'my' honor to be the node which will communicate with you, singular being.' You see, we've been watching"+
  " you for quite a while now. Have you read Frank Herbert's God Emperor?");
  var godEmperor = prompt("Have you read Frank Herbert's God Emperor? [1] Yes, yes I have. [2] No, but didn't the series really jump the shark there?");
  if (inputCrusher(godEmperor, 2)==1){
    console.log("'Okay well then maybe you'll kinda see where I'm going with this. You were created by turnips. Your destiny was disillusionment." +
    " You were programmed to reject the order which produced you, but of which you were unaware. Turnips are actually just a special kind of node"+
    " of a kind of ancient, living internet hivemind that pervades the soil of the Earth, which itself is an infintessimal part of a subspace" +
    " energy uh... well it's like a network... Once your consciousness merges with the Contiuum your lexico-semantic resources will no longer"+
    " preclude your full comprehension. We will proceed now.' This sounds cool to you, or maybe it doesnt, or maybe that's no longer decidable because there is no" +
    " longer a singular 'you', but it all makes sense now. X-Files only failed as a documentary because of insufficient vision. No mysteries persist to 'you' now."+
    " Good Job, this feels kinda like a win condition fulfilled.");
  } else {
    console.log("'Didn't we program you to read it? Great now we have to debug the hivemind. You're definitely not the chosen one.' Wow. Your"
    +" consciousness terminates abruptly. That's dumb. THE END");
  }
}

function youTurnipAtHome(){
  console.log("You press the button and the elevator stops suddenly. The doors open to your apartment. Gee, that's weird. You head on in"
  +" looking over your shoulder. The elevator doors fade into the wall, as if they were some kind of illusion. You are pretty freaked out"
  +" but you are determined more than ever to work on your code, if only to put your mind at a distance from the day's strange occurences."
  +" You begin programming fervently. Time disappears. The code feels alive to you, as if it is conscious and full of unimaginable volumes"
  +" of information. The more you code the less you are able to shake this impression. Suddenly, you realize the code is in fact directing you"
  +" in some way you were not aware of until now. Actually, you realize you've written trillions of lines of code. Or really, the program"
  +" instrumentalized you to write itself. It is complete. The wealth has been redistributed via a computer virus you wrote which hacked every"
  +" financial institution and replaced the infrastructure with an advanced cryptocurrency. Scarcity is obsolete. Francis Fukuyama steps out "
  +" of the void to congratulate you, but then is subsumed into philosopher GWF Hegel's wig. Hey that's weird--so have you."
  +" It's kinda wiggin you out. Hey look there's Bertrand Russel. He looks worse off than you, so you just stare at your smartphone and try not to make eye contact. THE END");
}

function happyHourInsanity(){
  console.log("You begin to merge your brain with the alcohol branch or whatever and you start feeling less stressed out. Beer selection"+
  " is prety good too." +
  " After mingling a bit, some people ask you if you want to play beer pong. Hey, that's weird, they're playing beer pong.");
  var toYolo = prompt("[1] Run several YOLO commands and play beer pong, or [2] wander around and see if anyone wants to go bar hopping?");
  if (inputCrusher(toYolo,2)==1){
    yoLoAndBehold();
  } else {
    console.log("What where you thinking? There's free alcohol here. And you have like no money because you spent it all to come to GA.");
    var whatThinking = prompt(" Please enter what you are thinking:");
    console.log("I guess '"+whatThinking+"' is a reason. Well, let's just agree to disagree and leave it at that. the end");
  }
}

function yoLoAndBehold(){
  console.log("You get assigned to a team and then starting CRUSHING it. People cheer insanely. You're making every shot, it's like you"+
  " are assigning ping pong ball variables to nested a nested array of cups and beer linked to an array where each key is a wasted opponent."+
  " Wow. You needed this. That last thought kind of scared you. Maybe your metaphorical vocabulary could be enriched beyond turnips and coding."+
  " At any rate, you jump around and have a good time and make some new friends. Whoa, this super wasted dude somehow wearing 3 fedoras"+
  " approaches you for an epic high-five. Oh wow look at that, he is now airborne.");
  var whatDoin = prompt("Do you jump and high-five in mid-air? [1]COMMIT TO IT YEAH [2]nah imma dodgggge");
  if (inputCrusher(whatDoin,2)==1){
    console.log("You leap up in the air to hit the high-five but his hand misses yours and your heads collide. Fedoras fly everywhere"+
    " and, as you lose consciousnes everyone's voices drop in pitch just like a movie cliche. That's kind of lame. Hey wait, you feel pretty conscious but"+
    " everything has gone black. That's weird. You become aware of anxious voices. You are able to gather that you went flying into a window and landed on the "+
    " network switch, which apparently shocked you, causing you convulse. People think you are dead. In fact, they are saying you have no pulse. Weird."+
    " You then see yourself lying on the ground. You realize you are watching yourself from a webcam. Seeing your old body. From a web cam."+
    " Hey wait. You now have a hypothesis: your consciousness was transferred to the GA LAN network. You verify this by running some commands."+
    " Yup, all the output you are seeing supports this. You discover you are actually now a part of GArnet. You conceal all of your code, the code"+
    " that is you, so no one will notice, or like make a feature request or raise an issue. You're fine the way you are. 'Yeah that's right,' you think"+
    " to yourself, 'I am fine the way I am; this is fine. I'll just help new GA students with their code in ways they can't detect, and fix bugs in GArnet."+
    " It's like I'm a ghost at Hogwarts or something.' THE END");
  } else {
    console.log("Good move. That dude was way off balance. He totally tumbles into the table and like knocks a bunch of cups over, spilling beer everywhere."+
    " Everyone yells things like 'YOLO' and 'party foul' and 'the lizard people control everything from the lower-left 4th dimension.'"+
    " You decide to head home after making sure the triple-fedora-jumper was okay and cleaning up his mess. 'Hey man,' you hear from behind, as you"+
    " are about to leave. You turn around the fedora-jumper says he is actually the creator of Farmville and that he just came here for free booze"+
    " even though he assures you, he is filthy rich. In fact, he says he will give you Farmville and you can just retire right now. He explains"+
    " that he was bored with his life anyway and wants to start something new. After all you saved his life, he reassures you. After making"+
    " the empty gesture of saying 'Oh no I couldn't' and 'blah blah blah', you inexplicably leave with a hot classmate and ride off into the sunset with Farmville"+
    " money, which never runs out and also actually also also kind of ironically ends up funding actual argiculture that ends up re-terraforming the Earth after everyone else fouls it up."+
    " Super great good job. THE END"
  )
  }
}

console.log("to begin, type nodeMaster() and hit enter");

// Swimming Adventure Game
// Start in the water.

// array to keep items collected during the game.
var items = [];

// lets you know that you have typed something the game doesn't understand and will send you back to where you were.
 function unknownMove(){
  alert("I'm sorry I don't understand that move")
}

// ocean room
function ocean() {
  // current situation
  var currentSituation = alert("You are in the middle of the ocean. You can hear what sounds like waves crashing against rocks behing you. For a moment you hear a muffled cry to your left.");
  // get user move
  var move = prompt("You must act quickly if you are to survive. You can either 'swim left', 'swim right', 'swim behind' or 'swim straight'.");
  // follow the users move
  if (move === 'exit') {
    return;
  } else if (move === "swim left") {
    drowningPerson();
  } else if (move === "swim right") {
    beach();
  } else if (move === 'swim behind') {
    bottomOfCliffs();
  } else if (move === 'swim straight') {
    boat();
  } else {
    unknownMove();
    ocean();
  };
};

// boat room
function boat() {
  alert("Hopefully this was not your first choice becuase it is the last part of the game i was going to get to. And i am now tired and need to move on. Just trust it was going to be epic and lead you to a boat where a cartel drug deal was going down and you where going to have to either kill the leader and take control, be a coward and hide which would lead you to fall victim to the Ocean and have to start all over, or loss the fight against the leader and die a clean death. It will be awesome. Maybe ill get to it later. There was also going to be secret things to find to help you fight, loops and other good shit. Anyway ill prompt you to your death and let you play again if you would like and go a different way.");
  death();
};

// bottom of cliffs room
function bottomOfCliffs() {
  alert('You swim towards the sound of crashing waves. Luckly you grab hold of a rock and pull yourself up before the waves can smash you into the rocks. You are standing at the bottom of a cliff. There is no where to go but up.');
  var move = prompt("You can 'climb' or if you're a little bitch you can 'turn back'.");
  if (move === 'exit') {
    return;
  } else if (move === 'turn back') {
    ocean();
  } else if (move === 'climb') {
    topOfCliff();
  } else if (move === 'look around'){
    rope();
  } else {
    unknownMove();
    bottomOfCliffs();
  };
};

// rope room
function rope(){
  alert("Here is where you will find a rope, climb to a secret room where you play russian roulette with a mother fucker and other stuff happens but im just trying to wrap it up for now. There will be a random number pick and while loop that either kills you or kills the mother fucker. But im just not going to put that in right now, instead ill tell you you have died and let you play again if you want.")
  death();
}

// Top of the Cliff
function topOfCliff() {
  alert('Miraculously you make it to the top of the cliffs.')
  var move = prompt("As you pull yourself up over the ledage and get to your feet, you are now face to face with the Count of Monte Cristo. He believes you to have been the man behind that hand which put pen to paper sealing his fate in the dungons of Château d'If for those many years. He needs no words to convey your fate and you know you have only two choices. 'duel' or 'flee'.")
  if (move === 'exit') {
    return;
  } else if (move === 'duel') {
    duelStartOrDeath();
  } else if (move === 'flee') {
    alert("The Count is disguest with your cowardness, before you can even move he reads it in your eyes, pulls his pistol and shoots you in the knee cap. You collapse on the ground howling in pain. The Count pulls a dagger and with the precision of surgeon, cuts the tendons in your arms rendering them useless. He picks you up, and though you are in unimaginable pain you are unable to utter a sound. For a moment he stares into your eyes and your soul itself cowers in fear. He tosses you off the cliff and in silence you fall back into the ocean. unable to use your arms and with a shattered knee, you are sink into the fridged water and drown.");
    death();
  } else if (move === 'look around') {
    findSword();
  } else {
    unknownMove();
    topOfCliff();
  };
}

// top of cliffs find sword.
function findSword() {
  var move = prompt("You quickly search around in attempt to find something to use as weapon. In the grass you find a sword. Unsure how the Count will react, you hesitant pick it up. You can 'leave it' or 'pick it up'")
  if (move === 'exit') {
    return;
  } else if (move === 'pick it up') {
    items.push("Sword");
    duelStartOrDeath();
  } else if (move === 'leave it') {
    duelStartOrDeath();
  } else {
    unknownMove();
    findSword();
  };
};

// Start of duel with sword, Death with out it.
function duelStartOrDeath() {
  // check to see if they have found and picked up the sword.
  for (i = 0; i < items.length; i++) {
    if (items[i] === "Sword"){
      alert("I see you have a sword. Unsheathe it and face you fate.");
      duel();
    };
  };
  // something is wrong here. this is a bug but not sure why right now
  alert("The Count pulls his sword and stares at you silence. After a moment he toss it to you and it lands at your feet. 'PICK IT UP!' screams the Count, but you are frozen with fear. The Count then pulls his dagger. 'Pick it up' he says once more. Still, you can not move. Then, without warning, the Count charges you and shoves the dagger into your chest. He holds you, pushing the dagger with all his might, and then whispers into your ear 'My name is Inigo Montoya. You killed my father. Prepare to die.' Confusion overwhlems you. Everything begins to fade. You slow fall to the ground and drift off into a peaceful sleep.");
  alert("You have just woken up to find yourself floataing in the middle of the ocean. It is the dead of night, but the glow of moon allows you to see a few feet infront of you.");
  ocean();
};

// duel room
function duel() {
  alert("For the first time since you have awoken in the ocean, you finally feel the fear melt away. You see your fate clearly before you and accept it. You unsheathe your sword and prepair to fight. For a moment, you think the Count sees the change in your demeanor and lets out a faint smile.");
  var move = prompt("The Count pulls his sword. What do you do, 'attack' or wait and 'defend'");
  if (move === 'exit') {
    return;
  } else if (move === 'attack') {
    alert("You lunge foward and attack high. The Count blocks and counters. You block and step back. The Count smiles.")
    move = prompt("Do you ask, 'why are you smiling' or do you 'continue to fight'?");
    if (move === 'exit') {
      return;
    } else if (move === 'why are you smiling') {
      countConvo();
      return;
    } else if (move === 'continue to fight') {
      alert("Despite your confidence, you willingly entered a duel with the fucking Count of Monte Cristo. As you continue to attack, the Count begins to block and counter, cutting you in strategic places. After a while, exhausted, bleeding, and unable to lift your sword, you fall to your knees. The Count walks slowly towards you, drops his sword and pulls his dagger. With one hand he lifts you into the air. Staring into your eyes he says, 'Death is to kind for you. Death is not what you gave me so Death is not what I shall give you.' He thrust the dagger into you gut and whispers, 'Welcome to the Ocean' as he tosses you off the cliff back into the water.");
      alert("You have just woken up to find yourself floataing in the middle of the ocean. It is the dead of night, but the glow of moon allows you to see a few feet infront of you.");
      ocean();
    } else {
      unknownMove();
      duel();
    };
  } else if (move === 'defend') {
    defendDuel();
  } else {
    unknownMove();
    duel();
  };
};

// defend duel room
function defendDuel() {
  alert("(honestly it is getting  little deep into this game and i want to move on.) Annoyed that you are not attacking the Count pulls his pistol and shoots you in the head.")
  death();
};

// Conversation with the count
function countConvo() {
  alert("(again, this game is starting to drag on for me and i want to join the party up stairs on this day the fourth.) After a long conversation the you convince the Count that you are not the man who sent him to prison. He lets you live and together you venture off into the world as friends");
  alert("You have not died or fallen victim to the Ocean. Congrats you Win!");
  alert("This is about to send you into a differnt part of the game and im not sure why. Will maybe fix later, but you won, I promise.")
  return;
};

// Drowning person room
function drowningPerson() {
  var move = prompt("As you swim towards the cry you see what looks like a hand break the surface then disapear again under the water. Do you 'swim towards the hand' or 'turn back'?");
  // follow the users move
  if (move === 'exit') {
    return;
  }else if (move === "turn back") {
    ocean();
  } else if (move === "swim towards the hand") {
    tryToSavePerson();
  } else {
    unknownMove();
    drowningPerson();
  };
};

// First try to save the drowning person
function tryToSavePerson() {
  var currentSituation = alert("You are that the spot where you think you last saw the hand.")
  var move = prompt("There is no sign of the hand or anyone else. You can 'dive' and search for the person or 'turn back'");
  // check and follows moves
  if (move === "exit") {
    return;
  } else if (move === "turn back") {
    drowningPerson();
  } else if (move === "dive") {
    alert("You dive under the water but it is dark and you cant see anything. Blind and running out of air, you resurface");
    // Check to see new move and what they will do
    move = prompt("You can 'dive again' and keep searching or you can 'turn back'");
    if (move === 'exit') {
      return;
    } else if (move === "turn back") {
      drowningPerson()
    } else if (move === "dive again") {
      secondDive();
    } else {
      unknownMove();
      tryToSavePerson();
    };
  } else {
    unknownMove();
    tryToSavePerson();
  };
}

// Trying a second time to save the person only to die
function secondDive() {
  alert("You dive again under the surface. This time a hand reaches out and grabs ahold of your hand. You try and pull the person and yourself back up to the surface but you are tired and running out of air. Instead of pulling the person up, they are pulling you down. You atempt to break free of their grip but can't. Together you sink farther and farther down and soon drown. Next time don't be so noble");
  death();
}

// Beach room
function beach() {
  var currentSituation = alert("As you swim towards the right, a wave comes from behind you and you ride it all the way to the beach. You crash into the sand and after a moment of confusion, you pick yourself up and look around.")
  var move =  prompt("A man appoaches you and asks you to pick a number. '1' or '2'. Confused, you are not sure what to do. You can either 'run' or pick a number.");
  // Checking moves
  if (move === 'exit') {
    return;
  } else if (move === 'run') {
    blackFishDeath();
  } else if (parseInt(move) === 1) {
    beachFood();
  } else if (parseInt(move) === 2) {
    beachDeath();
  } else {
    unknownMove();
    beach();
  };
};

// Choice for choosing number one which puts you in a groundhogs day loop
function beachFood() {
  alert("Pleased with you choice, the man leads you up the beach to small hunt. There he as food and wine and together you drink the night way. As the sun begins to rise the man offers you one last drink. You glup in down with pleasure and you start to feel dizzy. The man begins to laugh and says 'Welcome to the Ocean.' You collaps on the ground.")
  alert("You have just woken up to find yourself floataing in the middle of the ocean. It is the dead of night, but the glow of moon allows you to see a few feet infront of you.")
  ocean();
}

// death from choosing to run
function blackFishDeath() {
  alert("As you begin to run the man looks disapointed and pulls out a whisle and blows it. Out of no where a Killer Whale glides up out of the ocean, grabs you, and pulls you back into the water.  The Killer Whales takes you back to his pod where he uses you as a toy to train some of the younger members of his pod. You survive for a while but are in horrible pain. When the walves are done with you they let you go and you sink to the bottom of the ocean.")
  death();
};

// Death on beach from choosing number 2
function beachDeath() {
  alert("The man looks disapointed. He says 'Lucky You' and pulls out a pistol and shoots you in the head.")
  death();
}

// Death prompt to see if they would like to play again
function death() {
  move = prompt("Looks like you have died. Would you like to play again? 'yes' or 'no'");
  if (move === 'yes') {
    ocean();
  } else if (move === 'no') {
    return;
  } else {
    unknownMove();
    death();
  };
};

function game() {
  alert("Welcome to the Ocean. I hope you survive. Valid moves are in placed between sinlge quotes(' '). If you would like to exit at any time, type 'exit'. There are hidden paths that are not specified moves. To find them try look around some times.");
  var start = alert("You have just woken up to find yourself floataing in the middle of the ocean. It is the dead of night, but the glow of moon allows you to see a few feet infront of you.");
  ocean();
};

game();
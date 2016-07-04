// Swimming Adventure Game
// In comments, rooms refer to places

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
    boatstart();
  } else {
    unknownMove();
    ocean();
  };
};

// boat room
function boatstart() {
  alert("Strangly, you start to swim straight into the darkness. You can see nothing. You can hear nothing. After a while the silhouette of a speed boat begins to take shape infront of you. To its left is a larger boat and you can see a light on in one of the cabins.")
  var move = prompt("Which boat would you like to swim towards and board. The 'speed boat', 'larger boat', or would you like to 'turn back'?")
  if (move === 'exit') {
    return;
  } else if (move === 'turn back') {
    ocean();
  } else if (move === 'speed boat') {
    speedBoat();
  } else if (move === 'larger boat') {
    largerBoat();
  } else {
    unknownMove();
    boatstart();
  };
};

//speed boat approach room
function speedBoat() {
  alert("You swim up behind the speed boat. You can make out one guy sitting at wheel. An AK-47 is his arms, but you can hear what you think is snoring");
  var move = prompt("Would you like to 'board the speed boat' and try and over power the possibly sleeping man, 'swim to the larger boat', or 'turn back'?")
  if (move === 'exit') {
    return;
  } else if (move === 'turn back') {
    boatstart();
  } else if (move === 'board the speed boat') {
    boardSpeedBoat();
  } else if (move === 'swim to the larger boat') {
    largerBoat();
  } else {
    unknownMove();
    speedBoat();
  };
};

// swim to the large boat
function largerBoat() {
  alert("You swim toward the larger boat but are noticed but a guard on the deck. Move men come out on the deck and they drag you from the water and toss you in a small room. After a while a man comes in and offers you deal. He says he is the leader of this boat and will fight you to the death. If you win you become the leader, if you loose you die. If you choose not to fight you will be set free.");
  var move = prompt("Do you want to 'fight' or 'be set free'");
  if (move === 'exit') {
    return;
  } else if (move === 'be set free') {
    largerBoatSetFree();
  } else if (move === 'fight') {
    largerBoatFight();
  } else {
    unknownMove();
    largerBoat();
  };
}

// larger boat move when you are asked to be set free
function largerBoatSetFree() {
  alert("You ask to be set free. The man smiles at you and says ok. He leaves the room for a moment before returning. He hold the door open and says you can go. As you walk out the door he stabs you in the neck with a needle. You collapse on the ground and everything starts to fade. The last thing you hear is, 'Welcome to the Ocean.'")
  ocean();
};

function largerBoatFight() {
  // number of empty chambers in the gun
  var emptyChambers = 5
  var turn = "you"
  alert("You choose to fight. The man smiles and leads you to a room with a table and two chairs facing eachother. He asks yout to sit. He puts a gun on the table and you watch as he removes all but one bullet. The fight, he explains, is a game of russian roulette.")
  alert("He hands you the gun and says you go first.")
  while (true) {
    // even if the gun isn't empty you still have a chance of being shot.
    var randomOutcome = Math.random()
    console.log(randomOutcome);
    if (turn === 'you') {
      alert("You put the gun to your head and pull the trigger.")
      if ((randomOutcome <= .5 && randomOutcome >= .3) || emptyChambers === 0) {
        largerBoatDeathYou();
        break;
      } else {
        alert("'Click'")
        turn ='him';
        emptyChambers--;
      }
    } else if (turn === 'him') {
      turn = 'you';
      emptyChambers--;
      alert("He puts the gun to his head and pulls the trigger.")
      if ((randomOutcome <= .5 && randomOutcome >= .4) || emptyChambers === 0) {
        largerBoatDeathHim();
        break;
      } else {
        alert("'Click'")
        emptyChambers--;
      };
    };
  };
};

// larger boat death you
function largerBoatDeathYou() {
  alert("You didn't even hear the sound of the gun.")
  death();
};

// lager boat death him
function largerBoatDeathHim() {
  alert("Bang! The mans head is blown open and he falls out of the chair. Two man pick him up and carry him out of the room. Another comes up to and hands you a golden crown. He says you are now the captin.")
  alert("You have won! And not only that have become the leader of my most feared pirate crew in the world. You spend the next 40 years sailing around the world kill, getting rich, and fat. It is a good life.")
  return;
};

// boarding the speed boat
function boardSpeedBoat() {
  alert("You slowly and quietly behind to climb up on the speed boat. The snoring man doesn't move. You pull yourself to your feet and climb across the boat towards the man.")
  var move = prompt("Do you wish to 'attack' the sleeping man and attempt to take the boat or chicken out and 'jump' back into the water.")
  if (move === 'exit') {
    return;
  } else if (move === 'jump') {
    speedBoat();
  } else if (move === 'look around') {
    speedBoatWithWeapon();
  } else if (move === 'attack') {
    speedBoatRandom();
  } else {
    unknownMove();
    boardSpeedBoat();
  };
}

// random speed boat outcome without weapon
function speedBoatRandom() {
  randomOutcome = Math.random()
  alert("You grab the sleeping man around his throat. A voice calls out of the radio in a language you do not understand. The man struggles against you trying to break free form you grasp.")
  if (randomOutcome <= .5) {
    speedBoatDeath();
  } else {
    alert("As you struggle you notice a gun in the seat next to you. You quickly dive for it.")
    speedBoatEscape();
  };
};

// speed boat dead without weapon
function speedBoatDeath() {
  alert("Tired from swimming, you just don't have the strenght to over power the man. He pulls you over his sholder and puts a bullet in your head. You attacked to quickly. Next time look around for something to fight with.");
  death();
}

// attack speed boat guy with weapon
function speedBoatWithWeapon() {
  alert("Before you attack, you look around to see if you can find a weapon. In an empty seat you find a gun.")
  // the gun doesn't do anything anywhere else so this is not needed but done for practice
  // if you mess up a typing a move and move through this more than once, more than one gun gets pushed to the items. BUG
  items.push("gun")
  var move = prompt("You pick up the gun. Do you wake the man and tell him to 'jump off' else you will shoot him, or do you 'just shoot the mother fucker' while he is sleeping and take the boat?")
  if (move === 'exit') {
    return;
  } else if (move === 'jump off') {
    speedBoatDeathWithWeapon();
  } else if (move === 'just shoot the mother fucker') {
    speedBoatEscape();
  } else {
    unknownMove();
    speedBoatWithWeapon();
  };
};

// speed boat death with weapon
function speedBoatDeathWithWeapon() {
  alert("Before you can say a word, a voice calls out over a raido and the man wakes up. The man sees you and you panic and take a shot. You miss, he fires back hitting you in the chest. You fall back into the water and die. Next time shoot first you little bitch.")
  death();
};

// escape on the speed boat
function speedBoatEscape() {
  alert("With out a second thought you put a bullet in the mans head just as a voice calls out over a radio on the boat. Quickly you toss the dead guy over board and start the boat. As you begin to speed away you, more lights come on the large boat and you can see people on the deck. They begin to fire and you but miss. You drive off safely. In the back of the boat you find a bag full of money. You are now rich as shit with a badass boat.")
  alert("Congradulations! You have escaped the Ocean! Thanks for playing!")
}
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
  } else {
    unknownMove();
    bottomOfCliffs();
  };
};

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
  alert("Welcome to the Ocean. I hope you survive. Valid moves are placed between sinlge quotes(' '). If you would like to exit at any time, type 'exit'. There are hidden paths that are not specified moves. To find them try look around some times.");
  var start = alert("You have just woken up to find yourself floating in the middle of the ocean. It is the dead of night, but the glow of moon allows you to see a few feet infront of you.");
  ocean();
};

game();
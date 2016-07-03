// put code here!
function ultimatelyGreedyDragon(){
  document.write("Unfortunately, the treasures are cursed. Any one adventurer who attempts to obtain treasure from\nboth areas in the cave loses touch with reality, becomes lost in the cave and ultimately goes insane.\nYou head toward the spider cave but suddenly forget where you were going and why. You only\nknow that you feel a deep sense of dissatisfaction. You feel you should be searching for something, so\nyou wander the maze aimlessly. Lonely and unhappy, you begin to mumble to yourself. You feel the words\nbegin to lose their meaning over time until you're sure you are just speaking gibberish, but you continue anyway\nso you can hear your own voice to be sure you're still alive. GAME OVER. YOU LOSE.")
}
function notGreedyReason(){
  document.write("You have chosen to leave the cave. As you take a step toward the exit, a benevolent voice booms in your head.\n'You have chosen well, adventurer. The third treasure is granted. You will keep your sanity and your treasure.\nYou will also have a heart of gold. But not in a literal sense because that would kill you. You reasoned with\nthe dragon and lived, and you were not greedy. Thus you will be able to navigate social situations with ease.\nDue to your lack of greed and you social skills, you will have strong relationships, and a truly valuable life.'\nGAME OVER. YOU WIN.");

}

var questResponse = prompt("You are an adventurer. You have travelled to a cave high in a mountain range.\nLegend has it that there are three treasures within the cave. One treasure is guarded by a dragon.\nOne treasure is hidden in a so called spider-maze. Nothing is known about the third treasure.\nYou have an old map which shows the location of the dragon and the start of the maze.\nYou don't have any information about the third treasure. Would you like to head for the 'dragon' or the 'maze'?");
if (questResponse == "dragon" || questResponse == 'd' || questResponse == 'drgn' || questResponse.toLowerCase().indexOf('d') == 0) {
  var dragonResponse = prompt("You enter the dragon's lair. As the dragon snores, he warms the bed upon which he lays.\nHis bed is made of coals and his nostrils expel fire as he sleeps. A bag hangs from the dragons necklace.\nYou notice a single gold coin on the floor which must have fallen from the bag.\nThe coin is partially melted.\nA single gold coin is valuable enough to sustain your lifestyle for a year.\nIf the bag contains only gold, it likely weighs more than you.\nCurious, you wonder how an ordinary bag could lay on coals and not burn.\nWould you like to 'sneak' and steal from the dragon, 'wake' and reason with it, or 'slay' it?");

  if (dragonResponse == "sneak"){
    var sneakResponse = prompt("The coals look hot, but the gold is tantalizingly hot. There must be about a thousand gold coins\nin the bag. How many would you like to steal?");
    if (sneakResponse <= 50 && sneakResponse >= 0) {
      var notGreedySneakResponse = prompt("You hastily yet quietly hurry to the bag. Switching your weight between feet as you fiddle with the bag,\nyou manage to open it and collect (sneakPrompt response) coins. You quickly get off the coals and exit\nthe dragon's lair without him noticing. Your feet suffered minor burns but you have more than enough coin\nto pay for medical bills. Would you like to try for the other treasure? (y/n)");
      if (notGreedySneakResponse == "y" || notGreedySneakResponse == "yes") {
        ultimatelyGreedyDragon();
      }
      else {
        document.write("You have chosen to leave the cave. As you take a step toward the exit, a benevolent voice booms in your head.\n'You have chosen well, adventurer. The third treasure is granted. You will keep your sanity and your treasure.\nYou will also have a heart of gold. But not in a literal sense because that would kill you. You will have the\nwisdom to do right by yourself and others. Though you have stolen, you were not greedy thus you will be able to\nhave strong relationships and have a truly valuable life.' GAME OVER. YOU WIN.");
      }
    }
    else if (sneakResponse > 50) {
      var greedySneakResponse = prompt("You hastily yet quietly hurry to the bag. Switching your weight between feet as you fiddle with the bag,\nyou manage to open it. You try to fit too many coins in your pockets. You try to carry the bag but it won't budge.\nYou accidentally spilled some coins from your pocket and awoke the dragon. As the dragon rose,\neven more coins fell from the open bag. He seems pissed. You fire a well placed arrow and the bag falls from his necklace.\nThe dragon is breathing in getting ready to burn you. You might have enough time to grab 10 more 'coins'\nor grab the 'bag'.");
      if (greedySneakResponse == "coins" || greedySneakResponse == "coin" || greedySneakResponse == "c") {
        document.write("You managed to grab 10 more coins before the dragon exhaled. Congratulations. He exhaled just afterward.\nFortunately, he prefers his meals rare, so you weren't burned too badly before being eaten alive.\nGAME OVER. YOU LOSE.");
      }
      else {
        var bagResponse = prompt("You realized at the last second that the fire-retardant bag can be used as armor against the dragon.\nYou put the bag on, and scurry toward the exit. The dragon shoots flames at you. But you are safe.\nYou step outside the dragons lair. Your bag-armor crumbles to dust. After all the confusion and spilling of coins,\nyou have only 40 coins in your pocket. Would you like to try for the other treasure? (y/n)");
        if (bagResponse == "y" || bagResponse == "yes") {
          ultimatelyGreedyDragon();
        }
        else {
          document.write("You have chosen to leave the cave. As you take a step toward the exit, a benevolent voice booms in your head.\n'You have chosen well, adventurer. The third treasure is granted. You will keep your sanity and your treasure.\nYou will also have a heart of gold. But not in a literal sense because that would kill you. You will have the\nwisdom to do right by yourself and others. Though you have stolen, and you were greedy, you ultimately learned from\nyour mistakes and were cunning. Thus you will be able to overcome any of life's obstacles,\nhave strong relationships, and have a truly valuable life.' GAME OVER. YOU WIN.");
        }
      }
    }
  }

  else if (dragonResponse == "wake" || dragonResponse == "reason"){
    var wakeResponse = prompt("You poke the dragon. 'Uhh... Mr. Dragon', you say. The dragon rises. 'WHY DO YOU DISTURB MY SLUMBER, VERMIN?!'\nWHAT DO YOU WANT?' Will you remain 'silent', ask to 'live', or ask for 'riches'.");
    if (wakeResponse == 'silent' || wakeResponse == 's' || wakeResponse == 'silence' || wakeResponse == '') {
      var silentResponse = prompt("'WHY ARE YOU SILENT? YOU DON'T SMELL AFRAID. AM I TO UNDERSTAND YOU WANT NOTHING?'\n'Yes', you reply. '...VERY WELL. MOST OF YOUR TYPE COME IN HERE DEMANDING GOLD.\nFOR YOUR TEMPERANCE, I WILL ALLOW YOU TO LIVE AND GRANT YOU 10 GOLD COINS.' The dragon hands you\n10 coins. You exit the dragon's lair. Would you like to try for the other treasure? (y/n)");
      if (silentResponse == 'y' || silentResponse == "yes") {
        ultimatelyGreedyDragon();
      }
      else {
        notGreedyReason();
      }
    }
    else if (wakeResponse == "live"){
      var liveResponse = prompt("'WHY WOULD YOU COME TO MY LAIR IF YOU WANT TO LIVE?'\n'Because sir, unlike dragons, I need currency to live. One gold coin is enough to meet my needs for a year.'\n'... VERY WELL. YOU HAVE NOT BEEN INSOLENT. NOR COMPLETELY RESPECTFUL. TAKE A SINGLE GOLD COIN AND BE ON YOUR WAY.'\nYou receive the coin, and exit the lair. Would you like to try for the other treasure? (y/n)");
      if (liveResponse == 'y' || liveResponse == 'yes') {
        ultimatelyGreedyDragon();
      }
      else {
        notGreedyReason();
      }
    }
    else if (wakeResponse == "riches" || wakeResponse == "rich") {
      document.write("You walk toward the dragon. 'What do you need that treasure for?' you ask the dragon.\n'I could use the treasure to pay for my needs 10 times over. While you only sleep near it, using it for nothing.'\n'YOUR KIND ARE ALL THE SAME. GREEDY AND INSOLENT' The dragon stabs you with his claw.\nStill conscious, you are cooked by his fire breath. Then you are devoured. GAME OVER. YOU LOSE.");
    }
  }
  else {
    var slayResponse = prompt("What should you use to slay the dragon. In your inventory you have a rusty 'sword' and liquid 'n'itrogen.");
    if (slayResponse.toLowerCase() == 'sword' || slayResponse.toLowerCase().indexOf('s') == 0) {
      document.write("You take out your rusty sword. You rush across the bed of hot coals. You thrust the sword into the dragons neck...\nthe sword bends against the dragon's titanium-like scales. The dragon wakes. He Stabs you with his claws. Cooks you with\nfire-breath and eats you alive. GAME OVER. YOU LOSE.");
    }
    else {
      var nResponse = prompt("You remember you always carry a trusty canister of liquid nitrogen. You move quietly and swiftly across the bed of coals,\nreach toward the dragons nostril and pour the liquid nitrogen inside. The dragon wakes. Inhales.\nHe is preparing to burn you alive. He exhales. No fire escapes him and he feels in pain. With the last of his strength,\nhe opens the bag and pours out the majority of the gold coins onto the coal bed. He freezes from the inside out.\nHis body lands on many of the coins making them inaccessible. But the bag lands where you can reach it.\nYou grab the bag and leave the lair. You check the bag for coins. There are 50 left.\nWould you like to try for the other treasure? (y/n)");
      if (nResponse == 'y' || nResponse == 'yes') {
        ultimatelyGreedyDragon();
      }
      else {
        document.write("You have chosen to leave the cave. As you take a step toward the exit, a benevolent voice booms in your head.\n'You have chosen well, adventurer. The third treasure is granted. You will keep your sanity and your treasure.\nYou will also have a heart of gold. But not in a literal sense because that would kill you. You defeated the dragon;\nyou did not act with greed. You will be able to overcome any obstacles in your life. Your lack of greed gives you peace\n      and provides you with meaningful relationships. You will have a truly valuable life.' GAME OVER. YOU WIN.");
      }

    }
  }
}
else if (questResponse == 'maze' || questResponse == 'm' || questResponse == 'spider' || questResponse == 'spider-maze' || questResponse.toLowerCase().indexOf('m') >=0 ) {
  alert("You enter the maze. It is a winding cavern with no landmarks with many branching paths.\nYou begin to feel hopeless. You sit down. You recoil as something drops from the ceiling.\nA spider. Only its not. Its huge. And it stands up like an anthropoid. It speaks in whispers.\n'Oh joy... another delicious adventurer. Ok. Here's the deal. We're going to play\na game. You must answer a riddle within three guesses.\nIf you fail to answer correctly, I get to spin you in my web and save you for when I get the munchies.\nIf you succeed I will reveal the location of the treasure and help you exit the maze.'");
  for (var i = 3; i > 0; i--) {
    if (i > 1){
      var riddleResponse = prompt("You have " + i + " attempts remaining.\nI am an empty void. Collect many earthly possessions to fill me, yet I grow deeper.\nThe hole is filled when you stop trying to fill it.");
    }
    else {
      var riddleResponse = prompt("You have " + i + " attempts remaining.\nI am an empty void. Collect many earthly possessions to fill me, yet I grow deeper.\nThe hole is filled when you stop trying to fill it.\n(Is it 'greed', 'donut holes' or 'love'?)");
    }
    if (riddleResponse.toLowerCase() == "greed"){
      break;
    }
  }
  if (riddleResponse.toLowerCase() == 'greed'){
    var moreTreasure = prompt("You solved the riddle. 'Very well. I will lead you to the treasure. And out of the maze.'\nThe spider did as promised. You collected 50 gold coins. As you were exiting the maze,\nthe spider remarked, 'Just so you know, the dragon has far more gold than 50 coins.\nMore even than you can carry out of here... heh heh heh.' Would you like to try for the\nthe other treasure? (y/n)");
    if (moreTreasure == 'y' || moreTreasure.toLowerCase().indexOf("y") >= 0) {
      document.write("Unfortunately, the treasures are cursed. Any one adventurer who attempts to obtain treasure from\nboth areas in the cave loses touch with reality, becomes lost in the cave and ultimately goes insane.\nYou head toward the dragon's lair but suddenly forget where you were going and why. You only\nknow that you feel a deep sense of dissatisfaction. You feel you should be searching for something, so\nyou wander the cave aimlessly. Lonely and unhappy, you begin to mumble to yourself. You feel the words\nbegin to lose their meaning over time until you're sure you are just speaking gibberish, but you continue anyway\nso you can hear your own voice to be sure you're still alive. GAME OVER. YOU LOSE.");
    }
    else {
      document.write("You gain the sense that the riddle had a relevant theme. You remember the\nspider's treacherous laugh. You have chosen to leave the cave. As you take a step toward the exit,\na benevolent voice booms in your head. 'You have chosen well, adventurer. The third treasure is granted.\You will keep your sanity and your treasure.\nYou will also have a heart of gold. But not in a literal sense because that would kill you.\nYou were cunning and not greedy. You will be able to solve complex problems and have a strong intuition.\nYou will know how to do the right thing and will have a truly valuable life. GAME OVER. YOU WIN.");
    }
  }
  else {
    document.write("You failed to solve the riddle. 'mmm I love this part.' The spider grabs you with all his limbs.\nHe moves his lower abdomen in position and wraps you up in his web. It's strong like metal wires.\nYou suffer, unable to move for two days. Finally he bites your head off and devours you. GAME OVER. YOU LOSE.");
  }
}

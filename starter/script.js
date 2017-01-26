// put code here!
var user = prompt("What's your name?");
var game = prompt(`Hello ${user}, do you want to play a game? (Yes/No)`);
if(game.toLowerCase() === "yes") {
  alert(`Just kidding, ${user}. This isn't Saw. That s&!% is scary.`);
  alert("Let's begin.");
  alert(`You have been walking for a long time.`);
  alert("Your caravan was destroyed in a sand storm.");
  alert("You're the only one who survived (that you know of). You're parched and your eyes sting from dehydration and the relentless gusts of wind and sand.");
  //User sees the village in the distance
  var village = prompt(`In the distance, through the waves of heat rising from the dunes, you see what looks like a small village.
    Do you go towards it? (Yes/No)`);
  if(village.toLowerCase() === "yes") { //User walks toward the village
    var villageStill = prompt(`As you start walking, the wind blows and sand clouds your view. The village seems to fade but you were sure it was there. Do you keep walking towards it? (Yes/No)`);
      if (villageStill.toLowerCase() === "yes") {
        alert("You steel yourself, wrap your scarf tighter around your face and begin trudging through the sand with your head down.");
        alert("You walk and walk...the village fades in and out of view...");
        alert("But as you get closer, you can see that it is definitely real.");
        var villageStillStill = prompt(`Do you keep walking towards the village, ${user}? (Yes/No)`);
        if(villageStillStill.toLowerCase() === "yes") {
          alert("People start running out of the first house...they are running towards you.");
          alert("It's the rest of your caravan! They thought you died.");
          alert("They bring you water and celebrate your return.");
          alert("You live, but for some reason feel like you missed out on something out there... Refresh to play again.");
        } else if (villageStillStill.toLowerCase() === "no") {
          alert("Lol why...you were so close...");
          alert("You die from dehydration. Game over. Refresh to play again.");
        } else {
          alert("TYPO!!!! You die!");
        }
      } else if (villageStill.toLowerCase() === "no") {
        alert(`It was probably a mirage anyways. Good thinking...`);
        var waterOption = prompt(`You look in your water bag, but don't see anything. You shake it a bit and hear a slight sloshing. What do you do? (Save/Drink/Wash hands)`);
        if(waterOption.toLowerCase() === "save") {
          alert("You decide to save it for later. It'll probably come in handy.");
          var direction = prompt("The sun is setting to your left. Which way do you go? (North/East/South/West)");
          if (direction.toLowerCase() === "north") {
            alert("You decide to head North, which happens to be the direction of the mirage of the village from earlier.");
            alert("Is that the village again?");
            alert("You rub your eyes and it's still there...");
            alert("It's definitely real. You pick up the pace and get to the village.");
            alert("You approach the first house, desperate for water.");
            alert("People run out of the door...it's your family! They made it to the village too! They also have water with them.");
            alert("Congratulations. By sheer luck, you lived, but for some reason, you feel like you missed out on something out there in the desert...");
          } else if (direction.toLowerCase() === "east") {
            alert("After trudging through endless waves of sand for what feels like miles, you fall to your knees and look back at the burning sun. Shouldn't it be setting soon? Shouldn't it be cooling down?");
            alert("You turn away from the sun and see what looks like a palm tree in the distance...an oasis?");
            alert("You somehow bring yourself to keep walking and as you get closer, you realize it is an oasis!");
            alert("You get to the edge of the water and drink deeply.");
            alert("Suddenly, a large crocodile jumps out and eats you. You die.");
            alert("Game over. Refresh to play again.");
          } else if (direction.toLowerCase() === "south") {
            alert("You walk and walk and walk...nothing but sand everywhere you look. The sun sets and it gets unbearably cold.");
            alert("You go to drink your water, and a scorpion falls out onto your face. You manage to brush it off before it stings you.");
            alert("You accidentally fall asleep, cold, dying of thirst...alone in the desert...");
            alert("Game over. Refresh to play again.")
          } else if (direction.toLowerCase() === "west") {
            alert("After what feels like an eternity, you see a figure in the distance.");
            alert("As you get closer, you think you recognize them...");
            alert("Is that Kanye West?!");
            alert("Impossible, you think. But...as you get closer...it is Kanye!");
            alert("What are the chances that both you and Kanye West would be lost in the desert at the same time in the same place.");
            alert("You approach Kanye, share your water with him, and you guys become best friends.");
            alert(`Congratulations, you win. Yes, you are still in the desert with no water, but you're also best friends with Yeezy. The only person in the world who truly understands him. Count your blessings, ${user}. Refresh to play again.`);
          }
        } else if (waterOption === "drink") {
          var howMuch = prompt("It feels like there are maximum 5 sips worth in there. How many drinks of water do you take? (Number between 1 and 5)");
          for(var i = 0; i < howMuch; i++) {
            alert("Sip");
            if(i === howMuch - 1) {
              alert("SURPRISE SCORPION IN THE WATER!!!");
              alert("You die. Refresh the page to start over.");
            }
          }
        } else if (waterOption === "wash hands") {
          alert("You're dying of thirst in the desert with only a little bit of water left and you decide to wash your hands.......sheesh....you die...are you surprised?");
          alert("Game over. Refresh to play again.");
        } else {
          alert("Nice typing...");
          alert("NOT!!");
          alert("You died in the desert because of your carelessness! Refresh to start over.");
        }
      } else {
        alert("Nice typo. You died in the desert because of your carelessness! Refresh to start over.");
      }
  } else if (village.toLowerCase() === "no") {     //User walks away from the village
    alert(`It was probably a mirage anyways. Good thinking...`);
    var waterOption = prompt(`You look in your water bag, but don't see anything. You shake it a bit and hear a slight sloshing. What do you do? (Save/Drink/Wash hands)`);
    if(waterOption.toLowerCase() === "save") {
      alert("You decide to save it for later. It'll probably come in handy.");
      var direction = prompt("The sun is setting to your left. Which way do you go? (North/East/South/West)");
      switch(direction.toLowerCase()) {
        case "north":
          alert("You decide to head North, which happens to be the direction of the mirage of the village from earlier.");
          alert("Is that the village again?");
          alert("You rub your eyes and it's still there...");
          alert("It's definitely real. You pick up the pace and get to the village.");
          alert("You approach the first house, desperate for water.");
          alert("People run out of the door...it's your family! They made it to the village too! They also have water with them.");
          alert("Congratulations. By sheer luck, you lived. You can't quite understand why, but you have this sense that you missed out on something...");
          break;
        case "east":
          alert("After trudging through endless waves of sand for what feels like miles, you fall to your knees and look back at the burning sun. Shouldn't it be setting soon? Shouldn't it be cooling down?");
          alert("You turn away from the sun and see what looks like a palm tree in the distance...an oasis?");
          alert("You somehow bring yourself to keep walking and as you get closer, you realize it is an oasis!");
          alert("You get to the edge of the water and drink deeply.");
          alert("Suddenly, a large crocodile jumps out and eats you. You die.");
          alert("Game over. Refresh to play again.");
          break;
        case "south":
          alert("You walk and walk and walk...nothing but sand everywhere you look. The sun sets and it gets unbearably cold.");
          alert("You go to drink your water, and a scorpion falls out onto your face. You manage to brush it off before it stings you.");
          alert("You accidentally fall asleep, cold, dying of thirst...alone in the desert...");
          alert("Game over. Refresh to play again.");
          break;
        case "west":
          alert("After what feels like an eternity of trudging up and down the dunes, you see a figure in the distance.");
          alert("As you get closer, you think you recognize them...");
          alert("Is that Kanye West?!");
          alert("Impossible, you think. But...as you get closer...it is Kanye!");
          alert("What are the chances that both you and Kanye West would be lost in the desert at the same time in the same place.");
          alert("You approach Kanye, share your water with him, and you guys become best friends.");
          alert("Congratulations, you win. Please note this is the only way to actually win this game. Congratulations again. Refresh to play again.");
          break;
        }
      }
      else if (waterOption === "drink") {
        alert("There was a scorpion in your water! You die.");
        alert("Game over. Refresh to play again.");
      } else if (waterOption === "wash hands") {
        alert("You're dying of thirst in the desert with only a little bit of water left and you decide to wash your hands.....sheesh...you die...are you surprised?");
        alert("Game over. Refresh to play again.");
      } else {
        alert("Nice typing...");
        alert("NOT!!");
        alert("You died in the desert because of your carelessness! Refresh to start over.");
      }
  } else {
    alert("Nice typo. You died in the desert because of your carelessness! Refresh to start over.");
  }
} else if (game.toLowerCase() === "no") {
  alert("K");
} else {
  alert("Sorry, no typos allowed :(. Let this be a warning to you if you ever find yourself lost and alone in the desert with nothing but a prompt box to allow you to make decisions. Refresh to start over.")
}


//Paths: 1) [Game? (yes) -> Village? (yes) -> Still village? (yes) -> Knock on door? (yes) -> Welcomed in, see other people from your caravan, and you live.]
//       2) [Game? (yes) -> Village? (yes) -> Still village? (yes) -> Knock on door? (no) -> People from your caravan see you walk by, they run out and wave you down. You live.]
//       3) [Game? (yes) -> Village? (no) -> Water? (Drink) -> Scorpion. Die.]
//       4) [Game? (yes) -> Village? (no) -> Water? (Wash) -> Scorpion. Die.]
//       5) [Game? (yes) -> Village? (no) -> Water? (Save) -> Direction? (North) -> Accidentally happen upon village. Live.]
//       5) [Game? (yes) -> Village? (no) -> Water? (Save) -> Direction? (South) -> Walk forever and die.]
//       6) [Game? (yes) -> Village? (no) -> Water? (Save) -> Direction? (East) -> Find Oasis. The water is bad! You die.]
//       8) [Game? (yes) -> Village? (no) -> Water? (Save) -> Direction? (West) -> Is that Kanye?]
//       9) [Game? (no) -> Done.]

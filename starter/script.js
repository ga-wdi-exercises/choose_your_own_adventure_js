function promptPrint(story) {
  console.log(story);
  playerSayWhat = prompt(story);
  console.log("Thou sayeth, \"" + playerSayWhat + ".\"");
  return playerSayWhat.toLowerCase();
}

function alertPrint(story) {
  alert(story);
  console.log(story);
}

function scoldBadUser() {
  printAlert("User not make perfect input. Game fail.");
}

var intro = "Are you on a quest? If so, please complete this pre-quest survey.";

if (confirm(intro)) {
  print(intro);

  var questionaire = {
    name: prompt("Who are you?"),
    steed_name: prompt("What is the name of your trusty steed?"),
    steed_type: prompt("What sort of thing is your steed (one word, i.e. horse, car, broom)?"),
    drink: prompt("What's your favorite drink? (e.g. 7up, whisky, Yoohoo)"),
    num_members: parseInt(prompt("How many are members of your expedition?")),
    musician: prompt("What's the name of one musician, ministral, or muse?"),
    death: prompt("What's a really, really bad way to end up in the sweet hereafter? (i.e. falling down the stairs, a firing squad, vitamin deficiency, etc.)"),
  };

  var quest = "So you begin your quest. As soon as you get out of your village, you -- somewhat predicatably given the circumstances -- encounter a fork in the road. Go (L)eft or go (R)ight? (L/R)";
  var choice;

  if ( promptPrint(quest ) == "l" ) { // go left
    quest = "You venture left bravely. It's a long road. Is now the time to turn to " + questionaire.steed_name + "? (Y/N)";

    if ( promptPrint(quest) == "y" ) { // ride on
      quest = "A " + questionaire.steed_type + " is not the most common form of transportation on this road so you draw a crowd. Ask how many to join you? (a number please)";

      choice = parseInt(promptPrint(quest));

      if ( choice > 0 ) { // invite to join your party
        //var number = parseInt(questionaire.num_members) + Math.floor(choice / 2 + 1);
        quest = "Two brave souls join your party, which now numbers " + choice.toString() + " and includes " + questionaire.musician + ". Do you keep (T)raveling or go into the closest Karaoke bar? (T/K)";

        if ( promptPrint(quest) == "k" ) { // go to karaoke
          alertPrint("So the karaoke went really well, but the " + questionaire.drink + " flowed as murkily as the Potomac River. Sadly, you didn't make it through the night but anything's better than " + questionaire.death + ".");
        } else { // no to karaoke
          alertPrint("Smart move. That would have been a major distraction from the quest. As Norquist would say, \"Onward.\"");
        }

      } else { // no invite others
        quest = "Unfortunately, they were aiming to join and don't take too well to rejection. They attack and you lose your " + questionaire.steed_type + ". (F)ight back, (R)un, or (A)sk them (somewhat belatedly) to join you? (F/R/A)";

        choice = promptPrint(quest);

        if ( choice == "f" ) { //
          alertPrint("They merrily defeat you and take you prisoner and force you to serve them " + questionaire.drink + " for the rest of your days.");
        } else if (choice == "r" ) {
          alertPrint(questionaire.name + ", you coward. So much for your quest.");
        } else {
          alertPrint("They laugh at you and throw " + questionaire.drink + " in your face.");
        }
      }

    } else { // keep walking
      quest = "Using the feet, eh? This is going to take a while. Do you want to (W)alk, (R)un, or (S)kip merrily like Dorothy in the Wizard of Oz? (W/R/S)";
      choice = promptPrint(quest);

      if ( choice == "w" ) { // definitely walking
        alertPrint("Well, you're not going to get anywhere fast by foot. And a band of thieves prey on the slow tourists like you.");
      } else if ( choice == "r" ) { // try running
        alertPrint("You're in no shape for a marathon, so you die of exhaustion a mile out. Well, at least it's not " + questionaire.death + ".");
      } else { // skip merrily
        alertPrint("That's an odd mode of transit, but it works. A witch, not the bad one, takes notice and spirits you along with your quest, which you don't remember after being starstruck by the queen.");
      }
    }

  } else { // go right
    if ( promptPrint("Right on. Luckily your canteen contains " + questionaire.drink + " which goes to your head if you drink too quickly, which of course you did. Now you have a (H)eadache and (N)ature calls. Which do you take care of first? (H/N)") == "h" ) {
      // headache
      choice = promptPrint("So you have a (R)ed medicine, a (B)lue medicine, and a (Y)ellow medicine, all unlabed and at least one of them is potentially dangerous. Which one do you take? (R/B/Y)");
      if ( choice == "r" ) { // red pill
        alertPrint("You stay in wonderland, or at least that's what you call it everything around you that you're mind is going under the effects of a psychedelic not approved by the FDA.");
      } else if ( choice == "b" ) { // blue pill
        alertPrint("You take the blue pill, the story ends. You wake up in your bed with your MacBook beside you. I guess you just fell asleep while trying to do that assignment.");
      } else { // yellow
        alertPrint("So it turns out you were actually a butterfly dreaming you were a person on a quest all along. But butterflies don't need quests so flutter off.");
      }

    } else { // nature
      if ( promptPrint( "Time is not on your side. You see a public (O)uthouse yonder but if its condition inside is twice as good as its exterior looks, you might be better off wetting yourself. There's also patch of (W)oods in the other yonder. (O as in outhouse /W as in woods)" ) == "o") {
        alertPrint("Come, you knew from a football field away that was a bad idea. If the smell didn't kill you, then whatever grabbed you and pulled you down certainly did.");
      } else {
        alertPrint( "Lucky you are that you took care of business out here because a pixie spotted you and despite the fact that you just spoiled her forest, she will certainly be of help on your quest.");
      }
    }
  }
}

console.log("Game over.");

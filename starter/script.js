function moveToNext() {
  console.log("_____________________________");
}

var name = prompt("Welcome to the zoo! What is your name?");
console.log("We're so excited that you're here " + name + "! This promises to be a very exhilarating day at the zoo.");

moveToNext();

console.log("The zoo has just opened and we have many different animals here at our zoo! Please let me know where you'd like to start!")
moveToNext();
var firstAnimal = prompt("What animal would you like to see first? (Please enter 'B' to see Bats; 'C' to see the Big Cats; 'P' to visit the Primates; or 'R' to see some Reptiles)");

if (firstAnimal == "B" || firstAnimal == "b") {
  console.log("Off to the small mammal house!");
  moveToNext();
  console.log("Well we're at the small mammal house, but it looks like the bats are asleep right now!")
  moveToNext();
  var afterBatResponse = prompt("Since we're already at the mammal house, we may as well stay. What would you like to see instead? (Please enter 'S' to see Sloths; enter 'K' to see Koalas.)");
      if (afterBatResponse == "S" || afterBatResponse == "s"){
        console.log("GREAT CHOICE. SLOTHS ARE THE BEST ANIMAL IN THE ZOO. I MEAN, JUST LOOK AT HOW CUTE HE IS.");
        moveToNext();
        var afterSlothAnswer = prompt("Sloths are pretty darn cute. Do you want to stay here and watch them all day long? (Please enter 'y' if so! If not, enter 'n'.)");
        if (afterSlothAnswer == "y" || afterSlothAnswer == "Y"){
          console.log("The perfect choice. I'll leave you here to ponder how an animal so cute isn't more widely beloved.")
          moveToNext();
          prompt("The end.")
        } else if (afterSlothAnswer == "n" || afterSlothAnswer == "N") {
          console.log("That's just unacceptable. I'm afraid I need to ask you to leave.");
          moveToNext();
          prompt("Sorry your visit wasn't longer! The end.")
        }
      } else if (afterBatResponse == "K" || afterBatResponse == "k") {
        console.log("There are two koalas in our exhibit. They're so cute and fluffy, hanging out on eucalyptus branches.");
        moveToNext();
        var koalaBearAnswer = prompt("Did you know that a koala isn't actually a bear? (If yes, please enter 'y'; if not, please enter 'n')");
          if (koalaBearAnswer == "y" || koalaBearAnswer == "Y") {
            console.log("Well aren't you smart. Guess you should just head home because you know too much.")
            moveToNext();
            prompt("The end!");
          } else if (koalaBearAnswer == "n" || koalaBearAnswer == "N"){
            console.log("Fun fact: They actually are marsupials, because they have a pouch--but you're right, they do look like bears.");
            moveToNext();
            var animalAfterKoala = prompt("What would you like to see next? (Please enter 'ME' to see Meerkats; enter 'MO' to see Molerats.)");
            if (animalAfterKoala == "ME" || animalAfterKoala == "me") {
              console.log("So cute! But they remind you of moles, because they keep popping in and out of holes...and you really have a mole problem at home on your lawn. You decide to leave the zoo in favor of tackling your at-home mole problem!")
              moveToNext();
              prompt("It was nice having you! The end.");
            } else if (animalAfterKoala == "MO" || animalAfterKoala == "mo"){
              console.log("Interesting choice. Naked molerats are cuter than you expected, but they're eating breakfast. So you decide to leave the zoo to get breakfast, too.")
              moveToNext();
              prompt("Sorry to see you go so soon! The end.");
            }
          }
      }
} else if (firstAnimal == "C" || firstAnimal == "c") {
  console.log("We are off to see some cats! Meow!");
  moveToNext();
  console.log("To see cats, you have to walk across the zoo. It's about 2 miles.")
  var takeWalk = prompt("You've walked awfully far and you're still not at the Cats exhibit. Would you like to take a rest or keep going? Enter 'R' to take a rest; enter 'G' to keep going.");
  if (takeWalk == "R" || takeWalk == "r"){
    console.log("You sit down to wait.");
    moveToNext();
    var restLength = prompt("How long would you like to rest here? Please enter a number of minutes to rest.");
    if (restLength < 5) {
      console.log("Good call. A quick rest does your muscles good. Then you get up and finish the trek. At last: The cats!");
      moveToNext();
      var whichCat = prompt("Which big cat would you like to see? (Please enter 'Tiger' or 'Lion'.)");
      if (whichCat == "Tiger" || whichCat == "tiger") {
        console.log("Good call! Our tiger just had cubs. The baby tigers are so cute that you decide to spend the rest of the day here watching them play.");
        moveToNext();
        prompt("Glad you found an animal you like! Come again soon.");
      } else if (whichCat == "Lion" || whichCat == "lion"){
        console.log("ROAR! The lion at our zoo is really impressive. In fact, he's so impressive that you decide that's all you need to see, and you choose to leave the zoo.");
        moveToNext();
        prompt("Glad you got to see our lion! See you later.");
      }
    } else if (restLength > 5 && restLength <= 20){
      console.log("Luckily you have plenty of time to rest. So you decide to count the minutes as they pass. The minutes go by...");
      for (var i = 0; i < restLength; i = i + 1){
        console.log(i);
      }
      moveToNext();
      console.log("All of that counting has made you sleepy...kind of like counting sheep. You decide you'd rather keep counting sheep and take a nap than see animals, so you head home. The end.");
      moveToNext();
      prompt("Enjoy your nap!");
  } else {
      console.log("Hmm. If you need a 20+ minute break just to walk halfway to the other side of the zoo, this experience probably isn't for you. You decide to head home.");
      moveToNext();
      prompt("That's too bad. Come back when you're more in shape!");
    }
  } else if (takeWalk == "G" || takeWalk == "g") {
    console.log("Walking it is!")
    moveToNext();
    var drinkResponse = prompt("After the walk, you're very thirsty, so you visit a concession stand. Would you like the Kitty Cola or a bottle of water? (Please enter 'water' for the bottled water or 'cola' for the soda.)");
    if (drinkResponse == "water" || drinkResponse == "Water"){
      console.log("That refreshing bottle of water was tasty! But now you have to go to the bathroom, and that's on the other side of the zoo. After you walk there, you decide it's not worth it to stay, and you head home.");
      moveToNext;
      prompt("Sorry you didn't see any animals! Better luck next time.");
    } else if (drinkResponse == "cola" || drinkResponse == "Cola") {
      console.log("At first, the buzz from the soda is great...but then your blood sugar crashes and you're too tired to keep going. YOu decide to head out to get lunch and re-set your blood sugar.");
      moveToNext;
      prompt("Hope your trek to lunch is more successful that the trek to the cats! The end.");

    }
  }
} else if (firstAnimal == "P" || firstAnimal == "p") {
  console.log("Let's go see some monkies!");
  moveToNext();
  console.log("First up is a gorilla! He looks angry, and he turns away from the viewing glass.")
  var gorillaResponse = prompt("Do you want to tap on the glass to get his attention? (Please enter 'y' to tap; enter 'n' to keep going.)")
  if (gorillaResponse = "Y" || gorillaResponse == "y"){
    console.log("Aaah, bad choice! He's so angry he broke the glass!");
    moveToNext();
    var runAway = prompt("You have a choice: Take a stand against the gorilla or high-tail it out of there. What do you choose? (Please enter 'fight' to fight the gorilla; enter 'run' to run away.)");
    if (runAway == "fight" || runAway == "Fight"){
      console.log("Well, you seemed smart until now. The gorilla is so angry that he starts pounding on the first person he sees...which is you. You die.");
      moveToNext();
      prompt("I'd say, 'See you later,' but you're dead. That's too bad...");
    } else if (runAway == "run" || runAway == "Run"){
      console.log("As the gorilla barrels toward you, you start running...and running...and running--all the way out of the zoo.");
      moveToNext();
      prompt("See you again soon? Or maybe not, after that experience...");
    }
  } else if (gorillaResponse = "N" || gorillaResponse == "n") {
    console.log("Good choice. I wouldn't do that either. Let's keep going!");
    moveToNext();
    var otherMonkey = prompt("What would you like to see next? (Please enter 'chimps' to see Chimpanzees; enter 'howler' to see Howler Monkies)");
    if (otherMonkey == "chimps" || otherMonkey == "Chimps"){
      console.log("There are so many chimpanzees in this exhibit! However, you notice that they're a lot like humans...which leads you to an existential crisis about human evolution from monkies. You need to go home and think about your life.");
      moveToNext();
      prompt("We'll see you again once you sort out those existential problems. Come back soon!");
    } else if (otherMonkey == "howler" || otherMonkey == "Howler"){
      console.log("Man, these guys are loud! One monkey comes right up to the glass and shrieks in your ear, breaking the eardrum. Looks like you need to go to the hospital.");
      moveToNext();
      prompt("We'll see you again once that ear drum heals. Bye!");
    }
  }
} else if (firstAnimal == "R" || firstAnimal == "r") {
  console.log("You want to see scaly things this early the morning? All right...off we go.");
  moveToNext();
  console.log("Did you know that there are 8,240 species of reptiles in the world? The first animal in the reptile house is the lizard. You can touch him!");
  var touchLizard = prompt("Do you want to put your hand into the lizard exhibit? (Please enter 'y' for yes; enter 'n' for no and to keep going.)");
  if (touchLizard == "Y" || touchLizard == "y"){
    console.log("You reach your hand over the glass of the exhibit...slowly. But without warning, the lizard scampers up your arm and out of the open door of the reptile house!");
    moveToNext();
    var takeCredit = prompt("Do you choose to take credit for his escape? (Please enter 'y' for yes; enter 'n' for no.)");
    if (takeCredit == "Y" || takeCredit == "y"){
      console.log("That's noble of you, but I'm afraid the zookeepers say you still have to leave the zoo.");
      moveToNext();
      prompt("That's too bad. See you next time!");
    } else if(takeCredit == "N" || takeCredit == "n"){
      console.log("Who did this terrible deed?! Mass panic ensues, and the zookeepers have to close the zoo down. Looks like you'll have to leave.");
      moveToNext();
      prompt("Better luck next time.");
    }
  } else if (touchLizard == "N" || touchLizard == "n") {
    console.log("Yeah, lizards feel weird. Let's move on.")
    var afterLizard = prompt("Do you want to see alligators or snakes next? (Please enter 'A' for Alligators; enter 'S' for Snakes.)");
    if (afterLizard == "A" || afterLizard == "a") {
      console.log("This zoo has a giant alligator, and he's sleeping.");
      moveToNext();
      var sleepingGatorResponse = prompt("Do you want to stick around to see if he wakes up? (Please enter 'y' for yes; enter 'n' for no.)");
      if (sleepingGatorResponse == "y" || sleepingGatorResponse== "Y"){
        console.log("Well, he was alseep, but suddenly he's swimming right toward you and slams into the glass. CHOMP! He's trying to eat you. That's pretty scary, and you decide that's quite enough excitement for one day. It's time to head home.");
        moveToNext();
        prompt("Thanks for coming! See you next time.");
      } else if (sleepingGatorResponse == "n" || sleepingGatorResponse == "N"){
        console.log("That's okay. You've already seen two animals today, and you decide it's time to head outside the zoo to go to lunch.");
        moveToNext();
        prompt("We'll see you after lunch? The end.");
      }
    } else if (afterLizard = "S" || afterLizard == "s"){
      console.log("Snakes--interesting choice. You proceed to see the boa constrictor, which is only 8 feet long.");
      moveToNext();
      prompt("Not impressed? It's okay if you head out. See you next time!");
    }
  }
}
//else {
//  console.log("All right, that wasn't an option. But I'll still show you something cool.")

//  moveToNext();
// }

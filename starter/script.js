// put code here!
// var name = prompt("What is your name?");
// console.log("Welcome " + name + ". We're excited to have you.");
//
// var age = prompt("How old are you?");
//
// if (age < 50) {
//   console.log("great! You can play!");
//   } else {
//     console.log("You're too old!");
//   }

function moveToNext() {
  console.log("_____________________________");
}

var name = prompt("Welcome to the zoo! What is your name?");
console.log("We're so excited that you're here " + name + "! This promises to be a very exhilarating day at the zoo.");

moveToNext();

console.log("The zoo has just opened and we have many different animals here at our zoo! Please let me know where you'd like to start!")
moveToNext();
var firstAnimal = prompt("What animal would you like to see first? (Please enter 'B' to see Bats; 'C' to see the Big Cats; 'P' to visit the Primates; or 'R' to see some Reptiles)");

if (firstAnimal == "B") {
  console.log("Off to the small mammal house!");
  moveToNext();
  console.log("Well we're at the small mammal house, but it looks like the bats are asleep right now!")
  moveToNext();
  var afterBatResponse = prompt("Since we're already at the mammal house, we may as well stay. What would you like to see instead? (Please enter 'S' to see Sloths; enter 'K' to see Koalas.)");
      if (afterBatResponse == "S"){
        console.log("GREAT CHOICE. SLOTHS ARE THE BEST ANIMAL IN THE ZOO. I MEAN, JUST LOOK AT HOW CUTE HE IS.");
        moveToNext();
        var afterSlothAnswer = prompt("Sloths are pretty darn cute. Do you want to stay here and watch them all day long? (Please enter 'y' if so! If not, enter 'n'.)");
        if (afterSlothAnswer == "y"){
          console.log("The perfect choice. I'll leave you here to ponder how an animal so cute isn't more widely beloved.")
          moveToNext();
          prompt("The end.")
        } else if (afterSlothAnswer == "n") {
          console.log("That's just unacceptable. I'm afraid I need to ask you to leave.");
          moveToNext();
          prompt("Sorry your visit wasn't longer! The end.")
        }
      } else if (afterBatResponse == "K") {
        console.log("There are two koalas in our exhibit. They're so cute and fluffy, hanging out on eucalyptus branches.");
        moveToNext();
        var koalaBearAnswer = prompt("Did you know that a koala isn't actually a bear? (If yes, please enter 'y'; if not, please enter 'n')");
          if (koalaBearAnswer == "y") {
            console.log("Well aren't you smart. Guess you should just head home because you know too much.")
            moveToNext();
            prompt("The end!");
          } else if (koalaBearAnswer == "n"){
            console.log("Fun fact: They actually are marsupials, because they have a pouch--but you're right, they do look like bears.");
            moveToNext();
            var animalAfterKoala = prompt("What would you like to see next? (Please enter 'ME' to see Meerkats; enter 'MO' to see Molerats.)");
            if (animalAfterKoala == "ME") {
              console.log("So cute! But they remind you of moles, because they keep popping in and out of holes...and you really have a mole problem at home on your lawn. You decide to leave the zoo in favor of tackling your at-home mole problem!")
              moveToNext();
              prompt("It was nice having you! The end.");
            } else if (animalAfterKoala == "MO"){
              console.log("Interesting choice. Naked molerats are cuter than you expected, but they're eating breakfast. So you decide to leave the zoo to get breakfast, too.")
              moveToNext();
              prompt("Sorry to see you go so soon! The end.");
            }
          }
      }
} else if (firstAnimal == "C") {
  console.log("We are off to see some cats! Meow!");
  moveToNext();
  console.log("To see cats, you have to walk across the zoo. It's about 2 miles.")
  var takeWalk = prompt("You've walked awfully far and you're still not at the Cats exhibit. Would you like to take a rest or keep going? Enter 'R' to take a rest; enter 'G' to keep going.");
  if (takeWalk == "R"){
// code here
  } else if (takeWalk == "G") {
// code here
  }

} else if (firstAnimal == "P") {
  console.log("Let's go see some monkies!");
  moveToNext();
  console.log("First up is a gorilla! He looks angry, and he turns away from the viewing glass.")
  var gorillaResponse = prompt("Do you want to tap on the glass to get his attention? (Please enter 'y' to tap; enter 'n' to keep going.)")
  if (gorillaResponse = "Y"){
    console.log("Aaah, bad choice! He's so angry he broke the glass!");
    moveToNext();
    var runAway = prompt("You have a choice: Take a stand against the gorilla or high-tail it out of there. What do you choose? (Please enter 'fight' to fight the gorilla; enter 'run' to run away.)");
    if (runAway == "fight"){
      console.log("Well, you seemed smart until now. The gorilla is so angry that he starts pounding on the first person he sees...which is you. You die.");
      moveToNext();
      prompt("I'd say, 'See you later,' but you're dead. That's too bad...");
    } else if (runAway == "run"){
      console.log("As the gorilla barrels toward you, you start running...and running...and running--all the way out of the zoo.");
      moveToNext();
      prompt("See you again soon? Or maybe not, after that experience...");
    }
  } else if (gorillaResponse = "N") {
    console.log("Good choice. I wouldn't do that either. Let's keep going!");
    moveToNext();
    var otherMonkey = prompt("What would you like to see next? (Please enter 'chimps' to see Chimpanzees; enter 'howler' to see Howler Monkies)");
    if (otherMonkey == "chimps"){
      console.log("There are so many chimpanzees in this exhibit! However, you notice that they're a lot like humans...which leads you to an existential crisis about human evolution from monkies. You need to go home and think about your life.");
      moveToNext();
      prompt("We'll see you again once you sort out those existential problems. Come back soon!");
    } else if (otherMonkey == "howler"){
      console.log("Man, these guys are loud! One monkey comes right up to the glass and shrieks in your ear, breaking the eardrum. Looks like you need to go to the hospital.");
      moveToNext();
      prompt("We'll see you again once that ear drum heals. Bye!");
    }
  }
} else if (firstAnimal == "R") {
  console.log("You want to see scaly things this early the morning? All right...off we go.");
  moveToNext();
  console.log("Did you know that there are 8,240 species of reptiles in the world? The first animal in the reptile house is the lizard. You can touch him!");
  var touchLizard = prompt("Do you want to put your hand into the lizard exhibit? (Please enter 'y' for yes; enter 'n' for no and to keep going.)");
  if (touchLizard == "Y"){
    console.log("You reach your hand over the glass of the exhibit...slowly. But without warning, the lizard scampers up your arm and out of the open door of the reptile house!");
    moveToNext();
    var takeCredit = prompt("Do you choose to take credit for his escape? (Please enter 'y' for yes; enter 'n' for no.)");
    if (takeCredit == "Y"){
      console.log("That's noble of you, but I'm afraid the zookeepers say you still have to leave the zoo.");
      moveToNext();
      prompt("That's too bad. See you next time!");
    } else if(takeCredit == "N"){
      console.log("Who did this terrible deed?! Mass panic ensues, and the zookeepers have to close the zoo down. Looks like you'll have to leave.");
      moveToNext();
      prompt("Better luck next time.");
    }
  } else if (touchLizard == "N") {
    console.log("Yeah, lizards feel weird. Let's move on.")
    var afterLizard = prompt("Do you want to see alligators or snakes next? (Please enter "A" for Alligators; enter "S" for Snakes.)");
    if (afterLizard == "A") {
    // Alligator code here
    } else if (afterLizard = "S"){
    // Snake code here his zoo has a giant alligator, and he's sleeping. Do you want to wake him up?
  }

  }

} else {
  console.log("All right, that wasn't an option. But I'll still show you something cool.")

  moveToNext();
}

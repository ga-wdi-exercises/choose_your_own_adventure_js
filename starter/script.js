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
// console.log("Welcome " + name + ". We're excited to have you.");
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
      } else if (afterBatResponse == "K") {
        console.log("There are two koalas in our exhibit. They're so cute and fluffy, hanging out on eucalyptus branches.");
        moveToNext();
        var koalaBearAnswer = prompt("Did you know that a koala isn't actually a bear? (If yes, please enter 'y'; if not, please enter 'n')");
          if (koalaBearAnswer == "y") {
            console.log("Well aren't you smart. Guess you should just head home because you know too much.")
            moveToNext();
            prompt("The end!");
          }
      }


  //           S = Sloth
  //             THIS IS THE BEST ANIMAL IN THE ZOO. LOOK AT HIM. JUST LOOK AT HOW CUTE HE IS.
  //               Would you like to spend the whole day in this one exhibit, watching the sloth?
  //                 yes = END
  //                 no = poor choice, but that's okay. what would you like to see next?
  //                   Mo = mole rats. Cuter than you expected, but they're eating breakfast...and that makes you hungry. You leave the zoo to go get lunch. END
  //                   Me = meerkats.
  //                   So cute! But they remind you of moles...and you really have a mole problem on your lawn, so you leave the zoo to go finish your to-do list. END
  //           K = Koala
  //             Awww, look at him! Did you know that koalas aren't actually bears?
  //                 y = yes => Well aren't you smart. You're so smart, you choose to leave the zoo because you know everything. END
  //                 n = no => Fun fact! They're marsupials, because they have a pouch...even though they do look like bears. Let's keep going and see some more animals. Would you like to see primates or reptiles?
  //                   P
  //                   R



} else if (firstAnimal == "C") {
  console.log("We are off to see some cats! Meow!");
  moveToNext();

} else if (firstAnimal == "P") {
  console.log("Let's go see some monkies!");
  moveToNext();

} else if (firstAnimal == "R") {
  console.log("You want to see scaly things this early the morning? All right...off we go.");
  moveToNext();

} else {
  console.log("All right, that wasn't an option. But I'll still show you something cool.")

  moveToNext();
}


//
//       C => Ooooh, cats! To get to the cats, though, we'll have to walk across the rest of the zoo...and it's pretty far. Would you like to stop for a break?
//           y => let's stop and sit on this bench.
//             for loop => would you like to keep sitting? END
//           n => All right, let's keep going! Onto the cats! ROAR!
//             ADD MORE
//       P => Let's see some monkies!
//           Firt up, gorillas! Oooh, he looks angry. Do you want to tap on the glass to get his attention?
//             y = Aaah, bad choice. He's so angry he broke the glass and killed the first person he saw...which was you. END
//             n = Good choice. I wouldn't do that either. Let's keep going!
//       R => Reptiles are great! Did you know that there are 8,240 species of reptiles in the world? The first animal in the reptile house is the lizard. You can touch him!
//           Do you want to put your hand into the lizard exhibit?
//             y => the lizard runs up your arm and escapes. do you want to take credit for his escape?
//               y => You're kicked out of the zoo. END
//               n => Mass panic ensues! In the chaos, the zookeepers close the zoo and all visitors must leave. END
//             n => Yeah, lizards feel weird. Let's move on. Do you want to see alligators or snakes?
//               A => This zoo has a giant alligator, and he's sleeping. Do you want to wake him up?

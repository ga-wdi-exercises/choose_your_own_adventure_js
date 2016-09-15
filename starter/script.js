
var name = prompt("Hi there! What's your name?");

var answer = prompt("Wait, really?!?! Well damn, " + name + ", I'm your granpda, Rick! Are you ready to go on an adventure? Y/N");

if (answer === "N" || answer === "n") {
  alert("That's a shame, maybe your cousin Morty will be  up for it. He was always the fun one, anyway…");
  alert("THE END - RELOAD THE PAGE TO PLAY AGAIN");
} else if (answer === "Y" || answer === "y") {
  answer = prompt("That's just, just, well that's just awesome, " + name +"!  There are three - count em 3 - planets I need to visit.  Which one are you thinking?: (F)lufooza -- (S)hipfla -- or (T)axixix")
} else {
  alert("I can't understand you - are you an alien, now? Get lost, alien.")
  alert("THE END - RELOAD THE PAGE TO PLAY AGAIN")
}


if (answer === "F" || answer === "f") {
  alert("Flufooza it is! I just hope it isn't too far away…");
  alert("Rick's inter-dimensional transporter misinterpreted the Flufoozian coordinates. You and your Grandpa Rick landed in the vacuum of space and were immediately killed.");
  alert("THE END - RELOAD THE PAGE TO PLAY AGAIN");
} else if (answer === "S" || answer === "s") {
  answer = prompt("Shipfla is nice this time of year, but it can be very dangerous. Should we bring (E)xagorian mushrooms (the Shipflazians' favorite food), my prototype (I)nvisibility generator to hide, or (D)isintegrator guns to fight back if we are attacked?");
} else if (answer === "T" || answer === "t") {
  answer = prompt("Not a bad choice - but it's awfully cold there. We won't have room for the space (H)eater and the (P)umpkin spice latte machine. Which should we bring?");
} else {
    alert("I can't understand you - are you an alien, now? Get lost, alien.")
    alert("THE END - RELOAD THE PAGE TO PLAY AGAIN")
}

if (answer === "E" || answer === "e") {
  alert("The peacefull route - you always were a pushover, " + name + ", even as a baby. Eh, it's worth a shot, I guess...");
  alert("You arrive safely on Shipfla , and, having won the hearts of the Shipflazians, are established as their one, true master. You stay to rule over them until your death in 2043, the result of eating at the Shiplazian equivalent of Taco Bell.");
  alert("THE END - RELOAD THE PAGE TO PLAY AGAIN");
} else if (answer === "I" || answer === "i") {
  alert("Nice! I was hoping for a chance to  test this thing out. Here we go!");
  alert("The generator gives way just as you are passing a group of particularly violent Shipflazians. They murder you instantly and begin to eat your legs as you look on, screaming from both agony and horror.");
  alert("THE END - RELOAD THE PAGE TO PLAY AGAIN");
} else if (answer === "P" || answer === "p") {
  alert("That is basic as f*#%... You're no grandson of mine! Get out of my face, kid, I'm going to find my real grandson, Morty.")
  alert("THE END - RELOAD THE PAGE TO PLAY AGAIN");
} else if (answer === "H" || answer === "h") {
  alert("Duh, NAME! That's really the only choice to make. Lattes are utter bullcrap..");
  alert("You have a successful journey to Taxixix, where you collect the necessary ingredients for a very potent love potion, which Grandpa Rick concocts for you to use on your crush at school. Congrats, you two will get married and you will have a loveless marriage built on a lie.");
  alert("THE END - RELOAD THE PAGE TO PLAY AGAIN");
} else if (answer === "D" || answer === "d") {
  alert("Violence - I didn't know you had it in ya! Let's see what these Shipflazians are made out of.")
  answer = prompt("Upon arrival, you are attacked by a 20 Shipflazians. How many do you kill?");
} else {
    alert("I can't understand you - are you an alien, now? Get lost, alien.")
    alert("THE END - RELOAD THE PAGE TO PLAY AGAIN")
}

if (answer <= 5) {
  alert("The Shipflazians appreciate your understanding, and allow you to collect the materials you need and return to your ship.");
  alert("When you arrive safely back to Earth, you let your grandpa know that you will NEVER go on another one of his adventures again.");
  alert("CONGRATULATIONS - YOU SURVIVED AN ADVENTURE WITH YOUR GRANDPA RICK!");
  alert("THE END - RELOAD THE PAGE TO PLAY AGAIN");
} else if (answer > 10) {
  alert("You killed more than half of them! That's brutal, dude. I'm no coward, but that's just heartless. No grandson of mine would do such a thing. I'm leaving you here on Shipfla to fend for yourself. LATER!");
  alert("True to his word, grandpa Rick leaves you on Shipfla, where you are soon after chased into a very small cave where you die of, somehow, a combination of gonorrhea and syphilis.");
  alert("THE END - RELOAD THE PAGE TO PLAY AGAIN");
} else if (answer > 5 && answer <=10) {
  alert("The Shiplazians retreat, but as you are collecting the materials you came for, you and Rick are ambushed. Rick tries to save you but is unsuccessful. At your dying breath, he promises to keep your memory alive by replacing you with Morty, which brings you to tears...bloody, bloody tears.")
  alert("THE END - RELOAD THE PAGE TO PLAY AGAIN");
} else {
    alert("I can't understand you - are you an alien, now? Get lost, alien.")
    alert("THE END - RELOAD THE PAGE TO PLAY AGAIN")
}

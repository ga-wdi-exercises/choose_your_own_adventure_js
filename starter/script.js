var buffer = function(){
  console.log("*******************************")
}
console.log("It's your first day on the job as winter caretaker at the Overlook Hotel.  You and your family are looking forward to a nice relaxing winter.")
buffer();
console.log("So, What do you want to do first?\nWork on your novel?\nGo see what Danny is up to?\nOr ride your big wheel around the hotel?")
var firstInput = prompt("Please enter 1 for 'novel', 2 for 'danny', or 3 for 'big wheel'")
if (firstInput == 1) {
  console.log("Ok, you chose to work on your novel.")
  console.log("How’s this for an opening line? “All work and no play make Jack a dull boy”")
}
else if (firstInput == 2) {
  console.log("Ok, you decided to go see Danny")
  console.log("Danny was busy talking to his friend Tony about red wine, or something like that.")
}
else if (firstInput == 3) {
  console.log("Ok, you decided to go for a ride on the big wheel.")
  console.log("You ran into some adorable little twin girls.  They were super friendly and wanted you to come play with them forever and ever and ever...")
}
buffer()
console.log("Yikes, looks like a big storm has rolled in.  We’re going to have to hunker down for a while.  On top of that, the family has been getting a little out of line lately.  Wendy read a rough draft of your novel and was not supportive at all.")
buffer()
console.log("What should you do now?\nGive the family a good talking to?\nSabotage the snowmobile and the two way radio?\nPut on some comfy clothes, settle in by the fire, and have boardgame night with the family?")
var secondInput = prompt("Please enter 'sabatoge' 'boardgames' or 'wendy darling'")


if (secondInput == "wendy darling") {
  console.log("Ok, you decided to have a talk with Wendy, the light of your life.")
  console.log("Be sure to let her know you're not gonna hurt her.")
}

else if (secondInput == "sabatoge") {
  console.log("Ok, you decided to sabotoge the means of outide communication.")
  console.log("Now there’s no way to contact the outside world! Great?")
}
else if (secondInput == "boardgames") {
  console.log("Ok, you decided to get in some quality family time.")
  console.log("I'm sure this whole thing will blow over soon.  In the meantime, break out the chutes and ladders!")
}
buffer()
console.log("Oh no!  Wendy knocked you out with a baseball bat, dragged you into the kitchen, and locked you inside the pantry.  Luckily, Grady the ghost let you out.  Now it’s time to grab that firefighter’s ax and go teach your family a lesson. What is it Ed Mcmahon says at the beginning of the Tonight Show?")
buffer()
console.log("Where should you look for your family?\nThe Gold Room, the hedge maze, or Room 237?")
var thirdInput = prompt("Please enter 'gold' 'maze' or '237'")

if (thirdInput == "gold") {
  console.log("Ok, you picked gold.")
  console.log("Hey! There’s a fancy party going on!  The bartender, Lloyd, slips you a bottle of bourbon, a glass, and a little bit of ice.  Let’s party like it’s 1921!")
}
else if (thirdInput == "maze") {
  console.log("Ok, you picked maze.")
  console.log("Uh oh, it’s a lot colder out here than you thought it would be.  And it’s pretty hard to find your way around with blah blah blah.  You should probably take a rest and wait it out until morning. ")
}
else if (thirdInput == "237") {
  console.log("Ok, you picked 237")
  console.log("Woah, there is some weirdness going on at this hotel.  Was that guy wearing a dog costume?  Well… I guess you should try anything once...")
}
buffer()






console.log("Just out of curiosity, is this your first winter as caretaker here?")
var fourthInput = prompt("Please enter 'yes' or 'no'")

  while (fourthInput == "yes") {
    console.log("I'm sorry to differ with you sir, but you are the caretaker. You've always been the caretaker. I should know sir. I've always been here.");
    fourthInput;
    break;
  }







console.log("So, on a scale of 1-10, how would you rate the time you spent as winter caretaker at the Overlook Hotel?")
var lastInput = prompt("Please enter a number between 1 and 10.")

if (lastInput > 7) {
  console.log("Great! We can't wait to see you back next year!")
}
else if (lastInput > 4) {
  console.log("...")
}
else console.log("...")

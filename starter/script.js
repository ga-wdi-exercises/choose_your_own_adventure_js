confirm("You just moved to the city and made a new friend, Grace. 'There's a party in the basement of the bodega on 5th, wanna go?' Grace asks. Are you going?");


var age = prompt("How old are you");
if(age<18){
    console.log("You're not old enough; sorry!");
} else {
    console.log("I hope you're thirsty.");
}
    console.log("You walk to the back room of the bodega, Grace. She opens a refridgerator door and climbs in.");
    console.log("Confused, you hesitate. 'Don't worry, I've been here before. It'll be fun! Come on.', Grace says disappearing from site.");
var pathInput = prompt("Are you going to the party down the stairs in the refridger? Please enter 'Y' or 'N'");

if(pathInput == "Y") {
    console.log("You head down the stairs. Your heart starts racing. Everyone's dancing. It's packed.")
}
else {
    console.log("Grace comes back out of the fridge and kills you.")
}
    console.log("You're looking for Grace when a tall pale stranger grabs your arm. He smells your wrist and says 'It's almost time.'");
    console.log("Grace appears beside the guy swaying,'Are you thirsty?!' She shouts over the music.");
var userThirst = prompt("Are you thirsty? Please enter 'Y' or 'N'");
if(userThirst === "Y")
    console.log("Blood starts spraying out of the sprinklers on the ceiling . You scream. Unnoticed, you look at Grace. She's biting the strange guys neck!")
}
else if(userThirst =="N"){
  console.log("Blood starts spraying out of the sprinklers on the ceiling. You scream as Grace bites your neck.")
}
var feedback = prompt("Rate my game out of 10")
if (feedback > 8)
{
    console.log("Thank you! We should race at the next concert!");
} else {
    console.log("I'll keep practicing coding and racing.")
}// put code here!

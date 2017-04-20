function inputs() {
var trashKid = document.getElementById('input').value;
var trashChoice = document.getElementById('dropMenu').value;

if (trashChoice == "Begin") {
 alert("Choose whether or not you'll take out the trash before dad gets home");
 return;
}

var decision = giveOptions(trashChoice);
var pick = parseInt(Outcome(name, trashChoice, decision));
var validInput = checkChoice(pick, trashChoice);

 if (validInput === true) {
   var answer = returnAnswer(trashChoice, pick);
   alert(trashKid + " - " + answer);
 }
 else {
   alert("Try again.");
   inputs();
   return;
 }
}

function checkChoice (n, trashChoice1) {

if (Number.isInt(n)) {

 if (trashChoice1 !== "yes"){
   if (n >= 1 && n <= 2){
     return true;
   }
   else {
     return false;
   }
 }

 else if (n >= 1 && n <= 3){
   return true;
 }
 else {
   return false;
 }

}
}

function Outcome (trashKid, trashChoice2, decision1) {
var answer1 = prompt("Hello " + trashKid + "! You chose " + trashChoice2 + ". Pick a number to make your decisions. (Ex. '2') --    " + decision1 + " (Number)", "(Decison)");
return answer1;

}

function giveOptions (trashOutcome) {
switch (trashOutcome) {

   case "yes":
     return "(Decision 1) - I get to play video games! (Decision 2) - Wait, I did the right thing. Why didn't he say anything?";
   break;

   case "later":
     return "(Decision 1) - How much later?... (Decision 2) - I'll do it in 10 minutes";
   break;

   case "no":
     return "(Decision 1) - Don't want to smell like garbage for hot date  (Decision 2) - Are a masochist (Decision 3) - You're trying to prove your independence from you father and that he can't boss you around.";
   break;

   case "I'll think about it":
     return "(Decision 1) - While you're thinking about it, dad pulls down the street (Decision 2) - Choose to hide";
   break;

   case "I'll take the trash out half-way and expect dad to know to take it the rest":
     return "(Decision 1) - I'm sure he'll be thrilled about that (Decision 2) - You do understand the only possible answer you could select to not get beated is 'yes, I'll take out the trash', right?";
   break;

   case "Out where?":
     return "(Decision 1) - Are a moron (Decision 2) - Are lazy";
   break;

   case "...":
     return "(Decision 1) - ............ (Decision 2) - uh....";
   break;
}
}

function returnAnswer(trashChoice, n) {

switch (trashChoice) {
 case "yes":
     if (n == 1) {
       return "In your heart you know he's proud and from then on out you have no inner conflict with taking out the trash.";
     }

     else if (n == 2){
       return "You yearn for the acknowledgement of doing something that is asked of you and become bitter toward you father.";
     }
 break;

 case "later":
     if (n == 1) {
       return "He just pulled down the street...";
     }

     else if (n == 2){
       return "Dad pulls in the driveway and you see him flailing angrily while steering to get his belt";
     }
 break;

 case "no":
     if (n == 1) {
       return "Grounded. No hot date. Date ends up going out with the douchey foot-ball player from State instead. Loses potential love. Forever.";
     }

     else if (n == 2){
       return "Well hey if you're into that sort of thing.";
     }
     else if (n == 3){
       return "Not while you're living under his house!";
     }
 break;

 case "I'll think about it":
     if (n == 1) {
       return "You're thrown off a cliff by dad and you hang for a second like Wil-E-Coyote, wave, and plumet to the Earth.";
     }

     else if (n == 2){
       return "Under this bridge should be a safe spot. .. ..... .. Wait.. .. .. Oh no! A troll! Ahhhhhhhh!!!";
     }
 break;

 case "I'll take the trash out half-way and expect dad to know to take it the rest":
     if (n == 1) {
       return "You've got balls";
     }

     else if (n == 2){
       return "Dad arrives home to a half taken out trash can. He then proceeds to bust down the door to your room. It's worse than if you had just said no. Bringing the garbage half way was the worst decision in this entire game you could've possibly made.";
     }
 break;

 case "Out where?":
     if (n == 1) {
       return "So was O'doyle. And O'doyle ruled";
     }

     else if (n == 2){
       return "You tell dad you're lazy and as you say it he opens a brief-case with a belt with spikes on it with the engraving 'Ol Reliable' on it";
     }
 break;

 case "...":
     if (n == 1) {
       return "You say nothing when dad asks you why you didn't take out the trash and he understands you. He hugs you and promises to never make you be the one to take out the trash ever again. Congrats, you stood up to dad and got out of garbage duty forever. (WIN)";
     }

     else if (n == 2){
       return "When you say 'uh....' your dad changes his mind about understanding you and you are grounded for 30 years. Had you kept you mouth shut, you would have been embraced, hugged, and promised that he'd never make you take the trash out ever again. You've completely lost this game. (Failure)";
     }
 break;

}

}


// value="Begin"
// value="yes"
// value="later"
// value="no"
// value="I'll think about it"
// value="I'll take out the trash half-way and expect dad to know to take it the rest"
// value="Out where?"
// value="..."

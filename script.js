
var userName = prompt("Hi there. What is your name?");

if (userName!= null) {
   alert("Welcome " + userName + ".  My name is Charlie.  I am a program that will assess potential personality traits and how you may learn best.  Let's get started. ");
}

//First Selection (Choice of Profession)

var jobChoices = ["lawyer" , "president" , "garbage man" , "chef", "entrepreneur"];
var userJob =  prompt("What do you want to be? A " + jobChoices );

if (userJob === jobChoices[0]) {
 alert("You are a negotiator.")}
else if (userJob === jobChoices[1]) {
 alert("You are confident.")}
else if (userJob === jobChoices[2]) {
 alert("You are humble.")}
else if (userJob === jobChoices[3]) {
 alert("You are creative.")}
else if (userJob === jobChoices[4]) {
 alert("You are a risk-taker.")}
else {for (var i = 0; i < 100; i++) {
// console.log("Uh oh, next time.  You will spell right.")
alert("Your fired. You need to spell better.[i]")}
};

var learningSolutions = ["faces","names","situations"];
var learnPrompt = prompt("When trying to recall names, do you remember " + learningSolutions);


if (learnPrompt === learningSolutions[0]) {
alert("You are a visual learner.")}
else if (learnPrompt === learningSolutions[1]) {
alert("You are a audio learner.")}
else if (learnPrompt === learningSolutions[2]) {
 alert("You are a kinesthetic learner.")}
else {for (var i = 0; i < 100; i++) {
alert("Your fired. You need to spell better.[i]")
}
};

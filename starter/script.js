
/**
Get user name
*/
var name = prompt("Hello there child, humor an old man, and tell me your name");

/**
Intro
*/
console.log("Ah, yes, greetings " + name);
console.log("I am Morgan Freeman");

/**
Initialize variables
*/
var answerYN = null;
var repeat = true;

/**
Repeat until user accepts future
*/
while (repeat){
  var answerYN = prompt("Would you like to know your future? yes/no");
    if (answerYN === "yes" || answerYN === "Yes"){
      console.log("I don't blame you");
      var destiny = null;  //initialize destiny
      var destiny = prompt("On average, how many articles of clothing do you wear on a daily basis? 0-100");
      destiny = parseInt(destiny);  //parse destiny string to type int
      if (destiny > 10){
        console.log("In your future, you are hot, and often perspiring.");
        repeat = false;
        }
      else if (destiny > 5){
        console.log("In your future, you have a moderate load of laundry.");
        repeat = false;
      }
      else if (destiny > 0){
        console.log("You are both tan, and chilly in the air conditioning, in your future.");
        repeat = false;
      }
      else if (destiny === 0)
        console.log("You will join me in the future, as a God");
        repeat = false;
    }
    //else{
    //  repeat = true;
    //}
}

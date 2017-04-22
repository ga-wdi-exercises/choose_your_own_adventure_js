console.log("Hello World");
alert("Hello, you are a Hobbit named Bilbo that lives in the Shire!");
alert("A lifetime of adventure could await you...if you would like.");
alert("Possible responses are provided. just enter the first letter of the response you want to choose!");
var userName = window.prompt("Bilbo, what is your name?");
var friend
while(userName != "Bilbo") {
  userName = window.prompt("Err, are you sure your name isn't Bilbo?")
  console.log(userName);
}
var currentPrompt = ageQuery();
var questionType = 1;
var promptMap = {
  "continue01": [1,"Brilliant! Chronicle your life in your new book, The Hobbit, to there and back again!  Remember Smaug? Oh those were the days...","prompt03",0,null,0,null,0,null,0],
  "continue02": [1,"I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.' - You feel awkward! Time to vanish away. You slip on the ring and run off away from the party leaving everything to Frodo.","prompt04"],
  "continue03": [1,"Of course we will invite "+friend+"Here they come with Gandalf!","prompt05"],
  "continue04": [1,"How ever so adventurous of you.  I'd tell you the rest, but that's a story for another time.","prompt06"],
  "continue05": [1,"Ah, it appears adventure has chosen you for a journey! Or is it that you have chosen a great adventure? Well, let's wait...","prompt07"],
  "prompt02": [2,"Gee, that's old, are you sure?\n(Yes/No)","Y","prompt03","N","prompt01",null,"prompt02",null,0],
  "prompt03": [2,"What an adventurous life you've had, Bilbo Baggins, do you wish to Travel with the Elves to the Undying Lands?\n(Yes/No)","Y","ending02","N","ending03",null,"prompt03",null,0],
  "prompt04": [2,"After a long life filled with adventure, you are now resting in Rivendell. What's next?\n-Steal the ring back\n-Write a book","S","ending04","W","continue01",null,"prompt03",null,0],
  "prompt05": [3,"It's your Eleventy-First Birthday! Happy Birthday! What do you do now?\n-Speech!\n-Fight!\n-Drink too much!","S","continue02","F","ending05","D","ending06",null,0],
  "prompt06": [0,"Time to rest up for your eleventy first birthday. Anyone you wish to invite along with Gandalf?",null,"continue03",null,0,null,0,null,0],
  "prompt07": [2,"Knock knock.\n-Who's there?\n-Ignore it","W","prompt08","I","prompt07",null,"prompt07",null,0],
  "prompt08": [2,"Ah, it's Thorin II Oakenshield, Fíli, Kíli, Óin, Glóin, Balin, Dwalin, Ori, Dori, Nori, Bifur, Bofur, Bombur, and Gandalf. Set off as their thief?\n(Yes/No)","Y","continue04","N","ending07",null,0,null,0],
  "prompt09": [2,"Let's have some tea and biscuits. No need for an adventure! Enjoy your time until you're 50... wait is that an old man walking down the road?  He greets you, how do you respond?\n-Good Morning\n-Bye Felicia","G","continue05","B","ending07",null,0,null,0]
};
var endingMap = {
  "ending01": "So what's out there in the Undying Lands?",
  "ending02": "You are the oldest Hobbit to ever grace Middle Earth. Goodbye Biblbo Baggins- you've earned this rest.",
  "ending03": "You live what little time you have left out alone, your favorite nephew and all the elves having crossed over the Sea.",
  "ending04": "That didn't work so well did it? You reach for the ring and slip and fall smashing your nose.",
  "ending05": "Those Sackville-Bagginses are stealing your things again.  You fight them and they sue you and take all of your belongings!",
  "ending06": "Alas, no one thought it possible, but a hobbit has drunk too much and died from alcohol poisoning",
  "ending07": "A boring life you lead. You die at the age of 70 for being too fat- quite young for a Hobbit, might I add."
}
var arrayHolder
var answerHold
do {
  arrayHolder = promptMap[currentPrompt];
  console.log(currentPrompt + " array: " + arrayHolder[1])
  switch(arrayHolder[0]) {
    case 0:
      friend = window.prompt(arrayHolder[1])
      currentPrompt = arrayHolder[3]
      break;
    case 1:
      window.alert(arrayHolder[1]);
      currentPrompt = arrayHolder[2]
      break;
    case 2:
      switch(answerHold = window.prompt(arrayHolder[1])){
        case arrayHolder[2]:
          arrayHolder[9]= checkAnswerType(currentPrompt,answerHold);
          currentPrompt = arrayHolder[3]
          break;
        case arrayHolder[4]:
          arrayHolder[9]= checkAnswerType(currentPrompt,answerHold);
          currentPrompt = arrayHolder[5]
          break;
        default:
          currentPrompt = currentPrompt
          break;
      }
      break;
    case 3:
      switch(answerHold = window.prompt(arrayHolder[1])){
        case arrayHolder[2]:
          arrayHolder[9]= checkAnswerType(currentPrompt,answerHold);
          currentPrompt = arrayHolder[3]
          break;
        case arrayHolder[4]:
          arrayHolder[9]= checkAnswerType(currentPrompt,answerHold);
          currentPrompt = arrayHolder[5]
          break;
        case arrayHolder[6]:
          arrayHolder[9]= checkAnswerType(currentPrompt,answerHold);
          currentPrompt = arrayHolder[7]
          break;
        default:
          currentPrompt = currentPrompt
          break;
      }
      break;
    }
}
while (arrayHolder[9] !=1);
window.alert(endingMap[currentPrompt])
window.alert('Thank you for playing!')

function ageQuery() {
  ageHolder = window.prompt("So erm... How old are you again?");
  console.log(ageHolder)
  if (131 < ageHolder) {
    currentPromptHolder = "prompt02";
  } else if (ageHolder == 131) {
    currentPromptHolder = "prompt03"
  } else if (111 < ageHolder && ageHolder < 131) {
    currentPromptHolder = "prompt04";
  } else if (ageHolder == 111) {
    currentPromptHolder = "prompt05";
  } else if (50 < ageHolder && ageHolder < 111) {
    currentPromptHolder = "prompt06";
  } else if (ageHolder == 50) {
    currentPromptHolder = "prompt07";
  } else if (0 < ageHolder && ageHolder< 50) {
    currentPromptHolder = "prompt09";
  } else {
    window.alert("Oh come now, let\'s try this again...");
    currentPromptHolder = ageQuery();
  }
  console.log(currentPromptHolder)
  console.log(ageHolder)
  return currentPromptHolder;
}
function checkAnswerType(prompt,answer){
  if (prompt=="prompt02" && answer == "Y") {
    return 1
  } else if (prompt=="prompt03" && answer == "Y"){
    return 1
  } else if (prompt=="prompt03" && answer == "N"){
    return 1
  } else if (prompt=="prompt04" && answer == "S"){
    return 1
  } else if (prompt=="prompt05" && answer == "F"){
    return 1
  } else if (prompt=="prompt05" && answer == "D"){
    return 1
  } else if (prompt=="prompt08" && answer == "N"){
    return 1
  } else if (prompt=="prompt09" && answer == "B"){
    return 1
  } else {
    return 0
  }
}

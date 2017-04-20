

function getName(){
  name=prompt("Welcome to my Adventure, First.. please enter your name (Press OK to continue)", "Cam Elppa");
  return(name);
}

function playGame(name){
  alert(name + ", we are going to see if you have Extrasensory perception, or ESP. Press OK to continue..." );
  return(window.confirm("You are going to guess a number are you ready to Guess?"));
}

function playGuessNumber(tries){
  alert("Get Ready to play Guess the Number...");
  number = (Math.floor(Math.random() * 5))+1;
  console.log(number)

  var gameover=false;
  tries=0;
  while( !gameover) {
  guessNumber=parseInt(prompt("Please enter a number guess between 1-5", "0"));
  switch (guessNumber) {
    case 1:
        alert("one is the loneliest number");
      break;
    case 2:
        alert("The Animals went Two by Two");
      break;
    case 3:
        alert("The rule of three or power of three is a writing " +
        "principle that suggests that things that come in threes " +
        "are funnier, more satisfying, or more effective than other " +
        "numbers of things.");
     break;
    case 4:
        alert('The four cryptic words Donald Trump can’t stop saying"Make America Great Again."'  );
    break;
    case 5:
        alert("Tell them you got this game at the Five Finger Discount store");
    break;

    default:
      alert("You are a looser  You did not pick a number from 1-5   Try again");
    break;
  }
  tries++;
  console.log(guessNumber,number);
  if (guessNumber==number) {
    alert("Congratulations You got it.  It took you " + tries + " tries ");
    gameover=true;
  } else {
    alert("Sorry...you did not get it correct please try again");
    gameover=false;
  }

}
}

var name=getName();
if (playGame(name)) {
  /* user wants to play a game*/
  tries=playGuessNumber();
} else {
  /* user does not want to play a game */
  alert("You are a loser if you don't want to play yet- you are playing anyway...");
  tries=playGuessNumber();
}

if (tries > 2) {
  alert("I'm sorry I will now have to go, it took you too long to guess the number. Your adventure is now over.")
} else {
  alert("You are very clairvoyant. You guessed my number very fast.  Thank you for being part of my advanture.")

}

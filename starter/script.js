var election = 0;

var name = prompt("Hi there! What's your name?");

var party = prompt("Welcome to the 2016 presidential race, " + name + "! Would you like to run as a Democrat, Republican, or Independant (D, R, or I)?");

// Democratic pathway

while (election == 0) {

if (party == "D" || party == "d") {
  var netLove = prompt("Here we go! On a scale from 1 to 11, how much does the internet love you?");
    if (netLove < 5 && netLove > 0) {
      alert("Grassroots Democrats just aren't feeling you, " + name + ". You drop out before the South Carolina primary.")
      election = 1;
      }
    else if (netLove >= 7 && netLove <= 11) {
      alert("The people love you! You've won the Democratic nomination... and the White House.");
      election = 1;
      }
    else if (netLove < 7 && netLove >= 5) {
      alert("The Democratic base feels some love for you. You lose the primary, but you get on the ticket as Vice President, propelling the Democrats to victory. You're going to be our new Joe Biden, " + name + "!");
      election = 1;
      }
    else if (netLove < 1 || netLove > 11) {
      alert("That's not a valid response! Please enter a number between 1 and 11.");
      }

}

else if (party == "I" || party == "i") {
  var cashMoney = prompt("Interesting choice. Do you have $1 billion to self-fund your campaign (Y or N)?");
    if (cashMoney == "y" || cashMoney == "Y") {
      alert("You're rich enough to totally buy this election. Congratulations, President " + name + "!");
      election = 1;
      }
    else if (cashMoney == "N" || cashMoney == "n") {
      alert("Sorry, not enough cash to buy this election, " + name + ". You drop out of the race, but no one notices.");
      election = 1;
      }
    else {
      alert("That's not a valid response! Please enter either Y or N.");
    }
  }
}


/*else if (party == ("R" || "r") {
  var fightOrFlight = prompt("Donald J. Trump just called you stoopid, " + name + "! Do you fight, or ignore (F or I)?");
    if (fightOrFlight == "f" || fightOrFlight == "F") {
      var budget = prompt("Your spat with The Donald just made the front page of Drudge! Grassroots donations are pouring in online – do you keep attacking Trump, or move on (A or M)?");
        if (fight)
    }
    else if (fightOrFlight == "i" || fightOrFlight == "I" ) {
      alert("You're crashing in the polls with less than 1% of the vote. Try again in 2020, " + name "!");
      election = 1;
    }
  }
}

/*else {
  return prompt("You can't run as that, " + name + "! Please choose to run as a Democrat, Republican, or Independant.");
}*/

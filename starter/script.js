
// Storing Prompt information into Var yourTeam
var yourTeam = prompt("It's Sunday, Let’s play Football! Please select a football team");
/*Using Conditional statement to select your team's opponent. If you do not chose the Patriots as your team,
you will automatically have them as an opponent. Otherwise you will have the Steelers.
*/
if (yourTeam !== "Patriots" && yourTeam !== "patriots"){
  var yourOpponent = "Patriots";
}
else {
  var yourOpponent = "Packers";
}

var wins = prompt("It’s the last game of the season and you are playing the " + " " + yourOpponent + " " + "how many wins do you currently have? Please select any number from 0-15.");
wins = parseInt(wins);
  if (wins < 6) {
      var coinToss = prompt("The " + yourTeam + " " + "are the worst team in the NFL. I'm sorry you have no chance of making the playoffs with " + " " + wins + " " + "wins. However, we have to play anyway so let's start the game with the coin toss. Please select heads or tails" );
        if (coinToss === "heads" || coinToss === "Heads"){
          var coinTossW = prompt("You win the coin toss! Do you want to Recieve or Kick Off first? Please Select R for Recieve and K for Kickoff");
            if (coinTossW === "R") {
              var firstPlay = prompt("You decided to recieve the ball. The" + " " + yourOpponent + " " + "kick off. It's coming down at the 10 yard line. Do you call Fair Catch or try to Run for a Return? Please select F for Fair Catch and R for Return");
                if (firstPlay === "F") {
                  console.log("You start the ball at the 10 yard line. GOOD LUCK, that's terrible field coverage");
                }
                else if (firstPlay === "R") {
                  consolelog("You decided to run, your Kickoff returner starts running past the 15 yard line, then the 20, then the 25, and FUMBLES. It's recovered by the" + " " + yourOpponent + " " + " for a touchdown. Look's like it will be a long game.");
                }
            }
            else {
              console.log("You decided to Kick off first and the" + " " + yourOpponent + " " + "will start with the ball.");
            }
        }
        else if (coinToss === "tails" || coinToss === "Tails"){
          console.log("You lost the coin toss the" + " " + yourOpponent + " " + "decides to recieve first since your Defense has recently been ranked worst in the NFL and they believe that can score quickly. You kick off and the" + " " + yourOpponent + " " + "return the ball all the way for a touchdown! Yikes you are losing now!");
        }
        else {
          console.log("You refused to select heads or tails and forfeit so the" + " " + yourOpponent + " " + " automatically win");
        }
  }

  else if (wins < 8) {
      var coinToss = prompt("It would be very difficult for the" + " " + yourTeam + " " + " to make the playoffs, but it's possible! It's time to start the game with the coin toss. Please select heads or tails.");
        if (coinToss === "heads" || coinToss === "Heads"){
          console.log("You lost the coin toss" + " " + yourOpponent + " " + "decided to recieve first since your Defense has recently been ranked worst in the NFL they believe that can score quickly. You kick off and the" + " " + yourOpponent + " " + "return the ball all the way for a touchdown! Yikes you are losing now ");
        }
        else if (coinToss === "tails" || coinToss === "Tails"){
          var coinTossW = prompt("You win the coin toss! Do you want to Recieve or Kick Off first? Please Select R for Recieve and K for Kickoff");
            if (coinTossW === "R") {
              var firstPlay = prompt("You decided to recieve the ball. The" + " " + yourOpponent + " " + "kick off the ball. It's coming down at the 10 yard line. Do you call Fair Catch or try to Run for a Return? Please select F for Fair Catch and R for Return");
                if (firstPlay === "F") {
                  console.log("You start the ball at the 10 yard line. GOOD LUCK, that's terrible field coverage");
                }
                else if (firstPlay === "R") {
                  consolelog("You decided to run, your Kickoff returner starts running and finds a whole, he's passing the 15yard line, now 25, now 35, now 45 and is tackled at the 50 yard line." + " " + yourTeam + " " + " might just have a chance at making the playoffs!" );
                }
            }
            else {
              console.log("You decided to Kick off first and the" + " " + yourOpponent + " " + "will start with the ball.");
            }
        }
        else {
          console.log("You refused to select heads or tails and forfeit so the" + " " + yourOpponent + " " + " automatically win");
        }
  }


  else if (wins < 12){
    var coinToss = prompt("The" + " " + yourTeam + " " + "has a chance to make the playoffs! This game is important. It's all of nothing. It's time to start the game with the coin toss. Please select heads or tails.");
      if (coinToss === "heads" || coinToss === "Heads"){
        var coinTossW = prompt("You win the coin toss! Do you want to Recieve or Kick Off first? Please Select R for Recieve and K for Kickoff");
          if (coinTossW === "R") {
            var firstPlay = prompt("You decided to recieve the ball. The" + " " + yourOpponent + " " + "kicks off. It's coming down at the 10 yard line. Do you call Fair Catch or try to Run for a Return? Please select F for Fair Catch and R for Return");
              if (firstPlay === "F") {
                console.log("You start the ball at the 10 yard line. GOOD LUCK, that's terrible field coverage");
              }
              else if (firstPlay === "R") {
                consolelog("You decided to run, your Kickoff returner starts running and finds a whole, he's passing the 15yard line, now 25, now 35, now 45 and is tackled at the 50 yard line." + " " + yourTeam + " " + " might just have a chance at making the playoffs!" );
              }
          }
          else {
            console.log("You decided to Kick off first and the" + " " + yourOpponent + " " + "will start with the ball.");
          }
      }
      else if (coinToss === "tails" || coinToss === "Tails"){
        var coinTossL = prompt("You lost the coin toss the " + " " + yourOpponent + " " + "decided to kick off first and you will recieve the football. The" + " " + yourOpponent + " " + "kick off and the ball goes into your endzone. Your reciever decides to do a touchback and you start with the ball on the 20. For your first play do you want to Run OR Throw. Please select R for Run and T for Throw.");
          if (coinTossL === "R") {
            console.log("You decided to run and got 5 yards on the play.");
          }
          else if (coinTossL === "T") {
            console.log("You decided to throw and your quarterback found an open reciever. You get to the 35 yard line for a 15 yard pass. Great start to the game.");
          }
      }
      else {
        console.log("You refused to select heads or tails and forfeit so the" + " " + yourOpponent + " " + " automatically win");
      }
}


  else if (wins < 15){
      var coinToss = prompt("The" + " " + yourTeam + " " + "have the best record in the divison, let's bring the regular season to a close. It's time to start the game with the coin toss. Please select heads or tails.");
      if (coinToss === "heads" || coinToss === "Heads"){
        var coinTossL = prompt("You lost the coin toss the " + " " + yourOpponent + " " + "decided to kick off first and you will recieve the football. The" + " " + yourOpponent + " " + "kick off and the ball goes into your endzone. Your reciever decides to do a touchback and you start with the ball on the 20. For your first play do you want to Run OR Throw. Please select R for Run and T for Throw.");
          if (coinTossL === "R") {
            console.log("You decided to run and got 5 yards on the play.");
          }
          else if (coinTossL === "T") {
            console.log("You decided to throw and your quarterback found an open reciever. You get to the 35 yard line for a 15 yard pass. Great start to the game.");
          }
      }
      else if (coinToss === "tails" || coinToss === "Tails"){
        var coinTossW = prompt("You win the coin toss! Do you want to Recieve or Kick Off first? Please Select R for Recieve and K for Kickoff");
          if (coinTossW === "R") {
            var firstPlay = prompt("You decided to recieve the ball. The" + " " + yourOpponent + " " + "kicks off. It's coming down at the 10 yard line. Do you call Fair Catch or try to Run for a Return? Please select F for Fair Catch and R for Return");
              if (firstPlay === "F") {
                console.log("You start the ball at the 10 yard line. GOOD LUCK, that's terrible field coverage");
              }
              else if (firstPlay === "R") {
                consolelog("You decided to run, your Kickoff returner starts running and finds a whole, he's passing the 15yard line, now 25, now 35, now 45 and is tackled at the 50 yard line." + " " + yourTeam + " " + " might just have a chance at making the playoffs!" );
              }
          }
          else {
            console.log("You decided to Kick off first and the" + " " + yourOpponent + " " + "will start with the ball.");
          }
      }
      else {
        console.log("You refused to select heads or tails and forfeit so the" + " " + yourOpponent + " " + " automatically win");
      }
  }

  else if (wins === 15){
    var coinToss = prompt("You have an undefeated season so far! Let's see if you can keep that perfect record. It's time to start the game with the coin toss. Please select heads or tails.");
      if (coinToss === "heads" || coinToss === "Heads"){
        var coinTossW = prompt("You win the coin toss! Do you want to Recieve or Kick Off first? Please Select R for Recieve and K for Kickoff");
          if (coinTossW === "R") {
            var firstPlay = prompt("You decided to recieve the ball. The" + " " + yourOpponent + " " + "kicks off. It's coming down at the 10 yard line. Do you call Fair Catch or try to Run for a Return? Please select F for Fair Catch and R for Return");
              if (firstPlay === "F") {
                console.log("You start the ball at the 10 yard line. GOOD LUCK, that's terrible field coverage");
              }
              else if (firstPlay === "R") {
                consolelog("You decided to run, your Kickoff returner starts running and finds a whole, he's passing the 15yard line, now 25, now 35, now 45 and is tackled at the 50 yard line." + " " + yourTeam + " " + " might just have a chance at making the playoffs!" );
              }
          }
          else {
            console.log("You decided to Kick off first and the" + " " + yourOpponent + " " + "will start with the ball.");
          }
      }
      else if (coinToss === "tails" || coinToss === "Tails"){
        var coinTossL = prompt("You lost the coin toss the " + " " + yourOpponent + " " + "decided to kick off first and you will recieve the football. The" + " " + yourOpponent + " " + "kick off and the ball goes into your endzone. Your reciever decides to do a touchback and you start with the ball on the 20. For your first play do you want to Run OR Throw. Please select R for Run and T for Throw.");
          if (coinTossL === "R") {
            console.log("You decided to run and got 5 yards on the play.");
          }
          else if (coinTossL === "T") {
            console.log("You decided to throw and your quarterback found an open reciever. You get to the 35 yard line for a 15 yard pass. Great start to the game.");
          }
      }
      else {
        console.log("You refused to select heads or tails and forfeit so the" + " " + yourOpponent + " " + " automatically win");
      }
  }

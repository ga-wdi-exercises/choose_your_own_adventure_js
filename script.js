//console.log( "Welcome to the F.I.F.A. Womens World Cup! Team U.S.A. has made it to the finals." )
var opponent = prompt("Do you face up against England, Japan, or will you drop out? Enter 'E', 'J', or 'D'");
//England winner text
if (opponent === 'E'){
  console.log("England has put in their most aggressive players and theyve come out full force...");
  var side = prompt("Do you beef up on Offense or Defense? Enter 'O' or 'D'");
}
    if (side === 'O'){
        console.log("Alright, you are ready to attack. You get a fast ball near the goal but have to make a snap judgment. Do you shoot or pass to a player closer to the goal?");
        var shotpass = prompt("Enter 'S' or 'P'");
          if (shotpass === 'S'){
            console.log("Amazing shot!! You have scored and won the final match against England! Bow Down to Greatness!")
          }
            var tv = prompt("What do you want to say to your fans?!")
            console.log(tv);
          if (shotpass === 'P'){
           console.log("You blew your opportunity. Your teammate missed the pass and Japan scored the game winning goal.")
         }
}
    if (side === 'D'){
          console.log("Your defense is strong. But now there is a rogue English attacker charging towards the goal ready to score.");
            var defend = prompt("Do you square up and play your best man2man? Or ensure she does not score by fouling aggressively? Enter 'S' or 'F'");
              if (defend === 'S'){
                console.log("Incredible! Your solid defense has saved the game! You win in overtime, congratulations.");
                  var beers = prompt("One last question, how many beers you drinking tonight?");
                console.log(beers);
              }
              if (defend === 'F'){
                console.log("That risky move paid off. You went man down after receiving a red card, but Hope Solo saved the game. U.S.A. wins at last!");
        }
}

//Japan winner text
if (opponent === 'J'){
  console.log("Japan has come out ready to fight, the entire team is running full force towards your goal...")
  var move = prompt("Do you want to send your D towards them or fall back to get in place? /n Enter 'C' to charge them or 'F' to fall back")
}        if (move === 'C'){
          console.log("You charge towards the oncoming Japanese. Your aggression and persistence has paid off. U.S.A. wins the final!");
        if (move === 'F'){
          console.log("What a weak decision to make. You allowed the Japanese to take over and score. The momentum is theirs, and so is the game. You lose.");
  }

}
//Drop out text
if (opponent === 'D'){
  console.log("You are lame and will be refused reentry into the United States on your way back from Montreal. U.S.A. forfeits.")
}

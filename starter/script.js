var player = prompt("Choose your basketball skill level: Pickup (u), Pro (p)");
// pickup level 1
if (player == "u" ) {
  console.log("Pickup basketball superstar eh? ");
  var pickup = prompt("How often do you play? All day every day (1) When I can (2)");
    if (pickup == 1) {
      console.log("Let's see about that");
      var pickup2 = prompt("Go for the winning shot (1) Pass to the open man (2)");
      if (pickup2 == 1) {
        console.log("airball...and your team lost");
      }
      else if (pickup2 == 2) {
        console.log("airball...and your team lost");
      }
    }
    else if (pickup == 2) {
        var pickup2 = prompt("Go for the winning shot (1) Pass to the open man (2)");
        if (pickup2 == 1) {
          console.log("swish baby");
        }
        else if (pickup2 == 2) {
          console.log("your firned airballed...and your team lost");
        }
    }
}




// pro level 1
else if (player == "p") {
  console.log("So you think you're a pro. I'm doubtful");
  var pro = prompt("Are you sure? (Y/N)");
  // pro level 2
    if (pro == "y") {
      var i = 0;
      var round2 = "";
      var feeling = "Been better";
      while (i < 2) {
        pro2 = prompt("Lebron just dunked on you" + round2 + ". Over you to be more specific. How are you feeling? Fine (1)" +  feeling + "(2)");
        var round2 = " again";
        var feeling = "I'm done with this";
        i++;
      }
    // pro level 3
     if (pro2 == 1) {
        console.log("Maybe start looking at pickup leagues?");
        var pro3 = prompt("Looks like you got benched after that last one. Sorry bud. What's your next step? Stay positive? (1) Throw a chair at your coach (2) ");
          if (pro3 == 1) {
            console.log("You got released... Better luck next time");
          }
          else if (pro3 == 2) {
            console.log("Coached loved the passion and gave you more minutes... After you finish your 5 game suspension");
          }

      }
     else if (pro2 == 2) {
       console.log("glad you're being realistic");
       var pro3 = prompt("What's next? GA? (1) Youtube (2)");
        if (pro3 == 1) {
          console.log("Great choice. WDI is the way to go");
        }
        else if (pro3 == 2) {
          console.log("Great choice! Posting the videos of you getting dunked on to youtube made you millions");
        }
     }

    }
    // pro level 2
    else if (pro == "n") {
      console.log("glad you're being realistic");
       var pro2 = prompt("What's next? GA? (1) Youtube (2)");
        if (pro2 == 1) {
          console.log("Great choice. WDI is the way to go");
        }
        else if (pro2 == 2) {
          console.log("Great choice! Posting the videos of you getting dunked on to youtube made you millions");
        }
    }
}

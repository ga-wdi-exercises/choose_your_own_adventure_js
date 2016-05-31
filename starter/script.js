
//get name
var name = prompt("What is your name?", "name");

//greet
console.log("Hello, "+name+". Welcome to Washington, D.C. ");

var quadrant = prompt("Would you like to start in NW, NE, SE, or SW?").toLowerCase();

//NW DC results

if (quadrant == "nw") {
console.log("Lovely! NW is the largest quadrant in Washington, DC and there is much to see there.")

    var nwdcActivity = prompt("Where will we go first? (A) The National Zoo (B) The 9:30 Club (C) Georgetown, or (D) The National Mall?", "A, B, C, or D").toLowerCase();

    if (nwdcActivity =="a") {
    console.log("nice. Panda time!!!!!!");
    }

    else if (nwdcActivity =="b") {
      console.log("Who's playing tonight?");

      var concert = prompt("Enter a band name");
      console.log("Awesome, enjoy the "+concert+" show!")
    }

    else if (nwdcActivity =="c") {
      console.log("It's a lovely day to go shopping in Georgetown!");

        var cash = prompt("How much money is in your wallet?", "Enter amount in dollars");

        if (cash <500) {
          console.log("Sorry, not enough money, you can't afford Georgetown, peasant!")

        }

        else if (cash > 500) {
          console.log("Great, don't forget to hire a limo to bring home all your sweet loot!")

        }
    }

    else if (nwdcActivity == "d") {
      console.log("Great choice, go America!!!!")
    }



  while (transport !== "b") {
  var transport = prompt("How will you get there? Metro, Taxi, Bike, Walk (M/T/B/W)").toLowerCase();

          if (transport == "b") {
            console.log("Biking! Great choice. You enjoyed a wonderful workout and saw all of the wonderful sights that NWDC has to offer!");
          }

          if (transport == "m") {
            console.log("Uh oh! Metro caught on fire and you're either stranded forever or dead. Try again...");
          }
          else if (transport == "t") {
            console.log("You spent $20 to go 3 blocks, try again.");
          }
          else if (transport == "w") {
            console.log("It's far too hot to walk in DC in the summer...you fainted and were absorbed into a sinkhole on the National Mall - never to be seen again.");
          }
      }
}

//Code for NE DC results

else if (quadrant == "ne") {
console.log("Excellent! Northeast DC is home to many wonderful neighborhoods, breweries and restaurants");

    var havingHunger = prompt("Are you hungry? (Y/N)").toLowerCase();

      if (havingHunger == "y") {
      console.log("wonderful, where shall we dine?");

      var neFood = prompt("Choose a restaurant: (A) Toki Underground (B) Big Board (C) Union Market")

          if (neFood == "a") {
            console.log ("You put your name down at Toki, had some beers at the Pug and enjoyed some LIFE CHANGING ramen. way.to.go.")
          }
          if (neFood == "b") {
            console.log ("Burgers, always a good choice. Diggin' your style.")
          }
          if (neFood == "c") {
            console.log ("You overdid it a bit and bought food from at least 3 food stands, you're really full.")
          }
      }
}

//SE DC results

else if (quadrant == "se") {
console.log("Congratulations, you enjoyed a few beers at the Bluejacket Brewery and caught a baseball game at Nationals park!")

  var team = prompt("who did the Nationals play?")
  console.log ("The Nationals played the "+team+" and won 5-3")
}

//SW DC results

else if (quadrant == "sw") {
console.log("Southwest is the smallest quadrant in DC, but it still has a lot to offer.")

  var seafood = prompt("Do you like seafood? Y/N", "Y or N").toLowerCase();

  if (seafood==="y") {
    console.log("Great, you ate so many gosh darn oysters at the wharf, yo!!");
  }

  else if (seafood==="n"){
    console.log("Get out of DC, ya crazy!");
  }

}

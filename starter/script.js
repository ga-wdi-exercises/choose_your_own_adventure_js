

var name = prompt("What is your name?", "name");

console.log("Hello, "+name+". Welcome to Washington, D.C. ");

var quadrant = prompt("Would you like to start in NW, NE, SE, or SW?");

//Code for NW DC results

if (quadrant == "nw"||quadrant == "NW"||quadrant == "Nw") {
console.log("Lovely! NW is the largest quadrant in Washington, DC and there is much to see there.")

    var nwdcActivity = prompt("Where will we go first? (A) The National Zoo, (B) The 9:30 Club (C) Georgetown, or (D) The National Mall?", "A, B, C, or D");

    if (nwdcActivity == "A"||nwdcActivity =="a") {
    console.log("nice. Panda time!!!!!!");
    }

    else if (nwdcActivity == "B"||nwdcActivity =="b") {
      console.log("Who's playing tonight?");

      var concert = prompt("Enter a band name");
      console.log("Awesome, enjoy the "+concert+" show!")
    }

    else if (nwdcActivity == "C"||nwdcActivity =="c") {
      console.log("It's a lovely day to go shopping in Georgetown!");

        var cash = prompt("How much money is in your wallet?", "Enter amount in dollars");

        if (cash <500) {
          console.log("Sorry, not enough money, you can't afford Georgetown, peasant!")

        }

        else if (cash > 500) {
          console.log("Great, don't forget to hire a limo to bring home all your sweet loot!")

        }
    }

    else if (nwdcActivity == "d"||nwdcActivity =="d") {
      console.log("Great choice, go America!!!!")
    }



  while (transport !== ("b"||"B")) {
  var transport = prompt("How will you get there? Metro, Taxi, Bike, Walk (M/T/B/W)");

          if (transport == "b"||transport == "B") {
            console.log("Biking! Great choice. You enjoyed a wonderful workout and saw all of the wonderful sights that NWDC has to offer!");
          }

          if (transport == "m"||transport == "M") {
            console.log("Uh oh! Metro caught on fire and you're stranded. Choose again!");
          }
          else if (transport == "t"||transport == "T") {
            console.log("You spent $20 to go 3 blocks, try again.");
          }
          else if (transport == "w"|| transport == "W") {
            console.log("It's far too hot to walk in DC in the summer...you fainted and were absorbed into a sinkhole on the National Mall - never to be seen again");
          }
      }
}

//Code for NE DC results

else if (quadrant == "ne"||quadrant =="NE"||quadrant =="Ne") {
console.log("Excellent! Northeast DC is home to many wonderful sights, breweries and restaurants");

    var havingHunger = prompt("Are you hungry? (Y/N)");

    if (havingHunger == "y"||havingHunger =="Y") {
    console.log("wonderful, where shall we dine?");

    var neFood = prompt("Choose a restaurant: (A) Toki Underground (B) Big Board (C) Union Market")

    }
}

//Code for SE DC results

else if (quadrant == "se"||quadrant =="SE"||quadrant =="Se") {
console.log("Congratulations, you enjoyed a few beers at the Bluejacket Brewery and caught a baseball game at Nationals park!")

  var team = prompt("who did the Nationals play?")
  console.log ("The Nationals played the "+team+" and won 5-3")
}

//Code for SW DC results

else if (quadrant == "sw"||quadrant =="SW"||quadrant =="Sw") {
console.log("Southwest is the smallest quadrant in DC, but it still has a lot to offer.")

  var seafood = prompt("Do you like seafood? Y/N", "Y or N");

  if (seafood==="Y"||seafood==="y") {
    console.log("Great, go get some gosh darn oysters at the wharf, yo!!");
  }

  else if (seafood==="N"||seafood==="n"){
    console.log("Get out of DC, ya crazy!");
  }

}

// put code here!
while(adv !== 'y' || 'n') {
  var adv = prompt("Frodo, would you like to take the ring to Mordor? (Y/N)");

  if(adv == "y") {
    var sam = prompt("Will you take Sam with you? (Y/N)");

    if(sam == 'y') {
      var begin = prompt('Great choice! Are you ready to begin? (Y/N)');
    }
      if(begin === 'y') {
        alert("The journey to Mordor begins!");
        adv = y;
      }

      else if(begin === 'n') {
        days = prompt('How many days will it take you to be ready?');
        alert("We don't have " + days + " days we must leave tomorrow at the latest!");
        adv = y;
      }

    else if(sam == 'n') {
      who = prompt("Then who will you take with you?");
      alert(who + " is also a great choice, but I prefer Sam.");
      adv = y;
    }


  }

  else if (adv == "n") {
    var shire = prompt("Shall we have a cup of mead? (Y/N)");

    if(shire === 'y') {
      var numDrink = 0;
      while(numDrink < 3) {
        numDrink += 1;
        var noMore = prompt("Shall we have another? (Y/N)");
        if(noMore === 'y' ) {
          alert("I agree!")
        }

        else if(noMore === 'n') {
          alert("You're right.")
          numDrink = 3;
        }
      }
      alert("I think we've had enough!");
      adv = n;
    }

    else if(shire === 'n') {
      var fishing = prompt("Shall we go fishing at the pond? (Y/N)");
      if(fishing === 'y') {
        alert("I'll go grab my rod and meet you there.");
        adv = n;
      }

      else if(fishing === 'n') {
        alert("Fine, I'm just going to go fishing with Smeagol.")
        adv = n;
      }
    }
  }

  else {
    alert("You must enter yes or no");
  }
}

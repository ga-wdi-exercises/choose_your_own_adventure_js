var daysVacation = parseFloat(prompt("You’ve had a long year, it’s time for a vacation! How many days would you like to travel?"));

// figuring out the number of days for the trip
  for (daysVacation; daysVacation < 5; daysVacation++) {
    alert("Only " + daysVacation + " days? You should take another day off.")
  }
  if  (daysVacation > 15) {
    alert("Wow, you must have saved up a lot of vacation time! Let’s get started with planning your trip!");
    } else {
    alert("Sounds great!");
  }

// decide on a continent
  var whereTo = prompt("Would you like to go to Europe, Asia, Africa, or South America?");
    if (whereTo == "Europe") {
      var whereInEurope = prompt("Ohh, Europe! how about going to France or Italy?");
    } else if (whereTo == "Asia") {
      var whereInAsia = prompt("Great, how about going to China or India?");
    } else if (whereTo == "Africa") {
      var whereInAfrica = prompt("Great! So far we have a safari or bus tour of several countries. What will it be, bus or safari or neither?");
    } else if (whereTo == "South America") {
      var whereInSouthAmerica = prompt("Fabulous, how about going to Argentina or Brazil?")
    } else {
      alert("Please pick one of the offered locations.");
    }

      // Options for if user wants to go to Europe
      if (whereInEurope == "France") {
        alert("Oiu! Let’s get you set up with going to the Eiffel Tower and make some fine dining dinner reservations!");
      } else if (whereInEurope == "Italy") {
        alert("Time to get ready to see some fine art and enjoy that great Italian cuisine!");
      } else if (whereInEurope == "No") {
        var moreInEurope = prompt("How about going to Germany or England?")
      } else {
        alert("Sorry, but you didn't pick one of the possible locations!");
      }

        // More Options in Europe
        if (moreInEurope == "Germany") {
          alert("Time to eat brats and drink beer!");
        } else if (moreInEurope == "England") {
          alert("Great, let’s book your trip! Maybe you’ll get a chance to see the Queen of England!");
        } else if (moreInEurope == "No") {
          alert("Sorry, those are all the upcoming trips we have scheduled for Europe.")
        } else {
          alert("Sorry, you didn't select a valid option.")
        }

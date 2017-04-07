var name = prompt("What is your name?");
console.log("Hello, " + name);

var year = prompt("When would you like to go in?");
console.log(year);

if (year >= 2017) {
  console.log("I see you like to plan ahead. What do you like summer time, or spring time? **(S/P)**");

  var sumFall = prompt("What do you like summer time , or spring time? **(S/P)**");

  if (sumFall == "s") {
    console.log("summer - good choice, man. Do you like to go beach or clubs? **(B/C)**");

    var beachClubs = prompt("Do you like to go beach or clubs? **(B/C)**");

      if (beachClub == "b") {
        console.log("Beach - Good choice. Beach is better than being inside crowded clubs anyway");
      } else if (beachClub == "c") {
        console.log("Clubs are also fun but beach is better.");
      }

  } else if (sumFall == 'f') {
    console.log("Fall - not bad. Do you like fall colors? **(Y/N)**");

    var yesNo = prompt("Do you like pretty fall colors? **(Y/N)**");

    if (yesNo == "y") {
      console.log("Yes - Aww that's cute!");
    } else if (yesNo == "n") {
      console.log("No - I don't either!");
    }
  }
}

else if (year <= 2016) {
  console.log("Sorry tthis answer cannot be taken seriously!");
}

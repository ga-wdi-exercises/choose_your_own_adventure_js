// put code here!
var name = prompt("Welcome to 'Choose your own adventure'! What's your name?")

console.log("Ok " + name + "! Let's find a trip that suits your preferences..");

  var budget = prompt("What is your maximum budget?");
    if (budget <= 100) {
      console.log("Ah, " + budget + "? Well we will probably have to stick locally in the city");
      var hundredTrip = prompt("So, do you like (select letter): a. Sports?" + " b. Museums?" + " c. Theater/arts?");
        if (hundredTrip === "a") {
          var hundredSport = prompt("Ok, do you like (select letter): a. Baseball?" + " b. Basketball?" + " c. Hockey?");
            if( hundredSport === "a") {
              console.log("You've received tickets to the Washington Nationals!")
            } else if ( hundredSport === "b") {
              console.log("You've received tickets to the Washington Wizards!")
            } else if ( hundredSport === "c") {
              console.log("You've received tickets to the Washington Capitals!")
            } else {
              console.log("Sorry, that was not an option, please start over");
            };
        } else if (hundredTrip === "b") {
          var hundredMuseum = prompt("Ok, do you like (select letter): a. Art?" + " b. Science?" + " c. History?");
            if( hundredMuseum === "a") {
              console.log("You've been sent to the National Gallery!")
            } else if ( hundredMuseum === "b") {
              console.log("You've been sent to the Air and Space Museum!")
            } else if ( hundredMuseum === "c") {
              console.log("You've been sent to the National Museum of American History!")
            } else {
              console.log("Sorry, that was not an option, please start over");
            };
        } else if (hundredTrip === "c") {
          var hundredTheater = prompt("Ok, do you like (select letter): a. Comedy?" + " b. Music?" + " c. Drama?");
            if( hundredTheater === "a") {
              console.log("You've been booked a ticket for Avenue Q the next time it comes to town")
            } else if ( hundredTheater === "b") {
              console.log("You've been booked a ticket for The Roots Picnic next June")
            } else if ( hundredTheater === "c") {
              console.log("Collect your tickets for Les Mis next time it's in town!")
            } else {
              console.log("Sorry, that was not an option, please start over");
            };
        }
    }




//     var youngTrip = prompt("Are you looking to (select letter): a. Go abroad?" + " b. Stay in the country?" + " c. Stay in this city?");
//       if (youngTrip === "a") {
//         console.log("Fun! Let's send you abroad!");
//
//
//
//         var youngContinent = prompt("Do you prefer a specific continent (y, n)?");
//           if (youngContinent === "n") {
//             console.log("Ok great! Well we are going to send you to Antarctica, because teenagers are the worst and you belong there.")
//           } else if (youngContinent === "y") {
//
//           } else {
//             console.log("Sorry, please start over and choose 'y' or 'n'");
//           }
//       }
//
//
//
//
//
//
//
// } else if (age < 21 && age >18) {
//
// } else {
//
// }

//story adventure
// console.log("testing")
var name = prompt("What's your name?");
console.log("Hello," + name);

var vaclocation = prompt("Where would you like to travel?");
if (location == "North America" || location == "South America") {
  location = "cheap";
} else if ((location == "Europe") {
  location = "expencive";
} else {
  location ="Australia";
}
var familyMembers = prompt("How many members are going to travel with you?")
console.log("number of the travelers");

var season = prompt("When do you want to visit this destination? " + familyMembers + "and" + location );
console.log(season);
if (season == "summer") {
  prompt("The wanted package will be priced at $599.99");
  flyDelta();
} else if (season1 == "fall") {
  prompt("The wanted package will be around $499.99");
  flyAmericanAirlines();
} else {
  flySouthWest();
}
var airline = 0;
function flySouthWest(airline) {
  if (airline == 3) {
    prompt ("I think " + season + "would be the most expencive time to leave you'all'!");
    flyDelta();
  } else if (airline == 1) {
    var flyAmericanAirlines = prompt("They are the best at prices!");
    if (flyAmericanAirlines == "best airline") {
      prompt("You got the best prices.");
      flyAmericanAirlines();
    } else {
      flyDelta();
    }
  }

  var userAnswer = prompt("Would you like to leave at the begging  of the week? I've found some good prices, but you have to leave on Monday.");
  if (userAnswer == "yes") {
    console.log("Im sure you are going to enjoy this prices.")
  } else {
    console.log("All right, its your choice.")
  }
  function traveler() {
    name: "Mariana",
    contact: {
      email: ".......",
      phone: ".../.../....",
      address: " 113 15th street NW"
    }
    return travelerInfo;
  }
  function departure(price) {
    var day = "";
    switch( day ) {
      case "sun, mon, tue":
      console.log("Low prices on");
      break;
      case "wed, thu":
      console.log("mid prices on");
      break;
      case "fri,sat":
      console.log("High prices on");
      break;
      default:
      console.log("Low or High?");
    }
    return  answer;
  }
  departure("friday");

  var feedback  = prompt("Rate out of 10");
  if(feedback < '9') {
    console.log("Thank you for your business! Please, come again!");
  } else {
    console.log("We will do our best to improve your experience.");
  }

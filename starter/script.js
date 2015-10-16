var person = prompt("Welcome to the tour of the hippest neighborhood in DC, Columbia Heights! We are going to take an adventure through the best parts of the neighborhood. What is your name?");
var transportation = prompt("Nice to meet you " + person + ". Would you like to take the bus, or walk during your adventure today?"); //1st question
//option 1 -will be bus?
if (transportation == "bus") {
  //2nd question - cash or smarttrip
  var payment = prompt("Playing it safe i see. That's allright. Most city busses cost $1.75. Are you going to pay with your SmartTrip, or cash?");
  if (payment == "SmartTrip") {
    var buspay = prompt("Uh oh, looks like your SmartTrip is out of money. That won't do us any good. Let's add some money to your card. Do you want to add money at Metro or at a busstop?"); //3rd question
    if (buspay == "Metro") {
      alert("Uh oh! There was a mysterious bag left at the Columbia Heights metro station, so no one is allowed to enter or leave!!! NO bus riding for you today");
    } else if (buspay == "busstop") {
      alert("Trick question. There are no SmartTrip kiosks at busstops. Your adventure is OVER before it even began!");
    } else {
      alert("That is not a valid option! try again");
    }
  } //
  //SECOND PATH if choose cash
  else if (payment == "cash") {
    var paidwithcash = prompt("Great! We are on the bus on our way down 11th st. The sky is bright, no clouds in sight, and we are going to a local hangout, Meridian Pint. As you are approaching the door to go inside a HUGE dog starts barking. Are you going to pet the dog, or run away?");
    if (paidwithcash == "pet the dog") {
      alert("OOOOOH bad choice. The dog just bit you and now your adventure is over. Tough luck.");
    } else if (paidwithcash == "run away") {
      alert("RRUUUUUUNNN!!!!! Phew you got away just in time. Be more careful next time!");
    } else {
      alert("That is not a valid option! Please try again.");
    }
  }
  //else statement for Cash or SmartTrip
  else {
    alert("Well that's not an option. Let's try that again!");
  }
} else if (transportation = "walk") {
  var walking = prompt("Way to make the healthy choice. Walking is best for the environment AND your wallet! " + person + " , Do you want to walk to the Wonderland bar, or Sticky Fingers Bakery?");
  if (walking == "Wonderland bar") {
    var wonderlandbar = prompt("Here we are! But this place is crowded. It must be really hip. Should we site inside,  outside, or go somewhere else?");
    if (wonderlandbar == "inside") {
      alert("As you approach the hostess she says there aren't any seats. You should have tried to sit outside!");
    } else if (wonderlandbar == "outside") {
      alert("Congratulations. You have made it to the heart of Columbia Heights, sitting under the sun at the legendary Wonderland bar. Enjoy your cold beers, and come back and adventure any time.");
    } else if (wonderlandbar = "go somewhere else") {
      alert("You aren't willing to wait to get a table at the Wonderland? Geez. We're getting you on the next bus to Capital Hill ASAP");
    } else {
      alert("That's not an option. Try again");
    }
  } else if (walking == "Sticky Fingers Bakery") {
    var sfbakery = prompt("Smart decision. How much money are you willing to spend?");
    if (sfbakery > 10) {
      alert("YUMM!! You have just bought 5 dozen cinnamon rolls. Delish! Enjoy your vegan treats, and come back any time!");
    } else if (sfbakery < 10) {
      alert("A little cheap i see. But don't worry. You just bought a beautiful piece of Vegan coffee cake. Enjoy! Thanks for visitng Columbia Heights!");
    } else {
      alert("Sorry! Value doesn't exist. Try again!");
    }
  } else {
    alert("Thats not an option, holmes. Try it again.");
  }
} else {
  alert("That is not an option! Let's try that again");
}
// put code here!

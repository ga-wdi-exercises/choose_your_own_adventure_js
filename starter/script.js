console.log('Hello World!');

// var image = new image();
// image.src= '../static_shock.jpg';

alert("Welcome to Dakota City! Home of our young hero and favorite Meta-Human, Virgil Hawkins/Static!");
alert("Come join him on his adventures around Dakota City!");

var userInput = prompt("Looks like Gotham City's infamous clown is on the loose in Dakota City creating a bit of trouble with the Meta-Breed Gang! Will you help Static battle and catch them? Enter 'yes' to continue!");
    if (userInput == "yes") {
      console.log("user entered adventure");
}

alert("While on patrol, Static picks up a distress call on a nearby police radio. 'Calling all units, Calling all units! Various reports of the Meta-Breed Gang wreaking havoc downtown with what appears to be a Clown. Units report!'");

var userInput = prompt("Static is live on the scene of the mayhem and sees an unexpected Dark Knight! Will you help Static team up with Batman and bring the Meta-Breed Gang and the Joker to Justic? Enter 'yes' to continue!");
    if (userInput == "yes") {
      console.log("user is working with Batman");
    }

alert("Joker: 'Hotstreak why don't you show Bats and Electric Boy what some real heat can do!'");

var userInput = prompt("Hotstreak charges at Static! Choose one of the following moves to help Static. Choose 'Ball Lightning to knock Hotstreek to the ground' or Choose 'Force Field to protect Static'");

if (userInput == "Ball Lightning") {
  console.log("Knocked Hotstreak off his feet");
}
  else {
    console.log("Hotstreak blocked!");
  }

var userInput = prompt("Cool it! Hothead! Batman watch out! Oh no, Talon is flying towards Batman to use her Sonic Scream! To help Batman 'Enter Belt to have swing through the air and knock Talon to the floor.' 'Enter Charge to let Static hit Talon with a Taser shock.'");

if (userInput == "Belt") {
  console.log("Point for Batman");
}
  else {
    console.log("Shock to System");
  }

alert("Joker:'Mwahahahaa Time's are starting to get INTERESTING! Ebon, you're going to let Bats and Charger boy win this one or are you going to get even!'");

var UserInput = prompt("Ebon:'Static, I'm tired of your interfering boy, it's lights out for you! Oh, no! Ebon is covering Static in an envelope of Shadow! Slowly suffocating him. 'Enter Pulse to have Static use his Electromagnetic Pulse to weaken Ebon'. 'Enter Rescue to have Batman tase Ebon and attempt to rescue Static before it's too late!'");

if (userInput == "Pulse") {
  console.log("Static is free");
}
  else {
    console.log("Static barely makes it");
  }

  alert("Batman: 'Joker you're pathetic, using these kids to fight your battles for you, fight me like man!'");

  var userInput = prompt("Joker can't resist Batman's bait, he starts to throw some homemake concoctions to both Batman and Static.'Enter FIGHT to battle Joker'. 'Enter NO to quit'");

  var Batman = fight;
  switch(Batman().getFight()) {
    case 0:
      fight = "Jumps out of toxins' way";
      break;
    case 1:
      fight = "Punch in shoulder";
      break;
    case 2:
      fight = "Falls to floor";
      break;
    case 3:
      fight = "Passes out";
  }

  var Joker = fight;
  switch(Joker().getFight()) {
    case 0:
      fight = "Throws balls of toxins";
      break;
    case 1:
      fight = "Falls back";
      break;
    case 2:
      fight = "Throws metal object";
      break;
    case 3:
      fight = "Throws gas bomb";

  }

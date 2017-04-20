console.log("test")

var name = prompt("Hey are you new to Baltimore? Let's hang out, what's your name?");


  if (name) {var howWasted = prompt("cool " + name + ", how many drinks you plan on drinkin tonight?")};

    if (howWasted <= 2) { var chillNight = prompt("Ok do you want to stay in? Or we could go Downtown and catch a play or something (Stay in / Downtown)")};
    if (howWasted <= 8 && howWasted > 2) { var partyNight = prompt("Cool let's go to a bar or something (Crown, Club Charles, Floristree)")};
    if (howWasted > 8) { alert("Okay we're not doing that. We're staying in and drinking La Croix"); var stayHome = prompt("Do you want to binge watch Netflix or have some friends over to play Settlers of Catan? (Netflix/Catan)")};


if (chillNight === "Stay in") {
  var stayHome = prompt("Do you want to binge watch Netflix or have some friends over to play Settlers of Catan? (Netflix/Catan)");
}

else if (chillNight === "Downtown") {
  downTown = prompt("Ok so there's an art opening at Current Gallery, a play at 5th Dimension, and a movie screening at Psychic Readings. (Current Gallery, 5th Dimension, Psychic Readings)");
  document.getElementById('message').innerHTML = "When you're alone, and life is making you lonely, you can always go... Downtown";
}

if (stayHome === "Netflix") {
  var xFiles = prompt("How many episodes of Xfiles do you want to watch?");
}
else if (stayHome === "Catan") {
 var catanFriends = prompt("Which friends should we invite? (Film friends, Boardgame friends)");
}
if (catanFriends === "Film Friends") {alert("You win and have a good time. 8/10")};
if (catanFriends === "Boardgame friends") {alert("You lose but have a good time. 8/10")};

// else if (stayHome !== "Catan" || stayHome !== "Netflix" ) {stayHome = prompt("Do you want to binge watch Netflix or have some friends over to play Settlers of Catan? (Netflix/Catan)")};

var xtext;
switch(xFiles) {
  case "0":
  xtext = "ok well then we're not doing anything I guess. 1/10";
  break;
  case "1":
  xtext = "OUTCOME: the evening ends awkwardly after 1 episode. 4/10";
  break;
  case "2":
  xtext = "OUTCOME: you get to see an episode with the smoking man, excellent. 7/10";
  break;
  case "3":
  xtext = "OUTCOME: you've watched the perfect amount of X-files. 8/10";
  document.getElementById('message').innerHTML = "The Truth is Out There";
  break;
  default:
  xtext = "Well this is ridiculous. 1/10"
  break;
}


var downTown;
var text;
switch(downTown) {
  case "Current Gallery":
    text = " you hang out with some friendly faces and sip some wine in exchange for a 'suggested donation'. You've picked the cheapest fun option. 10/10.";
    break;
  case "5th Dimension":
    text = " Oh no! you missed the play because you never make it to stuff on time, you end up at Floristree. 6/10";
    break;
  case "Psychic Readings":
    text = "You catch the film series here because it starts late. You picked the 2nd cheapest fun option. 9/10";
    break;
    default:

}
if (typeof text != "undefined") {alert(text)};

  if (partyNight === "Crown") {
    var crown = prompt("Do you go into the Red or Blue room? (Red / Blue)")
  }
  if (crown === "Red") {alert("You check out a band you've been meaning to see: 8/10")}
else if (crown === "Blue") {alert("You check out some comedy in the blue room: 6/10")}
  if (partyNight === "Club Charles") {
    var clubChuck = prompt("Do you sit in the back or in the dark room in the corner? (Back / Dark room)")
  }
  if (clubChuck === "Back") {alert("You get sucked into some acquaintance's birthday party and have an awkward time: 3/10")};
  if (clubChuck === "Dark room") {alert("You have an engaging conversation with a close friend: 10/10")};
  if (partyNight === "Floristree") {
    var florisTree = prompt("Do you go get beers up the street first or bum some off friends? (Store / Friends)")
  }
  if (florisTree === "Store") alert("Oh no! you've been robbed. This was the absolute worst. 0/10");
  if (florisTree === "Friends") alert("They're actually glad you took one since they're not gonna finish all these anyway. But the sound is kind of bad and you don't enjoy the show. 6/10");


// else if (stayHome) {
//   prompt(stayHome)
// }



  // {var whereto = prompt("cool " + name + ", where do you want to go tonight? (Crown, Club Charles, 5th Dimension)")};

  // if (whereto == "Crown") {
  //   prompt("all right, cool");
  // }
  // else {whereto = prompt("what?");

  // }





 // ("Cool " + name ", where you want to hang out tonight?");}
 // else {console.log("error")};

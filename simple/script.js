// put code here!

var name = prompt("Hey! What's your name?");
while (!name) {
  name = prompt("Don't be shy! Who are you?");
}

var toPlayOrNotToPlay = confirm("Great, " + name + "! Would you like to play a game?")

if (!toPlayOrNotToPlay) {
  alert("Okay, BYE!")
} else {
  alert("Okay!");

  var response = parseInt(prompt("What year would you like to visit?"));

  if (response >= 2016) {
    response = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)").toString();

    if (response == "B") {
      response = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)");

      if (response == "S") {
        alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
      } else if (response == "R") {
        alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.")
      } else {
        huh();
      }
    } else if (response == "G") {
      response = prompt("Griff is asking you if you are in, or out. What do you say? (I/O)");
      if (response == "I") {
        alert("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.");
      } else if (response == "O") {
        alert("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");
      } else {
        huh();
      }
    } else {
      huh();
    }

  } else if (response >= 1985) {
    response = prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?").toString();

    alert("Welcome to the future, " + response);
  } else if (response >= 1955) {

  } else {

  }

}

function huh(){
  alert("Huh? Looks like something went wrong with the time machine. Refresh and start over!")
}

//I could use something like this to validate responses. Didn't have time to implement though...

// function validate(arr) {
//   while (!arr.index(response))
// }

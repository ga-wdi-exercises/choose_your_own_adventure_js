// put code here!

var name = prompt("Hey! What's your name?");
while (!name) {
  name = prompt("Don't be shy! Who are you?");
}

var toPlayOrNotToPlay = confirm("Great, " + name + "! Would you like to play a game?")

if (!toPlayOrNotToPlay) {
  alert("Okay, BYE!")
} else {
  alert("Okay!);

  var response = prompt("Captain " + name + ", your ship has just received an emergency broadcast signal from system B425. It's only a few lightyears away. Should we investigate?")

  if (!response) {
    alert("Good idea. It's probably just a false alarm, or worse, space pirates. Better not to meddle.");
    alert("THE END");
  } else {
    alert("Let's do this! ")
  }
}

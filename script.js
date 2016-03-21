//name request//
var person = prompt("Please enter your name", "Kevin Hart");

if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hey! " + person + "! Are you ready for a ride along with Ice Cube?";
}

var text;
var favSong = prompt("What's your favorite Ice Cube Song");
switch(favDrink) {
    case "It was a good day":
        text = "West Coast Classic!";
        break;
    case "Check Yo Self":
        text = "That's the second hit single from the predator";
        break;
    case "Let me ride":
        text = "Really? Are you sure that's an Ice Cube song?";
        break;
    default:
        text = "I have never heard of that one..";
        break;
}

var x=prompt(" Some trivia before we go. What is Ice Cube's real name?");
if(x=== "OShea Jackson")
 {
alert("Yay, Yay!");
} else {
    prompt("Bye Felicia, try again");
}

var answer = prompt("Do you want to go to the north, east, west, or south of the city?")
switch (answer){
  case 'north':
  console.console.log('The northern part of the city has the best restaurants');
  case 'east':
  console.console.log('The eastern part of the city is where we can really take on crime');
  case 'west':
  console.console.log('The western part of the city is where the beach is.');
  case 'south':
  console.console.log('The southern part of the city is where we can grab a drink.');
}
var direction = confirm("Did you chose north/east or south/west?");
if (direction === north) {
    x = "The ride ends here";
} else {
    x = "Awesome! Let's get some food and a few drinks.";
}

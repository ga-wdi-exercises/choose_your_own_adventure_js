var buffer = function() {
  console.log("**************************");
}

alert('CRASHHHHHHHHHHHH');
buffer();
console.log("You awake to a sudden crash");
buffer();
var wake = prompt("Do you wake up and check it out or go back to sleep? (Please enter 'awake' or 'sleep')");

if (wake === 'awake') {
  console.log("You jump out of bed run out of the room. You hear a noise coming from the kitchen and the bathroom.");
  var momentOfTruth = prompt("Will you run to the bathroom or kitchen? (Please enter 'bathroom' or 'kitchen')");
  console.log("You creep towards the " + momentOfTruth);;
  buffer();
  if (momentOfTruth === 'kitchen') {
      console.log("You come into the kitchen yielding the first availiable blunt object you could find, prepared to beat that ass like the warrior you are. You come into battle only to find a mouse. A talking mouse.");
      var talkingMouse = prompt("What are you looking at clown? Which of these cheeses are my favorite? Please choose 'cheddar', 'brie', or 'pepper-jack'") ;
      console.log(talkingMouse + " you say.");
      buffer();
  } if (talkingMouse === 'brie') {
      console.log("Mouse says 'see ya later sucker' and then you wake up");
    } else if (talkingMouse === 'cheddar' || 'pepper-jack') {
      console.log("You're wack fool! You always have been, peace!");
      }
    }
  else if (wake === 'sleep') {
    console.log("Well.... you wake up anyways because now your door opens. It's the grim reaper.");
    var deathBed = prompt("How old are you? If you aren't too old or too young, I won't take your life. Please enter a number.");
    buffer();
    } while (deathBed < 30 && deathBed > 50) {
      console.log("Keep rockin' in the free world brother. You think to yourself 'what a chill ass grim reaper'.")
      } if (deathBed < 30) {console.log("You're too young to die.");
        buffer();
        } else if (deathBed > 50) {console.log("You can't die because you are already dead.")}

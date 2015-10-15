//=== Program wide functions ===
var badResponse = function() {
  console.log("You put in something besides a correct response, try again.");
};
var response = 0;

//=== Main Story logic ===
console.log("You wake up alone on the side of the road in a place you’ve never been. It’s dark out. You think you see a faint light off in the distance away from the road.");
response = prompt("Head towards it? (Y/N)");

if (response == "Y") {
  console.log("The ground is uneven and traveling is slow. You push onwards hoping it’s someone that might be able to help. You trip and fall, landing next to a leather-bound journal.");
  response = prompt("Pick it up? (Y/N)");

  if (response == "Y") {
    console.log("The journal is magic and turns you into a tree. You spend the rest of your days as an Oak overlooking the woods.");
  }

  else if (response == "N") {
    console.log("You continue on slowly making your way towards the light as the brush you are traveling through steadily gets thicker. The strength of the light slowly grows. You come to the edge of a clearing and peer towards a house. You’ve gone too far to turn back now. A scary woman answers the door.");
    response = prompt("Turn and run, stay and find out more, or punch her? (run/stay/punch)");

    if (response == "run") {
      console.log("You run away and get lost and die.");
    }

    else if (response == "stay") {
      console.log("She let’s you in serves you hot chocolate and then takes you home in the morning.");
    }

    else if (response == "punch") {
      console.log("She rips your face off.");
    }

    else {badResponse();}
  }

  else {badResponse();}
}

else if (response == "N") {
  console.log("You wait by the side of the road for what seems like forever then, out of nowhere a car pulls right ahead of you.");
  response = prompt("Do you go to it? (Y/N)");

  if (response == "Y") {
    console.log("You get in and they take you home. Good thing you didn’t go to the light.");
  }

  else if (response == "N") {
    console.log("You slowly freeze to death.");
  }

  else {badResponse();}
}

else {badResponse();}

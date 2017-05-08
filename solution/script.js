//solution by nayana

// put code here!
//welcome player
alert("My name is Rick Grimes. I have some questions for you.");
//how many walkers have you killed?
var walkersKilled = parseInt(prompt("How many walkers have you killed?"));
var peopleKilled = parseInt(prompt("How many people have you killed?"));

if(peopleKilled >= walkersKilled) {
  var why = prompt("Why? To 'save lives' or because you're a 'jerk'?");

    if(why === 'save lives') {
      //destination 1
      alert("We don't believe you. Go away!");
    } else {
      //destination 2
      alert("You're a bad person. You don't get to live.");
    }
} else {
  var nextStep = prompt("You have three options. You can help 'fight' the oncoming invasion, take 'shelter' in a cell, or 'leave' the camp?");
    if(nextStep === 'shelter') {
      //destination 3
      alert("You got a cold. Carol dragged you outside and burned you alive.");
    } else if(nextStep === 'leave') {
      //destination 4
      alert("You ran into a horde of zombies and got eaten.");
    } else {
      var numBullets = 5;
      while (numBullets > 0) {
        var action = prompt("The governor is attacking. You have " + numBullets + " bullets left. Do you want to 'shoot' or 'run?'");
         if(action === 'run') {
           if(numBullets >= 3) {
             //destination 5
             alert("There were still too many enemies left. Your escape attempt failed. The governor killed you.");
             break;
           } else if(numBullets <3) {
             //destination 6
             alert("You found a clear path. You and the group got away.");
             break;
           }

         } else {
           numBullets -= 1;
           if(numBullets === 0) {
             //destination 7
             alert("You ran out of bullets but died a hero's death.");
             break;
           } else{
             alert("You've got one of the governor's men but there are more coming.");
           }

         }

      }
    }

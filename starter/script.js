// put code here!
var buffer = function() {
  console.log("* * * * * * * * * *")
}

console.log("It is 9:54AM at General Assembly. You have just finished your first mini-lesson of the day when your instructor tells you that there will be a fire drill at 10AM.");
console.log("Do you: [leave] early and try to get to the elevator first, [wait] until the alarm sounds and try to get some extra work done, or go to the [bathroom] because you really should have before class started?");

var fireDrill = prompt("Make a decision! [leave] early, [wait] around, or go to the [bathroom]?")
buffer();
  if (fireDrill === "leave") {
    console.log("You rush toward the elevator! It seems like everyone else had the same idea, but you manage to squeeze into an elevator car moments before the doors close.")
    console.log("As you exit the building, you hear the fire alarm go off. Just in time! ")
    buffer();
    console.log("Now that you're outside, it's time to head over to the designated fire drill area to wait. But, no one from your class seems to know where it is!")
    console.log("A security guard shouts at you to start moving away from the building. You spot from the corner of your eye a group of people walking down the street who look like they know what they're doing.")
    console.log("It seems like the group knows where they're going, but you can probably just wander around for a few minutes by yourself.")
    var drillArea = prompt("[follow] the group or go [solo]?");
      if (drillArea === "follow") {
        buffer();
        console.log("You follow the group and stand around at Thomas Circle a few blocks away. Unfortunately for the group, no one seems to have an idea when to go back.")
        var waiting = true;
        while (waiting) {
          var stopWait = prompt("Stop waiting? [y]/[n]");
          if (stopWait === 'y') {
            waiting = false;
            //end scenario 1
            console.log("You decide to head back and all make it back to class okay.")
          }
          else {
            console.log("You decide to wait around a little longer.")
          }
        }
      }
      else if (drillArea === "solo") {
        buffer();
        console.log("You decide to walk around on your own for a while.")
        console.log("As you're wandering around, a panhandler approaches you and asks you for money.")
        var donate = prompt("How much do you give?");
        donate = parseInt(donate);
        if (donate > 0) {
          //end scenario 2
          console.log("The panhandler thanks you for your generous donation. You walk back to class with a spring in your step.")
        }
        else {
          //end scenario 3
          console.log("The panhandler takes out a knife and shanks you. Well, not really - he sort of just shakes his head at you and walks on. You walk back to class, feeling bored by the events of this morning.");
        }
      }
  }
  else if (fireDrill === "bathroom") {
    console.log("You head over to the bathroom to take care of a little... business.")
    buffer();
    console.log("Just as you're finishing up on the toilet, you notice there isn't any toilet paper in the dispenser!")
    console.log("BZZT! Just your luck, the fire alarm begins ringing too! What an unfortunate series of events.")
    var toiletPaper = prompt("Find some toilet paper? [y]/[n]");
    var washHands = prompt("Wash your hands? [y]/[n]")
    if (toiletPaper === 'y' && washHands === 'y') {
      console.log("Congratulations for accomplishing basic human hygiene!");
      console.log("You manage to get out of the building and back to class.")
    }
    else {
      console.log("Wow, really? You're pretty gross.");
      console.log("Well, you manage to get out of the building okay. Class resumes as normal.");
    }
  }
  else {
    console.log("You figure that there's a pretty mad rush to leave and decide to get started on homework. What a good student!")
    buffer();
    console.log("Just as you're starting to get into the groove of things, the fire alarm sounds and it's time to go.")
    console.log("As you begin to make your way towards the stairs, you suddenly notice that there's an actual fire!")
    console.log("You consider your options:")
    var fireChoice = prompt("[run] for the stairs, find a fire [extinguish]er, or stop, drop and [roll]?")
    if (fireChoice === "run") {
      console.log("You run for the stairs, only to trip and fall face first down the stairs and black out...")
    }
    else if (fireChoice === "extinguish") {
      console.log("You grab the nearest fire extinguisher and spray the foam on the fire. Phew, that was close!")
    }
    else if (fireChoice === "roll") {
      console.log("Well, you aren't on fire yet... but you stop, drop and roll anyway. What next?")
      var stopDropRoll = prompt("Calmly [leave] through the nearest exit or try to be a [hero]?")
      if (stopDropRoll === "leave") {
        console.log("You make a calm exit and let the fire department handle the fire. Class is cancelled for the rest of the day, but you get tons of homework to make up for it.")
      }
      else if (stopDropRoll === "hero") {
        console.log("You try to attempt a heroic action, but the fire is far too big. RIP")
      }
    }
    }

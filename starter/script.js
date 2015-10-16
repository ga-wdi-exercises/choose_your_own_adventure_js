var name = prompt("Hello! What's your name?");
console.log("Hello, " + name + " and welcome to your nature adventure! To make sure that you are properly outfitted for your adventure today, please let us know what type of shoes you have with you.");
var shoes = prompt("Are you wearing hiking boots, running shoes, or sandals?");
if (shoes === "hiking boots") {
  console.log("Great job coming prepared! Would you rather hike a trail with lots of elevation gain and a great view, or a less difficult trail?");
  var trail = prompt("More elevation or less elevation?");
  if (trail === "more elevation") {
    console.log("Great choice, this trail has great views. Unfortunately the trail guards are a bit frail, and you topple into a ravine. I hope that you have cell service up here.");
  } else if (trail === "less elevation") {
    console.log("Awesome, the less difficult trail takes you to a beautiful meadow where you can relax and enjoy your picnic before heading back down the mountain.");
  } else {
    var trail = prompt("More elevation or less elevation? Enter your choice so you can get started!");
  }
} else if (shoes === "running shoes") {
  console.log("Okay, let's head off down this nature trail. Uh oh, you hear a brown bear crashing around in the underbrush! Do you stand and fight, or run away?");
  var bear = prompt("Fight or run away?");
  if (bear === "Fight") {
    console.log("Brave choice! Grab a big stick, and get ready to scream your head off at this bear! Oh wait, it was just your friends catching up with you from the parking lot. You'll never live this down!");
  } else if (bear === "run away") {
    console.log("Running away seemed like the best choice at the time, but you've stumbled right into the bears' den! Let's see how fast those running shoes can take you in the opposite direction. Good luck!");
  } else {
    var bear = prompt("Will you fight the bear or run away? Enter your choice so you can get started!");
  }
} else if (shoes === "sandals") {
  console.log("Too bad you didn't come better prepared! As you set off in your sandals, you quickly discover that you're not making very good time.");
  var miles = prompt("How many miles do you think you're up to today?");
  if (miles < 5) {
    console.log("Good idea, let's not push it! A few more miles down the trail, you come to a babbling brook, so you kick off your sandals and relax before heading back to the trailhead.");
  } else if (miles >= 5 && miles < 10) {
    console.log("Just when your feet are starting to complain, you stumble across a comfy campsite just off the trail. Take a break and enjoy your lunch before heading back to the trailhead.");
  } else if (miles >= 10) {
    console.log("Okay, that's ambitious! After a few hours, the sun begins to set and it's getting more difficult to see the trail; do you make camp for the night or press on?");
    var camp = prompt("Make camp or press on?");
    if (camp === "make camp") {
      console.log("Great idea, let's get the campfire started and break out the s'mores!");
    } else {
      console.log("Pressing on for five more miles in the dark with blisters on your feet, you resolve to plan a beach vacation for next year.");
    }
  } else {
    prompt("To play this game, please choose hiking boots, running shoes, or sandals.");
  }
}

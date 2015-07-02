var buffer = function(){
  console.log("*******************************")
}

var name = prompt("what is your name");
console.log("Hi, " + name +".");
buffer();
var nFLQB = prompt("Have you ever wanted to be an NFL Quarterback?\n Yes = y\n No = n");

if (nFLQB === "n") {
    console.log("Hmmmm. You must not be a football fan. But that's okay.");
    buffer();
// need to finish out path with two more questions
}

if (nFLQB === "y") {
  console.log("Great! Me too. My favorite QB is RG3. So let's pretend you're RG3 for a play.");
  buffer();
  var timeLeft = prompt("It's 3rd down and 7 at your own 35 yard line.\nYou've broken the huddle and walk up to the line.\nBefore you hike the ball, you look at the play clock.\nHow much time is left on the clock?\n Seconds - 1 to 24");
  //console.log(timeLeft);
  if (timeLeft > 5){
    console.log("Congrats on not taking forever to get to the line.");
    buffer();
    var playCall = prompt("You snap the ball. What would you like to do?\n Handoff\n Pass");
  } else if (timeLeft <= 5){
    console.log("Time is running out. You should have moved faster.");
  }
}

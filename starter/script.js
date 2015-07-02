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
  if (timeLeft > 5){
    console.log("Congrats on not taking forever to get to the line.");
    buffer();
    var playCall = prompt("You snap the ball. What would you like to do?\n Handoff\n Pass");
      if (playCall == "handoff" || "Handoff") {
        console.log("Good idea to hand it off to Alfred.");
        buffer();
        var howManyYards = prompt("It looks like there's a big hole for Alfred to run through.\nHow many yards does he run?\n Please enter a number.");
          if (howManyYards > 75){
            console.log("Congrats! Alfred scored a touchdown!");
            console.log("Though it seems you have confused him with Forrest Gump.");
            buffer();
          } else {
            while (howManyYards < 65) {
              console.log("Cmon, have more faith in your running back.");
              buffer();
              howManyYards = prompt("How many yards do you think he'll run.");
            }
          console.log("Congrats! Alfred scored a touchdown. Go celebrate with the team!!!");
          buffer();
        }
      } else {
        console.log("You drop back to pass. You survey the field.");
        buffer();
        var receiver = prompt("There are three receivers on the play.\nWho do you want to throw it to?\n Desean, Pierre or Jordan");
          if (receiver == "Desean" || "desean"){
            console.log("Desean catches your great throw and sprints down the sideline.");
            console.log("It looks like he might score. But wait!");
            console.log("He starts to celebrate too early and fumbles at the 5 yard line.");
            console.log("Shake your head in disbelief as you head to the sideline.");
            buffer();
          } else if (receiver == "Pierre" || "pierre"){
            console.log("Congratulations. Pierre caught your pass.");
            console.log("Three yards down the field. On 3rd and 7.");
            console.log("Looks like it's time to punt.");
            console.log("Shake your head in disbelief as you head to the sideline.");
            buffer();
          } else if (receiver == "Jordan" || "jordan"){
            console.log("Your pass to Jordan was intercepted.");
            console.log("Did you not see the defender right there in the middle of the field?");
            console.log("Shake your head in disbelief as you head to the sideline.");
            buffer();
          } else {
            console.log("Looks like you took too long to throw it and got sacked.");
            console.log("Shake your head in disbelief as you head to the sideline.");
            buffer();
          }
      }
  } else if (timeLeft <= 5){
    console.log("You really should have moved faster.");
    buffer();
      var callTimeout = prompt("Time is running out. You have two timeouts. Do you call one?\n Yes = y\n No = n");
        if (callTimeout == "y"){
          console.log("You have called a timeout. At least it wasn't the worst thing that could have happened.");
          console.log("Shake your head in disbelief as you head to the sideline.");
          buffer();
        } else {
          console.log("You don't get the ball snapped in time. Delay of game.");
          console.log("Shake your head in disbelief as you walk an extra 5 yards back to the huddle.");
          buffer();
        }
  }
}

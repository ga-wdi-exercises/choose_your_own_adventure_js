// put code here!

var name = prompt("What is your name?")
if (name === "Arash") {
  console.log("You cannot play your own game!")
}
else {
  console.log("Welcome " + name);
}
 var answer = prompt("Do you know music theory? yes or no?")
 if (answer === "yes" || answer === "Yes") {
    console.log("Let's play the game!");
  }
  else {
  console.log("Go learn it first! then come back!")
  }

  var halfNote = prompt("How many beat is the half note? 2 or 4?");
  if (halfNote == "2") {
    console.log("You are a mestro!");
  }
  else {
    console.log("No! nice try though! Let me ask you more questions");
  }

  var beethoven = prompt("I see you are a fan of Beethoven! How many symphonies did he write?")
  if (beethoven === "9") {
    console.log("Correct! I bet you heard the ode to joy a million times by now!");
  }
  else {
    console.log("Come on! Haven't you heard the ode to joy yet?!! That's your homework for tonight!");
    }
  var seeing = prompt("If you want to see the circle of the fifth, type yes!");
  if (seeing === "yes") {
    var fifth = ["C", "G", "D", "A", "E", "B", "F#", "Db", "Ab", "Eb", "Bb", "F"];
for(var i=0; i<=fifth.length; i++) {
  console.log(fifth[i]);
  }
}

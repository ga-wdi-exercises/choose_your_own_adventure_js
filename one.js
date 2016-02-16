var gender = prompt("are you a boy or a girl?");

if(gender === "boy" || gender == "girl"){
    alert("Let's play a game");
  }
else{
  alert("Start Over");
 document.write("Entered a failed value, try again");
}


if(gender === "boy" || gender === "girl" ){

var name = prompt("what is your name" + " " + gender + "?");

alert("okay" + " " + name + " " + "let's pick a side!");

var story1 = prompt(name + " " + "choose between scaryside, goodside, or badside")

if(story1 === "goodside"){
  alert("Go to the bottom of the page and pick goodside!")
}
else if(story1 === "badside"){
  alert("Go to the bottom of the page and pick badside!")
}
else if(story1 === "scaryside"){
  alert("Go to the bottom of the page and pick scaryside!")
}
else{
  document.write("Entered a failed value, try again");
}
}

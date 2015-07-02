// put code here!
//Any path the user goes down must ask them at least 3 questions(more if you want!)

//a minimum of 7 destinations
// For at least 1 of the questions asked, more then 2 possible user responses
//at least one integer response and one string response
//at least one functional loop in the code base


var name = prompt("What is your name?");
if (name !=null){
  console.log("Hello" + name + ". Let's play basketball game!");
} else {
  console.log("You are not allowed to play. Come back later!");
}

console.log ("You are a basketball player. It is 4th quarter and your team is \n
losing by 1 point. Only a few seconds left.")

var time = prompt ("How many seconds are left?");
while (0 < time < 5 ) {
  console.log("Your team and you have enough time! Let's find a winning way!");
}

console.log ("Your team manager lets you take a last shot.")

var shot = prompt("Do you take this shot? Choose 'yes' or 'no'");
if (shot === "yes" || shot === "Yes"){
  console.log("Great! You have 2 options.");

  var options = prompt("Layup or Jumpshot. Please choose 'l' or 'j'");
  if (options === "l" || options === "L") {
    console.log ("Wow. Your try succeeded, and your team won!!")
  } else {
    console.log ("Ooops, the ball did not even touch the rim... Team lost..")
  }

  console.log ("You are a champion! Congratulations!! This is your 5th championship titles.")
  var champsnum = prompt ("Do you want to see what year you won titles? Choose 'y' or 'n'");
  if (champsnum === "y" || champsnum === 'Y'){
    var 5th = [2002, 2006, 2009, 2012, 2015]
    for (i in 5th){
      console.log(i)
    }
  } else {
    console.log ("Okay. It was a great season. Go to nice vacation!!")
  }
}
else {
  console.log ("That's too bad. Your teammate missed a last shot, and your team lost");
}

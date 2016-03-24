var ready = confirm("If you are ready to play click ok!");
console.log(ready);

if (ready === true) {
  var player = prompt("What is your name?");

  if (player) {
    alert("Hello, " + player + " nice to meet you!");
  }

  var firstQuestion = prompt("What is the first thing you do to make a copy of your home work repository from git hub?");

  if (firstQuestion == "fork" || firstQuestion == "Fork") {
    alert("you are corect " + player);
  } else {
    alert("Try again");
  }

  //first question end here, 


  var secondQuestion = prompt("What  is the next step after forking in order to be able to create a new local git repository copied from a remote one?");

  if (secondQuestion == "git clone <url>" || secondQuestion == "Git clone <URL>") {
    alert("you are corect " + player);
  } else {
    alert("Try again");
  }

  var thirdQuestion = prompt("What  is the next step after forking in order to be able to create a new local git repository copied from a remote one?");

  if (thirdQuestion == "git clone <url>" || thirdQuestion == "Git clone <URL>") {
    alert("you are corect " + player);
  } else {
    alert("Try again");
  }

  var forthQuestionqustion = prompt("What is the next steep after cloning the url?");

  if (forthQuestion = "cd")
    alert("correct! keep going " + player);
}

var fifthQuestion = prompt("What comes after cd?");

if (fifthQuestion == "make changes and save it") {
  alert("you are corect " + player);
} else {
  alert("Try again");
}

var sixthQuestion = prompt("What is the next steep");

if (sixthQuestion == "git add <filenames>") {
  alert("excelent! " + player);
} else {
  alert("Try again");
}

var seventhQuestion = prompt("What is the next steep");

if (seventhQuestion == "git commit -m “your message") {
  alert("excelent! " + player);
} else {
  alert("Try again");
}

var eighthQuestion = prompt("What is the next steep");

if (eighthQuestion == "git push") {
  alert("excelent! " + player);
} else {
  alert("Try again");
}

var ninthQuestion = prompt("What is the last steep");

if (ninthQuestion == "git pull") {
  alert("excelent! " + player);
}

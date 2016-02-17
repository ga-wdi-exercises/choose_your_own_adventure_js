
var jOrQ = "Shall your first line be a Joke or a Question? (enter 'J' or 'Q')"
var q = "Please type your opening question"
var j = "Please type your opening joke"
var leftSwipeCounter = 1


function runStory () {
  var swipeDirection = prompt("You come across a cute girl on tinder. You can either swipe left or right (enter 'l' or 'r')");
  if (swipeDirection == "r" || swipeDirection == "R") {
      rightSwipe();
  } else if (swipeDirection == "l" || swipeDirection == "L") {
      leftSwipe ();
  } else {
      console.log ("Sorry that's not an acceptable response");
      runStory();
    }
}

function leftSwipe () {
    var swipeDirection = prompt("Good thing there are many fish in the Sea! You come across another a cute girl on tinder. You can either swipe left or right (enter 'l' or 'r')");
    leftSwipeCounter++;
    if (swipeDirection == "r" || swipeDirection == "R") {
        rightSwipe();
    } else {
        while (leftSwipeCounter < 3) {
        leftSwipe();
        }
    console.log ("Just kidding about the number of fish in the sea, there are only 3... Try not being so picky next time.");
    }
}

function rightSwipe () {
  var firstMove = prompt("Congratulations! You are a match. Do you want to respond Immediately or wait a little while for your relationship to Marinate? (enter 'I' or 'M')");
  if (firstMove == "i" || firstMove == "I") {
    var firstLine = prompt("Shall your first line be a Joke or a Question? (enter 'J' or 'Q')");
    if (firstLine == "j" || firstLine == "J") {
      prompt (j);
      console.log("No response...Looks like your joke fell flat ya idiot. Better luck next time...");
    } else {
      prompt (q);
      var secondLine = prompt("She responds: I like an inquisitive man but decline to answer your question." + "You respond: (1) Then may I inquire if you'd like to grab some dinner? (2) Now I really need to know your answer (enter '1' or '2')");
      if (secondLine == "1") {
          console.log("She responds: Absolutely! Name the time and place!");
      } else {
          console.log("No response...");
      }
    }
  } else {
    var waitTime = prompt("How long will you choose to wait? (type time in hours)");
    if (parseInt(waitTime) < 2) {
      var firstLine2 = prompt(jOrQ);
      if (firstLine2 == "j" || firstLine2 == "J") {
          prompt (j);
          console.log("She responds: Not chill, have a good life");
      } else {
        prompt (q);
        console.log("She responds: Great question! I'll answer it over dinner!");
      }
    } else if(parseInt(waitTime) < 24) {
      var firstLine3 = prompt(jOrQ);
      if (firstLine3 == "j" || firstLine3 == "J") {
        prompt (j);
        console.log("That's not funny, but I like your effort. Here's my number: 202-432-1278");
        console.log("Disclaimer: that is a made-up number")
      } else {
        prompt (q);
        console.log("She responds: Bye Felecia.");
      }
    } else {
      var firstLine4 = prompt(jOrQ);
      if (firstLine4 == "j" || firstLine4 == "J") {
        prompt (j);
        console.log("She Responds: lol are you a comedian?!? Tell me more of your jokes over some drinks!");
      } else {
        prompt (q);
        console.log("She responds: Unsubscribe");
      }
    }
  }
}

runStory();

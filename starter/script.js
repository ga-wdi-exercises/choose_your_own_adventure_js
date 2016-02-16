
function startStory2 () {
  var swipeDirection = prompt("Good thing there are many fish in the Sea! You come across another a cute girl on tinder. You can either swipe left or right (enter 'l' or 'r')");
  return swipeDirection;
}

function rightSwipe () {
  var firstMove = prompt("Congratulations! You are a match. Do you want to respond Immediately or wait a little while for your relationship to Marinate? (enter 'I' or 'M')");
  if (firstMove == "i" || firstMove == "I") {
    var firstLine = prompt("Shall your first line be a Joke or a Question? (enter 'J' or 'Q')");
    if (firstLine == "j" || "J") {
      prompt ("Please type your opening joke");
      console.log("No response...Looks like your joke fell flat ya idiot. Better luck next time...");
    } else {
      prompt ("Please type your opening question");
      console.log("She responds: I like an inquisitive man but decline to answer your question.");
      var secondLine = prompt("(1) Well then, may I inquire if you'd like to grab some dinner? (2) Now I really need to know your answer (enter '1' or '2')");
      if (parseInt(secondLine) == 1) {
        console.log("She responds: Absolutely! Name the time and place!");
      } else {
        console.log("No response...");
      }
    }
  } else {
    var waitTime = prompt("How long will you choose to wait? (type time in hours)");
    if (parseInt(waitTime) < 2) {
      var firstLine2 = prompt("Shall your first line be a Joke or a Question? (enter 'J' or 'Q')");
      if (firstLine2 == "j" || "J") {
      prompt ("Please type your opening joke");
      console.log("She responds: Not chill, have a good life");
      } else {
        prompt ("Please type your opening question");
        console.log("She responds: Great question! I'll answer it over dinner!");
      }
    } else if(parseInt(waitTime) < 24) {
      var firstLine3 = prompt("Shall your first line be a Joke or a Question? (enter 'J' or 'Q')");
      if (firstLine3 == "j" || "J") {
        prompt ("Please type your opening joke");
        console.log("That's not funny, but I like your effort. Here's my number: 202-432-1278");
        console.log("Disclaimer: that is a made-up number")
      } else {
        prompt ("Please type your opening question");
        console.log("She responds: Bye Felecia.");
      }
    } else {
      var firstLine4 = prompt("Shall your first line be a Joke or a Question? (enter 'J' or 'Q')");
      if (firstLine4 == "j" || "J") {
        prompt ("Please type your opening joke");
        console.log("She Responds: LOL are you a comedian?!? Tell me more of your jokes over some drinks!");
      } else {
        prompt ("Please type your opening question");
        console.log("She responds: Unsubscribe");
      }
    }
  }
}

function runStory () {
  var swipeDirection = prompt("You come across a cute girl on tinder. You can either swipe left or right (enter 'l' or 'r')");
  if (swipeDirection == "l" || swipeDirection == "L") {
    var leftSwipeQty = 1;
    while (leftSwipeQty < 3) {
      leftSwipeQty ++;
      startStory2();
    }
    console.log ("Just kidding about the number of fish in the sea, there are only 3... Try not being so picky next time.");
  } else if (swipeDirection == "r" || swipeDirection == "R") {
    rightSwipe();
  } else {
    console.log ("Sorry that's not an acceptable response")
    startStory();
    }
}

runStory();

// put code here!
let userResponse = prompt("Enter a number between 1 and 50.");

if (userResponse <= 25 && userResponse > 0) {
  userResponse = null;
  userResponse = prompt("You wake up in a empty room. The walls are white and there is no door. You notice that there is a (t)ile on the left wall that is loose, a red (b)utton on the floor in the corner, and that you are feeling really (s)leepy. What do you do? (t/b/s)");

  if (userResponse.toLowerCase() === 't') {
    let keypadEnt = true;
     userResponse = prompt('You start to pry up the tile. You find there is a hole behind with a keypad and a post it note.  The post-it note has the word "Jabroni" inscribed on it.  What do you type on the keypad?');

    while (keypadEnt === true) {
      if (userResponse === 'Jabroni') {
        keypadEnt = false;

        userResponse = prompt('You hear a unlocking sound  behind the wall. A cleverly disguised door opens and Neo from the matrix is standing there.  He asked you if you want the (r)ed pill or the (b)lue pill. (r/b)');

        if (userResponse.toLowerCase() === 'b') {
          userResponse = null;
          userResponse = prompt('You wake up in your bed. It was all a dream. You look at your alarm clock and realize its time to get up for work.');
        } else if (userResponse.toLowerCase() === 'r')
          userResponse = null;
          userResponse = prompt('You take the red pill. You realize that is just a Jolly Rancher.  Neo laughs and you follow him into the matrix.');
      } else {
        userResponse = prompt("The keypad's screen says \"You have entered in the wrong password, try again.\"");
      }
    }
  } else if (userResponse === 'b') {
      userResponse = null;
      userResponse = prompt("You walk over to the button. Do you (p)ress the button, or do you stand up and start (y)elling?");

    if (userResponse === 'p') {
      userResponse = null;
      userResponse = prompt("You press the button and then you hear, \" That's a wrap for today!\" You just completed the final scene for the television show you star in.  Time to go to the bar and celebrate!");

    } else if (userResponse === 'y'){
      userResponse = null;
      alert("You start yelling and out of no where you hear someone yell \"Cuttttt!\" You just upset the director of the television show that you star in.  Apparently that was not in the script. Your work day just got longer.");

    }

  } else if (userResponse.toLowerCase() === 's') {
    userResponse = null;
    userResponse = prompt("You take a nap. After some time, you wake up and realize that you were dreaming the whole time.  It's lunch time and you want to eat _______.");
    alert("You make " + userResponse.toLowerCase() + " for lunch!");
  }
} else if (userResponse <= 50 && userResponse > 25) {
  userResponse = null;
  userResponse = prompt('You are watching TV.  Your receiver only can pick up 5 channels, what channel do you choose? (7/10/13/18/22)');

  switch (parseInt(userResponse)) {
    case 7:
    case 13:
    case 18:
      alert('You find that the TV channel is just static.  Just as you are about the change channels, some words start to form.  It says "Get a hobby." Well, you are freaked out. So you take it\'s advice and join a pilates class.');
      break;
    case 10:
      userResponse = prompt('It\'s your favorite cooking show!  You watch for awhile and realize the you are now hungry.  You call up your friends and they say they want to go to McDonalds.  You say "(y)es" or "(n)o?" (y/n)');

      if (userResponse === 'y') {
        alert("You leave to meet your friends at McDonalds");
      } else if (userResponse === 'n') {
        alert("You decide that you need to watch your figure.  So you sit this one out and end up taking a nap.");
      }
      break;
    case 22:
      alert("Your favorite movie is showing. You can't believe your luck.  You watch the movie!");
      break;
    default:

  }

}

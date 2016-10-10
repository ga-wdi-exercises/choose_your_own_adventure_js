confirm('Are you ready to play?');


console.log("You're unhappily commuting along on the Metro's finest car from the 80s on track work laid down in the 70s. Nothing could possibly go wrong on such a well-designed and maintained system. Suddenly the announcer chimes on the speaker to inform everyone that the train will be holding at the current station because of rats on the track protesting unsanitary living conditions.");


guessNumber();

console.log("You are too tired for this crap. You have the option of staying on the train or exiting.")
var stayOrExit =  prompt("'stay' or 'exit'");

switch(stayOrExit) {
  case 'stay':
    stayPath();
    break;
  case 'exit':
    exitPath();
    break;
  default:
  console.log("One of the voices in your head says something amusing and you're hauled away by MPD.");
}

function stayPath() {
  console.log("Someone starts making awkward small talk about how bad metro is and you decide to:");
  console.log("agree politely, use the headphones Apple blessed you with, pick up a baseball bat")
  var choice =  prompt("'agree' 'headphones' 'baseball'");

  switch(choice) {
    case 'agree':
      console.log("You're trapped with painful small talk for the entire trip.");
      break;
    case 'headphones':
      console.log("You drown out everything with some J. Cole. The train catches fire as some of it leaks out of your speakers. Everybody experiences a painful death but it still doesn't distract away from the fact that J. Cole went platinum with no features.");
      console.log("Cole World")
      break;
    case 'baseball':
      console.log('Everyone goes outside and enjoys a boring, wholesome American past-time.');
      break;
    default:
      console.log("You just sway mindlessly developing a taste for human flesh.");
    }
}


function exitPath() {
  console.log("You stand up, gather your things, and exit the training. Off top, the day is starting on some bullshit. After exiting the gates, you have the option to take the stairs, the other stairs formed by a non-working escalator, or the elevator. Metro PD is side-eying the hell out of you with a hand inching closer to their weapon.");

  var choice =  prompt("'stairs' 'escalator' 'elevator'");

  switch(choice) {
    case 'stairs':
      stairsPath();
      break;
    case 'escalator':
      console.log('You slipped on a puddle of pumpkin spice latte and break your neck.');
      break;
    case 'elevator':
      console.log('A metro employee forgot to hang a warning sign. You step into an empty shaft and Metro raises fares to cover an elevator repair surge. You died for the greater good.');
      break;
    default:
      console.log("'Rebel scum!', shouts the MPD officer as they open fire and ending your suffering.");
  }

}

function stairsPath() {
  console.log("Your deodorant gives up with a quiet sigh of defeat as you make it out onto the humid street. You see a whimsical arrangement of bus bays. You're just in time to see two buses of the line you need perform rolling stops and pull off. You reach into your pocket for your cell phone and are greeted by a low battery, an uber icon, or the option of calling a friend.");

  var choice = prompt("'bus' 'uber'  'friend'");
  switch(choice) {
    case 'bus':
      busPath();
      break;
    case 'uber':
      console.log("You reach your destination safely. Surge pricing had a special promotional price of only your first born.");
      break;
    case 'friend':
      console.log('Your friend never shows up. Thanks, Larry. You rent some goons online with bitcoins to tune Larry up.');
      break;
    default:
      console.log("You just stroll off into the pub and phone ahead sick. The only way to win is not to play.");
  }
}

function busPath() {
  console.log("You stand a healthy distance away from someone arguing with pigeons loudly about emacs and vim. Finally the bus arrives. You can pay with cash or your smart card and board. You also have the option of sticking it to the system and sneaking on.");
  var choice = prompt("'cash' 'card' 'sneak'");
  switch(choice) {
    case 'cash':
      console.log("You realize you don't have any money and try to explain to the driver but it's too late. In Trump's America, it's illegal to not have money and you are quickly arrested and thrown in jail. You spend the rest of your life being forced to write fake Amazon reviews.");
      break;
    case 'card':
      console.log("The last thing you hear is a loud buzzing sign about insufficient funds because metro costs like 20 dollars a day. Metro PD executes you on the spot, at least you don't have to suffer the metro system anymore");
      break;
    case 'sneak':
      console.log("You casually elbow aside children and elderly people and force your way through the open door at the rear. You make it to your destination a little late but no worse for wear.");
      break;
    default:
      console.log("The last thing you hear is a loud buzzing sign about insufficient funds because metro costs like 20 dollars a day. Metro PD executes you on the spot, at least you don't have to suffer the metro system anymore");
  }
}

function guessNumber() {
  var delayed = Math.floor((Math.random() * 30) + 1);
  var guess = parseInt(prompt("How long will you be delayed?  (1-30)"));

  while (guess != delayed)  {
    if ( guess > delayed) {
      guess =  parseInt(prompt("That seems too long guess again."));
    } else if ( guess < delayed) {
      guess = parseInt(prompt("You are not that lucky. It will be longer. guess again"));
    } else {
      console.log("You're clearly too high to care about such earthly matters.");
    }
  }

console.log(`great job! You are delayed ${delayed} hours`);
}

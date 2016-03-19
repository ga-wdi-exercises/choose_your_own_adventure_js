// one hipster's tale

// functions:
function getAdventure(adventureState) {
//   input: adventureState, player info
//   effect: display current adventure
  console.log(adventureText[adventureState]);
};

function getResponse(adventureState) {
//  input: question/response key, playerinfo
//  returns: option letter
  getAdventure(adventureState);
  var a = '';
  console.log(adventureQ[adventureState]);
  while (a != 'a' && a != 'b' && a != 'c') {
    a = prompt(adventureChoices[adventureState]);
  };
  if (a === 'a') {
    player['hipsterIndex'] += 3;
  }
  return a;
};

// game text/info:
var playerTypes = {
  'a': 'Foodie',
  'b': 'Hipster',
  'c': 'Crafter',
  'd': 'Normcore'
};

var adventureText = {
  'greeting': '"Hi there! I\'m Jans. Welcome to square."\nA small man with elaborate facial hair and a plaid shirt stands before you.\nLooks like you\'re new around here. This is a pop-up art space incubator slash maker innovation lab slash artisan food market."\nPeople mill about around you, sipping beers and looking at tasteful home goods.',
  '1': 'It looks like there are lots of things to see around here. Some sort of bicycle race/Instagram contest is taking place in the outdoor plaza before you. Live music is drifting from a small stage. There are also some food vendors set up in tents.',
  '1a': 'You walk over to the race. Men and women on fixies veer around each other casually, popping wheelies and taking selfies. A woman at a small booth smiles and asks if you would like to enter.',
  '1aa': 'You hop on your bike and take out your phone. Just as you post your first pic, a man in suspenders, taking a selfie of himself eating a piece of bacon, rides across your path and you are forced to veer to the right. Suddenly, there is a huge ramp before you.',
  '1aaa': 'You skid into a perfect wheelie, and dust clouds form around you. Suddenly, the sky opens up and a ray of sunlight shines upon you. You look inscrutibly at your phone and take a selfie. A wave of gasps go through the spectators, and as you coast back to the booth the greeter says "OMG, you just got like, 10,000 likes in 20 seconds!!! Obv you win!!!" but you\'re just so cool that you coast away to your next awesome adventure.',
  '1aab': 'Oh no, trying IS for posers! You wipe out and break all of your bones.',
  '1ab': 'She smiles and points you toward the spectator area. There are some cool looking people over here.',
  '1aba': 'You take some pictures of yourself. Man, you look cool. Then you go home. Alone.',
  '1abb': 'Turns out, she\'s super cool. You go and get messed up on craft beers and gin drinks and become super best friends. High five!!!',
  '1b': 'Looks like some band called "unrepentant cephalopod" is playing. You hear someone nearby explaining that ambient shoegaze is basically all they listen to anymore, but that they\'re a little disappointed to see it selling out like this. A tall, thin man on stage whispers cryptically into a microphone.',
  '1ba': 'Yeah, just slowly swaying back and forth. So cool. An attractive person of the opposite gender, wearing a cardigan and glasses, blushes and asks nicely if they can make out with you.',
  '1baa': 'Aw yeah! You make out super hard and then go get ice cream. So awesome.',
  '1bab': 'The attractive person shrugs and stammers away, never to be seen by you again. Good going.',
  '1bb': 'You start dancing and yelling "woooo", undetracted by the lack of enthusiasm around you.',
  '1bba': 'A few people around you start dancing, and soon most of the crowd is nodding along with the music. A few songs later, the main band comes on and you have an awesome time jamming out.',
  '1bbb': 'You immediately fall and die. Your ghost watches sadly as Jans carries your broken body away. Good job, bro.',
  '1c': 'It\'s food time! You walk over to the food tents.',
  '1ca': 'You take your golden fried food on a stick and sit down.',
  '1caa': 'You take several carefully styled pictures and upload the best one. When you finally start eating everything immediately falls off the stick into the dirt. Oh well. Totes worth it.',
  '1cab': 'Nom nom nom. You sit back in a food coma and fall asleep. When you wake back up cloaked hipsters are dancing around you. Jans steps forward and smiles. "So gullible," he says thoughtfully, "You just didn\'t know the secret to our success-- blood ritual sacrifice. Keeps us agile, keeps the creativity flowing." As the hipsters close the circle around you, you slip into sweet unconsciousness. Well, that was a weird ending.',
  '1cb': 'You sit down with your sandwich.',
  '1cba': 'You eat your sandwich, go home, and go to bed early. Really thought that place was going to be more interesting.',
  '1cbb': 'As you cut the first bite, sauce squirts everywhere and messes up all your clothes. Dang. You sigh and go home sadly.'
};

var adventureQ = {
  '1': 'Where would you like to go first?',
  '1a': 'Are you in?',
  '1aa': 'What do you do?',
  '1ab': 'Do you want to try to talk with anyone?',
  '1b': 'Rock out?',
  '1ba': 'Make out with attractive person?',
  '1bb': 'Crowdsurf?',
  '1c': 'What would you like?',
  '1ca': 'Instagram time?',
  '1cb': 'Use a fork?'
};

var adventureChoices = {
  '1': 'a) Check out the race\nb) Listen to some music\nc) Feeling hungry',
  '1a': 'a) Totes, let me grab my bike\nb) Uh, maybe not',
  '1aa': 'a) Eh, trying is for posers\nb) Take the ramp. This is going to be amazing.',
  '1ab': 'a) Nah, just going to take a few selfies here\nb) Sure, that woman with pink hair looks cool',
  '1b': 'a) Just going to stare at the ground and slowly sway back and forth\nb) Woo! Party on!',
  '1ba': 'a) Yeah, sure\nb) Sorry, not a big fan of makeouts',
  '1bb': 'a) Nope, not gonna do that\nb) Awwwwww yes',
  '1c': 'a) Deep fried brussels sprouts wrapped in bacon on a stick\nb) Bahn mi',
  '1ca': 'a) Obvi\nb) Nah, I\'m super hungry, no time for that nonsense',
  '1cb': 'a) No\nb) Yeah, can\'t get sauce all over these sweet clothes'
};

// initialize playerstate and get intro
var player = {};
getAdventure('greeting');

// get player name and class
player['name'] = prompt("What do you go by?");
console.log('"Welcome, ' + player['name'] + ', we\'re so glad you could join us. So what are you into?"');
player['class'] = prompt("Please choose:\na) 'I've been into charcuterie lately'\nb) 'Uh, taking pictures of food and riding my fixie'\nc)'Mostly just repurposing thrift pieces for my etsy store'\nd)'Uh, I'm not really a hobby person'");
//easier way to parse class?
console.log("'Ah, a " + playerTypes[player['class']] + "! Excellent!'");
console.log('"One more question-- on a scale from 1 to 10, how amazing are The Shins?"');
player['hipsterIndex'] = parseInt(prompt("Please enter a number from 1 to 10."));
console.log('"Great, enjoy your time here!"');
if (player['class'] === 'd') {
  player['hipsterIndex'] -= 10;
}
else {
  player['hipsterIndex'] += 5;
}

// ask first question


var choiceOne = getResponse('1');
if (choiceOne === 'a') {
  var choiceTwo = getResponse('1a')
  if (choiceTwo === 'a') {
    var choiceThree = getResponse('1aa')
    if (choiceThree === 'a') {
      getAdventure('1aaa');
    }
    else if (choiceThree === 'b') {
      getAdventure('1aab');
    }
  }
  if (choiceTwo === 'b') {
    var choiceThree = getResponse('1ab')
    if (choiceThree === 'a') {
      getAdventure('1aba');
    }
    else if (choiceThree === 'b') {
      getAdventure('1abb');
    }
  }
}
if (choiceOne === 'b') {
  var choiceTwo = getResponse('1b')
  if (choiceTwo === 'a') {
    var choiceThree = getResponse('1ba')
    if (choiceThree === 'a') {
      getAdventure('1baa');
    }
    else if (choiceThree === 'b') {
      getAdventure('1bab');
    }
  }
  if (choiceTwo === 'b') {
    var choiceThree = getResponse('1bb')
    if (choiceThree === 'a') {
      getAdventure('1bba');
    }
    else if (choiceThree === 'b') {
      getAdventure('1bbb');
    }
  }
}
if (choiceOne === 'c') {
  var choiceTwo = getResponse('1c')
  if (choiceTwo === 'a') {
    var choiceThree = getResponse('1ca')
    if (choiceThree === 'a') {
      getAdventure('1caa');
    }
    else if (choiceThree === 'b') {
      getAdventure('1cab');
    }
  }
  if (choiceTwo === 'b') {
    var choiceThree = getResponse('1cb')
    if (choiceThree === 'a') {
      getAdventure('1cba');
    }
    else if (choiceThree === 'b') {
      getAdventure('1cbb');
    }
  }
}
// ending and score assignment
console.log("Your hipster index is: " + player['hipsterIndex']);
if (player['hipsterIndex'] >= 19) {
  console.log("Someone pops out of the bushes and gives you an ultra rare microbrew cause you're just so cool.")
}

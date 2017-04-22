// This allows me to avoid repetition in many of the events.
var reset = {y: 'start', n: 'quit'};

// This master function processes and navigates between the events.
function navigate(e) {
  switch (e) {
    case 'quit':
      return;
    case 'play':
      return play();
      break;
    default:
      var input = prompt(events[e].text).toLowerCase();
      if (events[e].choices.hasOwnProperty(input)) {
        return navigate(events[e].choices[input]);
      }
  }
  return navigate(e);
}

// This monstrosity encodes the events and the relationships between them.
var events = {
  // Asks whether you want to play
  load: {
    text: 'Warning: The following text adventure contains violent imagery, questionable humor, and Game of Thrones / A Song of Ice and Fire spoilers.\n\nWould you like to play anyway? (y/n)',
    choices: reset
  },
  // 0th event
  start: {
    text: 'Hello, Jaime. Unfortunately, Cersei is not happy with the way you reacted to that thing she did, so she has stuck you in a dungeon under the Red Keep. Great job escaping your cell though! Do you go [l]eft or [r]ight?',
    choices: {l: 'left', r: 'right'}
  },
  // 1st events
  left: {
    text: 'You come to a ladder which goes up as well as down. Soft prayer reverberates from above. You hear an indistinct rustling from below. Do you climb [u]p or [d]own?',
    choices: {u: 'up', d: 'down'}
  },
  right: {
    text: 'You come to a spiral staircase. The air coming from above seems slightly cooler. A faint chemical smell wafts up from below. Do you [a]scend or [d]escend?',
    choices: {a: 'ascend', d: 'descend'}
  },
  // 2nd events
  up: {
    text: 'You run into Septa Unella. You recognize her, but she looks a little worse for wear. In any case, she is blocking your path, she is wielding a dagger, and she looks quite determined to stop you. Do you try to [w]restle the dagger from her, or do you attempt to [c]harm her with your sense of humor?',
    choices: {w: 'wrestle', c: 'charm'}
  },
  down: {
    text: 'You encounter Qyburn.\n\nQyburn: Hello, Ser Jaime! How nice to see you again! Would you like to play a game?\n\nDo you agree to [p]lay, or do you attempt to [e]scape?',
    choices: {p: 'play', e: 'escape'}
  },
  ascend: {
    text: 'Is that Ser Gregor Clegane, aka "The Mountain"? It must be ... but ... did he get a haircut or something? Anyway, do you attempt to [r]un past him, or do you [b]ribe him?',
    choices: {b: 'bribe', r: 'run'}
  },
  descend: {
    text: 'You encounter Cersei. She is surrounded by wildfire, and there is a candle in her hand.\n\nCersei: Jaime, dear, will you join me in slaying all of our enemies, by any means necessary?\n\nDo you [j]oin her, [d]efy her, or attempt to [k]nock the candle out of her hand and into the wildfire?',
    choices: {j: 'join', d: 'defy', k: 'knock'}
  },
  // 3rd events, not including [p]lay, which is handled by a separate function (see below)
  wrestle: {
    text: 'There is a struggle, but you come away with the dagger. But then ...\n\nShame ... shame ... shame ...\n\nShame ... shame ... shame ...\n\nShame ... shame ... shame ...\n\nFirst you are mesmerized. Then you enter a daze. No, a trance. Not understanding what is happening, but overcome with self-loathing, you draw the dagger across your own throat.\n\nPlay again? (y/n)',
    choices: reset
  },
  charm: {
    text: 'She is not amused. She stabs you in the gut, and as you bleed out, you wonder why religion and comedy so rarely get along.\n\nPlay again? (y/n)',
    choices: reset
  },
  escape: {
    text: 'You turn on your heel and sprint back to the ladder. But just as you begin your ascent, you feel several hands pulling on you. A horde of orphans is dragging you from the rungs! As they beat and stab you to death, you wonder, "Who invented the ladder anyway? Was it a single person, or did several cultures discover it independently? Was it invented at all, or did it just sort of evolve?"\n\nPlay again? (y/n)',
    choices: reset
  },
  bribe: {
    text: 'Jaime: You know, Clegane, a Lannister always pays his debts ...\n\nThe Mountain reaches out to shake your hand. You hesitate, then reciprocate. Wow, he has a good, firm grasp! But admiration turns to pain as the bones in your good hand begin to crunch. He yanks you into the crease of his free arm, and you feel and hear your skull collapse. This dude definitely lifts.\n\nPlay again? (y/n)',
    choices: reset
  },
  run: {
    text: 'You dodge past him. Wow, you are accelerating even faster than usual! But wait, why is everything turning upside down? Ouch! Did your skull just hit the ceiling ... or was that the floor? Is that your body over there? Oh I get it: he decapitated you.\n\nPlay again? (y/n)',
    choices: reset
  },
  join: {
    text: 'You agree to join Cersei. She blows out the candle. You will live another day. But at what cost?\n\nPlay again? (y/n)',
    choices: reset
  },
  defy: {
    text: 'Jaime: We have done enough harm, Cersei. Let\'s end this together ...\n\nFor a second, she looks as though she is going to tip the candle into the wildfire. Then you hear a grotesque sound, somewhere between a sheath and crunch. You look down, though you are afraid to, and see a few feet of greatsword sticking out of your chest. As you lose consciousness, it hits you: Cersei looks fabulous in that pixie cut!\n\nPlay again? (y/n)',
    choices: reset
  },
  knock: {
    text: 'You succeed! As you are vaporized, you wonder what Tyrion is up to.\n\nPlay again? (y/n)',
    choices: reset
  }
}

// This is a special function for Qyburn's number guessing game ([y]es, [l]eft, [d]own, [p]lay).
function play() {
  var number = Math.floor(Math.random()*5)+1;
  var input = parseInt(prompt('Qyburn: Great! The game is simple. I am thinking of a number between 1 and 5, inclusive, and you have to guess which number that is. You get as many guesses as you want. So ... what’s my number?'));
  while (input !== number) {
    input = parseInt(prompt('Nope. Try again ...'));
  }
  input = prompt('Qyburn: That’s correct! Here is your reward!\n\nA metallic ringing. A searing flash of pain. You look down to see a jet of red where your good hand ought to be, and an orphan holding a bloody machete. In shock, you wonder what fate awaits a warrior with zero hands.\n\nPlay again? (y/n)').toLowerCase();
  if (input === 'y') {
    return navigate('start');
  }
  return navigate('quit');
}

// This call to the navigate function gets things going.
navigate('load');

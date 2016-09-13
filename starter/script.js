/* PSUEDO CODE

You wake up in a field starring at the sky. There is a blinding pain in your head and blood is running freely down your face. You hear the sound of men talking loudly nearby.

Lay still on the ground and wait.



Sit up and tend to the wound in your head.

Go ask for help.



*/
var story = {
  start: function() {
    // not finished
  },
  stats: {
    luck: 1,
    strength: 1,
    hubris: 0,
    hp: 10,
    increaseStat: function() {
      story.stat.current += 0.1;
    },
    decreaseStat: function() {
      story.stat.current -= 0.1;
    }
  },
  characterName: undefined,
  display
}


function d20() {
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}

function dieRoll(max) {
  return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

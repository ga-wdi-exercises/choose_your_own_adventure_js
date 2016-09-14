/* PSUEDO CODE

You wake up in a field starring at the sky. There is a blinding pain in your head and blood is running freely down your face. You hear the sound of men talking loudly nearby.

Lay still on the ground and wait.



Sit up and tend to the wound in your head.

Go ask for help.



*/
var story = {
  start: function() {
    console.log("not finished");
  },
  stats: {
    none: 1,
    luck: 1,
    strength: 1,
    charisma: 1,
    increaseStat: function(statName) {
      story.stats[statName] += 0.1;
    },
    decreaseStat: function(statName) {
      story.stats[statName] -= 0.1;
    }
  },
  scenes: [],
  /* scene template
  scene: {
    id: <int>,
    final: [true|false],
    setting: "text",
    options: [array of option objects],
  },*/
  /* option template
  option: {
    id: <int>,
    choiceValue: "text",
    hidden: [true|false],
    statModifier: "name of story.stats[n]", // use "none" for no modification
    difficulty: [<int difficulty ratio numberator>,<int difficulty ratio denominator>], // use [0,1] for automatic success
    successText: "text",
    successConsequences: function() {

    },
    successSceneId: <int>,
    failureText: "text",
    failureConsequences: function() {

    },
    failureSceneId: <int>
  }
  */
  d: function(max) {
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
  },
}

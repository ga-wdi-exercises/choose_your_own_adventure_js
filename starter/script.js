// put code here!
console.log("Running js");
var situations = {
  start : {
    // The main text prompt of the scene
    text: "It's eight o'clock on Thursday morning and you don't feel very good. You wake " +
     "up blearily, wander around your room, opened a window, saw a bulldozer, found your " +
     "slippers, and stomped off to the bathroom to wash.",

    // A list of interactable objects to be shown to the user
    suggestions: ['window', 'slippers', 'bulldozer'],

    // interactable objects that do not cause a scene change
    objects: {
      'window': "The window is open. It's an ordinary window with an ordinary bulldozer " +
      "on the other side of it.",
      'slippers': "You put them on the wrong feet. Why do you even have these?",
    },

    // Scenes that can be reached from the current scene
    connected_scenes : ['bulldozer'],

    end: false,
  },

  bulldozer : {
    text: "The word bulldozer wanders through your mind for a moment, in search of something " +
    "to connect with. Yellow. It reminds you of the pub last night.",

    suggestions: ['pub'],

    objects : {},

    connected_scenes: ['pub'],

    end: false,
  },

  pub : {
    text: "The pub. Oh dear, the pub. God, what a terrible hangover. " +
    "You vaguely remember being angry, angry about something " +
    "that seemed important. You had been telling people about it at great length. Something " +
    "about a bypass that you had just found out about, although it had been in the works for months. " +
    "The word yellow wandered through your mind again in search of something to connect with.",


    suggestions: ['yellow'],

    objects : {},

    connected_scenes : ['yellow'],

    end : false,
  },

  yellow : {
    text: "Fifteen seconds later you are out of the house and lying in front of a big yellow " +
    "bulldozer that is advancing up your garden path. The driver shouts down, 'Come off it! " +
    "You can't win, you know. You can't lie in front of the bulldozer indefinitely.'",

    suggestions: ['taunt', 'reason'],

    objects : {
      taunt: "'I'm game', you say, 'we'll see who rusts first.' \n" +
      "'I'm afraid you'll have to accept it,' the driver said. 'It's a bypass. You've got to " +
      "build bypasses.'",

      reason: "'You were quite entitled to make suggestions at the approprate time', " +
      "the driver shouted.\n" +
      "'Appropriate time?!' you hoot. 'Appropriate time? The first I knew about it was when a " +
      "workman arrived at my home yesterday. I asked him if he'd come to clean the windows and " +
      "he said no he'd come to demolish the house. He didn't tell me straight away of course. Oh no. " +
      "First he wiped a couple of windows and charged me a fiver. Then he told me.'",
    },
    connected_scenes : [],
    end : false,
  },
}

console.log("Got to end of scene declaration");

var user = {
  current_scene : 'start',
  scene_info : situations.start,
  current_text : situations.start.text + "\n\n" + "Options: " + situations.start.suggestions,

  set_new_scene : function(scene_name) {
    user.current_scene = scene_name;
    user.scene_info = situations[scene_name];
    user.current_text = user.scene_info.text + "\n\n" + "Options: " + user.scene_info.suggestions;
  }
}

function main() {
  while (user.scene_info.end == false) {
    // Serve text and get the users response
    response = prompt(user.current_text);

    // If the response is one of our suggestions
    if (user.scene_info.suggestions.indexOf(response) >= 0) {
      // If the response is an interactable object
      console.log("Valid input");
      if (response in user.scene_info.objects) {
        console.log("Input was an object.");
        user.current_text += "\n\n" + user.scene_info.objects[response];

      } else {
        console.log("Input was a scene.");
        user.set_new_scene(response);
      }
    }
  }
}

main();

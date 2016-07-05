// put code here!
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

  council : {

  },

  }
}


var user = {
  current_scene : 'start',
  scene_info : situations.start,
  current_text : situations.start.text + "\n\n" + situations.start.suggestions,

  set_new_scene : function(scene_name) {
    user.current_scene = scene_name;
    user.scene_info = situations[scene_name];
    user.current_text = user.scene_info.text + "\n\n" + user.scene_info.suggestions;
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

var story = {
  stats: {
    none: 1,
    luck: 1,
    strength: 1,
    dexterity: 1,
    charisma: 1,
    increaseStat: function(statName) {
      console.log("increaseStat(" + statName + ") " + story.stats[statName] + " -> " + (story.stats[statName] + 0.1));
      story.stats[statName] += 0.1;
    },
    decreaseStat: function(statName) {
      console.log("decreaseStat(" + statName + ") " + story.stats[statName] + " -> " + (story.stats[statName] - 0.1));
      story.stats[statName] -= 0.1;
    },
  },
  start: function() {
    $("#container").removeClass("hidden");
    $("#gameOver").addClass("hidden");
    story.setScene(0);
  },

  d: function(max) {
    console.log("roll d(" + max + ")");
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
  },
  setTextBox: function(text) {
    $("#textBox").text(text);
  },
  gameOver: function() {
    $("#gameOver").removeClass("hidden");
  },
  determineSuccess: function(sceneIndex,optionIndex) {
    console.log("determineSuccess");
    var option = story.scenes[sceneIndex].options[optionIndex];
    var roll = story.d(option.difficulty[1]);
    var mod = story.stats[option.statModifier];
    var dc = option.difficulty[0];
    console.log("sceneIndex: " + sceneIndex + ", optionIndex: " + optionIndex + ", max roll: " + option.difficulty[1] + " roll: " + roll + ", mod: " + mod + ", dc: " + dc);
    // automatically fail on a roll of 1 and automatically succeed on a max roll
    return (roll * mod >= dc && roll !== 1) || roll === option.difficulty[1];
    // more efficient
    // return story.d(option.difficulty[1]) * story.stats[option.statModifier] > option.difficulty[0];
  },
  choose: function(sceneIndex,optionIndex) {
    console.log("choose(sceneIndex(" + sceneIndex + "),optionIndex(" + optionIndex + "))");
    var option = story.scenes[sceneIndex].options[optionIndex];
    story.setTextBox("You " + option.choiceValue + ".");
    // perform different consequences and story paths depending on results of determineSuccess
    if (story.determineSuccess(sceneIndex,optionIndex)) {
      console.log("choose>success");
      option.successConsequences();
      setTimeout(story.setTextBox,3000,option.successText);
      setTimeout(story.setScene,6000,option.successSceneId);
      console.log("choose>successSceneId>" + option.successSceneId);
    } else {
      console.log("choose>failure");
      option.failureConsequences();
      setTimeout(story.setTextBox,3000,option.failureText);
      setTimeout(story.setScene,6000,option.failureSceneId);
      console.log("choose>failureSceneId" + option.failureSceneId);
    }
  },
  removeOptions: function() {
    console.log("removeOptions");
    $("#optionsList").html("");
  },
  setOptions: function(sceneIndex) {
    console.log("setOptions>sceneIndex>" + sceneIndex);
    // should consider validating and handling empty option array
    for (var i = 0; i < story.scenes[sceneIndex].options.length; i++) {
      // this is poorly written and probably shouldn't rely on i to set data-option
      var newOption = $("<div></div>");
      newOption.addClass("option");
      // newOption.attr("data-scene",sceneIndex);
      // newOption.attr("data-option",i);
      newOption.attr("onclick","story.choose(" + sceneIndex + "," + i + ")");
      // this is successfully adding the attribute but it is not having the effect of hiding the div
      if (story.scenes[sceneIndex].options[i].hidden === true) {
        newOption.addClass("hidden");
      }
      newOption.text(story.scenes[sceneIndex].options[i].choiceValue);
      $("#optionsList").append(newOption);
    }
  },
  setScene: function(sceneIndex) {
    console.log("setScene>sceneIndex>" + sceneIndex);
    story.setTextBox(story.scenes[sceneIndex].setting);
    story.removeOptions();
    if (story.scenes[sceneIndex].final === true) {
      return setTimeout(story.gameOver,2000);
    } else {
      // delay setting options by an amount of time determined by the length of the scene text (3s/100 characters)
      return setTimeout(story.setOptions,story.scenes[sceneIndex].setting.length * 30,sceneIndex);
    }
  },
  scenes: [{
    id: 0,
    final: false,
    setting: "You wake up in a field staring at the sky. There is a blinding pain in your head and blood is running freely down your face. You hear the sound of men talking loudly nearby.",
    options: [{
      id: 0,
      choiceValue: "lay still on the ground and wait",
      hidden: false,
      statModifier: "strength",
      difficulty: [2,20],
      counter: 0,
      successText: "You wait silently while loosing blood.",
      successConsequences: function() {
        this.counter += 1;
        story.stats.decreaseStat("strength");
        story.scenes[0].setting = story.scenes[0].setting.replace("You wake up in a field staring at the sky. ","");
        if (this.counter === 1) {
          this.choiceValue += " for nightfall";
          this.successText += " You feel weak but think you can probably sneak away once the men fall asleep."
        }
        if (this.counter === 5) {
          this.successText = "The sun finally sets. The men settle down and fall asleep."
        }
        if (this.counter > 5) {
          this.successSceneId = 4;
        }
      },
      successSceneId: 0,
      failureText: "You accidentally let out a loud moan of pain.",
      failureConsequences: function() {
        return undefined
      },
      failureSceneId: 1
    },{
      id: 1,
      choiceValue: "sit up and tend to the wound on your head",
      hidden: false,
      statModifier: "dexterity",
      difficulty: [7,20],
      successText: "You quietly rip some cloth from the sleeve of your shirt and wrap up the wound on your head.",
      successConsequences: function() {
        debugger;
        this.hidden = true;
        story.scenes[0].options[3].hidden = false;
        story.scenes[0].options[0].successText = "You wait silently.";
      },
      successSceneId: 0,
      failureText: "As you try to tear some cloth from your shirt it makes a loud ripping noise.",
      failureConsequences: function() {
        return undefined
      },
      failureSceneId: 1
    },{
      id: 2,
      choiceValue: "go ask for help",
      hidden: false,
      statModifier: "charisma",
      difficulty: [18,20],
      successText: "The men see you in your pitiful state and regret assaulting you. They give you to the count of 10 to get out of their sight.",
      successConsequences: function() {
        story.stats.decreaseStat("strength");
        return story.stats.increaseStat("charisma");
      },
      successSceneId: 2,
      failureText: "The men are bewildered and amused by your stupidity. They are so tickled that they decide not to finish the job they started.",
      failureConsequences: function() {
        story.stats.decreaseStat("strength");
        story.stats.decreaseStat("charisma");
        return undefined
      },
      failureSceneId: 2
    },{
      id: 3,
      choiceValue: "crawl away from the sound of the men",
      hidden: true,
      statModifier: "dexterity",
      difficulty: [9,20],
      counter: 0,
      successText: "You quietly crawl away from the men until the sound of them fades into the distance.",
      successConsequences: function() {
        return undefined
      },
      successSceneId: 3,
      failureText: "You snap a twig as you crawl away from the men. The sounds of the men quiet briefly.",
      failureConsequences: function() {
        console.log(this);
        this.counter += 1;
        this.failureText.replace("snap a twig","rustle some leaves");
        story.stats.decreaseStat("dexterity");
        if (this.counter > 2) {
          this.failureSceneId = 2;
        }
        return undefined
      },
      failureSceneId: 0
    }]
  },{
    id: 1,
    final: true,
    setting: "The men hear you and start at you with wild yells of anger. This time they finish the job.",
    options: []
  },{
    id: 2,
    final: true,
    setting: "The men lock you in a cage and load the cage onto a wagon. When they arrive in the next town they sell you into slavery.",
    options: []
  },{
    id: 3,
    final: true,
    setting: "You manage to crawl far enough away from the men that you feel safe to stand. You wonder what happened to you. You wonder who you even are.",
    options: []
  }],
}

// remove after submission
var obj = {
  a: "tautology",
  b: 2,
  c: 3,
  subObj: {
    a: 10,
    b: 20,
    c: 30,
    d: function() {
      switch (obj.a) {
        case "tautology":
          console.log("a tautology");
          break;
        case "fallacy":
          console.log("a fallacy");
          break;
        default: "default"
      };
    }
  }
}

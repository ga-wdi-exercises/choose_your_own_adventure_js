var story = {
  start: function() {
    $("#container").removeClass("hidden");
    $("#gameOver").html("");
    story.setScene(0);
  },
  stats: {
    none: 1,
    luck: 1,
    strength: 1,
    dexterity: 1,
    charisma: 1,
    increaseStat: function(statName) {
      story.stats[statName] += 0.1;
    },
    decreaseStat: function(statName) {
      story.stats[statName] -= 0.1;
    }
  },
  d: function(max) {
    // console.log("d(" + max + ")");
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
  },
  gameOver: function() {
    // console.log("gameOver");
    var newOption = $("<h1></h1>");
    newOption.attr("id","gameOver");
    newOption.attr("onclick","story.start()");
    newOption.text("game over");
    $("#container").append(newOption);
  },
  determineSuccess: function(sceneIndex,optionIndex) {
    // console.log("determineSuccess");
    var option = story.scenes[sceneIndex].options[optionIndex];
    return story.d(option.difficulty[1]) * story.stats[option.statModifier] > option.difficulty[0];
  },
  choose: function(sceneIndex,optionIndex) {
    // console.log("choose");
    var option = story.scenes[sceneIndex].options[optionIndex];
    $("#textBox").text("You " + option.choiceValue + ".");
    if (story.determineSuccess(sceneIndex,optionIndex)) {
      // console.log("choose>success");
      option.successConsequences();
      $("#textBox").text(option.successText);
      story.setScene(option.successSceneId);
      // console.log("choose>successSceneId>" + option.successSceneId);
    } else {
      // console.log("choose>failure");
      option.failureConsequences();
      $("#textBox").text(option.failureText);
      story.setScene(option.failureSceneId);
      // console.log("choose>failureSceneId" + option.failureSceneId);
    }
  },
  removeOptions: function() {
    // console.log("removeOptions");
    $("#optionsList").html("");
  },
  setOptions: function(sceneIndex) {
    // console.log("setOptions>sceneIndex>" + sceneIndex);
    // should consider validating and handling empty option array
    for (var i = 0; i < story.scenes[sceneIndex].options.length; i++) {
      // this is poorly written and probably shouldn't rely on i to set data-option
      var newOption = $("<div></div>");
      newOption.addClass("option");
      newOption.attr("data-scene",sceneIndex);
      newOption.attr("data-option",i);
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
    // console.log("setScene>sceneIndex>" + sceneIndex);
    $("#textBox").html(story.scenes[sceneIndex].setting);
    story.removeOptions();
    if (story.scenes[sceneIndex].final === true) {
      // consider adding arguments
      return story.gameOver();
    } else {
      return story.setOptions(sceneIndex);
    }
  },
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
    difficulty: [<int difficulty ratio numberator>,<int difficulty ratio denominator>], // use [0,<n>] for automatic success
    counter: 0,
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
        return story.stats.decreaseStat("strength");
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
        // replace function in choice 1 with one that does not loose strength
        // unhide choice 3
        // remove bleeding from scene 1 and choice 1
        return undefined
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

var testObj = {
  a: {
    ab: 0,
    ac: [],
    ad: 2,
    af: function(){
      // console.log(this.parent.b);
    }
  },
  b: 10,
  c: {
    ca: 30,
    cb: function(v){
      // console.log(this[v]);
    }
  }
}

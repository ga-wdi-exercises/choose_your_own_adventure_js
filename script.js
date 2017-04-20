//START DAY
function startDay() {
  var baPhan = prompt("You wake up in the morning to realize that it is 10 am. You are late for your wed development class. Aw crap! What will you do now? Panic and cry (p), Say SCREW IT and go on an adventure (a), Rush to class anyways (c)");

  if (baPhan === "p") {
    alert("Nice...Now you're late AND pathetic.")
  }
  else if (baPhan === "a") {
    alert("Sweet! You're already screwed anyways, let's go!")
    adventure();
  }
  else if (baPhan === "c") {
    alert("You hit ridiculous traffic and end up hating yourself even more.")
  }
  else {
    alert("NOT AN OPTION MAN!")
  }
}


function adventure () {
  var baAdventure = prompt("You step outside, the sunlight hit your eyes and you suddenly feel wide awake and ready for an adventure! What will you do next? Hit up the mall (1), Hit up the library (2), Hit up Mt. Everest (3)");

  switch (baAdventure) {
    case "1":
      var mall = prompt("You head to the near by Potomac Mills Mall. What now? See a movie (1), Go to the bar (2)");
        if (mall === "1") {
          alert("On your way to the theater you run into a couple of thugs. They proceed to take everything you own and knock you out. You open your eyes...")
          startDay ();
        }
        if (mall === "2") {
          alert("You get way too drunk and proceed to pass out, embarrassing yourself in the process.");
        }
    break;
    case "2":
      var library = prompt ("The library is very quiet and boring. What now? Make a scene (1), Quietly leave (2)");
        if (library === "1") {
          alert("You start throwing books at strangers while obnoxiously teasing old people. You get arrested shortly afterward");
        }
        if (library === "2") {
          alert("You quietly leave the premise and go home, ending your adventure.");
        }
      break;
      case "3":
        var everest = alert ("Suddenly a portal opens, you walk through to appear on the other side at Mt. Everest's feet.");
        climbEverest ();
        break;
  }
}

function climbEverest () {
  var baEverest = prompt("During your climb, you were suddenly encountered by a giant Yeti! Do you want to: Fight (1), Run (2)");
    if (baEverest === "1") {
      alert("You and the Yeti engage in intense hand-to-hand combat. After exchanging vicious blows, you manage to land a dropkick on the Yeti's head, KO'ing the monster. You find the Yeti's secret treasure room!");
      yetiTreasure ();
    }
    if (baEverest === "2") {
      alert("You turned and run away. Unfortunately the Yeti is much faster and you were eaten.");
    }
}

function yetiTreasure () {
  var treasureRoom = prompt("You enter the treasure room. There's a chest in the middle of the room. What do you want to do? RUSH AT THE CHEST TO EARN YOUR TREASURE (1), Carefully check the surrounding for traps (2)");
    if (treasureRoom === "1") {
      alert("You eagerly run at the chest. A trapdoor opens and you fall into a pit on tarantulas. Gross...");
    }
    if (treasureRoom === "2") {
      alert ("You carefully look around and discover a trapdoor near the treasure chest. You carefully avoid the trap and proceed to open the chest. WOOT YOU ARE NOW RICH!! CONGRATZ ON YOUR ADVENTURE!!");
    }
}

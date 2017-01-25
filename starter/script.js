var finished = false;
var adventure = function() {
  alert("You live a life of obscurity in a dense, crowded city. All your life you've been hearing bards telling tales and singing ballads of adventures and heroes. It all sounds so exiting and marvelous. But it's not for you.\nOr is it?");

  var yourClass = prompt( "What is your defining characteristic? Are you\n1. Strong \n2. Smart \n3. Agile \n4. Happy? (Input 1, 2, 3 or 4)" );

    switch (parseInt(yourClass)) {
      case 1:
        alert("You are blacksmith apprentice.");
        yourClass = "str";
        break;
      case 2:
        alert("You are a humble scholar.");
        yourClass = "int";
        break;
      case 3:
        alert("You are a petty thief.");
        yourClass = "dex";
        break;
      default:
        alert("Happy people have no history.")
        end();
        break;
    }
  if(finished) {
    return;
  }
  alert(
    "You get tired from being pushed around. All your efforts get you nothing. Nothing ever changes. But you don't want to be stuck like this your entire life.\nYou want to make a mark upon the world, want to hear bards sing praises about you. It's time to make a name for yourself.\nIt's time to go on an adventure."
  )
  var storm = prompt ("You get out of the city and travel down the road. The road is blocked and a thunderstorm is brewing quickly. Do you \n1. Look for food\n2. Look for shelter\n3. Look for the way forward\n4. Run back to town")
    switch (parseInt(storm)) {
      case 1:
        alert("You are ignoring the storm and scavenge for some nuts and berries. Unfortunately, that brings you under a lonely tree in the middle of a small clearing. The tree is struck by lightning.")
          if (yourClass === "dex") {
            alert("You quickly roll out of the way of a falling tree and run for the forest.");
          } else {
            alert("You are crushed by a giant tree.");
            end();
            break;
          }
      case 2:
        alert("You decide to hide in the forest and wait it out.");
          if (yourClass === "int") {
            alert("It occurs to you that the tree blocking the road was chopped down...")
          } else continue;
      case 3:
        alert("You climb over the tree and double time it towards a distant settlement. An arrow flies out of the forest.")
          if (yourClass === "str") {
            alert("You are running too fast for the archer, and the arrow hits the ground behind you. You run for the forest to get some cover.")
          } else {
            alert("It hits you in the knee. As you fall to the ground the ground, you hear heavy boots approaching. Many of them.")
          }
          end();
          break;
      default:
        alert("You decide that this adventuring life just ain't worth it. You are cold, wet, hungry and probably lost, too. You turn around and head back the way you came, forever abandoning the dreams of adventure.");
        end();
        break;
    }
  var forest = prompt("You are making your way through the forest. It's dark, damp and pretty creepy. Do you want to\n1. Keep going\n2. Stop and sleep for a bit")
    if (forest === 1) {
      alert("You push through the fatigue and thorny bushes. You walk out to an unexpected clearing.")
        var hut = prompt("There is a hut in the middle of the clearing. You can smell the smoke from the chimney. Someone is inside. Do you want to knock? (y/n)")
          if (hut === "y") {
            alert("The door opens on its own. When you walk inside, you see a beautiful lady and an ugly crone sitting side by side.");
              var choice = prompt("Do you want to talk to\n1. The lady\n2. The crone?")
                  if (choice === 1) {
                    alert("The lady's voice is so sweet that you can't even quite understand what she is saying. In fact, you can't remember your own name or how you got here. It's all a blur.\nYou wake up on the road with no memories of anything and wander the world for the rest of your life as a beggar, trying to remember who you were and never able to find out.")
                    end();
                  } else {
                      var dragon = prompt("The crone beacons for you to come closer. She holds a staff in her hand, and tells you that you can kill a dragon with its power. She will give it to you if you agree to do that. Do you agree to the task (y/n)?")
                  }
            } else {
              alert("You ignore the hut and walk on. You wander the forest aimlessly for hours and then days. Unfortunately, life in the city did not teach you how to survive out here, and soon you succumb to untimely death in some random ditch.")
              end();
            }
          }
    } else {
      alert("You decide to fall asleep under some tree.")
    }
}
adventure();

function end() {
  var end = prompt("The End. Re-try (y/n)?")
    switch (end) {
      case "y":
        adventure();
        break;
      default:
        finished = true;
        alert("The End.");
        break;
  }
}

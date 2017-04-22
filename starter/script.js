$(document).ready(function() {
  $("#begin").click(adventure);
//loop escape mechanism
var finished = false;
//main function
function adventure() {
  console.log("firing")
  alert("You live a life of obscurity in a dense, crowded city. All your life you've been hearing bards telling tales and singing ballads of adventures and heroes. It all sounds so exiting and marvelous. But it's not for you.\nOr is it?");
//choose the class
  var yourClass = prompt( "What is your defining characteristic? Are you\n1. Strong \n2. Smart \n3. Agile \n4. Happy?\n(Input 1, 2, 3 or 4)" );
    switch (parseInt(yourClass)) {
      case 1:
        alert("You are blacksmith's apprentice.");
        yourClass = 1
        break;
      case 2:
        alert("You are a humble scholar.");
        yourClass = 2
        break;
      case 3:
        alert("You are a petty thief.");
        yourClass = 3
        break;
      default:
        alert("Happy people have no history.")
        end();
        break;
    }
//loop escape mechanism part2
  if(finished) {
    return;
  }
  alert(
    "You get tired from being pushed around. All your efforts get you nothing. Nothing ever changes. But you don't want to be stuck like this your entire life.\nYou want to make a mark upon the world, want to hear bards sing praises about you. It's time to make a name for yourself.\nIt's time to go on an adventure."
  )
//big switch #1
  var storm = prompt ("You get out of the city and travel down the road. The road is blocked and a thunderstorm is brewing quickly.\nDo you \n1. Look for food\n2. Look for shelter\n3. Look for the way forward\n4. Run back to town")
    switch (parseInt(storm)) {
      case 1:
        alert("You are ignoring the storm and scavenge for some nuts and berries. Unfortunately, that brings you under a lonely tree in the middle of a small clearing. The tree is struck by lightning.")
          while (yourClass !== 3) {
            alert("You are crushed by a giant tree.");
            end();
            break;
          } alert("You quickly roll out of the way of a falling tree and run for the forest.");
        break;
      case 2:
        alert("You decide to hide in the forest and wait it out.");
          while (yourClass !== 2) {
            alert("You leave scraps of your clothing on the thorns as you are tearing through underbrush. A very close thunderclap makes you hustle even more.")
            break;
          }
          break;
          break;
            alert("It occurs to you that the tree blocking the road was deliberately chopped down...")
        break;
      case 3:
        alert("You climb over the tree and double time it towards a distant settlement. An arrow flies out of the forest.")
          while (yourClass !== 1) {
            alert("It hits you in the knee. As you fall to the ground the ground, you hear heavy boots approaching. Many of them.")
            end();
            break;
          }
            alert("You are running too fast for the archer, and the arrow hits the ground behind you. You run for the forest to get some cover.")
        break;
      default:
        alert("You decide that this adventuring life just ain't worth it. You are cold, wet, hungry and probably lost, too. You turn around and head back the way you came, forever abandoning the dreams of adventure.");
        end();
        break;
    }
  var forest = prompt("You are making your way through the forest. It's dark, damp and pretty creepy.\nDo you want to\n1. Keep going\n2. Stop and sleep for a bit")
  //re-making the part with the hut
    if (forest === "1") {
        var hut = prompt("You push through the fatigue and thorny bushes. You walk out to an unexpected clearing. There is a hut in the middle of the clearing. You can smell the smoke from the chimney. Someone is inside.\nDo you want to knock? (y/n)")
          if (hut === "y") {
            alert("The door opens on its own. When you walk inside, you see a beautiful lady and an ugly crone sitting side by side.");
            var choice = prompt("Do you want to talk to\na. The lady\nb. The crone?")
             if (choice === "a") {
               alert("The lady's voice is so sweet that you can't even quite understand what she is saying. In fact, you can't remember your own name or how you got here. It's all a blur.\nYou wake up on the road with no memories of anything and wander the world for the rest of your life as a beggar, trying to remember who you were and never able to find out.")
               end();
             } else {
               alert("The crone becons you to come closer.")
             }
               var dragon = prompt("She holds a staff in her hand, and tells you that you can kill a dragon with its power. She will give it to you if you agree to do that.\nDo you agree to the task (y/n)?")
                if (dragon === "y") {
                  alert("The crone laughs at you and calls you a fool. There are no dragons. You are kicked out of the hut by an unseen force and are left alone in the middle of the forest.\nYou slink back the way to came from and go back home and live the rest of your life in obscurity.")
                  end();
                } else {
                  alert("The crone smiles a toothless smile at you and taps the end staff on the floor. You are transported to the king's court where he proclaims you his advisor. You marry a princess and live a sickeningly sweet happily ever after.\nCommon sense for the win.")
                  end();
                }
          } else {
            alert("You ignore the hut and walk on. You wander the forest aimlessly for hours and then days. Unfortunately, life in the city did not teach you how to survive out here, and soon you succumb to untimely death in some random ditch.")
            end();
          }
      } else {
      alert("You decide to fall asleep under some tree.")
      var tied = prompt("You wake up tied to the very same tree you fell asleep under.\nAre you trying to escape? (y/n)")
        if (tied === "y") {
          alert("Turns out the bandits that captured you were nearby. You are knocked unconscious again for wiggling too much.")
            var merchant = prompt("You are brought to the bandit camp and dumped into a fenced off pen. There is another prisoner there, a dirty man in rags. It's weird but he seems very familiar. Looking closer you realize that it's a merchant from the city. He used to be really rude to you and other less fortunate people.\nDo you\na. Decide to help him\nb. Kick him while he is down?")
              if (merchant === "a") {
              alert("You decide to escape back to the city together. You wait until the night falls and help each other over the fence. You find your way back to the city in a few days, tired and hungry, but alive.\nThe merchant leaves you as soon as you hit the city gates and runs back home, leaving you on the same place you started just a few days ago, with no change of fortune. Turns out adventuring is an ungrateful job. Perhaps you should go on another adventure.")
              end();
              } else {
              alert("The bandits whistle and cheer when you kick the merchant. One of the bandits throws you a piece of bread. You decide to kick the merchant again.\nBefore you know it, the merchant is out to be traded for ransom and you are offered to join the gang. What's there to lose?\nIn a few years you end up a wealthy bandit lord and drink to the day you first decided to go on an adventure.")
              end();
              }
        } else {
        alert("You give up the fight and meekly await your fate. The bandits soon find out that you have nothing and decide to slit your throat.")
        end();
      }
    }
}
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
})

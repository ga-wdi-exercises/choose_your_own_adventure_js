// put code here!
// Shout-out to Rob Cantor, you weirdo
// If you don't understand what this means, please refer to this video (SFW): https://www.youtube.com/watch?v=o0u4M6vppCI

console.log("You're walking in the woods. There's no one around and your phone is dead. Out of the corner of your eye, you spot him!");

alert("SHIA LABEOUF!");

console.log("He's following you. (About 30 feet back) He gets down on all fours and breaks into a sprint.");

var hesGainingOnYou = prompt("He's gaining on you. What do you do? \n 'R' - run for your life \n 'L' - look for your car");

  if (hesGainingOnYou == 'R') {
    console.log("It's dark. You seem to have lost him. But you're hopelessly lost yourself, stranded with a murderer.");

    var creepThroughUnderbrush = prompt("How do you proceed through the underbrush? \n 'S' -- silently, to avoid detection \n 'L' -- loudly, to alert others to Shia LaBeouf");

      if (creepThroughUnderbrush = 'S') {
        console.log("A-ha! In the distance, a small cottage with a light on. HOPE! You move stealthily toward it. But your leg! AH! It's caught in a bear trap!");

        var bearTrap = prompt("How do you get out of the bear trape? \n 'G' -- gnaw off your leg \n 'N' -- nothing, you decide you'll use the bear trap as a weapon if Shia LaBeouf comes back")

          if (bearTrap == 'G') {
            console.log("You free your leg but you must stay quiet, quiet as you limp towards the cottage. You arrive at the doorstep, and sitting inside is Shia LaBeouf, sharpening an axe. But! He doesnt hear you enter.");

            var sneakUpBehindHim = prompt("Do you: \n 'S' -- sneak up behind him OR \n 'E' -- escape while you can?")

            if (sneakUpBehindHim == 'S') {
              console.log("You manage to strangle superstar Shia LaBeouf and wrestle a knife away from him during this fight for your life. It's a legendary fight (and normal Tuesday night) with Shia LaBeouf that ends with you decapitating him with his own axe. \n You are finally safe from Shia LaBeouf. o/");
            }
            else if (sneakUpBehindHim == 'E') {
              console.log("You've fallen for his trap! There was another bear trap outside that you didn't notice in your excitement. He suddenly appears next to you and eats you because he is an actual cannibal. X_X");
            }
            else {
              console.log("You stood on the doorstep for too long and Shia smelled your scent. He runs up to you and cuts off your head with his axe. You're dead now but he also eats you because he is an actual cannibal. X_X");
            }
          }
          else if (bearTrap == 'N') {
            console.log("You fool! Shia LaBeouf is trained in defending himself against bear traps, as he's the one who set it in the first place. He eats your good leg -- did I mention he's an actual cannibal? -- and then the rest of you. X_X");
          }
          else {
            console.log("You can't just ignore the bear trap, and Shia LaBeouf certainly isn't ignoring you. He finds you by the sound of your crying at the bear trap and eats you because he is an actual cannibal. X_X");
          }
      }
      else if (creepThroughUnderbrush = 'L') {
        console.log("The sound is a dead giveaway to your location and Shia LaBeouf pounces on you. Then he eats you because, as it turns out, he is an actual cannibal. X_X");
      }
      else {
        console.log("Standing frozen in the underbrush, your scent is picked up by Shia LaBeouf, who proceeds to make a meal out of you, because he is an actual cannibal. X_X");
      }
  }
  else if (hesGainingOnYou == 'L') {
    console.log("You try to find your car but you're all turned around. He's almost upon you now and in your last moments you see that there's blood on his face. My God, there's blood everywhere! That is your last thought before he pounces on you and eats you. Because Shia LaBeouf is an actual cannibal. X_X");
  }
  else {
    console.log("Your lack of decisiveness has cost you your life, as Shia LaBeouf is a cannibal and has just found dinner. X_X");
  }

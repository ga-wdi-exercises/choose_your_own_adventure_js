alert("Welcome to the game of life. Please enter all letters as lower case.")

var path = prompt("You wake up in an unfamiliar alley in the city. Your wallet and keys are gone and your phone is dead. Do you (w)ander around aimlessly, (t)ry to hail a taxi, or (e)mbrace your new life as a hobo?");
  if (path === "w") {
    var path1 = prompt("You walk onto the main street and realize you're two states away from home. Suddenly, a Drug Dealer makes eye contact with you and runs straight towards you. He wants to battle! Do you (f)ight him, (r)un away, or (s)educe him?");
      if (path1 === "f") {
        var path11 = prompt("You use the karate you learned on TV. It's not very effective. Drug Dealer stabs you with a syringe of bad drugs. It's super effective! Your legs get shaky and you start to feel confused and disoriented. Do you (f)ight him some more, (r)un away, or (d)istract him?");
          if (path11 === "f") {
            alert("You grab his syringe and inject him with his own bad drugs. It's super effective! The Drug Dealer faints. You're weakened, but you'll live to see another day.")
          }
          else if (path11 === "r") {
            alert("The drugs make you unable to run in a straight line. You collapse on the ground, wondering what a strange day you've had as the Drug Dealer has his way with you.")
          }
          else if (path11 === "d") {
            alert("'Look, the cops!' You scream while pointing behind him. The Drug Dealer gets scared and runs off. You're safe now.")
          }
      }
      else if (path1 === "r") {
        var path12 = prompt("You turn and sprint into an Apple store. People are staring. Do you (p)hone a friend, (d)ance, or (f)ake an injury?");
          if (path12 === "p") {
            alert("You ask a genius if you can borrow his phone. He gives it to you and you call your buddy to pick you up.")
          }
          else if (path12 === "d") {
            alert("You Youtube an overused techno song from a meme and dance your best moves. Soon the whole store has formed a circle around you and is cheering you on. Someone takes a video which goes viral and you become rich and famous.")
          }
          else if (path12 === "f") {
            alert("You grab your knee and fall to the ground, groaning and moaning while people rush to your aid and call 911. You go to the hospital where the doctors treat you for nothing because you're fine.")
          }
      }

      else if (path1 === "s") {
        var powerLevel = prompt("How hard do you seduce? (Please enter a number)");
          while (powerLevel <= 9000) {
              if (powerLevel < 5000) {
                alert("It's not working! Seduce harder!")
              }
              else if (5000 < powerLevel <= 9000) {
                alert("Seducing intensifies!")
              }
              powerLevel = prompt("How hard do you seduce? (Please enter a number)")
          }
          //This is not DRY//
          if (powerLevel > 9000) {
            alert("It's over 9000! A shockwave blasts outward from your body, immediately vaporizing the Drug Dealer. He should have thought twice before challenging you.")
          }
      }//close line 31
  }//close line 4

  //////////////////////////////
  else if (path === "t") {
    var path2 = prompt("You walk onto the main street and realize you're two states away from home. A taxi pulls up and you get in. You explain where you're going but he says its too far. Do you (s)teal his taxi, (c)onvince him to adopt you, or s(e)duce him?");
    if (path2 ==="s") {
      var path21 = prompt("You begin punching the driver until he's forced out of the taxi. You jump into the drivers seat and speed away. 20 minutes later, you see two police cars chasing you. Do you (s)urrender, (e)vade, or (f)ake your death?")
        if (path21 === "s") {
          alert("You slow down, pull over, and are arrested for speeding and driving a stolen vehicle. You are later charged with grand theft auto and are sentenced to prison for 350 years.")
        }
        else if (path21 === "e") {
            var speed = prompt("How fast do you drive? (Please enter a number)");
              while (speed <= 150) {
                  if (speed < 60) {
                    alert("They're catching up! Drive faster!");
                  }
                  else if (60 < speed <= 90) {
                    alert("They're still on your tail! Faster!");
                  }
                  //Lines 67-69 don't work. I got stuck trying to figure it out//
                  else if (90 < speed <= 150) {
                    alert("You're going really fast now!");
                  }
                  speed = prompt("How fast do you drive? (Please enter a number)");
              }
              if (speed > 150) {
                alert("Holy baloney!!!! As you pass through an intersection, you are hit by a crossing car, causing you to veer off the road and into a tree. You die.");
              }
        }
        else if (path21 === "f") {
          alert("You drive off a bridge and into a large river. You survive, but manage to swim out of the car and onto land without being seen. You hitchhike to Alaska where you spend the rest of your days as a hermit in a cabin in the woods with a new name and a dog.")
        }
    }//close line 52
    else if (path2 ==="c") {
      alert("That's really weird, but he's cool with it. He drives to the government office where you sign the papers to make him officially your father. You live together happily ever after.")
    }
  else if (path2 ==="e") {
      alert("He's totally into it. He drives to a hotel and the two of you have a wonderful night together.")
  }
}//close line 50

  /////////////////////////////
  else if (path === "e") {
    var path3 = prompt("Gross. You've decided to live in the gutters. Now you're hungry. Do you (b)eg, (d)umpster dive, or (h)unt wildlife?");
    if (path3 === "b") {
      var path31 = prompt("You sit on the sidewalk with a sign and a cup. Two hours goes by and you have about nine dollars. Do you spend it on (a)lcohol or (f)ood?")
      if (path31 === "a") {
        alert("It's not much, but you have enough for a small bottle of hard liquor. You put it in a brown paper bag and get drunk in a park.")
      }
      else if (path31 === "f") {
        alert("You walk into a nearby McDonalds and order a burger, fries and a coke. You're satisfied for now, but tomorrow's meal remains unknown.")
      }
    }
    else if (path3 === "d") {
      var path32 = prompt("Where? (o)live Garden, (d)unkin Donuts, or (s)ome hipster sandwich place you've never heard of because corporations are evil, man?")
      if (path32 === "o") {
        alert("The dumpster is locked! You have died of starvation.")
      }
      else if (path32 === "d") {
        alert("Lucky you. There's an employee about to throw out a garbage bag with over 100 clean, unsold donuts. He gives it to you and you happily feast on donuts into the night.")
      }
      else if (path32 === "s") {
        alert("There's no food in the dumpster because the sandwich place composts their food waste. You have died of starvation.")
      }
    }
    else if (path3 === "h") {
      var path33 = prompt("Do you want to hunt (p)igeons, (r)ats, or (w)olves?")
      if (path33 === "p") {
        alert("Hunting pigeons is easy, but you cook it improperly. You have died of dysentery.")
      }
      else if (path33 === "r") {
        alert("You stalk the sewers looking for unsuspecting rats. Unfortunately you cannot see in the dark and are attacked by a large pack of rats.")
      }
      else if (path33 === "w") {
        var path331 = prompt("Why the hell would you try to hunt wolves? You venture far outside the city into the woods, where more wildlife is present. You enter a clearing and see, to your astonishment, a large alpha wolf. Do you (f)ight it, (t)ame it, or (s)ubmit to it?")
        if (path331 === "f") {
          alert("You use your fists. It's not very effective. Alpha Wolf uses howl. Soon dozens of wolves rush in from all sides. They kill you and eat you.")
        }
        if (path331 === "t") {
          alert("You treat it like a regular dog by calling it, but it's a wolf. Alpha Wolf uses howl. Soon dozens of wolves rush in from all sides. They kill you and eat you.")
        }
        if (path331 === "s") {
          alert("You lay on your back to allow him to assert his dominance as the Alpha Wolf. Alpha Wolf is confused because you are not a wolf. He bites your throat and you die.")
        }
      }
    }
  }

var user = prompt ("Would you like to play mini Mario. Type Yes or No");

while (user == "Yes") {
  var play = prompt ("Ok great! Toad has a message for you. Hi Mario! You have three options at your disposal to defeat Bowser and save the Princess. Type 1 for Hammer, Type 2 for Mushroom, or Type 3 for Yoshi's Egg" )

  switch(parseInt(play)) {
    case 1:
      weapon = "Hammer"
      break;

    case 2:
      weapon = "Mushroom"
      break;

      case 3:
      weapon = "Egg"
      break;

      default:
      text = "";

  }
  var guard= prompt (" You have encountered the guard of Bowser's castle. Fight or Make Peace?")
    if ("fight" == guard) {
        var entry= prompt ("You've succesfully defeated the guard but Bowser is missing from the castle. Would you like to find him (type find) or just wait for him to get back? (type wait)")
    } else {
        var peace= alert ("Sorry but Super Heros have to fight! Game Over!")
    }
            if ("find" == entry) {
                var star= prompt("You are now in the Star Room. Theres a huge talking star near the apple tree. He says that Bowser awaits at Rainbow Road. Go to Rainbow Road (type rainbow) or ignore the star(type ignore) and proceed")
            } else {
                var wait= alert("It seems Bowser used your time of waiting to slay off the Princess.  Game Over!")
            }

                   if ("rainbow"== star){
                      var brave= prompt("You have made it to Rainbow Road.  Theres a magic carpet ride going down a dark space.  Be brave and take the ride (type ride) or play it smart? (type smart)")
                } else {
                    var ignore= alert("The star is very wise.  You did not seek his wisdom.  You are now lost and Bowser has done away with the Princess! Game Over!")
                }

                        if ("ride"== brave) {
                            var Bowser= prompt("You have now found Bowser deep in his monster cave.  It's time for action!")
                        }      else {
                                  var smart= alert("Chicken! You'll never be able to find Bowser! Game Over")
                              }

                            switch(parseInt(Bowser)) {
                              case 1:
                                alert = "The hammer was sturdy enough to knock off the head of Bowser! Congrats! You've slayed the beast!"
                                break;

                              case 2:
                                alert = "You turned into a giant Mario and super punched Bowser to a KO! Congrats! You have slayed the beast!"
                                break;

                                case 3:
                                alert = "Yoshi was not powerful enough to go against Bowser.  Sorry.  Game Over!"
                                break;

                                default:
                                text = "Come on now.  We're playing a game but stop playing games!";

                            }
                        }

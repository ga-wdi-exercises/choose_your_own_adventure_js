console.log("hello world");

var start = prompt ("Hello! Shall we play a game? (Yes or No)");

if (start === "Yes") {
  alert("Awesome! (Click OK to Continue)");

  var shower = prompt ("You are in the shower soaping up when, suddenly, you hear your wife scream.  Startled, you drop the soap.  What do you do? 1- Rinse, dry off, get dressed then go downstairs. It's probably just a mouse.  OR 2 - Jump out of the shower, grab a towel and run downstairs to see what's going on.  I NEED TO RESCUE MY WIFE! (Enter 1 or 2)");

      if (shower === "1") {
        alert("As you are rinsing off you get shampoo in your eyes.  You stumble around trying to get it rinsed out.  You step on the bar of soap, crash down and crack your skull open.  As your brains and blood ooze down the drain all you can think of is THEY ARE GOING TO FIND ME NAKED!  Everything goes dark.  The End.");
      } else {
          var showerLive = alert ("You get downstairs, soap drying into a sticky film on your skin you see your wife and son staring out the open front door.   You walk over and look out to see what they see.  There, on the street, are people running around getting...attacked?...by their…neighbors?  It looks like a riot has broken out on the streets of Little Turtle! (Click OK to Continue)");

            var frontDoor = prompt ("One of your neighbors, Bob, starts towards your house.  What do you do? 1 - Walk out and see if Bob knows what's going on. OR 2 - Slam the door, lock it up and tell your son to get your guns! (Enter 1 or 2)");

              if (frontDoor === "1") {
                alert("You walk up to the Bob and ask him Hey buddy…whats going on?  Bob looks up at you and you see…is that BLOOD???...smeared all over his face.  He lunges at you, you fall to the ground and Bob  starts chewing on you.  You hear your wife scream.  As blood starts pumping out of your neck all you can think is I'M LAYING IN THE STREET IN NOTHING BUT A TOWEL!  Everything goes dark.  The End");
              } else {
                  var frontDoorLive = alert ("You tell your wife to close the curtains, lock the back door and turn off all the lights.  While you are waiting for your trusty shotgun you look through the peephole on the front door. (Click OK to Continue)");

                    var peepHole = prompt ("You see Bob standing there banging on the door with his fists.  THUMP!  THUMP!  THUMP!   What do you do?  1 - You open the door!  Bob needs help! OR 2 - You yell at Bob though the door, asking him if he knows whats going on. (Enter 1 or 2)");

                      if (peepHole === "1") {
                        alert("Bob looks up at you and you see…is that BLOOD...smeared all over his face.  He lunges at you, you fall to the ground and Bob  starts chewing on you.  You hear your wife scream.  As blood starts pumping out of your neck all you can think is I'M LAYING ON THE FRONT PORCH IN A TOWEL!  Everything goes dark.  The End");
                      } else {
                        var peepHoleLive = ("Bob looks up at you and you see…is that BLOOD???...smeared all over his face.  He tips his head to the side as if he is trying to listen to what you are saying. (Click OK to Continue)");

                          var licking = prompt ("He leans in towards the door, fists raised, opens his mouth and…licks the peephole.  What do you do? 1 - You rip open the door and ask Bob what the heck is doing?!?! OR 2 - You stand there not believing what you are seeing. (Enter 1 or 2)");

                            if (licking === "1") {
                              alert("Bob lunges at you, you fall to the ground and Bob  starts chewing on you.  You hear your wife scream.  As blood starts pumping out of your neck all you can think is I'M LAYING ON THE FRONT PORCH IN A TOWEL!  Everything goes dark.  The End");
                            } else {
                              var lickingLive = prompt ("He just…licked…actually LICKED…the front door.  GROSS!  Your son runs up with your shotgun, loaded and ready to go.  You level your shotgun at the peephole and... (Click OK to Continue)");

                                var wifeTroubles = prompt ("Your wife screams WHAT ARE YOU DOING?!?!  Startled, you lower the shotgun, look at her and... 1 - Tell her you love her as you shoot at the peephole. OR 2 - Tell her you love her and begin leveling your shotgun at the door again OR 3 - Stare at her while your brain catches up with your instincts. (Enter 1 or 2 or 3)");

                                  if (wifeTroubles === "1") {
                                    alert("BAM! You blew a hole in your front door and Bob is now headless.  Your ears are ringing and the smell of gunpowder fills the air.  As you look out the door you see at least 20 more…zombies??? shuffling towards your house.  Your door in ruins, the zombies pile in and begin to feast on you and your family.  All you can think is BOB WAS LICKING MY DOOR!  Everything goes dark.  The End.");
                                  } else if(wifeTroubles == "2"){
                                      //LOOP GOES HERE
                                      // while (wifeTroubles == "2") {
                                      //   var wifeTroubles = prompt ("Your wife screams WHAT ARE YOU DOING?!?!  Startled, you lower the shotgun, look at her and... 1 - Tell her you love her as you shoot at the peephole. OR 2 - Tell her you love her and begin leveling your shotgun at the door again OR 3 - Stare at her while your brain catches up with your instincts. (Enter 1 or 2 or 3)");

                                    
                                   } else {
                                    var wifeTroublesLive = prompt ("The banging continues and gets louder and louder as more…zombies??? join in with Bob.  What do you do? 1 - You lower your shotgun and yell EVERYONE TO THE CAR! OR 2 - You lower your shotgun and yell EVERYONE UPSTAIRS! (Enter 1 or 2)");

                                    if (wifeTroublesLive === "1") {
                                      alert("Your family piles out the back door and into the garage.  You then remember you need your keys and turn around and, as you are running towards the house, step into a pile of dog poo!  Your legs skid out from under you.  As you try to get up your neighbor, Zombie Jen, attacks you.  All you can think is OH GROSS!  I HAVE DOG POO ALL OVER MY FEET!  Everything goes dark.  The End.");
                                    } else {
                                      alert("Your family piles up the stairs and into the back bedroom.  As you sit there huddled in the corner the banging at the front door eventually stops.  Everythig is quiet…for now.  Your wife looks at you and asks WHY DO YOU HAVE SHAMPOO IN YOUR HAIR?  To Be Continued...")
                                    }
                                  }
                            }
                      }
        }
        }
      }else {
        alert ("Bummer…you're missing out on some serious action and adventure!");
}

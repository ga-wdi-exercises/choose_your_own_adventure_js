var buffer = function(){
  console.log("***********************")
}

console.log("You need to get into the non-descript gray building \n to turn in your form. You are greeted by a security guard.")
buffer()
var theGuard = prompt("Please empty your pockets and wait to be frisked.  Do you comply? (please enter 'y' or 'n')") === 'y'

if (theGuard) {
  console.log("You empty your pockets and are frisked.  The guard finds a switchblade in your pocket.")
buffer()
  var switchBlade = prompt("Do you attempt to use the blade on the guard? (please enter 'y' or 'n')");

    if (switchBlade === 'y') {
      console.log("You take a lunging stab at the guard. You miss. He shoots you. You die. You have failed The Bureaucracy.");
      buffer()
    }
    if (switchBlade === 'n') {
      console.log("The guard confiscates your knife and allows you to enter. You proceed to the elevator.");
      console.log("You are greeted at the elevator by a tiny old man.");
      buffer()
      var oldMan = prompt("Please tell the old man what floor you wish to go to (number 1-100)");

        if (oldMan <= 12) {
          console.log("You are escorted to your floor. You wait in line to turn in your form.  After four grueling hours, you get to the front of the line.")
          buffer()
          var lowFloor = prompt("Should you turn in a TM-2, TM-4, or ask the representative for more information ('TM-2', 'TM-4', or 'info')?")
            if (lowFloor === "TM-2") {
              console.log("This is indeed the first form you need.")
              buffer()
              var firstForm = prompt("Now do you fill out a TM-4, ask the representative for more information, or return home already tired from your ordeal ('TM-4', 'info', 'home')?")

                if (firstForm === "TM-4") {
                  console.log("Congrats! Only once you have completed the TM-2 can you complete the TM-4.");
                  console.log("Now you can head down to the visa office with your receipt.");
                  buffer()
                  var visaOffice = prompt("What country are you going to: France, Yemen, or Yugoslavia?")
                    if (visaOffice === "France") {
                      console.log("Congratulations! You got your visa, your paperwork is filed, and you can go to post!!");
                      console.log("You have completed Bureacracy: The Game!!!");
                      buffer()
                    }
                    if (visaOffice === "Yemen") {
                      console.log("Unfortunately that country is embroiled in a civil war.  No visas are being issued.");
                      console.log("The Bureaucracy has bested you today. Try again later.");
                      buffer()
                    }
                    if (visaOffice === "Yugoslavia") {
                      console.log("That country no longer exists.");
                      console.log("No visa for you and your forms are now invalid.  Verily you have failed The Bureaucracy");
                      buffer()
                    }
                }
                if (firstForm === "info") {
                  console.log("You fool! If you don't know by now, you will never never know!");
                  console.log("You have failed The Bureaucracy!");
                  buffer()
                }
                if (firstForm === "home") {
                  console.log("You should not have done that. Now you will have to start over from scratch, the form version will surely change!");
                  console.log("You have failed The Bureaucracy!");
                  buffer()
                }
            }
            else if (lowFloor === 'TM-4') {
              console.log("You cannot fill out the TM-4 until you complete and return your TM-2.");
              buffer()
              var wrongForm = prompt("Do you wish to complete a TM-2? (please answer 'y' or 'n')");
            }
              if (wrongForm === 'y') {
                console.log("Good. You fill out your TM-2 and turn it in.");
                buffer()
                var firstForm = prompt("Now do you fill out a TM-4, ask the representative for more information, or return home already tired from your ordeal ('TM-4', 'info', 'home')?")

                if (firstForm === "TM-4") {
                  console.log("Congrats!");
                  console.log("Now you can head down to the visa office with your receipt.");
                  buffer()
                  var visaOffice = prompt("What country are you going to: UK, Libya, or Bhutan?")
                    if (visaOffice === "UK") {
                      console.log("Congratulations! You got your visa, your paperwork is filed, and you can go to post!!");
                      console.log("You have completed Bureacracy: The Game!!!");
                      buffer()
                    }
                    else if (visaOffice === "Libya") {
                      console.log("Unfortunately that country is not safe for you right now.  No visas are being issued.");
                      console.log("The Bureaucracy has bested you today. Try again later.");
                      buffer()
                    }
                    else {
                      console.log("That country is not issuing visas right now.");
                      console.log("No visa for you and your forms are now invalid.  Verily you have failed The Bureaucracy");
                      buffer()
                    }
                }
                if (firstForm === "info") {
                  console.log("You fool! The rep has left for the day!!");
                  console.log("You have failed The Bureaucracy!");
                  buffer()
                }
                if (firstForm === "home") {
                  console.log("You should not have done that. Now you will have to start over from scratch as the form version will surely change!");
                  console.log("You have failed The Bureaucracy!");
                  buffer()
                }
              }
              else if (wrongForm === 'n') {
                console.log("Then you must leave and never come back!");
                console.log("You have lost to The Bureaucracy!!");
          }
            else {
              console.log("Never ask for help! You have lost The Bureaucracy!");
          }
        }
        else if (oldMan === "13") {
          console.log("You are dropped off at the 13th floor and fall into oblivion.  You have indeed failed The Bureaucracy.");
        }
        else {
          console.log("The old man reminds you that this is DC and buildings aren't that tall. \nHe laughs in your face.  You are discouraged and return home. \nYou have failed The Bureaucracy.");
        }
    }
}
if (!theGuard) {
  console.log("The guard informs you that you can either comply or leave the building.");
  buffer()
  var theGuardFollow = prompt("Do you comply or leave the building? (press 'c' for comply and 'l' for leave)") === 'c';

    if (theGuardFollow) {
      console.log("Good choice.  Unfortunately the building is now closed and you will have to come back later.");
      console.log("You have failed The Bureaucracy.")
    }
    if (!theGuardFollow) {
      console.log("You leave. You lose.");
    }
}

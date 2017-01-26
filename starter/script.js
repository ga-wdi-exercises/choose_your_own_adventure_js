// put code here!
var name = prompt("Welcome to Westoros! From what family do you hail? (Enter your own last name)");
alert (`Welcome Lord/Lady ${name}. I look forward to serving as your squire!`);

var house = prompt ("Before we can start our adventure, what is the name of the house do you serve? ( Reed[North], Martell[South], Tyrell [West] )");

if (house ==="Reed") {
    var lifechoice = prompt ("Ah, house Reed, the gate keepers of the North and bannermen to the Starks. You must be so proud to come from such an ancient lineage. Rob Stark has recently taken the title 'King in the North' and plans to take Casterly Rock. Will you follow your King? (Y/N)")
    if (lifechoice==="Y") {
      var battle = prompt ("Follow rob into battle, lead the army on the field or do you stay behind to strategize? (L/S)")
        if (battle==="L") {
          alert ("You died in battle. Sucks to suck")
        } else if (battle==="S") {
          alert ("you still died because its GOT")
        }
      ;
    } else if (lifechoice==="N") {
      prompt ("you still dead because this is GoT");
    };
} else if (house === "Martell") {
    var voyage = prompt ("Oberyn is leaving for Kings Landing, do you follow or stay in Dorn? (S/F)")
      if (voyage === "S") {
        var snakes = prompt ("Weeks after Oberyns deaparture...sandsnakes... poison or no (Y/N)")
          if (snakes === "Y"){
            alert ("Cersei finds out and sends assassins")
          } else if (snakes === "N") {
            alert ("You cant live knowing the plan. You die.")
          }
        } else if (voyage === "F") {
            var boat = prompt ("Roulette, what do you roll? (1-6)");

            switch (boat) {
              case "1":
                fate = '1';
                  alert ("you dead my dude.")
                break;
              case "2":
                  fate = '2';
                    alert ("you dead my dude.")
                  break;
              case "3":
                  fate = '3';
                    alert ("you dead my dude.")
                  break;
              case "4":
                 fate = '4';
                 alert ("you dead my dude.")
                 break;
              case "5":
                 fate = '5';
                 alert ("you dead my dude.")
                 break;
              case "6":
                  fate = '6';
                  alert ("you dead my dude.")
                  break;
              default:
                fate = null;
                alert('there are only 6 sides on this die...speaking of which, you ded.')

            }
        }
      ;
} else if (house === "Tyrell") {
    // alert ("blahblah");
    var roses = prompt ( "You know about Loras, do you tell the red priestess? (Y/N)")
      if (roses==="Y") {
        var shady = prompt ("The Red Preistess sends a shadow knight to kill Loras in the dead of night. Do you flee the camp before anyone knows you had something to do with it? Or, do you stick around and play it cool? (F/S)")
          if (shady === "F"){
            alert ("Brienne quickly notices your absence and follows suit. She never catches up with you, however, because two days into the chase you get dysentery and die Oregon Trail style.")

          } else if (shady === "S") {
            alert ( "After watching your king get kebobbed by a shadow knight, you realize the night is dark and full of terrors and you want none of that. You hang yourself in your quarters before dawn.")

          }

      } else if (roses === "N"){
          alert ("Good answer! Outting someone is never the right thing to do. Because you are a decent human being, and a true ally of the LGBT community, you are invited to join the King's Gaurd and serve under Brienne of Tarth. Go you! ")
          alert ("Oh, but to be clear, you still die at the end of the seige of Winterfell (season 5 finale). Stannis absorbs Renly's armies after his death and we all know what happened there.")
      }
};

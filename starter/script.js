// put code here!
var name = prompt("Welcome to Westoros! From what family do you hail? (Enter your own last name)");
alert (`Welcome Lord/Lady ${name}. I look forward to serving as your squire!`);

var house = prompt ("Before we can start our adventure, what is the name of the house do you serve? ( Reed, Martell, or Tyrell)");

if (house ==="Reed") {
    var lifechoice = prompt ("Ah, house Reed, the gate keepers of the North and bannermen to the Starks. You must be so proud to come from such an ancient lineage. Rob Stark has recently taken the title 'King in the North' and plans to take Casterly Rock. Will you follow your King? (Y/N)")
    if (lifechoice==="Y") {
      var battle = prompt ("You have chosen to follow Rob into battle. Would you prefer to (L)ead the army on the field or do you stay behind to (S)trategize for your next march? (L/S)")
        if (battle==="L") {
          alert ("While riding into battle you were taken out by a flaming arrow before the armies ever met. Maybe you should have rode in a serpentine pattern? Hopefully, no other northermen make this mistake... ")
        } else if (battle==="S") {
          alert ("While you hung back a Lannister assassin snuck on to camp to take out a few of the commanding officers. Guess who was one of them? :D but really :( ")
        }
      ;
    } else if (lifechoice==="N") {
      alert ("What do you mean 'No?' you're a friggen bannerman. Your people kill you for making them look weak. BECAUSE YOU ARE. #kingindanorf");
    };
} else if (house === "Martell") {
    var voyage = prompt ("Oberyn is leaving for Kings Landing to attend Justin Bei-- I mean Jeoffry's wedding. Do you follow the Red Viper or stay in Dorn? (S/F)")
      if (voyage === "S") {
        var snakes = prompt ("Weeks after Oberyns deaparture, the Sandsnakes approach you regarding their plans to kill Prince Doren and poise Oberyn for the throne upon his return. Do you poison your prince, or no? (Y/N)")
          if (snakes === "Y"){
            alert ("While attempting to poison the prince's wine, you are caught by his body gaurd and executed at once in the water gardens.")
          } else if (snakes === "N") {
            alert ("Well, obviously you cant go on living if you know about the plan and Obara takes you out quickly before you even have a chance to leave the room.")
          }
        } else if (voyage === "F") {
            var boat = prompt ("While on the ship, you are roped into a game of Dornish Roulette. One of the numbers has been assigned as the 'Death Score.' If you win you get front row tickets to the wedding and all you can eat cake. If you lose... well, you know how these things go. What do you roll? (1-6)");

            switch (boat) {
              case "1":
                fate = '1';
                  alert ("Congrats! You won and you got to go to the wedding! However, as you probably know, weddings are a no go in this universe. Once you got there, people started dying (specifically the king) and, well, you're brown and from the south, so you got shot before anyone even knew what was happening.")
                break;
              case "2":
                  fate = '2';
                    alert ("Congrats! You won and you got to go to the wedding! However, as you probably know, weddings are a no go in this universe. Once you got there, people started dying (specifically the king) and, well, you're brown and from the south, so you got shot before anyone even knew what was happening.")
                  break;
              case "3":
                  fate = '3';
                    alert ("Ohhhh, turns out this was the Death Score. You are stabbed in the face with a dagger before Oberyn can protest the results. It's fine though, everyone knows weddings are Bad News Bears in Westoros")
                  break;
              case "4":
                 fate = '4';
                 alert ("Congrats! You won and you got to go to the wedding! However, as you probably know, weddings are a no go in this universe. Once you got there, people started dying (specifically the king) and, well, you're brown and from the south, so you got shot before anyone even knew what was happening.")
                 break;
              case "5":
                 fate = '5';
                 alert ("Congrats! You won and you got to go to the wedding! However, as you probably know, weddings are a no go in this universe. Once you got there, people started dying (specifically the king) and, well, you're brown and from the south, so you got shot before anyone even knew what was happening.")
                 break;
              case "6":
                  fate = '6';
                  alert ("Congrats! You won and you got to go to the wedding! However, as you probably know, weddings are a no go in this universe. Once you got there, people started dying (specifically the king) and, well, you're brown and from the south, so you got shot before anyone even knew what was happening.")
                  break;
              default:
                fate = null;
                alert('there are only 6 sides on this die...speaking of which, you died-- from dysentery of all things. So weird.')

            }
        }
      ;
} else if (house === "Tyrell") {

    alert ("Wow, really? You went with Tyrell? Interesting.");
    alert("You have one too many at the camp happy hour one night and accidentally find out about King Renly and Loras' dating status. This could mean SCANDAL for the group, or even better, a nice payday for you (if relayed to the right people!) You hear the Red Preistess has buddied up with Stannis and would probably be down for some spilled tea.");

     var roses = prompt ("So, do you tell the red priestess? (Y/N)")

    if (roses==="Y") {
        alert("The Red Preistess sends a shadow knight to kill Renly  in the dead of night, making Stannis the uncontested heir to the Iron Throne.");

      var shady= prompt ("Do you (F)lee the camp before anyone knows you had something to do with it? Or, do you (S)tay and play it cool? (F/S)")

          if (shady === "F") {
            alert ("Brienne quickly notices your absence and follows suit. She never catches up with you, however, because two days into the chase you get dysentery and die Oregon Trail style.");

          } else if (shady === "S") {
            alert ( "After watching your king get kebobbed by a shadow knight, you realize the night is dark and full of terrors and you want none of that. You hang yourself in your quarters before dawn.");

          }

      } else if (roses === "N"){

          alert ("Good answer! Outting someone is never the right thing to do. Because you are a decent human being, you are invited to join the King's Gaurd and serve under Brienne of Tarth. Go you! ");

          alert ("Oh, but to be clear, you still end up dying during the seige of Winterfell (season 5 finale). #spoileralert");
      };
    }

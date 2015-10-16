var game = prompt("You are scuba diving when you encounter a sunken ship. It looks dangerous. Do you want to EXPLORE, SWIM BY, or GO BACK?").toUpperCase();
switch(game) {
    case "EXPLORE":
      var smart = prompt("Awesome. You want to explore! While exploring, you find some gold coins. Do you TAKE them or respectfully LEAVE them?").toUpperCase();

        switch(smart) {
          case "TAKE":
            var oceanGod = prompt("Oh no! You have disturbed the Ocean God who guards the coins. Will you FIGHT him or BEG for your life?").toUpperCase();

              switch(oceanGod) {
                case "FIGHT":
                  console.log("Are you kidding? You can't fight an Ocean God! He stabs you with his trident and you die.");
                  break;
                case "BEG":
                  console.log("He hates people who beg. The Ocean God stabs you with his trident and you die.");                    break;
              } // ends switch oceanGod
            break; //break for case "TAKE
            case "LEAVE":
              var suspicious = prompt("It is too suspicious for gold to just be hanging out like that so you leave it. The Ocean God appears and says you have passed the honesty test and you may now take the gold. Do you take it now? YES or NO?").toUpperCase();
              var thank = prompt("Do you thank him? YES or NO?").toUpperCase();
              if (suspicious === "NO" && thank === "YES") {
                console.log("Ahh. You are wise. You are not much richer but you do leave the ocean with your life. He was going to kill you if you took the coins.");
              } else {
                console.log("Either you got tricked by him or were rude. The Ocean God stabs you with his trident and you die.");
              }
              break; //break for case "LEAVE"
          break; //break for case TAKE
        } // closes switch smart
      break; //break for case EXPLORE

    case 'SWIM BY':
        var shark = prompt("What a punk. While swimming away, you find yourself head to head with a shark. Do you choose fight or flight?","Type 'fight' or 'flight'").toUpperCase();
        var strong = prompt("Are you strong?","Type 'yes' or'no'").toUpperCase();
        if (shark === "FIGHT" && strong === "YES") {
            console.log("Great job, Gladiator. You killed the shark and made it out alive.");
        }   else {
                console.log("Either you're a punk and/or you're weak. Either way, you got eaten by the shark.");
            }
    break; //break for case SWIM BY

    case 'GO BACK':
        var turnBack = prompt("Nope, sorry. You were going to just go back but you knew it would be a lost opportunity so you decide to enter the sunken ship. An Ocean God appears and says that upon entering, you will encounter lots of treasure. To enter or leave, you must guess what number he's thinking of from 0-10. If you get it wrong, you must keep guessing. Beware that your oxygen tank is running low. How old do you think he is?");
        while (turnBack < 1 || turnBack >= 2) {
          var turnBack = prompt("Nope. Not close enough. Keep trying. Your oxygen tank's running low.");
        }
          console.log("Wow. Good job! The Ocean God's favorite number is 1. He gets upset that you were able to guess so easily so he stabs you with his trident and you die.");
        break; //break for case GO BACK
    default:
        console.log("I don't understand what you input. Try again.");
} //Ends switch game

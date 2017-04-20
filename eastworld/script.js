console.log("Welcome to EASTWORLD: 2016's hottest alternate reality experience! What's your name?")

var name = prompt("Enter name here");
var path1;

console.log("Hello " + name + "! " + "Nice to meet you! Choose a year to begin your journey in. Choose wisely!");

var firstpath = prompt("Enter year here");

if (firstpath<=1960) {
  console.log("Ha, " + firstpath + "! " + "I don't think you'll enjoy that year as much as you think you will. Try again.");
  // for (firstpath<=1960; firstpath > 1960; i) // add loop here
} else if (firstpath<=1980) {
  console.log("Hmm, interesting year that " + firstpath + ". Let's do it. How do you feel about going to SPACE?");
    var spacerace = prompt("Enter 'YEEHAW' to accept the space mission. Enter 'acrophobia' if you're gonna be sick just thinking about it. Enter 'more info' if you're a little skeptical.");
      if (spacerace==="YEEHAW") {
        console.log("You just went to the moon with no training or preparation. That was silly and you died.");
      } else if (spacerace==="acrophobia") {
        console.log("Wise choice. Life isn't Armageddon the Movie and you are certainly not Bruce Willis... wait, are you Bruce Willis?");
          var acro = prompt("yes or no?");
            if (acro==="yes") {
              // switch (name) {
              //   case acro("yes"):
              //   name = "Bruce";
              //   break;
              //   default:
              //   name = name;
              // };
              console.log("What are you still doing here?? We need you in space, Bruce!");
            } else if (acro==="no") {
              console.log("Right. The abundance of hair should have given it away.")
            };
      } else if (spacerace==="more info") {
        console.log("You have the opportunity to go to SPACE and you need more information?")
      } else {
        console.log("INVALID. Try again and enter 'YEEHAW', 'acrophobia' or 'more info' (case-sensitive).");
      }
} else if (firstpath<=2000) {
  console.log("Not feeling too adventurous, huh? " + firstpath + " it is! Just in time to stop the rise of the MILLENIALS. Here comes their leader now, teenage Beyonce! What are you going to do?? ");
    var beyoncefight = prompt("To dodge her, enter 'to the left'. To fight, enter 'ready for this jelly'.");
      if (beyoncefight==="to the left") {
        console.log("That logic...irreplaceable. There were Destiny's Child groupies in the bushes waiting to ambush you.")
      } else if (beyoncefight==="ready for this jelly") {
        console.log("You just got your ass beat by Beyonce!");
        var beysurvivor = prompt("Are you a survivor? Y/N?")
          if (beysurvivor==="Y") {
            console.log("Dust yourself off and try again!")
          } else if (beysurvivor==="N") {
            console.log("---") // fix this
          }
      }
} else {
  console.log("That's just boring, " + name + ". Go have a drink and come back when you're ready to experience some shit.");
}

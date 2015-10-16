// put code here!
var stage2;
var userInput;
var killFlying;

var name=prompt("What is your name, stranger?");
var weapon=prompt("Nice to meet you "+name+". What is your weapon of choice? You have Sword, Maul, Bow. Choose S for sword, M for maul, B for bow");
  switch(weapon){
    case "S":
    console.log("Good choice, Sword is swift but have medium power. It will be good against pirates");
    stage2=prompt("Who would you like to face first?: Pirate(P)? or Demons(D)?");

    break;

    case "M":
    document.write("Good choice. Mauls are good for killing slow Demons. It's a weapon of men");
    stage2=prompt("Who would you like to face first?: Pirate(P)? or Demons(D)?");
    break;

    case "B":
    document.write("Good choice. Bows are good for killing anything, but you have to buy arrows. ");
    stage2=parseInt(prompt("How many arrows do you need?"));
    break;

    default:
    document.write("snap! You entered a wrong input");
  }
// Stage 2. If a player chose Sword or Maul, input kill command, or Game Over
  if(typeof stage2==='string'){

  userInput=parseInt(prompt("Press 1131123"));

    if(userInput===1131123){
        document.write("Nice job! You just slay the final boss of this Game.")
      }
      else{
      document.write("You failed to put the right combo. The monster just killed you. Please try again.");
      }

  }
// Stage 2, players chosing a bow as a weapon of choice
  else{
    killFlying=prompt("So you chose to use a bow. Wise decision. You have a special abilities to kill flying monsters. Would you like to proceed?(Y/N)");
    if(killFlying==="Y"){
      userInput=prompt("Type: I have bows and arrows. Come at me bro.")
      if(userInput=="I have bows and arrows. Come at me bro."){
        document.write("You have completed the game");
      }
      else{
        document.write("This is as far as you can go")
      }
    }

    }

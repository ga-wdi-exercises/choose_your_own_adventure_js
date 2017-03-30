userInput="";

prompt("Pick a number between 1 and 10.");
  if(userInput < 3){
    prompt("You're in the middle of a forest.  You see a brook.  Do you drink from it? (Y/N)");
      if(userInput="Y"){
        prompt("As you approach, you see something shining under the water.  It piques your interest.  Do you grab it? (Y/N)");
          if(userInput=="Y"){
            alert("Congratulations!  You found elven gold, which (as anyone will tell you) is far more valuable than any other gold.  You head back to the village and live happily ever after.");
          }
        }
      }else if(userInput=="N"){
          alert("You ignore the brook, and continue on.  Soon, the day grows hot.  You pass a well so deep that you can't see the bottom.  In your haste to quence your ever-growing thirst, you fall into the well.  You are never seen again.");
        }

  if(userInput>3 && userInput<8){
    prompt("You're just putting the finishing touches on your candy house when you hear two children nearby.  Do you call out to them or stay hidden? (C/H)");
      if(userInput=="C"){
        prompt("That was a bad idea.  Didn't anyone ever tell you what children do to candy houses?")
      }
  }

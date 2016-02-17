function startGame() {
var name = prompt('What is your NAME?');
'hello '+ name + '!';
var Class = prompt('choose WARRIOR or ROGUE');
  'you have chosen' + Class + '!';
  if (Class == 'ROGUE'){
    banditResponse = prompt('a bandit camp lay ahead do you FIGHT or SNEAK?');
  }
  if (banditResponse == 'FIGHT'){
    death();
  }
    else if (banditResponse == 'SNEAK'){
      riverChoice = prompt('a river is ahead do you SWIM or take the BRIDGE a mile away?');
  }
  if (riverChoice == 'BRIDGE'){
    death();
  }
    else if (riverChoice == 'SWIM'){
      houseChoice = prompt('soaking wet, you see a house. Do you ENTER, or do you PASS it by?');
    }
  if (houseChoice == 'PASS'){
    death();
  }
    else if (houseChoice == 'ENTER'){
      caveChoice = prompt('once dry, you leave the house and come accross a cave. There are two paths, one seems DARK, and one seems to be GLOWING. which one do you take?');
    }
  if (caveChoice == 'GLOWING'){
    death();
  }
    else if (caveChoice == 'DARK') {
      chaliceRogue = prompt('you get to a cave where two chalices lay in front of you, a PLAIN wooden one, and an adorned GOLDEN one. Which of these is the holy grail? the PLAIN or the GOLDEN chalice?');
    }
if (chaliceRogue == 'PLAIN'){
  'This is not indiana jones you ' + name + '!';
  death();
}
else if (chaliceChoice == 'GOLDEN'){
  rogueWish = prompt ('great magic overwhelms you, a booming voice tells you to make a wish. What is your wish?');
  death();
}
  if (Class == 'WARRIOR'){
    mercResponse = prompt('a mercenary camp lay ahead do you FIGHT or REASON?');
  }
  if (mercResponse == 'REASON'){
    death();
  }
    else if (mercResponse == 'FIGHT'){
      forestChoice = prompt('a forest is ahead with two paths. Do you go LEFT or RIGHT?');
    }
      while (forestChoice == 'RIGHT'){
        forestChoice = prompt('you are back where you were before. A forest is ahead with two paths. Do you go LEFT or RIGHT?');
  }
    if (forestChoice == 'LEFT'){
      chaliceChoice = prompt('you get to a cave where two chalices lay in front of you, a PLAIN wooden one, and an adorned GOLDEN one. Which of these is the holy grail? the PLAIN or the GOLDEN chalice?');
    }
      if (chaliceChoice == 'PLAIN'){
        'This is not indiana jones you ' + name + '!';
        death();
      }
        else if (chaliceChoice == 'GOLDEN'){
          warriorWish = prompt ('great magic overwhelms you, a booming voice tells you to make a wish. What is your wish?');
          death();
        }

function death(){
  choice = prompt('play again? YES or NO?');
  if (choice == 'YES'){
    startGame();
  }
  else if (choice == 'NO'){
    alert('GAME OVER ' + name);
  }
}
}

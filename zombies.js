function startGame () {
var start = prompt("Hello! What is your name?");
alert("We must hurry, " + start + "!! , Walkers are approaching!");

var zombiesKilled = prompt ("How many zombies have you killed?");{
    if (zombiesKilled >= 500) {
    prompt("Zombie Master!! You can lead us!");
     var master = prompt("Do you want to take the Jungle route or Concrete route? j/c");
  } else if (zombiesKilled < 100) {
    prompt("Kill more zombies!!");
      var newbieWeapon = prompt("Choose your weapon: Kitchen Knife or Stick? k/s"); {
        if (newbieWeapon == 'k') {
          alert("Be Smart!");
        } else if (newbieWeapon == 's') {
          alert("Good Luck!");

        }
      }
  } else if (zombiesKilled >= 100 || x < 500) {
    prompt("Great!! You can't lead a group yet, but you can assist our leaders."); {
      var chooseLeader = prompt("Choose your leader: Rick or Negan? r/n"); {
        if (chooseLeader == 'r') {
          alert("Wise Choice!");
        } else if (chooseLeader == 'n') {
          alert("You just got Lucilled by Negan! Start over and choose wisely");
          startGame();
        }

        }
      }
    }
  }
}

startGame();

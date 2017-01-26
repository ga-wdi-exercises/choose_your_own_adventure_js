//Welcome to Dark Souls
var response = prompt("Welcome to Dark Souls!\n Do you need help? \n (y/n)");
// waiting for a yes response
while (response != "y") {
  // if response is no
    response = prompt("Did you Die Already?\n (y/n)");
}
    switch (response) {
      case 'y' || 'Y':
        alert("You Died \n Refresh page to try again.");
        break;
      case 'n' || 'N':
        alert("Well then lets get started!");
        //asking what class
        response = prompt("Is your class Knight, Theif or Pyromancer \n (k/t/p)");
        //Knight
          if (response === 'k' || 'K'){
            //Weapon
            response = prompt("Do you have a weapon? \n (y/n)");
            if (response === 'y' || 'Y'){
              //Roll
              response = prompt("Do you know how to roll? \n (y/n)");
              if (response === 'n') {
                alert("You should learn too!");
                response = prompt("Are you ready to fight? \n (y/n)");
                if (response === 'y'){
                  alert("Walk into the mist \n and face the boss!");
                  response = prompt("Do you go straight and attack or roll left, or roll to the right? \n (s/l/r)");
                  if (response === 'l' || 'L'){
                    alert("You roll left, and dodge an attack.");
                    prompt("Do you want to attack now or roll again? \n (a/r)");
                    if(response === 'a' || 'A'){
                      alert("You attack, and do enough damaage to kill the Boss!");
                      prompt("Do you want to save at the bonefire? \n (y/n)");
                      if(response === 'y' || 'Y'){
                        alert("You survived!!!");
                      }
                    } else {
                      alert("You roll to the right, and get hit by attack.");
                    }
                  }

                  }
                }
              }
            }
        break;
      default:
        alert("You Died!");
    }
//here is where cut code goes

//Welcome to Dark Souls
var response = prompt("Welcome to Dark Souls!\n Do you need help? \n (y/n)");
// waiting for a yes response
if(response === 'n' ) {
  // if response is no
  alert("Well then lets get started!!");
        //asking what class
      response = prompt("Is your class Knight, Theif or Pyromancer \n (k/t/p)");
          switch (response){
            //KNight
            case 'k':
            alert('You choose the Knight class!');
            path();
             break;
            //Theif
           case 't':
           alert('You choose the Theif class!');
           path();
          break;
          //Pyromancer
          case 'p':
          alert('You choose the Pyromancer class!');
          path();
           break;
           default:
           response = alert("You Died thinking to hard!!");
         }
       }else{
         alert('You do need help! \n You should walk away now..');
       }

//function
function path(){
  //Weapon
  response = prompt("Do you have a weapon? \n (y/n)");
  if (response === 'y'){
    //Roll
    response = prompt("Do you know how to roll? \n (y/n)");
    // Learn
    if (response === 'n') {
      alert("You should learn too!");
      alert("If you don't know how to use Google!");
      response = prompt("Are you ready to fight? \n (y/n)");
      // Fight
      if (response === 'y'){
        alert("Walk into the mist \n and face the boss!");
        response = prompt("Do you go straight and attack or roll left, or roll to the right? \n (s/l/r)");
        // Left, Straight, Right
        if (response === 'l'){
          alert("You roll left, and dodge an attack.");
          //Move to the left
          //Attack again? or Roll?
            response = prompt("Do you want to attack now or roll again? \n (a/r)");
           if (response == 'a'){
             alert("You attack the boss and He dies!");
             response = prompt("There is a bonfire... \n Do you want to save?\n (y/n)");
             if (response === 'y'){
               alert('You rested at bondfire');
             } else {
               alert('A dog and skeleton came and killed you!');
             }
           } else if (response === 'r'){
             alert("You roll again and get hit by the Boss and Die");
           } else {
             alert("You don't move fast enough and get smacked across the room.");
            }
         } else if(response ==='s'){
           alert("You try to attack and get hit and Die.");
         } else if (response === 'r'){
           alert("You roll right into an attack and you Die.");
         } else {
           alert("You get smashed by the boss");
        }
       } else {
         alert("A skeleton comes up and kills you!");
       }
       } else {
       alert("You keep rolling around, and end off falling off a cliff and then you Die.");
     }

   }else {
     alert("You scrub...\n a cute little doggie come up and kills you because you\n think this game is easy.");
   }
 }

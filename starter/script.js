/* Westeros CYOA

Aegon, what do u want to conquer first?
1. Riverlands
2. Casterly Rock
3. Stormlands
4. The North
5. Highgarden
6. The Eyrie
8. Iron Islands
7. Dorne
*/

var armyStrength;
var dragons;
var supplies;
var strength;
var negotiation;

function rest(){
  armyStrength = (armyStrength/2) + 300;
}

function status(){
  console.log('You have ' + armyStrength ' , ' + dragons + 'Dragons, ' + supplies +' supplies');
}

function Westeros(){
  console.log("Aegon, which lands would you like to conquer first?"
"1. Riverlands"
"2. Casterly Rock"
"3. Stormlands"
"4. The North"
"5. Highgarden"
"6. The Eyrie"
"8. Iron Islands"
"7. Dorne");
dragons = 3;
armyStrength = 0;
supplies = 100;
politics = 1000;

return prompt("Pick a number");
};

function getPlayerMove(move)  {

if (move == null){
  move = Westeros();
}
return move;
}

function firstMove(choice1){


  if (choice1 === "1")
    prompt("How would you like to attack? D/A/N?");
    if {

    }
    console.log("Lord Tully has bent the knee. You have gained 300 armyStrength and 200 supplies");
    armyStrength = armyStrength + 300;
    supplies = supplies + 200;


    function

  }

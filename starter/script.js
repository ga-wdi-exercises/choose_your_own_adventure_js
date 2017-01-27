var adventure = prompt("You wake up on a deserted beach. There is no sign of civilization. Do you WALK inland or SCREAM for help?").toUpperCase();

switch(adventure) {
  case 'WALK':
    var suitcase = prompt("You reach a lush forest of palm and coconut trees. On the forest floor is an old, worn-down suitcase. Do you OPEN or IGNORE it?").toUpperCase();
    switch(open) {

    }case ''
    break;
  case 'SCREAM':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking WALK or SCREAM");
}

$(document).on("ready", function(){
  var name = prompt("What is your name?");

  $("h1").html("Nice to meet you, " + name +  ". Welcome to NBA Fantasy!");

var yearInput = prompt("Which NBA Finals game would you like to experience? (Please enter '2014' or '2015')");

if(yearInput == '2014'){
  var chooseTeam = prompt("Which team do you prefer? (Please enter 'Heat' or 'Spurs')");
}

if(chooseTeam == 'Heat' || chooseTeam == 'heat'){
  var choosePlayerHeat = prompt("Please enter one of the starter players' jersey number.");
  while(choosePlayerHeat !== "6" || choosePlayerHeat !== "3" || choosePlayerHeat !== "7"){
    prompt("Invalid number. Please choose an appropriate jersey number.");
    }
  if(choosePlayerHeat == "6"){
    prompt("You chose Lebron!");
  }
  else if (choosePlayerHeat == "3"){
    prompt("You chose Dywane!");
  }
  else if (choosePlayerHeat == "7"){
    prompt("You chose Chris!");
  }
}
// if(choosePlayerHeat == 'Lebron')
//
//
//
//
// } else {
//   var choosePlayerSpurs = prompt("Choose a star player. (Please enter 'Tony' or 'Tim')");
// }



// else if (yearInput == '2015'){
//   var chooseTeam = prompt("Which team do you prefer? (Please enter 'Warriors' or 'Cavaliers')");
// }
//
//
})

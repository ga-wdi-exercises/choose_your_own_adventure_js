var name = prompt("What is your name, citizen?")
alert( "Hello " + name + "!  Welcome to MEGA-CITY ONE!" );
var choice = prompt ( "You can STAY in your apartment block or LEAVE to explore the city." )
if( choice == "stay"){
  alert("BLOCK WARS have broken out in your building!")
  var responseOne = prompt( "You can HIDE in your room or FIGHT for your city block.")
    if( responseOne == "hide"){
      alert("DROKK! Rival block members are beating down your door, demanding credits!")
        var rivalResponse = prompt("You have to give up the goods! How many credits do you offer?")
          while( rivalResponse < 500){
            var rivalResponse = prompt("That's not good enough. Cough it up, punk!")
          }
          alert("Good enough. You live...for now.");
    }
    else if( responseOne == "fight"){
      alert("This is chaos! JUDGES are responding to the violence in your block.")
        var judgeRespose = prompt("You can RETREAT back into your home or SHOOT at the oncoming Judges.")
          if( judgeRespose == "retreat"){
            alert("Good call, citizen! Stay safe, stay inside!")
          }
          else if( judgeRespose == "shoot"){
            alert("Bad move, lawbreaker! THE SENTENCE IS DEATH!")
          }
      }
}
else if( choice == "leave"){
  alert("Great choice, citizen! Be careful out there!")
  var responseTwo = prompt( "You can be a GOOD citizen and visit the Alien Zoo or be BAD and commit some crimes.")
    if( responseTwo == "good"){
      alert("Have a great time, citizen!")
    }
    else if( responseTwo == "bad"){
      alert("Bad move, creep! You've run into THE LAW... Judge Dredd!!!")
        var badChoice = prompt("You can SURRENDER or RUN.")
          if( badChoice == "surrender"){
            alert("Wise move, citizen.  RESPECT THE BADGE!  You are sentenced to the ISOCUBES. 5 years!")
          }
          else if( badChoice == "run"){
            alert("Nice try, lawbreaker! NO ONE RUNS FROM THE LAW. You are sentenced to the ISOCUBES. 10 years!")
          }
    }
}

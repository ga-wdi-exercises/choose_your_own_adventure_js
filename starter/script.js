var buffer = function( ){
    console.log("************************************")
}

console.log("One day you are walking down the street. You see a penny on the ground.")
buffer( )

var pennyPickup = prompt("Do you pick the penny up? (Enter 'Y' or 'N')")

  if(pennyPickup == "Y"){
    console.log("Samuel L. Jackson appears and says 'A penny saved is a penny earned mothafucka!'")
    buffer()
      var samResponse = prompt("The princess of Skeet-town has been kidnapped by an evil bridge troll. Will you save her? (Please enter 'Y' or 'N')")
        if(samResponse == "Y"){ //Theres an issue here not sure why im getting syntax error//
        console.log("Samuel L Jackson gives you a PIPE!, and says that it may come in handy for your journey. You embark on your mission and come across a bridge.")
        buffer( )
        var trollResponse= prompt("The troll jumps out and says "you must answer one question to pass, and the princess is yours"... Do you /n('Q') - Answer? /n('M') - Murder the troll? /n('S') - Smoke the pipe?")
          if(trollResponse == 'M'){
            console.log("You murder the troll, the princess is freed and you get some sweet royal booty that night. You are also plagued with your actions for the rest of your life and live sad and alone. Doesn't matter, had sex")
          }
          else if(trollResponse == 'S'){
            console.log("You smoke the mysterious pipe that Samuel L Jackson bequeathed unto you. The troll's favorite thing is the ancient fairy grass that is stuffed in the pipe. You win his heart and you, the princess and the troll live happily ever after in a weird new-age nonmonogamous relationship.")
          }
          else if(trollResponse == 'Q'){
              var trollAnswer= prompt(The troll begins the game. 'What number am I thinking of?'/n(Enter 'a number'))
          }
        }
        else if(samResponse == 'N'){
          console.log("Morpheus appears, and together he and Samuel L. Jackson beat you while calling you a coward")
          buffer( )
        }
  }
  else if(pennyPickup == "N"){
    console.log("The ghost of Abraham Lincoln arrives, shames you and then chops your head off with an axe")
  }

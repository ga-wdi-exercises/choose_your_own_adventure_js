var buffer = function(){
    console.log("************************************")
}

console.log("One day you are walking down the street. You see a penny on the ground.")
buffer()
var pennyPickup = prompt("Do you pick the penny up? (Enter 'Y' or 'N')")

  if(pennyPickup == "N"){
    console.log("The ghost of Abraham Lincoln arrives, shames you and then chops your head off with an axe")
  }
  buffer()

  if(pennyPickup == "Y"){
    console.log("Samuel L. Jackson appears and says 'A penny saved is a penny earned mothafucka!'")
    buffer()
    var samResponse = prompt("The princess of Skeet-town has been kidnapped by an evil bridge troll. Will you save her? (Please enter 'Y' or 'N')")
      if(samResponse == 'N'){
          console.log("Morpheus appears, and together he and Samuel L. Jackson murder you while calling you a coward")
          buffer()
      }
      elseif(samResponse == "Y"){
        console.log("Samuel L Jackson gives you a PIPE!, and says that it may come in handy for your journey. You embark on your mission and come across a bridge.")
        buffer()
      }


  }

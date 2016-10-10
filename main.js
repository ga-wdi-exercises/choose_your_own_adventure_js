var answer = prompt("What is your name?")

alert("Hello " + answer + "! Welcome to the high school choose your own adventure game.")

answer = prompt("What grade would you like to be in? (9,10,11,12)")

switch(answer){
  case "9":
    alert("Great your now a freshman! However, you get into a fight with a bully.")
    answer = prompt("The bully knocks you over. Do you fight or try and run away?(F or R)")
    if (answer == "F"){
      alert("Great! You've decided to prove yourself and fight.")
      for (var i = 5; i > 0; i--){
        alert("You punch bully in the stomach. Bully has " + i + " health.")
      }
      alert("Congratulations! You defeated the bully. And the rest of your freshman year goes awesomely because people think you're cool!")
    }
    if (answer == "R"){
      alert("You sucessfully avoid a fight but your class now thinks your a wimp. The rest of your freshman year does not go smoothly.")
    }
    break;
  case "10":
    alert("Great! You are a sophmore and school is awesome. You learn poetry and guitar to woo the ladies.")
    break;
  case "11":
    alert("Great! You are a junior. School is starting to get very hard and you barely pass chemistry.")
    break;
  case "12":
    alert("Awesome! You end up in a great college and learn computer programming.")
    break;
  default:
    alert("You didn't answer right! Damn you!")
}

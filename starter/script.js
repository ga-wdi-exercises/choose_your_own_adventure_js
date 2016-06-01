// put code here!

alert("What is your name?");
var name = prompt();

alert("Hi " + name + "let's go on an adventure!")

alert("what is your age?");
var age = prompt()

function age_check () {
  while age/1 % =! age
  alert("Hmm... please refresh and try only using numbers for your age.")
  var age = prompt()
}

function older () {
  if age >= 75 {
    alert("Let's play a fun game. Type bingo or checkers")
    var game_selected = prompt(); {
      if game_selected = "bingo" {
        alert("good choice! do you prefer horizonal,vertical, or diagonal")
        var bingo_direction prompt(); {
            if bingo_direction = "horizonal"; {
              alert ("why " + bingo_direction + "?");
              prompt()};
            if bingo_direction = "vertical"; {
              alert ("why " + bingo_direction + "?");
              prompt()};
            if bingo_direction = "diagonal"; {
              alert ("why " + bingo_direction + "?");
              prompt()};
        }
      }
      else game_selected = "checkers" {
        alert ("decent choice! do you prefer black or red?")
        console.log.prompt()
      }
    }
  }
}

function medium () {
  if age > 18 {
    alert("Let's play a fun game. Type bingo or checkers")
    var game_selected = prompt(); {
      if game_selected = "bingo" {
        alert("There's no way you're under 75. Try again.")
        age = 75
      }
      else game_selected = "checkers" {
        alert ("decent choice! do you prefer black or red?")
        console.log.prompt()
      }
    }
  }
}

function young (){
  if age > 0 {
    alert("Let's play a fun game. Type bingo, checkers, or other")
    var game_selected = prompt(); {
      if game_selected = "bingo" {
        alert("good choice! do you prefer horizonal,vertical, or diagonal")
        console.log.prompt()
      }
      if game_selected = "checkers" {
        alert("decent choice! do you prefer black or red?")
        console.log.prompt()

      else game_selected = "other" {
        alert ("well aren't you special. what type of game do you like?")
        console.log.prompt()
      }
    }
  }
}

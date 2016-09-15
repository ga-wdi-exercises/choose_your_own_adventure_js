var name = 0;
name = prompt("What is your name?")
document.write("Welcome to the wasteland" + " " + name)
firstChoice()

function firstChoice () {
  var choice1 = 0
  choice1 = prompt("Are you heading north or south?")

  if ("north") {
  document.write("You meet a donkey")
}
  if ("south") {
    document.write("You meet a Gecko")
    secondChoice()
  }
}

function secondChoice() {
  document.write("The End")

}

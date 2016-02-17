var firstRound = function {
  var firstInput = prompt()
  if (firstInput = "chicken") {
    console.log("Ending")
  }
  else if (firstInput = "cow") {
    return secondRound
  }
  else if (firstInput = "pig") {
    return secondRound
  }
  else {
    console.log("Another Ending")
  }
}

var secondRound = function {
  var secondInput = prompt()

  if (secondInput = "potato") {
    console.log("Success")
  }
  else if (secondInput = "corn") {
    return thirdRound
  }
  else {
    console.log("ending")
  }
}

var thirdRound = function {
  console.log("Tripple Success!")
}

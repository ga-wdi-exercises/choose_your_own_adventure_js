var openingScenario = prompt("You are taking an immersive web development course, and your homework is to create a choose-your-own-adventure game using js conditionals. You are torn between taking a meta approach to the assignment and taking a more traditional approach. What do you do? If you decide to go meta, type \"m\". If you decide to go traditional, type \"t\"")

if (openingScenario === "m") {
  var isItIntegerTime = prompt("Good choice! Your instructions stipulate that your adventure must include at least one integer response and one string response. Do you want to tackle the integer response next? Type \"y\" for yes or \"n\" for no.")

  if (isItIntegerTime === "y") {
    var howMuchFun = parseInt(prompt("Okey dokey. On a scale of 1 to 10, how much fun are you having with this assignment?"))

    while (howMuchFun < 7) {
      if (howMuchFun < 5) {
        console.log("Fine. You're done. But you're gonna wish you had practiced more...")
        howMuchFun = undefined
      }
      else {
        howMuchFun = parseInt(prompt("Hmmm. It sounds like you could use a break to boost your energy. Go grab a snack, then enter a new fun level between 1 and 10"))
      }
    }

    if (howMuchFun >= 7) {
      if (howMuchFun > 10) {
        alert("Hey! The question asked for scale of 1 to 10! But if you're having that much fun, who am I to stop you? Click OK, you eager beaver.")
      }
      var isItStringTime = prompt("Awesome! Are you ready to add a string response? Type \"t\" if you think this is a trick question. Type \"y\" for yes or \"n\" for no.");
      if (isItStringTime === "t") {
        console.log("Bravo! This thing is already full of string responses. Go take a victory lap!");
      }
      else {
        console.log("Seriously? Go review your primitive data types or you're gonna have a bad time.");
      }
    }
  }

  else if (isItIntegerTime === "n") {
    var whyNot = prompt("Why not?")
    var trickedIntoInteger = parseInt(prompt("Ok. Let's break this down a little further. On a scale of 1 to 5, how badly do you not want to deal with this integer thing? 1 is \"Meh\" and 5 is \"Oh please dear god don't make me do this\""))
    if (trickedIntoInteger < 2) {
      console.log("Srsly? Meh? Then what's with all this excuse-making business? Anyway, you just did it, so...you're done.")
    }
    else {
      console.log("Aha! See!? You totally just did it. And to think moments ago, you were all \"" + whyNot + "\". Give yourself a pat on the back and trust the process. You're done.");
    }
  }
}

else if(openingScenario === "t") {
  var areYouSure = prompt("Booooring. Are you sure? Type \"y\" for yes or \"n\" for no.")
  if (areYouSure === "y") {
    characterPicker = prompt("Fine. Do you want to be a dragon, an elf, a hobbit, or a unicorn? Type \"d\" for dragon, \"e\" for elf, \"h\" for hobbit, or \"u\" for unicorn.")
    switch (characterPicker) {
      case "d": console.log("Once upon a time there was a dragon. It chose its own adventure. The End.");
      break;

      case "e": console.log("Once upon a time there was an elf. It chose its own adventure. The End.");
      break;

      case "h": console.log("Once upon a time there was a hobbit. It chose its own adventure. The End.");
      break;

      case "u": console.log("Once upon a time there was a unicorn. It chose its own adventure. The End.");
      break;
    }
  }

  else if (areYouSure === "n") {
  var bribeMe = parseInt(prompt("Really really? How much would you pay me for another shot at the meta option?"))
    for (i = 0; i < 2; i++){
        var bribeMeAgain = parseInt(prompt("Nope. " + bribeMe + " won't cut it. Try again."))
        var bribeMe = bribeMeAgain
    }
    console.log("Gotcha! The opportunity to be a maverick can't be bought! More importantly, didn't you kind of get your wish anyway...?")
  }
}

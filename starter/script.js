alert("You wake up in a strange forest and have no idea how you got there...")
var pocketsOrWalk = prompt("Do you want to check your pockets or start walking? (Type 'pockets' or 'walk')")
if (pocketsOrWalk == "pockets") {
  console.log("Let's see if we can find out how we got here...")
  var phoneOrLook = prompt("Sweet! You've got your cell. Do you want to call for help or take a look around?(Type 'phone' or 'look')")
  if (phoneOrLook == "look") {
    alert("You step into an empty grave, break your neck and die")
  }
  else if (phoneOrLook == "phone") {
    console.log("Phone is dead, and you hear something in the bushes!")
    var screamOrRun = prompt("Scream for help, or run for the hills? (Type 'scream' or 'run')")
    if (screamOrRun == "scream") {
      alert("Zombies hear you, and eat you alive!")
    }
    else if (screamOrRun == "run"){
      console.log("It was a pack of zombies, hurry before they get you!")
      var climbOrCrawl = prompt("You come to a tall fence, with a small hole underneath, do you climb over or crawl under? (Type 'climb' or 'crawl')")
      if (climbOrCrawl == "climb") {
        alert("You made it! Good thing zombies aren't good climbers.")
      }
      else if (climbOrCrawl == "crawl") {
        alert("Zombies eat you alive while you struggle to get under the fance. Should have laid off the cheeseburgers!")
       }
    }
  }
}
    else if (pocketsOrWalk == "walk") {
      console.log("Let's try and get outta here!")
      var upOrDown = prompt(" Should we head uphill or downhill? (Type 'up' or 'down')")
      if (upOrDown == "up") {
        console.log("There's a cliff and nowhere to go, go back")
// I want to put a loop in here that makes them "go back" to the last prompt...
      }
      if (upOrDown == "down") {
        console.log("You come to a fork in the road...")
        var leftMiddleRight = prompt("Choose the left, middle or right")
        if (leftMiddleRight == "left") {
          console.log("A fairy appears")
          var number = prompt("She tells you to pick a number from 1-10")
          while (number > 5) {
            var number = alert("You win! I will snap my fingers and send you home!")
// I can't get the less than part of this to work
          //while (number <= 5) {
            //var number = alert("DIE!")
        //  }
// Why wont my 2 other options work???
            if (leftMiddleRight == "middle") {
              console.log("YOU DIE!")
              if (leftMiddleRight == "right") {
                console.log("YOU DIE!")
          }
          }
        }

        }
      }
    }

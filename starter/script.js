var genrechoice = prompt("You are settling in for a night of Netflix and chill. What kind of movie do you want to watch: romance, action, or something else?");
  if (genrechoice == "romance") {
    romance = prompt("Hot stuff. Do you want it to be funny or dramatic?")
      if (romance == "funny") {
        funny = prompt("Ok, do you like Mila Kunis or Amy Schumer?")
          if (funny == "Mila Kunis"){
            document.write("Mila Kunis is my favorite, so we're going to watch Forgetting Sarah Marshall. Have fun!")
          } else if (funny == "Amy Schumer") {
            document.write("She was just in that movie with LeBron James, but it's not out on Netflix yet. Sorry!")
          } else {
              document.write("Sorry, not a valid choice. Please refresh the page to try again, or just go to sleep like you should be doing anyway.")
          }
        }
      else if (romance == "dramatic")
        dramatic = prompt("Do you like Ben Affleck or Leonardo?")
          if (dramatic == "Ben Affleck") {
            document.write("Oh no! Now you have to watch Pearl Harbor. Thanks for nothing, Michael Bay.")
          }
          else if (dramatic == "Leonardo") {
            document.write("Time for everyone's favorite, Titanic!")
          }
      else {
        document.write("Sorry, not a valid choice. Please refresh the page to try again, or just go to sleep like you should be doing anyway.")
      }
    }
  else if (genrechoice == "action") {
    action = prompt("I like to look at explosions, too. Do you want to watch a movie about war, or about aliens?")
      if (action == "war") {
        document.write("Black Hawk Down is one of my favorites. Let's do it.")
      } else if (action == "aliens") {
        document.write("Might as well watch Aliens, then!")
      } else {
        document.write("Sorry, not a valid choice. Please refresh the page to try again, or just go to sleep like you should be doing anyway.")
      }
    }
  else if (genrechoice == "something else") {
    age = prompt("Oh no! The wifi is done, so no more Netflix. We can still chill and drink this bottle of red wine. First, tell me how old you are.")
      while (age < 21)
      prompt("Sorry, I didn't hear you. Did you say you were " + age++ + "?")
    } if (age >= 21) {
      document.write("Awesome! Let's get boozy!")
    }

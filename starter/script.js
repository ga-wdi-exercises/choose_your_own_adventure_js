var name = prompt("Hi! I'm Max. What's your name?");
  Response = alert("Hello " + name + "! You probably haven't guessed, but I'm a robot from the year 5027. ");
var year = prompt("What year are you from?");
  Response = alert("Weird. I don't know anyone from " + year + ". I'm so glad I ran into you. I'm in desperate help.");

var goodPerson = prompt("Real quick. Are you a good person? (Please enter "Y" or "N")");

if (goodPerson === "Y"; {
  console.log ("Me too! In the future, the government has us go through simulations to determine whether robots can have citizenship.")
}

  var firstSimulation = prompt("Ok. I'm in front of my house and there is a soda can next to the trash bin. Should i pick it up? (Please enter "Y" or "N")");
  if (firstSimulation === "Y"); {
    console.log ("You are a good person, I just won 10 human points for picking up litter.")
  }
  else if (firstSimulation === "N"); {
    console.log ("You are a bad person, I just lost 10 human points for not picking up litter.")
  }

    var secondSimulation = prompt("Now, I'm in a my self driving car and there is another robot blinking his emergency lights. What should I do? Please enter \n ("A") - stop and help, you ARE both robots.\n ("B") - keep moving, I would help but it could be dangerous.\n - ("C") - keep moving, I don't want to get stabbed by a rogue robot. Let's flip him off for good measure. You're not stabbing me today, stabby robot!");
    if (secondSimulation == "A"); {
      console.log("Oh shit! It's a rogue robot and he just stabbed me. I lose 10 human points for not using common sense and being too nice, which apparently is not a human trait. That's okay just a little speed bump in our process.")
    }
    else if (secondSimulation == "B"); {
      console.log ("Cool! We just got 10 human points for using common sense!")
    }
    else (secondSimulation == "C"); {
      console.log ("Cool! We just got 10 human points but lost 5 because we were overly rude. What more do they want?")
    }

      var thirdSimulation = prompt("I'm at the market and a human and a robot just dropped their groceries. Who should I help first? Please enter \n ("A") - Both\n ("B") - Robot\n - ("C") - Human");
      if ("A"); {
        console.log("Dammit! I lost all my human points for trying to help both and falling on my face. Thanks jerk! I'm flipping you off right now.")
      }
      else if ("B"); {
        console.log("Right on, robot power! We got 10 human points for helping someone, but lost 5 points because we live in a human superior society. I did not get enough points to be a citizen. Thanks jerk!");
      }
      else ("C"); {
        console.log("Woah 1000 points! Why didn't they just give us this simulation in the beginning. I just got my citizenship! Thanks! I hope I run into you sometime in " + year + " I know the time jump is crazy but we robots have our way.");
      }

else if (goodPerson === "N"); {
  console.log ("That's too bad. Try again! I really need a good person on my side.")
}

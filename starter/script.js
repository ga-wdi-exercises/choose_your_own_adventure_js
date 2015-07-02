//start of choose your own adventure game with screen and popup prompts. javascript conditionals practice.
console.log("You wake up to a loud rumbly noise and everything is blurry.");

var wakeupInput = prompt("Since everything is blurry, do you put on your glasses or go back to sleep because you have a pounding headache and feel the blurriness is because you were celebrating too much last night? Please enter either 'g' for put on your glasses or 's' to go back to sleep.");
  if (wakeupInput == "s"){           //s is SLEEP option.
    console.log("You go back to sleep and start dreaming of bulldozers.");
    }
    else if (wakeupInput == "g") {   // g is GLASSES option.
    console.log("After putting on your glasses, you can see a giant bulldozer rumbling around your garden.");
      var bulldozerInput = prompt("Do you think this is a hallucination and go back to bed or do you get up and investigate why there is a bulldozer in your garden? Please enter 'h' for hallucination or 'b' to go outside and confront the bulldozer");
    }
        if (bulldozerInput == "h") { // h is HALLUCINATION option.
          console.log("You decided that you are hallucinating and go back to sleep, dreaming of dancing bulldozers.");
        }
        else if (bulldozerInput == "b") { // b is BULLDOZER option.
          console.log("You go outside and confront the bulldozer operator about ruining your garden. He says he has a permit to demolish your house. You haven't heard of any such permit or scheduled demolition.");
          var permitInput = prompt("Do you ask to see the demolition permit, lie in the mud in front of the bulldozer to prevent the operator from demolishing your house, or call a friend to find out what to do? Please enter 'p' to see the permit, 'l' to lie in the mud in front of the bulldozer, or 'c' to call a friend.");
        }
            if (permitInput == "p") { //p is see PERMIT option.
              console.log("You ask to see the demolition permit, but the bulldozer operator doesn't have it with him. So you go downtown to find the permit in the Official Office of Permits. While you are gone your house is demolished.");
            }
            else if (permitInput == "l") { // l is LIE down in mud option.
              console.log("You decide to lie down in the mud in front of the bulldozer.");
              var timeInput = prompt("How many minutes are you going to lie in the mud in front of the bulldozer? Please enter a number.");
                if (timeInput <= 60) {
                  console.log("You feel the mud slowly sucking you deeper. While you are stuck the bulldozer operator drives around you and demolishes your house.");
                  }
                  else if (timeInput > 60 ) {
                    console.log("The soft mud is quite comfortable. While you are half-dozing in the mud, the bulldozer operator goes to lunch. Your house is saved for the moment.");
                  }
            }
            else if (permitInput == "c") { // c is CALL friend option.
            var friendInput = prompt("What is the name of the friend you are going to call for advice? Please enter a name.");
            }
            if (friendInput == "ford prefect") { // is if FORD PREFECT is answer to open question.
              console.log("Your friend Ford Prefect comes to your house and advises you to go to a pub instead of confronting bulldozers and their operators. You follow Ford to the pub, have a pint, and listen to Ford's story while your house is demolished.");
            }
            else if (friendInput !== "ford prefect"){ // c is calling anyone but ford prefect.
              console.log("You call your friend " + friendInput + " who advises you ignore the bulldozer operator and instead come over for a soothing cup of tea. While you are at your friend's house having tea, your house is demolished.");
            }

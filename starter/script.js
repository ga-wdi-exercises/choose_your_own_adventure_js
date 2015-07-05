// put code here!
confirm("Welcome to Choose Your Own Adventure: Seinfeld edition. Are you ready to play? If you are, press OK!");

var character = prompt("Which character would you like to be? You can choose from Jerry, George, Elaine or Kramer.")

switch(character) {
  case "Jerry":
    var pilot = prompt("You're negotiating a deal with NBC for a pilot. How much money do George and you ask for?");
    if(pilot > 16000){
      alert("You make the mistake of letting George negotiate with NBC. 'Ted Danson makes $800,000 an episode!' NBC passes on the pilot and you return to your standup comedy career. The end!");
    } else if(pilot < 16000){
      alert("NBC decides to go forward with the pilot!");
      var script = prompt("You are deciding on a storyline for the pilot. Should it be about a CHINESE RESTAURANT or about a BUTLER?").toUpperCase();
        if (script === "CHINESE RESTAURANT") {
          alert("The NBC executives don't understand this humor. They pass on the pilot after reading the script. Back to standup! The end.")
        }
        else if (script === "BUTLER") {
          alert("The story isn't very funny and the pilot doesn't get picked up. Back to standup! The end.")
        }
        else {
          alert("You certainly understand the concept of the Show About Nothing with that strange idea. Refresh and try again!")
        }
    }
    break;
  case "George":
    var eclair = prompt("You are at your girlfriend Lindsay's mother's place. You open the trash can in the kitchen and see an eclair at the top of the trash can, untouched by other trash. Do you eat it? (YES or NO)").toUpperCase();
    if(eclair === "YES") {
      alert("Your girlfriend's mother catches you eating the eclair. You explain the situation to your girlfriend and get another chance with her.");
      var shirt = prompt("Now you're at another gathering at Lindsay's mother's. You need to use the bathroom. Do you take your shirt off in the restroom?(YES or NO)?").toUpperCase();
        if(shirt === "YES") {
          alert("You walk out of the bathroom shirtless. That's it for you and Lindsay. The end!")
        }
        else {
          alert("Sure, you make it out of the bathroom fully clothed. But it won't last with Lindsay, for you are Costanza, Lord of the Idiots.")
        }
    } else {
      alert("You don't eat the eclair. So what? She'll find another reason to dump you, George. The end!");
    }
    break;
  case "Elaine":
    var punctuation = prompt("You're dating a great guy, but he doesn't use an exclamation point on an answering machine message about your friend having a baby. Should you start an argument? (YES or NO)?").toUpperCase();
    if(punctuation === "YES") {
      alert("You end up breaking up. 'I'm running out of guys in this city, Jerry!' The end!");
    } else {
      alert("You'll find something else that bothers you about him. For this is the Show About Nothing. The end!");
    }
    break;
  case "Kramer":
    var dealership = prompt("You're test driving a car for Jerry with a salesman from the dealership. You are running low on gas. Do you TURN AROUND or KEEP GOING?").toUpperCase();
    if(dealership === "TURN AROUND") {
      alert("You head back to the dealership and don't get any errands done. Which is fine, because you're Kramer. The end!")
    }
    else {
      alert("The gas needle goes way past empty and breaks off. You feel different. You feel alive. You feel...")
      alert("The car ends up running out of gas. You bid the car salesman goodbye. The end!")
      }
  default:
    alert("Hello, Newman. Hit refresh and start again!");
}

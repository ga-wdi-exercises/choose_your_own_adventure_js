var bumper = function() {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
};

console.log("You currently live in a place called 'City of Destruction'. Everyone is convinced the city is about to be completely wiped out. So you decide set out on a pilgramage.");
bumper();

var pilgramChoice = prompt("You can head toward the 'Borough of Despond' or toward the city known as 'Vanity Fair' (Please enter 'b' or 'v').");

if (pilgramChoice == 'b') {
  console.log("You arrive to the Borough of Despond and meet a man named 'Dubious'.");
  bumper();
  var responseToDubious = prompt("He reluctanly ask you for money to get dinner. You decide to \n('g') - give him some money and continue on your journey \n('w') - walk with him to the market, buy him food yourself and then continue \n('k') - keep on your journey");

  //Response 'g'
  if (responseToDubious == 'g') {
    console.log("You give him a few dollars and go on your way just before getting stuck in a swamp.");
    bumper();
    var dubiousResponse = prompt("He asks 'Do you know how to swim?' \n('y') - yes \n('n') - no");
    if (dubiousResponse == 'y') {
      console.log("Dubious responds and says 'That's great, but I'm not sure how much that's going to help because you're in a swamp!' Then Troy and Elizabeth from the show Swamp People come and help you get out and you are on you're way again.");
      bumper();
    }
    else {
      console.log("You and Dubious start singing 'Sittin' on The Dock of the Bay' and Otis Redding appears, saves you, and you're on your way again.");
    }
  }

  // Response 'w'
  else if (responseToDubious == 'w') {
    console.log("You and Dubious head to the market and you realize the only place to eat is called Despondency and it turns out its Top Chef host Tom Colicchio's restaurant.");
    bumper();
    var dubiousResponse = prompt("As you walk, Dubious says 'Tom's cooking has taken a turn for the worse ever since Emeril Lagasse replaced him on the show.' With a grumbling stomach you \n('o') - order the sardine infused pecorino grilled cheese sandwhich topped with maggots and jellied moose nose \n('a') - Apologize to Dubious and run back home");
    if (dubiousResponse == 'o') {
      console.log("After two bites you run out back upchuck, fall into a swamp.");
      bumper();
      var dubiousResponse = prompt("Dubious asks you if you know how to swim? \n ('y') - yes \n('n') - no");
      if (dubiousResponse == 'y') {
        console.log("Dubious responds and says 'That's great, but I'm not sure how much that's going to help because you're in a swamp!' Then Troy and Elizabeth from the show Swamp People come and help you get out and you are on you're way again.");
        bumper();
      }
      else {
        console.log("You and Dubious start singing 'Sittin' on The Dock of the Bay' and Otis Redding appears, saves you, and you're on your way again.");
        bumper();
      }
    }
    else if (dubiousResponse == 'a') {
      console.log("You channel your inner Usain and bolt back home and begin to ask a mentor for help planning your next pilgramage.");
    }
  }

  //Response 'k'
  else if(responseToDubious == 'k') {
    console.log("Knowing you have a long journey ahead of you, you politely decline and keep going.");
    bumper();
    var dubiousResponse = prompt("As you keep walking you start to think to yourself \n('s') - I should stop and help this fellow out \n ('c') - I feel a small bit of remores but I need to continue");
  }
    if(dubiousResponse == 's') {
    console.log("You change your mind, turn around and give him a few Dollars; but as head on your way you fall into a swamp and Troy and Elizabeth from the show Swamp People save and the four of you have dinner together and laugh.");
    bumper();
  }
  else if(dubiousResponse == 'c') {
    console.log("You continue on your journey and suddenly fall into a swamp. Then Dubious saves you, brings you to his house and you have dinner with his family and play Settlers of Catan for 5.7 hours");
    bumper();
  }
}

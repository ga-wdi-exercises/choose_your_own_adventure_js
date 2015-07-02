// put code here!
console.log("You just moved into a new apartment in a new city.");
var pathInput = prompt("What would you like to do on a fine afternoon?\n('i') Stay inside.\n('o') Go outside.");

if (pathInput == 'i') {
  console.log("Great. You decided to stay home.");
  var thingsToDoAtHome = prompt("What would you like to do at home?\n('e') Eat.\n('c') Go on the computer.");
  if (thingsToDoAtHome == 'e') {
    console.log("You go to the kitchen and look in the fridge.");
    var mealDecision = prompt("What do you want to eat?\n('s') Sandwhich.\n('k') Korean BBQ.\n('p') Pizza");
    if (mealDecision == 's') {
      console.log("You made yourself a sandwhich and happily ate it.");
    }
    else if (mealDecision == 'k') {
      console.log("While trying to cook the meat, you somehow started a fire and died.");
    }
    else if (mealDecision == 'p') {
      console.log("You ended up ordering pizza for delivery but it never showed up.");
    }
  }
  else if (thingsToDoAtHome == 'c') {
    console.log("Browsing on your computer became boring. You decide to watch something.");
    var streamingLocation = prompt("Where do you want to go?\n('n') Netflix.\n('y') Youtube.");
    if (streamingLocation == 'n') {
      console.log("You decide to watch a movie.");
      var genreDecision = prompt("Which genre would like like to watch?\n('h') Horror.\n('c') Comedy.");
      if (genreDecision == 'h') {
        console.log("You fell asleep. The movie was boring.");
      }
      else if (genreDecision == 'c') {
        console.log("You literally died laughing.");
      }
    }
    else if (streamingLocation == 'y') {
      console.log("You decided to go on Youtube.");
      var youtubeActivity = prompt("What do you browse for?\n('s') Songs.\n('v') Random videos.");
      if (youtubeActivity == 's') {
        console.log("You fall asleep to sweet music.");
      }
      else if (youtubeActivity == 'v') {
        console.log("You somehow got sucked into the weird part of Youtube and spent hours watching people pop giant pimples and extracting Bot Fly larvas from their body.");
      }
    }
  }
}
else if (pathInput == 'o') {
  console.log("You are feeling adventurous and decide to go outside to explore.");
  var direction = prompt("After exiting your apartment, which way do you go?\n('l') Left.\n('r') Right");
  if (direction == 'l') {
    console.log("Suddenly, a stranger appears and tries to talk to you.");
    var reactionToStranger = prompt("What do you do?\n('i') Ignore him and walk a little faster. Weird people these days...\n('s') See what he wants.");
    if (reactionToStranger == 'i') {
      console.log("You wonder what he wanted. Oh well.");
    }
    else if (reactionToStranger == 's') {
      console.log("The stranger ran short of money to ride the bus home. The bus ticket is $3. Feeling sorry for him, you decide to help him out.");
      var cashAmount = prompt("How much money do you give?\n$('any amount in numbers')");
      if (cashAmount <= 0.01) {
        console.log("The man looks at the penny you just gave him in disbelief. He throws the penny away angrying while cursing and walks away.");
      }
      else if (cashAmount > 0.01 && cashAmount <= 0.99) {
        console.log("The man accepts it and mumbles something about you being cheap while walking away.");
      }
      else if (cashAmount > 0.99 && cashAmount <= 2.98) {
        console.log("The man happily thanks you.");
      }
      else if (cashAmount === 2.99) {
        console.log("You're a troll.");
      }
      else if (cashAmount >= 3) {
        console.log("The man happily thanks you.");
      }
    }
  }
  else if (direction == 'r') {
    console.log("You take 5 steps to the right and realized you're walking under direct sunlight.");
    var sunlightDecision = prompt("What do you do?\n ('c') Find a shady part of the street to walk on.\n ('h') Head back home.");
    if (sunlightDecision == 'c') {
      console.log("You decide to cross the street where the shade is. As you are crossing, a speeding car hits you. You die on the spot. What an unlucky day.");
    }
    else if (sunlightDecision == 'h') {
      console.log("You decide that's enough sunlight for the day and turn around to head back inside.");
    }
  }
}

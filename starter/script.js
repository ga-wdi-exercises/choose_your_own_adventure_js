var name = prompt("What's your name, buddy?", "Dan");
alert("Here we are again, " + name + ". " + "You find yourself stumbling out of your favorite watering hole at 11 PM on a Thursday. You notice the familiar glow of a dodgy pool hall immediately to your right. The bar is sparsely populated with mulleted patrons, so you ponder your next choice carefully.");

var boozeMore = function() {
  var choiceOfVenue = prompt("Do you want to enter the pool hall, or would you prefer to go home and pass out on your rug?", "pool hall or home");
  if (choiceOfVenue == "home") {
    return homeFridgeBeers();
  } else if (choiceOfVenue == "pool hall") {
    return poolHallDrinks();
  } else alert("That's not one of the options I gave you, brah!");
    return boozeMore();
};

var homeFridgeBeers = function() {
  var sleepyRoommie = prompt("You come to find your roommate, Chris, sleeping on the couch, with approximately 14 High Life bottles next to him. Do you leave him in peace and go to the fridge, or do you draw on him with a sharpie?", "sharpie or leave alone");
  if (sleepyRoommie == "leave alone") {
    alert("Your lame-o roommate drank all the High Life! Looks like it's back to the pool hall . . .")
    return poolHallDrinks();
  } else if (sleepyRoommie == "sharpie") {
    alert("You draw a fantastically obscene image on your slumbering roommate's cheek, causing him to stir.");
    return angryRoommie();
  } else alert("I guess you're too boozed up to follow instructions!");
    return homeFridgeBeers();
};

var angryRoommie = function() {
  var evasionTactic = prompt("You watch with glee as it dawns on your roommate, Chris, that his right cheek now bears a stylized rendering of some sort of phallus. Your glee turns to regret as he rises and charges at you. Do you stand your ground or flee?" , "stand ground or flee");
    if (evasionTactic == "flee") {
      alert("You make it a couple of steps before you stumble over some glassware on the floor. Although Chris doesn't catch you, you find that the sudden jostling of your innards has upset your stomach. You stand up just in time to throw up on your own shoes. Another successful evening!");
    } else alert("Chris charges headfirst into your gut, knocking you back. You splutter and cough, and then proceed to throw up on your own shoes. It's no problem though, because the cat is already taking care of it . . . if you catch my meaning. Another successful evening!");
};

var poolHallDrinks = function() {
    var poolHall = prompt("You walk into the pool hall and every eye in the place is immediately fixed on you. What do you do next?" ,  "order a beer, go to the jukebox, or go to the bathroom");
    if (poolHall == "go to the bathroom") {
      var whatNow = prompt("You barrel into the bathroom and find some poor, strung out dude shooting up on the toilet seat. You excuse yourself, and immediately withdraw. Smack use is a bit much for a Thursday! Do you want to head home or stay?", "stay or head home");
        if (whatNow == "stay"){
          return poolHallDrinks();
        } else return sadWalk();
    } else if (poolHall == "go to the jukebox") {
      alert ("You make your way confidently to the TouchTunes jukebox by one of the pool tables, beneath the FC Barcelona poster.");
      return jukeboxHero();
    } else if (poolHall == "order a beer") {
      return howDrunkToGet();
    } else alert(". . . Seriously? Come on!")
      return poolHallDrinks();
};

var sadWalk = function() {
  alert("You get outta Dodge in a hurry, but in your haste to leave, you trip on the threshold of the bar's entrace. All the patrons laugh at your clumsiness, of course. You hang your head and amble home, mumbling nonsense to yourself about your poor life choices.");
};

var jukeboxHero = function() {
  var songChoice = prompt("Clearly, at this point, you have one of two choices: Gordon Lightfoot or some garbage reggaeton that the people in the bar seem to like. Which will it be?" , "Lightfoot, reggaeton, or wild card");
  if (songChoice == "Lightfoot") {
    alert("You cue up The Wreck of the Edmund Fitzgerald by Gordon Lightfoot and indulge in a spirited singalong. The patrons are not impressed and return to their beers. You decide to head to the bar for a drink, but the owner decides to refuse you service. You head home, dejected. Another successful night out, amirite!");
  } else if (songChoice == "reggaeton") {
    alert("You pick an album on the jukebox with a Puerto Rican flag and scantily clad woman on the cover. The patrons seems to dig it, so they ask you over to the bar to engage in a singalong. You make friends with everyone, and drink a whole bunch of Modelos. The rest of the evening is a blur, which means . . . great success!");
  } else alert("The machine eats your money but doesn't let you play any music, so you start cursing loudly and mumbling something about wishing you were back home in Wisconsin. Unimpressed by your tantrum, the patrons return to their games of pool and beers. You ask the owner if he's a Packers fan, and the guy just stares. You spend the next 40 minutes delivering an encomium to Brett Favre, at which point you black out. If you can't remember it, it must have been fun!")
};

var howDrunkToGet = function() {
  var howManyDrinks = parseInt(prompt("You belly up to the bar and order some beers. How many will you have?"));
  while (howManyDrinks <= 6) {
    alert("Never one to be bashful about lager, you guzzle your " + howManyDrinks + " beer(s) and order more." )
    howManyDrinks += 2;
  }
  alert("Well, you've already been drinking for eight hours, so it's about time to call it a night. The owner of the pool hall appears to appreciate your patronage—he even invites you back to watch the Notre Dame game on Saturday. You head home, pleased with yourself. Another successful night on the town!");
};

boozeMore();

alert("You must be 21 to partake in Happy Hour.\nUntil then, enjoy the drinking experience vicariously with this adventure!");

alert("After a long day, it's time to relax with a bevey. You're at your regular drinking hole with friends. Larry, the bartender, asks what you will have to drink.");

var response = prompt("What will be your first drink of the night?"
+ "\n For Beer enter B"
+ "\n For a Cocktail enter C"
+ "\n For a Shot enter S");

if (response === "B") {
  alert("Enjoy a cold, frosted beer.");
}
else if(response === "C") {
  alert("This cocktail was just what the Doctor ordered");
}
else if (response === "S") {
 alert("SHOTS!SHOTS!SHOTS! Guaranteed fun!");
}

// If Beer was choosen//

var B = prompt("There is a friends' going away gathering at a nearby bar and your friends at the bar are going."
+ "\nAre you going to go to the going away party?"
+ "\n"
+ "\nNo"
+ "\nYes");

if (beer === "No") {
  alert("You choose to stay finish your beer and then go home. Just one drink was perfect!");
}
else {
  alert("You get to your friends going away party and polish off a couple more beers.");
}

var party = prompt("As the night goes on you:"
+ "\n"
+ "\nEnter Buy to Buy a round of shots to spread the joy around. "
+ "\nEnter Toast to give an epic toast to your friend."
+ "\nEnter Piano if you spot a piano in the corner and do your best rendition of piano man.");

// If Cocktail was choosen//
var C = alert("You are knocking back your second cocktail when the bartender brings over a new drink and lets you know that it was from the person at the end of the bar. You look to over to say thank you when low and behold, Jennifer Lawrence, Amy Schumer and Aziz Ansari are waving you over to join them ");

var C = prompt("You are having the time of your life with your celebrity squad. "
+ "\n"
+ "\nGo to the strip club. "
+ "\nTake a jet with your squad to Vegas."
+ "\nLead the way to the next bar.");

// If A shot was choosen//
var C = prompt("You lost count of how many shots you had but that doesn't matter bc "
+ "\n"
+ "\nThe more you drink, the more fabulous you get!"
+ "\nYou sound better the more you drink and make the bar an impromptu concert venue to show your skills."
+ "\nyou want to forget the long week you just had. You want to share your cheer by buying a round of shots");

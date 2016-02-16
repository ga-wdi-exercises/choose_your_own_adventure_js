// put code here!
window.alert("Welcome to the Magic Kingdom!" + "\n"
+ "The Happiest Place on Earth!");

window.alert("Our first stop is Main Street USA. The street is bustling with shops and entertainment."
+ "\n" + "Fun fact: Each business name in the shop windows refers to a person who had some part in the building of Disney World.");

while(response != "Q" && response != "q")
{
  window.alert("Let's continue forward to the Hub! You can see Cinderella's castle in front of you and several spokes in different directions." + "\n"
  + "From here, you can go anywhere in the park!");

  var response = window.prompt("Where do you want to go?"
  + "\n Right to Tomorrowland (R)"
  + "\n Straight to Fantasyland (S)"
  + "\n Left to Adventureland (L)"
  + "\n Go home (Q)");

  if(response == "R" || response == "r")
  {
    window.alert("You've chosen Tomorrowland, the land of the future that always was and never will be.");
    tomorrowland();
  }
  else if(response == "S" || response == "s")
  {
    window.alert("You've chosen Fantasyland. You pass through Cinderella's castle, where you can see a beautiful mosaic that tell's Cinderella's story.");
    fantasyland();
  }
  else if(response == "L" || response == "l")
  {
    window.alert("You've chosen Adventureland. You can hear drums beating in the distance.");
    adventureland();
  }
  else if(response == "Q" || response == "q")
  {
    break;
  }
  else
  {
    window.alert("I know the choice is hard. Why don't we go to Fantasyland!");
    fantasyland();
  }
}

window.alert("I'm sorry to hear you have to leave. Have a nice day!");

/* Yarrr, here be functions */

function tomorrowland()
{
  window.alert("Welcome to Tomorrowland! The sun shines off the silver buildings and there is alien writing on many of the buildings.");
  tomorrowlandRides();
} // end tomorrowland

function tomorrowlandRides()
{
  var response = window.prompt("What kind of ride do you want to go on?"
  + "\n A thrill ride (T)"
  + "\n Something funny (F)"
  + "\n A nostalgic classic (N)"
  + "\n Something that will cause pain and regret (P)");

  if(response == "T" || response == "t")
  {
    window.alert("Thrills huh? Let's go on Space Mountain! It's an indoor roller coaster in the dark!");
    window.alert("WHEEEEEEEEEEEEEeeeeeeee!!!");
    endOfTomorrowlandRides();
  }
  else if(response == "F" || response == "f")
  {
    window.alert("Laughs? You're going to love Monsters Inc Laugh Floor! It's an interactive comedy show!");
    window.alert("Hellooooooo humans!")
    endOfTomorrowlandRides();
  }
  else if(response == "N" || response == "n")
  {
    window.alert("A classic. Good choice! Let's head over to the Carousel of Progress, designed by Walt Disney's original team!");
    window.alert("There's a great big beautiful tomorrow, Shining at the end of every day...");
    endOfTomorrowlandRides();
  }
  else if(response == "P" || response == "p")
  {
    window.alert("Really? Pain? You're going to regret this...But let's head over to Stitch's Great Escape");
    window.alert("Chili dog burps...forever");
    endOfTomorrowlandRides();
  }
  else {
    {
      window.alert("It seems like you don't like these choices. Maybe you'd prefer to return to the Hub?")
    }
  }
} // end tomorrowlandRides

function endOfTomorrowlandRides()
{
  var response = window.prompt("That was fun! Do you want to go on another ride? (Y for yes)")
  if(response == "Y" || response == "y")
  {
    tomorrowlandRides();
  }
  else
  {
    window.alert("Ok! Let's move on to Fantasyland!");
    fantasyland();
  }
} // end endOfTomorrowlandRide

function fantasyland()
{
  window.alert("Welcome to Fantasyland! Where all your dreams can come true!");
  fantasylandRides();
} // end fantasyland

function fantasylandRides()
{
  var response = window.prompt("What kind of ride do you want to go on?"
  + "\n A thrill ride (T)"
  + "\n Something funny (F)"
  + "\n A nostalgic classic (N)"
  + "\n Something that will cause pain and regret (P)");

  if(response == "T" || response == "t")
  {
    window.alert("Thrills huh? Let's go on Seven Dwarves Mine Train! The cars sway as you ride it, which is pretty cool.");
    window.alert("WHEEEEEEEEEEEEEeeeeeeee!!!");
    endOfFantasylandRides();
  }
  else if(response == "F" || response == "f")
  {
    window.alert("Laughs? You're going to love The Many Adventures of Winnie the Pooh! I love when the car bounces along with Tigger!");
    window.alert("Bouncy bouncy bouncy!")
    endOfFantasylandRides();
  }
  else if(response == "N" || response == "n")
  {
    window.alert("A classic. Good choice! Let's head over to Dumbo the Flying Elephant!");
    window.alert("When I see an elephant fly...");
    endOfFantasylandRides();
  }
  else if(response == "P" || response == "p")
  {
    window.alert("Really? Pain? You're going to regret this...But let's head over to it's a small world!");
    window.alert("It's a small world after all. It's a small world after all. It's a small world after all. It's a small small world.");
    endOfFantasylandRides();
  }
  else {
    {
      window.alert("It seems like you don't like these choices. Maybe you'd prefer to return to the Hub?")
    }
  }
} // end fantasylandRides

function endOfFantasylandRides()
{
  var response = window.prompt("That was fun! Do you want to go on another ride? (Y for yes)")
  if(response == "Y" || response == "y")
  {
    fantasylandRides();
  }
  else
  {
    window.alert("Ok! Let's head back to the Hub!");
  }
} // end endOfFantasylandRides

function adventureland()
{
  window.alert("Welcome to Adventureland! You feel like an explorer as you pass by the ancient tikis that line the path.");
  adventurelandRides();
} // end adventurelandRides

function adventurelandRides()
{
  var response = window.prompt("What kind of ride do you want to go on?"
  + "\n A thrill ride (T)"
  + "\n Something funny (F)"
  + "\n A nostalgic classic (N)");

  if(response == "T" || response == "t")
  {
    window.alert("Thrills huh? Let's go on Pirates of the Caribbean! Remember, dead men tell no tales!");
    window.alert("Yoho yoho a pirate's life for me!");
    endOfAdventurelandRides();
  }
  else if(response == "F" || response == "f")
  {
    window.alert("Laughs? You're going to love the world famous Jungle Cruise!");
    window.alert("How do you tell the difference between the male and female Zebras? The males have black and white stripes and the females have white and black stripes.");
    endOfAdventurelandRides();
  }
  else if(response == "N" || response == "n")
  {
    window.alert("A classic. Good choice! Let's head over to the Enchanted Tiki Room!");
    window.alert("In the tiki tiki tiki room, where the birds sing words and the flowers croon!");
    endOfAdventurelandRides();
  }
  else {
    {
      window.alert("It seems like you don't like these choices. Maybe you'd prefer to return to the Hub?")
    }
  }
} // end adventurelandRides

function endOfAdventurelandRides()
{
  var response = window.prompt("That was fun! Do you want to go on another ride? (Y for yes)")
  if(response == "Y" || response == "y")
  {
    adventurelandRides();
  }
  else
  {
    window.alert("Ok! Let's move on to Fantasyland!");
    fantasyland();
  }
} // end endOfAdventurelandRides

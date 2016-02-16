// put code here!
window.alert("Welcome to the Magic Kingdom!" + "\n"
+ "The Happiest Place on Earth!");

window.alert("Our first stop is Main Street USA. The street is bustling with shops and entertainment."
+ "\n" + "Fact: Each business name in the shop windows refers to a person who had some part in the building of Disney World.");

theHub();

function theHub()
{
  window.alert("Let's continue forward to the hub! You can see Cinderella's castle in front of you and several spokes in different directions." + "\n"
  + "From here, you can go anywhere in the park!");

  var response = window.prompt("Where do you want to go?"
  + "\n Right to Tomorrowland (R)"
  + "\n Straight to Fantasyland (S)"
  + "\n Left to Adventureland and Liberty Square (L)");

  if(response == "R" || response == "r")
  {
    window.alert("You've chosen Tomorrowland, the land of the future that always was and never will be.");
    tomorrowland();
  }
  else if(response == "S" || response == "s")
  {
    console.log("S path");
  }
  else if(response == "L" || response == "l")
  {
    console.log("L path");
  }
  else
  {
    window.alert("I know the choice is hard, take your time.");
    theHub();
  }
} // end theHub

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
    endOfTomorrowlandRide();
  }
  else if(response == "F" || response == "f")
  {
    window.alert("Laughs? You're going to love Monsters Inc Laugh Floor! It's an interactive comedy show!");
    window.alert("Hellooooooo humans!")
    endOfTomorrowlandRide();
  }
  else if(response == "N" || response == "n")
  {
    window.alert("A classic. Good choice! Let's head over to the Carousel of Progress, designed by Walt Disney's original team!");
    window.alert("There's a great big beautiful tomorrow, Shining at the end of every day...");
    endOfTomorrowlandRide();
  }
  else if(response == "P" || response == "p")
  {
    window.alert("Really? Paain? You're going to regret this...But let's head over to Stitch's Great Escape");
    window.alert("Chili dog burps...forever");
    endOfTomorrowlandRide();
  }
  else {
    {
      window.alert("It seems like you don't like these choices. Maybe you'd prefer to return to the Hub?")
      theHub();
    }
  }
} // end tomorrowlandRides

function endOfTomorrowlandRide()
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

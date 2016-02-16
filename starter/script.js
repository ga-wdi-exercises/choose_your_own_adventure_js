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
    tomorrowland;
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
    console.log("Else path");
  }
} // end theHub

function tomorrowland()
{
  window.alert("Welcome to Tomorrowland! The sun shines off the silver buildings and there is alien writing on many of the buildings.");
  var response = window.prompt("What kind of ride do you want to go on?"
  + "\n A thrill ride (T)"
  + "\n Something funny (F)"
  + "\n A nostalgic classic (N)"
  + "\n Something that will cause pain and regret (P)");

  if(response == "T")
  {
    console.log("Space mountain");
  }
  else if(response == "F")
  {
    console.log("Monsters Inc Laugh Floor");
  }
  else if(response == "N")
  {
    console.log("Carousel of Progress");
  }
  else if(response == "P")
  {
    console.log("Stitch's Great Escape");
  }
  else {
    {
      console.log("try again");
    }
  }
} // end tomorrowland

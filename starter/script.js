

confirm("Your friend Chiasa has not spoken to you in a couple of days.  You two normally talk on the phone everynight.  Her family has not seen her and she has not been into work this morning.  Go find her!");

var favoritePlace = prompt("Here favorite places to visit is LaLaLounge, Walgreens and Ikea.  Which one would you like to check?");



if (favoritePlace == "LaLaLounge") {
  prompt("Great! We're here.  Now where should we look for her?  1st floor, 2nd floor or third floor?");
} else if (favoritePlace == "Walgreens") {
  prompt("Great, she could just be working on a project and just wants to pick up a few things.  Let's look around.  Should we go to the beauty aisle, supply aisle or near the magazines?");
} else if (favoritePlace == "Ikea") {
  prompt("Good we are here!  What department should we check out?  Childrens, Kitchen or Bedding?");
} else {
  confirm("You must not care about Chiasa.  We'll just form a search team without you.  Have a good life.");
}

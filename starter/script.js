// put code here!
var response = prompt ("Welcome to United States, would you like to travel?");
  while (response != "yes") {
    response = alert ("we're sorry to hear that! Press Command+R to restart the adventure!");
  }

  response = prompt ("Ok, let's begin.  Would you like to go East or West? (East/West)");
  if (response === "East") {
  response = prompt ("Great! You will go to the East coast.  Would you like to go North or South?(North/South)");
    if (response === "North")
    response = alert ("It is too cold up North, we cannot go there!");
    else if (response === "South")
    response = prompt ("The South is the Best.  What state would you like to visit? (1. NC/2. AL/3. GA)");
      switch(parseInt(response)) {
        case 1:
          response = alert ("You have arrived in North Carolina! Enjoy your stay!");
          break;
        case 2:
          response = alert ("You have arrived in Alabama! Enjoy your stay!");
          break;
        case 3:
          response = alert ("You have arrived in Georgia! Enjoy your stay!");
          break;
        }
  }
  else if (response === "West") {
  response = prompt ("Great! You will go to the West coast.  Would you like to go North or South?(North/South)");
    if (response === "North")
    response = alert ("It is too cold up North, we cannot go there!");
    else if (response === "South")
    response = prompt ("The South is the Best.  What state would you like to visit? (1. CA/ 2. AZ/ 3. NM)");
      switch(parseInt(response)) {
        case 1:
          response = alert ("You have arrived in California! Enjoy your stay!");
          break;
        case 2:
          response = alert ("You have arrived in Arizona! Enjoy your stay!");
          break;
        case 3:
          response = alert ("You have arrived in New Mexico! Enjoy your stay!");
          break;
        }
      }

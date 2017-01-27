var name = prompt("What is your name?");
while( name == "Andy"){
  alert("Hey Squad Leader")
  name = "Squad Leader Andy";
}
var foodChoice = prompt( name + ", welcome to the dessert round of Chopped Champions!\nYou can choose: \ntaco shells \nbagels \n or cheddar cheese \nto create your dessert, which do you choose?");
if(foodChoice == "taco shells"){
  var tacoShells = prompt("You have chosen taco shells to create your dessert, would you like to \ncover them in chocolate \nor make an ice cream?");
      if(tacoShells == "cover them in chocolate"){
        var sprinkles = prompt("Looks delish! would you like to add sprinkles? Y/N");
          if (sprinkles == "Y"){
            alert("The judges love your creativity but your competitor has bested you with a taco shell souffle.\n You have been eliminated.");
        } else if (sprinkles == "N"){
            alert("The judges spit out your taco shells.\nYou have been eliminated.");
        } else ("You must enter 'Y' or 'N', please try again");
      }else if (tacoShells == "make an ice cream"){
        var icecream = prompt("Would you like to add\n peanuts \nor caramel");
        if (icecream == "peanuts"){
          alert("Your dessert is too salty!\n You have been eliminated.");
        } else if (icecream == "caramel"){
          alert("Aaron Sanchez says the taco caramel icecream is sublime.\n Congratulations, you have won Chopped Champions!")
        } else ("You must enter 'peanuts' or 'caramel', please try again");
      } else{
        alert("You must enter 'cover in chocolate' or 'make an ice cream', please try again");
      };
} else if (foodChoice == "bagels"){
  var timeCook= prompt("You are making a bread pudding with the bagels, how many minutes will you cook it for?");
    if (timeCook >= 15){
      alert("Oh no! you have burned your bread pudding! \nYou have been eliminated from the competition");
    } else if (timeCook < 15 && timeCook > 10){
      alert("Your bread pudding is perfectly cooked but not very tasty. \nYou have been eliminated from the competition");
    } else if (timeCook <= 10){
      alert("Your bread pudding is undercooked.\n You have been eliminated from the competition.");
    } else{
    alert("You must enter a number.Please try again.");
  };
}else if (foodChoice == "cheddar cheese"){
  var cheese = prompt("You have chosen cheddar cheese for your dessert. Would you like to make \n sweet cheese balls or \n give up!");
  if(cheese == "sweet cheese balls"){
    alert("Gross. \n You have been eliminated. ");
  } else if(cheese == "give up!"){
    alert("You have been eliminated.");
  };
}
else{
  alert("You have not entered a valid food choice.");
};

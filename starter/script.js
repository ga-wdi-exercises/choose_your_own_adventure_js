// put code here!
while (flavor != "savory" && flavor != "sweet"){var flavor = window.prompt("Are you in the mood for sweet or savory?");}

if(flavor === "sweet"){
  //SWEET PATH
  while (pb != "y" && pb != "n"){var pb = window.prompt("Do you like peanutbutter? (y/n)");}
  if (pb === "y") {
    //SWEET PEANUTBUTTER PATH
    while (topping != "jelly" && topping != "honey" && topping != "banana"){
      var topping = window.prompt("What would you like with your peanutbutter? (jelly/honey/banana)");
      }
      if (topping === "jelly") {console.log("Excellent! Enjoy your pbj!");}
      else if (topping === "honey") {console.log("Yum! Enjoy your peanutbutter and honey sandwhich!");}
      else {console.log("Alright! Get that potassium!");}
  }
  else {
    //SWEET NO PB PATH
    console.log("No peanutbutter!? How are we going to make this interesting?")
    while (toast != "y" && toast != "n") {var toast = window.prompt("Let's toast that bread!(y/n)");}
    if (toast === "y"){
      //SWEET NO PB TOAST PATH
      while (butter != "y" && butter != "n"){var butter = window.prompt("Toast is nice and hot. Should we butter that? (y/n)")
        if (butter === "y"){
          //SWEET NO PB TOAST BUTTER PATH
          console.log("Oh man! Cinnamon sugar would be delicious to top this off! Enjoy your cinnamon sugar toast!")
        }
        else {
          //SWEET NO PB TOAST NO BUTTER
          console.log("Going for healthy, I get it... How about we just throw some honey on there? Enjoy your honey toast");
        }
      }
    }
    else{
      //SWEET NO PB NO TOAST
      console.log("There's no helping you. Have some candy");
    }
    }
    }
else {
  //SAVORY PATH
  console.log("Let's have a ham sandwhich!")
  while (chz != "y" && chz != "n"){var chz = window.prompt("Would you like cheese? (y/n)")}
  if (chz==="y") {
    console.log("Good call!");
    while (isNaN(slices)||slices < 1){var slices = parseInt(window.prompt("How many slices?"));}
    if (slices < 3){
      console.log("Awesome! Enjoy your ham sandwhich with " + slices + " slices of cheese!");
    }
    else {
      console.log("Wow, " + slices + " slices!? Do you want some ham with your cheese? Enjoy your cheesy sandwhich");
    }
  }
  else {
    while (mustard != "y" && mustard != "n"){var mustard = window.prompt("No cheese? Let's throw some mustard on that! (y/n)")}
    if (mustard === "y"){console.log("Ham and mustard - simple yet satisfying. Enjoy");}
    else {console.log("Hope this isn't too dry! Enjoy your plain ham sandwich");}
  }
}

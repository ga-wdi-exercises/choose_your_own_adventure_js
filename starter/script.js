

var hello="Hello world";
var name ="bob";
var name = prompt("Hi, Welcome to the Top Chef Challenge!! What is your name?");

var foodType = prompt("All the best "+ name  + "  Which callenge do you want to enter? 1. Appetizer (a). Entree(2) 3. Dessert(d)? ");
var foodType = foodType.toString();
if (foodType =="a"){
      var appetizerType = prompt("Which appetizer would you like to cook? 1. Salad wrap(s) 2.Soup(2) 3. Bruschetta (b)")
      var appetizerType = appetizerType.toString();
      if(appetizerType =="s"){
        var appChoice1 = prompt("Which salad dressing do you want to use 1. Caesar(c) 2. Italian(2)");
        var appChoice1 = appChoice1.toString();
        if(appChoice1 == "c"){
          console.log("Good choice go ahead");
        }
        else if(appChoice1 =="2"){
          console.log("Oh too bad, you forgot to bring it from the kitchen, hurry back");
        }

        else{
          console.log("Invalid Entry");

        }

      }

      if(appetizerType =="2"){
        var appChoice1 = prompt("What was your choice? 1. Tomoatoe Soup(t) 2. Chowder(2)");
        var appChoice1 = appChoice1.toString();
        if(appChoice1 == "t"){
          console.log("Good choice go ahead");
        }
        else if(appChoice1 =="2"){
          console.log("Oh too bad, you burnt its. Start over again.");
        }

        else{
          console.log("Invalid Entry");

        }

      }
      if(appetizerType =="b"){
        var appChoice1 = prompt("What is your topping? 1. Tomatoes(t) 2. Salami(2)");
        var appChoice1 = appChoice1.toString();
        if(appChoice1 == "t"){
          console.log("Good choice go ahead");
        }
        else if(appChoice1 =="2"){
          console.log("Oh too bad, you forgot to bring it from the kitchen, hurry back");
        }

        else{
          console.log("Invalid Entry");

        }

      }

      else{
        console.log("Invalid Entry");


      }

}


else if (foodType =="2"){
      var entreeType = prompt("Which entree would you like to cook? 1.Steak(s) 2.Pasta(2) 3. Meatloaf (m)")
      var entreeType = entreeType.toString();

      if(entreeType =="s"){
        var entreeChoice1 = prompt("Which type of steak are you cooking ? 1. NY strip(n) 2. Rib Eye(2) ");
        var entreeChoice1  = entreeChoice1 .toString();
        if(entreeChoice1 == "n"){

          console.log("Steak is looking good. Looks like you'll make it!")

        }
        else if(entreeChoice1  =="2"){

              console.log("Oh its getting burnt, hurry to save what still can!!")
        }

        else{
          console.log("Invalid entry, try again")
        }


      }

      if(entreeType =="2"){
        var entreeChoice1 = prompt("Which type of pastas are you cooking ? 1. Spagetti(s) 2. Penne(2) ");
        var entreeChoice1  = entreeChoice1 .toString();
        if(entreeChoice1 == "s"){

          console.log("You over cooked it, start over")

        }
        else if(entreeChoice1  =="2"){

              console.log("Looks good, lets start with the sauce too")
        }

        else{
          console.log("Invalid entry, try again")
        }

      }
      if(entreeType =="m"){
        var entreeChoice1 = prompt("Which type of smeatloaf are you cooking ? 1. Beef(b) 2. Sausage(2) ");
        var entreeChoice1  = entreeChoice1 .toString();
        if(entreeChoice1 == "b"){

          console.log("You forgot the cheese, run to kitchen!")

        }
        else if(entreeChoice1  =="2"){

              console.log("Good choice, lets get started on prep")
        }

        else{
          console.log("Invalid entry, try again")
        }

      }
      else{
        console.log("Invalid entry, try again")
      }
}


else if (foodType =="d"){

      var total = prompt(" Hi, how many time would you like to make dessert? ")

      for (var i =0; i<total; i++){

      var dessertType = prompt("Which dessert would you like to cook? 1. Ice-Cream(i) 2. Pudding (2) 3.Cheesecake(c)")
      var dessertType = dessertType.toString();


      if(dessertType =="i"){
        console.log("Good choice, decide on your flavour and  get started");

      }


      else if(dessertType == "2"){
        console.log("Good choice, lets get started");
      }

      else if(dessertType  =="c"){
        console.log("You forgot to get the strawberries from the kitchen, hurry back")

      }
      else {
        console.log("Incorrect entry. Try challenge again")
      }

}
}

else {
 console.log("Incorrect entry. Try challenge again");

}
// put code here!

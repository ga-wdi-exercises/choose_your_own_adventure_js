// put code here!

var userInput = prompt("Would you like to go snowboarding in the US or Canada?")

if (userInput == "US") {
    alert("You are going to Tahoe! Some of your friends want to come. Click Ok to see who else is coming!")
        var friends = ["Mary", "Larry", "Jeff", "Kate"]
            for (var i = 0; i < friends.length; i++){
              alert(friends[i] + " is coming!")
            }
  var snowboarded = prompt("Have you ever snowboarded? Type Yes or No")
      if (snowboarded == "Yes") {
        var level = prompt("Good. What level would you say you are: Beginner, Intermediate, or Expert?")
          if (level == "Beginner")
            alert("Go to the bunny hill on the left side of the mountain");
          if (level == "Intermediate")
            alert("Go to the blue slope on the right side of the mountain");
          if (level == "Expert")
            alert("Go to the black diamond behind the mountain");
      }
      if (snowboarded == "No")
        var stance = prompt("That's fine. Is it more natural to have your left or right foot forward on the board? Type Left or Right")
              if (stance == "Left")
                var accessories = prompt("You are regular. You've been selected to receive a free accessory! Do you want goggles, gloves, or earwarmers?")
                  switch (accessories) {
                      case "goggles":
                        alert("Here are your goggles. You're ready for the slopes!");
                            break;
                      case "gloves":
                        alert("Here are your gloves. You're ready for the slopes!");
                            break;
                      case "earwarmers":
                        alert("Here are your earwarmers. You're ready for the slopes!");
                            break;
}
        }
                if (stance == "Right")
                  alert("You are goofy. Let's go to the slopes!")

if (userInput == "Canada"){
  var ownOrRent = prompt("You are now in Whistler. Do you own a snowboard or do you need to rent one? Type Own or Rent")
    }  if (ownOrRent == "Own")
              var halfOrFullDay =  prompt("Ok, let's get a lift ticket then. Do you want to snowboard for a half or full day? Type Half or Full")

              if (halfOrFullDay == "Half") {
                var wallet = prompt("Alright, a half day is $50. Did you bring your wallet? Type Yes or No")
              }  if (wallet == "Yes") {
                        prompt("Here's your receipt. Have fun on the slopes!")
                      }
                    if (wallet == "No"){
                        prompt("Please go back to your hotel and get your wallet")
                  }  if (halfOrFullDay == "Full"){
                alert("Your total is $100. Have fun!")
    }
       if (ownOrRent == "Rent")
          var mensOrWomens =  prompt("Ok, let's go to rentals. Do you need mens or womens? Type Mens or Womens")
              if (mensOrWomens == "Womens") {
                var womensSize =  prompt("What size in womens?")
                    if (womensSize <=10)
                      alert("Here you go. Have fun!")
                    if (womensSize > 10)
                      alert("Sorry, we don't have your size in womens. You will have to go somewhere else to rent one");
            }
              if (mensOrWomens == "Mens") {
                  var mensSize = prompt("What size in mens?")
                    if (mensSize <=12)
                      alert("Here are your boots. Have fun!")
                    if (mensSize > 12)
                        alert("Sorry, we don't have your size in mens. You will have to go somewhere else to rent one")

                  }



/*
  console.log("You are now in Tahoe.");

}
var snowboarded = prompt("Have you ever snowboarded? (Type Yes or No)");
  if (snowboarded == "Yes") {

  }



if (userInput == "Canada"){
  console.log("You are now in Whistler");
}



/*
Any path the user goes down must ask them at least three questions.
There must be a minimum of seven total destinations the user could arrive at based on their responses.
For at least one of the questions asked, there must be more than two possible user responses.
Your code must contain at least one loop.
Your code must contain at least one switch statement
Your code must make use of both string and number user inputs.
*/

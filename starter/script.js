alert("You wake up from a long nap, disoriented, all the blinds are closed and you don't own any clocks.  You have no idea what time of day it is but you do know one thing: You're starving!")

var craving = prompt("You're not in the mood to get dressed and go out, so you decide to fend for yourself. Do you feel like breakfast or lunch (not hankering for dinner foods)? Please respond in all lowercase.")

if(craving == "breakfast") {
    alert("No better way to start your day!");

    var theBestMeal = prompt("A brief inventory of the fridge and pantry tells you that you're options are pancakes or cereal.  What will it be?")

      if(theBestMeal == "pancakes") {
        var hotStack = prompt("How many are you going to eat?")
      }

      if(hotStack <=5) {
        var topIt = prompt("Moderation is the key, so they say.  Now for toppings! syrup (shout out to Aunt Jemima), nutella, or strawberries?")
      }

      else if(hotStack <=10) {
        var topIt = prompt("Nice stack! Now for toppings! syrup (shout out to Aunt Jemima), nutella, or strawberries?")
      }

      else if(hotStack >10) {
        var topIt = prompt("Woah there! Better put on your elastic waisted pants! Would you like toppings? There's syrup or nutella, and strawberries.")
      }
      if(topIt == !('')) {
        console.log("YUM.")
      }
}

if(theBestMeal == "cereal") {

    var bowl = prompt("Do you want Life, Honey Nut Cheerios, or Coco Crispies?")

      if(bowl = "Life" || "Honey Nut Cheerios" || "Coco Crispies") {
        var moo = prompt("Luckily you recently had a BROM (Bring Your Own Milk) party so youhave tons of left overs which means choices! You've got skim, whole, almond and coconut.  What's your poison?")
      }
      if(moo == "skim" || "whole" || "almond" || "coconut") {
        var guess = prompt("Sounds like a delicious bowl of cereal to me. Guess how many individual pieces are in this bowl. You have five tries.")
        for(i = 0; i < 5; i++) {
          if(guess < 50) {
           console.log("That must be a small bowl or a small appetite!")
          }
          else if(guess > 50 && guess < 100) {
           console.log("Doubtful")
          }
          else if(guess > 100 && guess < 200) {
           console.log("Could be!")
          }
          else if(guess > 200 && guess < 500) {
           console.log("Probably so!")
          }
          else if(guess > 500) {
           console.log("Have fun eating all that cereal.")
          }
        }
      }
}

if(craving == "lunch") {
    var foodComaMeal = prompt("You're feeling a little lazy with your lunch ideas so your options are PBJ or mac-n-cheese (the microwaveable kind).  What will it be? Please type PBJ or mac-n-cheese")

      if(foodComaMeal = "PBJ") {
          var spread = prompt("Chunky or Creamy?")
      }
        if(spread = "chunky" || "creamy") {
          var jam = prompt("Jelly choices! strawberry or blackberry?")
        }

        else if(jam = "strawberry" || "blackberry") {
          var makeItADouble = prompt("Do you want to double stack it?")
        }

          if(makeItADouble === "yes") {
            console.log("NICE! Bon appetit!")
          }

          else if(makeItADouble === "no") {
            console.log("Classic.")
          }

      else if(foodComaMeal == "mac-n-cheese" || "macncheese") {
        console.log("Add water, put in microwave, and enjoy!")
      }
}

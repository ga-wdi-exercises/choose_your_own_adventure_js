var button = document.getElementById('start');
button.onclick = function() {
  function Game(){
    var answer = prompt("You have ten dollars in your pocket. You’ve grown hungry, and it’s about time for lunch. Do you leave the office or stay? (leave/stay)");
    console.log(answer);
        if (answer === "leave"){
          //left the office for lunch
          console.log("You walk outside and turn towards your favorite sandwich shop. That Hamilton is burning a hole in your pocket. Suddenly, a man gestures toward you.");
          var man = prompt("Do you stop to talk or continue walking? (stop/continue)");
          console.log(man);
            //stopped to talk
            if (man === "stop"){
              console.log("The man tells you that he needs a bus ticket to go see his grandmother. She is very ill, but he won’t say with what.");
              var cash = prompt("How much do you give him? (enter a number)");
              console.log(cash);
              //gives the man cash
              if (cash <= 2) {
                console.log("That's very generous of you. The man seems happy. Is a bus ticket cheap? It doesn't matter. You still have enough to get your favorite sandwich for lunch.");
              } else if (cash > 2 ){
                  console.log("You are a most generous person. However, you don't have enough money to buy lunch anymore.");
                  var hunger = prompt("Do you return to the office hungry or keep searching? (return/search)");
                  console.log(hunger);
                    if(hunger === "return") {
                      console.log("Sad, defeated and hungry, you return to the office and think about eating the sandwich you almost bought.");
                    } else if (hunger === "search") {
                        console.log("Your hunger gets the best of you and you attempt to dine-and-ditch at the restaurant. You get caught and wind up in the back of a police car. It is unclear when you will return to work.");
                    } else {
                        console.log("please answer the question with 'return' or 'search'. hit refresh.");
                }
              }
            }
            //kept going
            else if (man === "continue"){
              console.log("You are on a mission, and you don't have time for anything that isn't a sandwich.");
              var call = prompt("Do you call your order in ahead of time, or risk waiting in line? (call/wait)");
              console.log(call);
              //called in
                if (call === "call") {
                  console.log("The shop picks up on the first ring and you place your order without a hitch. You pick up your sandwich and ease into a state of blissful solitude until lunchtime is over.");
                } else if (call === "wait") {
                    console.log("You arrive at the shop and the line is out the door. You'll never have time to wait in line and get your sandwich before your meeting. You should have left earlier!!!");
                } else {
                    console.log("please answer the question with the suggested responses. hit refresh.");
                }
            }
          }
      // stayed in
      else if (answer === "stay") {
          console.log("You decide to look around for food.");
          var sniff = prompt("Do you go to the front desk or to the kitchen? (desk/kitchen)");}
            if (sniff === "desk") {
              console.log("The only thing here is a large bowl of butterscotch candies.")
              var butterscotch = prompt("How many do you decide to take for lunch? (enter a number)");
              console.log(butterscotch);}
                if (butterscotch < 25) {
                  console.log("That's not a very nutritious lunch, but it will do for today. Back to work!");
                } else if (butterscotch > 25) {
                    console.log("you begin to gorge on butterscotch candies. The sugar makes you feel sick, and you begin to regurgitate right in front of the receptionist. The facilities team now hates you.");
                }
          else if (sniff === "kitchen") {
              console.log("You open the fridge. Inside, you see a bowl of pasta and a big turkey sandwich.");
              var fridge = prompt("Which one do you take?(pasta/turkey)");
              console.log(fridge); }
                if (fridge === "pasta") {
                  console.log("You bring the bowl of pasta back to your desk adn eat quietly. It tastes a bit old, but at least you didn't have to leave the office!");
                } else if (fridge === "turkey") {
                  console.log("Uh-oh - it looks like that was the boss's lunch. He loves turkey. You should know that. You're fired!");
                } else {
                  console.log("please answer the question with 'pasta' or 'turkey'. hit refresh.");
                 }
               }
           }

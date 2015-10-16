// put code here!

console.log("****************************************************** \nWELCOME TO CHOOSE YOUR OWN ADVENTURE GAME \n\nTo play the game you will be presented wit prompts that ask you for input. Type your response and hit enter. Read and enjoy your adventure. Have fun! \n\n******************************************************\n\n ");

console.log("Its 12:30 in the afternoon and you have to decide to eat lunch or start your WDI homework?");

var path = prompt("Input the letter 'l' for lunch or the letter 'h' for homework.");

if (path === 'l') {
  // This is the homework path
  console.log('\n\nYou went with your stomach but your taste buds have put you in a conundrum. What do you want to eat?\n\n******************************************************');

  var pickFood = prompt("You can choose to eat something: \n\n - Heathly type 'h' \n - Bad type 'b'\n - Someone else's launch from the GA fridge type 's'");

  if (pickFood === 'h') {
    console.log("\n\nConcerned with how much weight you are going to put on during the holidays you decide on eating a healthy lunch. You mosey to G street food and opt for the chicken salad sandwich with olive oil mayo. The store clerk rings it up for $35.99. outraged you try to haggle him down to a reasonable price.\n\n******************************************************");

    var hagglePrice = 0;

    for (var i = 0; i < 4; i++) {

          // hagglePrice = prompt("Enter a price you think he will agree too? You have 3 attemps.");
          console.log("current value of haggel " + hagglePrice + " I is " + i);
      if (hagglePrice <= 19 && i !=3) {
          hagglePrice = prompt("Enter a price you think he will agree too? You have 3 attemps.");
        } else if (hagglePrice > 19){
          console.log('\n\nYou get your meal and at a great price and you are feeling good about yourself until you realize that you spent most of your lunch time haggling and have only 3 minutes to eat.');
        } else if (hagglePrice <= 19 && i === 3) {
          console.log('\n\nBeing too much of a cheapskate you piss off the store clerk and they loudly exclaim NO SANDWICH FOR YOU!!!!!! You walk away hungry and ashamed.');
        }

      }

  } else if (pickFood === 'b') {
    console.log("\n\nTo hell with eating right. You don't care that DC is one of the healthiest cities in the nation. All you care about is how tender crisps of bacon, american cheese, pickles, lettuce, tomato's, onions, and 100% USDA choice ground beef can live in blissful harmony between two oven baked buttered pretzel buns.\n\n You walk a few blocks and find an assortment of food trucks. So many choices, all of them great. You decide to number each truck from left to right and (1-8) and use a number generator to pick which truck you will eat at.\n\n******************************************************");

  var num;
  var truck;
  var generateNumber = confirm("Generate Number");
  if (generateNumber === true) {
      num = Math.floor((Math.random() * 8) + 1);
  } else {
      num = "You pressed Cancel, no food for you!";
  }

  switch (num) {
    case 1: truck = 'DC Slices';
      break;
    case 2: truck = 'DC Taco Truck';
      break;
    case 3: truck = 'Far East Taco Grille';
      break;
    case 4: truck = 'Federal City Bros.';
      break;
    case 5: truck = "Feelin' Crabby";
      break;
    case 6: truck = 'Red Hook Lobster Pound';
      break;
    case 7: truck = 'Swizzler';
      break;
    case 8: truck = 'Wassub';
      break;
    default:
  }

  console.log("\n\nYour number was " + num + " so you will have " + truck + " for lunch. You ig your triumph and head back to class.");


  } else {
    console.log("\n\nYou have no regard for other peoples feelings or property and feel like you are entitled to whatever you set you mind to. On your way to the elevator you decide to check out the fridge for inspiration on what to eat. As soon as you open the fridge the smell of someones leftover fish meal from last nights dinner smacks you in the nose. You stagger for a bit and recover. With the stench of fish in your nostrils you continue looking through the bag lunches until you see it.\n\n******************************************************");

    var selection = prompt("What did you see?\n\n - Type 'r' for red\n\n - Type 'b' for blue");

    if (selection === 'b'){
      console.log("\nYou see a bright shining light emitting from a blue tupperware. As your eyes adjust, the picture gets clearer and clearer. The light is emitting from a grilled cheese sandwich. The layers of golden cheese are bursting from the edges in a bright light as if it was calling out to your taste budds. EAT ME EAT ME!!!!! You sit at the lunch table and start to dig in. You smile with glee as you chomp down on every bit. once you get to the last bite. you look up to see instructor Andy looking at you will anger, disappointment, and hunger in his eyes. In the moment, no words are said but you both know the next 3 months will very awkward.\n\n******************************************************");
    } else {
      console.log("\nYou see a bright shining light emitting from a red tupperware. As your eyes adjust, the picture gets clearer and clearer. The light is emitting from a jar of honey. Immediately you start thinking of how to use this golden nectar. You make a cup of tea and start to pour some honey in, when all of a sudden the label comes off and reads 'DO NOT EAT I AM CHICKEN FAT'. Sad face.\n\n******************************************************");
    }
  }
} else if (path === 'h') {
  console.log("\n\nYou went with your brain and immediately regret the decision but at the same time you dont want to fall behind in the class especially in the first week. You walk to the common area and to find a seat and are presented with two options.\n\n******************************************************");

  var options = prompt("Make a choice:\n\n - Type 'm' to sit alone in the middle of campus like loser\n\n - Type 'l' to sit at the lunch table");

  if (options === 'm'){
    console.log("\n\nYou sit alone and watch as all of your peers have engaging converations about design and programming.\n\nDepression sets in and you think about quitting. Your are faced with another decision to make.\n\n******************************************************");

    var depressedDecision = prompt("Make a choice:\n\n - Type 's' to be social and make friends\n\n - Type 'q' to sit there and think about quiting in the morning.");

    if (depressedDecision === 's'){
      console.log("\n\nYou get up and make a friend that also helps you finish your work quickly so you can get some lunch.");
    }else {
      console.log("\n\nYou send a mass message to the staff that the GA way is not for you and turn in your ga sticker the next day.");
    }
  } else if (options === 'l') {
    console.log("\n\nYou sit at the lunch table and start to work. the plethora of smells surrounding you from the best food trucks to dc's finest fast food is sending you into a frenzy. You stomach goes into overdrive and you have to decide how much time in percentage you want to spend your break working on homework to make some time to get lunch.\n\n******************************************************");

    var percentage = prompt("Enter a percentage between 1-100% \nUse whole numbers and leave out the % sign.");

    if (66 < percentage && percentage <= 100){
        console.log("\n\n You got all your work done but did not get to eat.");
      } else if (49 < percentage && percentage <= 66) {
        console.log("\n\n You got all your work done and had 5 minutes to find something to stuff your face with before class.");
      }
      else {
        console.log("\n\n You some of your work done but had a satisfying meal");
      }
  }
}

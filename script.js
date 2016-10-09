//Choose your own Adventure Script
var person = prompt("Please enter your name", "Default ");

if (person != null) {
// document.getElementById("demo").innerHTML =
// "Hello " + person + " An adventure awaits you. Are you ready?";
console.log("Hello " + person + " An adventure awaits you. Are you ready?")

var advReady = confirm("If you're ready press OK to start");
  //Start the Adventure
  if (advReady) {
    // document.getElementById("intro").innerHTML =
    // "You wake up in the woods To the sound of running water. <br /><br /> [Option 1: investigate]<br />[Option 2: look around]<br />[Option 3: look up]";
    console.log("You wake up in the woods To the sound of rustling. [investigate]  [look around]   [look up]");
  }

      //Route options
  var firstCh = prompt("What do you choose? [investigate][look around][look up]");
    if (firstCh == "investigate") {
      // document.getElementById("firstCh").innerHTML =
      // "You decide to investigate!<br/>You first check your surroundings, looking at the ground beneath your feet, you see a sleeping bag. You notice it's cold out here. You start to get the feeling you should start moving.";
      console.log("You decide to investigate! You first check your surroundings, looking at the ground beneath your feet, you see a sleeping bag. You notice it's cold out here. You start to get the feeling you should start moving.");
      var invest =prompt("Using 1-30. How many minutes do you intend to investigate? ");

      //If less than 15
       if (invest <=15) {
         console.log("you investigate for a short while longer");
         var investSh = prompt("You discover a path, will you take it? [yes] / [no]");
         //Choosing yes to take the path
            if (investSh == "yes") {
              console.log("You choose to take the path wondering where it will take you");
              var investPth = prompt("You walk down this path, how many hours do you walk? [1] [2] [3]");
              console.log(investPth);
               //starting path loop
               for (i = 0; i <= investPth; i++) {
                 console.log("You have traveled for " +i+ " hours");
                  if (i > 1) {
                    //ending 1
                    console.log("You arrive at a town.");
                  }

               }
            }
            //Choosing no to take the path
            if (investSh == "no") {
              console.log("You notice another path and choose to take that instead");
              var investFork = prompt("You walk down this path until you reach a fork [right] / [left]");
              //Going right in the fork
               if (investFork = "right") {
                 //ending 2
                 console.log("You take the right path leading you to a cabin.");
               }
               //Going left in the fork
               if (investFork = "left") {
                 //ending 3
                 console.log("You take the left path which leads you to a saw mill");
               }
            }
       }

      //If greater than 15,
       if (invest >=15) {
            //ending 4
         console.log("You find a map and it leads you home, the end!");

       }

    }

    else if (firstCh == "look around") {
      // document.getElementById("firstCh").innerHTML =
      // "You decide to look around.<br/>You see a forest, but don't see anyone or anything in your immediate surroundings";
      console.log("You decide to look around. You see a forest, but don't see anyone or anything in your immediate surroundings, but you feel like you're being watched.");

      var find = prompt("You hear a sound from the nearby bushes. You hear a sound of the river. You can hear the faint sound of howling. Which do you check? [bushes] / [river] / [howling]")
      switch(find) {
        case "bushes":
        console.log("You decide to check the bushes and and see a fox");
        case "river":
        //ending 5
        console.log("You decide to check the river, and come across a dock");
        case "howling":
        console.log("Are you sure? [yes] / [no] / [completely]");
      }

    }

    else if (firstCh == "look up") {
      // document.getElementById("firstCh").innerHTML =
      // "You see a darkened sky, the sun setting behind the clouds.";
      console.log("You see a darkened sky, the sun setting behind the clouds.");
      var sky = prompt("You stare at the sky, and start to think about how you feel [calm] / [scared] / [lost]");
        if (sky == "calm") {
          //ending 6
          console.log("You accept the fact that you're lost and that brings you peace. you adapt your surrounds and learn to live in the woods. The End!");

        if (sky == "scared") {
          //ending 7
          console.log("You tremble at the idea of being lost in the woods. You contemplate the decisions you've made up to this point. You are slowly overomce by this feeling and run off until you find civilization. The End!");
        }
        }
    }

     else {
    console.log("You take our time to decide what to do, it starts to rain.")
    }

}

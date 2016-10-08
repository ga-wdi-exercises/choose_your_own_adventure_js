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
        console.log("You wake up in the woods To the sound of running water. [Option 1: investigate][Option 2: look around] [Option 3: look up]");
      }

          //Route options
      var firstCh = prompt("What do you choose? [Option 1: investigate][Option 2: look around][Option 3: look up]");
        if (firstCh == "investigate") {
          // document.getElementById("firstCh").innerHTML =
          // "You decide to investigate!<br/>You first check your surroundings, looking at the ground beneath your feet, you see a sleeping bag. You notice it's cold out here. You start to get the feeling you should start moving.";
          console.log("You decide to investigate! You first check your surroundings, looking at the ground beneath your feet, you see a sleeping bag. You notice it's cold out here. You start to get the feeling you should start moving.");
          var invest =prompt("Using 1-30. How many minutes do you intend to investigate? ");
           if (invest <=15) {
             console.log("you investigate for a short while");
             var investSh = prompt("You discover a path, will you take it? [yes] / [no]");
                if (investSh == "yes") {
                  console.log("You choose to take the path wondering where it will take you");
                  var investPth = prompt("You walk down this path and it gets later and later, how many hours do you walk? [1] [2] [3]");
                  console.log(investPth);
                   //starting path loop
                   for (i = 0; i <= investPth; i++) {
                     console.log("You have traveled for " +i+ " hours");
                      if (i > 0) {
                        console.log("You arrive at town.");
                      }

                   }
                }
           }


           if (invest >=15) {
             console.log("You find a map and it leads you home, the end!");

           }

        }




        else if (firstCh == "look around") {
          // document.getElementById("firstCh").innerHTML =
          // "You decide to look around.<br/>You see a forest, but don't see anyone or anything in your immediate surroundings";
          console.log("You decide to look around. You see a forest, but don't see anyone or anything in your immediate surroundings.");

        }

        else if (firstCh == "look up") {
          // document.getElementById("firstCh").innerHTML =
          // "You see a darkened sky, the sun setting behind the clouds.";
          console.log("You see a darkened sky, the sun setting behind the clouds.");
        }

         else {
        console.log("You take our time to decide what to do, it starts to rain.")
        }

}
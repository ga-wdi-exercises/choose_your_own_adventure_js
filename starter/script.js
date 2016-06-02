var divider = function(){

   console.log("*******************************************************");

}

divider();

   console.log("Welcome to the Adventure... ");

divider();

   var name = prompt("What is your name???");
   console.log("Hello " + name + ", You are AWESOME!!!");
   console.log("You are one of our BEST workers!!!");
   console.log("But...... I noticed you have been dozing...");
divider();
   var leaveOrStay = prompt("Would you like to LEAVE and go home or STAY and stick it out??? ***(L or S)***");

   if(leaveOrStay !== "L" && leaveOrStay !== "S" && leaveOrStay !== "l" && leaveOrStay !== "s"){


       console.log("C'mon sleepyhead!!! You need to make a decision because you CANNOT ");
       console.log("keep slobbering over these important papers");
       leaveOrStay = prompt("Would you like to LEAVE and go home or STAY and stick it out??? ***(L or S)***");

divider();
   }else if(leaveOrStay == "L"){

divider();

       console.log("You're LEAVING!!! Are you REALLY sleepy???");
       var homeOrHappy = prompt("Are going straight HOME to get rest OR Are you going to HAPPY HOUR ***(HOME or HAPPY)***");

       if(homeOrHappy == "home"){

          console.log("Get some much needed rest");
          console.log("I will see you tomorrow!!!");

       }else{

         console.log("You're going to HAPPY HOUR!!!");
         console.log("I hope you have a job to come to tomorrow!!!");


       };

divider();
   }else{
divider();

       console.log("You're STAYING!!! Do you think you can stay awake???");
       var workOrNap = ("Are you gonna finish your WORK OR Are you gonna take a power NAP to recharge and re-energize???");


divider();
   }

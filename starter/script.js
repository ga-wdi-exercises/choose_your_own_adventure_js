var name = prompt("What is your name?");
var year = prompt("Nice to meet you " + name + ", what year would you like to go to?");
if(year == 2015 || year > 2015){
  var biffGriff = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)");
      if(biffGriff == "B"){
        var fightFlight = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)");

          if (fightFlight == "S"){
            alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
        } else if (inOut == "R"){
            alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.")
        } else ("You must enter 'I' or 'O', please try again");
      }else if (biffGriff == "G"){
        var inOut = prompt("Griff is asking you if you are in, or out. What do you say? (I/O)");
        if (inOut == "I"){
          alert("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.");
        } else if (inOut == "O"){
          alert("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.")
        } else ("You must enter 'I' or 'O', please try again");
      } else{
        alert("You must enter 'B' or 'G', please try again");
      };
} else if (year > 1985 && year < 2014){
  var cK = prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?");
    alert("Welcome to the future " + cK + ".");

} else if (year > 1955 && year < 1984){
  var future1 = prompt("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)")
  if(future1 == "Y"){
    alert("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955");
  } else if(future1 == "N"){
    alert("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.");
  } else if(future1 == "S"){
    alert("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.");
  }
  else{
    alert("You must enter 'Y','N' or 'S'. Please try again.")
  }
} else if (year < 1955){
  var timeMachine = prompt("I see you're a fan of Back to the Future 3. You've run out of nitroglycerin to get back to your own time. How do you power the Time Machine? (H/M/T)");
  if(timeMachine == "H"){
    alert("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.");
  } else if(timeMachine == "M" ){
    alert("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.");
  } else if(timeMachine == "T"){
    var train = prompt("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)");
    if(train == "T"){
      alert("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.");
    }
    else if(train == "L"){
      alert("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.");
    } else{
      alert("You must enter 'L' or 'T'. Please try again.")
    }
} else{
  alert("You have not entered a valid year.")
}
};

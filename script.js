var name = prompt("Hi there, what's your name?");
var year = prompt("Nice to meet you "+name+", what year would you like to go to?");

for(var i = year; i <= 2015; i++) {
name = "Calvin Klein";
}

if(year >= 2015) {
    console.log("I see you're a fan of Back To The Future 2, would you rather deal with Biff or Griff?");
    var biffOrGriff = prompt("Biff or Griff? (Please enter 'b' or 'g')");
      if(biffOrGriff === "b") {
        console.log("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward?");
        var standOrRun = prompt("Fight or Run? (Please enter 'f' or 'r')");
          if(standOrRun === "f") {
            console.log("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
          } else {
            console.log("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
          }
    } else {
        console.log("Griff is asking you if you are in, or out. What do you say?");
        var inOrOut = prompt("In or Out? (Please enter 'i' or 'o')");
          if(inOrOut === 'i') {
            console.log("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.");
          } else {
            console.log("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");
          }
      }
}
//I think this section would be best for a loop but I'm not sure how to incorporate it in a meaningful way.
else if(year >= 1985 && year <= 2014) {
    console.log("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015.");
    var newName = prompt("Until then, you're new name is " + name + "");
}
//end possible loop
else if(year >= 1955 && year <= 1984) {
    console.log("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do?");
    var yourMom = prompt("Answer Yes, No, or Set her up with George! (Please enter 'y', 'n', or 's')");
      if(yourMom === "y") {
        console.log("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.");
      } else if(yourMom === "n") {
        console.log("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.");
      } else {
        console.log("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.");
      }
} else if(year < 1955) {
    console.log("I see you're a fan of Back to the Future 3. You've run out of nitroglycerin to get back to your own time. How do you power the Time Machine?");
    var howToPower = prompt("Horses? Moonshine? Train? (Please enter 'h', 'm', or 't')");
      if(howToPower === "h") {
        console.log("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.");
      } else if(howToPower === "m") {
        console.log("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in " + year + ".");
      } else {
        console.log("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do?");
        var takeClara = prompt("Do you Take her or Leave her? (Please enter 't' or 'l')");
          if(takeClara === "t") {
            console.log("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in " + year + " with her.");
          } else {
            console.log("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.");
          }
      }
  }

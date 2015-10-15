// // put code here!

var name = prompt("What is your name?");
console.log("Hello, " + name);

var year = prompt("What year would you like to go to?");
console.log(year);

if (year >= 2015) {
  console.log("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? **(B/G)**");

  var biffGriff = prompt("Would you rather deal with Biff, or Griff? **(B/G)**");

  if (biffGriff == "b") {
    console.log("Biff - Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)**");

    var standRun = prompt("Do you stand and fight, or run away like a coward? **(S/R)**");

      if (standRun == "s") {
        console.log("Stand and fight - Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
      } else if (standRun == "r") {
        console.log("Run like a coward. You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
      }

  } else if (biffGriff == 'g') {
    console.log("Griff - Griff is asking you if you are in, or out. What do you say? **(I/O)**");

    var inOut = prompt("Griff is asking you if you are in, or out. What do you say? **(I/O)**");

    if (inOut == "i") {
      console.log("In - Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.");
    } else if (inOut == "o") {
      console.log("Out - Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");
    }
  }
}

else if (year <= 2014) {
  console.log("2014 or earlier - Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. Especially becuase I ran out of time to code those answers up.");
}

//                     - `I`n
//                         - Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.
//                     - `O`ut
//                         - Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.
//     - `1985-2014`
//         - Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?
//             - `Calvin Klein`
//                 - Welcome to the future, `Calvin Klein`.
//     - `1955-1984`
//         - I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? **(Y/N/S)**
//             - `Y`es
//                 - Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.
//             - `N`o
//                 - Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.
//             - `S`et her up with George
//                 - Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.
//     - `< 1955`
//         - I see you're a fan of Back to the Future 3. You've run out of nitroglycerin to get back to your own time. How do you power the Time Machine? **(H/M/T)**
//             - `H`orses
//                 - Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.
//             - `M`oonshine
//                 - You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.
//             - `T`rain
//                 - Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? **(T/L)**
//                     - `T`ake her
//                         - Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.
//                     - `L`eave her
//                         - Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.
//

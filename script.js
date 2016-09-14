// put code here!

var name = prompt("Hey! What's your name?");
while (!name) {
  name = prompt("Don't be shy! Who are you?");
}

var toPlayOrNotToPlay = confirm("Great, " + name + "! Would you like to play a game?")

if (!toPlayOrNotToPlay) {
  alert("Okay, BYE!")
} else {
  alert("Okay!");

  var response = parseInt(prompt("What year would you like to visit?"));

  if (response >= 2016) {
    response = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? ([B]iff/[G]riff)").toString();

    if (response == "B") {
      response = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? ([S]tay/[R]un)");

      if (response == "S") {
        alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
      } else if (response == "R") {
        alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.")
      } else {
        huh();
      }
    } else if (response == "G") {
      response = prompt("Griff is asking you if you are in, or out. What do you say? ([I]n/[O]ut)");
      if (response == "I") {
        alert("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.");
      } else if (response == "O") {
        alert("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");
      } else {
        huh();
      }
    } else {
      huh();
    }

  } else if (response >= 1985) {
    response = prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?").toString();

    alert("Welcome to the future, " + response);
  } else if (response >= 1955) {
    response = prompt("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? ([Y]es/[N]o/[S]et her up with George)");

      if (response == "Y") {
        alert("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.");
      } else if (response == "N") {
        alert("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.")
      } else if (response == "S") {
        alert("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.")
      } else {
        huh();
      }

  } else if (response < 1955) {
    response = prompt("I see you're a fan of Back to the Future 3. You've run out of nitroglycerin to get back to your own time. How do you power the Time Machine? ([H]orses/[M]oonshine/[T]rain)")

    if (response == "H") {
      alert("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.")
    } else if (response == "M") {
      alert("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.")
    } else if (response == "T") {
      response = prompt("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? ([T]ake her/[L]eave her)")

      if (response == "T") {
        alert("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.")
      } else if (response == "L") {
        alert("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.");
      } else {
        huh();
      }
    }


  } else {
    huh();
  }

}

function huh(){
  alert("Huh? Looks like something went wrong with the time machine. Refresh and start over!")
}

//I could use something like this to validate responses. Didn't have time to implement though...

// function validate(arr) {
//   while (!arr.index(response))
// }

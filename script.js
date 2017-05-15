// put code here!
$(document).ready(function() {
var startButton = $("#startButton");

startButton.on("click",playGame);

});
// Main Line
function playGame() {
  name = getName();
  rawYear = getYear(name);
  intYear = parseInt(rawYear, 10);  //get the year we go back to
  if (intYear == 2015) {        // set version to BTTF1, BTTF2, or BTTF3
    var version = "bttf2";
    var versionPath = bttf2(name);
    console.log(name);
    console.log(version);
    console.log(versionPath);
  } else {
    if (1985 < intYear && intYear < 2014 ) {
      var version = "bttf1";
      versionPath = bttf1(name);
      console.log(name);
      console.log(version);
      console.log(versionPath);
    } else {
      var version = "bttf3";
      var versionPath = bttf3(name);
      console.log(name);
      console.log(version);
      console.log(versionPath);
    }
  }

}

// Individual questions
function q2() {
  return "2015";
}

function getName() {
  var answer = prompt("Greetings!  What is your name?");
  return answer;
}
function getYear(name) {
  var answer = prompt("Nice to meet you, " + name + ".  What year would you like to go to? (1955-2015)");
  return answer;
}
function bttf2(name) {
  var ansRAW = prompt("I see you're a fan of BTTF 2. Would you rather deal with Biff, or Griff? (B/G)");
  var ansUP = ansRAW.toUpperCase();
  if (ansUP == "B" || ansUP == "BIFF") {
    return "Biff";
  } else {
        return "Griff";
  }
}

function bttf1(name) {
  alert("I see you're a fan of BTTF 1. Your future Mom has just asked you to the big dance.");
  var ansRAW = prompt("What do you do? Enter Y to say Yes, N to say No, S to Set her up with George");
  var ansUP = ansRAW.toUpperCase();
  if (ansUP == "S" || ansUP == "G") {
    return "George";
  } else {
    if (ansUP == "Y" || ansUP == "YES") {
      return "Yes";
    } else {
      return "No";
    }
  }
}
function bttf3(name) {
  alert("I see you're a fan of BttF 3. You've run out of nitroglycerin to get back to your own time.");
  var ansRAW = prompt("How do you power the Time Machine? For Horses enter H, for Moonshine enter M, for the Train enter T");
  var ansUP = ansRAW.toUpperCase();
  if (ansUP == "T") {
    return "Train";
  } else {
    if (ansUP == "M") {
      return "Moonshine";
    } else {
      return "Horses";
    }
  }
  // return answer;
}

// >= 2015
// I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)
// Biff
// Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)
// Stand and fight
// Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.
// Run like a coward
// You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.
// Griff
// Griff is asking you if you are in, or out. What do you say? (I/O)
// In
// Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.
// Out
// Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.
// 1985-2014
// Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?
// Calvin Klein
// Welcome to the future, Calvin Klein.
// 1955-1984
// I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)
// Yes
// Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.
// No
// Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.
// Set her up with George
// Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.
// < 1955
// I see you're a fan of Back to the Future 3. You've run out of nitroglycerin to get back to your own time. How do you power the Time Machine? (H/M/T)
// Horses
// Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.
// Moonshine
// You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.
// Train
// Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)
// Take her
// Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.
// Leave her
// Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.
// Status API Training Shop Blog About
// © 2016 GitHub, Inc. Terms Privacy Security Contact Help

// The Mystery of the Lost Locket - A Choose Your Own Adventure Game
// Function to ask questions to user
function askQuestion(promptText) {
  var userInput = prompt(promptText);
  userInput = userInput.toLowerCase();
  document.write("<h2>" + promptText + "</h2><p>" + name + " answered: " + userInput + "</p>");
  return userInput;
}

// Function to write ending
function writeEnding(endingText) {
  document.write("<h2>" + endingText + "</h2>");
}

// Get user name
var name = prompt("What is your name?");
document.write("<h2>" + name + "!</h2>");

// Does the user accept the assignment?
var promptAssignment = "You’re just who we’ve been looking for! You come highly recommended as an expert sleuth. We need your help solving the mystery of the Lost Locket! Will you accept the assignment? (y/n)";
var promptAssignmentAnswer = askQuestion(promptAssignment);

// "y" - Select your partner: Nancy Drew or the Hardy Boys
if (promptAssignmentAnswer === "y") {
  var promptYes = "Thank you! We should enlist the help of some other detectives in this mystery. Who would you rather have help you: Nancy Drew or The Hardy Boys? (n/h)";
  var promptYesAnswer = askQuestion(promptYes);

    // "n" - How do you want to pick up Nancy?
    if (promptYesAnswer === "n") {
      var promptNancy = "Here’s your brief on the assignment. Nancy’s eating lunch at the The Flying Fish restaurant at the harbor. We need you to go pick her up. You can choose to take the car, tandem bicycle or double kayak. (c/b/k)";
      var promptNancyAnswer = askQuestion(promptNancy);

        // "c" - Car  - ENDING
        if (promptNancyAnswer === "c") {
          var carEnding = "The Rolls Royce is a pretty sweet ride. You two go around town picking up clues and drinking coffee and solve the mystery just in time for dinner. Turns out the locket was in the cup holder all this time! [THE END]";
          writeEnding(carEnding);

        // "b" - Bicycle - ENDING
        } else if (promptNancyAnswer === "b") {
          var bicycleEnding = "It turns out Nancy is not a good bicycle rider. On the way to the haunted mansion, she falls over, the bike frame is broken and you’re stuck in the middle of a country road and have to walk home. [THE END]";
          writeEnding(bicycleEnding);

        // "k" - Kayak - ENDING
        } else if (promptNancyAnswer === "k") {
          var kayakEnding = "Oh no! You’re not a very good kayaker. How did you tip that over? All the clues are lost and the mystery is never solved. [THE END]";
          writeEnding(kayakEnding);
        }

      // "h" - Meet the Hardy Boys at the park or the library?
    } else if (promptYesAnswer === "h") {
      var promptHardyBoys = "The Hardy Boys are on their way! Where would you like them to meet you to start looking for clues: the Library or the Park? (l/p)";
      var promptHardyBoysAnswer = askQuestion(promptHardyBoys);

      // "l" - Ask Mrs. Nelson for help?
      if (promptHardyBoysAnswer === "l") {
        var promptAskNelson = "Mrs. Nelson is upset that you and the Hardy Boys are whispering so loudly in the Library. She taps her foot and crosses her arms and it’s just a matter of time before she kicks you all out. Do you ask her for help with the next clue? (y/n)";
        var promptAskNelsonAnswer = askQuestion(promptAskNelson);

        // "y" - Mrs. Nelson Escapes - ENDING
        if (promptAskNelsonAnswer === "y") {
          var nelsonEnding = "With her help, you find the next clue. And the next one. And the next one. Except it turns out they aren’t clues at all, but false leads. By the time you realize she was misleading you, Mrs. Nelson is on a plane to South America with the locket around her neck. [THE END]";
          writeEnding(nelsonEnding);

        // "n" - Leave the Library - ENDING
        } else if (promptAskNelsonAnswer === "n") {
          var cupHolderEnding = "You and the Hardy Boys leave the Library and get into the Rolls Royce. What do you find? The locket was in the cup holder this whole time! [THE END]";
          writeEnding(cupHolderEnding);
        }

      // "p" - Park - ENDING
      } else if (promptHardyBoysAnswer === "p") {
        var parkEnding = "You all pile into the car to go to the Park and, when you stop at the drive-thru on the way, your soda spills all over the interior because it won’t fit into the cupholder. What’s in the bottom? The locket! Another mystery solved. [THE END]";
        writeEnding(parkEnding);
      }
    }

  // "n" - How much money would it take to hire the user?
} else if (promptAssignmentAnswer === "n") {
  var promptNo = "No? What if we pay you a handsome sum? How much money would you need to take on this assignment? (Please enter a number.)";
  var promptNoAnswer = askQuestion(promptNo);
  promptNoAnswer = parseInt(promptNoAnswer, 10);

  // Message for when user provides an acceptable price.
  var goodPriceEnding = "I think we can make that work. Let me talk to the bosses to arrange payment. Never mind…we’re actually broke. [THE END]";

  // User doesn't enter number OR number is less than 1 - ENDING
  if (!promptNoAnswer || promptNoAnswer < 1) {
    var notAnAnswerEnding = "That doesn't even make sense! Maybe you aren't as good a detective as I thought...[THE END]";
    writeEnding(notAnAnswerEnding);

  // If number is greater than 1000
  } else if (promptNoAnswer > 1000) {
    var promptTooExpensive = "You’re too rich for my blood. I don’t even think the locket’s worth that much. Can you charge a lower fee? How much?";
    while (promptNoAnswer > 1000) {
      promptNoAnswer = askQuestion(promptTooExpensive);
      promptNoAnswer = parseInt(promptNoAnswer, 10);
    }
    writeEnding(goodPriceEnding);

  // If number is less than 1000
  } else if (promptNoAnswer <= 1000) {
      writeEnding(goodPriceEnding);
    }
}

// // put code here!
// Welcome to Erica Andersen's Presidential Program

// Global Variables
var notValid = "That's not an option. Try again!"

// Prompt "What is your name?" // Collect name
var userName = prompt("What is your name?")

// Welcome Message "Nice to meet you, userName. What year would you like to go to? (YYYY)" // Collect year
var welcomeYear = prompt("Nice to meet you, " + userName + ". What year would you like to go to between 1732 and 2015? (YYYY)");
  // Prompt 1 < 1900 Question 1 // Collect Option
  while (welcomeYear >= 1732 && welcomeYear < 1900) {
    // Prompt 1 < 1900 Question 2 // Collect Prompt 1 Option
    var pathEarlyPresident = prompt("Ah, I see you're a fan of 18th and 19th century Presidents. George Washington and Abraham Lincoln seem to be approaching you. Would you rather meet with (G)eorge or (A)be?");
      // Prompt 1 < 1900 Option 1 (Question 3) // Collect Option
      if (pathEarlyPresident === "G") {
        var georgeStory = prompt("You walk over to George to introduce yourself. George recognizes your from your great great great great grandfather and has invited you to help him chop down a cherry tree. Do you help him? (Y)es or (N)o");
          if (georgeStory === "Y") {
            alert("George is delighted and exclaims, \"Just don't tell my father!\"");
          }
          else if (georgeStory === "N") {
            alert("George says, \"Fare thee well, " + userName + ".\"");
          }
          else {
            alert(notValid);
          }
          break;
      }
      // Prompt 1 < 1900 Option 2 (Question 3) // Collect Option
      else if (pathEarlyPresident === "A") {
        var abeStory = prompt("You walk over to Abe to introduce yourself. Abe seems confused by your attire and invites you inside his home for new clothes. Do you go inside his home? (Y)es or (N)o");
          if (abeStory === "Y") {
            alert("Inside, you and Abe have a great chat! After freshening up your wardrobe he convinces you to join his leauge of vampire slayers.");
          }
          else if (abeStory === "N") {
            alert("Abe is very angry and accuses you of being a vampire slayer and starts chasing after you with his axe!");
          }
          else {
            alert(notValid);
          }
          break;
      }
  }
  // Prompt 2 >= 1900 && < 2000 Question 1 // Collect Option
  while (welcomeYear >= 1900 && welcomeYear < 2000) {
    // Prompt 2 >= 1900 && < 2000 Question 2 // Collect Option
    var pathMidPresident = prompt("Ah, I see you're a fan of 20th century Presidents. Theodore Roosevelt, Harry S. Truman and Richard M. Nixon have invited you to a dinner party at the White House. During dinner, everyone decides they want to tell their favorite joke. As the guest of honor, you get to choose who can tell their joke. Who would you like to hear a joke from? (T)eddy, (H)arry or (R)ichard?");
      // Prompt 2 >= 1900 && < 2000 Option 1 (Joke 1)
      if (pathMidPresident === "T") {
        alert("What do you call a moose with no name? Anonymoose");
      }
      // Prompt 2 >= 1900 && < 2000 Option 2 (Joke 2)
      else if (pathMidPresident === "H") {
        alert("Once, an eager young student asked me, \"How do I get started in politics, sir?\" I couldn't help but give a little smirk and replied to him, \"Well, you’ve already started, you’re spending somebody else’s money, aren’t you?\"");
      }
      // Prompt 2 >= 1900 && < 2000 Option 3 (Joke 3)
      else if (pathMidPresident === "R") {
        alert("Once, my wife complained about the dinner I prepared. I looked at her and said honestly, \"I am not a cook!\"");
      }
      else {
        alert(notValid);
      }
      break;
  }
  // Prompt 3 >= 2000 && <= 2015 Question 1 // Collect Option
  while (welcomeYear >= 2000 && welcomeYear <= 2015) {
    // Prompt 3 >= 2000 && <= 2015 Question 2 // Collect Option
    var pathRecentPresident = prompt("Ah, I see you're a fan of 21st century Presidents. George W. Bush and Barack Obama are on their way to a golf tournament. You have been selected to be one of their Golf Club Attendants. Who would you rather serve on the green? (B)ush or (O)bama?");
      // Prompt 3 >= 2000 && <= 2015 Option 1 (Question 3) // Collect Option
      if (pathRecentPresident === "B") {
        var bushStory = prompt("You walk over to George to introduce yourself. George gives you a firm handshake and goofy smile. He asks if you'd like a drink before you get started. Do you accept the offer? (Y)es or (N)o");
          if (bushStory === "Y") {
            alert("George politely hands you a drink and throws in, \"It looks like you'll be the only one drinking, the only -aholic I consider myself to be these days is a golf-aholic!\"");
          }
          else if (bushStory === "N") {
            alert("George says, \"looks like it's time for tee then!\"");
          }
          else {
            alert(notValid);
          }
          break;
      }
      // Prompt 3 >= 2000 && <= 2015 Option 2 (Question 3) // Collect Option
      else if (pathRecentPresident === "O") {
        var obamaStory = prompt("You walk over to Barack to introduce yourself. Barack gives you a firm handshake and charming smile. He asks if you'd like a drink before you get started. Do you accept the offer? (Y)es or (N)o");
          if (obamaStory === "Y") {
            alert("Barack cracks open a cold one for each of you and adds, \"It's a beautiful day for golf!\"");
          }
          else if (obamaStory === "N") {
            alert("Sounds good my friend, lets get started on my 201st round on the green!");
          }
          else {
            alert(notValid);
          }
          break;
      }
  }
  while (welcomeYear < 1732 && welcomeYear > 2015){
      alert("Please choose a year between 1732 and 2015.");
      break;
}

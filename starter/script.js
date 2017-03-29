

var username = prompt("Hi! Are you all set? What is your name");
var year = prompt("Hello, " + username +  " Okay, let's select our destination. We have a few options. Enter the year you'd like to visit: 1950, 1965, 1989, or 1994");
    if (year === '1950') {
      var fifty = prompt("Heading to 1950! Interesting time. Would you like to have lunch with President Truman or General Douglas MacArthur? (T/M)")
    } else if (year === '1965') {
      var sixtyfive = prompt("Heading to 1965! Press enter to go!")
    } else if (year === '1989') {
      var eightynine = prompt("Heading to 1994!Press enter to go!")
    } else var ninetyfour = prompt("Sorry, I didn't catch that. Where are we going? 1950/1965/1989/1994");


//Options for first question for 1950//
if (fifty === "T") {
	var trumanOne = prompt("Excellent. President Truman would like to Prep for the meeting. Would you like to discuss domestic or international affairs? (D/I");
} else if (fifty === "M" ) {
	var mccarthurOne = prompt("Excellent. the General looks forward to the discussion. Would you like the meeting to take place on sea or on land? (S/L")
} else {
	prompt("Sorry, I didn't catch that. Press 'T' if you'd like to have lunch with President Truman. Press  'M' if you'd like to have lunch with Douglas MacArthur.")
}



//Options for Truman Question 1
if (trumanOne === "D") {
	var trumanD = prompt("Good choice - there is much to be discussed. Would you like to talk about the McCarran Internal Security Act, or the Kefauver Committee? (M/K");
} else if (trumanOne === "I") {
	var trumanI = prompt("Good choice - there is much to be discussed. Would you like to discuss the ratification of the North Atlantic Treaty Organization, or the Korean War? (N/K")
}

if (trumanD === "M") {
	var mcCarran = prompt("Excellent topic. Please prepare for the discussion by doing some initital background reading here: 'www.wikipedia.org'.");
} else if (trumanD === "K") {
	var Kefauver = prompt("Excellent topic. Please prepare for the discussion by doing some initital background reading here: 'www.wikipedia.org'.");
}





/*
### Rules
* Any path the user goes down must ask them at least **three** questions.
* There must be a minimum of **seven** total destinations the user could arrive at based on their responses.
* For **at least one** of the questions asked, there must be **more than two possible user responses**.
* Your code must contain **at least one loop**.
* Your code must contain **at least one switch statement**
* Your code must make use of **both string and number user inputs**.
*/

    
    
 




























 



  

  

  


 

  



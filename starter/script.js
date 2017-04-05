var username = prompt("Hello there! You've been given a chance to go back in time to meet with some of modern history's most important political and popular figures. Before you meet them, you'll need to answer a few questions, and do some preperation for your meeting. Are you all set? What is your name");

var year = prompt("Hello, " + username +  " Okay, let's select our destination. We have a few options. Enter the decade you'd like to visit: (1950/2030)")
    if (year === "1950") {
      var year = prompt("Heading to the 50s! Interesting time. Would you like to have lunch with President Harry Truman or Frank Sinatra? (T/S)")
    } else if (year === "2030") {
      prompt("Just kidding! This hasn't happened yet! Why not try 1950?")
  } while (year != "1950" || "2030") {
  	prompt("Please select a valid choice!")
  }

  
//Options for first question for 1950//
if (year  === "T") {
	var year = prompt("Excellent. President Truman would like to Prep for the meeting. Would you like to discuss domestic or international affairs? (D/I)");
} else if (year === "S" ) {
	var year = prompt("Excellent. Frank looks forward to the discussion. A lot happened to Frank during the 50's. Do you want to talk about the good times or the bad times? (G/B)")


//Options for Truman Question 1
if (year === "D") {
	var year = prompt("Good choice - there is much to be discussed. The more specific a conversation is, the better. Would you like to talk about the McCarran Internal Security Act, or the Kefauver Committee? (M/K)");
} else if (year === "I") {
	var year = prompt("Good choice - there is much to be discussed. The more specific a conversation is, the better. Would you like to discuss the ratification of the North Atlantic Treaty Organization, or the Korean War? (N/K)")
}

if (year === "M") {
	var year = prompt("Excellent topic. To give you some context, and to help you prepare for the meeting, you're now being transported to a Congressional Hearing on the McCarran Interbal Security Act.");
} else if (year === "K") {
	var year = prompt("Excellent topic. To give you some context, and to help you prepare for the meeting, you're now being transported to a meeting of the Congressional Special Committee to Investigate Crime in Interstate Commerce.")
}

if (year === "N") {
	var year = prompt("Excellent topic. To give you some context, and to help you prepare for the meeting, you're being transported to a meeting with Theodore Achilles. the U.S. vice deputy of the North Atlantic Council. Enjoy!")
} else if (year === "K") {
	var year = prompt ("Excellent topic. To give you some context, and to help you prepare for the meeting, you're being tranported to a meeting with President Truman's speechwriter, James Sundquist. Enjoy!")
	};

if (year === "G") {
	var year = prompt("Let the good times roll. Would you rather discuss the high points in his career, or in his personal life? (C/P)")
} else if (year === "B") {
	var year = prompt("How macabre! Would you rather discuss the low points in his career or his personal life? (C/P)")
}

if (year === "C") {
	var year = prompt("To give you some context for your meeting with Frank, let's go see him perform at 1951 at the Las Vegas Desert Inn. Sinatra was one of Vegas's biggest stars in the 1950s.")
} else if (year === "P") {
	var year = prompt("To give you some context for your meeting with Frank, let's go talk with actor Gregory Peck, who partied hard with Frank in Vegas during these years. Enjoy!")
}
};
	


























 



  

  

  


 

  
























 



  

  

  


 

  



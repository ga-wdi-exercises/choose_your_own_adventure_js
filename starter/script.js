//Ask user if they're ready
var readyToPlay = confirm("Are you ready to play?");
	if (readyToPlay===true) {
	alert("Well let's go then");
	}
	else alert("FINE!! LEAVE!");

//Give disclaimer and ask for age
  var age = prompt ("This adventure may not be appropriate for people under the age of 18. So how old are you?");
 // They can play no matter the age. But if they're under 18 we take no responsibilty for the corruption of minds

 	if (age < 18) {
 		notOldEnough ();
	} 

	else if (age >= 18) {
		alert("You can play!!!");
	}

//give beginning of story
alert ("While working as a school teacher, you find out you have cancer. You\'re salary won\'t be nearly enough for medical bills.You watch a documentary on how you can make boatloads of money on an illegal product call \"Blue\". There are inherent risks involved (like jail or death), but you can pay medical bills earn much more money than you ever dreamed of. What do you do?");

//give choices for question 1
var illegalLegitOrBoth = prompt("A.)Do you make an honest living? B. Make a crooked killing? C. Do a little of both until you're holding onto 1 million dollars");


//This is where the paths will diverge for the first time.

	if (illegalLegitOrBoth === "A" || illegalLegitOrBoth === "a"|| illegalLegitOrBoth === "Make and honest living") {
		alert("You think about it for a long time and decide to continue your job as a school teacher. And work a side job at a car wash to make ends meet. After a long day teaching, you feel tired but you need money to pay for medical bills.");
	}
		//Decision on whether to go to work sleep or bar
			var makeAnHonestLiving = prompt ("You think about it for a long time and decide to continue your job as a school teacher. And work a side job at a car wash to make ends meet. After a long day teaching, you feel tired but you need money to pay for medical bills. A.) Do you go home and sleep? B.)Go to car wash to earn more money? C.) Go to the local drinking bar and try to find the meaning of life in a Corona");
			//Sleep
			 if (makeAnHonestLiving === "a" || makeAnHonestLiving === "A") {
			 	alert("Sleep is the cousin of death as they say. And you move a little but closer to it with this decision. What now?");
			 }
			 	//Sleeping decisions
			 		var toSleepOrNot = prompt ("A.) Mentally Prepare your lesson plans for the week. B.) Dream C.)Forgo sleep and take a swim.");
			 			//Lesson Plans it is
			 			if (toSleepOrNot === "A" || toSleepOrNot === "a") {
			 				alert("I believe that children are our future too. You keep doing this and are fulfilled during your last days. Thanks for playing");
			 				//Dream
			 			} else if (toSleepOrNot === "B" || toSleepOrNot==="b") {
			 				alert("You sleep walk and get hit by a bus. Tough luck. Thanks for playing");
			 				//Go for a swim
			 			  } else if (toSleepOrNot === "C" || toSleepOrNot ==="c") {
			 			  	alert("You're so sleepy that you fall asleep while swimming. So you know...you drown. Thanks for playing.");
			 			  }
			 	// Getting more money
			  else if (makeAnHonestLiving === "b" || makeAnHonestLiving === "B") {
			 	alert("That's the spirit. More money is needed based on your current situation. After a while the manager notices how hard you're working and offers to pay you more money under the table. What do you say?");
			 }	
			 	//Hard work at the Car Wash
			 		var hardWork = prompt("A.) Yes. Because you know...you need more money  B.) No. C.)You don't want a raise. You ask if you can have the Car Wash instead. And you're dead serious.")
			 		//Yes
			 			if (hardWork === "A" || hardWork === "a") {
			 				alert("It takes a few years but you are able to pay all your medical bills with the under the table raises. Good job");
			 		//No
			 			} 	else if (hardWork === "B" || hardWork === "b"){
			 				alert("You die from working too much. Thanks for playing.");
			 			}
			 	//Give me everything. The entire Car wash
			 			else if (hardWork === "C" || hardWork === "c") {
			 				alert("You don't want a raise. You ask if you can have the Car Wash instead. And you're dead serious.The manager looks at you with a confused look. And fires you. What kind of question was that? Medical bills get too high and you can't keep up with only one job. Thanks for playing.")
			 			} 
			// Go to Bar
			else if (makeAnHonestLiving === "C" || makeAnHonestLiving ==="c") {
				alert("You have one too many drinks and can't make it home. Your significant other kicks you out and you lose your job. Tough luck");
			} 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	else if 
		(illegalLegitOrBoth === "B" || illegalLegitOrBoth ==="b" || illegalLegitOrBoth === "Make a crooked killing?") {
			alert("You make sooooooooo much money making 'Blue' but authority figures get suspcious. What do you do next?");
    }
    ///Gets caught. What now?
    		var make_a_crooked_killing = prompt ("A.)Go into Scarface Mode B.)Confess C.) Move To Cuba");
    		//Go Scarface Mode
    			if (make_a_crooked_killing === "A" || make_a_crooked_killing === "a" || make_a_crooked_killing === "Go into Scarface Mode")
    				prompt("As they close in your home and knock on your door, you go out like Scarface in a blaze of glory. You're dead thanks for playing");
    		//Confess it all
    			else if (make_a_crooked_killing === "b" || make_a_crooked_killing ==="B") {
    				alert("Thanks for your honesty but now you go to jail for your illegal activity. Thanks for playing");
    			}
    		//Off to Cuba
    			else if (make_a_crooked_killing === "c" || make_a_crooked_killing ==="C") {
    				alert("Cool!! Cuba have free healthcare!! You get taken care of but end of liking Cuba. What's next?");
    				// Chillin' in Cuba
    					var islandLife = prompt ("A.) Stay in Cuba  B.) Try and sneak back into America to be with Family  C.) Throw A Party");
    						//Stay in Cuba
    							if (islandLife === "A" || islandLife === "a") {
    								alert("Free healthcare, great food, great music. Oh and look America estbalished diplomatic ties. Call your family up for a visit.");
    								//Sneak in America
    							} else if (islandLife === "b" || islandLife === "B") {
    								alert ("You rent a boat from someone and try to make back into the US through Florida. Have you never heard of border patrol? Should've stayed in Cuba. They don't believe whatever story you're telling. You're a person with no country right now.");
    							}


    			

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	else if (illegalLegitOrBoth === "C" || illegalLegitOrBoth === "c" || illegalLegitOrBoth === "Do a little of both until you're holding onto 1 million dollars"){
    alert("You hesitantly choose to make 'Blue' while you're job as a school teacher. You have no idea where to start though. What do you do?");
	}
	//  Ride along, Fruit Stand or old student
		 var rideAlongiPhoneOrStand = prompt("A.)Ask your cop brother in law for a ride along of a meth bust and pick his brain about nuances. B.)Go to an Apple Store and think it over. C.) Ask a former student for help.");
		 //Ride along
		 	if (rideAlongiPhoneOrStand === "A" || rideAlongiPhoneOrStand === "a") {
		 		alert("On the ride along you get scared and opt to just get a second job. Thanks for playing.");
		 	}
		 //Apple Store
		 	else if (rideAlongiPhoneOrStand === "B" || rideAlongiPhoneOrStand === "b") {
		 		alert("You get tempted to buy things and spend all your money. Thanks for playing");
		 	} 
		 	//Connect with Old student
		 	else if (rideAlongiPhoneOrStand === "C" || rideAlongiPhoneOrStand =="c") {
		 		alert("You connect with an old student who shows you the ropes. Meeting this student takes you places you never thought you'd go");

		 	} 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	else {
		prompt("Do you really wanna play this game?");*/
	
//thit ends the story
function endOfStory () {
	return;
}

//this is an improper response
function badResponse () {
}
// not old enough
function notOldEnough () {
	alert("Let's not even start since you're not old enough");
		return;
}
	
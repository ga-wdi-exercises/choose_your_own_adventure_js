// This homework assignment is based off the cherished children's book, If You Give a Mouse a Cookie, by Laura Numeroff and illustrated by Felicia Bond. The mouse will be asking questions to the young boy (you) and the boy shall answer.

// Mouse asking for you name.
console.log("You meet a mouse infront of your house.");
var name = prompt("Mouse: Please tell me your name!");

// Mouse introducing himself and story begins.
console.log("The mouse says, \"Nice to meet you, " + name + ". I'm mouse!\"");
console.log("The mouse will be asking questions and you shall answer.");
console.log("If you give a mouse a cookie ...");

// Mouse asking for a cookie.
var askForCookie = prompt("Mouse: May I have a cookie, please?\n\n(y) Yes! You certainly may!\n(s) I'm sorry, I don't have any.\n(n) No, you may not.");

if (askForCookie === 'y') {
var askForFlavors = prompt("Mouse: What flavors do you have?\n\nYou offer the following flavors:\n(1) Chocolate Chip\n(2) Oatmeal Raison\n(3) Peanut Butter\n(4) Snicker Doodle\n(5) Sugar\n\nThe mouse is speechless with the amount of flavors. Please give him a cookie of your choice.");

	// Mouse saying thank you.
	var flavorOfCookie = askForFlavors;
	switch (flavorOfCookie) {
		case "2":
			console.log("Mouse says, \"Oatmeal raison is amazing!\"");
			break;
		case "3":
			console.log("Mouse says, \"Peanut butter is nutty!\"");
			break;
		case "4":
			console.log("Mouse says, \"Snicker doodle is best with fresh cinnamon!\"");
			break;
		case "5":
			console.log("Mouse says, \"Sugar cookie are simply delicious!\"");
			break;
		default:
			console.log("Mouse says, \"I love chocolate chip! It's my favorite!\"");
	}

	// Mouse asking for the quantity of cookies.
	while (isNaN(numCookies) || numCookies === 0) {
		var numCookies = parseInt(prompt("Mouse: How many cookies may I have?"));
	}

	if (numCookies >= 5) {
    	console.log("You reply with \"I don't have that many. You give him 1 cookie.\"");

    } else if (numCookies >= 2) {
    	console.log("You give the mouse " + numCookies + " cookies.");

    } else {
    	console.log("You give the mouse " + numCookies + " cookie.");
    }

    // Mouse asking for milk.
    console.log("He's going to ask for a glass of milk.");
	var askForMilk = prompt("Mouse: May I have a glass of milk?\n\n(y) Yes, of course.\n(s) I'm sorry, I don't have any.");

	if (askForMilk === 'y') {
		console.log("You give the mouse a glass of milk.");

		// Mouse asking for a straw.
	    console.log("When you give him the milk, he'll probably ask you for a straw.");
		var askForStraw = prompt("Mouse: May I have a straw?\n\n(y) Yes, of course.\n(s) I'm sorry, I don't have any.");
		
		if (askForStraw === 'y') {
			console.log("You give the mouse a straw.");

			// Mouse asking for a napkin.
			console.log("When he's finished, he'll ask for a napkin.");
			var askForNapkin = prompt("May I have a napkin?\n\n(y) Yes, of course.\n(s) I'm sorry, I don't have any.");
			
			if (askForNapkin === 'y') {
				console.log("You give the mouse a napkin.");

				// Mouse asking for scissors.
				console.log("Then he'll want to look in a mirror to make sure he doesn't have a milk mustache. He might notice his hair needs a trim. So he'll probably ask for a pair of nail scissors.");
				var askForScissors = prompt("May I use a pair of scissor?\n\n(y) Yes, of course.\n(s) I'm sorry, I don't have any.");
				
				if (askForScissors === 'y') {
					console.log("You give the mouse a pair of scissors. You ask him to be careful.");

					// Mouse asking for a broom.
					console.log("When he's finished giving himself a trim, he'll want a broom to sweep up.");
					var askForBroom = prompt("May I use a broom?\n\n(y) Yes, of course.\n(s) I'm sorry, I don't know where the broom is.");

					if (askForBroom === 'y') {
						console.log("You give the mouse a broom.");
					
					} else {
						console.log("The mouse suggest to play hide and seek. You accept!")
						// End of destination ().
					}

				} else if (askForScissors === 'n') {
					console.log("You reply, \"No, you may not. It's unsafe.\" The mouse understands.");
					// End of destination ()

				} else {
					console.log("The mouse says, \"Thank you!\"");
					// End of destination ().
				}

			} else {
				console.log("The mouse says, \"Thank you!\"");
				// End of destination ().
			}

		} else {
			console.log("Mouse climbs up the glass of milk and dives in. He is swimming in mill.");
			// End of destination ().
		}

	} else {
		console.log("The mouse says, \"Ah, that's alright!\" You enjoy your time with the mouse.");
		// End of destination ().
	}

} else if (askForCookie === 's') {
	console.log("The mouse is disappointed, but says a goodbye and departs.");
	// End of destination ().

} else if (askForCookie === 'n') {
	console.log("The mouse apologizes and starts tearing. He departs quickly without saying goodbye.");
	// End of destination ().

} else {
	console.log("You are surprised that you automatically answered a mouse. You faint.");
	// End of destination ().
}
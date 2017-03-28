var winner = prompt("Welcome to the chocolate factory.  Which golden ticket winner are you?  Enter 1, 2, 3, 4, or 5");
	if (winner == 1) {
		var candy = prompt("Hello Augustus Gloop.  The tour of the factory is about to begin, but you really want to get another candy bar from your bag on the other side of the room.  Do you go get the candy bar?  Enter Y or N.");
			if (candy == "Y") {
				var direction = prompt("You get your candy bar, but by the time you turn around, the tour has started without you.  It looks like you can go right or left.  Enter R or L.");
					if (direction == "R") {
						var taste = prompt("Back with the group!  It looks like you can eat everything in this room.  Do you try tasting the grass or the chocolate river?  Enter grass or river");
							if (taste == "grass") {
								alert("The grass tastes like pointy cotton candy.");
							} else if (taste == "river") {
								alert("You fall into the chocolate river, but you calmly climb out.");
							}

					} else if (direction == "L") {
						var dance = prompt("You apparently went the wrong way, and come across a group of Oompah Loompahs practicing their newest dance number.  They ask if you would like to participate.  Enter Y or N.");
							if (dance == "Y") {
								alert("Your dance moves astound them, and they invite you to permanently join their troupe.");
							} else if (dance == "N") {
								alert("You offend them and they escort you out of the building.")
							}
					}



			} else if (candy == "N") {
				var offer = prompt ("The tour begins.  Luckily you had a spare candy bar in your pocket.  As you snack, you notice Charlie eyeing your candy bar.  Do you offer him a piece?  Choose Y or N.");
					if (offer == "Y") {
						var taste2 = prompt("Charlie becomes your buddy and suggests that you try the edible trees or chocoloate river.  Which one do you try?  Enter trees or river.");
							if (taste2 == "trees") {
								alert("The bark tastes like dark chocolate and the leaves taste like white chocolate.");
							} else if(taste2 == "river") {
								alert("You clumsily fall into the chocolate river.  Charlie organizes a human chain and they help get you out.");
							}
					} else if (offer == "N") {
						var taste3 = prompt("And why should you?  Time to taste some edible rocks or the chocolate river.  Enter rocks or river.");
							if (taste3 == "rocks") {
								alert("The rocks takes alright but they chip your front tooth.");
							} else if(taste3 == "river") {
								alert("You fall into the chocolate river, and your body gets sucked up by a giant tube.");
							}

			} else {
				alert("Sorry didn't understand your answer.  Please enter Y or N.");
			}

}

	} else if (winner == 2) {
		var room = prompt("Hello Veruca Salt.  Would you like to wander around in the Edible Outdoorsy Space or move on to the Inventions Room?.  Enter outdoors or inventions.");
			if (room == "outdoors") {
				var taste4 = prompt("Do you take a sip from a ginormous flower or snack on railing?  Enter flower or railing.");
			}




















	} else if (winner == 3) {
		alert("Violet Beauregard.");
	} else if (winner == 4) {
		alert("Mike Teavee.");
	} else if (winner == 5) {
		alert("Charlie Bucket.");
	} else {
		alert("Sorry you're not on the list.  Make sure you enter the number 1, 2, 3, 4, or 5.");
	}

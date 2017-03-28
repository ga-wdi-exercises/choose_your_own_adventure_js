var winner = prompt("Which golden ticket winner are you?  Enter 1, 2, 3, 4, or 5");
	if (winner == 1) {
		var candy = prompt("Hello Augustus Gloop.  The tour of the factory is about to begin, but you really want to get another candy bar from your bag on the other side of the room.  Do you go get the candy bar?  Enter Y or N.");
			if (candy == "Y") {
				var direction = prompt("You get your candy bar, but by the time you turn around, the tour has started without you.  It looks like you can go right or left.  Enter R or L.");
					if (direction == "R") {
						alert("Back with the group!  It looks like you can eat everything in this room.  Do you try tasting the grass or the chocolate river?");
					} else if (direction == "L") {
						alert("You apparently went the wrong way, and come across a group of Oompah Loompahs practicing their song.");
					}
			} else if (candy == "N") {
				alert("The tour begins.  Luckily you had a spare candy bar in your pocket.  As you snack, you notice Charlie eyeing your candy bar.  Do you offer him a piece?  Choose 1 or 2.")
			} else {
				alert("Sorry didn't understand your answer.  Please enter Y or N.")
			}

	} else if (winner == 2) {
		alert("Veruca Salt.");
	} else if (winner == 3) {
		alert("Violet Beauregard.");
	} else if (winner == 4) {
		alert("Mike Teavee.");
	} else if (winner == 5) {
		alert("Charlie Bucket.");
	} else {
		alert("Sorry you're not on the list.  Make sure you enter the number 1, 2, 3, 4, or 5.");
	}

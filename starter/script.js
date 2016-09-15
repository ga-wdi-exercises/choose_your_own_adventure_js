// script.js

// Q1: Adventure Start
function startAdventure() {
	// Start
	var res = prompt("Are you ready to start your adventure? [y/n]");
	if ( res === 'y' || res === 'yes') {

		// Name
		var name = prompt("Great! Let's learn a little bit about you. What's your name?");

		// Gender
		var gender = prompt("Hi, " + name + "! It's nice you meet you. Are you a boy or a girl? [m/f]");
		if (gender === 'm' || gender === 'male') {
			gender = "son";
		} else if (gender === 'f' || gender === 'female') {
			gender = "daughter";
		} else {
			gender = "child";
		}

		// Dads Name
		var fathersName = prompt("Fantastic. What's your father's name?");

		// Lunch
		var lunchChoice1 = prompt("Awesome! One last question, " + name + ", " + gender + " of " + fathersName + ": what's the best place to eat lunch on the whole entire planet?");
		if (lunchChoice1 === "chipotle") {
			alert("Nailed it! Let's go there right now!");
			orderChipotle();
		} else {
			chooseLunchLoop();
		}

		// Loop, with breaking
		var attempt = 0; // No infinte loop
		function chooseLunchLoop(attempt) {
			if (attempt == 2) {
				alert("I think " + fathersName + " would be disappointed... It's Chipotle silly! Let's go!");
				orderChipotle();
			} else if (attempt == 1) {
				var lunchChoice3 = prompt("Third time's the charm. I'll even give you a hint: it rhymes with Shmipotle.");
				if (lunchChoice3 === "chipotle") {
					alert("Bingo!");
					orderChipotle();
				} else {
					chooseLunchLoop(2);
				}
			} else {
				var lunchChoice2 = prompt("Hmm.. That's not quite the answer we're looking for. Try again. Best lunch of all time:");
				if (lunchChoice2 === "chipotle") {
					alert("Now that's what I'm talking about! Let's go eat, I'm starving!")
					orderChipotle();
				} else {
					chooseLunchLoop(1);
				}
			}
		}

	} else if (res === 'n' || res === 'no') {

		// Alt Route Lunch
		var lunchInstead = prompt("Aw, I'm sorry to hear that. Want to go to Chipotle with me instead? [y/n]");
		if (lunchInstead === 'y') {
			alert("Superb!");
			orderChipotle();
		} else if (lunchInstead === 'n') {
			alert("Ah =, okay. You're missing out though!");
		} else {
			alert("Oops! Something went wrong.");
		}

	} else {
		alert("Oops! Something went wrong.");
	}
}

// Chipotle Adventure
function orderChipotle() {

	// TODO convert chipotle into JS object, boolean for ingredients

	// Entree
	var entree = prompt("Great we've survived the long line and it's finally time to order. Would you like a burrito, bowl, or salad?");

	// Rice
	var rice = prompt("White or brown rice? [w/b]");
	if (rice === "w" || rice === "white") {
		rice = "white";
	} else if (rice === "b" || rice === "brown") {
		rice = "brown";
	} else {
		rice = "no";
	}

	// Beans
	var beans = prompt("Black or pinto beans? [b/p]");
	if (beans === "b" || beans === "black") {
		beans = "black";
	} else if (beans === "p" || rice === "pinto") {
		beans = "pinto";
	} else {
		beans = "no";
	}

	// Protein
	var protein = prompt("Which type of meat would you like? [chicken/steak/carnitas/barbacoa/sofritas]");
	// TODO add half order options

	// Salsa
	var isSalsa = true;
	var salsa = prompt("Would you like mild, medium, or hot salsa? [mild/medium/hot]");
	if (salsa !== "mild" || salsa !== "medium" || salsa !== "hot") {
		isSalsa = false;
	}

	// Sour Cream & Cheese
	var isDairy = true;
	var dairy = prompt("Would you like sour cream or cheese? [sc/cheese/both/none]");
	if (dairy === "sc") {
		dairy = "sour cream";
	} else if (dairy === "both") {
		dairy = "sour cream, cheese";
	} else {
		isDairy = false;
	}

	// Guac
	var guac = prompt("How many scoops of guac would you like?");

	// Lettuce
	var isLettuce = true;
	var lettuce = prompt("Lettuce? [y/n]");
	if (lettuce === "y" || lettuce === "yes") {
		lettuce = "lettuce";
	} else {
		isLettuce = false;
	}

	var finalOrder =  protein + " " + entree + " with " + rice + " rice, " + beans + " beans, ";
	if (isSalsa) {
		finalOrder += salsa + " salsa, ";
	}
	if (isDairy) {
		finalOrder += dairy + ", ";
	}
	if (isLettuce) {
		finalOrder += lettuce + ", ";
	}
	finalOrder += "and " + guac + " scoops of guac";

	alert("Congratulations! You've ordered a " + finalOrder + "... on the house!");
}

//Introduce the game from console

console.log("You are now Ash Catchem in the 21st Century in D.C. There are a number of political monsters out there. Your mission if you choose to accept it is to catch and tame as many politicians as you can. This is POLITICAL POKEMON!!!");

//Set a counter variable to 0.

var win = 0;

//Place entire program in a loop to run until the user selects the correct path and wins the game.
//When they do win, I will change the variable win to 1 so that the progarm will stop running.

while (win === 0) {

//Initiate the program by calling the function home base
//This is where all users will start the story	

home_base(); 	

//This function sets a variable to a string value that is entered by the user
//A conditional is used to decide which path the user will go on based on the response
//The conditional calls different functions based on the users response
//Finally, if the user does not enter a valid character, they will be prompted to enter a value again

function home_base(){

var home_base_option = prompt("Where would you like to look first?: The White House (w), The Lincoln Memorial (l), or the Washington Monument (wm)");	

if (home_base_option === "w") {
	whiteHouse();
}
else if (home_base_option === "l") {
	lincolnMemorial();
}
else if (home_base_option === "wm") {
	washingtonMonument();
}
else {
	console.log("invalid input: Please try again"); 
	home_base(); 
}
}

//This function operates in the same was as home_base

function whiteHouse() {
	console.log("You have arrived at the White House. While walking around the South lawn, you see a wild Joe Biden lurking in the First Lady's garden");
	var white_house_option = prompt("Would you like to try to capture Joe Biden using a Pokeball (p), attack (a), or look over at the Washington Monument (wm)?");
	if (white_house_option === "p") {
		console.log("Oh no! The wild Joe Biden got away! Better luck next time. You don't want to be done for the day so you head over to the Lincoln Memorial");
		lincolnMemorial(); 
	} else if (white_house_option === "a") {
		console.log("Joe Biden laughs at your weakness, strikes back, and you experience very real pain for the first time in life. You lick your wounds and go home. . .");
	} else if (white_house_option === "wm") {
		console.log("Good choice. Joe can be a feirce opponent. Let's go see what happening over at the Washington Monument!");
		washingtonMonument();
	} else {
		console.log("invalid input: Please try again");
		whiteHouse();
	}

	}

//washington_monument option recieves a number given as a string by the user that is less than or equal to 555
//parseInt is used to take the number the user gave as input, and turn it into an integer
//This integer is used in the operation to determine the path of the user

function washingtonMonument() {
	console.log("You have arrived at the Washington Monument. You here a loud noise coming from inside. Your curiosity gets the best of you and you venture inside.");
	var washington_monument_option = prompt("The Washington Monument is 555 feet high. How high would you like to look? (Enter number less than or equal to 555)");
	if (parseInt(washington_monument_option) <= 185) {
		console.log("Hmmm, there's nothing here. . . just some school children all wearing the same color of shirt. You're confused but decide to go home and try again");
	} else if (parseInt(washington_monument_option) <= 370) {
		console.log("You hear some eerie noises coming from above. You're curious but ultimately more spooked than curious, so you decide to pack it in and call it a day. Try again tomorrow!");
	} else if (parseInt(washington_monument_option) <= 555) {
		console.log("You discover the ghost of George Washington himself floating at the top of the Monument! The rarest politician of them all. You don't waste any time and quickly use a master ball. Geoge Washington's ghost is yours. This is definitely a win and probably means that you won the game. Return home after a good days work. . .");
		win = 1;
	} else {
		console.log("invalid input: Please try again");
		washingtonMonument();
	}

	}

//Operates the same as the functions above that just receive a string character and not a number	

function lincolnMemorial() {
	console.log("You have arrived at the Lincoln Memorial. You see Johen Boehner laying out by the reflecting pool.");
	var lincoln_memorial_option = prompt("Do you try to sneak up on him (s), walk away quitely(w), or try to capture hime(c)")
	if (lincoln_memorial_option === "s") {
		console.log("You are successful at getting close but before you can attack, you are blinded by the rays reflecting off his already oily orange skin. You will be blind for the remainder of the day. . .");
	} else if (lincoln_memorial_option === "w") {
		console.log("Good choice to walk away. . . Not that great of a catch. Let's try something we haven't done yet.");
	} else if (lincoln_memorial_option === "c") {
		console.log("You're attempt to capure him was foolish and devastatingly unsuccessful. He awoke enraged and chased you all the way to the Washington Monument!");
		washingtonMonument();
	} else {
		console.log("invalid input: Please try again");
		lincolnMemorial();
	}
}
}	




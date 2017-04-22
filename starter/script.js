/* 
Rules

Any path the user goes down must ask them at least three questions.
There must be a minimum of seven total destinations the user could arrive at based on their responses.
For at least one of the questions asked, there must be more than two possible user responses.
Your code must contain at least one loop.
Your code must contain at least one switch statement
Your code must make use of both string and number user inputs.*/


var userName = prompt("Well hello there. You look like the adventurous type. Why don't you tell me your name and we can get started.");


/*function whichPlace(){*/
var beginning = prompt("Nice to meet you " + userName + ". This adventure starts at the carnival. Do you want to go to the Mirror House or Murder House" ).toLowerCase();
/*return beginning.toLowerCase();
}

var result;
var beginning = whichPlace();*/

switch (beginning) {

	case "murder house":
		var murderOne = prompt("We've entered the foyer. Do you want to go to the basement or the attic?").toLowerCase();

		if (murderOne == "attic") {
			alert("Upon entering the attic you notice what appears to be a young, dark haired girl standing in the corner.")
			
			var atticOne = prompt("Do you want to walk up and speak with the girl? Yes or No?").toLowerCase();
			}

			if (atticOne == "yes") {
				alert("The 'little girl' is a possessed psycopath that suddently claws yours throat out. Sorry. You have died.")
				break;}

			else if  (atticOne == "no") {
				alert("The little girl rushes towards you screaming! She throws you down the stairs and you break your neck. Sorry. You have died.");
				break;}

		else if (murderOne == "basement") {
			alert("You found the murderer. Hence, you've been murdered. Sorry. Thanks for playing");
			break;
		}

		else {
			alert("You have not made a valid selection.");
			break;
		}


	case "mirror house":

		var mirrorOne = prompt("Good choice " + userName + ". We've entered into the mirror house. Every direction appears to look the same. Do you want to go left or right?");

		while (mirrorOne !== "left") {
			confirm("Going right will lead to certain death. You should go left");
			var mirrorOne = prompt("Good choice " + userName + ". We've entered into the mirror house. Every direction appears to look the same. Do you want to go left or right?");
			// break;

		}

		if (mirrorOne == "left") {
			var mirrorTwo = prompt("You've made it a few steps before smashing your face on a pane of glass. Choose again. left or right?");


			while (mirrorTwo !== "left") {
				
				confirm("Right hand turns are against the ethics and morals of this carnival. Maybe try left");
				var mirrorTwo = prompt("You've made it a few steps before smashing your face on a pane of glass. Choose again. left or right?");
			}

			if (mirrorTwo == "left") {
				var mirrorThree = prompt("You find yourself staring directly at your own reflection. Left or right?");

				while (mirrorThree !== "left") {
					confirm("You DO know what they say about people that want to go right. Don't you? May we suggest left instead?");
					var mirrorThree = prompt("You find yourself staring directly at your own reflection. Left or right?");
				}

				if (mirrorThree == "left") {
					var finalQuestion = prompt("Congratulations!! You've found your way out of the mirror house. Perhaps with a little help. So, last question. How many turns did you make?");

					if (finalQuestion !== "3") {
						confirm("Sorry. You lose. Thanks for playing");
					}

					else {
						confirm("Congratulations!!! You found the only happy ending in the entire game. Therefore you are the winner! HOORAAY!!");
					}
				}
			}
		}
	break;
}



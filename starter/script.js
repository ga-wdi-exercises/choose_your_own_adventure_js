//This is the pseudocode to help me build out the Choose Your Own Adventure JS HW assignment.

//RULES to be mindfull of:

//**Any path the user goes down must ask them at least three questions.
//**There must be a minimum of seven total destinations the user could arrive at based on their responses.
//**For at least one of the questions asked, there must be more than two possible user responses.
//**Your code must contain at least one loop.
//**Your code must make use of both string and number user inputs. > Hint: You may need parseInt() and toString().

//Parameters/Universe:

//The adventure will take place on Dune.  The mission objectives are to help House Harkonnen or House Atreides defeat the latest Bene Gesserit plot to dethrone the Emperor and gain control of the Spice trade.

//Introduce player to game, get their name and say "Hello...".
	
	alert("Welcome to the planet Dune, adventurer!  You have just arrived after embarking on your first space-fold.  \n\nThe year is 10125 A.G. (21200 A.D.).\n");

	function getName() {
		var nombre = prompt("What is your name?");
		alert("Hello, " + nombre + ". Your adventure begins now.");
	} 
	getName();

//Player must choose which house s/he will pay tribute to: Harkonnen or Atreides.

	function House() {
		var casa = prompt("Which do you prefer?  Fresh apples or apple pie? (Type 'A' or 'P')");
		
	//APPLES v PIE v WORLD DOMINATION

		//Apples...
		if (casa === "A") {
			alert("You must pay tribute to House Harkonnen, adventurer.  They are rotten to the core.");
			chooseTransportA();
				function chooseTransportA() {
					var transport = prompt("Your mission is to uncover the Bene Gesserit plot.  \n\nWhat method of transportation will you use: groundcar or guild ship? (Type 'G' or 'H')");
					//Grounded
					if (transport === "G") {
						alert("This was a most dangerous choice, adventurer.  \n\nHouse Atreides has taken control of your caravan and imprisoned you in their dungeons.  \n\nDo not be discouraged.  You will have many years to plan your escape.\n");
					}
					//Gone
					else if (transport === "H") {
						alert("Plotting an escape so soon?  Your limited knowledge of space-folding technology sends you to an undesireable sector of the galaxy.  \n\nUnfortunately, having deserted your mission, you have insufficient credits to purchase a return trip home.  \n\nEnjoy the length of your indentured servitude.\n");
				}
				//Wrong entry
					else {
						chooseTransportA();
					} 
			}
		}
		//Pie
		else if (casa === "P") {
			alert("Victory is sweet, adventurer. You must pay tribute to House Atreides.");
			chooseTransportP();
				function chooseTransportP() {
					var transport = prompt("Your mission is to uncover the Bene Gesserit plot.  \n\nWhat method of transporation will you use: flyer or sandworm? (Type 'F' or 'S')");
					//Fly away
					if (transport === "F") {
						alert("Good choice.  The Bene Gesserit did not consider a security breach by air.  \n\nYou have arrived safely and proceed to the outer chambers, where you overhear their intriguing plot...  \n\nSo intriguing, in fact, you decide to offer your services.  \n\nBest of luck.\n");
					}
					//Wormy
					else if (transport === "S") {
						alert("Did you really believe you could be the Kwisatz Hadarach?  \n\nYour lack of worm-skill is frowned upon by the Fremen, and you are taken to a military outpost for formal training.  \n\nTry again next standard-year.\n");
					}
					//Wrong entry
					else {
						chooseTransportP();
					}
				}
			}
		} 
		//World domination...
		//else {
			//alert("Oh, you are a wily one.  You must seek to control the Spice for your own gain.");
	House();

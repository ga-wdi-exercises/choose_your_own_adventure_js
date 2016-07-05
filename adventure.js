confirm("Welcome to the land of Grahnada! Please proceed with caution. Are you ready to play?");

var scene = new Object();
var choice = new String;
var choiceNumber = new Number;

scene.path = function()
{
	alert("You are on a path in the woods and you have reached a fork in the road...");
	choice = prompt("LEFT or RIGHT on path?");
	choice = choice.toUpperCase();

	if (choice == "LEFT") 
	{
		scene.cave();		
	}
	else if (choice == "RIGHT")
	{
		scene.cliff();
	}
	else
	{
	    scene.path();
	}
}


scene.cave = function()
{
	alert("You see an Ogre in a cave eating fried chicken.");
	choice = prompt("STEAL chicken, SCREAM and run, BEFRIEND ogre?");
	choice = choice.toUpperCase();

	if (choice == "STEAL")
	{
		scene.brokenHand();
	}
	else if (choice == "SCREAM")
	{
		scene.startledOgre();
	}
	else (choice == "BEFRIEND")
	{
		scene.friends();
	}
}

scene.cliff = function()
{

	alert("You walk a mile and see a cliff. The cliff is steep but there is gold at the bottom.");
	choice = prompt("CLIMB down or TURN around?");
	choice = choice.toUpperCase();

	if (choice == "CLIMB")
	{
		alert("You slip and fall to a bloody death!");
		scene.reset();
	}
	else if (choice == "TURN")
	{
		alert("You turn around and take the other path at the fork.");
		scene.cave();
	}
	else 
	{
		scene.cliff();
	}
}

scene.brokenHand = function()
{
	alert("The ogre is angry and crushes your hand...");
	choice = prompt("You try to KILL the ogre, or you APOLOGIZE.");
	choice = choice.toUpperCase();
	if (choice == "KILL")
	{
		scene.death();
	}
	else if (choice == "APOLOGIZE")
	{
		scene.neverFriends();
	}
	else 
	{
		scene.brokenHand();
	}
}

scene.startledOgre = function()
{
	alert("You have startled the ogre and he bursts into tears...");
	choice = prompt("COMFORT the ogre, STEAL the chicken, or PUSH ogre aside to investigate the caves.");
	choice = choice.toUpperCase();
	if (choice == "COMFORT")
	{
		scene.friends();
	}
	else if (choice == "STEAL")
	{
		scene.brokenHand();
	}
	else (choice == "PUSH")
	{
		scene.death();
	}
	
	// {
	// 	scene.run();
	// }
}

scene.friends = function()
{
	alert("You and the ogre are now best friends. He wants to show you his cave...");
	choice = prompt("TOUR caves or say GOODBYE.");
	choice = choice.toUpperCase();
	if (choice == "TOUR")
	{
		scene.riddle();
	}
	else if (choice == "GOODBYE")
	{
		scene.outsideCave();
	}
	else 
		scene.friends();
}


scene.riddle = function()
{
	alert("The ogre is pleased! He leads you deep into his caves...");
	alert("The ogre shows you his bedroom at the bottom of the cave. he has a super awesome lava lamp that he would like to give you as a gift. But first he would like you to guess his age.");
	choiceNumber = prompt("Put a number in for his age.");
 	if (choiceNumber < 200)
	{
		alert("You have flattered the ogre! He gives you his lava lamp and you win the game!");
		alert("Congratulations!");
	}
	else if (choiceNumber >= 200)
	{
		alert("The ogre is very distraught that he looks so old. He does not give you the lava lamp gift and he does not show you the way out.");
		alert("You get lost in the caves and die.");
		scene.reset();
	}
	else
	{
		scene.riddle();
	}
}

scene.neverFriends = function()
{
	alert("The ogre won't kill you because you apologized, but he won't ever be friends with you, so the game's over.");
	alert("Bye.");
	scene.reset();
}


scene.outsideCave = function()
{
	alert("Well, since this was really about the cool ogre and not your adventure, the game is over. But, you didn't die... so congrats.")
	alert("Goodbye.")
	scene.reset();
}


scene.death = function()
{
	alert("Oops... the Ogre got mad and killed you.");
	scene.reset();
}

scene.reset = function()
{
	alert("Press OK to play again.");
	scene.path();
}

scene.path();
 
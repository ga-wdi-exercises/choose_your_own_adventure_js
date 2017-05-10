
var person = {
	name : null,
	bag : null
};
var bags = {
	none : ["water bottle","knife"],
	small :["water bottle","knife","map","Cliff Bars","compass"],
	medium :["water bottle","knife","map","Cliff Bars","paracord","Socks","Life-Straw","compass"],
	large :["water bottle","knife","map","Cliff Bars","paracord","Socks","Life-Straw","rain gear","compass","light blanket","tent"]
};
var theWall = ["Fred 1903","P & T forever!","a Dude was here","Great Scott 1894","Jerry 2006"];
var stringy;
var start = prompt("Welcome to Unfortunate Trail, whatt is your name?", "John Doe");

person.name = start;
var startGame = prompt("It looks like a great day for a hike! \n To bad your favorite trail is closed(bummer)...\n You decide it is too nice of a day to waste and choose a trail you've never done before \n Which backpack do you bring \n None : just bringing whats in your pockets and a water bottle \n Small : a draw string or sling pack \n Medium : standard school size back back \n Large : bring all the gear! even if its 20lbs!");
var bagSelect = startGame.toLowerCase();
console.log(bagSelect);
switch(bagSelect){
	case "none":
		person.bag = bags.none;
		console.log(person.bag);
		confirm("Risky Choice... lets see how it plays out");
	break;
	case "small":
		person.bag = bags.small;
		console.log(person.bag);
		confirm("a 'High Speed' choice, lets see how it plays out");
	break;
	case "medium":
		person.bag = bags.medium;
		console.log(person.bag);
		confirm("standard choice for a standard person?");
	break;
	case "large":
		person.bag = bags.large;
		console.log(person.bag);
		confirm("Heavy bag, hope it doesnt slow you down too much");
	break;
	default:
		alert("Error!");
	break;
}
var fall = prompt("The day is sunny with a slight breeze, Beautiful! \n Half a day of hiking up hill and climbing the mountain you come across a narrow trial \n It is a very steep drop off the one side so you walk slowly... \n the rocks give way and before you can react you are falling and tumbling down hill \n you awake at the bottom... you are on a tiny game trail, feeling very sore, and quite beat up. \n What is your next step? \n Type 'check' to check your bag and pockets to see what you have \n Type 'walk' To start moving");
var fallChoice = fall.toLowerCase();
if(fallChoice === "check"){
	confirm("The smarter move, lets see what you got... \n you have...");
	if(bagSelect==="none"){
		person.bag = "knife";
		confirm("you have "+person.bag+"\n looks like you lost the bottle during the fall...");
		var climbWalk = prompt("It looks like you have 2 choices... \n Attempt to climb the cliff you somehow survived falling off to reach the trail... \n Or Walk down hill and hope to find a stream or a trail... \n type 'climb' or 'walk' to make a choice");
		
		if(climbWalk==="climb"){
			confirm("You Attempt to climb the cliff. It has been dry so your foot holds are strong. \n you can feel the breeze on your back reminding you of how high you really are. \n Those rock climbing classes are paying off as you ascend higher \n *crumbles* not a good sound... The rock face gives way... \n this fall you are not so lucky... \n RIP ");
		}else if(climbWalk==="walk"){
			confirm("you decide to walk down hill. \n Water flows down hill. \n Water means life and trails.\n life and Trials mean People \n ...4 Days pass...\n 4 days of eating bugs and drinking water out of the stream you find a trail. To your amazement you see People! \n You survived! Congratulations!");
		}

	} else {
		var iiii = prompt("Let take inventory...\n "+person.bag+"\nAlright! we have some stuff to work with \n After studying the map you see 2 possible options... option 1 - walk down hill and fallow the stream to link up to the longest trail in the park \n option 2 - walk in the general direction of the park entrance \n type 'option1' or 'option2'");
		if (iiii === "option1") {
			confirm("You start your journey down hill, There is not a clear trail\n you have to snake your way down walking around, under, and through thick under brush\n the under growth begins to clear...");
			confirm("Some well traveled game trails become visiable. \n Its is a good break form the brush\n ...*click* *SLAM!!* \n you stepped in a bear trap... it hurts so bad.\n You end up dying from blood loss\nRIP");
		}else{
			var yN = prompt("You start walking with the cliff to your side. \n The mountain side provides some shade and after a few hour of walking you come across a cliff face with names ingraved. Do you want to add to the boulder?(y/n)");
			yN = yN.toLowerCase()
			if (yN ==="y") {
				namesOnWall(theWall);
				var userYear = prompt("looks like a lot of cool peoeple have been here..."+theWall+" Time to add your name to the list... \n type in a year...");
				userYear = userYear.toString();
				theWall.push(person.name +" "+ userYear)
				confirm(theWall+" Look at that, lost travelers will see you name for cenutries! \n lets keep walking");
				confirm("After hours of walking you made it to the ranger station before night fall! Congratulations you survived!!");
			}else{
				namesOnWall(theWall);
				confirm("Well /n"+theWall+" \n have all been here before...But you dont care about that");
				confirm("After hours of walking you made it to the ranger station before night fall! Congratulations you survived!!");
			}
		}
	}
}else{
	var trailOrStream = prompt("You decide to get moving ASAP \n 'movement is life' \n as you get up and dust your self off you noctice 2 possible directions to head \n choice1 = fallow the game trail \n choice2 = walk down hill \n (type choice1 or choice2)");
	
	if(trailOrStream==="choice1"){
		var fightOrRun = prompt("You decide to fallow the game trail. It makes for easy walking compared to walkingdown hill through the brush. \n After what feel like a few hours you notice the sound of soft foot falls behind you... \n you turn around to see a Mountan Lion staring into your soul! \n its eyes are locked on you... What do you do? \n fight - make your self seem big, scream and yell at it to try and intimidate it \n run - run away from the threat, if you zig zag you might esacpe (fight/run?)");

		if (fightOrRun === "fight") {
			confirm("You yell and scream at it stares back...\n you contintue to scream at it. the it starts to back away. slowly it turn tail to run\n you fall to the ground dead tied and out of breath. That when you hear the voices... People!! a Park Ranger heard your screaming and came to help\n Congratulations you survived!!");
		}else{
			confirm("you turn tail and run...\n the mountain lion is much faster than you are... \n RIP \n eaten by Mountain Lion");
		}
	}else{
		var playDead = prompt("You walk down hill and find a good sized stream. You start fallowing it.\n After and hour or two you hear and unusual noise...\nYou turn around to see a bear behind you! \ndo you play dead?(y/n)");
		if(playDead === "y"){
			confirm("You drop to the ground and hold as still as possible. The bear investigates, it trys to move you but you lay very still...\n *gun shot* echos through the vally\n You forgot it was bear season\n Congratulations you have been saved by hunters!!");
		}else{
			confirm("you run away from the bear. \n You can hear it chasing you... gaining ground...\n RIP\n eaten by a Bear")
		}
	}
}


function namesOnWall(arry) {
	for (var i = 0; i < arry.length; i++) {
		
		arry[i] = arry[i]+"\n";

	}
}

	







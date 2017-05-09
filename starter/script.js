
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
		var iiii = prompt("Let take inventory...\n "+person.bag+"Alright! we have some stuff to work with \n After studying the map you see 2 possible options... option 1 - walk down hill and fallow the stream to link up to the longest trail in the park \n option 2 - walk in the general direction of the park entrance \n type 'option1' or 'option2'");
		if (iiii === "option1") {
			//downhill
			//bear trap
			//RIP
			prompt("");
		}else{
			//towards gate
			//rock wal engravins
			//loop through names dates add to collection
		}
	}
}else{
	//fall choice walking
	//game trail or Downhill
	prompt("");
	if(){
		//gameTrial = mt.lion
		// fight or run
		if () {
			//fight = survive
		}else{
			//run = RIP
		}
	}else{
		//downhill to stream = bear
		if(){
			//play dead = survive
		}else{
			//run away = RIP
		}
	}
}




	







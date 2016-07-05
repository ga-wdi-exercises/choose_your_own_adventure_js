var character = {
	name: null,
	inventory: [],
	attack: 5,
	health: 15
}

var loot = [
	{ trash: "A very underwhelming banana peel" },
	{ potion: "heals 5 hit points" },
	{ grindstone: "increase your total attack by 1" }
]

var OGMONS = [
	{
		ghost: { attack: 4, health: 4 }
	},
	{
		zombie: { attack: 3, health: 11 }
	},
	{
		tiger: { attack: 5, health: 6 }
	}
]

var dragon = {
	dragon: { attack: 8, health: 18 }
}

alert("Welcome to Final Vantasy! ฅ(ٛ•௰• ٛ )");
character.name = prompt("Enter your character's name below: ");
alert("Hello, " + character.name + ". Nice to meet you! ( ˃̶ω˂̶ ૃ)");
alert("Your goal is to survive and defeat the dragon.")
alert("Let us begin our journey. \nhint: If you run the dragon will likely come for you");
actions();

function actions() {
	var command = prompt("type the following actions to proceed: \nwalk \nrun \nmenu");
	switch (command) {
		case "walk":
			walk();
		break;
		case "run":
			run();
		break;
		case "menu":
			menu();
			actions();
		break;
		default: 
			actions();
		break;
	}
}

function walk() {
	var rng = Math.random();
		if (rng < 0.1111) {
			boss();
		}
		else {
			fight();
		}
}

function run() {
	var rng = Math.random();
		if (rng > 0.2222) {
			boss();
		}
		else {
			fight();
		}
}

function menu() {
	var command = prompt("Your inventory contains: " + character.inventory.toString() + " \nPerform an action: \nuse \nexit" );
	if (command === "use") {
		var item = prompt("Your inventory contains: " + character.inventory.toString() + " \nWhich item do you want to use? \nType nothing to leave this option");
		if (item === "trash") {
			alert("A very underwhelming banana peel, doesn't seem to be helpful at all.");
		}
		else if (item === "potion") {
			alert("Regain 5 health!");
			character.health += 5;
		}
		else if (item === "grindstone") {
			alert("Your attack was raised by 1!");
			character.attack += 1;
		}
		else {
			menu();
		}
	}

}

function boss() {
	
}

function fight() {
	var monsters = JSON.parse(JSON.stringify(OGMONS));
	var rng = Math.random();
	var stats;
		if (rng < 0.3333) {
			rng = monsters[0];
			stats = monsters[0].ghost;
		}
		else if (rng > 0.3333 && rng < 0.6666) {
			rng = monsters[1];
			stats = monsters[1].zombie;
		}
		else {
			rng = monsters[2];
			stats = monsters[2].tiger;
		}
	alert("You have encountered a " + Object.keys(rng) + "!! (۶ૈ ᵒ̌ Дᵒ̌)۶");
	while (stats.health > 0) {
		if (character.health < 1) {
			alert("=================\n====GAME OVER====\n=================");
			break;
		}
		var command = prompt("Perform an action: \nattack \nescape \nmenu");
		if (command === "attack") {
			if(Math.floor((Math.random() * 5) + 1) >= 2) {
				alert("The " + Object.keys(rng) + " lunges at you dealing " + stats.attack + " damage o(╥﹏╥)o");
				character.health -= stats.attack;
			}
			else {
				alert("The " + Object.keys(rng) + " lunges at you and missed!  /(˚▽˚’!)/");
			}
			if (character.health < 1) {
				alert("=================\n====GAME OVER====\n=================");
				throw new Error("GG");
			}
			if(Math.floor((Math.random() * 5) + 1) >= 2) {
				alert("You strike the " + Object.keys(rng) + ", dealing " + character.attack + " damage (۶ૈ ᵒ̌ Дᵒ̌)۶");
				stats.health -= character.attack;
			}
			else {
				alert("You swung and miss the " + Object.keys(rng) + " ლ(ٱ٥ٱლ)");
			}
		}
		if (command === "escape") {
			if (Math.floor((Math.random() * 2) + 1) == 2) {
				alert("Escape successful! You managed to get away. \n- =͟͟͞͞ =͟͟͞͞ ﾍ( ´Д`)ﾉ")
				actions();
			}
			else {
				alert("Escape failed! You are trapped!")
				if(Math.floor((Math.random() * 5) + 1) >= 2) {
				alert("The " + Object.keys(rng) + " lunges at you dealing " + stats.attack + " damage o(╥﹏╥)o");
				character.health -= stats.attack;
			}
			else {
				alert("The " + Object.keys(rng) + " lunges at you and missed!  /(˚▽˚’!)/");
			}
			if (character.health < 1) {
				alert("=================\n====GAME OVER====\n=================");
				throw new Error("GG");
			}
			}
		}
		if (command === "menu") {
			menu();
		}
	}
	var next = prompt("You have slain the " + Object.keys(rng) + "!! ( ˃̶ω˂̶ ૃ) \nChoose an action: \nloot \ncontinue");
	if (next == "loot") {
		var item = loot[Math.floor((Math.random() * 3))];
		var name = Object.keys(item);
		alert("You have found " + name + "!!");
		character.inventory += name;
		actions();
	}
	else {
		actions();
	}
}














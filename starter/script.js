// put code here!
var starter;


var name=prompt("Hello, and welcome to the world of Pokemon, what is your name?");



var choosePokemon = function(){
	 starter=prompt("Hi " + name + ". Please choose one of the following starter pokemon: Bulbasaur, Charmander, Squirtle").toLowerCase();
	 firstPokemon();
};

var firstPokemon=function(){
switch(starter) {
	case "bulbasaur":
		var bulbasaur=prompt("Bulbasaur is a grass type pokemon, are you sure you want Bulbasaur? Yes or No.").toLowerCase();

		if (bulbasaur==="yes"){
			alert("Congratulations on choosing your first Pokemon!");
		} else {
			choosePokemon();
		}
		break;
	case "charmander":
		var charmander=prompt("Charmander is a fire type pokemon, are you sure you want Charmander? Yes or No.").toLowerCase();

		if (charmander==="yes"){
			alert("Congratulations on choosing your first Pokemon!");
		} else {
			choosePokemon();
		}
		break;
	case "squirtle":
		var squirtle=prompt("Squirtle is a water type pokemon, are you sure you want Squirtle? Yes or No.").toLowerCase();

		if (squirtle==="yes"){
			alert("Congratulations on choosing your first Pokemon!");
		} else {
			choosePokemon();
		}
		break;

	default:
		alert("That is not Bulbasaur, Squirtle or Charmander.");
		choosePokemon();
}
forest();
};


var forest=function(){
	alert("You and " + starter + " will now travel into the forest, good luck!");

	var pikachu=prompt("Oh no! A wild Pikachu has appeared! Will you 'fight' or 'run'?").toLowerCase();

	switch(pikachu){
		case "run":
			alert("You try to run away but Pikachu electrocutes  your " + starter + " and it faints. Game over.");
			break;
		case "fight":
			alert("It will take five damage points to defeat Pikachu, but if Pikachu does five damage to your " + starter + " first, you will lose the game.");
			var starterDamage=0;
			var pikachuDamage=0;
			var starterAttack;
			var pikachuAttack;
			
			while(starterDamage < 5 && pikachuDamage< 5){
			    starterAttack = Math.floor(Math.random()*5);
			    pikachuAttack = Math.floor(Math.random()*5);
			    if (starterAttack > 0){
			        alert (starter + " used scratch and did " + starterAttack + " damage to Pikachu.");
			        pikachuDamage += starterAttack;
			        if(pikachuDamage >=5){
			            break;
			        }
			    } else {
			        alert(starter + " used scratch and missed Pikachu");
			    }
			    
			    if (pikachuAttack > 0){
			        alert ("pikachu used electric shock and did " + pikachuAttack + " damage to " + starter);
				    starterDamage += pikachuAttack;
			    } else {
			        alert("Pikachu used electric shock and missed.");
			    }
			}
			
			if (starterDamage < pikachuDamage){
			    alert ("You Win!");
			    town();
			} else {
			    alert ("You Lose, Game Over!");
			}
			break;


		default:
		alert("That's not a valid choice.");
		forest();
	}
};

var town = function(){
	alert("Congratulations on winning your first Pokemon battle! You've arrived at the shop in the next town. You should buy some Pokemon balls so that you can capture some Pokemon.");
	balls();
};

var pokeball;
var captureAttempt;

var balls=function(){
		pokeball=prompt("How many Pokemon balls would you like to buy?");

		if (pokeball>0){
			alert("You're ready to go capture some Pokemon!");
			capture();
			return pokeball;
		} else {
			alert("You should buy some Pokemon balls.");
			town();
		}
	}; // close balls function

var capture=function(){
	var location=prompt("Do you want to go catch Pokemon in the beach, cave, or forest?").toLowerCase();
	switch(location){
		case "cave":
			alert("You've entered the cave and a wild Zubat has appeared! Use the Pokemon balls you just bought to catch it! You can continue to try catching Zubat as long as you still have Pokemon balls left.");
			alert("You currently have " + pokeball + " pokemon balls.");
			while(pokeball>0){
				alert("You've thrown a Pokemon ball!");
				captureAttempt=Math.floor(Math.random()*5);
				if (captureAttempt==4){
					alert("Congratulations you captured Zubat!");
					break;
				} else {
					alert("Zubat escaped from the Pokeball");
					pokeball -= 1;
					alert("You currently have " + pokeball + " left.");
				}

			}
			break;
		case "beach":
			alert("You've gone to the beach and a wild Krabby has appeared! Use the Pokemon balls you just bought to catch it! You can continue to try catching Krabby as long as you still have Pokemon balls left.");
			alert("You currently have " + pokeball + " pokemon balls.");
			while(pokeball>0){
				alert("You've thrown a Pokemon ball!");
				captureAttempt=Math.floor(Math.random()*5);
				if (captureAttempt==4){
					alert("Congratulations you captured Krabby!");
					break;
				} else {
					alert("Krabby escaped from the Pokeball");
					pokeball -= 1;
					alert("You currently have " + pokeball + " left.");
				}

			}
			break;
		case "forest":
			alert("You've gone to the forest and a wild Caterpie has appeared! Use the Pokemon balls you just bought to catch it! You can continue to try catching Caterpie as long as you still have Pokemon balls left.");
			alert("You currently have " + pokeball + " pokemon balls.");
			while(pokeball>0){
				alert("You've thrown a Pokemon ball!");
				captureAttempt=Math.floor(Math.random()*5);
				if (captureAttempt==4){
					alert("Congratulations you captured Caterpie!");
					break;
				} else {
					alert("Caterpiet escaped from the Pokeball");
					pokeball -= 1;
					alert("You currently have " + pokeball + " left.");
				}

			}
			break;
		
	
        default: alert("That is not a location you can go to. Please choose another location.");
			capture();

}
end();
};

var end=function(){
    alert("You've learned how to fight and capture Pokemon like a pro! You're on your way to becoming the best Pokemon trainer ever! The end.");
}




choosePokemon();



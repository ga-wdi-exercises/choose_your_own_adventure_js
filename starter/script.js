// Jem and the Holograms - Battle of the Bands

// Enter your name.
var name = prompt('Enter your name:');

// Hello [players name], Starlight Studios is up for grabs. Pick between Jem and the Holograms or the Misfits.
var band = prompt("Welcome " +name+ ". Starlight Studios is up for grabs! And, there's an upcoming Battle of the Bands with a cash prize that could help you acquire it. Pick a band to help you win between Jem and the Holograms or The Misfits. Type: 'Jem' or 'Misfits'.").toLowerCase();

switch(band) {
	case "jem":
	instrumentsF();
	break;

	case "misfits":
	prompt("We are the misfits, our songs are better! There is no reasoning with The Misfits directly. You lose!");
	break;
}

function instrumentsF() {
	//1. Jem and the Holograms instruments have gone missing. The Misfits must be up to their usual tricks. Do you call upon Synergy, buy new instruments, or pay Pizzaz the ringleader of The Misfits a visit?
	var instruments = prompt("Jem and the Holograms instruments have gone missing. The Misfits must be up to their usual tricks. Do you call upon Synergy, purchase new gear, or pay the ringleader Pizzaz of The Misfits a visit? Select: 'Synergy', 'New Gear', or 'Pizzaz'").toLowerCase();

	switch(instruments) {

		//1a. Synergy -- It's showtime Synergy! Jem calls upcon Synergy to provide the band with instruments for the upcoming Battle of the Bands!
		case "synergy":
		vehicleF();
		break;

		//1b. Buy new instruments -- Jem and the Holograms can't afford to purchase new instruments -- they need every penny to help prevent Starlight Studios from falling into the hands of the insidious Eric Raymond and the Misifts.
		case "new gear":
		prompt("Jem and the Holograms can't afford to purchase new instruments -- they need every penny to help prevent Starlight Studios from falling into the hands of the insidious the Misfits.");
		break;

		//1c. The Misifts -- "We are the misfits, our songs are better!" There is no reasoning with the Misfits directly.
		case "pizzaz":
		prompt("We are The Misfits, our songs are better! There is no reasoning with The Misfits directly. You lose!");
		break;
	}
}

function vehicleF() {
	//2. Jem and the Holograms must transport their instruments to the Battle of the Bands Show. Choose a vehicle: Rocking Roadster, Starlight Express, or the the bus.
	var vehicle = prompt("It's showtime Synergy! Jem calls upon Synergy to provide the band with new gear! Jem and the Holograms need a vehicle to transport their instruments to the Battle of the Bands. Choose a vehicle: Rockin' Roadster, Starlight Express, or the bus. Select: 'Rockin Roadster', 'Starlight Express', or 'Bus'").toLowerCase();

	switch(vehicle) {

		//2a. The Starlight express provides plenty of room and more and the band arrives to the venue with no issues.
		case "starlight express":
		newConflictF();
		break;

		//2b. In the rockin' roadter the band travels in style but there isn't enough room for their instruments.
		case "rockin roadster":
		prompt("In the Rockin Roadster the band would travel in style but, there isn't enough room for their instruments.");
		break;

		//2c. The public bus is too slow and they arrive well after the event with the Battle of the Bands slipping through their fingers.
		case "bus":
		prompt("The public bus is too slow and they arrive well after the event with the Battle of the Bands slipping through their fingers.");
		break;
	}

}

//Undetermined conflict leading to winning the Battle of the Bands
function newConflictF() {
	var newConflict1 = prompt("Coming soon! Enter: 1");
	var newConflict2 = parseInt(newConflict1);

	switch(newConflict2) {

		case 1:
		CountdownF();
		break;

		case 2:
		prompt("Coming soon!");
		break;

		case 3:
		prompt("Coming soon!");
		break;
	}
}

//Faux countdown ending with "You're Truly Outrageous!"
function CountdownF(){
	for (var i=5; i >0; i--){
		prompt([i]);

		// if (i=0) {
		// prompt("You're Truly Outrageous!");
		// }
	}
}

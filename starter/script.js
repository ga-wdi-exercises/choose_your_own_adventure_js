
var traffic = prompt("Leaving WDI15 class and heading home is no fun. Choises are:\nCAR\nMETRO\nBIKE");
switch(traffic) {
// Car option
	case 'CAR':
		var speed = prompt("Do You drive fast?(YES || NO)");
		var patient = prompt("Are you patient? (YES || NO)");
		if (speed === "YES" && patient === "YES") {
			alert("It seem like you you have everything under control");
		} else {
			alert("If you are not patient or fast, saty off the road please");
		} 
		break;
//Metro option
	case 'METRO':
		var phobia = prompt('Are you claustrophobic? (YES || NO)');
		if (phobia === "YES") {
			alert('The Metro is not for you, walk!');
		}
		var cost = prompt('Do you think it is cheap to ride the Metro? (YES || NO)')
		if (cost === "NO") { 
			alert("Yes, expensive for how slow it is")
		} else {
			alert("The Metro is a great Choice for you");
		}
		break;
//Bike option
	case 'BIKE': 
		var colse = prompt("Do you live near GA campus? (YES || NO)");
		var prefrence = prompt("Do you like biking (YES || NO)");
			if (close === "YES" || prefrence === "YES") {
				alert("Biking is a great option, I am too lazy to try it");
			} else {
				alert("Biking in D.C! Forget about it.");
			}
			break;
//Defaul message if inputs did no match YES or NO			
		default: alert("I spent too much time writing this game. Do me a favor and folow the instruction");
				alert("Pretty");
				alert("please");
				alert("with sugar on top");
				alert("follow");
				alert("the instruction!");
				alert("I miss spelled follow in the previous alert box, so I am going to annoy you with this alert box");


}
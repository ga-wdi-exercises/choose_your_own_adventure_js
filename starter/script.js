var quit = false;
var fullName = prompt("What is your name?");
var result = prompt("Hello " + fullName +", are you ready to conquer the World?\n- Yes\n- No");
if ("No" == result) {
	alert("Have a good life");
	quit = true;
	window.location = "http://google.com";
} else if ("Yes" == result) { 
	var yourCountry = prompt("Great! Please name your country!");
}
var invadeCountry = prompt("Awesome! " + yourCountry + " is getting ready for battle!\nNow choose the country that you want to invade first!\n- United States\n- China\n- England\n- North Korea\n- Russia");
while (invadeCountry != "Russia") {
	alert(yourCountry+ " is no match for " + invadeCountry + "'s military.. \nPlease go back and choose another country");
	invadeCountry = prompt("Please choose the country you want to invade first!\n- United States\n- China\n- England\n- North Korea\n- Mexico\n- Russia");
} 	if (invadeCountry === "Russia") {
	var militaryBranch = prompt ("Which military branch would you like to send to conquer " + invadeCountry+ " ? \n- Army\n- Navy\n- Airforce");
} switch (militaryBranch) {
	case "Army":
	var openCage = prompt ("Your " + militaryBranch +" is locked in the cage. Please solve the problem below to open the case\n(36+14)*2 = ?");
		break;
	case "Navy":
	openCage =	prompt ("Your " + militaryBranch +" is locked in the cage. Please solve the problem below to open the case\n(120-60)+(6+4)*4");
		break;
	case "Airforce":
	openCage = prompt ("Your " + militaryBranch +" is locked in the cage. Please solve the problem below to open the case\n7*4+72");		
		break;
	default:
		alert("This is not your military branch");
} if (openCage == 100) {
	alert ("Great Job! You just unlocked your " + militaryBranch + " to battle against " + invadeCountry + "!");
	var battleDate = prompt ("Your " + militaryBranch + " is now hiding in forest under arms.\nWould you prefer to launch a surprise attack during the day or at night");
		alert ("Unfortunately, one of your secret agents was captured in Russia, and your plan of launching a surprise attack during the "+battleDate+" was exposed..." );
		alert ("Russia decided to launch a preemptive attack on " + yourCountry + "!!!!!" );
		alert ("Russia just launched the nuclear missle!!");
		alert ("Russia launched another nuclear missle!!");
		alert ("GAME OVER");
	}else alert ("Game Over");
		







var name = prompt("Hello what is your name?");
var age =prompt("Hello! "+ name+" how old are you?");
var beverage = '';
var style ='';
var correct = false;

while(!correct){
	if(age < 21){
		beverage = prompt("Sorry, you are under age but I could offer you some sparkling or still water? (Sparkling/Still) ");
		correct = true;
		if(beverage.toUpperCase() == 'SPARKLING'){
			alert('Heres your La Croix');
			// correct = true;
		}else{
			alert('Heres your DC Tap Water');
			// correct = true;
		}
	}else{
		beverage = prompt("Welcome to the bar! what type of drink would you like? (Wine, Beer, Spirit)");
	}
		if(beverage.toUpperCase() == "WINE"){
			style = prompt("Do you prefer red or white wine? (Red/White)");
				if(style.toUpperCase()=="RED"){
					alert("Here is a nice glass of Malbec, Enjoy!");
				}else{
					alert("Here is a nice glass of Chenin Blanc, Enjoy!");
				}
				correct = true;
		}else if(beverage.toUpperCase() == "BEER"){
			style = prompt("Pick a style - What flavor do you like in your beer? (Hops/Malt/Crisp/Sour) ");
			switch(style.toUpperCase()) {
		    case 'HOPS':
		    	beverage = "Here's a damn fine IPA -- The Alchemist - Focal Banger";
		        break;
		    case "MALT":
		        beverage = "Here's a nice robust porter -- Port City - Porter";
		        break;
		    case 'CRISP':
		        beverage = "Heres a nice refreshing pilsner -- North Coast - Scrimshaw";
		        break;
			case 'SOUR':
		        beverage = "Heres a nice sour flemish red -- The Bruery - Oude Tart";
		        break;    
		    default:
		        beverage = "Thats not on the menu so Heres a nice champagne of beers!";
		}
			alert('Here you go '+name+' '+beverage);
			correct = true;
		}else if(beverage.toUpperCase() == "SPIRIT"){
			style = prompt('Would you like bourbon or gin in your drink?');
			if (style.toUpperCase() == "BOURBON") {
				style = prompt('Would you like an all spirit drink or a refreshing drink? (Spirit/Citrus)');
				if(style.toUpperCase() =='SPIRIT'){
					alert(name + ' Here is a delcious Manhattan - Enjoy!');
				}else{
					alert(name + ' Here is a delcious New York Sour - Enjoy!');
				}
			}else{
				style = prompt('Would you like an all spirit drink or a refreshing drink? (Spirit/Citrus)');
				if(style.toUpperCase() =='SPIRIT'){
					alert(name + ' Here is a delcious Negroni - Enjoy!');
				}else{
					alert(name + ' Here is a delcious Last Word - Enjoy!');
				}
			}
			correct = true;
		}

}

































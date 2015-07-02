//Start of the Game
//Setup
alert("You're Peggy Carter, agent of the SSR. It's 1946. The war is over. We won, Hitler is dead, and 'the boys' have come back. War gave you purpose. You fought alongside the best man you'll ever meet - Captain America - or Steve as you know him, and how he's dead. The men at work don't respect you, your duties are filing and taking lunch orders. That's why when millionaire weapons inventor Howard Stark and a war-time friend asks you to exonerate him from charges of treason you start conducting a parallel investigation, essentially becoming a double agent");

var suspectPursuit = prompt("You're scanning factory workers for signs of Vita Radiation with your SSR collegues. When you see a suspect wearing a lab coat come off clean, you ask if you can try scanning their street cloths. He starts running.\n\nYour male collegues start pursuit. Do you run after him down the hallway or take the service stairs to the lobby? (hallway/stairs)");

suspectPursuit = suspectPursuit.toLowerCase();

//first split
if (suspectPursuit === "hallway") {
	alert("You set off down the hallway, but your colleagues have a head start, by the time you catch up, they already tackled the suspect.");
	var invitation = prompt("The suspect is apprehended, but you're not invited to witness the interrogation.\n\nDo you still try to watch the interrogation? (Yes/No)");
	invitation = invitation.toLowerCase();
	if (invitation === "yes" || invitation === "y") {
		alert("You grab a pot of coffee and some cups and make your way to the interrogation room to get a peak through one-way mirror. 'Coffee anyone?' you ask and get some nods. While you're pouring the coffee, you're listening intently, committing every detail to memory.");
		//this continues the story
		leadConvergence();
	}
	
	else if (invitation === "no" || invitation === "n") {
		//This choice leads to consequence "Not Cut Out for This"
		//end of branch/////////////////////////////////////////
		notCutOut()
	}
	else {
		alert("Not a valid choice. Refresh and try again.");
	}
}

//first split
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else if (suspectPursuit === "stairs"){
	alert("You take the service stairs and step out into the lobby just as the suspect rushes past you. All you have to do is stick out your foot and the he is splayed out on the floor. You're already putting him in handcuffs when your male colleagues catch up with you, panting heavily.\n\n'May I be of further assistance?' you say coyly.")
	var interrogation = prompt("Your work earns you an invitation to the interrogation room. It's going to be ugly, Agent Thompson has a mean left hook and is not much of a talker. Do you stay anyway? (Yes/No)").toLowerCase();
	if (interrogation === "yes" || interrogation === "y"){
		//continues the story
		leadConvergence()
	}
	else if (interrogation === "no" || interrogation === "n") {
		alert("You decide to skip interrogation, you've seen enough of Agent Thompson for the day.")
		var proceed = prompt("You skipped the interrogation and your investigation is stalled. Do you continue to investigate? (Yes/No)").toLowerCase();
		if (proceed === "yes" || proceed === "y"){
			var search = prompt("Though you missed out on the interrogation, there are other places to get intel. Do you want to check the Chief's office or Agent Sousa's locked desk drawer? (office/desk)").toLowerCase();
			if (search === "office"){
				//Cover Blown
				exposed();
			}
			else if (search === "desk"){
				//Cover Saved
				goodSave();
			}
			else {
				alert("Not a valid choice. Refresh and try again.");
			}
		}
		else if (proceed === "no" || proceed === "n"){
			//Not Cut Out for This
			notCutOut();
		}
		
		else {
			alert("Not a valid choice. Refresh and try again.");
		}
	}
	else {
		alert("Not a valid choice. Refresh and try again.");
	}
}

//frist split
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else {
	alert("I guess you don't really want to play. If you change your mind refresh and try again.");
}

////////////////////////////////Converging Pathway///////////////////////////////////////////////////////////////////
function leadConvergence() {
	alert("The intel that the SSR got from the interrogation seems almost useless, but not to you. You recognize the buyer from suspect's verbal description.")
	var pursueLead = prompt("You research the buyer, his assets were seized, but you find a mention of a yacht that was not on the list of seized property. You track it down to a harbour. \n\nDo you pursue the lead alone and risk going into a dangerous situation without backup? Or do you share the information with your colleagues and know with near certainty you won't be part of the opeartion? Should you take the risk and go it alone? (Yes/No)").toLowerCase();
	if (pursueLead === "yes" || pursueLead === "y"){
		alert("The gamble paid off! Inside the boat you find non-descript crates with numbers printed on them. It's Howard Stark's bad babies - weapons that were stolen from his vault that later started surfacing on the black market. You've done something the entire agency has been trying to do for weeks now.")
		var strike = prompt("This seems too easy. You sense a movement behind you and duck just in time. There is a big dent in the metal crate you were standing over. You turn and try to access the situation.\n\nA man you can only describe as a giant is illuminated by dim lights. He has a led pipe. You reach for your gun, but it's immediately knocked out of your hands. You fight back trying to throw him off-balance, but there is just too much weight difference.\n\nA blow catches you on the back and sucks the breath out of you. You realize you're loosing this fight ant the outcome will be fatal.\n\nYou see one of Stark's bad babies within reach. You don't know what it does but it looks dangerous. You point it at the giant and aim...\n\nWhat do you aim for? (name a body part)").toLowerCase()
		while(strike !== "head"){
			strike = prompt("The weapon had no effect, aim again. What do you aim for?");
		}
		alert("Great! The weapon worked! The man is knocked unconscious!")
		var crate = prompt("With the giant incapacitated, you can turn your attention back to the crates. There are 3 that draw your attention which one do you open? Crate #1, Crate #16, or Crate #5? (1,16,5)")
		if (crate == 1) {
			//Find Cap's Blood
			capBlood();
		}
		else if (crate == 16){
			//Save The Day
			saveTheDay();
		}
		else if (crate == 5){
			//Death
			death();
		}
	}
	else if (pursueLead ==="no" || pursueLead === "n"){
		alert("You decide it's too dangerous and it is time to come clean with your colleagues.")
		//This choice leads to consequence "Not Cut Out for This"
		//end of branch/////////////////////////////////////////
		notCutOut();
	}
	else {
		alert("Not a valid choice. Refresh and try again.");
	}
}


///////////////////////////////OUTCOMES/////////////////////////////////////////////////////////////////////////////

////Not Cut Out for This
function notCutOut() {
	alert("You realize you're not cut out for this work. You just don't have the stomach for it anymore. Better leave it to your male colleagues, you're tired of fighting for acceptance - they'll never see you as equal")
}
////Death
function death() {
	alert("Whatever was in that crate was highly volatile. The moment you opened it, the components reacted. The blast levelled out the entire marina. Your body was instantly vaporized.")
}

///Cover Blown
function exposed() {
	alert("You get caught red-handed! Chief catches you snooping in his office, your cover is exposed, you're immediately expelled from SSR. You're lucky they didn't take you seriously, or you would be in jail. Who is going to exonerate Howard Stark now?")
}

///Cover Saved
function goodSave() {
	alert("You long suspected Sousa was up to something. When you pick the lock on his desk drawer you discover an entire file of information that could pontentially lead to you. You can't have your cover blown, at least not till you exonerate Howard Stark. You take his files so you can destroy discreetly later. You live to fight another day.")
}

///Save the Day
function saveTheDay() {
	alert("You open the crate #16 and see a couple of canisters that seem to contain some sort of gas. You don't know what it does. It looks pretty sinister, though. You have a sudden premonition. Something compels you to throw it overboard. Later, you have no idea what possesed you, but somehow you feel like you saved the day.")
}

///Find Cap's Blood
function capBlood() {
	alert("You find the last remaining vial of blood beloning to Steve Rogers aka Captain America. Memories overwhelm you. You won't let it fall into the wrong hads. You know exatly what to do with it.")
}

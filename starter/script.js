confirm("Are you over 18? Clicking OK proves this beyond a doubt. It's science.");

alert("It is a steamy, wind-swept night and you are alone in your grammaw's house. It is boring.");

alert("The internet is out and all she has for entertainment are these crusty cheese-ball romance novels. You have a choice: Go in the living room and help her file her bunions or pretend to read one of these things and let her think you're really into it.");

//==========Night At Grandmaws Function===+ BUNIONS ENDING 1==
nightAtGrandmas();

function nightAtGrandmas(){
var BunionsOrRead = prompt("Now, what will it be sweet, honey-child? Ol' Mammaw's raspy bunions or a skanky bodice ripper? Peck in 'B' for 'Bunions' or 'R' for 'Read the damn book'.").toUpperCase();
      if(BunionsOrRead === "B"){
        alert("You chose your fate, bro. Damn. Go get the cheese-grater and the lotion! THE END FOR YOU!");
      }
      else if (BunionsOrRead === "R"){
        book();
  }
}
//========BOOK FUNCTION===================================

function book(){
	var PirateStory= prompt("You thumb through the shelf. Hmmm... Oh! This one looks like a real page turner. It's called 'Pirates in Heat: A Sea of Burning Booty'. What do ya say? You want to crack it open? 'y' or 'n'?").toUpperCase();
  if (PirateStory === "Y"){
		 ShipAdventure();
	}
	else if(PirateStory === "N") {
    Nextbook();
	}
}
//===================Ship Adventure=======================================

function ShipAdventure(){
	alert("Your name is Duncan McBeardish. You are the fearless cabinboy turned ship-sworn renegade by the shear glory of your magnificent man-boobs. You've long been at sea and are no longer amused with your mate, Scabby Pete and his tone-deaf rendition of 'detachable peg leg.' You have grown tired of your parrot eyeballing your shimmering muscles. It's time to jump the shark! Get out and taste the sand with your face! You decide to head shoreside to make some new adoring fans of the local island women. The very sight of you will have them swearing off their husbands for the shear privilige of smelling your shirt.");

  alert("Skip to the good part already. Jeez. ");

  var sinkOrSwim = prompt("...how she found you, you'll never know...there you are, teetering on the edge of a cliff with the SeaWitch in one bulky arm and THE redheaded bartender's daughter in the other. Your steely grip is slipping. There is only time to save one...which will it be??? The Redhead (type R) or the sultry siren from the deep? (type S for that one).").toUpperCase();

	if (sinkOrSwim ==="R") {
		 redHead();
	}
	else if (sinkOrSwim === "S") {

		SeaWitch();
	}
}
//=============Island Queen Function ENDING 2===================

function SeaWitch(){
	alert("...who picks the freakin' sea witch? Of COURSE she drowns you. Idiot. But not before stealing your voice...");
  alert("And you never sang again...THE END FOR YOU!")
	}
//==================RedHead====================
function redHead(){
  alert("The seawitch's curse was lost in the waves as you stared into the eyes of your lost love. Weird... did she always have that hairy mole abover her eyebrow? You never noticed before. Suddenly, with a loud, grimy belch and... holy crap woman?! Was that a fart? Seriously? Man, island life appears to have sanded away some of her more...er...ladylike qualities. You distanly wonder how long you've really been at sea...")
  alert("Then, you remember, this a romance novel and you have a job to do! You plant a fierce one on her, for the sake of womankind everywhere. Hell, you'll get to them all eventually, right? She looks at you, breathlessly, and says...")
	var KissKillMarry = prompt("Do you love me? You pause and decide to say one of three things: type 'KISS' to say 'Maul me like I'm the high-fructose corn syrup to your lame-ass low carb diet' type 'KILL' to say 'Sorry Darlin, this ship has left the port and your octopus smells like a sea cucumber.' Type 'MARRY' if you want to say 'You know? Screw the pirate life, let's shack up and move to the burbs.'").toUpperCase();
	if (KissKillMarry === "KISS") {
		 sayMyName();
	}
	else if (KissKillMarry === "KILL") {
		alert("Her face sours, flaming hair tangling around you like a chokehold. At your words she takes that whole 'Kill' thing pretty hard. You didn't even see the stilletto in her left hand...");
    alert("...but you sure felt it rip your kidney in two just like that last bottle of port you guzzled in the men's room. You bleed out in her arms....and as the world goes dark you feel...kinda relieved. Damn, woman. ")
    alert("THE END FOR YOU!")
	}
  else if (KissKillMarry === "MARRY") {
    alert("It all happened so suddenly. The pirate thing is a distant memory. She gets pregnant and you move to Towson and, whatever, it's all good. Yeah, you're living with your mom right now, but it's only temporary until she is old enough to graduate and your manager at the Greene Turtle promotes you to Manager. Besides, her parents will hook you up, bro... her dad owns a dealership...");
    alert("THE END OF YOU!")
  }
}

//==========KissMore===================
function sayMyName(){
  alert("Everything is going well. She kisses the hell out of you and then she asks you the ultimate question, the one no woman should ask...she says....");
  var name = prompt("Say my name...(Don't look at me, dude.)")
  var strikes = 0
    while (name != "Karen") {
      prompt("Huh?? Who the HELL is THAT? I SAY-ED 'WHAT'S MY NAME?! (She looks mad... say something!)");
      strikes +=1;
      if (strikes > 5){
        var name = prompt("Fine. It's Karen. Just say Karen. You know what? Screw it. She leaves.");
        alert("THE END FOR YOU!");
      }
    }
}


//==========Nextbook================
function Nextbook(){
	var MilkmaidStory = prompt("Yeah, me neither. Oooh! How about 'There's Something In The Milk Maid, part 4?' That's GOTTA be good, right? Type Y or N.").toUpperCase();
	if (MilkmaidStory === "Y") {
		 BessiesRevenge();
	}
	else if (MilkmaidStory === "N") {
    LastBook();
	}
}
//=========Bessies Revenge======
function BessiesRevenge(){
  alert("You skim through the book, looks ...interesting...hot stable boy, war-torn estate, something about a ... wait...");
  alert("You quote aloud, 'Bessie glared feverishly at Veronica and remembered her warm hands between her legs. She knew she'd kill the farmhand for stealing her girl... 'Hey! Now things are getting GOOD!");
  alert("Yes, jealous Bess had plans for that rake. As soon as she finished chewing her cud, she'd gore him with BOTH horns and trample him good' ... wait...WHAT THE HELL? Bess is a cow. Who wrote this dribble? Man, this reads like it was penned by some FizzBuzz brained student developer who hadn't slept for five days... ")
  alert("You notice your grandmaw staring at you. It's going to be a long night.");
  alert("THE END FOR YOU!")


}
//=======Last Book Function=========
function LastBook(){
	var LoveIsDead = prompt("Who are we kidding? Wait... there's one more... This one is called 'WalkingStiff:an Affair with the Undead.' Zombies? I love Zombies! Let's do this!, right? Y or N? (come on, man!!!)").toUpperCase();
	if (LoveIsDead === "Y") {
		 alert("Chapter 1. The mist is curling around the aching arms of the black, leafless trees. The palid monuments to our brief and blindsighted mortalities stand starkly in the October night.");

	}
	else if (Choice1 === "N") {
	    alert("Well too freakin' bad! I was asking to be NICE. You're reading it anyway. Okay... now where were we?");
	}
}

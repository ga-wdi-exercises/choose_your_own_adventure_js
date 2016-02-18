confirm("Are you over 18? Clicking OK proves this beyond a doubt. It's science.");

alert("It is a steamy, wind-swept night and you are alone in your grammaw's house. It is boring.");

alert("The internet is out and all she has for entertainment are these crusty cheese-ball romance novels. You have a choice: Go in the living room and help her file her bunions or pretend to read one of these things and let her think you're really into it.");

//==========Night At Grandmaws Function===+ BUNIONS ENDING 1==
nightAtGrandmas();

function nightAtGrandmas(){
var BunionsOrRead = prompt("Now, what will it be honey-child, Mammaw's Bunions or Skanky Bodice Ripper? Type 'B' for 'Bunions' or 'R' for 'Read the damn book'.").toUpperCase();
      if(BunionsOrRead === "B"){
        alert("You chose your fate, bro. Go get the cheese-grater and the lotion! THE END.");
      }
      else if (BunionsOrRead === "R"){
        book();
  }
}
//========BOOK FUNCTION===================================

function book(){
	var PirateStory= prompt("Hmmm... This one looks like a real page turner. It's called 'Pirates in Heat: A Sea of Burning Booty' Do you want to crack it open? Type 'y' or 'n'. ").toUpperCase();
  if (PirateStory === "Y"){
		 ShipAdventure();
	}
	else if(PirateStory === "N") {
    Nextbook();
	}
}
//===================Ship Adventure=======================================

function ShipAdventure(){
	alert("Your name is Duncan McBearish, you are the fearless cabinboy turned pirate king by the shear glory of how you looked when shirtless. You have grown tired of your parrot eyeballing your muscles and you decide to head to shore to make a few island women swear off their husbands for the privilige of smelling your shirt.");
  var sinkOrSwim = prompt("Once there you discover that your - write about lady drama - which one? Y or N?").toUpperCase();
	if (sinkOrSwim ==="Y") {
		 redHead();
	}
	else if (sinkOrSwim === "N") {

		IslandQueen();
	}
}
//=============Island Queen Function ENDING 2===================

function IslandQueen(){
	alert("Island Queen Kills you Dead! THE END");
	}
//==================RedHead====================
function redHead(){
	var KissKillMarry = prompt("she asks you point blank. Kiss kill or Marry?").toUpperCase();
	if (KissKillMarry === "KISS") {
		 KissMore();
	}
	else if (KissKillMarry === "KILL") {
		alert("she kills you first. You bastard.");
	}
  else if (KissKillMarry === "MARRY") {
    alert("She Marries you and you move to Towsend but just until she graduates then ... your dad owns a dealership");
  }
}

//==========KissMore===================
function KissMore(){
  alert("Write a Loop!");
}

//==========Nextbook================
function Nextbook(){
	var MilkmaidStory = prompt("Yeah, me neither. Oooh! How about 'There's Something In The Milk Maid, part 4?' That's GOTTA be good, right? Type Y or N.").toUpperCase();
	if (MilkmaidStory === "Y") {
		 alert("Write a function for BEssies Revenge!");
	}
	else if (MilkmaidStory === "N") {
    LastBook();
	}
}
//=======Last Book Function=========
function LastBook(){
	var LoveIsDead = prompt("Who are we kidding? Wait... there's one more... This one is called 'WalkingStiff:an Affair with the Undead.' Zombies? I love Zombies! Let's do this!, right? Y or N? (come on, man?!)").toUpperCase();
	if (LoveIsDead === "Y") {
		 Prompt("Zombie End it 1");
	}
	else if (Choice1 === "N") {
	    alert("Zombie End it 2");
	}
}

console.log("Welcome to Robert's Choose-Your-Own Adventures!");
console.log("****************************************")
var name = prompt("Enter your name, because I said so:");
console.log("Wow, " + name + ", your parents must have hated you.");

console.log("The year is 2015, and you just finished the day's GA lessons. As you get up to leave the classroom, you notice a dark shadow slide past the doorway.");

var choice1 = prompt("You (c)hase after the shadow, (s)tay put to see if anyone else noticed it, or (j)ump out the window, fearing for your life.");

switch(choice1) {
	case "c":
		console.log("You jump out of your seat, stumble over a laptop cord, and spring out of the classroom after knocking over two or three macbooks. You cach a glipse of the dark shadow heading towards the elevators. What do you do?");
		var choice1a = prompt("You (r)un to the elevators, hoping to catch the shadow, or (s)cream at the top of your lungs.");
			switch (choice1a) {
				case "r":
					console.log("You rush to the elevators and jump into one right before the door closes. Inside is Death, who casually asks if you'd like some chocolate. He seems like a pretty nice guy. What do you do?");
					var choice1aA = prompt("Don't trust death, pull out your trusty shiv and (s)tab that m*****f*****, or decide to trust death and (b)efriend him.")
						switch (choice1aA) {
							case "s":
							var choice1aB = prompt("How many times?");
							choice1aB = parseInt(choice1aB);
								console.log("You stab death " + choice1aB + " times. Death is no more, but he was actually just misunderstood all along, and you've done a terrible thing.");
							break;

							case "b":
								console.log("Turns out he's a great guy, good thing you didn't stab him!");
							break;

							default:
							console.log("Make sure to choose one of the available options.");
						}
				break;

				case "s": 
					console.log("Your scream swells in tone and amplitude, and people beginning falling to the ground, hands around their ears. A few blocks away, Barack Obama winces in discomfort. You end up having to pay to have all the shattered windows replaced, and never even find out what the damn shadow was.");
				break;

				default:
					console.log("Make sure to choose one of the available options.");
			}
	break;

	case "s":
		console.log("You glance around wildly, but Robin seems to be playing a game on his computer and Adam is busy explaining the intricacies of semicolons to another student in the back. What do you do?");
		var choice2a = prompt("Swiftly begin (s)macking other students with your laptop, for no good reason, or quietly work on your (h)omework exercise.");
			switch (choice2a) {
				case "s":
					console.log("You are promptly arrested for unprovoked assault. Your sentence is two years in Federal State prison.");
				break;

				case "h":
					console.log("You finish the homework exercise and learn a little bit more about Javascript. You have a nightmare involving ES6 that night.")
				break;

				default: 
					console.log("Make sure to choose one of the available options.");
			}
	break;

	case "j":
		console.log("You smash through the glass, and begin the quick decent from the 8th story to your untimely death. But suddenly, a figure appears immediately in front of you shouts, 'use your backpack!!' What do you do?");
		var choice3a = prompt("Do as he says, and (u)se your backpack, don't do as he says, and use your backpack to (h)it him in the face, (d)o nothing.")
			switch (choice3a) {
				case "u":
					console.log("You never actually picked up on what he meant by 'use your backpack', and after fumbling with it for a second you hit the ground and die.")
				break;

				case "h":
					console.log("You hear the figure shout something vaguely like 'you f****** a******!' before hitting the ground and dying.")
				break;

				case "d":
					console.log("You're a dumbass, what kind of person doesn't even try to save themselves? You die slightly more painfully.")
				break;

				default: 
					console.log("Make sure to choose one of the available options.");
			}
	break;

	default:
		console.log("Make sure to choose one of the available options.");
}

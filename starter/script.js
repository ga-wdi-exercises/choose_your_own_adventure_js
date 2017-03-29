var play = "Y";

while (play == "Y") {

var winner = prompt("Welcome to the chocolate factory.  Which golden ticket winner are you?  Enter 1, 2, 3, or 4.");
switch (parseInt(winner)){
	case 1:
		var candy = prompt("Hello Augustus Gloop.  The tour of the factory is about to begin, but you really want to get another candy bar from your bag on the other side of the room.  Do you go get the candy bar?  Enter Y or N.");
			if (candy == "Y") {
				var direction = prompt("You get your candy bar, but by the time you turn around, the tour has started without you.  It looks like you can go right or left.  Enter R or L.");
					if (direction == "R") {
						var taste = prompt("Back with the group!  It looks like you can eat everything in this room.  Do you try tasting the grass or the chocolate river?  Enter grass or river");
							if (taste == "grass") {
								play = prompt ("The grass tastes like pointy cotton candy.  Play again?  Enter Y or N.");
								
							} else if (taste == "river") {
								play = prompt("You fall into the chocolate river, but you calmly climb out.  Play again?  Enter Y or N.");
							}

					} else if (direction == "L") {
						var dance = prompt("You apparently went the wrong way, and come across a group of Oompah Loompahs practicing their newest dance number.  They ask if you would like to participate.  Enter Y or N.");
							if (dance == "Y") {
								play = prompt("Your dance moves astound them, and they invite you to permanently join their troupe.  Play again?  Enter Y or N.");
							} else if (dance == "N") {
								play = prompt("You offend them and they escort you out of the building.  Play again?  Enter Y or N.")
							}
					}



			} else if (candy == "N") {
				var offer = prompt ("The tour begins.  Luckily you had a spare candy bar in your pocket.  As you snack, you notice Charlie eyeing your candy bar.  Do you offer him a piece?  Choose Y or N.");
					if (offer == "Y") {
						var taste2 = prompt("Charlie becomes your buddy and suggests that you try the edible trees or chocoloate river.  Which one do you try?  Enter trees or river.");
							if (taste2 == "trees") {
								play = prompt("The bark tastes like dark chocolate and the leaves taste like white chocolate.  Play again?  Enter Y or N.");
							} else if(taste2 == "river") {
								play = prompt("You clumsily fall into the chocolate river.  Charlie organizes a human chain and they help get you out.  Play again?  Enter Y or N.");
							}
					} else if (offer == "N") {
						var taste3 = prompt("And why should you?  Time to taste some edible rocks or the chocolate river.  Enter rocks or river.");
							if (taste3 == "rocks") {
								play = prompt("The rocks takes alright but they chip your front tooth.  Play again?  Enter Y or N.");
							} else if(taste3 == "river") {
								play = prompt("You fall into the chocolate river, and your body gets sucked up by a giant tube.  Play again?  Enter Y or N.");
							}

			} else {
				alert("Sorry didn't understand your answer.  Please enter Y or N.");
			}};

	break;

	case 2:
		var room = prompt("Hello Veruca Salt.  Would you like to wander around in the Edible Outdoorsy Space or move on to the Egg Room?.  Enter outdoors or eggRoom.");
			if (room == "outdoors") {
				var taste4 = prompt("Do you take a sip from a ginormous flower or snack on railing?  Enter flower or railing.");
					if (taste4 == "flower") {
						var egg = prompt("It\'s delicious.  Mr. Wonka whisks your group away to the room where gold eggs are being laid.  Do you try to steal one of the eggs?  Enter Y or N.");
							if (egg == "Y") {
								play = prompt("You fall down the egg chute, having been deemed a 'bad egg'.  Play again?  Enter Y or N.");
							} else if (egg == "N") {
								play = prompt("That's too bad.  You look up the going price for golden eggs and it's super high.  Play again?  Enter Y or N.");
							}
					} else if (taste4 == "railing") {
						var wallpaper = prompt("The railing tastes surprisingly like Jolly Ranchers.  Next you enter a room with edible wallpaper.  Do you lick the wall?  Enter Y or N.");
							if (wallpaper == "Y") {
								play = prompt("The snozzberries taste like snozzberries.  Play again?  Enter Y or N.");
							} else if (wallpaper == "N") {
								play = prompt("Good.  That\'s just asking to get sick.  Play again?  Enter Y or N.");
							}
					}
			} else if (room == "eggRoom") {
				var transportation = prompt("Ok there are two ways to get there.  You can take a scary gondola, or walk.  Enter gondola or walk.");
					if (transportation == "gondola") {
						var steal = prompt("The ride is the stuff of nightmares.  But you quickly get to a room where hens are laying golden eggs.  Do you collaborate with Violet to steal the egg, or do you do a solo dance number?  Enter collab or dance.");
							if (steal == "collab") {
								play = prompt("Success.  One of you distracts the crowd while the other sneaks an egg out.  Congrats.  Play again?  Enter Y or N.");
							} else if (steal == "dance") {
								play = prompt("You sing about how you want the world.  You want the whole world.  Then you fall down the egg chute.  Play again?  Enter Y or N.");
							}
					} else if (transportation == "walk") {
						var steal2 = prompt("The walk is long but you pass by the room where the golden eggs are stored.  Do you try to take one of the eggs?  Enter Y or N.");
							if (steal2 == "Y") {
								play = prompt("Alarms immediately sound and you are kicked out of the factory.  Play again?  Enter Y or N.");
							} else if (steal2 == "N") {
								play = prompt("Good thing you didn't.  They're watching on the security cams.  Play again?  Enter Y or N.");
							}
					}
			};


	break;

	case 3:
		var transportation2 = prompt("Hello Violet Beauregard.  After eating plenty of trees, you move on to the next room.  Do you take the creepy-looking gondola or walk?  Enter gondola or walk. ");
			if (transportation2 == "walk") {
				var direction = prompt("You take the scenic route.  Enter right or left.");
					if (direction == "right") {
						var chew = prompt("You run into Veruca Salt, who also decided to walk.  She makes it clear she finds your gum-chewing to be annoying.  Do you stop chewing?  Enter Y or N.");
							if (chew == "Y") {
								play = prompt("You lose your world record status for Longest Continuous Chew Time.  Sorry.  Play again?  Enter Y or N.");
							} else if (chew == "N") {
								play = prompt("You start choking on your gum.  An Oompah Loompah rushes to your aid.  Play again?  Enter Y or N.");
							}
					} else if (direction == "left") {
						var report = prompt("You pass by an Oompah Loompah who is sleeping on the job.  Do you report him?  Enter Y or N.")
							if (report == "Y") {
								play = prompt("He gets fired, and you have mixed feelings about that.  Play again?  Enter Y or N.");
							} else if (report == "N") {
								play = prompt("The Oompah Loompah was in charge of quality control and a bad batch of candy gets shipped :(.  Play again?  Enter Y or N.")
							}
					}
			} else if (transportation2 == "gondola") {
				var experiment = prompt("You get whisked away to the Inventions Room.  You are intrigued by the Everlasting Gobstopper and the 3-Course-Meal-Gum.  Which do you choose?  Enter E or 3.");
					if (experiment == "E") {
						var spit = prompt("The Everlasting Gobstopper tastes nasty.  Do you spit it out?  Enter Y or N.")
							if (spit == "Y") {
								play = prompt("You offend the Oompah Loompah inventors in the room.  They worked pretty hard on it.  Play again?  Enter Y or N.");
							} else if (spit == "N") {
								play = prompt("The rest of the tour is just pretty uncomfortable for you.  Play again?  Enter Y or N.");
							}
					} else if (experiment == 3) {
						var stop = prompt("Within seconds you taste tomato soup and roast beef.  It's delicious.  However Mr. Wonka asks you to spit it out.  Do you?  Enter Y or N.");
							if (stop == "Y") {
								play = prompt("You avoid further disaster, but your skin does turn and stay a purple hue.  Play again?  Enter Y or N.");
							} else if (stop == "N") {
								play = prompt("Your body fills with juice and you get wheeled off by the Oompah Loompahs.  Play again?  Enter Y or N.");
							}
					}
			}

	break;

//there just isnt time right now for Mike Teavee..
	// case 5:
	// 	alert("Mike Teavee.");

	// break;

	case 4:
		var wander = prompt("Charlie Bucket.  You have your fill of edible rocks and such and now Grandpa Joe suggests that you two wander off on your own.  Do you agree?  Enter Y or N.");
			if (wander == "Y") {
				var drink = prompt("You come upon a room with several mysterious looking vials.  Which one do you try?  Enter 1 or 2.");
					if (drink == 1) {
						var float = prompt("Your body slowly lifts off the ground and you start floating around the room.  Grandpa Joe suggests burping your way down.  Do you?  Enter Y or N.");
							if (float == "Y") {
								alert("Though uncomfortable, the repetitious burping does work and you are able to ground yourself again.");
							} else if (float == "N") {
								alert("You continue to float until you get stuck on a blade of the ceiling fan.  You remain there until the Oompah Loompahs come to retrieve you.");
							}
					} else if (drink == 2) {
						var sink = prompt("You start sinking into the ground.  Grandpa Joe suggests trying another vial to see if it will counteract the effects.  Try?  Enter Y or N.");
							if (sink == "Y") {
								alert("The potions do appear to equalize each other and you wind up ok.");
							} else if (sink == "N") {
								alert("You continue to sink.  Your life flashes before your eyes.  You have some regrets you didn't even know you had.  Then a team of Oompah Loompahs come and fish you out.")
							}
					}
			} else if (wander == "N") {
				var inventRoom = prompt("Good.  The group moves on to the Inventing Room.  It is here that you see the Everlasting Gobstopper that Mr. Slugworth asked you to steal.  Do you take one?  Enter Y or N.")
					if (inventRoom == "Y") {
						var fight = prompt("An alarm immediately sounds and you find yourself surrounded by angry Oompah Loompahs.  What do you do?  Enter fight or flight");
							if (fight == "fight") {
								alert("You make an honorable attempt, but you are no match for the Oompah Loompahs.  Your body and pride are hurt as you are removed from the tour.");
							} else if(fight = "flight") {
								alert("You start to run but those Oompah Loompahs are fast.  They tackle you to the ground and you are escorted off the premises.");
							}
					} else if (inventRoom == "N") {
						var elevator = prompt("Good job!  You're the last remaining kid on the tour and Mr. Wonka offers you control of the Chocolate Factory.  Do you accept?  Enter Y or N.");
							if (elevator == "Y") {
								alert("You run the factory for a few years, but then find that the job just isn't really for you.  You start looking into other career options.");
							} else if (elevator == "N") {
								alert("It was a hard decision to make, but you ultimately wind up living a well-rounded happy life without the stress of running a chocolate factory.")
							}
					}
			}
	
	break;

		// alert("Sorry you're not on the list.  Make sure you enter the number 1, 2, 3, 4, or 5.");
	
}

}

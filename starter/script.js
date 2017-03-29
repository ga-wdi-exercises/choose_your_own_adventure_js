var winner = prompt("Welcome to the chocolate factory.  Which golden ticket winner are you?  Enter 1, 2, 3, 4, or 5");
switch (parseInt(winner)){
	case 1:
		var candy = prompt("Hello Augustus Gloop.  The tour of the factory is about to begin, but you really want to get another candy bar from your bag on the other side of the room.  Do you go get the candy bar?  Enter Y or N.");
			if (candy == "Y") {
				var direction = prompt("You get your candy bar, but by the time you turn around, the tour has started without you.  It looks like you can go right or left.  Enter R or L.");
					if (direction == "R") {
						var taste = prompt("Back with the group!  It looks like you can eat everything in this room.  Do you try tasting the grass or the chocolate river?  Enter grass or river");
							if (taste == "grass") {
								alert("The grass tastes like pointy cotton candy.");
							} else if (taste == "river") {
								alert("You fall into the chocolate river, but you calmly climb out.");
							}

					} else if (direction == "L") {
						var dance = prompt("You apparently went the wrong way, and come across a group of Oompah Loompahs practicing their newest dance number.  They ask if you would like to participate.  Enter Y or N.");
							if (dance == "Y") {
								alert("Your dance moves astound them, and they invite you to permanently join their troupe.");
							} else if (dance == "N") {
								alert("You offend them and they escort you out of the building.")
							}
					}



			} else if (candy == "N") {
				var offer = prompt ("The tour begins.  Luckily you had a spare candy bar in your pocket.  As you snack, you notice Charlie eyeing your candy bar.  Do you offer him a piece?  Choose Y or N.");
					if (offer == "Y") {
						var taste2 = prompt("Charlie becomes your buddy and suggests that you try the edible trees or chocoloate river.  Which one do you try?  Enter trees or river.");
							if (taste2 == "trees") {
								alert("The bark tastes like dark chocolate and the leaves taste like white chocolate.");
							} else if(taste2 == "river") {
								alert("You clumsily fall into the chocolate river.  Charlie organizes a human chain and they help get you out.");
							}
					} else if (offer == "N") {
						var taste3 = prompt("And why should you?  Time to taste some edible rocks or the chocolate river.  Enter rocks or river.");
							if (taste3 == "rocks") {
								alert("The rocks takes alright but they chip your front tooth.");
							} else if(taste3 == "river") {
								alert("You fall into the chocolate river, and your body gets sucked up by a giant tube.");
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
								alert("You fall down the egg chute, having been deemed a 'bad egg'.");
							} else if (egg == "N") {
								alert("That's too bad.  You look up the going price for golden eggs and it's super high.");
							}
					} else if (taste4 == "railing") {
						var wallpaper = prompt("The railing tastes surprisingly like Jolly Ranchers.  Next you enter a room with edible wallpaper.  Do you lick the wall?  Enter Y or N.");
							if (wallpaper == "Y") {
								alert("The snozzberries taste like snozzberries.");
							} else if (wallpaper == "N") {
								alert("Good.  That\'s just asking to get sick.");
							}
					}
			} else if (room == "eggRoom") {
				var transportation = prompt("Ok there are two ways to get there.  You can take a scary gondola, or walk.  Enter gondola or walk.");
					if (transportation == "gondola") {
						var steal = prompt("The ride is the stuff of nightmares.  But you quickly get to a room where hens are laying golden eggs.  Do you collaborate with Violet to steal the egg, or do you do a solo dance number?  Enter collab or dance.");
							if (steal == "collab") {
								alert("Success.  One of you distracts the crowd while the other sneaks an egg out.  Congrats.");
							} else if (steal == "dance") {
								alert("You sing about how you want the world.  You want the whole world.  Then you fall down the egg chute.");
							}
					} else if (transportation == "walk") {
						var steal2 = prompt("The walk is long but you pass by the room where the golden eggs are stored.  Do you try to take one of the eggs?  Enter Y or N.");
							if (steal2 == "Y") {
								alert("Alarms immediately sound and you are kicked out of the factory.");
							} else if (steal2 == "N") {
								alert("Good thing you didn't.  They're watching on the security cams.");
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
								alert("You lose your world record status for Longest Continuous Chew Time.  sorry.");
							} else if (chew == "N") {
								alert("You start choking on your gum.  An Oompah Loompah rushes to your aid.");
							}
					} else if (direction == "left") {
						var report = prompt("You pass by an Oompah Loompah who is sleeping on the job.  Do you report him?  Enter Y or N.")
							if (report == "Y") {
								alert("He gets fired, and you have mixed feelings about that.");
							} else if (report == "N") {
								alert("The Oompah Loompah was in charge of quality control and a bad batch of candy gets shipped :(.")
							}
					}
			} else if (transportation2 == "gondola") {
				var experiment = prompt("You get whisked away to the Inventions Room.  You are intrigued by the Everlasting Gobstopper and the 3-Course-Meal-Gum.  Which do you choose?  Enter E or 3.")
					if (experiment == "E") {
						var spit = prompt("The Everlasting Gobstopper tastes nasty.  Do you spit it out?  Enter Y or N.")
							if (spit == "Y") {
								alert("You offend the Oompah Loompah inventors in the room.  They worked pretty hard on it.")
							} else if (spit == "N") {
								alert("The rest of the tour is just pretty uncomfortable for you.")
							}
					} else if (experiment == 3) {
						var stop = prompt("Within seconds you taste tomato soup and roast beef.  It's delicious.  However Mr. Wonka asks you to spit it out.  Do you?  Enter Y or N.")
							if (stop == "Y") {
								alert("You avoid further disaster, but your skin does turn and stay a purple hue.")
							} else if (stop == "N") {
								alert("Your body fills with juice and you get wheeled off by the Oompah Loompahs.")
							}
					}
			}

	break;

	case 4:
		alert("Mike Teavee.");a 

	break;

	case 5:
		alert("Charlie Bucket.");
	
	break;

		// alert("Sorry you're not on the list.  Make sure you enter the number 1, 2, 3, 4, or 5.");
	
}

//write a for loop where you set a variable as true at the top.  at the bottom of the loop, have that switch to false to break the boop.
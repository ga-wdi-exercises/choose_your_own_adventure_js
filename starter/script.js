// My adventure program. Select your vacation destination
// based on my travels!

var news = prompt("Its 7am.  Time to wake up to another day of city life.  You are dressed and ready to go to work.  Do you watch the morning news before leaving?");
var email = prompt("Do you check your email before leaving");
var dog = prompt("do you walk, feed and play with your dog before leaving?");
var dead = 'no';
var destination = null;
var info = {"news":"no", "email":"no", "dog":"no", "dead":"no"}



//if (news === 'yes') {
//	console.log("24 hour zombie virus in city. only 1 out of 100 people affected. started at Democratic Party headquarters");
//	console.log("Traffic report says normal commute routes are blocked due to police action at Republican Party Headquarters. Terrorists have shut them all in and wired the building to explode");
//	console.log("Weather report says massive snow blizzard in Maryland, Rain and tornados in Virgina and sunny 80 degrees in DC");
//	console.log("Believed to be the result of failed government experiment");
//}

//if (email === 'yes') {
//	console.log("offered new job with 200k bonus in VA at the National Weather Service Special Projects facility");
//	console.log("tickets to NCAA tournament at Verizon center came through.  First game at 11:00am");
//}

//if (dog === 'yes') {
//	console.log("Feed and play with dog before leaving");
//	if (news === 'yes') {
//		console.log("Take gun with you when walking dog.  Killed 3 zombies during walk.");
//	}
//	else {
//		console.log("During dog walk you die a horrible Zombie death");
//		console.log("your destination is the Adams Family Funeral Home");
//		dead = 'yes';
//		}
//	
//}
function selectDestination(news, email) {
	if (email === 'no') {
		if (news === 'yes') {
			return prompt("Please select your destination based on your selections. Please select from work, golf course, stay home, Rock Creek Park, parents home");
		}
		else {
			return prompt("Please select your destination based on your selections. work, golf course, stay home, Rock Creek Park");
		}
	}
	else {
		if (news === 'yes') {
			return prompt("Please select your destination based on your selections. Please select from work, job interview, NCAA, golf course, stay home, Rock Creek Park, parents home");
		}
		else {
			return prompt("Please select your destination based on your selections. Please select from work, job interview, NCAA, golf course, stay home, Rock Creek Park, parents home");
		}
	}
}

function goToWork(timeOfDay, news, email) {
	
	if (news === 'no') {
		if (email === 'no' || dog === 'no') {
			console.log("Leave house and die by zombie attack");
			destination = 'dead'
			return destination;
		}
		else {
			console.log("Leave house and die by zombie attack");
			destination = 'dead';
			return destination;
		};
	}
	else {
		if ((timeOfDay === 7) && (dog = 'yes')) {
			console.log("Take gun with you when walking dog.  Killed 3 zombies during walk.");
		}
		if (email === 'no') {
			console.log("Take gun and head to work. You survive zombie attack.  you get to work and your boss and her boss are on the zombie victim list.  So you change your destination to Verizon Center.  NCAA tournament!");
			destination = "NCAA";
			return destination;
		}
		else {
			if ((timeOfDay === 7) && (dog = 'yes')) {
			console.log("Take gun with you when walking dog.  Killed 3 zombies during walk.");
		}
			console.log("Go to Interview at National Weather Service in VA.  Take guns, SUV and emergency gear");
			destination = "job interview";
			return destination;
		};
	};
};

function newsEmail(i, news, email) {
	if (i === 7) {
		news = prompt("Its 7am.  Time to wake up to another day of city life.  You are dressed and ready to go to work.  Do you watch the morning news before leaving?");
		email = prompt("Do you check your email before leaving");
		dog = prompt("do you walk, feed and play with your dog before leaving?");
		if (news === 'yes') {
			console.log("24 hour zombie virus in city. only 1 out of 100 people affected. started at Democratic Party headquarters");
			console.log("Weather report says massive snow blizzard in Maryland, Rain and tornados in Virgina and sunny 80 degrees in DC");
			console.log("Believed to be the result of failed government experiment");
		};
		if (email === 'yes') {
			console.log("offered new job with 200k bonus in VA at the National Weather Service Special Projects facility");
			console.log("tickets to NCAA tournament at Verizon center came through.  First game at 11:00am");
		}
		destination = selectDestination(news, email);
	}
	if (i === 14) {
		news = prompt("Its 12 noon.  Do you stop and check out the news on the internet?");
		email = prompt("Do you check your email before doing anything else");
		text = prompt("do you check your text messages before moving on");
	}
	if (i === 21) {
		news = prompt("Its 7pm. Do you stop and check out the news");
		email = prompt("do you check your email before doing anything else");
		text = prompt("do you check your text messages before moving on");
	}

}


console.log("almost end of program");

for (var i = 7; (i < 24); i += 5) {
	console.log("inside for loop", i, destination);
	timeOfDay = i;
	newsEmail(i, news, email);

	switch (destination) {
		case null: 
			console.log("case is null");
			break;
		case "work":
			console.log("case is work");

			break;
		case "job interview":
			console.log("case is job interview");
		case "NCAA": 
			console.log("case is NCAA");
			break;
		case "golf course":
			console.log("case is golf course");
			break;
		case "stay home":
			console.log("stay home");
		case "Rock Creek Park": 
			console.log("case is Rock Creek Park");
			break;
		case "parents home":
			console.log("parents home");
			break;
		case "girlfriend":
			console.log("case is girlfriend");
		case "dead":
			console.log("case is dead");
		default:
			console.log("default");
	};
};



console.log("end of program");







// put code here!
document.getElementById('test').addEventListener("click", startGame);

function startGame(){
	var playerName = prompt('Enter your name, traveler...', 'Type your name');
	var age = prompt('Welcome ' + playerName + ', what is your age?', 'Type your age');
	
	if (age > 15) {
		var firstMeeting = prompt('Ah.. a wise wizard ... Would you like to meet Gandalf or Saruman?', 'Type Gandalf or Saruman');
		if (firstMeeting === "Gandalf"){
			var animalTransport = prompt('Gandalf hands you a ring with golden letters on it, and tells you to head to Mordor.  Do you take a horse or a donkey?', 'Type horse or donkey');
				if (animalTransport === "horse"){
					var gap = prompt('Your horse reaches a rickety bridge... do you go over with the horse, walk across the bridge or the tire swing to get across?', 'type horse, bridge or swing');
						switch(gap) {
						    case "bridge":
						        prompt('The bridge collapses and you fall 1000 feet to your death', 'womp... try again!');
						        break;
						    case "swing":
						        prompt('The swing breaks and you fall 1000 feet to your death', 'womp... try again!');
						        break;
						     case "horse":
						     	prompt('The bridge collapses under the weight of you and your horse.. you fall 1000 feet to your death', 'womp... try again!');
						    default:
						        prompt('Please try again and enter a valid response!');
						}
				} else if (animalTransport === "donkey") {
					prompt('Who chooses a donkey over a horse? Really? Your donkey dies of exhaustion .. as do you.', 'Try again!');
				} else {
					prompt('Please try again and enter a valid response!');
				}
		} else if (firstMeeting === "Saruman"){
			var decision = prompt('Saruman whips out his wand and starts cursing you.  Do you run or fight?', "type 'run' or 'fight'");
				if (decision === 'run'){
					prompt('You get 20ft from Saruman before you feel a sharp pain run through your body - you realize running was not the best idea..', 'womp... try again!');
				} else if (decision === 'fight') {
					var trust = prompt('You blind Saruman with a bright spell and run for your life... Outside of his castle you run into Gollum... Do you decide to trust him?', 'Y/N');
				}  if (trust === 'Y') {
					var number = prompt('Gollum asks you to choose a number 1-10','Type a number 1-10');
					for (i = 1; i <= number; i++){
						prompt(i, 'press ok')
					}
					var follow = prompt('Gollum says "you picked my lucky number!" Follow me to mordor I will show the way! Do you follow him?', 'Y/N')
						if (follow === "Y"){
							prompt('You follow Gollum to Mordor and destroy the ring by throwing it into a bunch of liquid hot magma! CONGRATS!');
						} else if (follow === "N"){
							prompt('Gollum leaves you and you are eaten by a bunch of Orcs.. Sorry!', 'Try again!');
						} else {
							prompt('Please try again and enter a valid response!');
						}

				} else if (trust === 'N'){
					prompt('You turn from Gollum and he stabs you in the back - Sorry!', 'Try again!');
				} else {
					prompt('Please try again and enter a valid response!');
				}
	} else {
		prompt('Please try again and enter a valid response!');
	}} 
	else if (age < 15){
		prompt('You are too young to play, my friend.  Come back later!');
	} 
}

// switch (age) {
// 		case "Banana":
// 			prompt('Ahh, a young padawan!')
// 			break;
// 		default:
// 			prompt('A wise master, I see')
// 			break;
// 	}

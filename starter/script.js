$(function()
{
	
var answer = null;
do
{
  answer = prompt("You wake up on a deserted beach. The sun is shining. There is no sign of civilization. Do you WALK inland or SCREAM for help?").toUpperCase();
  switch(answer) {
    case 'WALK':
      answer = prompt("You reach a lush forest of palm and coconut trees. After an hour of walking you find an old worn-down suitcase. Do you OPEN or IGNORE it?").toUpperCase();
      break;
      switch(answer) {
        case 'OPEN':
        answer = prompt("You opened it. Inside you find a sharp hatchet. Do you PICK it up or LEAVE it?").toUpperCase;
          break;
		switch(answer) {
			case 'PICK':
			answer = prompt{"Just as you pick up the hatchet, an evil parrot swoops down to attack you! Do you FIGHT or RUN?"}.toUpperCase
			break;
			switch(answer) {
				case 'FIGHT':
				answer = prompt("You swung your hatchet at the parrot and clipped off some of its feathers. The parrot flies away. Good job!")
				break;
				case 'RUN':
				answer = prompt("Whilst running you accidentally drop the hatchet on your toe! The parrot lands on your shoulder and pecks at your neck. You eventually succumb to your wounds...")
			}
			case 'LEAVE':
			answer = prompt{"An evil parrot swoops down to attack you! Don't you wish you had taken that Hatchet? Do you FIGHT or RUN?"}.toUpperCase
			break;
			switch(answer) {
				case 'FIGHT':
				answer = prompt("You hurl your fist at the parrot and punch it right in the beak! The parrot flies away. Good job!")
				break;
				case 'RUN':
				answer = prompt("Whilst running you accidentally trip on a fallen tree branch! The parrot lands on your shoulder and pecks at your neck. You eventually succumb to your wounds...")
				break;
			}
		}   
        case 'IGNORE':
          answer = prompt("Just as you walk past the suitcase, an evil parrot swoops down to attack you! Do you FIGHT or RUN? ");
		  switch(answer) {
				case 'FIGHT':
				answer = prompt("You hurl your fist at the parrot and punch it right in the beak! The parrot flies away. Good job!")
				break;
				case 'RUN':
				answer = prompt("Whilst running you accidentally trip on a fallen tree branch! The parrot lands on your shoulder and pecks at your neck. You eventually succumb to your wounds...")
				break;
			}
          break;
    }
    case 'SCREAM':
      answer = prompt("No one hears you so you take a nap. How many hours do you nap for?")
       if (isNaN(answer)){
          alert("That's not a number");
        }
        else {
            var number = parseInt(answer);
            if (number <= 1){
              answer = prompt("You took a short nap and wake up feeling refreshed.")
            }
            else if (number > 1){
              answer = prompt("You took a long lap and wake up during the night.")

            }
          }
      break;
    default:
      alert("I didn't understand your choice. Refresh the page and start over. Sorry.");
  }
}while(answer != "QUIT")

});
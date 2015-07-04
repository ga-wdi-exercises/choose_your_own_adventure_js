// put code here!
// steal storyline from LPTHW text adventure
/*Rules

Goal Using what you know about data types, variables, operators,
conditional blocks, and accepting user input, create a text-based game that
allows the user to arrive at different "destinations" based on the inputs they
type.

Any path the user goes down must ask them at least
3 questions(more if you want!)

There must be a minimum of 7 total destinations the user could arrive at based
on their responses.(again more if you want!)
For at least 1(also can be more!) of the questions asked, there must be more
then 2 possible user responses
Adventure must contain at least one integer response and one string response
Adventure must contain at least one functional loop in the code base
hint you may need parseInt() and toString()*/



//'What would you like to see while you're here?''
//if response is 'sunshine', 'candy', or 'unicorns', direct them to the
//relevant room.

//If anything else, direct them to "darkness", "hunger", "or "wolves".
function anteRoom(playerName) {
  var playerChoice = prompt("Hi there, " + playerName +"! What would you like to see while you're here?");
  console.log(playerChoice.toUpperCase());

  if (playerChoice.toUpperCase() ===  "SUNSHINE") {
    sunshineRoom();
  } else if (playerChoice.toUpperCase() === "CANDY") {
    candyRoom();
  } else if (playerChoice.toUpperCase() === "UNICORNS") {
    unicornsRoom();
  } else {
    console.log("send them to the bad place");
  }
}

//Solve a puzzle in each room. If successful in happy room, progress to next
//happy room. If in unhappy room, move to next happy room.

//If unsuccessful in happy room, assign to unhappy room. If in unhappy
//room, move to next unhappy room.

//If successful in either last room, move to final puzzle room.
function sunshineRoom() {
  console.log("sunshine!");
}

function candyRoom() {
  console.log("candy!");
}

function unicornsRoom() {
  console.log("unicorns!");
}

//Final puzzle: sends you either to happiness castle or pit of despair.



//Intro
//Welcome to the land of sunshine, candy, and unicorns! Careful, though --
//some parts around here aren't so friendly.
//'What's your name?''
// **save name as var**

function playGame() {
  alert("Welcome to the land of SUNSHINE, CANDY, and UNICORNS! Careful, though -- some parts around here aren't so friendly.");

  var playerName = prompt("What's your name?");
  console.log(playerName);

  anteRoom(playerName);
}

playGame();

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
function anteRoom(playerName, rooms) {
  var playerChoice = prompt("Hi there, " + playerName +"! What would you like to see while you're here?");
  console.log(playerChoice.toUpperCase());
  rooms.push(playerChoice.toUpperCase());

  if (playerChoice.toUpperCase() ===  "SUNSHINE") {
    sunshineRoom(rooms);
  } else if (playerChoice.toUpperCase() === "CANDY") {
    candyRoom(rooms);
  } else if (playerChoice.toUpperCase() === "UNICORNS") {
    unicornsRoom(rooms);
  } else {
    console.log("send them to the bad place");
  }
//Add handler for blank response
}

//Solve a puzzle in each room. If successful in happy room, progress to next
//happy room. If in unhappy room, move to next happy room.

//If unsuccessful in happy room, assign to unhappy room. If in unhappy
//room, move to next unhappy room.

//If successful in either last room, move to final puzzle room.
function sunshineRoom(rooms) {
  //putting on sunglasses sends you to the room of darkness.
  var rooms = rooms;
  var playerChoice = prompt("Welcome to the land of sunshine! Nothing can hurt us here!\n\nGosh, it sure is hot and bright, though.\n\nOh look! A nice man selling sunglasses and frosty lemonade! What should we buy from him?")

  if (playerChoice.toUpperCase() === "LEMONADE") {
    console.log("lemonade");
    candyRoom(rooms);
  } else if (playerChoice.toUpperCase() === "SUNGLASSES") {
    console.log("sunglasses");
    alert("Everything is...is going dark...\n\n\nso very dark...")
    darknessRoom(rooms);
  } else {
    alert("I don't understand that");
    console.log("improper input")
    sunshineRoom();
  }

}

function candyRoom(rooms) {
  console.log("candy!");
}

function unicornsRoom(rooms) {
  console.log("unicorns!");
}

function darknessRoom(rooms) {
  console.log("darkness");
}

function hungerRoom(rooms) {
  console.log("hunger");
}

function wolvesRoom(rooms) {
  console.log("wolves!");
}


//Final puzzle: sends you either to happiness castle or pit of despair.


//Intro
//Welcome to the land of sunshine, candy, and unicorns! Careful, though --
//some parts around here aren't so friendly.
//'What's your name?''
// **save name as var**

function playGame() {
  var rooms = [];
  alert("Welcome to the land of SUNSHINE, CANDY, and UNICORNS! Careful, though -- some parts around here aren't so friendly.");

  var playerName = prompt("What's your name?");
  console.log(playerName);
//add handler for blank response
  anteRoom(playerName, rooms);
}

playGame();

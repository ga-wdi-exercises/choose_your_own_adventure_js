var name = prompt ("What's your name"); alert ("Nice to meet you" + " " + name + "." + " " + "You just won a free vacation!");

var destination = prompt ("Pick a destination: Fiji, Italy, South Africa (F,I,S) ");

if (destination==="F") {
  alert ("Great! Fiji has excellent beaches.");
  var whoIsGoing = prompt ("How many people, including you, will be going?");

        if (whoIsGoing < 3) {
            alert ("Fabulous! We’ll book you and your guests at the Fiji Cabana located right on the beach.");
        }
        else if (whoIsGoing < 5 ) {
            alert ("You’ll need a little more room so we’ll book a two-bedroom suite for you and your guests.");
        }
        else {
            alert ("Woah! That’s more people than we expected. You’ll have to foot some of the bill!");
        }

  } else if (destination==="I") {
    alert ("Congrats! Your going to Italy!");
    var whoIsGoing = prompt ("How many people, including you, will be going?");

        if (whoIsGoing < 3) {
            alert ("Fabulous! We’ll book you and your guests on the riviera.");
        }
        else if (whoIsGoing < 5 ) {
            alert ("Great! There's an awesome hotel a few blocks from the Leaning Tower of Pisa.");
        }
        else {
            alert ("Woah! That’s more people than we expected. You’ll have to foot some of the bill!");
        }
  }
  else if (destination==="S") {
    alert ("Awesome! Maybe you can go on a safari while there.");
    var whoIsGoing = prompt ("How many people, including you, will be going?");

        if (whoIsGoing < 3) {
            alert ("Fabulous! We’ll book you at a hotel in Cape Town");
        }
        else if (whoIsGoing < 5 ) {
            alert ("We couldn't book all of you at the same hotel. Some guests will stay in Cape Town and the others in Johannesburg...sorry.");
        }
        else {
            alert ("Woah! That’s more people than we expected. You’ll have to foot some of the bill!");
        }
  }
  else {
    alert ("Please pick a difference destination.");
  }


var departingCity = prompt ("Would you prefer to fly out of New York or California?"); alert ("Great," + " " + departingCity + " " + "it is.");

var timeOfDay = prompt ("Would you prefer morning, afternoon, or evening? (m,a,e)");


  if (timeOfDay ==="m") {
      alert ("You're flight leaves at 4am and you'll have 2 layovers.");
  }
  else if (timeOfDay ==="a") {
      alert ("Good news! The flight takes off at Noon and everyone got bumped to first class!");
  }
  else if (timeOfDay ==="e") {
      alert ("You're flight leaves at 6pm. The flight's are full so you and your guests all get middle seats....womp womp.");
  }

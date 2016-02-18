firstTimer();
function firstTimer(){
  var temp = prompt("Welcome to Washington, D.C.! I hope you're excited to be be here. Are you visiting when the temperature is hot or cold? Enter 'H' for hot or 'C' for cold.");
  if (temp === "H") {
    location1();
  }
  else if (temp === "C") {
    location2();
  }
}
//==============================================
function location1(){
    var place = prompt("Great! Do you prefer to be inside or outside? Enter 'I' for inside or 'O' for outside.");
    if (place === "O") {
      boatOrRUn();
    }
    else if (place === "I") {
      museumOrHouse();
    }
    else {
      alert("Please enter either 'I' or 'O'.");
      location1();
    }
  }
  //===========================================
  function location2(){
    var place = prompt("Great! Do you prefer to be inside or outside? Enter 'I' for inside or 'O' for outside");
    if (place === "O") {
      skateOrZoo();
    }
    else if (place === "I") {
      sportOrMonument();
    }
    else {
      alert("Please enter either 'I' or 'O'.");
      location2();
    }
  }
  //==============================================
  function boatOrRUn() {
    var heatOut = prompt("It's hot out! Do you want to go for a run around the monuments or take out a paddle board on the Potomac River? Enter 'R' for a run or 'B' for boating.");
    if(heatOut === "R") {
      alert("Make sure to hydrate and bring a camera to capture the sights!");
    }
    else if (heatOut === "B") {
      alert("Bring your sunglasses and put on sunscreen! Remember: Don't fall in. The water is nasty!");
    }
    else {
      alert("Please enter either 'R' or 'B'.");
      boatOrRUn();
    }
  }
  //==================================================
function museumOrHouse() {
  var heatIn = prompt("Too hot for you to be outdoors? That's okay. Do you want to go to a museum or take a tour of The White House? Enter 'M' for museum or 'W' for The White House.");
  if (heatIn === 'M') {
    alert("There are so many to choose from! There are no admission fees at ANY of the Smithsonian museums, so visit as many as you like.");
  }
  else if (heatIn === "W") {
    alert("I hope you ordered tickets in advance! Maybe you'll see the President...or at least his dogs!");
  }
  else {
    alert("Please enter either 'M' or 'W' to continue.");
    museumOrHouse();
  }
}
//========================================================
function skateOrZoo() {
  var coldOut = prompt("You are brave! It can get pretty cold in D.C. Do you want to go to the zoo or go ice-skating? Enter 'Z' for the zoo or 'S' for ice-skating.");
  if (coldOut === "Z") {
    alert("Go at night to enjoy the Zoo-Lights. Or go during the day to see tons of animals, including the new baby panda bear!");
  }
  else if (coldOut === 'S') {
    alert("The Sculpture Gallery on the National Mall offers ice-skating in the winter. Enjoy and grab a hot chocolate to warm up when you're done!");
  }
  else {
    alert("Please enter either 'Z' or 'S' to continue.");
    skateOrZoo();
  }
}

//===================================================
function sportOrMonument() {
  var coldIn = prompt("I don't blame you! Stay inside to keep warm. Do you want to go watch a Capitals hockey game or take a ride up the Washington Monument? Enter 'G' for a Caps game or 'WM' for the Washington Monument.");
  if (coldIn === "G") {
    alert("GO CAPS. Bring some money for a Caps shirt and food at the game. Have a blast!");
  }
  else if (coldIn === "WM") {
    alert("The view up here is great! Especially in the winter when there are no leaves on the trees. Get there early to get a ticket! And don't forget your camera.");
  }
  else {
    alert("Please enter either 'G' or 'WM' to continue.");
    sportOrMonument();
  }
}
function end() {
  alert("Thanks for coming! Enjoy your visit and come again soon!")
}

//Start!
alert("You're on a roadtrip.\n\nHeavy rain starts hammering against your window.\n\nYou swerve against the wind as the storm picks up and pushes dangerously against your car.\n\nYou stop on the side of the road, unable to keep driving.\n\nJust visible through the rain, you see an old house on a hill with the lights on.");
var enterHouse = prompt("Do you want to go ? (Y/N)");
enterHouse = enterHouse.toLowerCase();

//First choice
if (enterHouse == "y"){
  alert("You get out of the car and run up the hill. \n\nYou miss the sign that say 'Do Not Enter'")
  var knockOnDoor = prompt("Do you want to knock on the door or try the handle? (knock/handle)");
  knockOnDoor = knockOnDoor.toLowerCase();
}
else if (enterHouse == "n") {
    stayInCar();
}
else {
  refresh();
}

//Second choice
if (knockOnDoor == 'knock'){
  alert("Nobody answers.\n\nTry opening the door yourself.");
  refresh();
}
else if (knockOnDoor == 'handle') {
 alert("The door loudly creeks open.\n\nThe foyer is pitch black and it takes your eyes a second to adjust to the darkenss.");
 var callOut = prompt("It's kinda creepy.\n\nDo you call out or go back to your car? (Call/Car)");
 callOut = callOut.toLowerCase();
}
else {
  refresh()
}

// Third choice
if (callOut == 'call'){
  alert("A butler emerges from the depths of the dark and greets you with an icy cold smile.");
  var stayTheNight = prompt("'I see you've come a long way, my friend.\n\nCan I offer you a room to wait out the storm?' (Y/N)");
  stayTheNight = stayTheNight.toLowerCase();
}
else if (callOut == 'car') {
  stayInCar();
}
else {
  refresh();
}

//Fourth Choice
if (stayTheNight == 'y'){
  alert("The butler leads the way up to a bed room.\n\nThis seems to be where the light is coming from.\n\nThe four poster bed and wood fire look inviting from the storm but there's an eerie portrait of an old man hanging on the wall opposite your bed.\n\nYour nervousness catches the attention of the butler who explains\n\n'That's my late master.\nHe passed away several years ago.\nHe left the house to me and I've been caring for it ever since.'");
  alert("'I see you've come a long way, my friend.\n\nCan I offer you a room to wait out the storm?' (Y/N)");
  var sleepOver =
}
else if (stayTheNight == 'n') {
  run();
}
else {
  refresh();
}

//sleepOver
if (sleepOver == "y"){

}
else if (sleepOver == "n") {

}
else {
  
}
//windowExit
if (windowExit == "window"){

}
else if (windowExit == "exit") {

}
else {
  refresh();
}
//Endings
function refresh(){
  alert("Please refresh and try again.")
}
function stayInCar(){
  alert("You stay in the car until it stops raining and carry on your roadtrip safely.");
}
function run(){
  alert("You start to run away but the house starts to attack you.\n\n Tripping you up with the carpet and slamming doors in your face.\n\nThe front door is locked");
  var windowExit = prompt("You see a window, do you smash it and try to escape or find another exit? (window/exit)");
  windowExit = windowExit.toLowerCase();
}

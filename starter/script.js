console.log("Booting up Avengers Initiative...");
console.log("You hop on your motorcycle. You zoom weaving in out of the battlefield, but you come to a huge ravine");
var pathInput = prompt("Gas it to make jump or jump off the motorcycle (Choose gas or jump)")

if (pathInput == "jump") {
  console.log("Hydra Forces destroy the city you do not save the day");
}
if (pathInput == "gas") {
  console.log("You make jump only to face a horde of Hydra Forces!");
  var pathInput = prompt("Throw Shield or take cover (Choose throw or cover)")
}
if (pathInput == "throw") {
  console.log("Ping Ping Ping. Your enemies crumble before your might, you catch your shield as it returns. But you see the Iron Man suit has been Hacked!");
  var pathInput = prompt("Fight Iron Man or Call for Back up (choose f or c)")
}
if (pathInput == "f") {
  console.log("You can't take out Robert Downey Jr… How will he be in another Iron Man movie!");
}
if (pathInput == "c") {
  console.log("Hulk and Thor Show up. Awaiting Orders");
  var pathInput = prompt("Hulk Smash or Hammer Throw (Choose hs or ht)");
}
if (pathInput == "hs") {
  console.log("Hulk literally peels the the suit off Tony and smashes it to pieces. The Threat has been neutralized. Good Choice you saved the day! We never had  a doubt!");
}
if (pathInput == "ht") {
  console.log("Thor flings his hammer full force at Iron Man. But Iron Man dodges and flies up into the sky!");
  var pathInput = prompt("Chase him or Let him get away (Choose c or ga)")
}
if (pathInput == "c") {
  console.log("You grab your hammer and catch up. You summon a lighting bolt and strike Iron Man down. Don’t worry Tony had a safe landing and his suit has been fried. The Threat has been neutralized. Good Choice you saved the day Avengers! We never had  a doubt!");
}
if (pathInput == "ga") {
  console.log("Why would you do that? We thought you had what it takes to be an Avenger.");
}
if (pathInput == "cover") {
  console.log("You hide behind your shield but Hydra is taking out civilians! You can’t just sit there…Be a Hero!");
  var pathInput = prompt("Be a hero or Be a coward (Choose hero or coward)")
}
if (pathInput == "hero") {
  console.log("You full on charge the Hydra forces! Each one falls quicker than the last. You spot a bomb about to go off!");
  var pathInput = prompt(" Defuse bomb or run for dear life (choose defuse or run)")
}
if (pathInput == "run") {
  console.log("BOOOOOM! Did you really think that you could out run a bomb?");
}
if (pathInput == "defuse") {
  console.log("Red or Green Wire?");
  var pathInput = prompt("red or green?")
}
if (pathInput == "red") {
  console.log("BOOOOOOOM");
}
if (pathInput == "green") {
  console.log("Good Choice you saved the day Cap! We never had  a doubt!");
}
if (pathInput == "coward") {
  console.log("Hulk comes up behind you and kicks you into outer space. Game Over Man! Game Over!");
}

console.log("Hello World!");

//Opening Question
var who = prompt("What are you? [A: Elf, B: Chef, C: Red Shirt ]");
if (who == "a" || who == "A") {
  var elf = prompt("Will you go on Usidore's Quest? [A: Yes, B: No]");
} else if (who == "b" || who == "B") {
  var chef = prompt("Will you go on Usidore's Quest? [A: Yes, B: No]");
} else if (who == "c" || who == "C") {
  var red = prompt("Will you go on Usidore's Quest? [A: Yes, B: No]");
//} else {
//  alert("Try Again!");
};

//ELF
if (elf == "a" || elf == "A") {
  var elfYes = prompt("What do you do about the Flower? [A: Pluck, B: Stomp, C: Talk]");
} else if (elf == "b" || elf == "B") {
  alert("You are now a chipmunk!");
  var chipmunk = prompt("What do you do about the Flower? [A: Attack, B: Ignore]");
//} else {
//  alert("Try Again!");
};

//ELF YES
if (elfYes == "a" || elfYes == "A") {
  var elfYesPluck = prompt("How much do you pay the Bandits? [A: 0, B: 100, or B: 200]");
} else if (elfYes == "b" || elfYes == "B") {
  alert("You Lose!");
} else if (elfYes == "c" || elfYes == "C") {
  var elfYesTalk = prompt("Skip to: What do you do about the Gorilla? [A: Fight, B: Ask]");
//} else {
//  alert("Try Again!");
};

//ELF YES PLUCK
if (elfYesPluck == "a" || elfYesPluck == "A" || elfYesPluck == 0) {
  var elfYesPluck0 = prompt("What do you do about the Gorilla? [A: Flower, B: Money, C: Fight, D: Ask]");
} else if (elfYesPluck == "b" || elfYesPluck == "B" || elfYesPluck == 100) {
  alert("You Lose!");
} else if (elfYesPluck == "c" || elfYesPluck == "C" || elfYesPluck == 200) {
  var elfYesPluck200 = prompt("What do you do about the Gorilla? [A: Flower, B: Fight, C: Ask]");
//} else {
//  alert("Try Again!");
};

//ELF YES TALK
if (elfYesTalk == "a" || elfYesTalk == "A") {
  alert("You Lose!");
} else if (elfYesTalk == "b" || elfYesTalk == "B") {
  alert("You've won the Adventure!")
};

//ELF YES PLUCK 0
if (elfYesPluck0 == "a" || elfYesPluck0 == "A") {
  alert("You Lose!");
} else if (elfYesPluck0 == "b" || elfYesPluck0 == "B") {
  alert("You Lose!");
} else if (elfYesPluck0 == "c" || elfYesPluck0 == "C") {
  alert("You Lose!");
} else if (elfYesPluck0 == "d" || elfYesPluck0 == "D") {
  alert("You've won the Adventure!");
//} else {
//  alert("Try Again!");
};

//ELF YES PLUCK 200
if (elfYesPluck200 == "a" || elfYesPluck200 == "A") {
  alert("You Lose!");
} else if (elfYesPluck200 == "b" || elfYesPluck200 == "B") {
  alert("You Lose!");
} else if (elfYesPluck200 == "c" || elfYesPluck200 == "C") {
  alert("You've won the Adventure!")
};

//CHEF
if (chef == "a" || chef == "A") {
  var chefYes = prompt("What do you do about the Flower? [A: Pluck, B: Stomp]");
} else if (chef == "b" || chef == "B") {
  alert("You are now a chipmunk!");
  var chipmunk = prompt("What do you do about the Flower? [A: Attack, B: Ignore]");
};

//CHEF YES
if (chefYes == "a" || chefYes == "A") {
  var chefYesPluck = prompt("How much do you pay the Bandits? [A: 0, B: 100, C: 200]");
} else if (chefYes == "b" || chefYes == "B") {
  var chefYesStomp = prompt("How much do you pay the Bandits? [A: 0, B: 100, C: 200]");
};

//CHEF YES PLUCK
if (chefYesPluck == "a" || chefYesPluck == "A" || chefYesPluck == 0) {
  alert("You Lose!");
} else if (chefYesPluck == "b" || chefYesPluck == "B" || chefYesPluck == 100) {
  alert("You Lose!");
} else if (chefYesPluck == "c" || chefYesPluck == "C" || chefYesPluck == 200) {
  var chefYesPluck200 = prompt("What do you do about the Gorilla? [A: Cook, B: Fight]");
};

//CHEF YES STOMP
if (chefYesStomp == "a" || chefYesStomp == "A" || chefYesStomp == 0) {
  alert("You Lose!");
} else if (chefYesStomp == "b" || chefYesStomp == "B" || chefYesStomp == 100) {
  alert("You Lose!");
} else if (chefYesStomp == "c" || chefYesStomp == "C" || chefYesStomp == 200) {
  var chefYesStomp200 = prompt("What do you do about the Gorilla? [A: Cook, B: Fight]");
};

//CHEF YES PLUCK 200
if (chefYesPluck200 == "a" || chefYesPluck200 == "A") {
  alert("You've won the Adventure!");
} else if (chefYesPluck200 == "b" || chefYesPluck200 == "B") {
  alert("You Lose!");
};

//CHEF YES STOMP 200
if (chefYesStomp200 == "a" || chefYesStomp200 == "A") {
  alert("You Lose!");
} else if (chefYesStomp200 == "b" || chefYesStomp200 == "B") {
  alert("You Lose!");
};

//RED
if (red == "a" || red == "A") {
  var redYes = prompt("What do you do about the Flower? [A: Pluck, B: Stomp]");
} else if (red == "b" || red == "B") {
  alert("You are now a chipmunk!");
  var chipmunk = prompt("What do you do about the Flower? [A: Attack, B: Ignore]");
};

//RED YES
if (redYes == "a" || redYes == "A") {
  alert("You Lose!");
} else if (redYes == "b" || redYes == "B") {
  alert("You Lose!");
};

//CHIPMUNK
switch (chipmunk) {
  case "a":
    var chipmunkAttack = prompt("What do you do about the Bandits? [A: Attack, B: Ignore]");
    break;
  case "A":
    var chipmunkAttack = prompt("What do you do about the Bandits? [A: Attack, B: Ignore]");
    break;
  case "b":
    var chipmunkIgnore = prompt("What do you do about the Bandits? [A: Attack, B: Ignore]");
    break;
  case "B":
    var chipmunkIgnore = prompt("What do you do about the Bandits? [A: Attack, B: Ignore]");
    break;
};

//CHIPMUNK ATTACK
switch (chipmunkAttack) {
  case "a":
    var chipmunkAttackAttack = prompt("What do you do about the Gorilla? [A: Attack, B: Talk]");
    break;
  case "A":
    var chipmunkAttackAttack = prompt("What do you do about the Gorilla? [A: Attack, B: Talk]");
    break;
  case "b":
    var chipmunkAttackIgnore = prompt("What do you do about the Gorilla? [A: Attack, B: Talk]");
    break;
  case "B":
    var chipmunkAttackIgnore = prompt("What do you do about the Gorilla? [A: Attack, B: Talk]");
    break;
};

//CHIPMUNK IGNORE
switch (chipmunkIgnore) {
  case "a":
    var chipmunkIgnoreAttack = prompt("What do you do about the Gorilla? [A: Attack, B: Talk]");
    break;
  case "A":
    var chipmunkIgnoreAttack = prompt("What do you do about the Gorilla? [A: Attack, B: Talk]");
    break;
  case "b":
    var chipmunkIgnoreIgnore = prompt("What do you do about the Gorilla? [A: Attack, B: Talk]");
    break;
  case "B":
    var chipmunkIgnoreIgnore = prompt("What do you do about the Gorilla? [A: Attack, B: Talk]");
    break;
};

//CHIPMUNK ATTACK ATTACK
switch (chipmunkAttackAttack) {
  case "a":
    alert("You've won the Adventure!");
    break;
  case "A":
    alert("You've won the Adventure!");
    break;
  case "b":
    alert("You Lose!");
    break;
  case "B":
    alert("You Lose!");
    break;
};

//CHIPMUNK ATTACK IGNORE
switch (chipmunkAttackIgnore) {
  case "a":
    alert("You Lose!");
    break;
  case "A":
    alert("You Lose!");
    break;
  case "b":
    alert("You Lose!");
    break;
  case "B":
    alert("You Lose!");
    break;
};

//CHIPMUNK IGNORE ATTACK
switch (chipmunkIgnoreAttack) {
  case "a":
    alert("You Lose!");
    break;
  case "A":
    alert("You Lose!");
    break;
  case "b":
    alert("You Lose!");
    break;
  case "B":
    alert("You Lose!");
    break;
};

//CHIPMUNK IGNORE IGNORE
switch (chipmunkIgnoreIgnore) {
  case "a":
    alert("You Lose!");
    break;
  case "A":
    alert("You Lose!");
    break;
  case "b":
    alert("You Lose!");
    break;
  case "B":
    alert("You Lose!");
    break;
};

alert("Hello weary traveler");

var apocPref = prompt("Do you want to experience the apocalypse? (Y, N)");
if (apocPref === "Y") {
  alert("Good on ya! Let's get going");
} else {
  alert("Don't lieeee. You've always wondered if you could survive it. Let's get going, the apocalypse is almost here.");
}

var weapTrans = prompt("Pick your weapon/vehicle combination. Bow/bike (B), Gun/Car (G), Pacifism/Feet (P)");
if (weapTrans === "B") {
  alert("Good choice honestly. Probably the right one. Agile. Dynamic. Sustainable.");
} else if (weapTrans === "G") {
  alert("You're a brute, but at least you'll survive for a while. Gas and ammunition dependent, and the zombies will hear you a mile off.");
} else {
  alert("Ok good luck with that, Gandhi.");
}

var dontMatter = prompt("A zombie hoard climbs across the closest hill. How many do you want to fight? (4, 8, 12)");
if (isNaN(dontMatter) === true) {
  dontMatter = " And you didn't even put in a number! You deserve your fate.";
} else {
  dontMatter = "";
}

var zombieCount = 0;
for (var i = 0; i < 20; i++) {
  zombieCount += Math.round(Math.random());
}

alert("Have you learned nothing? Zombies don't care what you want. There are exactly " + zombieCount + " zombies coming." + dontMatter);
alert("The battle for your life is about to begin. Good luck!");

if (zombieCount < 6) {
  if (weapTrans === "B") {
    alert("You pick them off easily. Retrieve your ammo. And go on your way.");
  } else if (weapTrans === "G") {
    alert("You shoot them from up close, because you enjoy that for some reason. Used up some of your limited ammo, and more are likely coming to the noise.");
  } else {
    alert("You kinda just...walk away.");
  }
} else if (zombieCount < 11) {
  if (weapTrans === "B") {
    alert("You pick them all off. But barely. And one of your arrows broke and is irretrievable.");
  } else if (weapTrans === "G") {
    alert("You kill them all. And feel weird about how much you enjoy it.");
  } else {
    alert("You try to walk away again. They catch you. You ask to be let go. They don't speak English. The eat you. You don't enjoy it");
  }
} else {
  if (weapTrans === "B") {
    alert("You decide this a not a fight you can win. You jump on your bike and appear to escape this group. Hopefully your luck continues!");
  } else if (weapTrans === "G") {
    alert("You took them all out, but used up the bulk of your ammo, got injured, and are surrounded by two new hoards who heard the battle. Good luck...");
  } else {
    alert("You weren't even close to making it. At least you felt morally superior.");
  }
}

alert("GG!");

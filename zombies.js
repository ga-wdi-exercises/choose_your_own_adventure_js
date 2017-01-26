var start = "Hello! What is your name?";

var add = function(x,y) {
  console.log(x*y);
}

var nameInput = function(x) {
  return "We must hurry, " + x + "!! , Walkers are approaching! But first.., how many zombies have you killed ?";
};
console.log(nameInput);

var zombiesKilled = function(x) {
  if (x >= 500) {
    return("Zombie Master!! You can lead us! Do you want to take the [J]ungle route or [C]oncrete route?");
  } else if (x < 100) {
    return("Kill more zombies!! Choose your weapon: " + weaponRookie);
  } else if (x >= 100 || x < 500) {
    return("Great!! You can't lead a group yet, but you can assist our leaders. Who do you want to assist? [R]ick or [N]egan?");
  }
};
console.log(zombiesKilled);

var weaponMaster = ['Bow & Arrow', 'Samurai', 'AK47','Lucille']
var weaponLeader = ['Bow & Arrow', 'Samurai', 'Lucille']
var weaponRookie = ['Kitchen Knife', "Stick"]

var route = function (x) {
  if (x == "J") {
    console.log("Off to the Jungle! Choose your weapon:");
    return weaponMaster;
  } else if (x == "C") {
    console.log("Good choice! Choose your weapon:");
    return weaponMaster;
  }

}; console.log(route);

var leader = function (x) {
  if (x == "R") {
    console.log("Wise choice! Choose your weapon:");
    return weaponLeader;
  } else if (x == "N") {
    console.log("You just got Lucilled by Negan! Start over and choose wisely");
    return start;
  }

}; console.log(leader);

var newbie = function (weaponRookie) {
  if (weaponRookie[0]) {
    return("Be Smart!");
  }
};
console.log(newbie);

console.log("Frodo of the Shire, you are trying to reach Mount Doom to destroy the Ring of Power");
var orcNamesArray = ["Azog", "Gnash", "Ugluk", "Gorbag", "Snaga", "Shagrat"];
var randomNumber = Math.floor((Math.random() * 6) + 1);
var orcNames;
var cliffOrRiver = prompt("What should I do? Climb down this cliff or take a canoe down the river Anduin? Type cliff or river");

if (cliffOrRiver == "cliff"){
  console.log("You climb carefully down the cliff using an elfen rope.");
  var thruOrAroundMarsh = prompt("Is it safe to go across this marsh, or should I go around? Type across or around");
  if (thruOrAroundMarsh == "across"){
    console.log('While trying to wade through the discusting marsh, the dead rise up around you.');
    var fightOrRun = prompt("Should I fight the zombies or run away screaming. Type fight or run");
    if (fightOrRun == "fight"){
      console.log('DEATH by zombie!');
    }else if (fightOrRun == "run"){
      console.log('CAPTURED by ' + randomNumber + 'orcs! Before they kill you they tell you their names:');
      for (var i=0; i<randomNumber; i++){
        console.log(orcNames= orcNamesArray[i]);
      }
    }
  }else if (thruOrAroundMarsh == "around"){
    console.log('While making your way around the marsh you are attacked by giant mosquitoes. You come to a fork in the road');
    var stairsOrRoad = prompt("Up the steep stairs or take the long road? Type stairs or road");
    if (stairsOrRoad == "stairs"){
      var oneTwoOrThree = prompt('You climb up the precarious stairs to a cave. There are three passages. Which to take? Type 1,2,or 3.');
      if (oneTwoOrThree == 1){
        console.log('DEATH by Shelob!');
      }else if (oneTwoOrThree == 2){
        console.log('DEATH by Gollum!');
      }else {
        console.log('MOUNT DOOM! YOU HAVE WON! THE DARK LORD IS DESTROYED ALONG WITH HIS RING');
      }
    }else if (stairsOrRoad == "road"){
      console.log('TORTURED by Nazgul!')
    }
  }
}else if (cliffOrRiver == "river"){
  console.log('Making your way down the meandering river');
  var leftOrRightDownRiver = prompt("The river splits ahead, should I go left or right? Type left or right");
  if (leftOrRightDownRiver == "left"){
    console.log('Taking the left way');
    var desertOrWait = prompt("Should I try to cross this desert or sit and wait. Type cross or wait");
    if (desertOrWait == "cross"){
      console.log("DIE of thirst in the desert");
    }else if (desertOrWait == "wait"){
      console.log("RESCUED BY EAGLE! CARRIED TO MOUNT DOOM! THE DARK LORD IS DESTROYED ALONG WITH HIS RING")
    }
  }if (leftOrRightDownRiver == "right"){
    console.log('Taking the right way');
    var fallsOrBanks = prompt("Should I go over these falls or get out of the canoe onto the river banks. Type falls or banks");
    if (fallsOrBanks == "falls"){
      console.log("Over the falls? Are you crazy? DEATH by drowning!");
    }else if (fallsOrBanks == "banks"){
      console.log("DEATH. Accidentally stepped on by an Ent")
    }
  }
}

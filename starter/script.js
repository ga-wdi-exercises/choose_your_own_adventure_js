
function play(){
var name = prompt("What is your name?");

var fear = prompt("Hello, "+name+".\nWhich are you most afraid of-- clowns, spiders, or babies?\n(enter 'clowns', 'spiders' or 'babies')");
while (['babies','clowns','spiders'].indexOf(fear) == -1){
  fear = prompt(fear + " are scary, but not an option today. Pick again.\n(enter 'clowns', 'spiders' or 'babies')");
}

var move = prompt("Ok. You are being chased by a pack of blood-thirsty, mutant "+fear+".\nDo you run or walk to get away?\n(enter 'run' or 'walk')");
while (['walk','run'].indexOf(move) == -1){
  move = prompt("Hey, that's not an option. Pick again.\n(enter 'run' or 'walk')");
}

var distance = parseInt(prompt("How many miles do you think you can "+move+" without stopping?"));
while (isNaN(distance)){
  distance = parseInt(prompt("Gotta give me a number here, thanks."));
}

if (move == 'walk' && distance>=50){
  var hidingPlace = prompt("I doubt you could "+move+" that far. You'd probably get tired and need a place to hide. There's an office building or a McDonalds. Where do you go?\n(enter 'office' or 'McDonalds')");
  while (['office','McDonalds'].indexOf(hidingPlace) == -1){
    hidingPlace = prompt("You can't hide there. Pick again.\n(enter 'office' or 'McDonalds')");
  }
  if (hidingPlace == 'McDonalds'){
    var food = prompt("What's your favorite thing from McDonalds?");
    alert("Good choice. Now you can die happy with a "+food+" in your hand because you decided to WALK from a pack of blood-thirsty "+fear+". Idiot.");
  }else{
    var floor = parseInt(prompt("Ok, your in the office. What floor do you go to?"));
    while(isNaN(floor)){
      floore = parseInt(prompt("Come on. Give me a number here."));
    }
    if (floor<10 && floor > 0){
      alert(fear+ " are pretty good climbers, and mutant "+fear+" could definitely climb that high. You're dead.");
    }else if (floor == 0){
      alert("Ground floor? Seriously? You're dead.");
    }else{
      if (floor>=10){
        alert("Good call. Way up high. You'll probably survive this one.");
      }else{
        alert("Good call. Underground bunker. You'll probably survive this one.");
      }
    }
  }
}else if(move == 'walk' && distance <=49){
  var remaining = prompt("You only went "+distance+" miles and you should go at least 50. You're walking for your friggin life here. How many more miles do you need to go?");
  var newDistance = distance + parseInt(remaining);
  //var addDist;
  while (newDistance<=49){
    var addDist = prompt("Getting there, but still got a way's to go. Keep adding on miles until you exceed 50. Now you're at "+(parseInt(newDistance)));
    newDistance += parseInt(addDist);
  }
  var fork = prompt("You made it pretty far and came to a fork in the road. Do you go left or right?\n(enter 'left' or 'right')");
  while (['left','right'].indexOf(fork) == -1){
    fork = prompt("Can't go that way.\n(enter 'left' or 'right')");
  }
  if (fork == 'left'){
    var getAway = prompt("Theres an old car or an old bike. Which do you take?\n(enter 'car' or 'bike')");
    while(['car','bike'].indexOf(getAway) == -1){
      getAway = prompt("That mode of transport isn't available. Pick the car or bike.\n(enter 'car' or 'bike')");
    }
    if (getAway == 'car'){
      var wait = prompt("You chose the old car, which inevitably broke down. You call Triple-A, but they can't be there for a while. How long do you wait?\n(enter a number of minutes)");
      while (isNaN(parseInt(wait))){
        wait = prompt("Need a number of minutes here.\n(enter a number of minutes)");
      }
      if (parseInt(wait)>60){
        alert("You're sitting there waiting for Triple-A while being chased by MUTANT "+fear.toUpperCase()+". They quickly made up ground and now you're dead.")
      }else{
        alert("Good call in not waiting too long. You're alright in my book. That is all. I'll let you live for that.")
      }
    }
  }else{
    alert("You went right...");
    var decision = prompt("Right into the waiting arms of MUTANT "+fear.toUpperCase()+". There's only one way to escape now-- either play dead or fight. Which do you do?\n(enter 'play dead' or 'fight')");
    while (['play dead','fight'].indexOf(decision) == -1){
      decision = prompt("Only two choices here. Play dead or fight.\n(enter 'play dead' or 'fight')");
    }
    if (decision == 'play dead'){
      alert("You chose correctly. Mutant "+fear+" have a notoriously short attention span, get bored, and leave you alone.");
    }else{
      alert("You chose wrong. We're dealing with a PACK OF MUTANT "+fear.toUpperCase()+". You're outnumbered and dead.");
    }
  }
}else if(move == 'run' && distance>20){
  var hidingPlace = prompt("Most people can't "+move+" that far, especially you. You'd probably get tired and need a place to hide. There's a hardware store or an old decrepit house. Where do you go?\n(enter 'store' or 'house')");
  while (['store','house'].indexOf(hidingPlace) == -1){
    hidingPlace = prompt("You can't hide there. Pick again.\n(enter 'store' or 'house')");
  }
  if (hidingPlace == 'store'){
    var tool = prompt("The "+fear+" are closing in. You need a weapon. There's a shovel and a drill. Pick one.\n(enter 'shovel' or 'drill')");
    while (['shovel','drill'].indexOf(tool) == -1){
      tool = prompt("Sorry, the hardware store only has shovels and drills. Pick again.\n(enter 'shovel' or 'drill')");
    }
    alert("Haha, you thought you were smart by picking "+tool+", but there is no right answer. These are MUTANT "+fear.toUpperCase()+" we're dealing with here. You're dead.");
  }else{
    var door = prompt("There are three doors, curiously labeled 1, 2, and 3. Doors 1 and 2 are opened slightly, while door 3 is locked shut. Pick a door.\n(enter 1, 2, or 3)");
    while ([1,2,3].indexOf(parseInt(door)) == -1){
      door = prompt("That door doesn't exist.\n(enter 1, 2, or 3)");
    }
    if (parseInt(door)!==3){
      alert("Wanna know why the door was cracked open? "+fear.toUpperCase()+". You're dead.");
    }else{
      var lock = Math.floor(Math.random() * 6) + 1;
      var guesses = 0;
      var pick = prompt("The "+fear+" are closing in and you have to pick the lock. Fortunately, the combination is a single number between 1 and 10. You have time to make three attempts. Make your first guess.\n(enter a number between 1 and 10)");
      while (lock !== parseInt(pick)){
        pick = prompt("Wrong. Try again...\n(enter a number between 1 and 10)");
        guesses++;
      }
      if (guesses>5){
        alert("You just picked the lock! But the "+fear+" grabbed you by the leg and now you're dead.");
      }else{
        alert("Made it in, barely. You wait it out and survive.");
      }
    }
  }
}else if(move == 'run' && distance<=20){
  var wait = prompt("Only "+distance+ " miles? You're clearly no shape to run for your life, so you need a break. How many minutes do you rest?");
  while (isNaN(parseInt(wait))){
    wait = prompt("You need to enter a number here.");
  }
  alert("Trick question. There's no time for breaks. You're being chased by MUTANT "+fear.toUpperCase()+". You're dead.")
}
wantToPlay();
}

play();
function wantToPlay(){
  var answer = prompt("Would you like to play again?(enter 'yes' or 'no')");
  if (answer == 'yes'){
    play();
  }else{
    return;
  }
}

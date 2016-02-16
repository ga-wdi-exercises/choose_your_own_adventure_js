function GetName(){
  console.log("Welcome to the game of you fate");
  var name = prompt("What is your name?");
  return name;
}

function GetYear(){
  var named = GetName();
  var year = prompt("Nice to meet you, " + named + ". You see a time portal and decide to go through it. Where would you like to go");
  year = parseInt(year);
  return year;
}

function getFutureName(){
  var Fname = prompt(" You've landed in a space war It's time to fight in the war. What's your Jedi name?");
  return Fname;
}

function getBusiness(){
  var business = prompt("you're given a chance to own a tech business, knowing this, you want to change history. Pick one of the 3 you want to own. Facebook/Google/Apple");
  return business;
}

function changeLife(){
  var fate = prompt("Fate has allowed you to change 3 things. Pick one. (wealth/social_status/IQ)");
  return fate;
}

function chooseAnswer(){
  console.log("PARADOX IN EFFECT");
  var answer = prompt("If Pinoccio says his will grow, will it grow? (yes/no) or you can refuse to answer");
  return answer;
}

function pickPortal(){
  var portAnswer = prompt("2 portals appear in front of you. You must choose which portal to jump through. blue or red?");
  return portAnswer;
}

function getIQ(){
  var Iq = prompt("What do you want your IQ to be");
  Iq = parseInt(Iq);
  return Iq;
}

function timeTravel(year){

  if(year >= 2015){
    theFuture(getFutureName());
  }
  else if (year > 1985  && year <= 2014) {
    theSortaPresent(changeLife());
  }
  else if (year > 1955  && year <= 1985) {
    thePast(chooseAnswer());
  }
  else if (year <= 1954) {
    theWayPast(getBusiness());
  }
  else{
    console.log('What time is this??? Input again.');
    getYear();
  }
}

  function theFuture (name){
    var specTech = 0;
    var specPower = 0;
    console.log(name + ' has enter the battle.');
    while(specTech < 8 || specPower < 8){
      var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        console.log("You've taken damage. Heal up");
        specPower++;
    } else if (randomNumber < 0.66) {
        console.log("Collecting battle goods");
        specTech++;
    } else {
        console.log("Your battle skills are improving " + name);
        specTech++;
        specPower++;
    }

    }
    console.log("Battle Summary: Special Tech level " +specTech + " Special Powers level " + specPower);
    if(specTech > specPower){
      console.log("you'd rather have power than material things, so you invoke a do-over");
      GetYear();
    }
    else if (specTech < specPower) {
      console.log("With your power, fate has decided you rule future");
      console.log("Nice!")

    }
    else if (specTech === specPower) {
      pickPortal();
      var color = pickPortal();
      if(color === "red"){
        thePast(chooseAnswer());
      }
      else if (color === "blue") {
        console.log("You've returned home a powerful human");
        console.log("You Win!");
      }
      else {
        console.log("That's not an option. Pick Again");
        pickPortal();
      }
  }

  function theSortaPresent(fate) {
    if(fate === 'wealth'){
      console.log("You're now rich beyond you wildest dreams");
    }
    else if (fate === 'IQ') {
      changeIQ(getIQ());
    }
    else if (fate === 'social_status') {
      console.log("You've achieve new popularity")
    }

  }

  function thePast(answer){
    if(answer === 'yes'){
      console.log("You've entered a Pinocchio Paradox with no escape...");
      console.log("Game Over!");
    }
    else if (answer === 'no') {
      console.log("You've entered a Pinocchio Paradox with no escape...");
      console.log("Game Over!");
    }
    else {
      console.log("Smart choosing not to answer. You are returned to your time with wealth");
      console.log("You Win. You've become a Jedi Master");
    }

  }

  function theWayPast(company){
    if(company === "Apple"){
      console.log("you now have a ton of wealth");
    }
    else if (company === "Google") {
      console.log("It's a start though there's no internet");
    }
    else if (company === "Facebook") {
      console.log("too bad there's no internet");
      console.log("Game Over");
    }
    else {
      console.log("That's not a choice. Pick again");
      getBusiness();

    }

  }
}

function changeIQ(iq){
  if(iq > 100){
    console.log("Put your new intellectual abilities to good work ");
  }
  else if (iq < 100) {
    console.log("You're now slow...");
    console.log("Game Over");
  }
  else {
    console.log("That's not a choice. Pick again");
    getIQ();
  }
}

timeTravel(GetYear());

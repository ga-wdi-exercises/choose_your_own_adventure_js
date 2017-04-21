"use strict";

let answer;

const gotoNewport = () => {
  answer = prompt("Wow, that was a lot of traffic! Some of those bridges don't look too good either... Where should we head now? Should we go to the beach or the mansions?");
  switch(answer.toUpperCase()) {
    case 'BEACH':
      answer = prompt("Well, which beach!? This is the OCEAN state. First Beach or Second Beach.");
      switch(answer.toUpperCase()) {
        case 'FIRST BEACH':
          alert("There's too much traffic! Let's go back to Providence and get a beer!");
          break;
        case 'SECOND BEACH':
          alert("There's too much traffic! Let's go back to Providence and get a beer!");
          break;
        default:
          alert("What did you say? Forget it, I can't deal with this traffic!");
      }
      break;
    case 'MANSIONS':
      let mansions = ['Gold', 'Fancy', 'Trump', 'Decadence', 'Luxury', 'Platnium'];
      let mansions_string = "";
      for(let i = 0; i < mansions.length; i++) {
        mansions_string += mansions[i] + " Mansion, ";
      }
      alert("Forget it, I can't pick between " + mansions_string);
      break;
    default:
      alert("What did you say? Forget it, I can't deal with this traffic!");
  }
};

const gotoWarwick = () => {
  answer = prompt("How old are you?");
  answer = parseInt(answer);
  if(answer < 21) {
    answer = prompt("Do you look older than 21? (yes/no)");
    if(answer.toUpperCase() === 'YES') {
      alert("Okay, I'm sure we can find something to do.");
    } else {
      alert("I don't know, maybe Warwick isn't the best choice.");
    }
  } else {
    answer = prompt("Which bar should we go to? The Clam Digger or Captain Salty?");
    switch(answer.toUpperCase()) {
      case 'THE CLAM DIGGER':
        alert("Alright...");
        break;
      case 'CAPTAIN SALTY':
        alert("Okay, you're in charge...");
        break;
      default:
        alert("I think I might sit this one out...");
    }
  }
};

const gotoExeter = () => {
  answer = prompt("So you like the woods? (yes/no)");
  switch(answer.toUpperCase()) {
    case 'YES':
      answer = prompt("Do you like water? (yes/no)");
      switch(answer.toUpperCase()) {
        case 'YES':
          alert("Let's go to Yawgoo Pond!");
          break;
        case 'NO':
          alert("That's okay, we can just wander into the trees!");
          break;
      }
      break;
    case 'NO':
      alert("Let's go to the Exeter Grange!!!");
      break;
    default:
      alert("Let's just get a hot weiner in Olneyville...")
  }
};

//Begin adventure
answer = prompt("Welcome to Rhode Island! Do you want to go to Newport, Warwick or Exeter?");
switch(answer.toUpperCase()) {
  case 'NEWPORT':
    gotoNewport();
    break;
  case 'WARWICK':
    gotoWarwick();
    break;
  case 'EXETER':
    gotoExeter();
    break;
  default:
    alert("I can't understand your accent! You must mean Newport, everyone just wants to go to Newport!");
    gotoNewport();
}

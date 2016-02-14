
var userName = prompt("What is your name?");
console.log("userName is " + userName);

var userPrimaryPick = prompt(userName + ", it is January 25th, 2016 and you're Frank Underwood's new campaign manager.  Hilary and Bernie have him on the ropes and you need to revive his campaign.  Should President Underwood head to Iowa, New Hampshire, or Nevada? Input Iowa, NH, or Nevada for your answer.")
//answers are 'Iowa'/'iowa', 'New Hampshire'/'new hampshire', or 'Nevada'/'nevada'
console.log(userName + " has chosen to go to " + userPrimaryPick);


if (userPrimaryPick === ('Iowa')) {
  //should add a rule where the answer to below has to be a number!
  var negativeAdSpend = prompt('We have $10,000,000 budget for attack ads.  What percentage of that should be directed at Hilary Clinton? Please input 0 to 100')
  console.log(userName + " chose to spend " + negativeAdSpend + "% on attaching Hilary");
  } else if (userPrimaryPick === ('NH')) {
    var nevadaOrSabotage = prompt('We are polling terribly here and Bernie is crushing it.  Should we cut our losses and head to Nevada or sabotage Bernies campaign? (Please input "Nevada" or "Sabotage)"')
    console.log(userName + " has chosen " + nevadaOrSabotage);
  } else if (userPrimaryPick === ('Nevada')) {
      var blackmailOrPoison = prompt('You have allowed Hilary Clinton to win Iowa and Bernie Sanders to win New Hampshire.  Frank is battling for last place with Martin OMalley, you need to do something BIG.  Blackmail the Attorney General to indict Hilary over her emails or poison Bernie Sanders wife so he has to leave the campaign.  (Please input "blackmail" or "poison")')
      console.log(userName + " chose to " + blackmailOrPoison);
    } else console.log('You fucked up');


/**
The // was messing this logic up and I don't know why but I would to find out!!
if (userPrimaryPick === 'Iowa' || 'iowa') {
  console.log('return iowa');
  } else if (userPrimaryPick === ('NH') || ('nh')) {
  console.log('return nh');
  } else if (userPrimaryPick === ('Nevada') || ('nevada')) {
  console.log('return nevada')
} else console.log('wrong');
**/

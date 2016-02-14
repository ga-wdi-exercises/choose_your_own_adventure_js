
var userName = prompt("What is your name?");
console.log("userName is " + userName);

var userPrimaryPick = prompt(userName + ", it is January 25th, 2016 and you're Frank Underwood's new campaign manager.  Hilary and Bernie have him on the ropes and you need to revive his campaign.  Should President Underwood head to Iowa, New Hampshire, or Nevada? Input Iowa, NH, or Nevada for your answer.")
//answers are 'Iowa'/'iowa', 'New Hampshire'/'new hampshire', or 'Nevada'/'nevada'
console.log(userName + " has chosen to go to " + userPrimaryPick);


if (userPrimaryPick === ('Iowa')) {
  //should add a rule where the answer to below has to be a number!
  var negativeAdSpend = prompt('We have $10,000,000 budget for attack ads.  What percentage of that should be directed at Hilary Clinton? Please input 0 to 100')
  console.log(userName + " chose to spend " + negativeAdSpend + "% on attacking Hilary");
    // --> Starts of Iowa 2nd level <---
    if (negativeAdSpend < 50) {
      var trumpAttack = prompt('Not sure if this is wise.  Hilary is leading all of the polls, we may need to up the ante.  Do you want to prod Donald Trump into attacking? [Yes/No]')
      console.log("User selected " + trumpAttack + " to having Trump attack.");
    } else var unionStrike = prompt('I like how you operate.  But Bernie is doing too well in New Hampshire.  Do you want to pay a Union leader $50k to go on strike in Vermont to take his attention off the campaign?  [Yes/No]')
      console.log("User selected " + unionStrike + " to staging a Union Strike");
    // --> End of Iowa 2nd level <---
} else if (userPrimaryPick === ('NH')) {
  var nevadaOrSabotage = prompt('We are polling terribly here and Bernie is crushing it.  Should we cut our losses and head to Nevada or sabotage Bernies campaign? (Please input "Nevada" or "Sabotage)"')
  console.log(userName + " has chosen " + nevadaOrSabotage);
    // --> Start of NH 2nd level <---
    if (nevadaOrSabotage === 'Sabotage') {
      var cokeOrAffair = prompt('Now you are thinking like a winner.  Should we plant coke on Bernies campaign manager or pay a loyal supporter to claim she had an affair with him? (Please input "coke" or "affair"')
      console.log(userName + " chose " + cokeOrAffair)
    } else blackmailOrPoison
      console.log(userName + ' has selected ' + blackmailOrPoison);
    // --> End of NH 2nd level <--
} else if (userPrimaryPick === ('Nevada')) {
    var blackmailOrPoison = prompt('You have allowed Hilary Clinton to win Iowa and Bernie Sanders to win New Hampshire.  Frank is battling for last place with Martin OMalley, you need to do something BIG.  Blackmail the Attorney General to indict Hilary over her emails or poison Bernie Sanders wife so he has to leave the campaign.  (Please input "blackmail" or "poison")')
    console.log(userName + " chose to " + blackmailOrPoison);
      // --> Start of Nevada 2nd Level <---
      if (blackmailOrPoison === 'Blackmail') {
        var buyingDelegates = prompt('Success.  Hilary is in prison and now it is down to you and Bernie.  Our budget for Nevada is $5 million.  How much do you want to use buying delegates? [Specify $ amount]')
        console.log(userName + " chose to spend " + buyingDelegates)
      } else if (blackmailOrPoison === 'Poison') {
        var resign = prompt('Brutal mistake.  Mrs. Sander has bounced back and Bernie is surging off of sympathy points.  Do you want to resign as campaign manager [Yes/No]')
        console.log(userName + " answered " + resign + " to resigning")
      } else null;
    // --> End of Nevada 2nd Level <--
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

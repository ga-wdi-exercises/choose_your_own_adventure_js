
function clickToStart() {
var userName = prompt("What is your name?");
console.log("userName is " + userName);

var oldArray = [0,0,0];
var newArray = [];

var userPrimaryPick = prompt(userName + ", it is January 25th, 2016 and you're Frank Underwood's" + ' new campaign manager.  Hilary and Bernie have him on the ropes and you need to revive his campaign.  Should President Underwood head to Iowa, New Hampshire, or Nevada? (Please input "i" for Iowa, "nh" for New Hampshire, or "n" for Nevada.)')
//answers are 'Iowa'/'iowa', 'New Hampshire'/'new hampshire', or 'Nevada'/'nevada'
console.log(userName + " has chosen to go to " + userPrimaryPick);


if (userPrimaryPick === ('i')) {
  //should add a rule where the answer to below has to be a number!
  var negativeAdSpend = prompt('We have $10,000,000 budget for attack ads.  What percentage of that should be directed at Hilary Clinton? Please input 0 to 100')
  console.log(userName + " chose to spend " + negativeAdSpend + "% on attacking Hilary");
    // --> Start of Iowa 2nd level <---
    if (negativeAdSpend <= 49) {
      var trumpAttack = prompt('Not sure if this is wise.  Hilary is leading all of the polls, we may need to up the ante.  Do you want to prod Donald Trump into attacking? Please input "y" for Yes and "n" for No.')
      console.log("User selected " + trumpAttack + " to having Trump attack.");
      // --> Start of 1st Iowa 3rd Level <---
      if (trumpAttack === 'y') {
        confirm('Donald took the bait and launched one of his Trump attacks.  Good work, you will do well in DC!');
        //BUG - users picks no, get the correct message but then also get the 'else' prompt.
      } else if (trumpAttack === 'n') {
        confirm('You are weak.  Frank might just have to push you in front of a train next time.');
      } else confirm('You failed to follow simple instrustions.  Reload the page to start over.');
      // --> End of the 1st Iowa 3rd Level <--
    } else if (negativeAdSpend => 50)  {
      var unionStrike = prompt('I like how you operate.  But Bernie is doing too well in New Hampshire.  Do you want to pay a Union leader $50k to go on strike in Vermont to take his attention off the campaign?  Please input "y" for Yes and "n" for No.')
      console.log("User selected " + unionStrike + " to staging a Union Strike");
      // --> Start of 2nd Iowa 3rd Level <---
      if (unionStrike === 'y') {
        confirm('The Feds caught you in the act.  Off the Federal prison you go.')
      } else if (unionStrike === 'n') {
        confirm('Dodged a bullet.  Hilary also sent a team to do this, her campaign manager is off to Federal prison.')
      } else confirm('You failed to follow simple instrustions.  Reload the page to start over.');
      // --> End of 2nd Iowa 3rd Level <---
    // --> End of Iowa 2nd level <---
  // --> End of Iowa Level <--
}
} else if (userPrimaryPick === ('nh')) {
  var moneyOrSabotage = prompt('We are polling terribly here and Bernie is crushing it.  Should we double our budget or sabotage Bernies campaign? (Please input "m" to double the budget or "s" to sabotage.)"')
  console.log(userName + " has chosen " + moneyOrSabotage);
    // --> Start of NH 2nd level <---
    if (moneyOrSabotage === 's') {
      var cokeOrAffair = prompt('Now you are thinking like a winner.  Should we plant coke on Bernies campaign manager or pay a loyal supporter to claim she had an affair with him? (Please input "coke" or "affair")')
      console.log(userName + " chose " + cokeOrAffair)
      // --> Start of NH's first 3rd Level <--
      if (cokeOrAffair === 'coke') {
        confirm('Busted.  Your intern got arrested and ratted you out.');
      } else if (cokeOrAffair === 'affair') {
        confirm('Brilliant.  Secretary Clinton jumped all over the accusation and has badly bruised Sanders in the polls, while you keep distance yourself, avoid all suspicion, and continue to rise.');
      } else confirm('You failed to follow simple instrustions.  Reload the page to start over.');
      // --> End of NH's first 3rd Level <--
    } else if (moneyOrSabotage === 'm') {
      for (i = 0; i < oldArray.length; i += 1) {
        newArray.push(oldArray[i] = prompt('What 3 things should we spend the increased budget on? ' +  (3 - i) + ' more.'));
        console.log(newArray)
        // --> Start of NH's 2nd 3rd level <--
        } if (newArray[0] === 'delegates') {
          confirm('You paid off delegates.  Great work.');
        } else if (newArray[1] === 'delegates') {
            confirm('You paid off delegates.  Great work.');
          } else if (newArray[2] === 'delegates') {
            confirm('You paid off delegates.  Great work.');
        } else confirm('Are you an idiot?  You did not pay off a single delegate');
        // --> End of NH's 2nd 3rd Level
      // --> End of NH's 2nd Level
      } else confirm('You failed to follow simple instrustions.  Reload the page to start over.');
  // --> End of NH level <--
} else if (userPrimaryPick === ('n')) {
      var blackmailOrPoison = prompt('You have allowed Hilary Clinton to win Iowa and Bernie Sanders to win New Hampshire.  Frank is battling for last place with Martin OMalley, you need to do something BIG.  Blackmail the Attorney General to indict Hilary over her emails or poison Bernies dog so he has to leave the campaign.  (Please input "b" to go with blackmail or "p" to posion.)')
       console.log(userName + " chose to " + blackmailOrPoison);
      // --> Start of Nevada 2nd Level <---
      if (blackmailOrPoison === 'b') {
        var buyingDelegates = prompt('Success.  Hilary is in prison and now it is down to you and Bernie.  Our budget for Nevada is $5 million.  How much do you want to use buying delegates? [Specify $ amount]')
        console.log(userName + " chose to spend " + buyingDelegates)
        // --> Start of Nevada's 1st 3rd Level <--
        if ((buyingDelegates < 3999999) && (buyingDelegates > 1500000)) {
          confirm('Good idea.  This was enough to secure a victory without raising suspicion.  Looking forward to seeing what you are made of at Super Tuesday.');
        } else if (buyingDelegates < 1499000) {
          confirm('You cheapskate, this was not enough to secure a victory');
        } else if (buyingDelegates > 4000000) {
          confirm('Did you really think spending that amount would not raise suspicion?  The FBI is now investigating you.');
        } else confirm('You failed to follow simple instrustions.  Reload the page to start over.');
        // --> End of Nevada's 1st 3rd Level <--
      } else if (blackmailOrPoison === 'p') {
        var resignOrNot = prompt('Brutal mistake.  Mrs. Sander has bounced back and Bernie is surging off of sympathy points.  Do you want to resign as campaign manager? Please input "y" for Yes and "n" for No.')
        console.log(userName + " answered " + resignOrNot + " to resigning")
        // --> Start of Nevada's 2nd 3rd Level <--
        if (resignOrNot === 'y') {
          confirm('Good luck with your career... in county government');
        } else if (resignOrNot === 'n') {
          alert('You have guts, but the Underwoods now own you')
        } else null
        // --> End of Nevada's 2nd 3rd Level <--
      } else null;
    // --> End of Nevada 2nd Level <--
  } else confirm('You failed to follow simple instrustions.  Reload the page to start over.')

/**
The below "||"" was messing this up.  I wasn't able to figure out why, but but I would like to find out!!
if (userPrimaryPick === 'Iowa' || 'iowa') {
  console.log('return iowa');
  } else if (userPrimaryPick === ('NH') || ('nh')) {
  console.log('return nh');
  } else if (userPrimaryPick === ('Nevada') || ('nevada')) {
  console.log('return nevada')
} else console.log('wrong');
**/
}

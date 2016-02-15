
/*
Each path of decisions is inside its own function.
An array, paths, holds variables representing those functions / paths.
gameOn() starts the game.  It asks the user for a number. Then a for loop goes
thru paths and calls a function for the path matching the number entered by the
user.At the end of each path, the user is asked if she wants to play again.
That gets done by the playAgain() function. If user answers yes, gameOn() starts
the game again.
*/

var paths = [null, snacks, bball, fball];
play();

function play() {
  alert("You're about to be born again, this time as a pro athlete...\n" +
        'Answer the following questions to fulfill your destiny...\n' +
        'Ready? Press Ok to start');
  var intensity = parseInt(prompt('On a scale of 1 - 3, how intense are you in this life (3 = most intense)...?'));
  for (var i = 1; i < paths.length; i++) {
    if (i === intensity) {
      paths[i]();
    }
  }
}

function fball() {
  var qDance = prompt('In this next life, do you like to dance? (y/n)');
  if (qDance == 'y') {
    var qFast = prompt('So, you think you can dance, and you especially like to dance when you celebrate.  But Do you run really fast? (y/n)');
    if (qFast == 'n') {
      var qNorS = prompt('So, it looks like, in this life, you are born in the United States, but choose: north or south? (north/south)');
        if (qNorS == 'north') {
          alert('Nice! You\'re JJ Watt -- fierce NFL linebacker!');
        } else if(qNorS == 'south') {
          alert('In this life, you are K.J. Wright -- fierce NFL Linebacker!');
        }
    } else if (qFast == 'y') {
      alert('Nice! In this life, You\'re Odell Beckham Jr. -- Super fast NFL wide reciever!')
    }
  } else if (qDance == 'n'){
    alert('Ah...It looks like you are a fighter! But what\'s your style...?');
    var qStyle = parseInt(prompt('Choose a time, in the past, to be born in: before 1960 or after 1960... (before/after)'));
    if (qStyle == 'before') {
      var qBeesHoney = prompt('Nice! You\'re a boxer, and it\'s SWEET! But you can\'t decide: do you like bees or just their honey...?(bees/honey)');
      if (qBeesHoney == 'bees') {
        alert('In this life, you will float like a butterfly, sting like a bee.  You\'re Muhammed Ali');
      } else if (qBeesHoney == 'honey') {
        alert('Your life is so SWEET! You\'re so good at boxing that they call you "Sugar" Ray Leonard.');
      }
    } else if (qStyle == 'after') {
        var qWax = prompt('Mixed martial arts is the fighting sport of the day, and you\'re an MMA fighter. One day, while training in kung fu, you have to decide: wax on or wax off (on/off)');
        if (qWax == 'on') {
          alert('Oh man, kung fu, karate, and taekwando don\'t do so well in MMA.  You are an MMA fighter in this life. But it hurts. A lot...');
        } else if (qWax == 'off') {
          alert('You\'re a Brazilian jujitsu fighter.  You are at the cutting edge of dislocating bones!')
        }
    }
  }
  playAgain();
}

function bball() {
  var qbball = prompt('Prepare to take flight! In this life, your hang time is crazy! Let\'s decide where to take off from: the east or west coast. (east/west)');
  if (qbball == 'east') {
    var goPro = prompt('As a teenager, you are more talented at basketball than most professionals.  Do you join the NBA without going to college? (y/n)');
    if (goPro == 'y') {
      var beach = prompt('You are born again as Lebron James, three time NBA basketball champion! Now, decide: will you take your talents to South Beach? (y/n)');
      if (beach == 'y') {
        alert('Great decision! Miami sure beats cold Cleveland.  You win three championships and enjoy Miami sun!');
      } else {
        alert('Um... New York is a great city, but did you really want to play for the Knicks?!?!?!');
      }
    } else if (goPro == 'n') {
      var stay = prompt('You are born again as Andrew Wiggins.\n' +
      'You could haven went pro early, but you took your time,enjoyed life.\n' +
      'But will you stay in Minnesota? (y/n)');
      if ( stay == 'y') {
        alert('Great decision.  You stay in Minnesota and win the Rookie of the Year Award!');
      } else {
        alert('uh oh! You are now on a team where you get less playing time, and still don\t win!');
      }
    }
  } else if (qbball == 'west') {
    var apparel = prompt('Welcome to North Carolina! Wait. You thought You said WEST! You did, but NC is where you get good at basketball.  And get stalked by apparel companies seeking endorsements. Do you go with Nike or Under Armor? (nike/ua)');
    if (apparel == 'nike') {
      var college = prompt('Nike was a no-brainer.  Your favorite ACC teams had Nike deals! You even have the chance to play for one in college.  You are that good.  So, when you declare, where will you go? Are you willing to join the evil empire? (evil / good)');
      if (college == 'evil') {
        alert('Duke? Really? Figures. You become JJ Reddick of the Los Angeles Clippsers.  You are as evil as they come!');
      } else if (college == 'good') {
        alert('You are stand-up guy, Chris Paul. You are THE MAN on the LA Clippers!');
      }
    } else if (apparel == 'ua') {
      var daughter = parseInt(prompt('In this life, you are Steph Curry.  Your game has so much style.  But I just have one question about those Under Armor Shoes... WHAT ARE THOSE?????\n' +
      '\n' +
      'Answer 1 for "hey, who cares, I\'m making millions, or 2 for ""hey, who cares, I\'m making millions (1/2)'));
      alert('You answered ' + daughter + '. I\'ll take it!');
    }
  }
  playAgain();
}

function snacks() {
  var like = prompt('Ah, so you\'re the easy going type.  But still kind of competitve.  Do you like to snack tho? (y/n)');
  if (like == 'y') {
    var hangout = prompt('Duh! You and everyone else! You also love taking your time.  You are a thinker and play a sport that fits your personality.  Do you also like to hangout? (y/n)');
    if (hangout == 'y') {
      var outdoors = prompt('You enjoy your freetime.  You love to kick it and have a few brews while you take in a game.  But you\'re still active.  Are you the outdoors type?')
      if (outdoors == 'y') {
        alert('It\'s not until your mid 30s that your latent athletic gift is realized and become a champion slow-pitch softball player. A weekend warrior, you help organize the league.  Are you in shape? No! But you don\'t need to be to hit 40 slow-pitch home runs a year!');
      } else if (outdoors == 'n') {
        alert('You bowl. For a living. You live in the exurbs with the true champions!');
      }
    } else if (hangout == 'n') {
      var proGolf = prompt('You aren\'t a social butterfly.  But do you like the outdoors? (y/n)');
      if (proGolf == 'y') {
        alert('You are Jordan Spieth, young PGA golf sensation!');
      } else if (proGolf == 'n') {
        alert('You love wide, open fields.  You build a great baseball career as Bryce Harper');
      }
    }
  } else if (like == 'n') {
    var stillHang = prompt('All good. Still, you are a thinker and play a sport that fits your personality.  Do you also like to hangout? (y/n)');
    if (hangout == 'y') {
      var outdoors = prompt('You enjoy your freetime.  You love to kick it and have a few brews while you take in a game.  But you\'re still active.  Are you the outdoors type?')
      if (outdoors == 'y') {
        alert('It\'s not until your mid 30s that your latent athletic gift is realized and become a champion slow-pitch softball player. A weekend warrior, you help organize the league.  Are you in shape? No! But you don\'t need to be to hit 40 slow-pitch home runs a year!');
      } else if (outdoors == 'n') {
        alert('You bowl. For a living. You live in the exurbs with the true champions!');
      }
    } else if (hangout == 'n') {
      var proGolf = prompt('You aren\'t a social butterfly.  But do you like the outdoors? (y/n)');
      if (proGolf == 'y') {
        alert('You are Jordan Spieth, young PGA golf sensation!');
      } else if (proGolf == 'n') {
        alert('You love wide, open fields.  You build a great baseball career as Bryce Harper');
      }
    }
  }
  playAgain();
}

function playAgain() {
  var again = prompt('Excellent! Your desinty is in your hands...\n' +
                    'Play again...? (y/n)');
  if (again == 'y') {
    play();
  } else {
    return alert('Thanks for playing!\n' +
                 'Exiting game...');
  }
}

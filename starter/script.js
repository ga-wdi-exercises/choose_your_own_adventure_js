// put code here!
//js code for homework!

var entryQuestion = prompt('Would you like to drink the blue or red pill?');


if (entryQuestion === 'red') {
    var redChoice = prompt('Good choice! But this isn\'t the Matrix. First, you must choose a numbe to continue this adventure..any number.')
    parseInt(redChoice);

    if (redChoice >= 1) {
      console.log('Excellent, you chose the path of the warrior!');
      alert('OH NO THE PREDATOR IS HERE QUICK PICK A WEAPON!!!!');
      var weaponChoice = prompt('Would you like a sword, axe, or flail?');
      if (weaponChoice === 'sword') {
        alert('Sword! You attempt to slash the predator..but miss. :\'(   \n  The Predator kills you.');
      } else if (weaponChoice === 'axe') {
        alert(' You clobber the Predator with an Axe. It is not enough. He gets up and slashes both your legs. You eventually bleed out. :\'( ');
      } else {
        alert('Flail!!! You swing and score a direct hit on the Predator. Who knew that spikes would be his weakness? He dies instantly. Do you take his head as a trophy?');
        var keepTrophy = prompt('Do you want to keep the predator\'s head as a weapon?');
          if (keepTrophy === 'yes') {
            alert('You are a true warrior. You win the game. Go you!!');
          } else if (keepTrophy === 'no') {
            alert('Well..you\'re still a warrior, so go you!!');
          } else {
            alert('Wow you won\'t even pick an option? Well I am the game master and I kill you. You lose the game, good day sir!');
          }
      }
    } else {
      alert('Not much to work with here. Left or right?');
      var leftOrRight = prompt('Left or Right?');
      parseInt(leftOrRight);

        if (leftOrRight === 'left') {
          alert('You float infinitely in space and ponder life\'s many mysterious..forever and ever.');
        } else if (leftOrRight === 'right') {
          alert('You swim infinitely in the ocean with your newly acquired gills...wondering why the Kardashians are a thing.');
        } else {
          alert('You dissolve into a fine mist. Dark ain\'t it? That\'s what happens when you don\'t pick an option.');
        }
    }

} else {
  console.log('Interesting choice!');
  var blueResponse = prompt('Are you feeling blue?');

    if (blueResponse === 'yes') {
      console.log('Wow you probably need a doctor then...don\'t ya?');
      var doctorChoice = prompt('Would you like to ask advice from Dr. Evil or Dr. Evilest?');

        if (doctorChoice === 'Dr. Evil') {
          alert('Dr. Evil\'s operation was a success! You live a happy life and are no longer feeling blue!!!');
        } else if (doctorChoice === 'Dr. Evilest') {
          alert('Really? Evilest? Guess what you\'re dead. Don\' act so surprised!');
        } else {
          alert('No choice? You die!!');
        }

    }
    else {
      var notFeelingBlue = prompt('Why not? Are you feeling green instead?');

       if (notFeelingBlue === 'yes') {
         alert('What.');
       } else if (notFeelingBlue === 'no') {
         alert('Mother of god...not even death can save you.')
       } else {
         var howOld = prompt('How old are you?');
         parseInt(howOld);


         while (!howOld <= 21) {
          var needToBe21 = prompt('You have to be 21 or older.');
          alert('Woooohooo!!! Drink up!');
          break;
          }
       }
     }
    }

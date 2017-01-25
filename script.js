
//filling out the user's name
var userName = prompt('What is your name?');
// getting consent for the game
var userInput = prompt('Hello, ' + userName +'!' + ' Welcome to New City Adventures. With the invention of our new teleporter we can take you seven different cities. However, in order to return you must be able to find the missing key in order to return home. If you would like to proceed, simply respond yes or no.');
  // path 1
  if (userInput == 'yes') {
    alert(userName + ' turns doorknob');
  }
  else if (userInput == 'no') {
    alert('Too bad ' + userName + '. Someone shoves you through the door into the chamber.');
  }
  else {
    // while (userInput != 'yes' || no) {
       userInput = prompt('Sorry that was not a valid answer, please try again. Please yes or no answers only.');
    //  }
  };
// choosing the location - path 2
var destination = prompt('Please select the city you would like to go to: Beijing, Amsterdam, or Tokyo.');
  // Beijing is the destination -- strange man has appeared -- path 3
  if (destination == 'Beijing') {
    var response1 = prompt('Plop, you have been dropped in a street in Beijing, China. There is a suspicious hooded man at the corner who slowly approaches. run or confront?');
    // run or confront --- path 4
      if(response1 == 'run') {
        var money = prompt('You start running, but trip over the broken sidewalk. Hooded man catches up to you and asks to borrow some change. Choose between 1-5 dollars to give by inputting a whole number between 1-5.');
        // money given to man -- path 5
          if (money == 0) {
            alert('game is over');
          }
          else if (money > 5) {
            alert('You are a generous fool and the man has run off with all your money.');
          }
          else {
          // amount of money between 1-5 results --- switch -- possible path 6
            switch(money) {
              case '1':
                var cashExtra = prompt("Man spits in your face. You also get struck by lightning. Give him money. 1-5");
                break;
              case '2':
                var cashExtra = prompt('Man gives you a wedgie and wants more money and lures you by convincing you he has clues to the necessary key. Input extra money you want to give. Limit is 1-5.')
                break;
              case '3':
                alert('Man gives you high-five.')
                var cashExtra = 0;
                break;
              case '4':
                alert('Wow, you gave him a lot.');
                var cashExtra = 0;
                break;
              case '5':
                alert('Whoa, Moneybags. Share the wealth.');
                var cashExtra = 0;
                break;
              default:
                alert('That is not a number I suggested')
            };
          var totalCash = parseInt(money) + parseInt(cashExtra);
          // total cash given to man -- path 6
          if (totalCash >= 3) {
            // trust genie or fairy --- while loop & path 7
            var response2 = prompt('Man gives you the map to find the missing key. You follow map to a fork in the road. You must trust the fairy or the genie. ')
            while (response2 != 'fairy' && response2 !='genie') {
              response2 = prompt('You chose neither choice. Please choose: genie or fairy.');
            }
              if (response2 == 'fairy') {
                alert('The fairy creates a carriage to help you reach your destination where the hidden key is. You have won the game.')
              }
              else if (response2 == 'genie') {
                alert('The genie tricks you and traps you in the bottle. Game Over')
              }
              else {
                alert('You did not ask for help and got trapped in ' + destination)
              }
          } else {
            alert('Game over. The man did not give you the map. You are stuck in ' + destination)
          }
        }
      }
      // if you did not run and confronted man instead.
      else if (response1='confront') {
        var response2 = prompt('Hooded man appreciated you not running away and gave you the map to find the missing key. You follow map to a fork in the road. You must choose to trust: fairy or genie.')
        while (response2 != 'fairy' && response2 !='genie') {
          response2 = prompt('You chose neither choice. Please choose: genie or fairy.');
        }
          if (response2 == 'fairy') {
            alert('The fairy creates a carriage to help you reach your destination where the hidden key is. You have won the game.')
          }
          else if (response2 == 'genie') {
            alert('The genie tricks you and traps you in the bottle. Game Over')
          }
          else {
            alert('You did not ask for help and got trapped in ' + destination)
          }
      } else {
        alert('Game over. The man did not give you the map. You are stuck in ' + destination)
      }
        response1 = prompt('Not a valid answer, please write run or confront')
      }

  }
  // Nairobi is the destination -- strange woman has appeared -- path 1
  else if (destination == 'Amsterdam') {

  }
  // Tokyo is the destination -- strange baby has appeared -- path 1
  else if (destination == 'Tokyo') {

  }
  else {
    destination = prompt('Whoops. That was not in the list. Please choose a valid choice. Please choose a city with the correct capitalization: Beijing, Amsterdam, or Tokyo')
  }

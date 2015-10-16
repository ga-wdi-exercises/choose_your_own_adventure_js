// put code here!
var weapon, seconds, food, life;
// var isPlaying = false;

var gameText = document.getElementById('game-text');
var startButton = document.getElementById('start');
var gameScreen = document.getElementById('game');
// var quitButton = document.getElementById('quit');
startButton.addEventListener('click', function( event ) {
  //start game
  // isPlaying = true;
  gameScreen.innerHTML = '';
  startButton.classList.toggle('hidden');
  startGame();
});

// quitButton.addEventListener('click', function( event ) {
//   isPlaying = false;
// });

function startGame() {
  // while (isPlaying) {
  //
  // }
  life = 2;
  displayText('You are trapped in a cold, dark room. ');
  displayText('your health is low, you only have ' + life + '&hearts; left');
  firstChoice();
  secondChoice();

  if (life === 0) {
    gameOver();
  } else {
    thirdChoice();
    outcome();
    gameOver();
  }
}

function firstChoice() {
  displayText('Three weapons lie before you: a sword, a bow, and a brick');
  weapon = getWeapon();
}

function secondChoice() {
  displayText('You hear some scurrying in the distance... ');
  seconds = getSeconds();
}

function thirdChoice() {
  displayText('You are tired and hungry... wait, what \'s that?');
  displayText('There is a plate of spaghetti in front of you');
  food = getFood();
}

function outcome() {
  if (food === 'eat') {
    displayText('You ate my food. Not cool. Get ready to fight');

    switch (life) {
      case 2:
        if (weapon === 'bow') {
          displayText('You brought a gun to a knife fight.  You lose');
        } else if (weapon === 'sword') {
          displayText('You\'re too strong for me, you win');
        } else {
          displayText('Seriously? A brick? Really scary. I give up. You win');
        }
        break;
      case 1:
        if (weapon === 'bow') {
          displayText('You are fast and have the range. You win');
        } else if (weapon === 'sword') {
          displayText('I win again');
        } else {
          displayText('You throw the brick and miss.');
          displayText('while I laugh, you manage to escape. Good job!')
        }
        break;
      default:
        console.log('not sure if this is needed');
    }

  } else {
    displayText('Thanks for not eating my food. Friendship achievement gained');
    displayText('YOU WIN!!!!!');
  }
}

function gameOver() {
  startButton.classList.toggle('hidden');
  startButton.innerHTML = 'play again?';
}

function displayText( text ){
  var body = document.body;
  var newText = '<p>' + text + '</p>';
  gameScreen.innerHTML += newText;
}

function getWeapon() {
  var weapon = prompt('which one do you choose? sword, bow, or brick?');

  if (weapon === null) {
    displayText('canceling is not an option');
    getWeapon();
  } else {
    if (weapon === 'bow' || weapon === 'sword' || weapon === 'brick') {
      displayText('you chose a ' + weapon);
      return weapon;
    } else {
      displayText( weapon + ' is not a valid choice. please choose again');
      getWeapon();
    }
  }
}

function getSeconds() {
  var seconds = prompt('how many seconds did it take you to pick a weapon?');

  if (seconds === null) {
    displayText('canceling is not an option');
    getSeconds();
  } else {
    seconds = parseInt(seconds);

    if (isNaN(seconds)){
      displayText('pick a number please');
      getSeconds();
    } else {
      if (seconds <= 10) {
        displayText('you grab your weapon quickly and escape unharmed');
      } else if (seconds < 50){
        displayText('you moved too slowly and were injured in the attack');
        life -= 1;
        displayText('you now only have ' + life + '&hearts; remaining');
      } else {
        displayText('wow, wayyy too slow.');
        life -= 2;
        displayText('your health is at ' + life);
        displayText('you are dead.  game over');
      }
      return seconds;
    }
  }
}

function getFood() {
  var food = prompt('do you choose to eat or leave the food?');

  if (food === null) {
    displayText('canceling is not an option');
    getFood();
  } else {
    if (food === 'eat' || food === 'leave') {
      displayText('you chose to ' + food + ' the food');
      return food;
    } else {
      displayText( food + ' is not a valid choice. please choose again');
      getFood();
    }
  }
}

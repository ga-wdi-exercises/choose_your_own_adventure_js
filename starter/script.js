/*
global prompt
global alert
*/

var input = ''

function startGame () {
  while (input.toLowerCase() !== 'n') {
    input = prompt('What is your name?')

    var name = input

    input = prompt(`Hello, ${name}. Pick a genre:\n\n[A]ction\n[H]orror\n[T]hriller\n\n(Brackets indicate choice so enter [A/H/R])`).toLowerCase()

    var choice = input

    switch (choice) {
      case 'a':
        actionPath()
        break
      case 'h':
        horrorPath()
        break
      case 't':
        thrillerPath()
        break
      default:
        alertWrongChoice()
    }
    input = prompt('You finished the game! Play again?\n[Y]es\n[N]o')
  }

  alertEnd()
}

/** The action path is inspired by the anime Bleach **/
function actionPath () {
  // bleach
  input = prompt('Great choice! What would you like to battle monsters with?\n\n[S]word\n[A]rrows').toLowerCase()

  if (input === 's') {
    getSword()
  } else if (input === 'a') {
    getArrows()
  }
}

function getSword () {
  input = prompt('You chose to be a soul reaper! You have been assigned a Zanpakuto (sword weapon). Great timing, too! A hollow has appeared before you. Now hurry up and name your Zanpakuto before it\'s too late! Choose one!\n\n[Z]angetsu (Slaying Moon)\n[S]enbonzakura (Thousand Cherry Blossoms)\n[K]azeshini (Wind of Death)').toLowerCase()

  if (input === 'z') {
    alert('You pull Zangetsu from its place on your back and began slicing away at the monster. Soon, you realize the monster is so strong so you have to use your swords shikai power! Your sword transforms from a large curved blade, to a long, slim blade. Don\'t worry! This means all your spiritual power has compressed and focused into the blade. With lightening fast speed, you slice the monster in a thousand different directions, killing it. The monster didn\'t even know what hit him! Great job!')
  } else if (input === 's') {
    alert('You removed Senbonzakura from its sheath and began slicing away at the monster. Soon, you realize the monster is so strong so you have to use your swords shikai power! You call out its power "chire" (scatter) and out comes thousands of razor sharp cherry blossoms which surround the monster and dissintegrate it into tiny pieces to small to see with the human eye. Great job!')
  } else if (input === 'k') {
    alert('You remove Kazeshini from its sheath and begin slicing away at the monster. Soon, you realize the monster is so strong so you have to use your swords shikai power! You call out its power "kare" (reap) and your sword turns into a kusarigama (a chain-sickle). You swing Kazeshini in circles above your head, and with expert precision, whip it forward to completely entangle and immobilize the monster. You rush forward and strike the monster, killing it. Great job!')
  } else {
    alertWrongChoice()
  }
}

function getArrows () {
  input = prompt('You chose to be a Quincy! Oh, look, a hollow has appeared. Quick! Kill it! How many arrows do you have? (Enter a number)').toLowerCase()

  var num

  try {
    num = parseInt(input)
  } catch (e) {
    alertWrongChoice()
    return
  }

  var random = Math.floor(Math.random() * 10000)

  if (num >= random) {
    alert('Good news! You have enough arrows! With lightening fast speed, you shot at the monster until it died. You killed it. Great job!')
  } else {
    alert(`Bad news. You did not have enough arrows (you needed ${random}) and got eaten by a hollow. Goodbye :(`)
  }
}

/** The adventure path is inspired by the anime Attack on Titan **/
function horrorPath () {
  // attack on titan
  input = prompt('Oh no! There is a horde of man eating giants chasing you. Where do you make your escape?\n[C]ity\n[F]orest').toLowerCase()

  if (input === 'c') {
    goToCity()
  } else if (input === 'f') {
    goToForest()
  } else {
    alertWrongChoice()
  }
}

function goToCity () {
  input = prompt('You entered into the city. Quick! You need a place to hide. Where do you go?\n[U]nderground\n[H]ouse').toLowerCase()

  if (input === 'u') {
    alert('You managed to find safe passage into the secret undergound passages in the city. Eventually the monster became distracted and you left safely! You\'re saved!')
  } else if (input === 'h') {
    alert('Everyone\'s doors were locked and no one would let you in! You got eaten by a giant. :(')
  } else {
    alertWrongChoice()
  }
}

function goToForest () {
  alert('You entered into the forest and climbed to the top of a very tall tree. After hours of watching the giants try to reach you, a mysterious flying stranger came out of no where and killed them all. You\'re saved!')
}

/** The thriller path is inspired by death note */
function thrillerPath () {
  input = prompt('I see you like thrills. [G]ood or [E]vil? (Enter [G/E])').toLowerCase()

  if (input === 'g') {
    findCulprit()
  } else if (input === 'e') {
    alert('You find a notebook that if you right anyones name in, they will die in less than 60 seconds. After years of attempting to conquer the world you are defeated by your long time enemy L. You finally die when a death god writes your name in to the notebook you found.')
  } else {
    alertWrongChoice()
  }
}

function findCulprit () {
  input = prompt('You have been tasked to find a mass serial killer who has somehow been killing people with heart attacks! They could be anywhere. Where could they be?\n\n[J]apan\n[U]nited States\n[A]ustrailia')

  var country = input.toLowerCase()
  var countries = ['j', 'u', 'a']
  var randCountry = Math.floor(Math.random() * (3 - 0) + 0)

  if (country === 'j' || country === 'u' || country === 'a') {
    if (country === countries[randCountry]) {
      takeDownKiller(country)
    } else {
      alert(`You narrow down the possible locations and air a special message only in ${country}, hoping to fool the killer to believe it's a worldwide newscast! Nothing happens, your plan fails and the killer gets away and rules the world.`)
    }
  } else {
    alertWrongChoice()
  }
}

function takeDownKiller (country) {
  input = prompt(`You narrow down the possible locations and air a special message only in ${country}. You successfully fool the killer to believe it's a worldwide newscast! The killer gives himself away by killing someone on the newscast. Now who is the culprit?\n\n[L]ight\n[O]scar\n[M]isa`).toLowerCase()

  if (input === 'l') {
    alert('You found him! You die, but not before passing on your theories to your protege who takes down the killer :( You are a hero!')
  } else if (input === 'm' || input === 'o') {
    alert('You failed! The killer gets away and rules the world! You die!')
  } else {
    alertWrongChoice()
  }
}

function alertWrongChoice () {
  alert('You entered an incorrect choice! Please try again.')
}

function alertEnd () {
  alert('The End. Refresh to play again')
}

startGame()

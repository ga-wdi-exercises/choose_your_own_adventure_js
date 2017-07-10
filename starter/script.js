function welcome () {
  var know = prompt(
    `Hello there Boddy.

    Just a few minutes ago you were enjoying a nice evening
    with Professor Plum, Ms. Scarlet, Mrs. Peacock,
    Colonel Mustard, Mrs. White, and Mr. Green.

    You do remember them all, correct? [Y]es/[N]o`)
    if (know === 'Y') {
      alert('Yes, I figured you would remember the six people you had been blackmailing!')
      return reveal()
    } else {
      alert('That"s strange, you had been blackmailing all of them!')
      return reveal()
    }
}

function reveal () {
  alert(`I say "had", of course, because moments ago the lights
  went out and when they came back on you seemed to be...dead!
  How inconvenient that must be for you.  Anyhow, lets see if
  you can remember who it was that committed this "heinous" crime.`)
  return firstClue ()
}

function firstClue () {
  var room = prompt(`Do you happen to remember which room you were killed in?

      Was it the
      [Conservatory],
      [Dining Room],
      [Hall],
      or [Billiard Room]?`)

  switch (room) {
    case 'Conservatory':
      return conservatory()
      break
    case 'Dining Room':
      return diningRoom()
      break
    case 'Hall':
      return hall()
      break
    case 'Billiard Room':
      return billiardRoom()
      break
    default:
      prompt("I don't think thats a room in this house...")
      return firstClue()
    }
}

function conservatory () {
  var sex = prompt(`At that time, in the Conservatory, Mrs. White, Professor Plum,
      Mrs. Peacock, Colonel Mustard, and you were searching for a flashlight and
      then you were killed.

      Do you remember if the killer was a [Man] or a [Woman]`)
    if (sex === 'Man') {
      return conservatoryMan()
    } else if (sex === 'Woman') {
      return conservatoryWoman()
    } else {
      alert('Sorry try again!')
      conservatory()
    }
}

function diningRoom () {
  var sex = prompt(`At that time, in the Dining Room, Mrs. Peacock, Mr. Green,
      Ms. Scarlet, Colonel Mustard, and you were searching for candles and
      then you were killed.

      Do you remember if the killer was a [Man] or a [Woman]`)
    if (sex === 'Man') {
      return diningRoomMan()
    } else if (sex === 'Woman') {
      return diningRoomWoman()
    } else {
      alert('Sorry try again!')
      diningRoom()
    }
}

function hall () {
  var sex = prompt(`At that time, in the Hall, Mrs. Peacock, Colonel Mustard,
      Mrs. White, Professor Plumb, and you were searching for the fuse box and
      then you were killed.

      Do you remember if the killer was a [Man] or a [Woman]`)
    if (sex === 'Man') {
      return hallMan()
    } else if (sex === 'Woman') {
      return hallWoman()
    } else {
      alert('Sorry try again!')
      hall()
    }
}

function billiardRoom () {
  var sex = prompt(`At that time, in the Billiard Room, Colonel Mustard, Mr. Green,
      Ms. Scarlet, Mrs. White, and you were searching for a cigar lighter and
      then you were killed.

      Do you remember if the killer was a [Man] or a [Woman]`)
    if (sex === 'Man') {
      return billiardRoomMan()
    } else if (sex === 'Woman') {
      return billiardRoomWoman()
    } else {
      alert('Sorry try again!')
      billiardRoom()
    }
}

function conservatoryWoman () {
  var accused = prompt(`We're almost there! What weapon did the killer use?

  Mrs. Peacock with the [Knife]?
  Mrs. White with the [Rope]`)

  if (accused === 'Knife' || 'knife') {
    return peacock()
  } else if (accused === 'Rope' || 'rope'){
    return white()
  }
}

function conservatoryMan () {
  var accused = prompt(`We're almost there! What weapon did the killer use?

  Professor Plum with the [Candlestick]?
  Colonel Mustard with the [Wrench]`)

  if (accused === 'Candlestick' || 'candlestick') {
    return profPlum()
  } else if (accused === 'Wrench' || 'wrench'){
    return colMustard()
  } else {
    return boddy()
  }
}

function diningRoomMan () {
  var accused = prompt(`We're almost there! What weapon did the killer use?

  Mr. Green with the [Revolver]?
  Colonel Mustard with the [Wrench]`)

  if (accused === 'Revolver' || 'revolver') {
    return green()
  } else if (accused === 'Wrench' || 'wrench'){
    return colMustard()
  } else {
    return boddy()
  }
}

function diningRoomWoman () {
  var accused = prompt(`We're almost there! What weapon did the killer use?

  Mrs. Peacock with the [Knife]?
  Ms. Scarlet with the [Lead Pipe]`)

  if (accused === 'Knife' || 'knife') {
    return peacock()
  } else if (accused === 'Lead Pipe' || 'lead pipe'){
    return scarlet()
  } else {
    return boddy()
  }
}

function hallMan () {
  var accused = prompt(`We're almost there! What weapon did the killer use?

  Professor Plum with the [Candlestick]?
  Colonel Mustard with the [Wrench]`)

  if (accused === 'Candlestick' || 'candlestick') {
    return profPlum()
  } else if (accused === 'Wrench' || 'wrench'){
    return colMustard()
  } else {
    return boddy()
  }
}

function hallWoman () {
  var accused = prompt(`We're almost there! What weapon did the killer use?

  Mrs. Peacock with the [Knife]?
  Mrs. White with the [Rope]`)

  if (accused === 'Knife' || 'knife') {
    return peacock()
  } else if (accused === 'Rope' || 'rope'){
    return white()
  } else {
    return boddy()
  }
}

function billiardRoomMan () {
  var accused = prompt(`We're almost there! What weapon did the killer use?

  Mr. Green with the [Revolver]?
  Colonel Mustard with the [Wrench]`)

  if (accused === 'Revolver' || 'revolver') {
    return green()
  } else if (accused === 'Wrench' || 'wrench'){
    return colMustard()
  } else {
    return boddy()
  }
}

function billiardRoomWoman () {
  var accused = prompt(`We're almost there! What weapon did the killer use?

  Mrs. White with the [Rope]?
  Ms. Scarlet with the [Lead Pipe]`)

  if (accused === 'Rope' || 'rope'){
    return white()
  } else if (accused === 'Lead Pipe' || 'lead pipe'){
    return scarlet()
  } else {
    return boddy()
  }
}

function profPlum () {
  alert(`Thats right it was Professor Plum, who you were
    blackmailing for practicing medicine without a license!`)
  deathLoop()
}
function peacock () {
  alert(`Thats right it was Mrs. Peacock, a US Senator,
    who you were blackmailing for accepting bribes!`)
  deathLoop()
}
function colMustard () {
  alert(`Thats right it was Colonel Mustard, who you were
    blackmailing for steeling gold during WWII!`)
  deathLoop()
}
function white () {
  alert(`Thats right it was Mrs. White, who you were
    blackmailing for killing her husband!`)
  deathLoop()
}
function scarlet () {
  alert(`Thats right it was Ms. Scarlet, who you were
    blackmailing for running an escort service!`)
  deathLoop()
}
function green () {
  alert(`Thats right it was Mr. Green, who you were
    blackmailing for having two families!`)
  deathLoop()
}
function boddy () {
  alert(`Wrong answer, Boddy, guess you didn't get
  as good a look as you though!

  !!!GAME OVER!!!`)
  welcome()
}

function deathLoop () {
  alert(`Excelent work, Boddy. Now you have a chance
    to redeem yourself despite your despicable deeds.

    Just answer the next question correctly
    and you'll be sent to heaven! You have three chances!`)
  question()
}

function question () {
  var counter = 0
  var number = '1111'
  while (counter < 3) {
    var guess = prompt(`I am thinking of a number between
      1 and 10,000. What is it??`)
    if (guess === number) {
      alert('Good-bye Boddy, you win!')
      welcome()
    } else {
      counter += 1
      alert('Not even close, try again!')
    }
  }
  if (counter === 3) { return alert('Sorry, no heaven this time!') }
}

welcome()


var welcomeNote = ['Welcome to PlotJump!', 'This interactive text game allows you to explore popular movies and face the same obstacles and triumphs as your favorite characters!', 'This week’s special edition will be on the Indiana Jones series! Are you ready to begin? Y/N']
var answer = ''

function welcome () {
  for (let i = 0; i < welcomeNote.length - 1; i++) {
    alert(welcomeNote[i])
  }
  if (prompt(welcomeNote[2]).toLowerCase() === 'y') {
    answer = prompt('Sweet, what should I call you today? (Enter your name)')
    alert(`Nice to meet you ${answer}! Dr. Indiana Jones will be lucky to have your help today! Let's begin.`)
    startGame()
  } else { alert("Sorry you don't want to explore today. Come back soon!") }
}

function invalidOption () {
  answer = prompt('Sorry, that is not a valid choice. Try again.')
}

function startGame () {
  while (answer.toLowerCase() !== 'n') {
    let films = ['Raiders of the Last Ark', 'Temple of Doom', 'The Last Crusade', 'Kingdom of the Crystal Skull']
    let filmChoice = prompt('Which of the 4 Indiana Jones movies would you like to explore today?\n\n1. Raiders of the Last Ark\n2. Temple of Doom\n3. The Last Crusade\n4. Kingdom of the Crystal Skull\n\nEnter a number 1-4.')
    switch (filmChoice) {
      case '1':
        raidersArk()
        break
      case '2':
        templeDoom()
        break
      case '3':
        lastCrusade()
        break
      case '4':
        kingdomSkull()
        break
      default:
        invalidOption()
    }
    answer = prompt('Indiana Jones always has more adventures up his sleeve. Ready to try a different movie? Y/N')
  }
  theEnd()
}

function theEnd () {
  alert("That's all folks! Refresh to play again.")
}

welcome()

function raidersArk () {
  answer = prompt("Welcome to 1936! \nIndy has just helped US Army Intelligence decrypt a coded message that indicates the Nazis are close to finding the Ark of the Covenant.\n\nIf you need a refresher on the Ark, press 1. \nIf you're ready to start the journey to defeat the Nazis and protect the Ark, press 2.")
  if (answer === '1') {
    answer = prompt('Ark of the Covenant — a golden and jeweled chest constructed under the guidance of God and Moses that housed the remnants of the tablets of the Ten Commandments.\nLegends imply that Adolf Hitler could use the Ark to render his rising army invincible! Ready to try and stop him? Y/N').toLowerCase()
    if (answer === 'y') {
      goToNepal()
    } else {
      alert("I'm sorry, with the Nazis one step ahead of us, we don't have enough time to explain further. Please do some research and come back when you feel more comfortable with the mysteries of ancient archaeology!")
    }
  } else if (answer === '2') {
    goToNepal()
  } else {
    invalidOption()
  }
}

function goToNepal () {
  answer = prompt('Indiana travels to Nepal in order to speak with another fan of ancient artifacts, Marion Ravenwood. She is protecting the Staff of Ra headpiece, which is needed to fully unlock the location of the Ark. \n\nUnfortunately, Nazis have beaten you to Nepal, and you are now caught in a gun fight!\n\nHow many shots do you want to fire?')
  if (answer > 10) {
    alert('You brought too much firepower!\n\n A bullet ricocheted off a chandelier and hit you. Unfortunately you have to stay in Nepal and heal while Indy and the crew continune.')
  } else if (answer > 5) {
    alert('Nice shooting! You got them all! Now it is time to escape to Cairo and use the headpiece to find the location of the Ark.')
    goToCairo()
  } else {
    alert('Yikes, unfortunately that was not enough shots, and the Nazis defeated you. Bring more firepower next time!')
  }
}

function goToCairo () {
  answer = prompt('Of course Cairo brings additional obstacles, but they are no match for Indiana Jones!\n\nAfter fighting off swordsmen, destroying a truck full of Nazis, and finally finding the correct location of the Ark of the Covenant, Indy and Marion find themselves in a pit of snakes watching the Nazis leave with the Ark! \nType "SsSsSsS" to help them escape!')
  if (answer === 'SsSsSsS') {
    alert('Nicely done! Now it is time to go get that Ark once and for all!')
    finishRaiders()
  } else {
    alert('It sssucks to be the one to tell you thisss, but your entry wasss incorrect. You were jussst eaten by snakesss. Sssorry about that!')
  }
}

function finishRaiders () {
  answer = prompt('Indy stows away on a Nazi U-Boat, and steals a soldiers uniform when at port. To prevent the Nazis from using the powers of the Ark to become invincible, Indiana threatens to shoot the Ark with a rocket launcher. Should he do it? Y/N')
  if (answer.toLowerCase() === 'n') {
    alert("Thanks for being reasonable. As an archaeologist, Indiana was also too curious to see the Ark's contents, so he surrenders the rocket launcher, and is tied up by the Nazis.")
    meltFaces()
  } else if (answer.toLowerCase() === 'y') {
    alert('Unfortunately, when rockets and mystical artifacts interact, the whole world explodes! So much for trying to do the right thing...you dead now.')
  } else {
    invalidOption()
  }
}

function meltFaces () {
  answer = prompt('Uhhh, guys? Looks like the Nazis are about to open the Ark. Should we watch or shut our eyes?\n("Watch" or "Shut Our Eyes")')
  if (answer.toLowerCase() === 'watch') {
    alert('Nooo, strange and mysterious sprits emerged causing your face to be melteddd with the rest of the Nazis. The wrath of God is pretty hard core.')
  } else if (answer.toLowerCase() === 'shut our eyes') {
    alert('Excellent decision! You just escaped the wrath of God and lived happily ever after. Everyone else...got their faces melted off. Yeesh.')
  }
}

function templeDoom () {
  answer = prompt("Did you know this film is actually set in 1935, a year before the first Indiana Jones movie was released?\n\nAnyway, enough trivia. This film begins with Indy trading the remains of Emperor Nurhachi to a Shanghai gangster for the famous Peacock's Eye diamond. How many carats do you think this diamond is?")
  if (answer === '140') {
    alert('Wow, that is EXACTLY right. You really know your stuff. Unfortunately, so does the gangster and he tries to poison Indy in order to keep both artifacts for himself. Fortunately, Indy escapes on a cargo plane just in time.')
    humanSacrifice()
  } else if (answer > 140) {
    alert('Nah, not quite. But good guess. Unfortunately, the gangster wants to keep both items and tries to poison Indy. Fortunately, Indy escapes on a cargo plane just in time.')
    humanSacrifice()
  } else {
    alert("Not even close. Sorry, if you don't know simple diamond facts, you can't be trusted on this adventure. Bye!")
  }
}

function humanSacrifice () {
  answer = prompt('After the pilot abandons the plane, Indy and crew crashland in a remote village of India. \n\nThe villagers explain that their children and sacred stone have all been taken by the Thuggee Cult of Pankot Palace. To help the villagers get their children and sacred stone back, Indiana enters the Pankot Palace.\n\nBeneath the palace is a vast underground chamber. Navigate the chamber by typing "North", "West", "East", or "South"')
  switch (answer.toLowerCase()) {
    case 'north':
      alert('Gross! You found the chamber covered in thousands of cockroaches! There is no way out!')
      break
    case 'south':
      alert('Ooops, you got caught in the room of spikes. We are going to have to leave you here.')
      break
    case 'west':
      alert('You found a secret passage that even Indiana did not find. You all escape quickly and return home safely.')
      break
    case 'east':
      answer = prompt("Excellent navigating, you made it past all of the hidden traps!\n\nUnfortunately, you have stumbled upon the ancient ritual of the Thuggee people. The high priest sacrifices a human to the goddess Kali, and takes Indiana's travel companions hostage!\n\nTo get them back, Indy has to fight the Chief Guard and avoid being smashed on a rock conveyer belt. Type 'punch jump pow' to save him!")
      if (answer.toLowerCase() === 'punch jump pow') {
        escapeTemple()
      } else {
        alert('Sorry, your moves were not fast enough, and you were crushed by the rock.')
      }
      break
    default:
      invalidOption()
  }
}

function escapeTemple () {
  answer = prompt('Indy defeats the Chief Guard, grabs the sacred stone, and saves his friends. Now he just needs to cross an old rope bridge and defeat the High Priest to escape!\n\n Which weapon should Indy use?\n\nA. Trusty whip\nB. Sharp sword\nC. Handgun')
  switch (answer.toLowerCase()) {
    case 'a':
      alert("Oh no! Indy's whip got caught on the old rope bridge. You all drop into the river below and are eaten by crocodiles.")
      break
    case 'b':
      alert('Yes! Indy uses the sword to break the bridge and all the bad guys fall into the river below and are eaten by crocodiles.\n\nIndy returns the sacred stone and missing children to the village and lives to fight another day.')
      break
    case 'c':
      alert('Unfortunately when Indy reaches for his gun, it is missing from his holster! The High Priest uses ancient magic and everyone is doomed to be stuck in the Temple forever!')
      break
    default:
      invalidOption()
  }
}

function lastCrusade () {
  answer = prompt("In this film, Indiana's father has vanished while searching for the Holy Grail! He travels to Venice to the library where his father was last seen to pick up the hunt.\n\nThere, Indiana meets the Brotherhood of the Cruciform Sword, who are determined to protect the Grail at all costs.\n\nThey tell Indy his father is being held near the Austrian-German border. Type 'Germany' to travel there and begin the rescue for Henry Jones, Sr. and the Holy Grail!")
  if (answer.toLowerCase() === 'germany') {
    defeatNazis()
  } else {
    alert('You got lost along the way. Since we can not find you, we can not continue. Sorry!')
  }
}

function defeatNazis () {
  answer = prompt('When arriving in Germany, Indiana discovers that the castle is a Nazi command center! If Indy can rescue his father and escape, they can continue on their journey to find the Holy Grail. Take a guess at how many Nazis Indiana has to defeat. (Type a number)')
  if (answer >= 20) {
    answer = prompt('Good work. Indiana and his father escape across Germany, steal back their research notes from the Nazis, and head to Hatay to find the Canyon of the Crescent Moon - where the grail is rumored to be hiding. Are you ready to enter the Canyon? Y/N')
    if (answer.toLowerCase() === 'y') {
      enterTemple()
    } else {
      alert("To each their own...but why did you come all this way if you didn't want to help find the treasure? See ya later, I guess.")
    }
  } else {
    alert('You have underestimated the Nazi forces. You are stuck in Germany while the rest of the caravan heads to the desert.')
  }
}

function enterTemple () {
  answer = prompt('The Grail Temple has three challenges you must pass before you can get the Holy Grail. Please guess the correct order of the following three words to pass: "leap", "spell", "kneel". Please enter the words with commas in between. For example, "cat, dog, fish"')
  if (answer.toLowerCase() === 'kneel, spell, leap') {
    getHolyGrail()
  } else {
    alert('You are not worthy. You shall not pass.')
  }
}

function getHolyGrail () {
  answer = prompt('You made it!! Your final task is to select the grail from a set of many cups. Which do you choose?\nA. The sparkling cup adorned with rubies\nB. The old faded cup with a simple cross etching\nC. A glass encrusted with diamonds')
  switch (answer.toLowerCase()) {
    case 'a':
      alert('You chose poorly. Your body turns to dust and you disappear!')
      break
    case 'b':
      alert("You chose wisely. The plain carpenter's cup will grant you immortality. Indiana and his father safely return home.")
      break
    case 'c':
      alert('You chose poorly. Your body turns to dust and you disappear!')
      break
    default:
      invalidOption()
  }
}

function kingdomSkull () {
  alert('Really? You want to explore this one? It was the worst Indiana Jones movie by far and never should have been made.\n\nPlease take some time to reflect on your choices.')
}
//
// function checkSeen(film, fn2Run) {
//   let haveSeen = prompt(`You've chosen ${film} ! Have you seen this movie before? Y/N`)
//   if (prompt(haveSeen).toLowerCase() === 'y') {
//     timesSeen = prompt('How many times would you estimate?')
//     if (timesSeen > 10) {
//       alert("Wow, a true fan! Let us know if we've left out your favorite part!")
//     } else if (timesSeen > 1) {
//       alert("Okay, so a little familiar with this one. Let's jog your memory and get started.")
//     } else {
//       alert('I thought you said you had seen this? Oh well, here we go!')
//     }
//     fn2Run
//   } else {
//     contGame = prompt('Yikes! There are spoilers ahead. Are you sure you want to continue? Y/N')
//     if (contGame.toLowerCase() === 'y') {
//       alert('You da boss. Here we go!')
//       fn2Run
//     } else {
//       alert("I totally get it. Come back when you've watched it and are ready to play!")
//     }
//   }
// }

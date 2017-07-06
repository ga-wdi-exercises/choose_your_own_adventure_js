
var name = prompt('What is your name?')

if (name !== null) {
  var roadTrip = prompt('Nice to meet you. Are you up for a road trip? (Yes/No)')
}

if (roadTrip === 'Yes') {
  var whereTo = prompt('Ok, lets go. Philadelphia or Cleveland?')
  if (whereTo === 'Philadelphia') {
    var cheeseSteak = prompt('Ok. Cheesesteak wit wiz, or witout?')
  } if (cheeseSteak === 'wit wiz') {
    var youWin = prompt('You Win!! Enjoy your cheesesteak')
  } else {
    var youLose = prompt('Who would order a cheesesteak this way? Please go home. Game over.')
  }
} else {
  var planeTrip = prompt('Alright, you have $500 in airfare. Where to?')
}

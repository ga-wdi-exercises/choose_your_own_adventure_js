var userName = prompt('What is your name?')

var quest = prompt(`Nice to meet you ${userName}! What is your quest?

(1). To tie a bowline knot!
(2). To fight a dragon!
(3). To get on Mugatu's Derelicte Campaign!

(Enter the corresponding number to begin your adventure!)`)

switch (parseInt(quest)) {
  case 1:
    alert(`${userName}, are you ready to learn some knots, my dude?`)
    var knot = prompt(`Alright, ${userName}, take the string in your hand and make a loop. The shorter side of the loop should be resting on top of the loop. The loop is the hole, the end of the shorter part of the string is your rabbit, and the longer part of the string is the tree. Will you guide your rabbit out of the hole, around the tree, and back into the hole again? (YES or NO)`).toUpperCase()
    if (knot === 'YES') {
      alert(`Great job, ${userName}! You tied a bowline!`)
      changePic2 ()
    } else if (knot === 'NO') {
      alert('You are terrible at following the most simple of directions!')
      changePic2 ()
    } else {
      alert('Are YES/NO questions really that complicated? Game over, dude... game over.')
      changePic2 ()
    }
    break
  case 2:
    var drag = prompt(`Alright, ${userName}, the dragon is charging at you across a scorched field. Which of your weapons will you wield against it?
    1. SWORD
    2. SPATULA
    3. JUGGLING
    (Enter the corresponding number to fight your foe!)`)
    if (drag === '1') {
      alert('You run at the beast with your sword and swiftly realize that this was a terrible idea before being immolated. Better luck next time?')
      changePic()
    } else if (drag === '2') {
      alert('The dragon is inspired by your spatula and suggests that the two of you open a burger joint. Your shield is an excellent serving tray and its flames only slightly overcook the beef. Mazel tov!')
      changePic()
    } else if (drag === '3') {
      alert(`...${userName}... why? This is so obviously game over I won't even bother explaining it...`)
      changePic()
    } else {
      alert('We do not look kindly on improv. Game over.')
      changePic()
    }
    break
  case 3:
    alert(`${userName}, I need you to accompany me to a relaxing Daiye Spa.`)
    var days = prompt('How many daiyes would you like to spend here? (Stay at least 1)')
    days = (parseInt(days))
    for (i = 1; i <= days; i++) {
      alert(`You have spent ${i} relaxing daiyes at the Daiye Spa!`)
    }
    alert(`On second thought, ${userName}, maybe you should kill the Prime Minister instead. But for now, just relax!`)
    changePic3 ()
    break
  default:
    alert(`${userName}, are you fucking dense? Game over, my dude.`)
}
function changeText () {
  document.getElementById('name').innerHTML = `${userName}, your adventure is over`
}
function changePic () {
document.getElementById("ending").src="drag.jpg";
}
function changePic2 () {
document.getElementById("ending").src="bowline.jpg";
}
function changePic3 () {
document.getElementById("ending").src="daiye.gif";
}
changeText()

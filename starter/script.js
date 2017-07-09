 function game () {
  var name = prompt('Enter Name') // prompt user to enter name
  $('h2').text(`Greetings ${name} welcome to the game`) // return greeting with name
  var choice1a
  var choice2a
  var choice3a
  choice1 = prompt(`press 1 for dragons, 2 for unicorns or 3 for really much bigger dragons`) // give user first choice of three different options

  switch (choice1) {
    case choice1 = '1':
      console.log('you have chosen dragons')
      break
    case choice1 = '2':
      console.log('you have chosen unicorns')
      break
    case choice1 = '3':
      console.log('uh oh you chose the bigger dragons')
      break

  }
  if (choice1 === '1') {
    console.log('you see a bunch of dragons ahead of you,  luckily they arent that big')
    choice1a = prompt('do you go forward or backwards? Enter F/B').toLowerCase()
    console.log(choice1a)
    if (choice1a = 'F') {
      console.log('You walk towards the dragons for some reason.....you died')
    }
    if (choice1a = 'B') {
      console.log('Coward....there is no backwards, you died....again')
    }
  }
  if (choice1 === '2') {
    console.log('you see a bunch of unicorns ahead of you')
    choice2a = prompt('do you go forward or backwards? Enter F/B').toLowerCase()
    console.log(choice2a)
    if (choice2a === 'f') {
      var sleepDays = parseInt(prompt('You come to a dark room with a small cot. Suddenly you feel tired, how many hours will you sleep?'))
      for (let i = 1; i < sleepDays; i++) {
        alert(`You slept for ${i} hours`)
      }
    }
  }
  if (choice1 === '3') {
    alert('these dragons are way too big. You lose please try again')
  }
}
$(document).ready(function(){
  var start = function () {
    game()
  }
  $('.startGame').on('click', start)
})

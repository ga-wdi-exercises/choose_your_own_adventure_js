function game () {
  $('.startGame').remove()
  var name = prompt('Enter Name')  // prompt user to enter name
  $('h2').text(`Greetings ${name} welcome to the game`) // return greeting with name
  choice1 = prompt(`press 1 for dragons, 2 for unicorns or 3 for really much bigger dragons`) // give user first choice of three different options

  switch (choice1) {
    case choice1 = '1':
      $('p').text('you have chosen dragons')
      break
    case choice1 = '2':
      $('p').text('you have chosen unicorns')
      $('p').css('color', 'red')
      $('h2').css('color', 'red')
      $('body').css('background-image', 'url(../starter/img/unicorn.jpg)')
      break
    case choice1 = '3':
      $('p').text('uh oh you chose the bigger dragons')
      $('body').css('background-image', 'url(../starter/img/bigdragon.jpg)')
      break
  }
}
function nextChoice () {
  if (choice1 === '1') {
    choice1a = prompt('do you go forward or backwards? Enter F/B').toLowerCase()

    if (choice1a === 'f') {
      alert('You walk towards the dragons for some reason.....you died')
      location.reload()
    }
    if (choice1a === 'b') {
      alert('Coward....there is no backwards, you died....again')
      location.reload()
    }
  }

  if (choice1 === '2') {
    $('p').text('you see a bunch of unicorns ahead of you')
    choice2a = prompt('do you go forward or backwards? Enter F/B').toLowerCase()

    if (choice2a === 'f') {
      var sleepDays = parseInt(prompt('You come to a dark room with a small cot. Suddenly you feel tired, how many hours will you sleep?'))
      for (let i = 0; i < sleepDays; i++) {
        alert(`You are now stuck in a sleep loop. You slept for ${i + 1} hours`)
      }
      alert('You died in your sleep')
      location.reload()
    } else if (choice2a === 'b') {
      alert('YOU DIED')
      location.reload()
    }
  }
  if (choice1 === '3') {
    $('p').text('these dragons are way too big.')
    choice3a = prompt('you come to a 4 way crossing, which way do you go? Enter F/B/R/L').toLowerCase()
    switch (choice3a) {
      case choice3a = 'f':
        alert('you died again :)')
        location.reload()
        break
      case choice3a = 'b':
        alert('NOOOOOOPE!!!')
        location.reload()
        break
      case choice3a = 'r':
        alert('nah.....')
        location.reload()
      case choice3a = 'l':
        $('p').text('you found the way out!')
        $('body').append('<div class="winner"></div>')
        $('.winner').css('background-image', 'url(../starter/img/win.gif)')
        $('.next').remove()
        $('h2').remove()
        $('h1').remove()
        break
    }
  }
}

$(document).ready(function () {
  var start = function () {
    game()
    $('body').append('<button class="next">Next</button>')
    $('.next').on('click', nextChoice)
  }
  $('.startGame').on('click', start)
})

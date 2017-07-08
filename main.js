/* global $ */

var input = ''

// find name
var findName = 'You find yourself on the floor of a small dimly lit room.  There is no furniture and no windows, only one door.  A hooded figure opens the door and enters.  "What is your name?" It creaks out.'

// change to darkness
var darkness = function () {
  $('body').css('background-color', 'black')
  $('.start').remove()
}

var startDialogue = function () {
  $('.container').append('<p class="dialogue">' + findName + '</p>')
  $('.container').append('<p class="subDialogue"></p>')
  $('.container').append('<input placeholder = "name"></input>')
  $('.container').append('<button class="continue">continue</button>')

  $('.continue').on('click', function () {
    input = $('input').val()
    $('.dialogue').text('"' + input + ', it suits you well.  A small name for a small dispicable creature such as yourself.  You may be wondering why you are here.  Wonder no more!  You are dead.  How? I do not know.  Why? I do not care.  Just know that you are dead, and this is where you shall retire for eternity.  This sorry dimlit room matches your sorry dimlit mind, you worthless, pitiful swine.  You may ask me one question, do it now."')
    $('.subDialogue').text('Type either number 1, 2, or 3 to ask the hooded figure one of the following questions...  1) What is the meaning of life?  2) What will happen to me here?  3) What is your name?')

    $('.continue').on('click', function () {
      switch (input) {
        case '1':
          $('.dialogue').text('"Ha, you are as foolish as you are worthless.  There is no meaning, just a bunch of weird things that happen.  Now goodbye, I have other matters to attend to."  The hooded figure leaves the room.')
          $('.subDialogue').text('Do you  1) Try to leave the room, or 2) Sit with your thoughts?')
          $('.continue').on('click', function () {
            if (input === '1') {
              $('.dialogue').text('You sit on the floor and think.  You think about life and death and all the mysteries of the universe.  You fathom every possible thought that could possible be made up with your neurocircuitry and then you do it again and again and never stop.')
              $('.subDialogue').text('END')
              $('input').remove()
              $('button').remove()
            } else if (input === '2') {
              $('.dialogue').text('You walk to the door only to find that it is OPEN.  What the hay??  You walk out.  It sure is dark.  You keep walking.  It gets darker.  It gets darker and darker until you cannot see anything at all and you cannot tell whether you are alive or dead.')
              $('.subDialogue').text('END')
              $('input').remove()
              $('button').remove()
            } else {
              $('.dialogue').text('You refuse to play the game by the rules, congratulations.')
              $('.subDialogue').text('END')
              $('input').remove()
              $('button').remove()
            }
          })
          break
        case '2':
          $('.dialogue').text('I already told you, you fool.  You stay in this room.  Well....that about wraps it up for me.  Goodbye now.')
          $('.subDialogue').text('What do you say in response?  1) Wait! 2) Goodbye! 3) Nothing')
          $('.continue').on('click', function () {
            if (input === '1') {
              $('.dialogue').text('"You are the one who will be waiting now.  Ha ha!  That is a good one."')
              $('.subDialogue').text('END')
              $('input').remove()
              $('button').remove()
            } else if (input === '2') {
              $('.dialogue').text('"Uh, yeah...bye"')
              $('.subDialogue').text('END')
              $('input').remove()
              $('button').remove()
            } else if (input === '3') {
              $('.dialogue').text('The hooded figure walks out of the room.  You win, or loose, depending on how you look at the situation.')
              $('.subDialogue').text('END')
              $('input').remove()
              $('button').remove()
            } else {
              $('.dialogue').text('You refuse to play the game by the rules, congratulations.')
              $('.subDialogue').text('END')
              $('input').remove()
              $('button').remove()
            }
          })
          break
        case '3':
          $('.dialogue').text("My name?  Why, I suppose I'm not sure.  No one has ever asked me that before.  I have to admit that I am touched by your question - that you would reach out to me in such a time as this.  I appologize for coming on a little strong.  To answer your questions, you can call me...Patty.  Yes, Patty will do.  To make it up to you, please pick a number between 1 and 100' and I shall give you a surprise")
          $('.subDialogue').text('')
          $('.continue').on('click', function () {
            input = Math.round(parseInt(input))
            if (input >= 1 && input <= 100) {
              for (let i = 0; i < input; i++) {
                $('.container').prepend('<p> You are the best</p>')
              }
              $('.subDialogue').text('END')
              $('.dialogue').remove()
              $('input').remove()
              $('button').remove()
            } else {
              $('.dialogue').text('You refuse to play the game by the rules, congratulations.')
              $('.subDialogue').text('END')
              $('input').remove()
              $('button').remove()
            }
          })
          break
        default:
          $('.dialogue').text('You refuse to play the game by the rules, congratulations.')
          $('input').remove()
          $('button').remove()
      }
    })
  })
}

$(document).ready(function () {
  var start = function () {
    darkness()
    startDialogue()
  }
  $('.start').on('click', start)
})

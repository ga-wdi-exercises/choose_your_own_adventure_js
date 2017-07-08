/* global prompt */
/* global alert */
/* global confirm */
var song1 = ['Alt J is playing at a nearby stage and you hear interlude1 playing... ', '"She she she she only ever eva-va-va-va walks to-to count-count-count her steps, Eighteen-teen-teen strides and she stops to abide, By the law that she herself has set, That eighteen steps is one complete set"', '"And before the next nine right and nine left, She looks up-up at the bluuuueeee, And whispers to all of the above"', '"Don\'t let me drown, don\'t breathe alone, No kicks no pangs-no broken-bones, Never let me sink, always feel at home, No sticks-no shanks and-no stones, Never leave it too laaattte, always enjoy the taste, Of the great-great-great-grey world of hearts"', '"As all dogs everywhere bark-bark-bark, It\'s worth knowing, Like all good fruit the balance of life is in the ripe and ruin"', '* you are lost in the music *', '* and fall asleep happy *']
// intro
function intro () {
  alert('Hello there, my name is Tune')
  alert('Welcome to Tune-Town. I hear you are looking to start a band...')
  confirm('is that correct?')
  if (true) {
    alert('YAY, we are so excited to have some new tunes to jam out to')
    alert('or is it more of a sway?')
    var answer = prompt('sway or jam?')
    if (answer === 'sway') {
  // option
      alert('ah, love some chill, calm tunes...')
      var bandName = prompt('What did you say the name of your band was?!?')
      alert(`${bandName}, that's such a chill name, the people here will love it`)
      var bandMembers = prompt(`how many members are in ${bandName}?`)
      // enter switch
      switch (true) {
        case bandMembers < 2:
        // code
          alert(`we have a perfect spot at The Silo for ${bandName} to set up and play`)
          break
        case bandMembers >= 2 && bandMembers < 5 :
        // code
          alert(`We are going to show you to The Eucalyptis where ${bandName} can setup and play`)
          break
        case bandMembers >= 5 && bandMembers < 10:
        // code
          alert(`we have just the spot for ${bandName}... you'll be over at The Panini Shop`)
          break
        case bandMembers >= 10:
        // code
          alert(`wow, ${bandName} must be challenging Edward Sharpe for most members, we'll set you up at The Heights`)
          break
        default:
        // code
          alert(`hmm, I didn't quite catch that, I guess we can send you to the Panini Shop`)
      }
    } else if (answer === 'jam') {
  // option
      alert('ah, jam awayyy!')
      var bandName = prompt('What did you say the name of your band was?!?')
      alert(`${bandName}, that's such a dope name, the people here will love it! before I send you to the venue...`)
      var bandMembers = prompt(`how many members are in ${bandName}?`)
      // enter switch
      switch (true) {
        case bandMembers < 2:
        // code
          alert(`we have a perfect spot at The Attic for ${bandName} to set up and play`)
          break
        case bandMembers >= 2 && bandMembers < 5 :
        // code
          alert(`We are going to show you to The Cove where ${bandName} can setup and play`)
          break
        case bandMembers >= 5 && bandMembers < 10:
        // code
          alert(`we have just the spot for ${bandName}... you'll be over at The Coupe`)
          break
        case bandMembers >= 10:
        // code
          alert(`wow, ${bandName} must be challenging Edward Sharpe for most members, we'll set you up at The Highway Stage`)
          break
        default:
        // code
          alert(`hmm, I didn't quite catch that, I guess we can put ${bandName} at The Coupe.`)
      }
    } else {
      alert('hmm, yes I\'m sure that is a viable way to listen to music but you won\'t find that here')
      var stayConfirm = confirm('is it okay if I recommend you some tunes to check out while you are here?')
      if (stayConfirm) {
        alert('Awesome, let\'s walk over to "the cove" there\'s a great band called')
        alert('Lewis Del Mar -- you are sure to love them')
        alert(' * You should probably check out Lewis Del Mar - "Painting (Masterpiece)" now * ')
        alert('plenty more artists to check out, have fun walking around this place')
        var listeningBooth = function () {
          for (var i = 0; i < song1.length; i++) {
            alert(song1[i])
          }
        }
        listeningBooth()
      } else {
        alert('*sigh* come back some other time, bye!')
      }
    }
  }
}
intro()

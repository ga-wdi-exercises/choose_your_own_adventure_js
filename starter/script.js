/* global prompt */
/* global alert */
/* global confirm */
var song1 = ['Alt J is playing at a nearby stage and you hear interlude1 playing... ', '"She she she she only ever eva-va-va-va walks to-to count-count-count her steps, Eighteen-teen-teen strides and she stops to abide, By the law that she herself has set, That eighteen steps is one complete set"', '"And before the next nine right and nine left, She looks up-up at the bluuuueeee, And whispers to all of the above"', '"Don\'t let me drown, don\'t breathe alone, No kicks no pangs-no broken-bones, Never let me sink, always feel at home, No sticks-no shanks and-no stones, Never leave it too laaattte, always enjoy the taste, Of the great-great-great-grey world of hearts"', '"As all dogs everywhere bark-bark-bark, It\'s worth knowing, Like all good fruit the balance of life is in the ripe and ruin"', '* you are lost in the music *', '* and fall asleep happy *']
// intro
function intro () {
  alert('Hello there, my name is Tune')
  alert('Welcome to Tune-Town. I hear you are looking to start a band...')
  confirm('is that correct?')
  if (confirm) {
    alert('YAY, we are so excited to have some new tunes to jam out to')
    alert('or is it more of a sway?')
    var answer = prompt('sway or jam?')
    if (answer === 'sway') {
  // option
      alert('ah, love some chill, calm tunes...')
      var bandName = prompt('What did you say the name of your band was?!?')
      alert(`${bandName}, that's such a chill name, the people here will love it`)
      var bandMembers = prompt(`how many members are in ${bandName}`)
      // enter switch
    } else if (answer === 'jam') {
  // option
      alert('ah, jam awayyy!')
      var bandName = prompt('What did you say the name of your band was?!?')
      alert(`${bandName}, that's such a dope name, the people here will love it! before I send you to the venue...`)
      var bandMembers = prompt(`how many members are in ${bandName}, if 1 - enter 't'; if 2-5 - enter 'n'; if 6-12 - enter 'p'; if 12+ enter 'r'`)
      // enter switch
      switch (bandMembers) {
        case bandMembers === 't':
        // code
          alert(`we have a perfect spot at The Attic for ${bandName} to set up and play`)
          break
        case bandMembers === 'n':
        // code
          alert(`We are going to show you to The Cove where ${bandName} can setup and play`)
          break
        case bandMembers === 'p':
        // code
          alert(`we have just the spot for ${bandName}... you'll be over at The Coupe`)
          break
        case bandMembers === 'r':
        // code
          alert(`wow, ${bandName} must be challenging Edward Sharpe for most members, we'll set you up at The Highway Stage`)
          break
        default:
        // code
          alert('*Please provide a valid entry*')
          bandNumber
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
  } else {
    alert('I guess you should head over to the listening station and check out some of our latest arrivals')
    // enter options
    listeningBooth()
  }
}

intro()

// Intro an annoyingly happy song

// loop through the song, which is entered in an array
// var enterCommissionerName = prompt('What\'s my name again, what\'s my name again?!')
// Have user input favorite song
// if less than x characters.. insult their song choice ...
// between x & y say ok ...
// otherwise phenomenal choice

// what instrument do you want to play
// guitar, drums, violin, dj
  // if guitar - how many strings?
    // if 6:
      // mainstream band alert -- BOOO!
    // if 7:
      // your band is going to be so hip and cool
    // if 9:
      // your band is going to be awesome
    // if 12:
      // do you really need that many stings? who are you, hamilton leithauser?
  // if drums - rock out
    // who's your favorite drummer out of these three?
      // 1 Carter Beauford, 2 Travis Barker, 3 Thom Sonny Green, 4 Other
        // 1 - BOOM! My favorite too
        // 2 - High School Angst, woooo!
        // 3 - The most chill and deliberate drummer
        // 4 - who else is as good as these?
  // if violin
    // most underrated instrument in our opinion
    // classical, folk, or rock
      // if classical
        // if you bring that influence to the band, you're sure to be a hit
      // if folk-rock
        // underrated instrument in an underrated genre
      // if rock
        // the band will be great if you can play anywhere near as well as boyd tinsley
  // if dj
    // bye, no room in Tune-Town for another Tiesto -- only Zedd allowed here

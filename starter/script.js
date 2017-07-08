
var name = prompt('What is your name?')

if (name !== null) {{
  var roadTrip = prompt('Nice to meet you. Are you up for a road trip? (Yes/No)')
  }
    if (roadTrip === 'Yes') {{
      var whereTo = prompt('Ok, lets go. Philadelphia or Cleveland?')}
        if (whereTo === 'Cleveland') {{
          var cavs = prompt('Are you a Cavs fan? (Yes/No)')
            } if (cavs === 'Yes') {
              var seriesOver = prompt('Sorry. Better luck next year')
            } else if (cavs !== 'Yes'){
              var goodChoice = prompt('Good choice. LeBron will be gone after next year anyway.')}}

        else if (whereTo === 'Philadelphia') {{
          var cheeseSteak = prompt('Ok. Cheesesteak or salad?')
            } if (cheeseSteak === 'Cheesesteak') {
              var youWin = prompt('You Win!! Enjoy your cheesesteak')
              $('body').append("<img src='ches.jpg'/>")
              $('body').append("<button>Click me!</button>")
              $('button').css("font-size", 40)
            } else {
              var youLose = prompt('Rethink this. Game over.')}}
            }

  else {{
    var busTrip = prompt('Alright, Greyhound it is. Where to? (Richmond, Durham or Baltimore?)')}
       switch(busTrip) {
        case 'Richmond': var richmond = prompt("Ok, hope you don't hit traffic.")
        break;
        case 'Durham': var durham = prompt("Ok, just don't talk to me about Duke basketball, please.")
        break;
        case 'Baltimore': var baltimore = prompt("Great choice. Grab a crabcake.")
        break;}}
  }

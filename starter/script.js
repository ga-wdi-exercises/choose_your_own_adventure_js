(function game () {
// question one
  var fireIce = (prompt('What do you choose - fire or ice?')).toLowerCase()
  var incorrectOption = 'You failed to pick a correct option, you clearly do not have the wits to pay this game'

  if (fireIce === 'fire') {
  // fire question two
    var firePartner = (prompt('You\'ve joined Danny\'s crew. Do you want to drink with Tyrion or ride dragons with her?\nChoose: Tyrion or Danny?')).toLowerCase()
    if (firePartner === 'tyrion') {
  // fire question three w/loop
      var drinks = parseInt(prompt('How many drinks do you want?\nEnter a number'))
      if (drinks < 5) {
        for (let i = 0; i < drinks; i++) {
          alert('cheers!')
        }
          alert('You guys drank just enough to get those creative juices flowing. You and Tyrion devise a plan to defeat the White Walkers and take back the iron throne!')
      } else if (drinks >= 5) {
          alert('Wow you drank Tyrion under the table! But you drank way too much you\'ll have to sleep this one off.')
      } else {
          alert(incorrectOption)
      }
    } else if (firePartner === 'danny') {
        alert('Wow you guys got lost! You end up north of the wall and stop for directions. Turns out those White Walkers aren\'t too bad after all!\nHe recognized Danny as a long lost relative, melting his heart and bringing peace to all the Kingdoms.')
    } else {
        alert(incorrectOption)
    }
  } else if (fireIce === 'ice') {
    // question two - ice
      var iceLocation = (prompt('You\'re on the road headed north, do you stop at Winterfell or head towards the Wall?\n\nChoose: Winterfell or Wall?')).toLowerCase()
        if (iceLocation === 'winterfell') {
    // question three at winterfell
          var winterfellActivity = (prompt('Welcome to Winterfell! Would you like to have a drink with Ned or go climbing with Bran? \n\nChoose: Ned or Bran?')).toLowerCase()
            if (winterfellActivity === 'ned') {
                alert('Wow you guys went all night!\nUnfortunately he drank too much and missed his trip to King\'s Landing. I guess we\'ll never know how that would have turned out... Enjoy the rest of your stay in Winterfell!')
                  return
            } else if (winterfellActivity === 'bran') {
                alert('You being an amateur was a good reminder of the importance of safe climbing for Bran!\nYou enjoy a great day spotting each other on small walls, and make it back in time for supper with the whole Stark family. Save room for the lemon cake dessert!')
                  return
            } else {
                alert(incorrectOption)
            }
    // question three at wall
        } else if (iceLocation === 'wall') {
          var wallActivity = (prompt('Wow, you spot a White Walker! What do you do? Stand and fight, run away, or say hello? \n\nChoose: fight, run, or hello?')).toLowerCase()
          }
    //swtich
          switch(wallActivity) {
            case 'fight':
                alert('Why did you think you could beat a White Walker? He clearly bested you, and now you will be cold forever.')
                break
            case 'run':
                alert('Clumsy you! You trip and fall into a bunker, discovering a secret stash of dragonglass! Good thing the White Walker is just as clumsy, you watch him fall and shatter on the glass. Congrats! You have discovered the secret weapon and have enough of it to save the seven kingdoms!')
                break
            case 'hello':
                alert('Your kindness to this stranger has warmed his heart. You spend the afternoon bonding and making snowmen. Congrats! Your kindness has saved the seven kingdoms!')
                break
            default:
                alert(incorrectOption)
            }
    } else {
        alert(incorrectOption)
  }
  return
})()

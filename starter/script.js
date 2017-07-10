var div = $('div')
var person
var health = 4
var damage = 1
var body = $('body')
var start
var coward
var spiderHP = 6

Begin = setTimeout(entrance, 500)

function entrance () {
  health = 4
  damage = 1
  spiderHP = 6
  person = prompt('You come upon a cavern, your lust to explore the unknown compels you to enter. What is your name?', 'Trogdor')
  body.css('background-image', 'url("http://www.reigatecaves.com/images/inline/inline-west.jpg")')
  var nextStep = setTimeout(stepOne, 500)
}

function stepOne () {
  start = prompt(`*${person} enters the cavern* There is a fork ahead. To the RIGHT you can almost see the end of the tunnel, it would not take long to explore. The tunnel to the LEFT goes on a bit longer and you feel a sense of dread as you stare into it. You could always turn BACK, but you would forever deny your fate.`)
  if (start.toUpperCase() === 'BACK') {
    body.css('background-image', 'url("http://etinspires.com/wp-materials/uploads/2015/05/Running-away.jpg")')
    var nextStep = setTimeout(coward, 500)
  } else if (start.toUpperCase() === 'RIGHT') {
    body.css('background-image', 'url("http://sterkfonteincountryestates.org.za/wp-content/uploads/2015/01/PC291333_-bones-and-mining-tools-at-the-end-of-a-cave.jpg")')
    var nextStep = setTimeout(abandonMine, 500)
  } else if (start.toUpperCase() === 'LEFT') {
    body.css('background-image', 'url("http://cdn.lifebuzz.com/images/74885/lifebuzz-419950bbcf2dd5bff23a600e666bdabf-limit_2000.jpg")')
    var nextStep = setTimeout(floodedRoom, 500)
  } else {
    var nextStep = setTimeout(stepOne, 500)
  }
}

function abandonMine () {
  start = prompt('You have found an abondoned mine. The walls here look unstable. You see many tools buried with the remains of some unfortunate miners. You could DIG with you hands to see what you could uncover, it might be better to just GRAB something sticking out of the rocks and make a dash for the other tunnel. You could just go BACK to the other tunnel instead of risking a cave in.')
  if (start.toUpperCase() === 'DIG') {
    body.css('background-image', 'url("https://hikemtshasta.files.wordpress.com/2013/04/cascades-plutos-cave-feb2013-047-copy-custom.jpg")')
    alert('You dug too greedily. This thought rung out like a gunshot in your mind as the cavern rumbled.')
    var nextStep = setTimeout(caveIn, 500)
  } else if (start.toUpperCase() === 'GRAB') {
    body.css('background-image', 'url("http://sterkfonteincountryestates.org.za/wp-content/uploads/2015/01/PC291333_-bones-and-mining-tools-at-the-end-of-a-cave.jpg")')
    alert('You quickly grab a rusted pickaxe from the rubble and run out just as the walls collaps. You gained + 1 damage. You then head into the other tunnel.')
    damage = 2
    body.css('background-image', 'url("http://cdn.lifebuzz.com/images/74885/lifebuzz-419950bbcf2dd5bff23a600e666bdabf-limit_2000.jpg")')
    var nextStep = setTimeout(floodedRoom, 500)
  } else if (start.toUpperCase() === 'BACK') {
    body.css('background-image', 'url("http://cdn.lifebuzz.com/images/74885/lifebuzz-419950bbcf2dd5bff23a600e666bdabf-limit_2000.jpg")')
    var nextStep = setTimeout(floodedRoom, 500)
  } else {
    var nextStep = setTimeout(abandonMine, 500)
  }
}

function floodedRoom () {
  start = prompt('You enter a flooded room. The water looks almost magical. You wonder what it would be like to DRINK it. Going FORWARD would lead you out of here.')
  if (start.toUpperCase() === 'DRINK') {
    body.css('background-image', 'url("https://thechirurgeonsapprentice.files.wordpress.com/2013/06/0016.jpg")')
    var nextStep = setTimeout(dysentary, 500)
  } else if (start.toUpperCase() === 'FORWARD') {
    body.css('background-image', 'url("http://renegadetribune.com/wp-content/uploads/2015/08/un105.jpg")')
    var nextStep = setTimeout(riddleRoom, 500)
  } else {
    var nextStep = setTimeout(floodedRoom, 500)
  }
}

function riddleRoom () {
  start = prompt('You see a wall with strange writing on it and several levers. There is a riddle here: "IF THERE ARE 7 STONES AND YOU TAKE AWAY 4 STONES HOW MANY STONES DO YOU HAVE?"')
  if (start.toUpperCase() === '4') {
    alert('CORRECT!')
    body.css('background-image', 'url("http://orig14.deviantart.net/7abe/f/2012/140/9/d/the_spider_cave_by_mask1985-d50hxa5.jpg")')
    var nextStep = setTimeout(spiderLair, 500)
  } else {
    body.css('background-image', 'url("http://vignette2.wikia.nocookie.net/elderscrolls/images/7/71/False_floor_traps.png/revision/latest?cb=20130523221242")')
    alert('INCORRECT!')
    var nextStep = setTimeout(spikePit, 500)
  }

function spiderLair() {
  start = prompt('You find yourself in the lair of a giant spider. A shiver runs down your spine. You could RUN, FIGHT, or try to SNEAK past it.')
  switch (start.toUpperCase()) {
    case "RUN":
        body.css('background-image', 'url("http://oddstuffmagazine.com/wp-content/uploads/2012/08/136.jpg")')
        var nextStep = setTimeout(lost, 500)
        break;
    case "FIGHT":
        for (i = 0; i <= spiderHP; i++) {
          health --
          alert('The giant spider lunges at you dealing 1 damage. You have' + ' ' + health + ' health left.')
          if (health < 1) {
            alert('The giant spider knocks you unconcious.')
            body.css('background-image', 'url("https://3.bp.blogspot.com/-_aqsNJlvzuM/UvQF6eS2ziI/AAAAAAAAGY4/cQgTk_G0d8Q/s1600/Spiders.JPG")')
            var nextStep = setTimeout(spiderEaten, 500);
            break
          } else {
            spiderHP -= damage
            alert('You attack the giant spider for' + " " + damage + '. It has' + ' ' + spiderHP + ' health left.')

        }

        }
        if (health > 0) {
        body.css('background-image', 'url("http://i.imgur.com/4VOS6iz.png")')
        alert('You slay the giant spider. The rest of the spider swarm flees.')
        var nextStep = setTimeout(winner, 500)}
        break;
    case "SNEAK":
        alert('You walk slowly and carefuly but suddenly realized you just kicked a giant web.')
        body.css('background-image', 'url("https://3.bp.blogspot.com/-_aqsNJlvzuM/UvQF6eS2ziI/AAAAAAAAGY4/cQgTk_G0d8Q/s1600/Spiders.JPG")')
        var nextStep = setTimeout(spiderEaten, 500);
        break;
    default:
        var nextStep = setTimeout(spiderLair, 500);
}

}


}
// Endings
function caveIn () {
  alert('The walls and ceiling come down around you, crushing you.')
  alert('YOU HAVE DIED.')
  var nextStep = setTimeout(entrance, 500)
  body.css('background-image', 'url("https://upload.wikimedia.org/wikipedia/commons/9/91/Entrance_crystal_cave.jpg")')
}
function dysentary () {
  alert("You suddenly get a stabbing pain in your stomach. In retrospect, drinking cave water wasn't the smartest idea.")
  alert('YOU HAVE DIED.')
  var nextStep = setTimeout(entrance, 500)
  body.css('background-image', 'url("https://upload.wikimedia.org/wikipedia/commons/9/91/Entrance_crystal_cave.jpg")')
}
function coward () {
  alert('You are a coward.')
  var nextStep = setTimeout(entrance, 500)
  body.css('background-image', 'url("https://upload.wikimedia.org/wikipedia/commons/9/91/Entrance_crystal_cave.jpg")')
}
function spikePit () {
  alert('You fall helplessly into a pit of spikes.')
  alert('YOU HAVE DIED')
  var nextStep = setTimeout(entrance, 500)
  body.css('background-image', 'url("https://upload.wikimedia.org/wikipedia/commons/9/91/Entrance_crystal_cave.jpg")')
}
function spiderEaten () {
  alert('The spiders swarm you and devour you alive.')
  alert('YOU HAVE DIED.')
  var nextStep = setTimeout(entrance, 500)
  body.css('background-image', 'url("https://upload.wikimedia.org/wikipedia/commons/9/91/Entrance_crystal_cave.jpg")')
}
function winner () {
  alert('You find a room with treasure and a way out. Congratulations, you have beat the game!')
  alert('Want to play again?')
  var nextStep = setTimeout(entrance, 500)
  body.css('background-image', 'url("https://upload.wikimedia.org/wikipedia/commons/9/91/Entrance_crystal_cave.jpg")')
}

function lost () {
  alert('You run away in a panic. You find yourself getting deeper and deeper into the cave. Eventually it dawns on you that you are completely lost. You never make it out alive.')
  var nextStep = setTimeout(entrance, 500)
  body.css('background-image', 'url("https://upload.wikimedia.org/wikipedia/commons/9/91/Entrance_crystal_cave.jpg")')
}

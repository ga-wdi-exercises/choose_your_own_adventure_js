var buffer = function(){
  console.log("*******************************")
}

console.log("Welcome to Candyland!")
buffer()
var character = prompt("Would you like to play as Gloppy or Princess Lolly (Please enter 'g' or 'pl')")

if(character == "g"){
  console.log("Good Morning Gloppy, Lord Licorice has kidnapped Princess Lolly")
  buffer()
  var rescueornot = prompt("Would you like to rescue her \n('y') - Yes, obviouslsy\n('n') - No, she can take care of herself\n('m') - Maybe, if I run into her I will see what I can do")
  if(rescueornot == 'y'){
    console.log("Where to start?")
    buffer()
    var pickANumber = prompt("pick a number 1 thru 5 to decide where to go\n('a number between 1 and 5') - to pick a destinaton\n('n') - Nevermind")
    if(pickANumber == 'n'){
      console.log("Quitter")
      buffer()
    }
    else {
      while(pickANumber > 5){
        var pickANumber = prompt("off you go")
      }
      console.log("You go to square" + pickANumber + " and rescue Princess Lolly" )
      buffer()
    }
  }
  else if(rescueornot == 'n'){
    console.log("Ok, go on your merry way")
    buffer()
    var lordLicorice = prompt("Lord Licorice Kidnaps you too! What to do next...\n(c) - collaborate with princess lolly\n('m') - be mute dont say anything to anyone")
    if(lordLicorice == 'c'){
      console.log("Princess Lolly and you work together to steal a car, there are 5 possible keys")
      buffer()
      var grandTheft = prompt("Pick a Key to try between 1 and 5\n('any number between 1 and 5') - choose carefully\n('a') - Abandon Princess Lolly with stolen car")
      if(grandTheft == 'a'){
        console.log("You abandon Princess Lolly and head off on your own into the distance...")
        buffer()
      }
      else {
        console.log("you chose right! " + grandTheft + " is the right key! you and princess Lolly drive off towards the castle." )
        buffer()
      }
    }
    else if(lordLicorice == 'm'){
      console.log("Lord Licorice respects your oath of silence and sets you free.")
      buffer()
    }
  }
  else if(rescueornot == 'm'){
    console.log("You head off towards the gummybear island")
    buffer()
    var storm = prompt("You head off towards gummy bear island but get turned around in a storm and end up lost in the licorice forest and hear Princess Lolly calling for help\n('h') - help princess lolly\n('c') - continue on your merry way")
  }
    if(storm == 'h'){
      console.log("You reach Princess Lolly and together you head off to gummy bear island.")
      buffer()
    }
    else if(storm == 'c'){
      console.log("You continue on your way and end up on gummy bear island alone and bored")
      buffer()
    }
}
else if(character == "pl"){
  console.log("You have been kidnapped by lord licorice!")
  buffer()
  var kidnapped = prompt("You have limited options\n('r') - run away\n('s') - stay and hope to be rescued\n('t') - try to reason with lord licorice")
  if(kidnapped == 'r'){
    console.log("you run away and escape into the swamp its storming...")
    buffer()
    var storm = prompt("Caught in the storm you have to decide left or right...\n('l') - left\n('r') - right")
    if(storm == 'l'){
      console.log("You make it out alive and rescue Glumpy!")
    }
    else if(storm == 'r'){
      console.log("You wind up back at the beginning safe and sound.")
    }
  }
  else if(kidnapped == 's'){
    console.log("You decide to stay put and wait things out")
    buffer()
    var chillinWLicorice = prompt("How to occupy yourself at Lord Licorices? \n('s') - sleep \n('p') - play candyland")
    if(chillinWLicorice == 's'){
      console.log("you take a nap")
    }
    else if(chillinWLicorice == 'p'){
      console.log("You play candyland and discover a secret tunnel out of Lord Licorices which you use to escape.")
    }
  }
  else if(kidnapped == 't'){
    console.log("You decide to reason with Lord Licorice")
    buffer()
    var reason = prompt("Whats your approach? \n('b') - You try to bribe lord licorice with promises of chocolate\n('q') - you ask Lord Licorice why he has kidnapped you and what his intent is")
    if(reason == 'b'){
      console.log("Lord Licorice accepts your bribe and sets you free")
    }
    else if(reason == 'q'){
      console.log("It turns out Lord Licorice is a reasonable guy and he lets you go")
    }
  }
}

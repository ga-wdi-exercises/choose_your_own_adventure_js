var buffer = function(){
  console.log("*******************************")
}

console.log("You come across a fork in the road...")
buffer()
var pathInput = prompt("You can either go left or right..(Please enter 'l' or 'r')")

if(pathInput == "l"){
  console.log("You take the path to the left and you come across a tiny little girl a distance ways from the path to the left. Shes turned away from you so you can't totally make her out, but she appears to be crying")
  buffer()
  var responseToTinyGirl = prompt("You ponder what you want to do ... and decide to\n('s') - stab her, you can't trust little girls these days.. haven't you seen like every horror movie ever?\n('c') - console her, shes a lost little girl!\n('i') - ignore her and continue on the trail")
  if(responseToTinyGirl == 's'){
    console.log("Without hesitating you stab the tiny girl with your dagger, she turns her head as you stab her, turn out shes a skeleton tiny girl and you just pissed her off")
    buffer()
    var ghostGirlResponse = prompt("She asks a question, 'Whats your favorite number?'...\n('any number') - Without hesistating\n('h') - You hesistate for a moment...")
    if(ghostGirlResponse == 'h'){
      console.log("The girl shrieks with such a loud decibel you die right on the spot.")
      buffer()
    }
    else {
      while(ghostGirlResponse < 100){
        var ghostGirlResponse = prompt("That numbers not big enough. Guess again now or i keeel you")
      }
      console.log("The girl says to you, 'Oh " + ghostGirlResponse + " is my favorite number too!' Then leave you. You continue on your journey and finally get to.... Walmart'" )
      buffer()
    }
  }
  else if(responseToTinyGirl == 'c'){
    console.log("You call out to the little girl, 'whats wrong teeny tiny little girl? Are you ok?'")
    buffer()
    var ghostGirlResponse = prompt("She turns and you realize she wasn't crying, but laughing so hysterically she was brought to tears. Confused and terrified you...\n(s) - stab her, you can't trust little girls these days.. haven't you seen like every horror movie ever?\n('r') - run away, get the hell outta dodge")
    if(ghostGirlResponse == 's'){
      console.log("Without hesitating you stab the tiny girl with your dagger, she turns her head as you stab her, turn out shes a skeleton tiny girl and you just pissed her off")
      buffer()
      var ghostGirlResponse = prompt("She asks a question, 'Whats your favorite number?'...\n('any number') - Without hesistating\n('h') - You hesistate for a moment...")
      if(ghostGirlResponse == 'h'){
        console.log("The girl shrieks with such a loud decibel you die right on the spot.")
        buffer()
      }
      else {
        console.log("The girl says to you, 'Oh " + ghostGirlResponse + " is my favorite number too!' Then leave you. You continue on your journey and finally get to.... Walmart'" )
        buffer()
      }
    }
    else if(ghostGirlResponse == 'r'){
      console.log("You run so fast you escape the tiny girl and stumble upon a White Castle(the burger joint) enter and feast on sliders")
      buffer()
    }
  }
  else if(responseToTinyGirl == 'i'){
    console.log("You decide this isn't worth your time and go on your way. All of a sudden the little girl chases after you.")
    buffer()
    var ghostGirlResponse = prompt("You think to yourself and decide...\n('r') - start running, shes a little girl and can't catch you.\n('t') - turn and face her, she's just a little girl!")
  }
    if(ghostGirlResponse == 'r'){
      console.log("She's faster than you, catches you and you endure the most painful thing you've ever endured, then you die")
      buffer()
    }
    else if(ghostGirlResponse == 't'){
      console.log("She asks you where you're going and asks if she can come. You tell her to McDonalds, oblige and both of you enjoy a nice Big Mac Meal Together")
      buffer()
    }
}
else if(pathInput == "r"){
  console.log("You take the path to the right and come across a treacherous ravine with a super downtrodden rickety bridge where your able to cross")
  buffer()
  var bridgeApproach = prompt("You think for a moment how you want to cross... and decide to\n('s') - sprint across the bridge, if i go super fast i can make it to the other side before it collapses!\n('t') - tread carefully, slow and stead wins the race\n('r') - scale the ravine, down and back up, slow and steady wins the race")
  if(bridgeApproach == 's'){
    console.log("You sprint across the bridge and trip 10 feet from the end. The bridge starts to collapse behind you.")
    buffer()
    var bridgeDecision = prompt("Floored and realizing imminent danger you decide to...\n('g') - get back up and try to get to the other side\n('h') - hold on for dear life")
    if(bridgeDecision == 'g'){
      console.log("You try to get up but trip and fall to your death")
    }
    else if(bridgeDecision == 'h'){
      console.log("You hold on tightly as bridge crashes against the ravine. You maintain hold and then climb up to the otherside. You see a Chik-fil-a in the distance and go there to crush some original Chik-Fil-A Sandwiches")
    }
  }
  else if(bridgeApproach == 't'){
    console.log("You tread carefully and make it across. There's another fork in the road")
    buffer()
    var bridgeDecision = prompt("You take a moment and decide to go...\n('l') - left on the fork\n('r') - right on the fork")
    if(bridgeDecision == 'l'){
      console.log("you get a heart attack and die")
    }
    else if(bridgeDecision == 'r'){
      console.log("You see a taco bell around the corner, and get yourself an awesome Crunchwrap Supreme")
    }
  }
  else if(bridgeApproach == 'r'){
    console.log("You go down the ravine and realize that going up the other side looks arduous and you are already fatigued")
    buffer()
    var ravineDecision = prompt("You take a deep breath and decide to...\n('b') - Go back the way you came\n('c') - Continue Onward")
    if(ravineDecision == 'b'){
      console.log("You go back the way you came, slip on a rock and die")
    }
    else if(ravineDecision == 'c'){
      console.log("You continue onward, slip on a rock and die")
    }
  }
}

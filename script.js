// put code here!
$(document ).ready(function() {
alert("10:30 am")
alert("On a Thursday")
alert("Philadelphia, PA")
var person = prompt("Who would you like to be today? F-Frank D-Dennis M-Mac C-Charlie")
switch (person) {

  case "f" || "F":
    var frankAdventure = prompt("Hello Frank, is there a poop in the bed today? y/n")
    if (frankAdventure == "y"){
      var whoPooped = prompt("Who pooped the bed? m - Me  |  c - It was Charlie!")
      if (whoPooped == "m"){
        alert("But why, Frank?")
        $("img").css("display", "none")
        $(".poop").css("display", "block")
        break;
      }else if (whoPooped == "c"){
        alert("It looks like we have a mystery on our hands....")
        $("img").attr("src","images/mystery.jpg")
      }
    }else if (frankAdventure == "n") {
      alert("That's a relief.  Let's go to the water park!")
      var slide = prompt("Should you go down the tallest water slide that isn't finished? y/n")
      if (slide == "y"){
        $("img").css("display", "none")
        $(".slide").css("display", "block")
        break;
      }else if (slide == "n"){
        alert("You have not gone on every slide in the park.  The day is a failure.")
        $("img").attr("src","images/frankSad.jpg")
      }
    }
    break;
  case "d" || "D":
    alert("Hello Dennis, what would you like to do today?")
    var dennisAdventure = prompt("u - Use the D.E.N.N.I.S. system  |  d - Dayman!")

    if (dennisAdventure == "u"){
      var dennisSystem = prompt("Have you used the D.E.N.N.I.S. system on the girl yet? y/n")
      if (dennisSystem == "y") {
        alert("She is totally in love with you forever now.")
        $("img").attr("src","images/dennis-system.jpg")
      }else{
        alert("She is not in love with you.  Start over from the beginning")
        $("img").attr("src","images/dennis-system.jpg")
    }
    }else if (dennisAdventure == "d") {
      var trollToll = prompt("Oh no a troll!  You have to pay the troll toll to get into this boy's soul.  Pay? y/n")
      if (trollToll == "y") {
        alert("You're a master of karate and friendship for everyone!")
        $("img").css("display", "none")
        $(".dayman").css("display", "block")
      }else if (trollToll == "n"){
        alert("You have been killed by the Nightman :(")
        $("img").attr("src","images/nightman.gif")
      }
    }
    break;
  case "m" || "M":
    alert("Hello Mac, What would you like to do today?")
    var macAdventure = prompt("w - Go to the water park  |  k - Karate!")
      if (macAdventure == "w") {
        var macDrain = prompt("Should you put your butt on the drain? y/n")
        if (macDrain == "y") {
          $("img").attr("src","images/macDrain.jpg")
        }else{
          while (macDrain == "n"){
          macDrain = prompt("Good.  You should never do that it will suck your insides out.  But then again... y/n")
          }
          $("img").attr("src","images/macDrain.jpg")
          break;
        }
      }else if(macAdventure == "k"){
        var sweetMoves = prompt("Should you show off some sweet moves? y/n")
        if (sweetMoves == "y") {
          $("img").attr("src","images/macKarate.gif")
        }else{
        while (sweetMoves == "n"){
          sweetMoves = prompt("Are you sure?  It's so badass!!")
        }
        $("img").attr("src","images/macKarate.gif")
        break;
      }
    }
      break;
  case "c" || "C":
    alert("Hello Charlie, what would you like to do today?")
    var charlieAdventure = prompt("m - magnets  |  c - Charlie work  |  k - Kitten Mittens!")
    switch (charlieAdventure) {
      case "m":
        var numMagnets = parseInt(prompt("How many magnets?"))
        var plural = ""
        if (numMagnets > 1){
          var plural = "s"
        }
        var magnetAdventure = prompt("What are you going to do with your " + numMagnets + " magnet" + plural + "? | j - Just Magnets")
        alert("What an interesting hobby you have!")
        $("img").attr("src","images/magnets.jpg")
        break;

      case "c":
        var charlieWork = prompt("What Charlie work will you do? b - bathroom  |  t - trash")
        if (charlieWork == "b") {
          alert("Those urinal cakes are delicious")
          $("img").attr("src","images/urinal_cake.gif")
        }else if (charlieWork == "t"){
          $("img").css("display", "none")
          $(".trash").css("display", "block")
        }
        break;

      case "k":
        while(numMittens != 4){
          var numMittens = prompt("How many mittens should we put on our kitten?")
          if (numMittens < 4){
            alert("I think our kitten needs more mittens...")
          }else if (numMittens > 4){
            alert("That's too many mittens for just one kitten!")
          }
        }
        $("img").attr("src","images/kitten.mittens.gif")

        break;
    }
  default:

}
})

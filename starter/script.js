alert("The Knights approach the Bridge of Death. OMINOUS MUSIC.")

var keeper = function(){
  console.log("Keeper: ")
}

keeper()
console.log("Stop! Who would cross the Bridge of Death must answer me these questions three, ere the other side he see.")


var questionOne = prompt("What.....is your name? (please enter L, R, G, or A)")
if(questionOne == 'L' || 'l') {
  var lancelot = function(){
    console.log("Sir Lancelot: ")
  }
  lancelot()
  console.log("My name is Sir Lancelot of Camelot.")
  var questionTwo = prompt("What.....is your quest? (please enter G or N)")
  if(questionTwo == 'G' || 'g') {
    lancelot()
    console.log("To seek the Holy Grail.")
    var questionThree = prompt("What.....is your favorite color? (choose blue, orange or green)")
    if(questionThree == 'blue') {
      keeper()
      console.log("Right. Off you go.")
      lancelot()
      console.log("Oh, thank you. Thank you very much.")
      alert("You cross the bridge.")
      }
    else {
      keeper()
      console.log("You chose.....poorly.")
      alert("You spontaneously combust and disintegrates into ashes.")
      }
    }
  else {
    keeper()
    console.log("Ha! Your quest is unwelcome!")
    var punish = prompt("Do you enjoy being taunted a second time by French soldiers? (enter Y/N)")
    if(punish == 'Y' || 'y' || 'yes' || 'Yes') {
      keeper()
      console.log("Too bad for you.")
      alert("You fall into the Gorge of Eternal Peril")
      }
    else {
      keeper()
      console.log("Your punishment awaits.")
      alert("The French taunter appears and begins harassing you. You scream and run away from the bridge while clicking two coconuts together rapidly.")
      }
    }
  }

else if (questionOne == 'R' || 'r') {
  var robin = function(){
    console.log("Sir Robin: ")
  }
  robin()
  console.log("Sir Robin of Camelot.")
  var questionTwo = prompt("What.....is your quest? (please enter G or N)")
  if(questionTwo == 'G' || 'g') {
    robin()
    console.log("To seek the Holy Grail")
    var questionThree = prompt("What...is the capital of Assyria?")
    if(questionThree == "") {
      robin()
      console.log("I don't know that! Auuuuuuuugh!")
      alert("You fall into the Gorge of Eternal Peril")
      }
    else if(
      //answer contains the word "Assyria"
    ) {
      keeper()
      console.log("Er.....what WAS the capital of Assyriaauuuuuugh!!")
      alert("The Keeper almost falls into the Gorge of Eternal Peril, but hangs onto a ledge of the bridge. You bravely run past him and over the bridge instead of helping the Keeper back up.")
      }
  }
  else {
    keeper()
    console.log("Ha! Your quest is unwelcome!")
    var punish = prompt("Are you scared of fluffy bunnies? (enter Y/N)")
    if(punish == 'N' || 'n' || 'no' || 'No') {
      keeper()
      console.log("How about this one?")
      alert("Another killer rabbit appears, attacks you, and knocks you into the Gorge of Eternal Peril")
    }
    else {
      robin()
      console.log("*Shudders* Good thing I carry a spare holy hand grenade.")
      alert("Another killer rabbit appears and attacks you, but you throw the grenade and hit it squarely, knocking it into the Gorge of Eternal Peril. You then cross the bridge safely.")
    }
  }

}

else if (questionOne == 'G' || 'g') {
  var galahad = function(){
    console.log("Sir Galahad: ")
  }
  galahad()
  console.log("Sir Galahad of Camelot.")
  var questionTwo = prompt("What.....is your quest? (please enter G or N)")
  if(questionTwo == 'G' || 'g') {
    galahad()
    console.log("I seek the Grail.")
  }
}

else if (questionOne == 'A' || 'a') {
  var arthur = function(){
    console.log("King Arthur: ")
  }
  arthur()
  console.log("It is Arthur, King of the Britons.")
  var questionTwo = prompt("What.....is your quest? (please enter G or N)")
  if(questionTwo == 'G' || 'g') {
    arthur()
    console.log("To seek the Holy Grail")
    var questionThree = prompt("What.....is the air-speed velocity of an unladen swallow?")
    if(parseInt(questionThree) != NaN) {
    //some bad outcome
    }
    else if(
    //answer contains the words 'African' || 'European'
    )
      keeper()
      console.log("I don't know that! Auuuuuugh!")
      alert("The Keeper falls into the Gorge of Eternal Peril. You and your compatriots cross the bridge safely.")

}

else {
  alert("Please enter a valid response")
}

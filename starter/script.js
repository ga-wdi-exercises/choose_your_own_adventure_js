var buffer = function(){
  console.log("$$$$$$$$$$$$$$$$$$$$$$")
}
//Backdrop
console.log("In aftermath of the Rebellion and death of the Mad King, the realm has descended into a state of despair and ruin...who will rise from the ashes to reclaim the Iron Throne...")
buffer()
//First question
var playerChoice = prompt("Which character are you? (Enter 'J' for Jon Snow, or 'D') for Daenerys Targaryen)")

//JonSnow route
if (playerChoice == 'J') {
  console.log(" Winter is coming Jon Snow of House Stark")
  buffer()
  var claimResponse = prompt("By what right do you claim to the Iron Throne?\n ('R')-Sweet Sweet Revenge-they killed your Lord Father.\n ('B') By Birth, for all you know about your mother she could have been the Queen.")
    if (claimResponse == 'R') {
      console.log("Revenge is the purest of motives. Only Blood can pay for Blood. But you cannot do this alone...")
      buffer()
      var armyQuest = prompt("How many bands of sell swords must you raise to lay seige to the capital?\n (1)-Your bannerman are all you need for their loyalty cannot be bought.\n (2) It would be wise to enlist the Second Sons, their warriors are feared throughout the land.")
      if (armyQuest == 1) {
        console.log("In the battle of battles, your bannerman fought bravely until the end--however they were crushed by the combined might of the regime. You have lost the Game of Thrones...but what is dead may never die right so?")
      }
      else {
        console.log("As you lead your army to storm the gates, the sky grows dark with arrows and your Sell Sword army begins to break line...")
        buffer()
        var bribeAmount = prompt("You gather an emergancy war concil where the Sell Sword Captains inform you that they demand payment or else they will desert. How much gold will you give them?")
          while (bribeAmount < 5000) {
            var bribeAmount = prompt("The Captains demand more...How much to win at all costs?")
          }
        console.log("The Sell Swords take you money and continue their assault. By the end of the night the Stark Banner is hanging from the rafters and you sit at the Iron Throne!")
      }
    }
    else if (claimResponse == 'B') {
      console.log("You discover that your mother was in fact the late sister of the King and thus your claim is true. However you cannot do this alone...")
      buffer()
      var armyQuest = prompt("How many bands of sell swords must you raise to lay seige to the capital?\n (1)-Your bannerman are all you need for their loyalty cannot be bought.\n (2) It would be wise to enlist the Second Sons, their warriors are feared throughout the land.")
      if (armyQuest == 1) {
        console.log("In the battle of battles, your bannerman fought bravely until the end--however they were crushed by the combined might of the regime. You have lost the Game of Thrones...but what is dead may never die right so?")
      }
      else {
        console.log("As you lead your army to storm the gates, the sky grows dark with arrows and your Sell Sword army begins to break line...")
        buffer()
        var bribeAmount = prompt("You gather an emergancy war concil where the Sell Sword Captains inform you that they demand payment or else they will desert. How much gold will you give them?")
          while (bribeAmount < 5000) {
            var bribeAmount = prompt("The Captains demand more...How much to win at all costs?")
          }
        console.log("The Sell Swords take you money and continue their assault. By the end of the night the Stark Banner is hanging from the rafters and you sit at the Iron Throne!")
      }
    }
    else {
      console.log("You have no right to play this game. Comeback when you have a reason.")
    }
}
// Daenerys targaryen Choice
if (playerChoice == 'D') {
  console.log("Welcome to the game Mother of Dragons.")
  buffer()
  var claimResponse = prompt("By what right do you claim to the Iron Throne?\n ('R') For Revenge, they killed your Father.  \n ('B')-By Birth, you are the daughter of the last Targaryen afterall.")
    if (claimResponse == 'R') {
      console.log("Revenge is the purest of motives. Only Blood can pay for Blood. But you cannot do this alone...")
      buffer()
      var armyQuest = prompt("How many bands of sell swords must you raise to lay seige to the capital?\n (1)-Your bannerman are all you need for their loyalty cannot be bought.\n (2) It would be wise to enlist the Unsullied, they are the finest warriors in all the land.")
      if (armyQuest == 1) {
        console.log("In the battle of battles, your bannerman fought bravely until the end--however they were crushed by the combined might of the regime. You have lost the Game of Thrones...but what is dead may never die right so?")
      }
      else {
        console.log("As you lead your army to storm the gates, the sky grows dark with arrows and your Sell Sword army begins to break line...")
        buffer()
        var bribeAmount = prompt("You gather an emergancy war concil where your Captains inform you that they demand payment or else they will desert. How much gold will you give them?")
          while (bribeAmount < 5000) {
            var bribeAmount = prompt("The Captains demand more...How much to win at all costs?")
          }
        console.log("The Sell Swords take you money and continue their assault. By the end of the night the Stark Banner is hanging from the rafters and you sit at the Iron Throne!")
      }
    }
    else if (claimResponse == 'B') {
      console.log("Let me be your ruler-ruler-You can call me Queen D, cause I rule. However you cannot do this alone...")
      buffer()
      var armyQuest = prompt("How many bands of sell swords must you raise to lay seige to the capital?\n (1)-Just Sir Jorah and your Dragons. Oh and the imp\n (2) It would be wise to enlist the Unsullied, they are the finest warriors in all the land.")
      if (armyQuest == 1) {
        console.log("In the battle of battles, your bannerman fought bravely until the end--however they were crushed by the combined might of the regime. You have lost the Game of Thrones...but what is dead may never die right so?")
      }
      else {
        console.log("As you lead your army to storm the gates, the sky grows dark with arrows and your army begins to break line...")
        buffer()
        var bribeAmount = prompt("You gather an emergancy war concil where the Captains inform you that they demand prisoners of war to be killed to be killed or else they will desert. How many will you kill?")
          while (bribeAmount < 50) {
            var bribeAmount = prompt("The Captains demand more...How much to win at all costs?")
          }
        console.log("The Sell Swords take your money and continue their assault. By the end of the night the Targaryen Banner is hanging from the rafters and you sit at the Iron Throne!")
      }
    }
    else {
      console.log("You have no right to play this game. Comeback when you have a reason.")
    }
}
// Wrong playerChoice
if ((playerChoice !== 'J') || playerChoice !== 'D') {
  console.log("Sorry Little Finger. You cannot play this game...Choose again!")
}

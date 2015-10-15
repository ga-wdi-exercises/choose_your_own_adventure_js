console.log("You might win $100k.");
var lotteryDecision = prompt("You've $10 in your pocket. You either buy('b') or not ('n') buy a $100k lottery.");
if(lotteryDecision == "n"){
  console.log("You return home to find out that your neighbor won the lottery");
  var partyDecision = ("Your neighbor wins the lottery instead and invites you to his party. You either go ('g'), don't ('d') go, or breakinto ('b') into his house and steall all his money");
  if(partyDecision == "g"){
    console.log ("Well, not too bad. It's a nice party.");
    var investmentDecision = prompt("Your neighbor sees you at the party. You tell him all about your business. He asks how much money you need to scale. You can ignore ('i) or Enter numbers like 100, 1000 or ignore. ");
    if(investmentDecision == "i"){
      console.log("You return home sad and die from heart attack.");
    }
    else {
      while(investmentDecision >= 5000){
        var neighborResponse=prompt("He says thats too much money. Can you go lower?");
      }
      console.log("He writes you a check on the spot for" + investmentDecision + "dollars");
    }
  }
  else if(partyDecision == "b"){
    console.log("He sees you sneaking into his backyard and shoots you in the head. You die instantly.");
  }
}
else if(partyDecision == "d"){
  console.log("You're too sad and decide to stay home");
  var breakingBad = prompt("You've a crazy idea floating in your head. You either break ('b') into your neighbor's house the next day and steal his money or watch breakingbad ('w') instead for inspiration");
}
if(breakingBad == "b"){
  console.log("He sees you sneaking into his backyard and shoots you in the head. You die.");
}
else if(breakingBad == "w"){
  console.log("You're too sad and die from heart attack.");
}
}
else if(lotteryDecision == "b"){
  console.log("Congrats! You own $100k.");
  var spendingDecision = prompt("Now that you've money, you can do one of the three things. Throw a party ('p'), buy ('h') a house, or pay of ('l')loans")
  if(spendingDecision == "p"){
    console.log("Seems like a lot of people are coming to the party");
    var inviteDecision = prompt("You are throwing a huge party. You can invite ('i') your neighbor or not 'n' in case you dont like them")
    if(inviteDecision == "i"){
      console.log("He doesnt like you. He kills you and steals all your money.");
    }
    else if(inviteDecision == "n"){
      console.log("He breaks into your house the next day, kills you and takes all your money.");
    }
  }
  else if(spendingDecision == "h"){
    console.log("Owning a house is critical. Congrats!");
    var houseParty = prompt("You're throwing a housewarming party. You can invite your friends and neighbors ('fn') or just friends ('f').")
    if(houseparty == "f"){
      console.log("your neighbor gets mad. he breaks into your house and kills you and takes all your money");
    }
    else if(houseParty == "fn"){
      console.log("He gets into a fight with you and kills you.");
    }
  }
  else if(spendingDecision == "l"){
    console.log("You've decided to use the $100k to pay all your loans");
    var loanDecision = prompt("Either pay your own college loan ('o') or your brother's ('b')college loan");
    if(loanDecision == "o"){
      console.log("Congrats! You're debt free");
    }
    else if(loanDecision == "b"){
      console.log("Good for your brother. But your wife kills you.");
    }
  }
}

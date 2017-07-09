// put code here!
var endgame = false

while (endgame === false) {
var name = prompt('What is your name?')


  var starkAction = prompt(`Ah, ${name} Stark. You're family has fallen to misfortune, indeed. You have my sympathies. The question is - what will you do? Rescue Sanza, Join Rob, Liberate Winterfell? (R/J/L)`)

  if (starkAction === 'R') {
    var sanzaAction =  prompt("You're best bet is to enlist the aid of Little Finger. He can make things happen for you. The question is, how much will you pay him? 1000, 1000, 3000? (1/2/3)")

    switch (parseInt(sanzaAction)){
     case 1: var money1 = prompt('He takes your money and calls the guards on you. Looks like you will share the same fate as your father, Ned. Do you Fight or Run? (F/R)');
      if (money1 === 'F') {
        var fight = prompt('You defeat his guards, and he enlists you as an assasin in exchange for his help. Do you accept? (Y/N)')
        if (fight === 'Y') {
          prompt('You work for him as an assasin, and soon enough he fulfills his promise and helps you rescue Sanza')
          endgame = true
        }
        else if (fight === 'N') {
          prompt('Fearing your physical strength, he lets you go, but without his help you never rescue Sanza')
          endgame = true
        }
      else if (money1 === 'R') {
        var run = prompt('As you run away, you meet one of his "working girls" and fall in love. Do you run away with her, or forget about her? (R/F)')
        if (run === 'R')
        {
          prompt('You take her to the country and live happily, forgetting about your duties to your family')
          endgame = true
        }
        else if (run === 'F')
          prompt('You forget about the woman, but you always wonder what might have been')
          endgame = true
      }
      }
     break;

     case 2:
    var money2 = prompt('He tells you to meet him late that night. Do you accept? (Y/N)');
      if (money2 === 'Y') {
        var fight = prompt("You will meet him, but you don't trust him. Will you bring a sword or a crossbow? (S/C)")
          if (fight === 'S') {
            prompt('Sure enough, Jamie Lannister is there to meet you instead. He challenges you to a duel, but you are no match for his swordsmanship and he strikes you down')
          }
          else if (fight === 'C') {
            prompt('Sure enough, Jamie Lannister is there to meet you instead. He challenges you to a duel, but in true Indiana Jones style, you just pull out your crossbow and shoot him in the face')
          }
      }
      if (money2 === 'N') {
        var meet = prompt('You decide to look elsewhere for help. Do you meet with Varys, or Tyrion? (V/T)')
          if (prompt === 'V') {
            prompt('Varys sends his birds to kill you in your sleep')
          }
          else if (prompt === 'T')
            prompt('You find a sympathetic friend in Tyrion. He turns on his family and helps you rescue Sanza, ends up killing his father Tywin in the process')
      }
     break;

     case 3:
      var money3 = prompt("Money talks, and Little Finger seems to have heard it. He gives you the location of a secret passageway into Sanza's keep. When you find it, do you go up or down? (U/D)");

      if (money3 === 'U') {
        var rescue = prompt("You find Sanza, but she is so scared of Geoffrey that she won't leave with you unless you kill him. Do you go to his room right now, or bide your time? (R/B)")
          if (rescue === 'R') {
            prompt("You kill him and escape with Sanza, but Cersei finds out it was you and hunts you down to the ends of the earth")
            endgame = true
          }
          else if (rescue === 'B') {
            prompt("You bide your time, and eventually come upon a poison that you slip into Geoffrey's drink one night when he's drunk. No one ever finds out, and you successfully escape with Sanza through the same passageway you used before")
            endgame = true
          }
      }
      if (money3 === 'D')
        var stupid = prompt("Well that was dumb. She's obviously at the tower of the tower. Do you turn around or keep going (T/K)")
          if (stupid === 'T') {
            prompt('You rush up the stairs, and unfortunately have a heart attack and die. You probably should have gotten in better shape before you took this mission')
            endgame = true
          }
          if (stupid === 'K') {
            prompt("You stubbornly decide to keep going down, since you've already gone halfway. You end up finding a storehouse of opium and LSD, realize you're tired of all the killing and bloodshed, and spend the next month subsisting only off psychedelics. You then return to King's Landing as a guru and start a massive hippie movement, promoting peace and love. Plus, you have a sweet beard")
            endgame = true
          }

      break;
   }
  }

  else if (starkAction === 'J') {
    var robAction = prompt('Good News! You meet up with Rob and you find out he is about to get married. He invites you - do you attend? (Y/N)')
    if (robAction === 'Y') {
      prompt("Let's just say you made the wrong choice...")
      endgame = true
    }
    else if (robAction === 'N'){
      prompt("You're here to fight, not to drink and dance. You lead a scouting expedition to track the enemy's movements. You run into a battalion and are captured")
      endgame = true
    }
  }

  else if (starkAction === 'L') {
    var winterfell = prompt("You decide to liberate Winterfell, but you'll need the nights watch to do it. Do you head to the Wall, or instead try and find Bran, who is reported to be traveling in the countryside?(W)all / (B)ran)")

    if (winterfell === 'W') {
      var johnAction = prompt('John Snow has gone across the wall. Do you wait for him at the keep or venture north, to the land of the wildlings?(K)eep / (V)enture North')
      if (johnAction === 'K') {
        prompt('John never returns, so you get really drunk one night, try and reclaim Winterfell literally by yourself, and are quite obviously killed immediately')
        endgame = true
      }
      else if (johnAction === 'V'){
        prompt('You head past the wall, and eventually run into Jon fighting a White Walker with some Night Watch officers. You rescue them, somehow killing the Walker, and in return they lend support to help you liberate Winterfell')
        endgame = true
      }
    }
    else if (winterfell === 'B') {
      prompt('You find Bran being carried around by some giant. He has some new magical powers that are pretty sweet, so you use them to take back Winterfell')
      endgame = true
    }
  }
}

prompt('Game Over')

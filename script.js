
var start_answer = prompt("Hello, sweetie! I'm the Doctor. Doctor, who? Just the Doctor! I'm a Time Lord. Some kind of alien? Well, yes. I've got two hearts and a whole lot of angst. I travel through time and space in my machine called the TARDIS. Will you come with me? (Yes, or No)");

  if (start_answer === "yes") { //YES


    var travel_number = prompt("Fantastic! You shall be my companion. I love companions. Especially a sexy one such as yourself. Did I just say that out loud? Well! Let's get on with it then. To when would you prefer to go? \n-the past (1)\n-the present (2)\n-the future (3)");

      if (travel_number === "1") { //PAST

function ElizabethEra(){
      alert(""Allons-y! I love the past. Mine is a bit dark and broodish, but you don't need to worry about that. Say, what do you think of the Elizabethan Era? It really is quite smashing.");
    var pastoption = prompt("Whom would you rather meet? Queen Elizabeth or William Shakespeare? E or S").toUpperCase();
          if (past_option === "E") {
            QueenElizabeth();
          }
          else if (past_option === "S") {
            WilliamShakespeare();
          }
}

function QueenElizabeth(){
      alert("Excellent! She loves me. But, who couldn't love a Time Lord? Oh dear, I just got a message in the TARDIS. She's in danger! It appears someone has devised a plot to assassinate her! She's a fixed point in time. If her history changes, time itself may be torn apart! We have to stop this. There are only two individuals who would possibly want to murder her: Mary Stuart, her cousin in Scotland who claims Elizabeth's throne is hers, or Phillip II, King of Spain. We only have time to intercept one individual.").toUpperCase();
      var past_elizabeth = prompt("Who do you think is responsible for the plot? Mary Stuart, or Phillip of Spain? M or P?").toUpperCase();
              if (past_elizabeth === "M") {
                MaryStuart();
              }
              else if (past_option === "P") {
                PhillipSpain
              }
}
                var past_mary = prompt("MARY STUART.\nWell done, companion! It is Mary! As a prisoner in Scotland, she appears to have been secretly communicating with spies in England! Stick around, companion! I'm sure the Queen will reward you!");
              } else if (past_elizabeth === "P" || past_elizabeth === "p") { //PHILLIP
                var past_phillip = prompt("PHILLIP.\nOh dear, very badly done, companion. It was Mary coordinating the plan all along. King Phillip is outraged at us having assumed he was guilty. What's the year? 1588! Oh dear, the Spanish Armada is coming...");
          } else if (past_option === "S" || past_option === "s") { //WILLIAM SHAKESPEARE
            var past_shakespeare = prompt("WILLIAM SHAKESPEARE.\nExcellent! He's quite the lover. He should take a liking to you, you sexy thing. Did I say that out loud again? Oh dear. No, really, this is odd. It's Shakespeare, he seems to be in a catatonic state. He's usually a bit more lively. Now, wait, here's something even more odd! It's a play, titled LOVE'S LABOUR'S WON. He never wrote that. I suspect witches are involved.");
}
}
      } else if (travel_number === "2") { //PRESENT
          var present_option = prompt("Allons-y! I love the present. Though, I'm a Time Lord, I don't think I ever fully live in the present. Wibbly, wobbly, timey, wimey and all. But! There is something you can help me with. I have some business to attend to. Where would you prefer to accompany me to? \n-TORCHWOOD Headquarters (T)\n-UNIT Headquarters");
            if (present_option === "T" || past_option === "t") { //TORCHWOOD
              var present_torchwood = prompt("TORCHWOOD.\nI appreciate your support. Always rubbed me the wrong way, Torchwood has. Always meddling in alien matters Earth has no business meddling in. Now, this is very odd. Your father is here. He's dead, in this universe, at least. That must mean he's visiting from a parallel universe. But, that's impossible. It means he traveled across a void; a rift in time. Torchwood must have opened the void, those idiots. I can see how much this is hurting you. Would you rather: \n-Stay in this universe with me (S)\n-Go with your Dad to his universe (G)");
            if (present_torchwood === "S" || present_torchwood === "s") { //STAY WITH ME
              var present_stay = prompt("STAY.\nIt's not safe here with me. You've traveled with me in my TARDIS. You're covered in space particles. You'll be sucked into the void. Do you want to change your answer? (Y/N)");
                if (present_stay === "Y" || present_stay === "y") { //YES
                  var present_yes = prompt("You go back with your father to live in his universe. After all, it is a second chance to have a life-time to get to know him. Unfortunately, I had to close the time void in this universe. We'll never be able to see each other again. And I suppose, if it's my last chance to say it. I lov--- ");
              } else if (present_stay === "N" || present_stay === "n") { //NO
                  var present_no = prompt("You pledge to stay by my side. Unfortunately, that open void in time allows an alien race called the Cybermen to enter and invade our world. You and I attempt to reverse the void, first sucking the Cybermen into the void before closing the portal forever. I tell you to hold on to something sturdy as the Cybermen are sucked through. Unfortunately, because you're covered in space particles, you loose your grip and are sucked into the void as well. I'm sorry. I'm so sorry.");
}
}
        } else if (present_option === "U" || past_option === "u") { //UNIT
            var present_unit = prompt("UNIT.\nOh, Unit. Good people, they are. Lead by Director Kate Stewart. Did you know they keep Earth's top secret collection of alien technology in the Tower of London? No one suspects a thing. Let's go meet Kate, shall we? Wait, you've already met her? In the ladies' room? But, her assistant just told me she's still in a meeting. Oh dear, this can't be good. Two Kate Stewarts? Only one creature is capable of this: Zygons. They're pesky shape-shifters. They must be attempting to steal our technology. But, which is the real Kate Stewart? Should we: \n-Kill this one (K)\n-Let this one live (L)");
              if (present_unit === "K" || present_unit === "k") { //KILL HER
                var present_kill = prompt("KILL HER.\nI'm sorry. I'm so sorry. It turns out, this Kate Stewart you met in the ladies' room was the real human. The Zygon copy is in the meeting about to kill the staff and steal the technology. I must fix this. Leave me. I'm too dangerous to be with. LEAVE ME!");
              } else if (present_unit === "L" || present_unit === "l") { //LET HER LIVE
                var present_live = prompt("LET HER LIVE.\nBravo, companion! I could just kiss you! Actually, I will! This is the real Kate Stewart. Now, let's go get us some Zygon copy-cats and save the Earth!");
  }
  else if (travel_number === "3") { //FUTURE
      var future_option = prompt("Allons-y! Great choice. I love the future. Well, now, this is neat! It appears to be a spaceship. Oh, hello little girl! What are you doing in the fireplace? You're in France, I see. 18th Century! And yet, we're in the 51st century! HOW COOL! Wibbly, wobbly, timey, wimey. Hold on, what's that noise? Little girl, do you realize your clocks are broken? And yet, what's that ticking sound? I must investigate. Companion, what do you want to do? \n-Come along with me (C)\n-Stay here on the spaceship (S)");
        if (future_option === "C" || future_option === "c") { //COME ALONG
          var future_come = prompt("Fantastic! You know what else is fantastic? That little girl in the fireplace grew up...and she's none other than Madame de Pompadour! That fireplace must have been a window in time, allowing us to look from the 51st century into the 18th century. Time must have sped up as we walked through. Isn't she beautiful? But, she's in danger. Remember that ticking sound we heard? It was an android scanning her brain, preparing to take her organs and incorporate them into that spaceship we were on! Gross. No matter. She'll be safe now. I destroyed all of the time windows on the spaceship. Those androids won't be able to get back to the 51st century now. They'll just whither and die. But, the fireplace still appears to be working! Must be a glitch. Say, what do you think of showing Madame de Pompadour a star? She mentioned she would love to see one, and I must admit I fancy her a bit. I can bring the star to her window using the TARDIS. Help me? \n-Help the Doctor (H)");
            if (future_come === "H" || present_come === "h") { //HELP THE DOCTOR
              var future_help = prompt("Wonderful! We've prepared the TARDIS, now let's go show Madame de Pompadour! Back through the fireplace we go! Huh, I wonder where she is. She was standing at this window just a moment ago. Look, there's King Louis. He looks dreadfully sad. He's staring out the window. But, at what? Oh no, it's a carriage...with a casket. It's Madame de Pompadour. Time must have sped up again once we exited and entered through the fireplace. Years must have passed. She's gone.");
}
}
      } else if (future_option === "S" || future_option === "s") { //STAY ON THE SHIP
          var future_stay = prompt("Well, you're no fun at all. You decide to stick around on the spaceship, but suddenly start to notice things getting weird. Eyeballs are glued to cameras. Brains are attached to wires. You quickly realize the spaceship is running on human body parts! You scream for the Doctor to come back, but he went through the time window. Softly at first, you hear the mysterious ticking sound. It's an android! It's here to harvest your body parts of its ship! Oh dear.");
}

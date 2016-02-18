//some kind of loop
//function intro(){
  alert("Welcome! You are in for a real treat today.");
  console.log("Welcome! You are in for a real treat today.");

  alert("You have just stepped into a fictional domain. Get ready for some tough decisions ahead.");
  console.log("You have just stepped into a fictional domain. Get ready for some tough decisions ahead.");

  game();

  function fanatic(){
    var fan = prompt("Choose a Fandom Doctor Who (DW) or Dragonball Z (DBZ)");
    var fandom = fan.toUpperCase();
    return fandom;
  }

  function game(){
    var mur = fanatic();

    //DOCTOR WHO block
    if(mur == "DW"){
      alert("You chose Doctor Who, enjoy!");
      console.log("You chose Doctor Who, enjoy!");
      dwOne();

      function dwOne(){
        var dW1 = prompt("You have just come out of yet another regeneration. What do you do first? \n A: Check to make sure you have all body parts. \n B: Find out where you are. \n C: Stop that annoying noise by any means possible.");
        console.log("You have just come out of yet another regeneration. What do you do first? \n A: Check to make sure you have all body parts. \n B: Find out where you are. \n C: Stop that annoying noise by any means possible.");

        var dw1 = dW1.toUpperCase();

        if(dw1 == "A"){
          alert("As you are checking yourself, you notice a progressive lack of oxygen. It turns out you were soo preoccupied with checking limbs you were dumped into deep space. \n Looks like its lights out for the Doctor.");
          console.log("As you are checking yourself, you notice a progressive lack of oxygen. It turns out you were soo preoccupied with checking limbs you were dumped into deep space. \n Looks like its lights out for the Doctor.");

          alert("Let's try that again.");
          console.log("Let's try that again.");
          dwOne();
        }
        else if(dw1 == "B"){
          alert("You quickly discover you are about to be launched into space. Fortunately, you have your handy dandy sonic screwdriver.");
          console.log("You quickly discover you are about to be launched into space. Fortunately, you have your handy dandy sonic screwdriver.");

          bonusDW();
        }
        else if(dw1 == "C"){
          alert("You pull out your suped up sonic screwdriver and zap the source of the noise with an enoromous amount of energy. Unfortunately, you just fried your traveling companion...there's no trace of her...poor girl, she just wanted to have an adventure.");
          console.log("You pull out your suped up sonic screwdriver and zap the source of the noise with an enoromous amount of energy. Unfortunately, you just fried your traveling companion...there's no trace of her...poor girl, she just wanted to have an adventure.");

          alert("Let's try that again.");
          console.log("Let's try that again.");
          dwOne();
        }
        else {
          console.log("Please insert an acceptable value.");
          dwOne();
        }
      }

      function bonusDW(){

        var bon = prompt("Your companion is seriously freaking out. How many minutes did this last? (Be careful with high numbers)");
        console.log("Your companion is seriously freaking out. How many minutes did this last? (Be careful with high numbers)");

        for(var i = 0; i<bon; i++){
          alert("Companion: \"Doctor!\"");
          console.log("Companion: \"Doctor!\"");
        }

        alert("You: \"I need some peace and quiet so I can get us out of here!\"");
        console.log("You: \"I need some peace and quiet so I can get us out of here!\"");

        dwTwo();
      }

      function dwTwo(){
        var dW2 = prompt("Thankfully, your companion stops freaking out. But there's a problem... \n A: You're only using a screwdriver! How's that going to help? \n B: The air lock controls are busted. \n C: You're not at 100% yet and are in danger of falling asleep.");
        console.log("Thankfully, your companion stops freaking out. But there's a problem... \n A: You're only using a screwdriver! How's that going to help? \n B: The air lock controls are busted. \n C: You're not at 100% yet and are in danger of falling asleep.");

        var dw2 = dW2.toUpperCase();

        if(dw2 == "A"){
          alert("Oh ye of little faith, have you SEEN the show? \n Anyways, you manage to jam the air lock controls and open the door to the spaceship.");
          console.log("Oh ye of little faith, have you SEEN the show? \n Anyways, you manage to jam the air lock controls and open the door to the spaceship.");

          dwThree();
        }
        else if(dw2 == "B"){
          alert("Oh...that sucks..looks like you're going to have a tour of deep space real soon.");
          console.log("Oh...that sucks..looks like you're going to have a tour of deep space real soon.");

          alert("Let's try that again.");
          console.log("Let's try that again.");
          dwTwo();
        }
        else if(dw2 == "C"){
          alert("While working on the air lock, you start to dooze off. Your companion does everything she can think of to keep you awake. Sadly, that's the last nap you'll ever take. \n *SHOOM* The outer door has opened...");
          console.log("While working on the air lock, you start to dooze off. Your companion does everything she can think of to keep you awake. Sadly, that's the last nap you'll ever take. \n *SHOOM* The outer door has opened...");

          alert("Let's try that again.");
          console.log("Let's try that again.");
          dwTwo();
        }
        else {
          console.log("Please insert an acceptable value.");
          dwTwo();
        }
      }

      function dwThree(){
        var dW3 = prompt("You head back to the Tardis to find... \n A: Daleks \n B: Cybermen \n C: Your companion's daughter from the future who happens to be your wife and also in prision for killing you...");
        console.log("You head back to the Tardis to find... \n A: Daleks \n B: Cybermen \n C: Your companion's daughter from the future who happens to be your wife and also in prision for killing you...");

        var dw3 = dW3.toUpperCase();

        if(dw3 == "A"){
          alert("Exterminate! \n *ZOOM* You are now dead.");
          console.log("Exterminate! \n *ZOOM* You are now dead.");

          alert("Let's try that again.");
          console.log("Let's try that again.");
          dwThree();
        }
        else if(dw3 == "B"){
          alert("Assimilate! \n *CLOP* *CLOP* *CLOP* You are now a cyberman...so your dead.");
          console.log("Assimilate! \n *CLOP* *CLOP* *CLOP* You are now a cyberman...so your dead.");

          alert("Let's try that again.");
          console.log("Let's try that again.");
          dwThree();
        }
        else if(dw3 == "C"){
          alert("Your lovely wife has a gift for you and her mother: a piece of the Tardis from the future but...its sorched and the only thing left of your time-traveling spaceship");
          console.log("Your lovely wife has a gift for you and her mother: a piece of the Tardis from the future but...its sorched and the only thing left of your time-traveling spaceship");

          var again = prompt("END: Enter A to play again");
          console.log("END: Press A to play again");

          if(again.toUpperCase() == "A"){
            game();
          }
          else{
            alert("Gamer Over");
            console.log("Game Over");
          }

        }
        else {
          console.log("Please insert an acceptable value.");
          dwThree();
        }
      }
    }

    //DBZ block
    else if(mur == "DBZ"){
      alert("You chose Dragonball Z, enjoy!");
      console.log("You chose Dragonball Z, enjoy!");

      alert("Hey, Goku! (You're Goku) I, King Kai, am going to let you go to Earth for a day. But remember, you're dead so your visit is JUST for a day so don't make any trouble.");
      console.log("Hey, Goku! (You're Goku) I, King Kai, am going to let you go to Earth for a day. But remember, you're dead so your visit is JUST for a day so don't make any trouble.");

      dbzOne();

      function dbzOne(){
        var dBz1 = prompt("So you just got to Earth, where are you going first? \n A: To see your lovely wife, Chi-Chi \n B: Visit Master Roshi at Kame House \n C: Go see Mr. Popo and Kami at Kami's Lookout");
        console.log("So you just got to Earth, where are you going first? \n A: To see your lovely wife, Chi-Chi \n B: Visit Master Roshi at Kame House \n C: Go see Mr. Popo and Kami at Kami's Lookout");

        var dbz1 = dBz1.toUpperCase();

        if(dbz1 == "A"){
          alert("Chi-Chi comes home to see you feasting on all the food in the fridge...you are now deaf from a very thorough scolding.");
          console.log("Chi-Chi comes home to see you feasting on all the food in the fridge...you are now deaf from a very thorough scolding.");

          alert("Let's try that again.");
          console.log("Let's try that again.");
          dbzOne();
        }
        else if(dbz1 == "B"){
          alert("When you arrive, you're greeted by a surprise party! You see Master Roshi, Krillin, Piccolo, and everyone else. Even Vegeta's there!");
          console.log("When you arrive, you're greeted by a surprise party! You see Master Roshi, Krillin, Piccolo, and everyone else. Even Vegeta's there!");

          dbzTwo();
        }
        else if(dbz1 == "C"){
          alert("Mr. Popo greets you with a friendly paralyzing stare...it lasts one day (FML).");
          console.log("Mr. Popo greets you with a friendly paralyzing stare...it lasts one day (FML).");

          alert("Let's try that again.");
          console.log("Let's try that again.")
          dbzOne();
        }
        else {
          console.log("Please insert an acceptable value.");
          dbzOne();
        }
      }

      function bonusDBZ(){
        var bon = prompt("Krillin somehow gets in the way of your match. How many times was he owned? (Be careful with high numbers)");
        console.log("Krillin somehow gets in the way of your match. How many times was he owned? (Be careful with high numbers)");

          for(var i = 0; i<bon; i++){
            alert("Krillin: \"Ouch!\"");
            console.log("Krillin: \"Ouch!\"");
          }

        alert("You: \"Krillin stop playing around we're sparring here!\"");
        console.log("You: \"Krillin stop playing around we're sparring here!\"");

        dbzThree();
      }

      function dbzTwo(){
        var dBz2 = prompt("He challenges you to a \"quick\" sparring match. What do you do? \n A: Accept, of course! \n B: Back down. You're not in the mood. \n C: Don't say anything and walk away.");
        console.log("He challenges you to a \"quick\" sparring match. What do you do? \n A: Accept, of course! \n B: Back down. You're not in the mood. \n C: Don't say anything and walk away.");

        var dbz2 = dBz2.toUpperCase();

        if(dbz2 == "A"){
          alert("You and Vegeta start the match. Soon you guys are at maximum power with no end in sight.");
          console.log("You and Vegeta start the match. Soon you guys are at maximum power with no end in sight.");

          bonusDBZ();
        }
        else if(dbz2 == "B"){
          alert("Vegeta comments on how being dead has made you soft and no longer a Z fighter. Everyone agrees and kicks you out of the party.");
          console.log("Vegeta comments on how being dead has made you soft and no longer a Z fighter. Everyone agrees and kicks you out of the party.");

          alert("Let's try that again.");
          console.log("Let's try that again.")
          dbzTwo();
        }
        else if(dbz2 == "C"){
          alert("Vegeta is insulted by your blatant disrespect and vaporizes you. You are now double dead.");
          console.log("Vegeta is insulted by your blatant disrespect and vaporizes you. You are now double dead.");

          alert("Let's try that again.");
          console.log("Let's try that again.")
          dbzTwo();
        }
        else {
          console.log("Please insert an acceptable value.");
          dbzTwo();
        }
      }

      function dbzThree(){
        var dBz3 = prompt("Next thing you know, there's a rouge energy blast heading straight toward the house! \n Everyone is too busy partying to notice. You: \n A: Try to save the house \n B: Let it go \n C: Save the house");
        console.log("Next thing you know, there's a rouge energy blast heading straight toward the house! \n Everyone is too busy partying to notice. You: \n A: Try to save the house \n B: Let it go \n C: Save the house");

        var dbz3 = dBz3.toUpperCase();

        if(dbz3 == "A"){
          alert("You attempt to get Vegeta to focus on the imminent threat. It takes him awhile to realize what's going on. By the time you guys try to make a plan, the house no longer exists.");
          console.log("You attempt to get Vegeta to focus on the imminent threat. It takes him awhile to realize what's going on. By the time you guys try to make a plan, the house no longer exists.");

          alert("Let's try that again.");
          console.log("Let's try that again.")
          dbzThree();
        }
        else if(dbz3 == "B"){
          alert("You assume someone else will sense the approaching energy...but they don't and now everyone is dead. Way to go Goku.");
          console.log("You assume someone else will sense the approaching energy...but they don't and now everyone is dead. Way to go Goku.");

          alert("Let's try that again.");
          console.log("Let's try that again.")
          dbzThree();
        }
        else if(dbz3 == "C"){
          alert("You leave the match, get closer to the energy ball, and slap it away. Vegeta, riden with guilt over failing to protect his wife and son, Leaves Goku alone and goes inside the house to be with his family.");
          console.log("You leave the match, get closer to the energy ball, and slap it away. Vegeta, riden with guilt over failing to protect his wife and son, ;eaves Goku alone and goes inside the house to be with his family.");

          alert("You also go back to the party and have a fun time on your day on Earth surrounded by your friends.");
          console.log("You also go back to the party and have a fun time on your day on Earth surrounded by your friends.");

          var again = prompt("END: Enter A to play again");
          console.log("END: Press A to play again");

          if(again.toUpperCase() == "A"){
            game();
          }
          else{
            alert("Gamer Over");
            console.log("Game Over");
          }
        }
        else {
          console.log("Please insert an acceptable value.");
          dbzThree();
        }
      }
    }
    else{
      alert("Invalid entry");
      game();
    }
}

                                            //{{{{{{{{{{Pokemon Game!}}}}}}}}}}//

 var pokeOptions = {
    name: function(){
      var userName = prompt("Hello there! Welcome to the world of pokemon! My name is Oak! People call me the pokemon Prof! First off, What is your name?");
      console.log(userName);
      this.welcome(userName);
      },
    welcome: function(userName){
      var hi = prompt("Hi, " + userName + " Would you like to choose a 'pokemon', 'fight' Professor Oak, go back to 'sleep', or accidently 'slip' on a banana peel?");
      console.log(hi);
      switch(hi){
        case 'pokemon':
        this.pokemon(hi);
        break;
        case 'fight':
        this.fight(hi);
        break;
        case 'sleep':
        this.sleep(hi);
        break;
        case 'slip':
        this.slip(hi);
        break;
        default:
        console.log('Please choose a proper command!');
        alert('Please choose a proper command!');
      }},
//pokemon path//
      pokemon: function(hi){
        var poke = prompt("Great! Now choose a pokemon. You can either choose 'charmander', 'squirtle', or 'bulbasaur'.");
        console.log(poke);
        switch(poke){
          case 'charmander':
            this.charmander(poke);
            break;
          case 'squirtle':
            this.squirtle(poke);
            break;
          case 'bulbasaur':
            this.bulbasaur(poke);
            break;
            default:
            console.log('Please choose the right pokemon!');
            alert('Please choose the right pokemon!');
        }},
//charmander subpath//
        charmander: function(poke){
          var gym = prompt("Congratulations! You chose Charmander, the fire pokemon. Be careful not to get burned! Now choose between 'erika' or 'misty' to fight.");
          console.log(gym);
          switch(gym){
            case 'erika':
              this.erika(gym);
              break;
            case 'misty':
              this.misty(gym);
              break;
          }},
          erika: function(gym){
            var result = alert("Erika is the grass master. Since Charmander is a fire pokemon, you set ablaze to her pokemon... and her gym... Congratulations you win!");
            console.log(result);
          },

          misty: function(gym){
            var result = alert("Misty is the water master. Since Charmander is a fire pokemon, he gets wet and faints :( Try again!");
            console.log(result);
          },
//squirtle subpath//
        squirtle: function(poke){
          var gym = prompt("Congratulations! You chose Squirtle, the water pokemon. He's too cool for school btw. Now choose between 'giovanni' or 'surge' to fight.");
          console.log(gym);
          switch(gym){
            case 'giovanni':
              this.giovanni(gym);
              break;
            case 'surge':
              this.surge(gym);
              break;
            }},
          giovanni: function(gym){
            var result = alert("Giovanni is the Earth master. Since Squirtle is a water pokemon, he is able to squirt everybody to faint... Congratulations you win!");
            console.log(result);
          },
          surge: function(gym){
            var result = alert("Surge is the electric master. Since Squirtle is a water pokemon, Surge tases him and Squirtle faints... Try again!");
            console.log(result);
          },
//bulbasaur subpath//
        bulbasaur: function(poke){
        var gym = prompt("Congratulations! You chose Bulbasaur, the grass pokemon. Watch out or he'll vine whip you! Now choose between 'brock' or 'blaine' to fight.");
        console.log(gym);
        switch(gym){
          case 'brock':
            this.brock(gym);
            break;
          case 'blaine':
            this.blaine(gym);
            break;
          }},
          brock: function(gym){
            var result = alert("Brock is the rock master. Since Bulbasaur is a grass pokemon, his spores gets on all the rocks, making them mold up and fall into an eternal slumber... Congratulations you win!");
            console.log(result);
          },
          blaine: function(gym){
            var result = alert("Blaine is the fire master. Since Bulbasaur is a grass pokemon, I mean... come on... Try again!");
            console.log(result);
          },
 //Sleep Path//
      sleep: function(hi){
      var slept = alert("You become disinterested with this poke-man and you go back to bed...");
      console.log(slept);
      },
 //Fight Path//
      fight: function(hi){
      var fightMove = prompt("You decide to fight Professor Oak!! *cue music* Now choose to 'punch' or 'kick' him.");
      console.log(fightMove);
      switch(fightMove){
        case 'punch':
        this.punch(fightMove);
        break;
        case 'kick':
        this.kick(fightMove);
        break;
        default:
        console.log('Please choose a proper hitting style missy!');
        alert('Please choose a proper hitting style missy!');
        }},
          punch: function(){
            var result = alert("You throw a punch at Professor Oak! And... you miss. Professor Oak puts you in a submission and bans you forever");
            console.log(result);
          },
          kick:function(){
            var result = alert("You throw a kick at Professor Oak! And... you miss. Professor Oak puts you in a submission and bans you forever");
            console.log(result);
          },
 //Slip on Banana Path//
      slip: function(hi){
      var result = alert("You slip on a banana peel and fall on your butt. Cue the embarassing song... womp womp");
      console.log(result);
      }


 }
 pokeOptions.name();

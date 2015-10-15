

var scared = prompt("It's Halloween.  Are you scared?");
  if (scared === 'yes') {
    var candy = prompt("Okay, let's go trick or treating instead. Do you like candy?")
      if (candy === 'yes') {
          var pieces=prompt("Great! How many pieces can you eat?")
            if (pieces > 10) {
                  prompt("Stomache-ache city! Happy Halloween!")
              } else if (pieces > 5){
                  alert("Good to have some moderation this time of year.")
              } else {
                  alert("Not even one piece? That's no fun, but Happy Halloween anyway!")
                };
      } else if (candy === 'no') {
          alert("You're lame.  Go home and turn on all the lights.")
    };


  } else if (scared === 'no') {
      var spookyChoice = prompt("You will be soon! Which one do you want to visit - a graveyard or haunted house or neither?" )
        if (spookyChoice === 'graveyard'){
          alert("Bold choice. Hope you have a flashlight.  Happy Halloween!");
        } else if (spookyChoice === 'haunted house') {
          alert("Yikes.  We may never see you again.  Happy Halloween!");
        } else if (spookyChoice === 'neither'){
        var zombies = prompt("Nevermind.  Do you believe in zombies?")
          if (zombies === 'yes') {
              alert("Yeah, this place is crawling with them.  Don't work late.  Happy Halloween!")
          } else if (zombies === 'no') {
              var zombieCount = prompt("You should! Turn around verrry slowly.  How many do you see?")
              while (zombieCount < 50) {
                zombieCount = prompt("Now how many?!");
                zombieCount ++;
              }
              alert('Zombies are all around.  You are dead!')
          };

    }
  };

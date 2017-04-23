confirm("WARNING: PRETTY BIG ADVENTURE AHEAD.  ARE YOU SURE YOU'RE READY?");
  if (ready=="yes"){
    alert("Sweet!  You won't regret it.")
  } else if (ready!=="yes") {
    alert("Sorry, buddy - no risk, no reward.  You're playing anyway.")
  };

var color=prompt("Pick a color.  Red, Blue, or Green.");
  if (color=="red"){
    var red=prompt("something happens.  better make a choice.  yes or no");
      if(red=="yes"){
        alert("good job.")

          }
            }
      } else if(red!=="yes"){
        alert("you died.")
      }
  }
  if (color=="blue"){
    var blue=prompt("something BLUE happens.  better make a choice.  yes or no");
      if(blue=="yes"){
        alert("good BLUE job")
      } else if(blue!=="yes"){
        alert("you BLUE died.")
      }
  }
  if (color=="green"){
    var green=prompt("something GREEN happens.  better make a choice.  yes, no, or maybe");
      if(green=="yes"){
        alert("good GREEN job")
      } else if(green=="maybe"){
        alert("you GREEN were fed a roast duck.")
      } else if(green=="no"){
        alert("you GREEN were magically transported to Narnia")
      }
  }


// var door=prompt("Red, Blue, or Green?");
// if (door=="Red"){
//   alert("banana")
// } else if (door=="Blue"){
//   alert("squids")
// } else if (door=="Green"){
//   alert("magicians")
// } else {
//   alert("you're hopeless")
// }

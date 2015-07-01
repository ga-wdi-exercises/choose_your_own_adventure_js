
// 7 destinations
// 3 questions per prompt
// 1 with multiple answers
// 1 integer and one string
function adventure_time(){
  console.log("You are a cute little puppy strolling down the street...");
  var choice01 = prompt("You see a trash can on the side of the road ! \nDo You :\n[a]lift your leg up and pee on it. \n[b]sniff it for curiosity \n[c]bark at it \n[d]ignore and keep on going");

}


// start of the program .

var start_adventure = prompt("#### WELCOME TO PUPPY POWER ADVENTURE !! #### \nReady to start? [y/n]");
if (start_adventure.toString() == "y") {
        alert("YES SUCKA!");
        adventure_time();

    } else if (start_adventure.toString() == "n"){
      alert("THE WORLD ENDS, GOODBYE ");
    }

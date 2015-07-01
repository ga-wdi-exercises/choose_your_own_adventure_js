
// 7 destinations
// 3 questions deep per case
// 1 with multiple answers
// 1 integer and one string
function adventure_time(){


  var choice01 = prompt("Snookie sees a trash can on the side of the road ! \nDo You :\n[a]lift his leg up and pee on it. \n[b]sniff it for curiosity \n[c]bark at it \n[d]ignore and keep on going");
    switch (choice01){
      case "a":
          console.log("Snookie lifts his leg up and pee on it, only to discover it is NEON BLUE!");
          var choice01_1 = prompt("Should he:\n[a]be worried and go see the puppy doctor?\n[b]probably all the gin last night so just keep on moving.");
            if(choice01_1 == "a"){
              console.log("Snookie goes to the puppy doctor who tells him he is Radioactive!");
              var choice01_1_1 = prompt("Should Snookie \n[a]fly off in the sunset \n[b]go order pizza");
                if (choice01_1_1 == "a" ){ console.log("SNOOKIE FLY'S INTO THE SUNSET FOR NEW ADVENTURES AS SUPERDOG!!! fin.");}
                else if(choice01_1_1 =="b"){console.log("snookie orders pizza, AND TRANSFORMS INTO THE INCREDIBLE HULK DOG AND DESTROYS THE CITY!! fin.");}

            } else if (choice01_1 == "b"){
              console.log("Snookie Shrugs and figured it was the gin last night and heads home ONLY TO FIND HE KNOCKED SOME GIRL PUPPY UP AND THEY HAVE A BILLION RADIOACTIVE PUPPY DINSOAURS!!! fin.");
            }

        break;
      case "b":
        console.log("sniff it for curiosity");
        break;
      case "c":
        console.log("bark at it");
        break;
      case "d":
        console.log("ignore and keep on going");
        break;
    }

}


// start of the program .

var start_adventure = prompt("#### WELCOME TO PUPPY POWER ADVENTURE !! #### \nReady to start? [y/n]");
if (start_adventure == "y") {
        alert("YES SUCKA!");
        console.log("Snookie is a cute little puppy strolling down the street..."); //figure out why prompt kicks up before this even shows
        adventure_time();

    } else if (start_adventure == "n"){
      alert("THE WORLD ENDS, GOODBYE ");
    }

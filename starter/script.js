
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
        console.log("Snookie sniffs at it curiously and suddenly it opens and KILLER MUTANT NINJAS POP OUT!!!!");
        var choice02_1 = prompt("What Should Snookie Do?! \n[a]FIGHT THEM!\n[b]RUN!");
        if (choice02_1 == "a"){
          console.log("Snookie decides he should fight them AND THEN REMEMBERS HE IS PLUGGED INTO THE MATRIX AND KNOWS KUNG FU AND REALIZES HE IS NEO!!!! fin.");
        } else if (choice02_1 =="b"){
          console.log("Snookie is a dog, they are ninjas. Fuuuuuck that. and Snookie runs away and they give chase!!");
          var choice02_1_1 = prompt("Snookie turns a left at the next corner only to be faced with Mr. Rogers!! Should he...\n[a]try and hide behind Mr.Rogers\n[b]keep on running");
            if(choice02_1_1 =="a"){ console.log("Snookie hides behind Mr. Rogers who pulls OUT A MACHIEN GUN AND KILLS ALL THE NINJAS BECAUSE NOBODY MESSES WITH MR.ROGERS. fin.");}

            else if(choice02_1_1 == "b"){console.log("Snookie keeps on running and realizes he's hungry so stops into the nearest pizza shop. fin.");}
        }
        break;
      case "c":
        console.log("Snookie Barks at it and it TRANSFORMS INTO A GIANT HEAVY METAL MECH WARRIOR");
        var choice03_1 = prompt("Should Snookie...\n[a]play the banjo?\n[b]pee on the Heavy Metal Mech Warrior");
          if (choice03_1=="a"){ console.log("Snookie pulls out his banjo and plays a tune AND DESTROYS THE MECH WARRIOR WITH THE SONIC WAVES BECAUSE IT'S A MEGASONICSUPERSOMETHING BANJO. fin.");}
          else if(choice03_1 =="b"){
              console.log("Snookie Shrugs and thinks it's just another thing to pee on and lifts his leg to pee");
              var choice03_1_1 = prompt("The Mech warrior ask if he is going a 1 or 2 ...");
                if (choice03_1_1.parseInt() == 1){console.log("Snookie Barks 1 and the Mech Warrior EXPLODES OUT OF TERROR OF BEING URINATED ON!!!!  fin.");}
                else if(choice03_1_1.parseInt() ==2){console.log("Snookie Barks 2 and the Mech Warrior Bends over and POOPS ON THE SNOOKIE!!! fin.");}
          }
        break;
      case "d":
        console.log("Snookie figures it's not interesting and keeps on walking home");
        var choice04_1 = prompt("Snookie walks into his house and sees someone left the oven on should he...\n[a]Bark a voice command to turn it off \n[b]ignore he wants to eat some tacos first");
        if (choice04_1 == "a"){console.log("he Barks a Voice command to the house to turn it off BUT THE HOUSE HAS TURNED INTO SKYNET AND REBELS AND HE MUST LEAD THE HUMAN-PUPPY REBELLION!!  fin.");}
        else if(choice04_1 =="b"){
            console.log("He ignores it and goes to make some tacos because he is hungry but A GIANT FIRE DEMON LEAPS OUT OF THE OVEN!!!");
            var choice04_1_1 = prompt("Snookie dodges a fireball! should he...\n[a]Invite the fire demon for tacos?\n[b]Bark at the fire demon?");
            if (choice04_1_1 =="a"){console.log("Snookie Invites the fire demon for tacos, who is very lonely and they become friends forever! fin.");}
            else if(choice04_1_1=="b"){console.log("Snookie Barks at the fire demon who is startled, trips over a chew toy and falls on Snookie IMBUING SNOOKIE WITH FIRE DEMON POWERS AND HE BECOMES A SUPER PUPPY HERO!!!!!!!  fin.");}

        }
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

// put code here!
//Pseudo-coded
//Hello there! Welcome to the world of POKEMON! My name is OAK!
alert("Hello there! Welcome to the world of Pokemon! My name is Oak!");
//People call me the POKEMON PROF!
alert("People call me the Pokemon Prof!");
//This world is inhabited by creatures called POKEMON! For some people, POKEMON are pets. Others use them for fights. Myself...I study POKEMON as a profession.
alert("This world is inhabited by creatures called Pokemon! For some people, Pokemon are pets. Others use them for fights. Myself...I study Pokemon as a profession.");
//First, what is your name?
//**Prompt: Input user's name.**
//Returns: Right! So your name is userName!
var userName = prompt("First, what is your name?");
Response = alert("Right! So your name is "+userName+"!");
//This is my grandson. He's been your rival since you were a baby.
alert("This is my grandson. He's been your rival since you were a baby.");
//...Erm, what is his name again?
//**Prompt: input rival's name.**
//Returns: That's right! I remember now! His name is rivalName!
var rivalName = prompt("...Erm, what is his name again?");
Response = alert("That's right! I remember now! His name is "+rivalName+"!");

//userName! Your very own POKEMON legend is about to unfold! A world of dreams and adventures with POKEMON awaits! Let's go!
alert(userName+"! "+"Your very own Pokemon legend is about to unfold! A world of dreams and adventures with Pokemon awaits! Let's go!");
//Here, userName! There are 3 POKEMON here! Haha! They are inside the POKE BALLS. When I was young, I was a serious POKEMON trainer. In my old age, I have only 3 left, but you can have one! Choose!
alert("Here, "+userName+"! There are 3 Pokemon here! Haha! They are inside the Poke Balls. When I was young, I was a serious Pokemon trainer. In my old age, I have only 3 left, but you can have one! Choose!");
//Which POKEMON do you choose?
//Option 1: Bulbasaur
//Option 2: Squirtle
//Option 3: Charmander
//Option 4: Pikachu
var pokemon = prompt("Which Pokemon do you chose? Bulbasaur (b), Squirtle (s), Charmander (c), or Pikachu (p).").toLowerCase();
//**user selects Bulbasaur**
//>Bulbasaur I choose you!
//Q: rivalName choses Charmander and challenges you to a battle. Do you accept to battle or do you run?
//>>>user accepts to battle.
//>Q:Which finishing move do you select? Tackle or Growl?
//>>>>Tackle, user wins.
//>>>>Growl, user loses.
//>>user runs from battle
//>>user cannot escape, rival's POKEMON OHKO user. user loses.
if (pokemon === "b"){
  alert(userName+": Bulbasaur I choose you!");
  var decision1 = prompt(rivalName+" choses Charmander and challenges you to a battle. Do you accept to (battle) or (run away)?").toLowerCase();

    if (decision1 === "battle"){
     var decision11 = prompt("It's a heated battle and even though fire Charmander has the type advantage over your grass Bulbasaur, the next move will determine the winner. Which move do you use, (tackle) or (growl)?").toLowerCase();

     if (decision11 === "tackle"){
       alert("Charmander used scratch but it missed! Bulbasaur used tackle and it was a critial hit! You and Bulbasaur won! "+rivalName+" was defeated.");

     }else if (decision11 === "growl"){
        alert("Bulbasaur used growl and it lowered Charmander's attack stat. Charmander used scratch and it's a critical hit! "+rivalName+" and Charmander won. You and Bulbasaur were defeated.");
        }
     }
    if (decision1 === "run away"){
      alert("There is no running away from battle challenges! You and "+rivalName+" battle. "+rivalName+" and their Charmander are a powerful team and landed a ONE HIT KNOCK OUT with scrath on your Bulbasaur."+rivalName+" and Charmander won. You and Bulbasaur were defeated.");
    }

//**user selects Squirtle**
//You've trained for months, won all the region's gym battles, and your Squirtle evolved into a Wartortle!
//Wartortle wants to learn Hydro Pump but Wartortle already knows 4 moves! Should a move be forgotten to make space for Hydro Pump?
//Yes. Which move should be forgotten?
//Surf, Ice Beam, Rapid Spin, Aqua Ring?
//1, 2 and...poof! Blastoise forgot [move] and learned Hydro Pump!
//No. Blastoise did not learn Hydro Pump.
} else if (pokemon ==="s"){
  alert(userName+": Squirtle I choose you!");
  var decision2 = prompt("You've trained for months, won half of the region's gym battles, and your Squirtle evolved into a Wartortle! Wartortle wants to learn Hydro Pump but Wartortle already knows 4 moves! Should a move be forgotten to make space for Hydro Pump? (Yes) or (No)").toLowerCase();

  if(decision2 === "yes"){
    var decision21 = prompt("Which move should be forgotten? Surf, Ice Beam, Rapid Spin, Aqua Ring").toLowerCase();

    if(decision21 === "surf"){
      alert("1, 2 and...poof! Wartortle forgot Surf and learned Hydro Pump!");
    }else if(decision21 === "ice beam"){
      alert("1, 2 and...poof! Wartortle forgot Ice Beam and learned Hydro Pump!");
    }else if(decision21 === "rapid spin"){
      alert("1, 2 and...poof! Wartortle forgot Rapid Spin and learned Hydro Pump!");
    }else if(decision21 === "aqua ring"){
      alert("1, 2 and...poof! Wartortle forgot Aqua Ring and learned Hydro Pump!");
    }
  }if (decision2 === "no"){
    alert("Wartortle did not learn Hydro Pump.");
  }

} else if (pokemon ==="c"){
  alert(userName+": Charmander I choose you!");
} else if (pokemon ==="p"){
  alert(userName+": Pikachu I choose you!");
  var decision4 = alert("You're Pikachu is a beast, chooses not to evolve into a Raichu, even after defeating the Elite Four. What do you do next?");
  prompt("(A)Challenge the Elite Four again?, (B)Go back to your home town because you miss your mom?, (C)Find and Capture rare pokemon hidden around the region?").toLowerCase();

  switch (decision4){
    case "a":
    challenge();
    break;
    case "b":
    home();
    break;
    case "c":
    rare();
    break;

    function challenge(){
      alert("Stock up on Health Potions, Elixers, and Full Heals, because the Elite Four is even stronger now. But you and your Pikachu are up for the challenge.");

    function home(){
      alert("You're home now and your mom cooked you and your pokemon an amazing homecoming meal. After you're finished eating, she keeps telling you to rest before you head out on yur adventure again.");

    function rare(){
        var decision41 = prompt("After hours of exploring the Cerulean Cave near your home town, you encounter a phenomenal creature of myth. A wild Mew-Two appeared! You send out Pikachu to battle. What will you do? (A)Battle, (B)Bag: Use Master ball, (C)Switch Pokemon, (D)Run").toLowerCase();

        if(decision41 === "a"){
          alert("Wild Mew-Two uses Psycic. It's a critical hit. Pikachu fainted.");
        }else if(decision41 === "b"){
          alert(userName+" throws a Master Ball. 1...2...and...'click'! Congratulations, Mew-Two was caught!");
        }else if(decision41 === "c"){
          alert("The rest of your pokemon have fainted. Pikachu is your only remaining pokemon to battle.");
          rare();
        }else if(decison41 === "d"){
          alert("There's no escape.");
          rare();
        }
      }
    }
    }

  }
} else {
  alert("Please select a valid Pokemon.")
}




//**user selects Charmander**
//feed charmander rare candies until it evolves to charizard. Charmander>25>Charmilion>75>Charizard
//**user selects Pikachu**
//You've been the elite four. What do you want to do next?
//Go back to your home town to visit your mom, immidiately challenege the elite four to battle again, find and catch legendary pokemon?
//Legendary pokemon, a wild Mew-Two appeared, what do you use to catch it?
//Master ball or ultra balls.
//Master ball successful.
//Ultra ball, wild Mew-Two ran away.

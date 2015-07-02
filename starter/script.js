// put code here!


console.log("George Costanza has eaten another eclair out of the garbage and accidentally started a zombie apocalypse.");
var player = prompt("Please choose Jerry, Elaine or Kramer to save Earth from the nastiness Costanza has brought on us all.");

/////////    KRAMER PATH   //////////

if (player.toLowerCase() === "kramer") {


    console.log("You are taping an episode of the Merv Griffin show when the news breaks.");
    var cosmo = prompt("Type 'a' to stay and finish the show or 'b' to head out of the city.");

    if (cosmo === "a") {

      console.log("Great!  Merv would never abandon a show either.  Bad news is, your sidekick Newman is freaking out!");
      var cosmo_stay_or_go = prompt("Type 'a' to kill Newman or 'b' to try to calm him dowm!");

      if (cosmo_stay_or_go === "a") {


        console.log("You try to use your karate skills, but Newman, not being a twelve year old over powers and is choking you with the Kenny Rogers chicken you left out.  With a smile he asks for any last words.");
        var kill_Newman = prompt("Write Kramer's last words to try to save his life");
        console.log(kill_Newman + " is not a enough.  You die to the sounds of his gleefull giggles.");

      };

      if (cosmo_stay_or_go === "b") {


        console.log("Surprise, there is no calming this miserable beast of a man.  It's either him or you Cosmo.")
        var calm_Newman = prompt("Choose your weapon and kill Newman!  Jerry will be soo happy!")
        console.log("You did it.  After giving Newman a last Drake's coffee cake, you kill him with the " + calm_Newman);
      };

    };

    if (cosmo === "b") {

      var kramer_leave = prompt("The smart choice, the city will be crawling with zombies soon, but where?");
      console.log(kramer_leave + " is a terrible choice, but ok.");

      console.log("On the way to " + kramer_leave + ", you get sentimental and stop by the stretch of highway you own.  It's filthy and Zombies are far away.")
      var highway = prompt("How long should you spend cleaning Cosmo Way?");
      console.log("Again, bad choice.  When Kramer dies the Zombies are dissappointed in his lack of brains.");


    };

};

/////////    ELAINE PATH   //////////
if (player.toLowerCase() === "elaine") {

  console.log("Elaine, being the shiksa that she is, is attracting Zombies left and right and will need help.");
  var elaine_help = prompt("Type 'a' for Mr. Peterman or 'b' for Puddy.");

  if (elaine_help === "a") {

    console.log("Mr. Peterman in his urban sombrero is amazing at killing zombies.  You have time to go into a muffin shop and tear the tops off muffins.");
    var peterman = prompt("How many tops do you want to rip off?  Please give an integer.");
    console.log("You are basking in the glow of your decision with an arm full of " + peterman + " muffin tops.  Give yourself a pat on the back.");


    console.log("Unfortunately, you are basking a little too much and get bit from behind.  Peterman, with his limited field of vision because of the sombrero is unable to save you, but before you are gone.  He leans in and says:")
    var kill_elaine = prompt("'Please enter saying below.'");
    console.log("Peterman voice: Elaine " + kill_elaine);
  }
  if (elaine_help === "b") {

    console.log("You find Puddy staring at the back of a chair in his office and hightail it out of the city.");
    var puddy = prompt("Being a car dealer, Puddy has his pick of litter.  What kind of car do you want to drive.");

    console.log("While driving your " + puddy + " you find Puddy staring slack jawed and expressionless out the window and decide bringing him was a big mistake.");
    var car = prompt("Do you 'a' kill Puddy with juju fruit or 'b' spare him.");

    if (car === "a") {

      console.log("You simply hand Puddy the candy, he forgets to chew and chokes on a red juju fruit.");

    }
    if (car === "b") {

      console.log("Puddy infuriates you soo much, you pick up speed and drive aggressively to saftey.");

    }

  }

};


/////////    JERRY PATH   //////////
if (player.toLowerCase() === "jerry") {

  console.log("Conflicted, Jerry is torn from trying to be superman and saving the Earth from the zombies or staying in his apartment and eating cereal waiting for this whole thing to boil over.")
  var jerry = prompt("Enter 'a' to try to save the world or 'b' to eat cereal.");

  if (jerry === 'a') {

    var jerry_says = prompt("Sadly, Jerry isn't Superman and can't even kill one Zombie.  Running down the streets he bumps in to Crazy Joe Devola.  What should Jerry say to convince Joe to help him:");
    console.log("That worked.  Joe is on on your side.");

    console.log("While Joe is kicking butt, you also run in to Kenny Bania, who begs for help, but Joe only has enough skills to protect one of you.");
    var bania = prompt("What can you say to Bania to make him go away.");

    console.log("This doesn't work.  Joe kills you both to get rid of you because he's crazy.");

  }
  if (jerry === 'b') {

    var cereal = ["Lucky Charms","Raisan Bran","Fruity Pebbles","Honeycomb","Kix"];

    for (var i = 0;i < cereal.length;i++) {

      console.log(cereal[i]);

    }

    var choice = prompt("Risky, but cereal is amazing.  Please choose from the list in the console.");

    console.log("You couldn't of gone wrong there.  After days of sitting in his puffy shirt and eating cereal, will Jerry decide to go outside or continue to stay inside.");
    var decision = prompt("Please type 'Y' to go outside or 'N' to stay inside.");

    if (decision.toLowerCase() === "y") {

      console.log("Bad choice, Jerry doesn't make it out of the building.");

    }
    if (decision.toLowerCase() === "n") {

      console.log("That's the right idea.  Jerry lives happily ever after");

    }



}


};

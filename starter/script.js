confirm("Are you over 18? Clicking OK proves this beyond a doubt. It's science.");
/* Set the scene and print it out*/
/*Later, move variables to the top*/
alert("It is a steamy, wind-swept night and you are alone in your grammaw's house. It is boring.");
alert("The internet is out and all she has for entertainment are these crusty cheese-ball romance novels. You have a choice: Go in the living room and help her file her bunions or pretend to read one of these things and let her think you're really into it.")
/*Read or File Bunions?*/
var BunionsOrRead = prompt("Now, what will it be honey-child, Mammaw's Bunions or Skanky Bodice Ripper? (Type 'B' for 'Bunions' or 'R' for 'Read the damn book').")
    if(BunionsOrRead === "B" || BunionsOrRead === "b" || BunionsOrRead === "Bunions"){
      alert("You chose your fate, bro. Go get the cheese-grater and the lotion! THE END.");
    } //this doesn't end here. why?
    else if (BunionsOrRead !== "B" || BunionsOrRead !== "R"){
      alert("Oh? Not playing at all today? Okay... it's the BUNIONS for you!");
    }
    else if (BunionsOrRead === "R" || BunionsOrRead === "r" || BunionsOrRead === "Read"){
    alert("You settle down and pick a book.");
    /*Insert Loop here? Pick bad titles?*/
    var BookPick1 =prompt("They have terrible titles. Who wrote this dribble?! Oh, well. This one looks good. It's called 'Pirate Saga: A Sea of Flaming Booty'. Do you want to open it? Yes or No?");
      if(BookPick1 === "no"){
        prompt("Yeah, me neither. Oooh! How about 'There's Something In The Milk Maid, vol 4?' That's gotta be good, right? ");
      };
  }
}





// put code here!

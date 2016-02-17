confirm("Are you over 18? Clicking OK proves this beyond a doubt. It's science.");
alert("It is a steamy, wind-swept night and you are alone in your grammaw's house. It is boring.");
alert("The internet is out and all she has for entertainment are these crusty cheese-ball romance novels. You have a choice: Go in the living room and help her file her bunions or pretend to read one of these things and let her think you're really into it.");
/*Read or File Bunions?*/
var BunionsOrRead = prompt("Now, what will it be honey-child, Mammaw's Bunions or Skanky Bodice Ripper? (Type 'B' for 'Bunions' or 'R' for 'Read the damn book').");
    if(BunionsOrRead === "B" || BunionsOrRead === "b" || BunionsOrRead === "Bunions"){
      alert("You chose your fate, bro. Go get the cheese-grater and the lotion! THE END.");
    }
    else if (BunionsOrRead === "R" || BunionsOrRead === "r" || BunionsOrRead === "Read"){
    alert("You settle down and pick a book.");
    //&&&
    var BookPick1 = prompt("They have terrible titles. Who wrote this dribble?! Oh, well. This one looks good. It's called 'Pirate Saga: A Sea of Flaming Booty'. Do you want to open it? Yes or No?");
      if(BookPick1 === "no"){
        var BookPick2 = prompt("Yeah, me neither. Oooh! How about 'There's Something In The Milk Maid, part 4?' That's gotta be good, right? ");
          if (BookPick2 === "no"){
            prompt("Fine, fine...what was I  thinking? Oh! This one's perfect! It's called 'Brogrammers in love: Escape from Java's Crypt.");
          }




    }
    else if (BunionsOrRead !== "B" || BunionsOrRead !== "R"){
      alert("Oh? Not playing at all today? Okay... it's the BUNIONS for you!");

  }
}

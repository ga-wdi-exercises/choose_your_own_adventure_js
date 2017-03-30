var hungry = prompt("Before we head out to the theater... On a scale of 1 to 5. How hungry are you?");
    if(hungry <= 3);
      {
        alert("That's fine. We should bring something before we go to the movies.");
      }
    else {
      alert("Alright, let's go to the kitchen.");
  }
  var agreewithme = confirm("Hey, help yourself to anything in the fridge. Just don't eat the last slice. Got it?");
    if (agreewithme === true) {
      alert("Cool");
    }
    else {
      alert("Get out of my house.");
    }
  var fridgechoice = prompt("You check the fridge and there's a slice of cake, some chinese food and a Pepsi. What do you get?");
    if(fridgechoice == "cake") {
      var confrontation = confirm("What the heck, did you take my slice??")
        if (true) {;
          alert("D:< But I wanted it! You are so paying for my ticket.");
        }
        else {
          alert("Now you are lying! Get out of my house.");
        }
    }
    if(fridgechoice == "chinese") {
        alert("Thanks for finishing that. It was pretty good but I had a lot and I didn;t want it going bad.");
    }
    if(fridgechoice == "pepsi") {
        alert("Alright. Let's go see Power Rangers.");
    }
    else {
      alert("Dude, what are you doing? Get out of my house.");
    }
    alert("I hope you guys liked the movie. Don't spoil it for me.");

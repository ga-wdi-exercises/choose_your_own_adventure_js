//welcome player
alert("Daaaaaa Daaaaa Da Da Da Daaaaaa Da Da Da");
alert("That was the game of thrones theme. My singing voice is fantastic, so if you didn’t recognize it you obviously aren’t a real fan.");
alert("Regardless, welcome to the Game of Thrones text adventure. It’s exactly like the show… but with slightly less nudity.");
var house = (prompt("Choose your house: Enter 'S' for Stark, 'L' for Lannister, or 'M' for Martell"));
if (house == 'M') {
  alert("A Lannister always pays their debts. The real estate bubble never would have burst if more people took your catch-phrase seriously.");
}
else if(house == 'S') {
  alert("Winter is coming.” Congratulations, you are the Al Gore of Westeros.");
}
else if(house == 'M') {
  alert("Martell - Seriously? Dorne? This adventure is text based, and it’s still going to be more exciting than everything that happens in your segments of the show.");
}
  alert("Now its time to generate some rating so we can stay on the air");
  var ratings = 0;
  var deaths = 0;
  var nudes = 0;
  while (ratings < 10){
    var choice = parseInt(prompt("Enter '1' to to add nudity, Enter '2' to kill off a main character, Enter '3' for a scene set in Dorne"));
    if (choice == 1){
      ratings = ratings + 3;
      alert("nice");
      nudes = nudes + 1;
      if (nudes > 2){
        alert("You're really good at this");
      }

    }
    else if (choice == 2){
      ratings = ratings + 1;
      deaths = deaths + 1
      if(deaths > 3)
      {
        alert("You've killed off too many characters!");
        alert("Don't worry, we can just bring them back to life for even more ratings!");
        deaths = 0;
        ratings = ratings + 5;
      }
    }
    else if (choice == 3){
      ratings = 0;
      alert("I don't care if it's supposed to be a female empowerment warrior leader theme, its still super boring and nobody likes it.");
    }
  }

  alert ("Congratulations! You've kept the show on the air. George RR Martin will most likely die before the books are done, so it's all up to you. No pressure.");

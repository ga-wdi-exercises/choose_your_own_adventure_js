// put code here!
//welcome player
alert("Daaaaaa Daaaaa Da Da Da Daaaaaa Da Da Da");
alert("That was the game of thrones theme. My singing voice is fantastic, so if you didn’t recognize it you obviously aren’t a real fan.");
alert("Regardless, welcome to the Game of Thrones text adventure. It’s exactly like the show… but with slightly less nudity.");
var house = parseInt(prompt("Choose your house: Enter '1' for Stark, '2' for Lannister, or '3' for Martell"));
if(house == 3) {
  alert("Martell - Seriously? Dorne? You lose, Game Over. This adventure is text based, and it’s still going to be more exciting than everything that happens in your segments of the show.");
}
else if (house == 2) {
  alert("A Lannister always pays their debts. The real estate bubble never would have burst if more people took your catch-phrase seriously.");
}
else if(house == 1) {
  //destination 4
  alert("Winter is coming.” Congratulations, you are the Al Gore of Westeros.");
}
if (house== 1 || 2) {
  alert("You've picked a great house, now its time to generate some rating so we can stay on the air");
  var ratings = 0;
  var deaths = 0;
  while (ratings < 10){
    var choice = parseInt(prompt("Enter '1' to to add nudity, Enter '2' to kill off a main character, Enter '3' for a scene set in Dorne"));
    if (choice == 1){
      ratings = ratings + 7;
      alert("nice");
    }
    else if (choice == 2){
      ratings = ratings + 1;
      deaths = deaths + 1
      if(deaths > 3)
      {
        alert("You've killed off too many characters!");
        break;
      }
    }
    else if (choice == 3)
    ratings = 0;
    alert("I don't care if it's supposed to be a female empowerment warrior leader theme, its still super boring and nobody likes it.");
    }
  }
  alert ("Congratulations! You've kept the show on the air. George RR Martin will most likely die before the books are done, so it's all up to you. No pressure.");

// put code here!
console.log('hello');

var path = prompt("Where would you like to move? (DC, SF, or Dreamland)");


if (path === "SF") {
  alert("Let the games begin!");
  var salary = prompt("What salary do you want? Enter a number without the dollar sign.");
    if (salary < 50000) {
      alert("This will not cover rent. You must leave SF.");
    } else {
      var developer = prompt("Are you a developer? Y/N");
        if (developer === "Y") {
          alert("Awesome! The world is yours.")
        } else {
          var diceRoll = prompt("Oof! Please attend General Assembly. Roll the dice to choose your class! Pick a number 1-6")
            switch(parseInt(diceRoll)) {
              case 1:
                alert("WDI. Your path is chosen.");
                break;
              case 2:
                alert("WDI. Your path is chosen.");
                break;
              case 3:
                alert("UXDI. Your path is chosen.");
                break;
              case 4:
                alert("UXDI. Your path is chosen.");
                break;
              case 5:
                alert("DSI. Your path is chosen.");
                break;
              case 6:
                alert("DSI. Your path is chosen.");
                break;
              default:
                alert("Go back where you came from!")
            }
        }
    }


} else if (path === "DC") {
  alert("Interesting.... Let's see about this!");


} else if (path === "Dreamland") {
  alert("Ahh yes. So so tired.");



} else {
  alert("BEEP - try again!");
}


confirm("Are you ready to play fictional football?")
var QAnswer1
var QAnswer = prompt("The crowd roars as the teams take the field. Team captains are sent to the middle of the field. (H)eads or (T)ails?")

while(QAnswer != "H" && QAnswer != "T" && QAnswer != undefined) {
  QAnswer = prompt("The crowd roars as the teams take the field. Team captains are sent to the middle of the field. (H)eads or (T)ails?");
}

if  (Math.random() >= .5) {
  QAnswer1 = "C"

  //The original prompt! prompt("You picked correctly! You've won the toss and have elected to receive the kickoff. A high booming kick goes saily out the back of the endzone, touchback. As your offense takes the field how do you tell your team to behave, (A)ggresively or (C)onservatively?");

  // Was causing unexpected token "!=" error! while(QAnswer != "A" && QAnswer !="C" && != undefined) {
  //     QAnswer = prompt("You picked correctly! You've won the toss and have elected to receive the kickoff. A high booming kick goes     saily out the back of the endzone, touchback. As your offense takes the field how do you tell your team to behave, (A)ggresively or (C)onservatively?");
  //   }

  if (QAnswer1 = "A") {
    if (Math.random() >=.33){
      alert("Your aggresiveness pays off! Your team scores on your first possession and never looks back. Leveraging your early advantage, you dominate the game wire to wire, you win!");
    } else {
      alert("Interception! Your overaggressivness has lead to a costly mistake. You are unable to recover and go on to lose.");
    };
  } else if (QAnswer1 = "C") {
      if (Math.random() >=.5) {
        alert("Your conservative offense worked wonderfully. You dominate the possession and field position. Way to go. You win.");
      } else{
        QAnswer = prompt("Your conservative offense keeps the game close throughout the course of the game. After a lot of back and forth, you find yourself with the ball on the midfield line with one play left in the game. Hail Mary time! The longer your quarterback holds the ball the more likely he is to be sacked but also the more likely one of his receivers is able to get open. Do you tell your QB to hold the ball for (3), (5), or (7) second?");
        while (QAnswer != 3 && QAnswer != 5 && QAnswer != 7 && QAnswer != undefined) {
          QAnswer = prompt("Your conservative offense keeps the game close throughout the course of the game. After a lot of back and forth, you find yourself with the ball on the midfield line with one play left in the game. Hail Mary time! The longer your quarterback holds the ball the more likely he is to be sacked but also the more likely one of his receivers is able to get open. Do you tell your QB to hold the ball for (3), (5), or (7) second?");
        }
        if (Math.random() >=(parseInt(QAnswer)/10)) {
          alert("You are unable to find anyone open and your play fails");
        } else if(Math.random()<= (parseInt(QAnswer)/20)){
            alert("Someone gets open! Touchdown! You Win")
          } else {
            alert("You were sacked, game over. You lose.");
          }
        }
    }
} else {
  QAnswer = prompt("You picked incorrectly! The opponent has elected to receive the ball. ");
}

var name = prompt("Welcome to Westeros, what is your name?");
var family = prompt("Are you of house Lanniser or Stark?");
var money = 0;
var days = 1;

  if (family === 'Lannister') {
    console.log("Welcome "+name+" of House "+family+". You gain 300gold");
    money = 300;
    var choice1 = prompt("Where would you like to travel first?")
      if (choice1 === 'Dorne'){
        console.log("Upon arrival, you are rounded up by Dornish watchmen. They ask you where you are from. You answer proudly, "+name+" of house "+family+". The Dornish hate the Lannisters for killing the late queen. You are immediately slain. You Die at day"+days+". Game Over");
      }
      else if (choice1 === 'Kings Landing'){
        money = money + 100;
        days = days +1;
        console.log("You are welcome at Kings Landing. You offer to work guard for the knight on behalf of House "+family+". You gain 100gold. Currently at "+money);

        console.log("Would you like to spend your gold? Currently at"+money);
        var choice2 = prompt("Where would you like to go? A) Varys pimp house. B) The Red Keep. C) Church of the Seven");
          if (choice2 === 'A'){
            if (money > 1000){
              console.log("You do not have enough money. Currently at "+money);
              var repeatQ = prompt("Would you like to do more shifts at Kings Landing? Y/N");
                if (repeatQ === 'Y'){
                  console.log("You work your days, dreaming of spending the night at Varys pleasure palace");
                  for(var i = 0; i < ((1000-money)/100); i++){
                    console.log("still working..");
                    money += 100;


                    else
                    console.log("You pay the money you have worked hard to earn but you die at the hands of a bald assasin. You die at"+days+". Game over")
                    return;}









    if (family === 'Stark') {
      console.log("Welcome "+name+" of House "+family);
      var choice1 = prompt("Where would you like to travel first?")
        if (choice1 === 'Casterly Rock'){
          console.log("Upon arrival, you are rounded up by Lannister Guards . They ask you where you are from. You coldly answer, "+name+" of house "+family+". The Dornish hate the Lannisters for killing the late queen. You are immediately slain. You Die. Game Over");
        }
      }

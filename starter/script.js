// put code here!
var intro = "You and your friends had gathered in the basement of the house and were doing what kids at the time did, smoking cigarette butts that they stole from the ash tray and playing with games and toys. One of the your friends had found a Ouija board. With little else to do they decided why not play it, would you like to join them?  Y or N";


var stageOne = "They began with silly starter questions, like does this girl at school like me, will I pass the English test, and then they decided to get more brave.'Is there a ghost down here?' 'Yes' the Ouija board led their hands to the answer. All the boys giggled thinking this was fantastic.'Are you a nice ghost or a bad ghost?'Yes' the Ouija board said back. Jason smacked the question asker in the back of the head, explaining that they need to ask a single questions.'Are you a nice ghost? 'No' .. Do you want to go back up stairs? Y or N";

var stageOneA = "They kick you out of the basement, and continue to play the game";


var stageTwo = "'What’s your name?' They watched as the board began spelling out letters, with one of the boys keeping track, ‘William, it says William!’ the boy yelled out, they felt a flood of air surge through the room and the next part none of them can explain. The air moved the Ouija board across the room and all the boys stood up, and backed across the room, staring at a lone mirror in the room, only they didn’t see their reflection, they saw an older man with dark black eyes and a long beard and circular lenses staring back at them. They all started yelling ‘go away’ and the mirror slid of the wall and shattered before the last light went pop.Do you want to leave? Y or N"


var stageTwoA = "Your friends went back upstairs and locked you in basement and refused to play in your basement ever again.";


var ForF = "Its just you and the ghost now.... Do you want to fight(f) or give up(gU)?  ";
var kick = "would you like to throw some kicks? Y or N";
var punch = "Would you like to throw some punches? Y or N";
var name = prompt("Welcome, you are about to be part of an adventure that happened in REAL LIFE!!!, What is your name ?" );


var answer = prompt(intro);
console.log(answer);

if(answer !== "Y"){
  console.log("Booooooo...!!!!!!")
  var N = alert(stageOneA);
  setTimeout(function(){
    console.log("Choose Wisely....")
    var stageOneAB = prompt("You feel began to feel pretty sad because you lost your best friends, do you want go back downstairs and play the game? Y or N")

    if(stageOneAB != "Y"){
      console.log("Enjoy the rest of your day..")
    }

    if(stageOneAB == "Y"){
      console.log("Good Choice")
      alert("they decide not to let you play, Sorry")
    }
  }, 2000);

}else if (answer == "Y") {
  console.log("Goooodddd......")
  var Y = prompt(stageOne);
  console.log(Y);
  if (Y == "Y"){
    alert("make sure to say goodbye to your friends")
    console.log("You live to fight another day, your friends .... weren't so lucky")
  }else if(Y != "Y"){
      alert(stageTwoA);
      var fightOrDie = prompt(ForF);
      console.log("Some friends they are!!!!");
      if(fightOrDie == "f"){
        var actionP = prompt(punch);
        if(actionP == "Y"){
          var ha = "Punches dont work hahahahaha!!!!! .... the good ones always go first"
          alert(ha);
          console.log(ha);
        }else /** if you dont want throw punches*/{
          var actionK = prompt(kick);
          if(actionK == "Y"){
            var ha = "kicks dont work hahahahaha!!!!! .... the good ones always go first"
            alert(ha);
            console.log(ha);
          }else{
            var ha = ".... the good ones always go first :("
            alert(ha);
            console.log(ha);
          }
        }
      }else{
        var ha = ".... the good ones always go first :("
        alert(ha);
        console.log(ha);
      }
  }

}

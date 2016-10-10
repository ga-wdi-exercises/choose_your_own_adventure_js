var play = prompt("do you want to play Y or N");

if (play == "Y"){
  var x = "let's begin"
  console.log(x);
  var y = firstQ();
    if (y == "A"){
          alert("Done");
        }

  }
else{
    alert("Oh Well")
  }

  function firstQ(){
    var answer = var firstQ = prompt(" I wonder what is is.. was it A.Pick up the kids or B.Get washing machine or C. Buy a present for Selman and Patty");
    return answer;
}
// switch (firstQ) {
//   case "A":
//
//
//     break;
//   default:
//
// } (firstQ == )

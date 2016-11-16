//Adventure Game Homework
let criminal = prompt("His name is:","criminal" );

alert("Hello! I am an alert box!!");



if (criminal === "criminal"){
  criminal = prompt("Please enter your name");
}
else {
  alert("Ok, you're in trouble!");
}

//switch statement

let goodbad = prompt("Are you a good guy or a bad guy?");

let yearsthisway = prompt("How many years have you been this way?")
//  if yearsthisway

if (goodbad === "good"){
  let good = 0;
}
else {
            if (goodbad === "bad"){
            good = 1;
            }
            else {
              good = 2;
            }
     }

switch (good) {
  case 0:
    alert("good");
    break;
  case 1:
    alert("bad");
    break;
  case 2:
    alert("very bad");
    break;
  default:
    alert("blah");


}
//
//Rules

//Any path the user goes down must ask them at least three questions.
//There must be a minimum of seven total destinations the user could arrive at based on their responses.
//For at least one of the questions asked, there must be more than two possible user responses.
//Your code must contain at least one loop.
//Your code must contain at least one switch statement
//Your code must make use of both string and number user inputs.
//Hint: You may need parseInt() and toString()

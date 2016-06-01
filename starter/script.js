// put code here!

function getInput() {
  return prompt("What would you like to shop for today? Choose 'top', 'bottom', shoes.")
}
// Ask what do you want to shop for
var choice = getInput()
  console.log(choice)

//if shirt is selected ask for polo, t-shirts, or buttonup

if (choice == 'top') {
  var choice = prompt("What type of top? t-shirts, button-up, polo");
  if (choice.toLowerCase() == 't-shirts') {
    console.log("you're cool!")
  } else if ( choice.toLowerCase() == "button-up"){
    console.log("looking sharp!")
  } if ( choice.toLowerCase() == "polo") {
    console.log("fresh!")
  }

} else if (choice == 'bottom') {
  var choice = prompt("what type of bottom? jeans, shorts, khakis");
  if (choice.toLowerCase() == 'jeans') {
    console.log("badass!")
  } else if ( choice.toLowerCase() == "khakis"){
    console.log("clean!")
  } if ( choice.toLowerCase() == "shorts") {
    console.log("cool!")
  }

} else if (choice == 'shoes') {
  var choice = prompt("what's your shoes size?");
  if (choice < 6) {
    console.log("please go to kids section")
  } else {
    console.log("try these on!")
  }




} else {
  console.log("we don't have that item.")
}


//
// getInput();
//
//
// function capitalize(word){
//   return word.toUpperCase();
// }

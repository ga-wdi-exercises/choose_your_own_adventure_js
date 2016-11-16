// alert("the game is starting");
//
// alert("This is a crime story about a man who went down the wrong road.");

let protagonist = prompt("His name was: _______ ", "Bob");



if (protagonist === "Bob"){
  protagonist = prompt("Pick a different name, stop being lazy!");
}
else {
  let goodOrBad = prompt("Are you good or bad?");
}

let cases;

if (goodOrBad === "good"){
  cases = 0;
} else if (goodOrBad === "bad"){
  cases = 1;
} else {
  cases = 2;
}


switch (cases) {
    case 0:
        alert("I'm glad you're good!");
        break;
    case 1:
        alert("I'm glad you're bad!");
        break;
    case 2:
        alert("What are you?");
        break;
    default:
        alert("blah");
}

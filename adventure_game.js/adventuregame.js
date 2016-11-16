//Adventure Homework

alert("the game is starting, make sure to let the prompt create additional dialogs");

alert("This is a story about a man who had some hard decisions to make.");

let protagonist = prompt("His name is:_____", undefined);

if (protagonist === "Bob"){
  protagonist = prompt ("ENTER NAME");
}

let goodbad = prompt("Are you good or bad?");

if (goodbad === "good"){
  let good = 0;
}

else {
  if (goodbad === "bad"){
    good=1;
  }

else {
  good=2;
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
    alert("o really?");
    break;
    default:
    alert("blah");
  }

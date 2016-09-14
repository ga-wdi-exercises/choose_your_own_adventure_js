

function one () {
  var a = confirm("Welcome to Cakeland.  Are you a good person or a dieter? (Good/Dieter)");
  if (a == true){
    good()
  } else {
    dieter()
  }
}

function good() {
  var b = confirm("I've made some cake.  Want some?")
  if (b == true){
    now()
  } else {
    doggieBag()
  }
}
function now() {
  var f = confirm("Want another slice?")
  if (f == true){
    var counter = 1
    for(counter=1; counter <= 4; counter = counter + 1){
      confirm("Want another slice?")
      if (counter==4){
        console.log("Oops, you're dead.")  //come back here
      }
    }
    } else {
      console.log("Wow. Lame.")
    }
  }
  function doggieBag(){
    var g = prompt("How many slices do you want to take home with you? I have five slices left.")
    var h = parseInt(g)
    switch(h) {
      case 5:
        console.log("Hospital Visit");
        break;
      case 4:
      case 3:
      case 2:
      case 1:
        console.log("Obesity!");
        break;
      case 0:
        console.log("You're lame but at least you're alive.");
        break;
      default:
        console.log("Hmm. Sounds fine.")
    }
  }

  function dieter() {
    var c = confirm("Grandma baked you a cake. You feel guilty. Gonna give in?")
    if (c == true){
      weight()
    } else {
      noWeight()
    }
  }
  function weight (){
    var d = confirm("You've gained weight. Sorry about that. I have cookies if you want to eat your feelings.")
    if (d == true){
      console.log("Diabetes!")
    } else {
      console.log("Good choices. You've scored a date with Heidi Klum.")
    }
  }
  function noWeight(){
    var e = confirm("You pass a cupcake shop on your way to the gym. (Walk past/Burn it down)")
    if (e == true){
      console.log("What is wrong with you?? Cake is delicious!")
    } else {
      console.log("Jail.")
    }
  }
  one()

// put code here!
console.log("test")
function one () {
  var a = confirm("Welcome to Cakeland.  Are you good or evil?");
  console.log(a)
  if (a == true){
    good()
  } else {
    dieter()
  }
}

function good() {
  var b = confirm("I've made some cake.  Want some?")
  console.log(b)
  if (b == true){
      now()
    } else {
      doggieBag()
    }
}
function now() {
  var f = confirm("Want another slice?")
  console.log(f)
  if (f == true){
    var counter = 1
    console.log(counter)
    for(counter=1;counter<4;counter+1){ //this is my problem
    // confirm("Want another slice?")
    console.log(counter)
  }
}
function doggieBag(){
  console.log("bag")
}

function dieter() {
  var c = confirm("Grandma baked you a cake. You feel guilty. Gonna give in?")
  console.log(c)
  if (c == true){
    weight()
  } else {
    noWeight()
  }
}
function weight (){
  var d = confirm("You've gained weight. Sorry about that. I have cookies if you want to eat your feelings.")
  console.log(d)
  if (d == true){
    console.log("Diabetes!")
  } else {
    console.log("You've scored a date with Heidi Klum.")
  }
}
function noWeight(){
  var e = confirm("You pass a cupcake shop on your way to the gym. (Walk past/Burn it down)")
  console.log(e)
  if (e == true){
    console.log("What is wrong with you?? Cake is delicious!")
  } else {
    console.log("Jail.")
  }
}
one()

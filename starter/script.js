// // put code here!
// var name = prompt("Do you like apple?");
// var ans = prompt("Hi " + name + "!"+ "Welcome aboard Oceanic Flight 815! Is this your first time with us? ");
// if (ans === "yes") {
//   alert("Welcome back!");
// } else {
//   alert("Thanks for choosing Oceanic Flight! Please sit back and enjoy the flight!")
// };
//
// var hungry = prompt("Hi " + name + "!" + "It's lunch time. Would you like to eat?");
//   while (hungry !== "yes"){
//     hungry=prompt("are you sure?");
//     if (hungry === "yes") {
//       prompt("")
//     }
// }
alert("I want to play a game. This time I will make it easy.")
var one =  prompt("You will be given fruits to choose. Choosing the right one will keep you alive. Okay?");
  while (one ==="no"){
     one=prompt("You have no choice. Enter 'yes' or you go through the hard way");
     if (one === "yes") {
       prompt("Let's do it.")
     }
   }

var two = prompt("Pick a fruit. Mango (m) ,Apple (a), or Banana (b)");

  if (two === "m"){
     m()}
  else if (two === "a"){
    a()
  }

function m() { prompt("You're still alive, but still too early to say it. You want Irwin (i) or Edward (e)?")};
if (m === "i"){
 prompt("I'm sorry. You need to swallow it")
 }
else if (m === "e"){
  prompt("I like Edward mango too! I'll let you live")};


function a() {prompt(" I like apples too. Pick one of them. Granny Smith (g), Pink Lady (p), or Fuji (f)?")};
if (a === "g"){
  prompt("I'm sorry. This will be the last food of your life. Don't you know that Snow White chose the green apple too?")
}
else if (a==="p"){
  prompt("Congratulations! Pink Lady just saved your life. You can eat it and go home.")
}
else if (a ==="f"){
  prompt("Hahaha. You get a free trip to Japan!")
}



// switch (two){
//     case "m":
//     this.m(mango)
//     break;
//     case "a":
//     this.a(apple)
//     break;
//     case "b":
//     this.b(banana)
//     break;
// }
//
// m:function(mango){
//   prompt("You're still alive, but still too early to say it. You want Irwin (i) or Edward (e)?")
// }
//

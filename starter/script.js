
//ADD A LOOP
function story (){
  var jedi = prompt("Would you like to be Force Sensitive(f) or Have Strong Lightsaber skills(s)?");
if (jedi === "f"){
 teacher();
  }
else {
lightSaber()
}
}


function teacher(){
var jediToon = prompt("Would you like to train with Yoda(y), Obi-Wan(o), or Jar-Jar Binks(j)")
if (jediToon === "y"){
 alert("You Learned how to lift a tree with the Force!")
 vaderOrTraining()}
// else if (jediToon === "o"){
//   alert("You need better training")
//    teacher();
// }
// else{
//   alert("You need better training")
//    teacher();
// }
while (jediToon === "o"|| jediToon === "j"){
  teacher()
  break;
}
}
function vaderOrTraining(){
  var vaderOrTraining = prompt("Now would you like to Fight Vader(f) or Continue Training(c)?")
  if (vaderOrTraining === "f"){
     alert("You died an embarassing death")


  }
  else {
     advance()

  }

}
function advance(){
  alert("You have learned advanced Force Techniques!");
  var vaderOrPadawan =prompt("Now you can choose to Fight Vader(f) or Train a Padawan(p)")
  if (vaderOrPadawan === "f"){
     alert("You have killed the last living Sith")
  }
  else {
     alert("Your Padawan has ended up returning balance to the Force!")
  }
}
function lightSaber(){
  var maceWindu = prompt("Who would you like to train with? Mace Windu(m), Rey(r), Padme(p)")
  switch (maceWindu){
    case  "m":
    dualWield();
    break;
    case  "r":
    alert("You need better training!")
    lightSaber()
    break;
    case "p":
    alert("You need better training!")
    lightSaber()




  }

  }
  function dualWield(){
    var oneOrTwo = prompt("Would you like to Single Wield(1) or Dual Wield(2) your Light Saber?")
    if (oneOrTwo == 1){
      general()
    }
    else {
      sith()
    }

  }
function general(){
  alert("You've become a General who's highly esteemed in the Jedi Council")
}
function sith(){
  alert("You've accidently trained a padawan who becomes a Sith Lord.")
}

// while (jediToon === "o")|| (jediToon === "j"){
//   teacher()
// }

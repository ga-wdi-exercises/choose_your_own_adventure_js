var age = parseInt(prompt("Welcome come to the wasteland, handsome! Let's see how long you can survive. How old are you?"));

while (isNaN(age)) {
    alert("Age needs to be a number.");
    var age = parseInt(prompt("Let's see how long you can survive. How old are you?"));
}

if (age < 18) {
    var home = prompt("This is not a playground. Go back to your mommy, child! Did you come from VA or MD?");

    if (home == "md") {
        var drink = prompt ("Maryland?!! Oh you hopeless child. You're probably gonna get hit by a maniac driver on the way. Stay here and I'll get you a job. Here, Coke or toke?");
        if (drink =="coke"){
            console.log ("Weak choice! you're not gonna be around for too long you poor thing.");
        }
          else if (drink =="toke") {
            console.log ("Ha, Kid you're exactly the kind we need here. Welcome to the Wasteland capital!");

          }}
    else if(home == "va") {
        var death = prompt("Hmm, I should have known looking at your clean clothes. You like mutants or monsters? Either one is going to enjoy eating you! ");

        if (death == "mutants") {
            console.log ("Leave your shirt here. Mutants don't eat shirt!");
        }
            else if (death == "monsters") {
                console.log ("Ha! There ain't no monsters around here kiddo. This ain't no fairy tale. You better catch your orange line before I loose my patience!");
            }
    }

}

else if (age > 18) {
    var weapon = prompt("Alright stud, here is your rocket launcher. Know how to use it?");

    if (weapon == "yes") {
        var mutant = prompt("Mutants took control of Air Force One... Can you take care of it? It's flying over capital hill right now");
    }
        if (mutant == "yes") {
            console.log ("Good man! Come back once done I have something  for you in mind");
        }
        else if (mutant == "no") {
            console.log ("WTF are you doing here wasting my time?! This is an apocalyptic world. You are worthless to me if you can't kill mutants. Now buzz of before I blow your brains out!");
        }
     else if (weapon == "no") {
        var vehicle = prompt("You know how to drive?");

        if (vehicle == "yes") {
            console.log ("Good, here's the key. Watch out for the mines! I'll be surprised if I see you again. Ta-ta!");
        }
        else if (vehicle == "no") {
                console.log ("I don't believe this. You see that hole over there? You're gonna be in it if you don't leave right now!");
            }
    }
}

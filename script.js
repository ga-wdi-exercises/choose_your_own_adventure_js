console.log("Thank you for logging into Space Simulator 3000.");

var nameInput = prompt("Please enter your name:");

console.log(nameInput + ", you are about to go on a journey of a lifetime. I am your ships computer, I/O. I can take you to many sectors in known space. We have enough fuel to travel to the following sectors, Red sector and Green sector.");

var sectorSelect = prompt("Which one would you like to travel to, Red or Green?");

if(sectorSelect == "red"){
    console.log("Really? No one goes to the Red Sector unless they have too!");
    var confirmRed = prompt("Are you sure?");
    if(confirmRed == "yes"){
        console.log("Now entering Red Sect...We are under attack! Five enemy ships directly ahead!");
        var fightOrRun = prompt("Should we run or fight?!");
        if(fightOrRun == "fight" || "Fight"){
            console.log("Pew, pew pew!!! You got two of them...but it was five on one, what were you thinking! Simulation Over.");
        }
        if(fightOrRun == "run" || "Run"){
            console.log("Good choice, this is one fast ship!");
            var escapeSpeed = prompt("How fast should we go? 3000 is my top speed but the faster we go the more fuel we'll burn. If we go too fast we won't have enough fuel to get home.");
            if (escapeSpeed >= 2501){
                console.log("We lost them. That was easy but we are out of fuel. Simulation Over.");
            }
            else if (escapeSpeed <= 2500){
                console.log("They can't keep up and we have enough fuel to get home. That was close! Lets head home!");
            }
        }
    }
    else if (confirmRed == "no"){
        console.log("I thought you were trying to play a game? Simulation Over.");
    }
}
else if (sectorSelect == "green"){
    console.log("Welcome to the Green Sector. The Green Sector Patrol is telling me we are not authorized to be here. We could try to bribe them.");
    var confirmBribe = prompt("Should we bribe the GS Patrol?");
    if (confirmBribe == "yes"){
        var bribeAmount = prompt("Confirm how much.");
        while(bribeAmount < 1500){
            bribeAmount = prompt("The GS Patrol isn't excepting it, maybe more?");
        }
        console.log("Ok, they said we are free to go. This place kinda sucks...");
    }
    else if (confirmBribe == "no"){
        console.log("We are being asked to leave. I think we should listen. Simulation Over.");
    }
}



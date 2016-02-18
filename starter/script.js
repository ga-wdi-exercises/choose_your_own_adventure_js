// John Blakeman - 2/14/2016
//
// Inspired by the desire to learn bicyle safety as I
// haven't ridden a bike in years, and would like to 
// reduce my chances of injury before starting a daily
// street trek to the metro.

// Scenarios and information found at bicyclesafe.com

// Note: The safety warnings/scenarios here can surely use improvement.
// I am NOT an experienced biker.

'use strict';

function bikeDanger() {
    var initialActions = [
        ['Go straight', goStraight1],
        ['Go straight using the crosswalk', goStraight2],
        ['Turn right', turnRight],
        ['Cower to the sidewalk', cower]
    ];
    var startMsg = "Bike Danger: Try to avoid an accident!\n\n" +
                   "You approach an intersection.\n\n" +
                   "Please make a choice:\n\n\t";
    var done = makeMove(bikeDanger, initialActions, startMsg);
    if (!done) {
        alert("Game over\n\n");
    } else {
        if (isContinue()) {
            bikeDanger();
        }
    }
}


function isValid(options, choice) {
    if (options.indexOf(choice) === -1) {
        alert("Invalid entry.  Answer must match one of:\n\t" + 
              "[ " + options.join(", ") + " ]");
        return false;
    }
    return true;
}

function isContinue() {
    var options = ['yes', 'no'];
    var endQuery = "Would you like to try again?\n" +
                   "Please enter " + options.join(" or ");
    var choice = prompt(endQuery);
    if (choice === null) {
        return false;
    }
    if (!isValid(options, choice)) {
        isContinue();
    } else if (choice === options[1]) {
        return false;
    }
    return true;
}

function makeMove(action, optionList, message, doomMsg) {
    var validOpts = [];
    for (var i = 1; i <= optionList.length; i++) {
        validOpts.push(i);
        message += i + "  " + optionList[i-1][0] + "\n\t";
    }
    console.log(message);
    var choice = prompt(message);
    if (choice !== null) {
        choice = parseInt(choice);
        if (!isValid(validOpts, choice)) {
            action();
        }
        optionList[choice-1][1](doomMsg);
    } else {
        alert("Game cancelled");
        return false;
    }
    return true;
}

function cower() {
    alert("You chose to bail on your bike adventure.\n" +
          "Build up some guts and come back.");
}

function turnRight() {
    var optionList = [
        ['Stop to the right of the car', randomDoom],
        ['Stop behind the car', safeMove]
    ];
    var message = "On approach to turn right, there is a car stopped at the light " +
                  "in front of you.  Do you:\n\n\t";
    var doomMsg = "The car to your left couldn't see you, you were in its blind spot " +
                  "when it turned right.\nStop behind vehicles if possible to remain visible.";
    makeMove(turnRight, optionList, message, doomMsg);
}

function goStraight1() {
    var optionList = [
        ['Pass it catiously on the right', randomDoom],
        ['Wait for it to clear', safeMove]
    ]
    var message = "A vehicle in front of you is moving slowly or waiting to " +
                  "turn left.\nDo you:\n\n\t";
    var doomMsg = "Passing slow moving vehicles can make you invisible to " + 
                  "left turning motorists."
    makeMove(goStraight1, optionList, message, doomMsg);
}

function goStraight2() {
    var optionList = [
        ['Slow down', randomDoom],
        ['Continue at normal speed', randomDoom]
    ]
    var message = "You cross the street on the left side crosswalk\n" +
                  "Do you:\n\n\t";
    var doomMsg = "Drivers aren't expecting bikers on the crosswalk.\n" +
                  "Slowing down can minimize the risk of an accident, but\n" +
                  "your best bet is to avoid riding in crosswalks altogether.";
    makeMove(goStraight2, optionList, message, doomMsg);
}

function safeMove(message) {
    alert("Congratulations, you navigated safely!\n\n" +
          message);
}

function randomDoom(message) {
    var dooms = ["splattered", "smited", "obliterated", "steamrolled"];
    var warn = "";
    if (Math.random() < .66) {
        warn = "You got " + dooms[Math.floor(Math.random() * dooms.length)] + "!\n\n";
    } else {
        warn = "You escaped, but were lucky.\n\n";
    }
    alert(warn + message);
}

bikeDanger()

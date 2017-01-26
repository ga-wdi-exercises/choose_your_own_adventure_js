// var userInput = prompt("Enter a string:");
// while (userInput != "secret code") {
//   userInput = prompt("Guess again to break the loop");
// }
//
// function addition(x,y) {
//   return x + y;
// }

// Pseudo code
// Game of Life
var startGame = prompt("Welcome to the game of life.  Continue through the game by entering the letter shown in brackets for each answer. Understoo[d]?");
while (startGame != "d") {
  startGame = prompt("No, you must enter the letter in the brackets. Understoo[d]?");
};
// You were just born, are you a boy or girl?
var genderType = ""
var gender = prompt("Let's get started, you were just born, are you a [b]oy or [g]irl?");
while (gender != "b" && gender != "g") {
  gender = prompt("Sorry, you must select either [b]oy or [g]irl to continue");
};

if (gender === "b" || gender === "B") {
  genderType = "boy";
} else if (gender === "g" || gender === "G") {
  genderType = "girl";
};

// What do you want your name to be?
var name = prompt("What would you like your name to be?  (It can be anything!)");

var incorrectSelection = function() {
  alert("You must select one of the options");
}

questionOne();

function questionOne(){
  // OK, [name] at age 14, your friend asks you to do drugs, do you do them? (Y / N)
  var answerOne = prompt("OK " + name + "... At age 14, your friend asks you to do drugs. (Wow, this game got dark quick) Do you partake? [Y]es or [N]o?");
  if (answerOne == "n" || answerOne == "N") {
    //  path for not using drugs
    var noDrugs = function() {
      var majorAnswer = prompt("Drugs are bad, mmkay, but you are a good " + genderType + " so you get into college.  What do you major in? [A]rt, [C]omputer Sciences, or [F]inance?");
      switch (majorAnswer) {
        case "a":
        case "A":
        // art degree
        art();
        break;
        case "c":
        case "C":
        // cs degree
        computerSci();
        break;
        case "f":
        case "F":
        // finance degree
        finance();
        break;
        default:
        incorrectSelection();
        noDrugs();
      }
    }
    noDrugs();
  } else if (answerOne == "y" || answerOne == "Y") {
    // path for being a drug user
    var yesDrugs = function() {
      var jobAnswer = prompt("Oh no, bad " + name + "! You get addicted to drugs and flunk out of school.  Years later you get clean, but your job options are limited.  Where do you end up working? [M]cDonalds, [R]adio Shack, or [B]arnes & Noble?");
      switch (jobAnswer) {
        case "m":
        case "M":
        // McDonalds
        mcDonalds();
        break;
        case "r":
        case "R":
        // Radio shack
        radioShack();
        break;
        case "b":
        case "B":
        // Barnes and noble
        barnes();
        break;
        default:
        incorrectSelection();
        yesDrugs();
      }
    }
    yesDrugs();
  } else {
    incorrectSelection();
    questionOne();
  }
}

function mcDonalds() {
  var dietAnswer = prompt("McDonalds doesn't pay very well, but at least you get free food.  What do you like better, [B]ig Mac or [M]cChicken?");
  if (dietAnswer == "b" || dietAnswer == "B") {
    alert("Your diet of Big Macs and years of drug abuse cause you to have a massive heart attack and die at age 30.");
  } else if (dietAnswer == "m" || dietAnswer == "M") {
    alert("As you are preparing your 3rd McChicken of the day, the fryer malfunctions and you are severely burned.  Although you are disfigured, you sue corporate McDonalds and win a hefty settlement.  Enjoy your hard earned lawsuit money!");
  } else {
    incorrectSelection();
    mcDonalds();
  }
}

function radioShack() {
  var backToDrugs = prompt("Radio Shack has not been doing very well, sales across the country have plummeted, and your store closes. Tough times have come again, do you got back to using drugs? [Y]es or [N]o?")
  if (backToDrugs == "y" || backToDrugs == "Y") {
    var rehab = function() {
      var rehabAnswer = prompt("So you go back on drugs, but your family gets you to go on the show Intervention. They want to send you to rehab. Do you go? [Y]es or [N]o?");
    if (rehabAnswer == "y" || rehabAnswer == "Y") {
      alert("Well you get clean again, but something tells me you aren't finished toeing the edge of life and death.")
    } else if (rehabAnswer == "n" || rehabAnswer == "N") {
      alert("Well, you've had a hell of a ride " + name + ", but the drugs get the best of you in the end.")
    } else {
      incorrectSelection();
      rehab();
      }
    }
    rehab();
  } else {
  incorrectSelection();
  radioShack();
  }
}

function barnes() {
  var numOfKids = prompt("While stocking bookshelves, you catch the eye of a beautiful stranger. It was love at first sight and you end up getting married. How many kids do you end up having together? You can enter any number");
  if (numOfKids < 3) {
    alert("That's cool, don't want to overpopulate the world, do we? You and your small family live comfortably ever after");
  } else if (numOfKids < 6) {
    alert("Well, it will be tough, but you and your family live on a tight budget. You make it work, becuse you've learned from your mistakes in the past");
  } else if (numOfKids < 11) {
    alert("Whoa now, did you forget you are still working at Barnes & Noble? You are unable to support this many children, so one of your kids becomes a stripper and your spouse leaves you. You live a sad life, but you kind of did this to yourself.");
  } else if (num > 10) {
    alert("This is actually in your favor, because your family gets asked to do a reality TV show on A&E that becomes one of the most watched series of all times.  Congrats, you hit the big bucks... although it costs a lot to put that many kids through college...");
  } else {
    alert("Not sure what you entered, but that won't work.  Try again.");
    barnes();
  }
}
//

function art() {
  var artPath = prompt("Interesting choice, what do you plan to do with that after you graduate? [S]ell your art, [T]each art, or [O]ther")
  if (artPath == "s" || artPath == "S") {
    alert("You become the next Picasso and your name is taught in schools worldwide for decades into the future.")
  } else if (artPath == "t" || artPath == "T") {
    alert("Hey, the world needs teachers. You live an altruistic life and are rewarded with good karma.")
  } else if (artPath == "o" || artPath == "O") {
    alert("Well" + name + ", I'm sure you will figure it out some day.")
  } else {
    incorrectSelection();
    art();
    }
}

function computerSci() {
  var csPath = prompt("Oh cool, so what do you think about this program? It [s]ucks or It's [c]ool");
  if (csPath == "s" || csPath == "S") {
    alert("You get hit by a bus and die.")
  } else if (csPath == "c" || csPath == "C") {
    alert("You live a long and happy life.")
  } else {
    incorrectSelection();
    computerSci();
    }
}

function finance() {
  var finPath = prompt("Sounds like you're into investing, did you invest in Tesla?");
  if (finPath == "y" || finPath == "Y") {
    alert("Congrats, you end up becoming a millionaire from your good investment. However, you get brainwashed into joining the Church of Scientology and end up donating a majority of that money to the church. Bad move!")
  } else if (finPath == "n" || finPath == "N") {
    alert("It's not too late! Or is it? I wouldn't trust this program for investment advice.")
  } else {
    incorrectSelection();
    finance();
  }
}
//


//      -Oh no, that's bad! You get addicted to drugs and flunk out of school.  Years later you get clean, but your job options are limited.
//        Where do you end up working? (McDonalds, Radio Shack, Barnes & Noble)
//          McDonalds
//            -McDonalds doesn't pay very well, but at least you get free food.  What do you like better? (Big Mac / McChicken)
//              Big Mac - Your diet of Big Macs and years of drug abuse causes you to have a heart attack and die at age 30.
//          Radio Shack
//            -Radio Shack has not been doing very well and closes your store, do you got back to drugs? (Y / N)
//              Y - You die at a very young age without much accomplished.
//              N - Instead of buying drugs you buy a lottery ticket and end up hitting the jackpot.  You live the rest of your life comfortbaly, you lucky asshole.
//          Barnes & Noble
//            -While stocking books you meet your future spouse, how many kids do you have? (enter a number)
//                - less than 3 - You and your family live comfortably ever after.
//                - less than 6 - You and your family live on a tight budget, but you make it work and live a modest lifestyle.
//                - greater than 5 - Whoa, you are unable to support that many kids with your current salary.  One of your kids becomes a stripper and your spouse leaves you because they think it's your fault.
//    No
//      -Drugs are bad, mmkay? You are good [boy/girl] and you get into college.  What do you major in? (Art, Computer Sciences, Finance)
//        Art
//          -Interesting choice, what are you going to do with that? (Become a teacher / Sell my art for a living / Other)
//              T - Hey, the world needs teachers.  You live an altruistic life and are rewarded with good karma.
//              S - You become the next Picasso and your name is taught in schools worldwide for decades into the future.
//              O - Well I'm sure you will figure it out some day.
//        Computer Sciences
//          -Oh cool, so what do you think about this program? (It's good/ It sucks)
//              G- You live happily ever after.
//              S- You get hit by a bus and die.
//        Finance
//          -So you're into investing, how much money do you invest in Tesla?
//              - < 10k - You should have invested more
//
//

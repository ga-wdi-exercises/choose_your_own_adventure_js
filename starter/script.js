
x = 0;
while(x<3){
var name = prompt("Hello, What is your name?");
var tripGoal = prompt("Hi," + name +". " +"What is the goal of this trip? F for fun, V for visiting family, and E for experience different culture");


if (tripGoal == "F") {
  var budget = prompt("What's your budget?");

    if(budget<200) {
      alert("Hmm...Can we increase our budget a little bit?");


    }
    else if(budget <= 500) {
      alert("Let's have fun locally! How about Yogaville in Charlottesville?");
    }
    else if( 1000 <= budget) {
      alert("Yay! Let's look at the option for Bahama!");
    }

    else if(500 < budget < 1000 ){
      alert("Nice! Do you want to go to Florida? Or, How about Colorado? ");
    }
    }
if (tripGoal == "V") {
    var whichOne = prompt("Great! Your Brother or Parent? 'B' for brother, 'P' for parent.");
    if(whichOne == "B"){
      alert("Ok. Booked the flight ticket for Tempa!" );
    }
    else if(whichOne == "P") {
      var howExpen = alert("Finally, Time to visit Korea! Booked the ticket!");
    }
    }

if ( tripGoal == "E") {
    var eurosia = prompt("Wow! You are the brave one! 'E' for CentralEurope tour package, 'A' for East Asia tourPackage");
    if (eurosia == "E") {
      alert("Good choice! The package will take you to England, France and Germany. The ticket booked.");
    }
    else if (eurosia == "A") {
      alert("Sayonara! You will be visiting Japan, Korea and China. Get ready for some Yummy Food! The ticket booked.");
    }
}
  alert("Time to plan for another trip!");
  x = x+1;
}

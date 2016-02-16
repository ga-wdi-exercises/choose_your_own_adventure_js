// put code here!
function Apartment();
var name = prompt("what is your name?").toUpperCase();
console.log("Welcome name, Congratulations on your new job as a web developer \
 intern. Your annual salary is $35,000 per year. I'm here to help you find an \
 apartment. What part of the city would you like to live?");
var choice = prompt("NW, SW, NE, SE").toString();.toUpperCase(); {// change input to string and uppercase

  if (choice == "NW"); { // display info for NW and prompt user to type answer
  console.log("Northwest has great bars, resturants and tons of night life. \
  You have Champange taste on a beer budget. Unfortunately you cannot afford \
  $,2000 per month in rent on your miserable intern salary \
    Do you get 2 roommates or uber on nights and weekends.");

    var roomMateOrUber = prompt("type R for roommates or U for Uber").toUpperCase();{ // find a way to restrict input to either of the two answers only
      if (roomMateOrUber == "R");{
      console.log("So you miss your college days, dorm rooms, roommates, and drama?\
       Your first roommate is great and pay his rent on time but the secnd one loses \
       her job and can't make the rent.")
      };
        var KickOrAirbnb = prompt("Do you kick her out so you can find a new roommate \
        or make her sleep on the couch and do AirBnB in her old room? \
        Type 'K' to Kick her out or 'A' for AirBnB").toUpperCase(); { // make user choose btw Kick friend out or AirBnB

          if (KickOrAirbnb == "K"); { // display the info if user chooses to kick friend out
          console.log("Reasonable choice. Everyone needs to pay their own way, \
           who cares if you loose your best friend from 5th grade in the process. \
            As the saying goes, 'If you want a friend in DC get a dog!'");
          };
          else if (KickOrAirbnb == "A") { // display info if user chooses AirBnB
            console.log("AirBnB is a great way to cover your missing rent and help if he \
            couldn't pay rent he should be glad he can sleep on the couch. \
            AirBnB works out well for two weeks until your landlord notices all the traffic \
            in and out the apartment. You are fined, and evicted for violating your lease. \
            You are forced to sleep in your car and shower in your office gym.");
          };

          else {
            console.log("Please type either R or U"); // force user to make a choice by repeating KickOrAirbnb
            return KickOrAirbnb;
          }
        }
      };
    else if (roomMateOrUber == "U") { // display if user chooses to do Uber
      console.log("Uber is great way to make money on your time with your car. \
      Uber black pays more but uber x has fewer rules.");

        var UberXOrBlack = prompt("Do you decide on uber X or uber black? Type'X' for UberX or 'B' for Uber-Black").toString();.toUpperCase(); { // decide if I want to keep using tostring or restrict user answer to only the 2 options
          if (UberXOrBlack == "X"); {
            console.log("on uber x you must work 5 hours a day 7 days a week to come up with the rent. \
            You now have no social life outside of uber and your internship")
          };

          else if (UberXOrBlack == "B") { // display the info if user chooses Uber-Black
            console.log("Uber black pays 3 times $40 per hour and you only have to work 15 hours a month to cover your rent. \
            Uber requires you buy commercial auto insurance which takes an exra $300/ per month so you barely break even. \
            Hey at least you don't have roommates and can make the rent every month.")
          };

          else {
            return UberXOrBlack; // write a code to send user back to var Uber-Black
          };
        };
    };
  else if (choice == "SW") {
    console.log("Very Resonable choice. In fact it is so reasonable that 50,000 people just like you made the same choice \
    and Southwest becomes the the part of the city with the most rapidly increasing rents.  \
    You decide to sign a 5 year lease \to lock-in a rent you can afford.  You better love this internship and stay in DC for a while \
     because with the $5,000 deposit you can't afford to move again any time soon")
  };

  else if (choice == "NE") {
    console.log("Northeast is a wise choice. Lots of up and coming nieghborhoods and your new place is in walking distance to your internship. \
    You no longer use your car on a regular basis.  Do you sell your car or keep it?");
    var sellOrKeep = prompt("Do you sell or keep your car? Type 'S' to sell it or 'K' to keep it")
  }

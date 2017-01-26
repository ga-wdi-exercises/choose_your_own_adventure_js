// put code here!
var name = prompt("What is your name?");
var begin = prompt("Hey "+name+", would you like to go on an adventure!?! (y/n)");
if (begin == "y") {
  console.log("You made a good choice!")
  var transport = prompt("Are we going to start this trip by a 1) car; 2) motorcycle; or 3) plane?");
  switch(parseInt(transport)) {
    case 1:
      var driver = prompt("What type of car are you looking at taking? (1.Sports/2.Hybrid/3.Good ol' 'Murican pickup)");
      if (parseInt(driver) == 1) {
        console.log('We are gonna head over to Virginia International Raceway to have you nail some apexes');
        break;
      }
      else if (parseInt(driver) == 2) {
        console.log('Ew, good day sir, this roadtrip is a bust');
        break;
      }
      else if (parseInt(driver) == 3) {
        console.log("Time to go to the most 'Murican place possible..... Texas!");
        break;
      }
    case 2:
      var biker = prompt("Looks like you'll be on a cruiser for a long trip! Do you want a Harley or a Honda?");
      while (biker != "Harley") {
        confirm("Sorry man, on a trip like this, you gotta go Harley");
        var biker = prompt("Looks like you'll be on a cruiser for a long trip! Do you want a Harley or a Honda?");
      }
      var place = prompt("Where are we starting from? (DC/VA/MD)");
      if (place == "DC") {
        var start = prompt("Lets start from the Capitol (ok)");
        while (start != "ok") {
          confirm("Dude, we are starting from the Captiol");
          var start = prompt("Lets start from the Capitol (ok)");
        }
        console.log("Sweet! Glad you packed for a roadtrip to Texas on your knarly Harley!");
        break;
      }
      else if (place == "VA") {
        var start1 = prompt("Are we starting in Alexandria or Fairfax?");
        if (start1 == "Alexandria") {
          console.log("Great! Looks like we are going to Summit Racing track to hone in on your motorcycle skills");
          break;
        }
        else if (start1 == "Fairfax") {
          console.log("You are gonna take your Harley up to New York City! Gearup!");
          break;
        }
      }
      else if (place == "MD") {
        var start2 = prompt("Are you leaving from Baltimore or Annapolis?");
        if (start2 == "Baltimore") {
          console.log("You're just going to take a short ride to the Baltimore aquarium");
          break;
        }
        else if (start2 == "Annapolis") {
          console.log("Gear up, we are taking a ride out to Sin City");
          break;
        }
      }
    case 3:
      var destination = prompt("Would you like to fly domestic or international?");
      if (destination == "domestic") {
        console.log("Congrats! We are flying to New Orleans for Mardi Gras!");
        break;
      }
      else if (destination == "international") {
        console.log("Congrats! We are going to go to Ibiza for a super lit party!");
        break;
      }
  }
}
else if (begin == "n") {
  console.log("Wow, you're boring. Fine stay at home on your couch");
}

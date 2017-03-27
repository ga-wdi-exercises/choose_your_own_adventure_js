// put code here!
var user = prompt("Let's Play Martin the TV Show! Type Martin to start the game" );

  if (user == "Martin") {
  var deal = prompt("You the Man! Would you like to deal with Brotha Man or Ms. Geri?");



    if (deal == "Brotha Man"){
              var bm = prompt("Brotha Man wants a sandwich? Do you give him a sandwich or kick him out?");
                switch (bm) {
                  case "sandwich":
                    alert ("BAD IDEA! You'll need more than a sandwich to feed him?");
                  case "kick him out":
                    alert("GOOD IDEA! Brotha Man will eat you out of house and home.");
                   break;
                   default:
                     console.log("You must choose sandwich or kick him out.")
                    break;
                  }
  } else if (deal == "Ms. Geri") {
              var mg = prompt("Ms. Geri is ready to fight because you cut the line at the DMV. Do you fight or flight?");
                switch (mg) {
                  case "fight":
                    alert ("BAD IDEA! Ms. Geri is a bar knuckles boxing champ.");
                  case "flight":
                    alert("GOOD IDEA! Ms. Geri would've knocked you out with one punch.");
                  break;
                  default:
                    console.log("You must choose sandwich or kick him out.")
                  break; }
  } else {
    console.log("You must choose Brotha Man or Ms. Geri.")
  }
  }

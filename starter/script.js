// put code here!
var user = prompt("Let's Play Martin the TV Show! You the Man! Would you like to deal with Brotha Man or Ms. Geri?");
while (user == "Brotha Man" || user =="Ms. Geri") {
}

var optionOne = "Brotha Man"
var optionTwo = "Ms. Geri"

  switch (user === "Martin") {
    case 1: optionOne
              var bm = prompt("Brotha Man wants a sandwich? Do you give him a sandwich or kick him out?");
                if (bm === "sandwich") {
                    alert ("BAD IDEA! You'll need more than a sandwich to feed him?");
                  } else if (bm =="kick him out") {
                    alert("GOOD IDEA! Brotha Man will eat you out of house and home.");
                  }
                  break;


     case 2:  optionTwo
                var mg = prompt("Ms. Geri is ready to fight because you cut the line at the DMV. Do you fight or flight?");
                  if (mg === "fight") {
                    alert ("BAD IDEA! Ms. Geri is a bar knuckles boxing champ.");
                  } else if (mg === "flight") {
                    alert("GOOD IDEA! Ms. Geri would've knocked you out with one punch.");
                  }
                    break;
                    default:
                    console.log();
              }

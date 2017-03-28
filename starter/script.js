var user = prompt("LET's PLAY MARTIN TV SHOW! Type Martin to start the game" );

while (user == "Martin") {
  // game goes here

  if (user == "Martin") {
  var deal = prompt("YOU THE MAN! Would you like to deal with Brotha Man, Ms. Geri, Pam, Mad Dog No Good, Ricky Fontaine or Varnell Hill? ");

    if (deal == "Brotha Man"){
              var bm = prompt("Brotha Man wants a sandwich? Do you give him a sandwich or kick him out?");
                switch (bm) {
                  case "sandwich":
                    alert ("BAD IDEA! You'll need more than a sandwich to feed him?");
                  break;
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
                  break;
                  case "flight":
                    alert("GOOD IDEA! Ms. Geri would've knocked you out with one punch.");
                  break;
                  default:
                    console.log("You must choose fight or flight.")
                  break; }

  } else if (deal == "Pam") {
              var mg = prompt("Pam just came from the beauty salon and her weave is on point. Do you give her a compliment or insult?");
                switch (mg) {
                  case "insult":
                    alert ("BAD IDEA! Pam is ready to snap back with an insult she said: 'Not today Sir Short A Lot, now move before I crush you with my pinky toe!'");
                  break;
                  case "compliment":
                    alert("GOOD IDEA! Pam says: 'I know I look Short Doggy Dog, now get out of my way!'");
                  break;
                  default:
                  console.log("You must choose compliment or insult.")
                  break; }

  } else if (deal == "Mad Dog No Good") {
              var mg = prompt("Mad Dog No Good, just cam home from prison. He went to prison because you testified against him. Do you stay or do you go?");
                switch (mg) {
                  case "stay":
                    alert ("BAD IDEA! Pam is ready to snap back with an insult she said: 'Not today Sir Short A Lot, now move before I crush you with my pinky toe!'");
                  break;
                  case "go":
                    alert("GOOD IDEA! Pam says: 'I know I look Short Doggy Dog, now get out of my way!'");
                  break;
                  default:
                    console.log("You must choose stay or go.")
                  break; }

  } else if (deal == "Ricky Fontaine") {
              var mg = prompt("Ricky Fontaine your arch enemy, is at your high school reunion and he's making fun or you. Do you kick butt or make peace?");
                switch (mg) {
                  case "kick butt":
                    alert ("BAD IDEA! His curl activator spashes in your eyes when you knock him out.");
                  break;
                  case "make peace":
                    alert("GOOD IDEA! He's always been a coward anyway.");
                  break;
                  default:
                    console.log("You must choose sandwich or kick butt or kiss my butt.")
                  break; }
  }

  else if (deal == "Varnell Hill") {
              var mg = prompt("Varnell Hill said you can be on his show if you come to Hollywood. When you arrive he doesn't keep his word. What do you do 'ambush the show' or 'chill'. ?");
                switch (mg) {
                  case "chill":
                    alert ("BAD IDEA! Varnell needs to be taught a lesson .");
                  break;
                  case "ambush the show":
                    alert("GOOD IDEA! Varnell needs to know that Hollywood talk doesn't fly in Detroit.");
                  break;
                  default:
                    console.log("You must choose sandwich or ambush the show or chill.")
                  break; }
  } else {
    console.log("You must choose Brotha Man, Ms. Geri, Pam, Mad Dog No Good, Ricky Fontaine or Varnell Hill.")
  }
  }


  // end game
  user = prompt("Type Martin to Play Again")
  if (user == "Martin") { var deal = prompt("YOU THE MAN! Would you like to deal with Brotha Man, Ms. Geri, Pam, Mad Dog No Good, Ricky Fontaine or Varnell Hill? ");

  }
}

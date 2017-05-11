var person = prompt("Please enter your name:");
if (person != null) {
// $(".response").append(" Hello " + person + "! Ready for today's adventure?");


var lv1 = prompt("Hello " + person + "!\n" + "I am C-3PO, human cyborb relations. Is Darth Vader your father?\n" + "yes/no")
if (lv1 == "yes") {

  var lv2a = prompt(" The force is strong with you " + person + "!\n" + "Do you consider yourself royalty?\n" + "yes/no")
    if (lv2a == "yes") {

      var lv3a = prompt(person + "," + " Do you remember your Mother?\n" + "yes/no")
      if (lv3a == "yes") {
          confirm("Don't use Jedi mindtricks on me?\n You are not " + person + " , you are Princess Leia!")
          } else {
//this if else statement is no registering false
          confirm("I'm sorry " + person + " , you must be lost!")
          }

      } else {
      var lv3b = prompt(person + "," + " did you grow up on Tatooine?\n" + "yes/no")
      if (lv3b == "yes") {
          confirm("Master Luke! I'm so glad to see you again.\n I do not understand why you thought your name was " + person + ".")
          } else {
          confirm("I'm sorry " + person + " , you must be lost!")
          }
      }

  } else {
    var user = prompt(person + ", which ship do you prefer?\n" + "millennium falcon\ntie fighter\nstar destroyer\nx-wing\n" + "Enter answer here:").toLowerCase()
    while (user !== "millennium falcon" && user !== "tie fighter" && user !== "star destroyer" && user !== "x-wing") {
    var user = prompt(person + ", which ship do you prefer?\n" + "millennium falcon\ntie fighter\nstar destroyer\nx-wing\n" + "Please choose one and enter answer here:").toLowerCase()
    }
    if (user == "millennium falcon") {
      var lv3c = prompt(person + "," + " are you usually the hariest creature on a ship?\n" + "yes/no")
      if (lv3c == "yes") {
          confirm("Chewbacca! I'm so glad to see you again.\n I do not understand why you thought your name was " + person + ".")
          } else {
          confirm("Han Solo, you must be running from the authorities under the name " + person + ".")
          }

    } else if (user == "x-wing"){
      var lv3d = prompt(person + "," + " how many tie fighters have you destroyed?\n0\n10\n20\n30\n40")
      if (lv3d >"20") {
          confirm(person + ", you truly are an excelent pilot, but I bet you have never made the kessel run in 12 parsecs!")
          } else {
          confirm("You are still a rookie" + person + ".")
          }
    } else {

    }

  }
}

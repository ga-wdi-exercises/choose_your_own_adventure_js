

var qOne = prompt("You have just stolen the Declaration of Independence, you are in the secure storage room" +
"do you head towards the front of the building or the back, F = Front, B =Back")

if (qOne == 'F'){

      var qTwo1 = prompt("Good choice! You find yourself in the giftshop, and the clerk thinks you are stealing"+
                          "a model copy of the Declaration. You have to pay for it," +
                          "How do you pay for it? 1 =Cash, 2 =Credit, 3 = Run for it!")

          switch (qTwo1) {
          case '1':
            qThree1 = prompt("Oh no! Your bumped into your girlfriend! she demands that you return the Declaration"+
                            "Do you give her the real one or the fake one you just bought? R = Real, F = fake");
                      if(qThree1 === "F") {
                        alert("Congrats!, you went on your way and drove off in the van")
                              }else {
                        alert("You just lost your girlfriend and the Declaration of Independence!");
                              }
                    break

          case '2':
            qThree2 = prompt("Oh no! The cops can track your credit card. Where do you go? D= Dad's house, Y= Your house");
                    if(qThree2 === "D") {

                      alert("Congrats, the cops didn't think to you find you there");
                    }else {
                      alert("The cops are waiting for you, you are going to jail for a long time");
                    }
                    break

          case '3':
            qThree3 = prompt("Oh no! The cops are chasing you! Do you run for the getaway van or hide in the alley V = van A = Alley");
                    if(qThree3 === "V") {

                      alert("The cops ran you down and captured you and your partner in crime, Bradley");
                    }else {
                      alert("The cops found you and you are going to jail");
                    };
                    break
          default: alert("Command not recognized, please try again"); /*End of the cases // here */
          }
}else if (qOne == 'B') { //If player had originally chosen to leave through back door

            qTwo2 = prompt("Oh no! you ran into Sean Bean and his cronies, you gotta get away! do you take the elevator or the stairs?" +
                            "E = elevator, S = stairs")

          switch (qTwo2) {
          case 'E' :

            function elevator() {
                for (i=0;i>10; i++) {
                  alert("Approaching floor: " + i)
                  console.log("Approaching floor: " + i)
                }
                }

                qThree4 = prompt("You've reached the first floor, do you run to the van or tell the cops Sean Bean wants to kill you? V = van, C = cops")

                  if(qThree4 === "V") {
                    alert("Congrats! you escaped safely with the declaration");
                    }else {
                      alert("The cops don't believe and you are arrested!");
                    }
                    break

          case 'S':
                qThree5 = prompt("Oh no! Sean Bean's cronies are in the stairwell, do you fight or give up the Declaration? F = fight G = give up");
                  if(qThree5 === "F") {
                    alert("Despite your best efforts, Sean Bean and his men gun you down");
                  }else {
                    alert("You lost the Declaration of Independence! and Sean Bean and his men gun you down");
                  }
                break
        default: alert("command not recognized, please try again");
      } // End of Else If
}else { //End of original if statement
  alert("command not recognized, please try again");
}










//
// function qOneOne(){
//   prompt("")
//
//   if (qOne == 'Y') {
//     alert('great!');
//   }else if (qOne == 'N') {
//     alert('Thats too bad!');
//   } else {
//     alert('command not recognized, please try again');
//   }
// }

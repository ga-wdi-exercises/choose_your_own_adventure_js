// put code here!

var welcome = prompt("Congratulations!  You've been beamed into a Hardy Boys mystery.  Choose a character: \n('f') Frank \n('j') Joe");
//Opening prompt.  Note: choosing Frank or Joe will not make a diffrerence.
console.log("Class at Bayport High has just let out and you receive an urgent message from your dad.  A rare moonstone  shipped on a freighter just arriving from India has disappeared.");
var locations = prompt("Where do you want to go? \n('h') Home- Talk things over with your private detective father \n('p') Police Station- get the low-down from Chief Collig \n('x') Wharf- Head down to the wharf and check it out");
//You can choose between 3 locations
if (locations === 'h') {
  console.log("You catch sight of a suspicious character eavesdropping in the bushes.  What do you do?");
  var decisionHome = prompt("What do you do? \n('c') Chase him away! \n('i') Ignore him, act like everything is normal and plant false information in your meeting with Dad");
  if (decisionHome === 'c') {
    console.log("The man sees you and gets away!  You return home, where your dad gives you the details of the theft.  It is a complex smuggling operation, and because all the trails are cold, there is no clear next step.  Aw, shucks!");
    }
  else if (decisionHome === 'i') {
    console.log(" Great thinking, sleuth!  Dad outlines a false plan to arrange a meeting with the ship's crew.  The police close in on the warehouse and intercept the theif on his way in.  The moonstone is recovered!");
    var celebrate = prompt("How do you want to celebrate? \n('p') Beach Boys dance party at Callie's house. \n('d') Call Chet, Tony, Biff, Callie, and Iola and meet up at the Silver Diner.");
    if (celebrate === 'p') {
      console.log("Woohoo!  Mystery solved.");
    }
    else if (celebrate === 'd') {
      console.log("Burgers and shakes!  Mystery solved.");
    }
  }
}
else if (locations === 'p') {
    console.log("You catch sight of a suspicious character sitting in a parked car in front of the station.  When you see him, he drives away!");
    var decisionPolice = prompt("What do you want to do? \n('i') Ignore and go inside the station. \n('m') Hop back on your motorcyles and pursue");
    if (decisionPolice === 'i') {
      console.log("Chief Collig issues a warning over the radio and informs the police down at the wharf.  The driver arrives at the wharf and is arrested, but he doesn't have the moonstone.  Darn!  Mystery unsolved.");
    }
    else if (decisionPolice === 'm') {
      console.log("You follow the car to the warehouse next to the wharf and the driver goes inside.");
      var next = prompt("What next? \n('e') Enter the warehouse \n('w') Wait for police reinforcements");
        if (next === 'e') {
          console.log("It's dark inside.  The next thing you know, you are knocked out, gagged, and tied up.  Better luck next time, gumshoe!  Mystery unsolved.");
        }
        else if (next === 'w') {
          console.log("The chief arrives with backup and they enter the warehouse.  They arrest an entire band of smugglers and recover the moonstone.  Mystery solved.");
          var celebrate2 = prompt("How do you want to celebrate? \n('p') Beach Boys dance party at Callie's house. \n('d') Call Chet, Tony, Biff, Callie, and Iola and meet up at the Silver Diner.");
//Can I use the original celebrate variable instead?
          if (celebrate2 === 'p') {
            console.log("Woohoo!  Mystery solved.");
          }
          else if (celebrate2 === 'd') {
            console.log("Burgers and shakes!  Mystery solved.");
        }
    }
  }
}
//This doesn't work if I select w.
else if (locations === 'x') {
    console.log("You catch sight of a suspicious character watching you who immediately heads toward an adjacent warehouse.");
    var decisionWharf = prompt("What do you do? \n('c') Chase him! \n('f') Go to the freighter to inform the crew and try to intercept him there");
    if (decisionWharf === 'c') {
      console.log("You bring him down with a haymaker and subdue him.  The missing gem stone is in his pocket. Nice work, sleuth!");
      var celebrate3 = prompt("How do you want to celebrate? \n('p') Beach Boys dance party at Callie's house. \n('d') Call Chet, Tony, Biff, Callie, and Iola and meet up at the Silver Diner.");
      //Can I use the original celebrate variable instead?
        if (celebrate3 === 'p') {
          console.log("Woohoo!  Mystery solved.");
        }
        else if (celebrate3 === 'd') {
          console.log("Burgers and shakes!  Mystery solved.");
        }
    }
    else if (decisionWharf === 'f') {
      console.log("You head up the gangplank and enter the bridge.  It appears abandoned, but a split second later, the lights go out and you are subdued by several stevedores.  You are tied up, thrown into a bale of jute, and locked in the cargo area.  Better luck next time, gumshoe!  Mystery unsolved.");
    }
  }

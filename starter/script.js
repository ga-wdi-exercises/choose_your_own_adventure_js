var response = prompt ("Welcome to the world of Skyrim!  Do you need help? (y/n)");
while (response != "y") {
  response = prompt ("I think you do need help...");
}
response = prompt ("Are you a Nord?(y/n)");
if (response === "y") {
  response = prompt ("Do you support Talos? (y/n)");
  if (response === "y") {
    response = prompt ("Do you support the Thalmor?(y/n)");
    if (response === "y") {
      response = prompt ("Do you love the cold?(y/n)");
      if (response === "y") {
        response = alert("THEN OFF THE WINDHELM WITH YOU BROTHER! ENJOY THE MEAD! TELL ULFRIC I LOVE HIM!")
      }
      else if (response === "n") {
        response == alert("No?  Then you are not a true Nord...head to Markarth where it's warm.")
      }
    }
    else if (response === "n") {
      response == alert("No?  Then you are no Nord...TO THE GUILLOTINE!")
    }
    else {
      response == alert("No?  Then you are not a true Nord...head to Markarth where it's warm.");
    }

  }
  else if (response === "n") {
    response = prompt ("Are you Mehrunes Dagon? (y/n)");
    if (response === "y") {
      response == alert("Get back to Oblivion with you Daedric scum!");
    }
    else if (response === "n") {
      response == alert("Oh thank Talos...but you don't support Talos do you traitor?  TO THE DUNGEON!");
    }
  }
}

else if (response === "n") {
  response = prompt ("Do you have business in Skyrim?");
  if (response === "y") {
    response = prompt ("What is your business? 1)swimming in swamps 2)selling your wares or 3)want to ban Talos?(1,2,3)");
    switch(parseInt(response)) {
    case 1:
        response == alert("You're Argonian! I should've realized that from your lizard body...go to the Black Marshes, your kind will be there.");
        break;
    case 2:
        response == alert("You do look like a giant cat...YOU ARE KHAJIT!  You can sell your wares in Riverwood!");
        break;
    case 3:
        response == alert("DAMN YOU THALMOR!  TO THE SALT MINES!");
      }
  }
  else if (response === "n") {
    response = prompt ("Are you here for magic?(y/n)");
    if (response === "y") {
      response == alert("I prefer a sword myself, but to each his own...head to Winterhold where the College is.  Just don't cause another Great Collapse! ");
    }
    else if (response === "n") {
      response == alert("Then you must be here for farming.  Head to Riften!");
    }
  }
}

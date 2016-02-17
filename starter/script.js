var welcome = prompt("Welcome to Washington, DC! What is your name?")
var season = prompt("You'll have a great time here! Are you here in the spring, summer, fall or winter?")
  if (season === spring || season === summer || season === fall or season === winter) {
    prompt("There is so much to do in Washington, DC during the" + " " + season. "Do you want to do an activity inside or outside?")
  }
  else {
    alert("Please enter a season. Either spring, summer, fall or winter.")
  }
    var place;
    If (season === spring && place === outside) {
      prompt("It's the perfect time of year! The weather isn't too hot or humid yet. It's also Cherry Blossom season! Do you want to see the cherry blossoms or check out Eastern Market?")
    }
    else if (season ===spring && place === inside) {
      prompt ("You must have allergies. That's okay! Do you want to see a performance for the Cherry Blossom Festival or go to the Botanical Gardens?")
    }
    else if (season === summer && place === outside) {
      prompt("Some do like it hot! Do you want to go see a Nationals Baseball game or take a paddle board out on the Potomac River?")
    }
    else if (season === summer && place === inside) {
      prompt("I don't blame you. Washington, D.C. can get VERY hot during the" + " " + season. "Do you want to see a movie or tour the Capitol building?")
    }
    else if (season === fall && place === outside) {
      prompt("Another excellent choice! It's finally getting cooler after the unbearable summer we had. Do you want to go to the National Arboretum or go for a hike in Rock Creek Park?")
    }
    else if (season === fall && place === inside) {
      prompt ("It can definitely get chilly during the" + " " + season. "We can either go to the Spy Museum or take a trip up the Washington Monument.")
    }
    else if (season === winter && place === outside) {
      prompt ("You're brave! It can get pretty cold out there. But it's also beautiful. Do you want to go see the Zoo Lights or go ice skating on the mall?")
    }
    else if (season === winter && place === inside) {
      prompt("I don't blame you! D.C. can still be great in the winter, though. Do you want to go see a Capitals hockey game or spend the day at the Spy Museum?")
    }
    else {
    alert("Please enter either inside or outside to tell me where you want to be!")
  }

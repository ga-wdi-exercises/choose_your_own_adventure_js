//beginning of the final drive

function Start() {
  var playCall = prompt("Coach! Our Defense just got the ball on the opponents 20 yard line. We're down by 5, we NEED a touchdown! There are two minutes left on the clock. What will you do? Shotgun Normal Flex Wing—HB Dive (run), Shotgun Bunch—Verticals (pass), Pistol Trips (option).");
    if (playCall === "pass") {
      alert("25 yard completion. Ball on the opponents 45 yard line. Good shit coach!");
      pass();
    }
     else if (playCall === "run") {
      alert("5 yard run. Coach, I don't think this is the time to be running the ball.");
      run();
    }
     else if (playCall === "option") {
      alert("Terrible play call coach we lost 5 yards. Their defense is bringing in the heat!");
      option();
    }
    else {
      alert("There's not time to Bullshit coach, the SuperBowl is on the line!");
    }
  }

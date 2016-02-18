  var ready = prompt("Howdy, are you ready to choose your country").toLowerCase();
  if (ready === "CHARGE") {
    alert("Let's saddle up the pony!");
  } else {
    alert("Unfortunately, you must go. Saddle up!");
  };

  alert("First, you must choose your country.");


  var country = prompt("What country do you desire to rule? You may choose from: China (c), Russia (r), North Korea(nk), USA(usa) or Canada(cn).").toLowerCase();
  if (country === "c") {
    alert("Congratulations on choosing China! You must be feeling peaceful today. Next, you will decide to learn industry or monastary.");
  } else if (country === "r") {
    alert("Congratulations on choosing Russia! You must be full of yourself today. Next, you will decide how you would like to move forward from the missle silo.");
  } else if (country === "nk") {
    alert("Congratulations on choosing North Korea! You must be feeling mysterious today. Next, you will decide how to over-throw the world.");
  } else if (country === "usa") {
    alert("Congratulations on choosing USA! You must be happy today. Next, changing the world one empire at a time.");
  } else if (country === "cn") {
    alert("Congratulations on choosing Canada! You must be angry today. But the world needs their maple syrup!");
  };
  do {
    var name = prompt("Wait! What was your name?");
    } while (!name);
    console.log(name);


  var style = prompt("Choose wisely, for your first action in " + country + "  you excel at: farm, industry or diplomacy.").toLowerCase();
  if (style === "farm") {
    alert("You have not chosen wisely. Youre country did not industrilize so, Game over!");

  } else if (style === "industry") {
    alert("Splendid choice! You have started building a city. Are you up to code on radiation building.");
  } else if (style === "diplomacy") {
    alert("Interesting choice! You have started diplomatic relations. Choose your peoples future.");
  };


  var fate = prompt("Your next choice decide's your peoples fate. Choose wisley. Choose: 1, 2, 3 or 4.");
  if (fate === "1") {
    alert("You have not chosen wisely. Alongside the diplomatic relations you became a thief and were charged at the International Criminal Court; thrown in jail. Game over! (Click OK to see your score!)");
  }
  else if (fate === "2") {
    alert("Splendid choice, again! You have chosen the way of the farm. You have become a monk and will live for all of eternity. You win! (Click OK to see your score!)");
  }
  else if (fate === "3") {
    alert("You have become to powerful. Your city has leeped into chaos with the pending onslaught of the nuclear missles. You have become a knight and ruled your city poorly. The citizens have overpowered you and sent you to the guillotine. Game over! (Click OK to see your score!)");
  }
  else if (fate === "4") {
    alert("Splendid choice, again! You have shown the world you are a true leader. Because of your Communist ways you have used your nuclear power and destroyed your enemies and farm land.  While you have won you are now alone an empitent. You win! (Click OK to see your score!)");
  }

/* below still needs corrections based on objects and running syntex errors.
  var p1, p2, p3, p4;

  var pointsP1 = {
    CHARGE: 25
  };

  Object.keys(pointsP1).forEach(function(key) {
    if(CHARGE) {
      p1 = 25;
    }
  });

  var pointsP2 = {
    China: 15,
    Russia: 25,
    North Korea: 10,
    USA: 20,
    Canada: 5
  };

  Object.keys(pointsP2).forEach(function(key) {
    if(country ===  key) {
      p2 = pointsP2[key];
    }
  });

  var pointsP3 = {
    farm: 0,
    industry: 15,
    diplomacy: 25
  };

  Object.keys(pointsP3).forEach(function(key) {
    if(style ===  key) {
      p3 = pointsP3[key];
    }
  });

  var pointsP4 = {
    "1": 10,
    "2": 25,
    "3": 0,
    "4": 20
  };

  Object.keys(pointsP4).forEach(function(key) {
    if(fate ===  key) {
      p4 = pointsP4[key];
    }
  });

  var score = {
    sum: function(p1, p2, p3, p4) {
      return p1 + p2 + p3 + p4;
    }
  };


  var scoreMessage = alert("Your final score is: " + score.sum(p1, p2, p3, p4) + " / 100. Thanks for playing!");

})();
*/

var avatar = prompt("Welcome to the Oasis! What would you like to name your avatar?");

var team = prompt("Hi " + avatar + "! James Halliday has created an easter egg hunt for his $100,000,000 fortune. You may select one of the following participation options: 1. Join a Gunter Team; 2. Solo Play, or 3. Join the Sixers (Please enter corresponding number for your selection)");

if (parseInt(team) === 1) {
  var gunterHunt = prompt("Oh no! Parzival, Aech, Art3mis, Shoto and Daito all cracked the first clue. You need to find the copper key ASAP! Where do you want to look? Please select one of the following planets to search: 1. Pern; 2. Ludus (Please enter corresponding number for your selection).");

  if (parseInt(gunterHunt) === 1) {
    var copperKey = prompt("Oops, looks like there's nothing here! Would you like to check Ludus instead? 1. Yes; 2. No--I'm over this. (Please enter corresponding number for your selection)");

    if (parseInt(copperKey) === 1) {
      alert("Way to go! The Copper Key has been hidden on Ludus this whole time! Too bad you figured it out too late--Parzival already won the hunt. Nice try!");
    } else if (parseInt(copperKey) === 2) {
      alert("While you're on your way home, Parzival won the hunt! At least it wasn't the Sixers, right?");
    } else {
      alert("That is not a valid answer!");
    };
  } else if (parseInt(gunterHunt) === 2) {
    var copperKey = prompt("Good job! You've found the location of the copper key--but the Sixers found it first! They have the area blocked off. How would you like to proceed? 1. Bomb the Sixers and their forcefield!; 2. Turn around and go home. (Please enter corresponding number for your selection)");

    if (parseInt(copperKey) === 1) {
      alert("Way to stand your ground! You annihilated an entire team of Sixers and broke through the forcefield. Too bad you didn't make it through soon enough--Parzival won the hunt! Oh well, it was fun while it lasted, right?");
    } else if (parseInt(copperKey) === 2) {
      alert("While you're on your way home, Parzival won the hunt! Good thing it wasn't the Sixers, right?");
    } else {
      alert("That is not a valid answer!");
    };
  } else {
    alert("That is not a valid answer!");
  }
} else if (parseInt(team) === 2) {
  var soloPlay = prompt("After years of trying to figure out the first clue for the hunt, you think you've finally made a breakthrough! What planet would you like to search for the Copper Key? 1. Ludus; 2. Pern (Please enter corresponding number for your selection).");

  if (parseInt(soloPlay) === 1) {
    var jadeKey = prompt("NICE! You figured out where the Copper Key is hidden and beat Acererak the Demi-Lich at Joust! Now on to the next challenge. What is the name of the 1983 movie with Matthew Broderick where his hacker-geek character saves the world from World War III? 1. WarGames; 2. Real Genius.");

    if (parseInt(jadeKey) === 1) {
      alert("Awesome--you nailed it! You're cruising through the hunt and have crushed the Sixers to win the hunt! Enjoy your prize money! Open the JavaScript console to redeem your prize");

      for (i = 100000000; i < 100000004; i++) {
        console.log("Your credits just raised to " + i)
      }
    } else if (parseInt(jadeKey) === 2) {
      alert("Aw man, nice try, but the correct answer was WarGames. While you were trying to figure out the answer, Parzival won the hunt!");
    } else {
      alert("That is not a valid answer!");
    };
  } else if (parseInt(soloPlay) === 2) {
    var tryAgain = prompt("Aw man, the copper key isn't there. Do you want to try Ludus instead? 1. Yes--lets do this!; 2. No, I'm over it.")

    if (parseInt(tryAgain) === 1) {
      alert("Nice, the Tomb of Horrors is on Ludus! Too bad the Sixers figured it out first and barracaded the entrance. Meanwhile, Parzival won the hunt. A valiant attempt!");
    } else if (parseInt(tryAgain) === 2) {
      alert("Oh well, thanks for playing! Parzival won the hunt while you were heading home.")
    } else {
      alert("That is not a valid answer!");
    };
  } else {
    alert("That is not a valid answer!");
  };
} else if (parseInt(team) === 3) {
  var copperKey = prompt("Interesting choice--you are now property of Nolan Sorrento. Your team is working on figuring out the answer to the first clue when Parzival's name appears on the leaderboard. Crap! You're falling behind! Where do you want to look first? 1. Ludus; 2. Pern (Please enter corresponding number for your selection).")

  if (parseInt(copperKey) === 1) {
    var catchUp = prompt("Nice, you got it! Too bad Parzival, Art3mis, Aech, Shoto and Daito beat you to it. You need to catch up. What is your next move? 1. Block off the entrance to the Tomb of Horrors. There are no rules in the hunt, so it can't be cheating, right? 2. Move on and help Sorrento find the location of the Jade Key.");

    if (parseInt(catchUp) === 1) {
      alert("You were bombed by a Gunter Clan and died. Meanwhile, Parzival won the hunt! Sucks to suck, Sux0rs!");
    } else if (parseInt(catchUp) === 2) {
      alert("Nice try, but Parzival beat you to the punch and won the hunt! Down with the Sux0rs!");
    } else {
      alert("That is not a valid answer!");
    };
  } else if (parseInt(copperKey) === 2) {
    var jadeKey = prompt("Jeez, you Sixers are terrible at the hunt! Do you want to continue? 1. Yes; 2. Nah, I quit!");

    if (parseInt(jadeKey) === 1) {
      alert("Alright, well you finally found the Tomb of Horrors, but way too late. Parzival won the game!");
    } else if (parseInt(jadeKey) === 2) {
      alert("Good choice! Parzival won the game anyways, and now you're not the shame of the Oasis.");
    } else {
      alert("That is not a valid answer!");
    };
  };
} else {
  alert("That was not a valid answer.")
}

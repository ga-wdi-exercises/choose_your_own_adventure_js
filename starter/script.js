var name = prompt("Please enter your name");
var age = parseInt(prompt("Please enter your age"));

if (age < 16) {
    alert("You must be at least 16 to attend sports games alone, sorry.");
} else {
    var sportsChoice = prompt("Please choose one sport you would like to go watch today at the stadium. Your options are basketball, baseball, or football");
    if (sportsChoice === "basketball".toLowerCase()) {
        var city = prompt("Basketball? Cool. Are you a more a fan of D.C. or Maryland sports?");
        if (city === "dc".toLowerCase() || city === "D.C.".toLowerCase() || city === "D.C".toLowerCase()) {
            var ballTickets = prompt("Okay you're a D.C. fan. Nice. Please choose either \'top row\' or \'front row\'.");
            if (ballTickets === "top row".toLowerCase()) {
                alert("Awesome " + name + ", so you are going to watch the Wizards play and you chose top row seats. Good luck seeing the game from up there.");
            } else {
                alert("Awesome " + name + ", so you are going to watch the Wizards play and you chose front row seats. Must've taken a toll on your wallet.");
            }
        } else {
            var ballTickets = prompt("Okay you're a Maryland fan. Nice. Please choose either \'top row\' or \'front row\'.");
            if (ballTickets === "top row".toLowerCase()) {
                alert("Awesome " + name + ", so you are going to watch UMD play and you chose top row seats. Good luck seeing the game from up there.");
            } else {
                alert("Awesome " + name + ", so you are going to watch UMD play and you chose front row seats. Must've taken a toll on your wallet.");
            }
        }
    } else if (sportsChoice === "baseball".toLowerCase()) {
        var city = prompt("Baseball fan huh? Cool. Are you a more a fan of D.C. or Maryland sports?");
        if (city === "dc".toLowerCase() || city === "D.C.".toLowerCase() || city === "D.C".toLowerCase()) {
            var ballTickets = prompt("Okay you're a D.C. fan. Nice. Please choose either \'top row\' or \'front row\'.");
            if (ballTickets === "top row".toLowerCase()) {
                alert("Awesome " + name + ", so you are going to watch the Nats play and you chose top row seats. Good luck seeing the game from up there.");
            } else {
                alert("Awesome " + name + ", so you are going to watch the Nats play and you chose front row seats. Must've taken a toll on your wallet.");
            }
        } else {
            var ballTickets = prompt("Okay you're a Maryland fan. Nice. Please choose either \'top row\' or \'front row\'.");
            if (ballTickets === "top row".toLowerCase()) {
                alert("Awesome " + name + ", so you are going to watch the Orioles play and you chose top row seats. Good luck seeing the game from up there.");
            } else {
                alert("Awesome " + name + ", so you are going to watch the Orioles play and you chose front row seats. Must've taken a toll on your wallet.");
            }
        }
    } else if (sportsChoice === "football".toLowerCase()) {
        var favoriteTeamPrompt = prompt("Just curious " + name + ", what is your favorite football team? Enter only the team name and not the city.");
        var backwards = [];
        for (var i = favoriteTeamPrompt.length - 1; i >= 0; i--) {
          backwards.push(favoriteTeamPrompt.charAt(i));
        };
        alert("So your favorite team spelled backwards is: " + backwards.join(""));

    } else {
      alert("You didn't choose a valid sport option... start over");
    }
}

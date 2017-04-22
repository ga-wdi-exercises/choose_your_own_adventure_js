//There are 9 distinations possible in this game

//First Question: Asking About Name
var name = prompt("Hi. What's your name?");
alert("Hi, " + name + ". Nice to meet you virtually!");

//Second Question: Asking About Age
var age = prompt("How old are you?");

//Case 1: If person is above 21 years old
if (age >= 21) {
  alert("You are allowed to drink alcohol!");
    //Third Question for Case 1: Asking about homework
  var homework = prompt("But first, have you finished your wdi homework?");
    if (homework == "yes"){
      alert("Come to GA Happy Hour at 5:30PM!");
    }
    else {
      alert("Sorry, dude! You are grounded! You need to go home and finish yur homework!");
    };
}

//Case 2: If person is below 21 years old
else if (age < 21 && age > 0) {
  alert("Sorry! No alcohol for you.");
    //Third Question for Case 2: Asking about movies
  var answer = prompt("Do you like movies?");
    if (answer == "yes"){
      var movie = prompt("Do you like cartoon, science, drama, or romance movies?");
      //Fourth Question for Case 2: Asking about kind of movies!
      switch(movie) {
          case "cartoon":
              alert("You should watch Sing at AMC Loews Georgetown 14");
              break;
          case "science":
              alert("You should watch Hidden Figures at Landmark Theaters West End Cinema");
              break;
          case "drama":
              alert("You should watch Lion at Lockheed Martin IMAX Theater");
              break;
          case "romance":
              alert("You should watch Lost in Florence at AAngelika Pop-Up at Union Market");
              break;
          default:
              alert("Sorry! That wasn't an option. Refresh the page to start again!");
              break;
      }
    }
    else {
      alert("You should read a book. We will show you some libraries to choose from");
      var libraries = ["Chevy Chase Library in 5625 Connecticut Ave.", "Clevland Park Library in 4340 Connecticut Ave", "Anacostia Library in 1800 Good Hope Road"];
      for (var i = 0; i < libraries.length; i += 1) {
	    alert(libraries[i]);
	  };
    };
}

//Case 3: If person inputs a negative number or anything other than numbers
else {
  alert("Invalid input. You should write a number between a number heigher than zero! You need to refresh the screen to start again");
};

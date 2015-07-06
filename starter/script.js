// put code here!
var city = prompt("You are about to take a vacation. What city would you like to go to? Paris or Tokyo");
if(city === "Paris"){
  var wine = prompt("You're hungry and decide to eat and drink. How many glasses of wine are you gonna drink?");
  if (wine > 5){
    var nextPlace = prompt("Yikes, ok. Where do you want to go next? Home or Museum?");
    if(nextPlace === "Home"){
      alert("Good choice...")
    }
    if(nextPlace === "Museum"){
      var answer = prompt("Are you sure...? (Yes/No)");
      if(answer === "Yes"){
        alert("You try to touch the Mona Lisa and get kicked out...oof...");
      }
      else {alert("Good choice...");}
    }
  }
  if (wine < 5 && wine > 0){
    var music = prompt("You're feeling pretty great and are in a beautiful city. You want to listen to some live music - what kind? Jazz, EDM, Country");
    if(music === "Jazz"){
      var musician = prompt("Cool. Who is your fav jazz musician? Miles Davis or Other");
      if(musician === "Miles Davis"){
        alert("You're in luck! That's the band leader's fav as well. You have an awesome night filled with incredible music and get to hang out with the band afterwards!");
      }
      if(musician === "Other"){
        alert("Hmm. Ok well...get ready to listen to some Miles Davis.");
      }
    }

    if(music === "EDM"){
      var time = prompt("You discover the next EDM superstar at some club in the city. You are dancing your heart out. What time do you want to go home? 12am or 3am");
      if (time === "12am"){
        alert("Not a party animal.");
      }
      if (time === "3am"){
        alert("Party animal!!!!");
      }
    }

    if(music === "Country"){
      alert("Why?! Just kidding. There's some country fans in Paris I'm sure...");
    }
  }

  if (wine === 0){
    alert("That's cool! Go off and enjoy the city! Indulge some other vice!");
  }
}

if (city === "Tokyo") {
  var activity = prompt("What do you want to do in this awesome city? Eat some food or Watch some sumo");
  if (activity === "Eat some food") {
    var type = prompt("What type of food do you want? Sushi, Ramen, Yakitori")
    if(type === "Sushi"){
      alert("Literally any answer would have been the \"right answer\".");
    }

    if(type ==="Ramen"){
      alert("Literally any answer would have been the \"right answer\".");
    }

    if(type === "Yakitori"){
      alert("Literally any answer would have been the \"right answer\".");
    }
  }

  if (activity === "Watch some sumo"){
    alert("Let me know how it is...I never go to go!");
  }


}

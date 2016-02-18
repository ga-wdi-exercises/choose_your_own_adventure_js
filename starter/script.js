// put code here
terrain();

function terrain() {
var terrain = prompt("Choose your terrain: (road, trail)");
  if (terrain == "road") {
    RoadStory();
  }
  else if (terrain === "trail") {
    TrailStory();
    }
  }

function RoadStory(){
      var city = prompt("which city would you like? DC or NYC? (goToDC, goToNYC)");
      if (city === "goToDC"){
        goToDC();
        }
      }
          if (city === "goToNYC"){
        goToNYC();
      }

function TrailStory(){
      var trailrun = prompt("Which trail would you like? Appalachian or Potomac? (goToApp, goToPotomac)");
      function goToApp(){
          var bear = alert("BEAR! Run for your life!");
      }
      if (trailrun === "goToApp"){
        goToApp();
      }
      function goToPotomac(){
          var flood = prompt("Trail flood! Crack a beer!")
      }
      if (trailrun === "goToPotomac"){
        goToPotomac();
      }

}
function goToDC(){
    var snack = prompt("How would you like to energize? (eatGels, eatChocolate)");
    if (snack === "eatGels" || "eatChocolate"){
        beerMe();
}
    function goToNYC(){
        var rain = prompt("Rain alert! (stopRun, keepGoing)");
        if (rain === "stopRun" || "keepGoing"){
          alert("To each his own");
}
}
function beerMe(){
    var beer = alert("Thanks for running - chug a couple beers!")
}
}

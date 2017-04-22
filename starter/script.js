window.onload = function(){
var trip = prompt("What kind of vacation would you like to take? Respond with beach, mountain, or city");
switch (trip) {
  case "beach":
      var activity = prompt("Do you want to exercise or relax?");
      if (activity==="exercise"){
        var days = prompt("Do you want to go 1 or 2 days?")
        if (days.toString()==="1"){
          document.getElementById("vacation").innerHTML =
          "Miami is the place for you.";
          break;
        }
        else if (days.toString()==="2"){
          document.getElementById("vacation").innerHTML =
          "Los Angeles is for you.";
          break;
        }
      }
      else if (activity==="relax"){
        var days = prompt("Do you want to go 1 or 2 days?")
        if (days.toString()==="1"){
          document.getElementById("vacation").innerHTML =
          "Ocean City is the place for you.";
          break;
        }
        else if (days.toString()==="2"){
          document.getElementById("vacation").innerHTML =
          "Myrtle Beach is for you. Let's countdown the days before your trip.";
          for (i = days; i >=0; i--){
            document.getElementById("count").innerHTML +=
            "\nCountdown:"+i;
          }
          break;
        }
      }
  case "mountain":
    var activity = prompt("Do you want to exercise or relax?");
    if (activity==="exercise"){
      var days = prompt("Do you want to go 1 or 2 days?")
      if (days.toString()==="1"){
        document.getElementById("vacation").innerHTML =
        "Sugarloaf is the place for you.";
        break;
      }
      else if (days.toString()==="2"){
        document.getElementById("vacation").innerHTML =
        "Poconos is for you.";
        break;
      }
    }
    else if (activity==="relax"){
      var days = prompt("Do you want to go 1 or 2 days?")
      if (days.toString()==="1"){
        document.getElementById("vacation").innerHTML =
        "Aspen is the place for you.";
        break;
      }
      else if (days.toString()==="2"){
        document.getElementById("vacation").innerHTML =
        "Rocky Mountain is for you.";
        break;
      }
    }
  case "city":
    var activity = prompt("Do you want to exercise or relax?");
    if (activity==="exercise"){
      var days = prompt("Do you want to go 1 or 2 days?")
      if (days.toString()==="1"){
        document.getElementById("vacation").innerHTML =
        "DC is the place for you.";
        break;
      }
      else if (days.toString()==="2"){
        document.getElementById("vacation").innerHTML =
        "New York is for you.";
        break;
      }
    }
    else if (activity==="relax"){
      var days = prompt("Do you want to go 1 or 2 days?")
      if (days.toString()==="1"){
        document.getElementById("vacation").innerHTML =
        "Atlanta is the place for you.";
        break;
      }
      else if (days.toString()==="2"){
        document.getElementById("vacation").innerHTML =
        "Houston is for you.";
        break;
      }
    }
  }
}

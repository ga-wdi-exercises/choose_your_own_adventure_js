function adventure() {
  var start = prompt("Let's go to class at GA! How do we get there from Baltimore? Do we take the MARC, a Car or the Hyperloop?");
  if (start === "MARC") {
    var marc = prompt("Ah yes the ol' MARC. I see you're a fan of historical tunnels and crumbling infrastructure. Would you prefer to take the Penn Line, the Camden Line,  or Walk instead?");

    if (marc === "Penn Line") {
      var penn = prompt("I see you're a fan of history. The Baltimore and Potomac Tunnel, which runs underneath the Potomac river and services 140 Amtrak and MARC trains, and two freight trains daily was built in 1873. Why did you choose the Penn Line? Danger or History?");
      if (penn === "History") {
        alert("Old stuff rocks!");
        adventure();
      }
      else if (penn === "Danger") {
        alert("Hopefully it doesn't crumble!");
        adventure();
      }
    }

    else if (marc === "Camden Line") {
      camdenYards();
      if (yards = "O!") {
        var place = prompt("Nice! What place are the O's in the AL East?");
        place = parseInt(place);

        switch (place) {
          case 1:
          alert("I've had this dream before.");
            break;
          case 2:
          alert("Hey not too shabby!");
            break;
          case 3:
          alert("Well, they've been worse");
            break;
          case 4:
          alert("Let's go *sob* O's");
            break;
          case 5:
          alert("There's always Natty Boh");
          default:
          alert("I'll assume they've won the World Series");
          }
          adventure();
        }
        else {
          alert("Bummer.");
          adventure();
        }
      }
      else if (marc === "Walk") {
        alert("Your legs must be quite impressive.");
        adventure();
      }
      else {
        prompt("Choose a MARC line or Walk!");
        adventure();
      }
    }

  else if (start === "Car") {
    var road = prompt("So which route are you going to take? 95, 1 or whatever just Google Maps it?");
    if (road === "95") {
      var rain = prompt("Looks like you're in for a long drive, hope you brought the sweet tunes. Is it raining? Y/N")
      if (rain === "Y") {
        alert("Cars ram into trucks, riots break out, democracy falls, rubberneckers forget you have somewhere to be.");
        adventure();
      }
      else {
        var trip = false;
        while (trip === false) {
          var yet = prompt("Are we there yet?");
          if (yet === "Yes") {
            trip = true;
            alert("About time.")
          }
        }
        adventure();
      }
    }
    else if (road === "1") {
      var best = prompt("You took this road because you like being #1 didn't you? Y/N");
      if (best === "Y") {
        alert("Yeah you're pretty cool.");
        adventure();
      }
      else {
        alert("Liar.");
        adventure();
      }
    }
    else if (road === "Google Maps") {
      alert("You drive into a field of cow manure and suffocate. The Onion publishes your obituary.");
      adventure();
    }
    else {
      prompt("Enter in a road (95 or 1), or Google Maps!");
      adventure();
    }
  }
  else if (start === "Hyperloop") {
    var musk = prompt("Cool you can hop on board but first, are you Elon Musk? Yes/No")
      if (musk === "Yes") {
        window.location = "https://www.linkedin.com/in/david-corderman-64a0762a"
      }
      else {
        alert("Aaaaaaaaaand you're there.");
        adventure();
      }
    }
  else {
    alert("Back to the beginning!");
    adventure();
  }
}
adventure();
function camdenYards() {
  var yards = prompt("Taking the train straight from the ballpark, hope the O's won! (O!/No)");
}

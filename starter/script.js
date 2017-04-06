
var myName = prompt("What is your name?");
var warmOrCold = prompt("Hello, " + myName + ". Are you warm-blooded or cold-blooded?").toLowerCase();

if (warmOrCold == "warm" || warmOrCold == "warm-blooded") {
  var whichOcean = prompt("Do you want to make your home in the Pacific, Atlantic, or Indian Ocean?").toLowerCase();
    switch(whichOcean) {
      case "atlantic":
      case "atlantic ocean":
      var napoleon = prompt("Would you be okay with the corpse of Napoleon as your neighbor?").toLowerCase();
        if (napoleon == "yes") {
          document.write("Off to Saint Helena you go! Bring a sleep mask--the sun never sets...");
        }
        else {
          document.write("The beautiful Azores await you...and flocks of Portuguese hipsters.");
        }
        break;

      case "pacific":
      case "pacifc ocean":
      var volcano = prompt("Would you be okay with a volcano as your neighbor?").toLowerCase();
        if (volcano == "yes") {
          document.write("Easter Island, here you come! The inhabitants may have a stony exterior, but don't hate--they're just a bit Chile.");
        }
        else {
          document.write("The Marshall islands are the nuclear radiation-tinged arichipelago for you.");
        }
        break;

      case "indian":
      case "indian ocean":
      var population = parseInt((prompt("How many people would you like to share your island with?")).replace(',', ''));
      population
          if (population > 100) {
            document.write("Congratulations! You should live on Reunion. It's awesome.");
          }
          else {
            document.write("lolz, enjoy Ile Amesterdam, you lowly antisocial peasant");
          }
      break;

    }
}

  else {
    var saltwater = prompt("Can you deal with the occasional drop of saltwater in your eyes?").toLowerCase(); //Ocean or not
      if (saltwater == "yes") {
        var french = prompt("Are you a francophile?").toLowerCase(); //St. Pierre and Miquelon vs Aleutian Islands
          if(french == "yes") {
            document.write("St. Pierre and Miquelon is your cold, craggy new home!");
          }
          else {
            document.write("The Aleutian Islands! Squint hard--you might be able to see Russia.");
          }
      }
      else {
        var hippie = prompt("Would you consider yourself 'crunchy'?").toLowerCase(); //Olkhon vs Lopez
          if(hippie == "yes") {
            document.write("Lopez Island is your leftie paradise.");
          }
          else {
            document.write("Lake Olkhon beckons you to the bosom of Mother Russia.");
          }
      }

  }

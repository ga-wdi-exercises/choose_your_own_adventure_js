function getTemp() {
  return parseInt(prompt("Hello! What's the Temperature Outside Today?  "));
}

function verifyTemp(temp) {
   var tempOutside;
   if (temp < 110 && temp > -50) {
      tempOutside = temp;
   } else {
    var newTemp = getTemp ();
    tempOutside = verifyTemp(newTemp);
   }
   return tempOutside;
}

var UserTemp = verifyTemp(getTemp())

if (UserTemp < 60) {
   var coatSweater = prompt("Do you want to take a Coat, a Sweater, or Neither (c/s/n)")
   if (coatSweater == "s") {
     console.log ("Hope it doesn't get any colder - enjoy your day!")
   }else if  (coatSweater == "c") {
     console.log ("Smart choice now you will be warm")
   } else {
     console.log ("Your gonna Freeze! Not smart.")
   }
}

if (UserTemp >= 60 && UserTemp < 80) {
   var sOrh = " "
   while (sOrh != "s" && sOrh != "h") {
   var sunscreenHat = prompt("Do you want to put on Sunscreen, take a Hat or Neither (s/h/n)")
   sOrh = sunscreenHat
}
   if (sunscreenHat == "s") {
     console.log ("Good choice, protect your skin from the sun!")
   } else {
     console.log ("Good Idea! You may want to take along the sunscreen along just in case!")
   }
}

if (UserTemp >= 80) {
  var wOrg = " "
  while (wOrg != "w" && wOrg != "g") {
    var waterGaitorade = prompt("Do you want to take along Water, Gaitorade or Neither (w/g/n)")
    wOrg = waterGaitorade
  }
  if (waterGaitorade == "w") {
    console.log ("Make sure you take plenty it's a scorcher today!")
  }else{
    console.log ("Great Choice Gatorade will keep you hydrated and make sure your electolytes stay in balance!")
  }
}

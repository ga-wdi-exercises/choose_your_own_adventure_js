// put code here!
var readyToEat = prompt("Are you hungry? yes or no");

while (readyToEat !== 'yes') {
  alert('Comeback when you know what you want!')
  readyToEat = prompt("Are you hungry? yes or no");
}

  if (readyToEat === 'yes' ) {
    var typeOfFood = prompt("Great! What type of food would you like? (i) Italian or (m) Mexican?")
  }

  if (typeOfFood === 'i'){
    var italianMenu = prompt("I love Italian! What dish would you like? (c) Chicken Parmesan, (s) Spaghetti or (p) Penne Alfredo? ")
  }
  else if (typeOfFood === 'm') {
    var mexicanMenu = prompt("Muy bien! Would you like an (e) enchiladas or (t) tacos")
  }

    if (italianMenu === 'c') {
      alert("One chicken parm, coming up!");
    }
    else if (italianMenu === 's') {
      alert("Plate of spaghetti on the way!");
    }
    else if (italianMenu === 'p') {
        alert("Bowl of Penne Alfredo coming your way!");
    }

    if ( mexicanMenu === 'e') {
      var numEnchiladas = prompt("One (1) or two (2) enchiladas?");
    }
    else if (mexicanMenu === 't') {
      var tacoType = prompt("Hard (h) or soft (s) shell?");
    }


    if (numEnchiladas == 1){
      alert("One enchilada coming right up!");
    }
    else if (numEnchiladas == 2) {
      alert("Two enchiladas coming right up!");
    }

    if (tacoType === 'h') {
      alert("Hard shell tacos coming right up!");
    }
    else if (tacoType === 's') {
      alert("Soft shell tacos, coming right up!");
    }
    

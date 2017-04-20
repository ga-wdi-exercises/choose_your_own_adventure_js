// put code here!


function submission () {
  var name = document.getElementById('nameBox').value;
  var state = document.getElementById('ddMenu').value;

  if (state == "start") {
    alert("Please resubmit your response and select a state");
    return;
  }

  var options = getOptions(state);

  var choice = parseInt(destiny(name, state, options));

  var goodAnswer = checkResponse(choice, state);

    if (goodAnswer == true) {
      var answer = returnAnswer(state, choice);
      alert(name + " - " + answer);
    }
    else {
      alert("Sorry, that is an invalid response. Please try again and submit a number.");
      submission();
      return;
    }
}

function checkResponse (num, state1) {

  if (Number.isInteger(num)) {

    if (state1 !== "Wisconsin"){
      if (num >= 1 && num <= 2){
        return true;
      }
      else {
        return false;
      }
    }

    else if (num >= 1 && num <= 3){
      return true;
    }
    else {
      return false;
    }

  }
}

function destiny (name1, state2, options1) {
  var answer1 = prompt("Hello " + name1 + "! You chose " + state2 + ". Enter the number associated with option you would like to select. (Ex. '2') --    " + options1 + " (Enter Number)", "Enter Option");
  return answer1;

}

function getOptions (chosenState) {
  switch (chosenState) {

      case "California":
        return "(Option 1) - Create a startup or (Option 2) - Make friends with your local hippie group";
      break;

      case "D.C.":
        return "(Option 1) - Go into Politics or (Option 2) - Enter Consulting";
      break;

      case "Minnesota":
        return "(Option 1) - Become Zamboni Driver or (Option 2) - Research Igloo Architecture";
      break;

      case "New York":
        return "(Option 1) - Meet Hillary or (Option 2) - Meet Trump";
      break;

      case "Oregon":
        return "(Option 1) - Attend Community Arts and Crafts or (Option 2) - Join new friend at Vegan Meat Company";
      break;

      case "Texas":
        return "(Option 1) - Attend the Rodeo or (Option 2) - Attend Texas State Fair";
      break;

      case "Wisconsin":
        return "(Option 1) - You love cheese or (Option 2) - You love milk or (Option 3) - You are lactose intolerant";
      break;
  }
}

function returnAnswer(state, num) {

  switch (state) {
    case "California":
        if (num == 1) {
          return "You run out of money due to the crippling rent prices in San Fran and return home";
        }

        else if (num == 2){
          return "The hippies are marijuana moguls and dig your vibe. You become COO and cash out a billionaire 20 years later";
        }
    break;

    case "D.C.":
        if (num == 1) {
          return "You have a promising career ended by the savagery of an upstart Democrat named Frank Underwood";
        }

        else if (num == 2){
          return "You spend the rest of your life stuck in traffic on the beltway";
        }
    break;

    case "Minnesota":
        if (num == 1) {
          return "You become involved in underground zamboni races, become an urban legend. Later arrested for DUI on a zamboni during youth hockey game";
        }

        else if (num == 2){
          return "You become world renowned architect. Become a cultural hero in Eskimo culture.";
        }
    break;

    case "New York":
        if (num == 1) {
          return "Kidnapped and forced into hard labor constructing a wall between the US and Mexico";
        }

        else if (num == 2){
          return "Her stone cold stare turns you to stone";
        }
    break;

    case "Oregon":
        if (num == 1) {
          return "Group constructs hot air balloon of recycled clothes";
        }

        else if (num == 2){
          return "Vegan meat company is an immediate success. Later exposed in scandal revealing that your vegan meat is 3% chicken cutlet. Lose all money.";
        }
    break;

    case "Texas":
        if (num == 1) {
          return "Become Rodeo clown";
        }

        else if (num == 2){
          return "Die of heart attack after eating deep fried cinnamon bun with bacon";
        }
    break;

    case "Wisconsin":
        if (num == 1) {
          return "You spend the rest of your life in never ending bliss as the badger state is full of cows and fresh milk";
        }

        else if (num == 2){
          return "You spend the rest of your life in never ending bliss as the badger state is full of cows and fresh milk";
        }

        else if (num == 3){
          return "You return home because Wisconsin is cold and everything is dairy. Also the Packers are lame.";
        }
    break;

  }

}


// value="start"
// value="California"
// value="D.C."
// value="Minnesota"
// value="New York"
// value="Oregon"
// value="Texas"
// value="Wisconsin"

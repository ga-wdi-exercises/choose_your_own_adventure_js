// Get user name
const user = prompt ("What is your name?");


// Get element by id 'greeting', Append greeting to html
document.getElementById('greeting').innerHTML = "Nice to meet you " + user + "!";

const  createUserInput = function(i) {
  const div = document.createElement('div');
  const h6 = document.createElement('h6');
  h6.setAttribute("id", "header" + i)
  const input = document.createElement('input');
  input.setAttribute("type", "text");
  input.setAttribute("value", "");
  input.setAttribute("id","input" + i);
  const button = document.createElement('button');
  button.setAttribute("onclick", "getuserInput(" +i +")");
  button.setAttribute("id", "button" + i);
  button.innerHTML = "Submit";
  const p = document.createElement('p');
  p.setAttribute("id", "path" + i);

  div.appendChild(h6);
  div.appendChild(input);
  div.appendChild(button);
  div.appendChild(p);

  const footer = document.getElementsByTagName('footer');
  document.body.insertBefore(div, footer[0]);
};

const  resetGame = function(i) {
  const div = document.createElement('div');
  const h6 = document.createElement('h6');
  h6.setAttribute("id", "header" + i);
  const p = document.createElement('p');
  p.setAttribute("id", "path" + i);
  const button = document.createElement('button');
  button.setAttribute("onclick", "clearBoard()");
  button.setAttribute("id", "button" + i);
  button.innerHTML = "Reset";

  div.appendChild(h6);
  div.appendChild(p);
  div.appendChild(button);

  const footer = document.getElementsByTagName('footer');
  document.body.insertBefore(div, footer[0]);
};

const getuserInput = function(i) {
    const userInput = parseInt(document.getElementById("input" + i).value);
    gameConditions(userInput);
};

const gameConditions = function(input) {
  if (input >= 2015){
    createUserInput(2);
    document.getElementById("header2").innerHTML = "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Giff? (B/G)";
    document.getElementById("button2").setAttribute("onclick", "biffGiff(2)");
  }
  else if (input >= 1985 && input <= 2014) {
    createUserInput(3);
    document.getElementById("header3").innerHTML = "Doc has already destoryed the Time Machine at the point. I guess you'll have to wait around until 2015. What name would you like to go by until then?"
    let userInput = document.getElementById("input3").value;
    console.log(userInput)
    //if () {
    //  document.getElementById("path3").innerHTML = "Welcome to the future, " + userInput + ".";
  //  }
  }
  else if (input >= 1955 && input <= 1984) {
    alert("Between 1955 and 1984");
  }
  else if (input < 1955){
    alert("Less Than 1955");
  }
}

const biffGiff = function(i){
    let userInput = document.getElementById("input" + i).value;
    if (userInput === "B") {
      createUserInput(2.1);
      document.getElementById("header2.1").innerHTML = "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)";
      document.getElementById("button2.1").setAttribute("onclick", "biffGiff(2.1)");
    }
    else if(userInput === "G") {
      createUserInput(2.2);
      document.getElementById("header2.2").innerHTML = "Griff is asking you if you are in, or out. What do you say? (I/O)";
      document.getElementById("button2.2").setAttribute("onclick", "biffGiff(2.2)");
    }
    else if (userInput === "S") {
      resetGame(2.3);
      document.getElementById("header2.3").innerHTML = "Stand and Fight!";
      document.getElementById("path2.3").innerHTML = "Good Choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.";
    }
    else if (userInput === "R") {
      resetGame(2.4);
      document.getElementById("header2.4").innerHTML = "Run like a Coward!";
      document.getElementById("path2.4").innerHTML = "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.";
    }
    else if (userInput === "I") {
      resetGame(2.5);
      document.getElementById("header2.5").innerHTML = "In";
      document.getElementById("path2.5").innerHTML = "Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.";
    }
    else if (userInput === "O") {
      resetGame(2.6);
      document.getElementById("header2.6").innerHTML = "Out";
      document.getElementById("path2.6").innerHTML = "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure."
    }
};

const clearBoard = function(){
  const div = document.getElementsByTagName("div");
  for (let i = 0; i < div.length; i++){

  }
};

const startGame = function(){
  createUserInput(1);
  document.getElementById("header1").innerHTML = "What year would you like to go to? (YYYY)";
};

startGame();

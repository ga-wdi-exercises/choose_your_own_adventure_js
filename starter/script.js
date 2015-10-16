var userInput;
var suchen = function(message){
  userInput=prompt(message);
  if (userInput){
    return userInput;
  } else {
    suchen('TRY AGAIN: ' + message);
  }
};

var game = function  () {
  suchen('Hey! What is your name??');
  suchen('Hi there, ' + userInput + '. Wanna play a game?? (y|n)');
  if (userInput=='y'){
    suchen('Great! (a|b|c)');
    if (userInput=='a'){
      suchen('You chose a. Pick a number between 1-100');
      if (userInput<=100&&userInput>0){
        alert(userInput + '!');
      }else{
        console.log('obj');
      }
    }else if (userInput=='b') {
      alert('b!');
    }else if (userInput=='c') {
      alert('c!');
    }
  }
  else if (userInput=='n') {
    suchen('Are you SURE???? (y|n)');
    if (userInput=='y'){
      alert('Okayyyy, have a great life!');
    }else if (userInput=='n') {
      game();
    }
  }
};

game();

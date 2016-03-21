// put code here!
var answer = Number(prompt('Welcome to Monty Python and the Holy Grail the game. But first, how old are you? This movie was rated R, y\'know.'));
       if(answer < 18) {
         alert("Still a lad, eh? Come back once you\'ve grown yer whiskers.");
      }
        else if(answer > 60){
        alert("Turn back honored graybeard, we know you\'ve already seen this movie.");
      }
        else{
          userId=prompt('Excellent. Now answer me these questions three if the other side ye wish to see. \What is yer name?');
        }
    answer=prompt("What is your quest, " + userId + "? (Hint: you seek the holy grail.)");
       while ((answer === 'I seek the holy grail.') === false){
       prompt('This\'ll go a lot faster if you say you seek the holy grail.');
       break;
     }

    yourchoice = prompt("What is your favorite number between 1 and 7?")
    if typeof yourchoice == "string"
    switch(yourchoice){
     case "1":
     alert('You are hurled from the bridge to your death. Sad!');
     case "2":
     alert('A giant eagle swoops from the clouds, grabs you in its talons, and drops you to your death. Scary!');
     break;
     case "3":
     alert('A nearby volcano erupts and covers you with lava. Funny!');
     break;
     case "4":
     alert('A bear - yes, a BEAR - eats you. Adorable!');
     break;
     case "5":
     alert('You clutch your chest, suddenly gripped by arsenic poisoning. Nice!');
     break;
     case "6":
     alert('The ark of the covenant opens, and melts your face. Hurray!');
     break;
     case "7":
     alert('You may pass. Here\'s the Holy Grail. Way to be, young jedi');
     break;
   }

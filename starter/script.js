var alive = 1;
while(alive===1){
  var response = prompt('Welcome to Choose Your Own Adventure: Harry Potter\n\nA: You are Harry Potter, walking down a dark corridor at Hogwarts with Hermione and Ron.  You are searching for the final Horcrux.  There is a door on your left and you hear a noise behind it.  Do you open the door? (y/n)');
  switch(true){
    case (response === 'y' || response === 'Y'):
      var responseB = prompt('You open the door.  Crabbe and Goyle are waiting inside; Crabbe abducts Hermione and Goyle abducts Ron.  Do you chase after Hermione, Ron, or continue searching without them (h/r/n)?');
        if(responseB === 'h' || responseB === 'H'){
          var responseD = prompt('You easily catch up with Crabbe and Stupefy him.  Hermione thanks you for saving her and approaches you.  Do you hug or kiss her (h/k)?');
            if(responseD === 'h' || responseD === 'H'){
              alert('Your hug distracts you from seeing that Ron is under the Imperius Curse.  He unwittingly casts Avada Kedavra on both of you.  So much for stopping Voldemort!');
              alive++;
            }
            else if(responseD === 'k' || responseD === 'K'){
              alert("Remus Lupin is transformed into a werewolf and kills you as you're distracted by inexplicably kissing your best friend's girlfriend.  You jerk.");
              alive++;
            }
            else{
              alert('Invalid response.  Voldemort does not like invalid responses.  Avada Kedavra!');
              alive++;
            }
        }
        else if(responseB === 'r' || responseB === 'R'){
          var responseE = prompt("Ron disarmed Goyle and broke his wand.  He calls out for Hermione, who shrieks, but says to look for the Horcrux.  Do you continue searching or attempt to save Hermione (c/h)?");
            if(responseE === 'c' || responseE === 'C' || responseE === 'h' || responseE === 'H'){
              alert("As you turn around, Fenrir Greyback suddenly appears in his disgusting glory.  He is hungry and you're cornered.  Well... this sucks...");
              alive++;
            }
            else{
              alert('Invalid response.  Voldemort does not like invalid responses.  Avada Kedavra!');
              alive++;
            }
        }
        else if(responseB === 'n' || responseB === 'N'){
          var responseF = prompt("As you leave the room, you hear Voldemort instructing Death Eaters where to attack.  Do you pursue him or try to hide (p/h)?");
            if(responseF === 'p' || responseF === 'P'){
              alert("You seriously chased after Voldemort by yourself with a bunch of Death Eaters right there?  Spoiler Alert: you die.");
              alive++;
            }
            else if(responseF === 'h' || responseF === 'H'){
              alert("Ron and Hermione suddenly re-emerge, but as they yell at you for ditching them, Voldemort and the Death Eaters converge and kill you.  Hey, at least you spent your final moments with your loved ones!");
              alive++;
            }
            else{
              alert('Invalid response.  Voldemort does not like invalid responses.  Avada Kedavra!');
              alive++;
            }
        }
        else{
          alert('Invalid response.  Voldemort does not like invalid responses.  Avada Kedavra!');
          alive++;
        }
      break;

    case (response === 'n' || response === 'N'):
      var responseC = prompt("Your party continues down the hallway and overhears a battle between Draco Malfoy's parents and Professor McGonagall.  Do you engage or try to avoid being seen to continue your search (e/c)?");
        if(responseC === 'e' || responseC === 'E'){
          var responseG = prompt("You help Professor McGonagall and she informs you that you are the final Horcrux.  Voldemort has to kill you for him to be defeated.  Do you seek out Voldemort or try to run (v/r)?");
            if(responseG === 'v' || responseG === 'V'){
              alert("You find Voldemort near the forest.  He kills you without resistance.  You come back to life (because magic) and you kill Voldemort!");
              alive++;
            }
            else if(responseG === 'r' || responseG === 'R'){
              alert("You run into Voldemort and he kills you.  A large group of wizards and witches overwhelms him and his Death Eaters.  Congrats, your cowardice didn't help the Dark Lord after all!  You coward.  Coward.  COWARD.");
              alive++;
            }
            else{
              alert('Invalid response.  Voldemort does not like invalid responses.  Avada Kedavra!');
              alive++;
            }
        }
        else if(responseC === 'c' || responseC === 'C'){
          var responseH = prompt("Your party finds the Room of Requirement and Hermione suggests entering, hoping the Horcrux might be in there.  You hear even more fighting between professors and Death Eaters.  Do you enter the Room of Requirement or join the fray (r/f)?");
            if(responseH === 'r' || responseH === 'R'){
              alert("The door to the Room of Requirement was a Portkey.  Voldemort's snake Nagini kills you while his Death Eaters finish off Ron and Hermione.  Tough break.");
              alive++;
            }
            else if(responseH === 'f' || responseH === 'F'){
              alert("Turns out the professors already lost that fight.  It's you against a bunch of Death Eaters.  Better luck in the afterlife!");
              alive++;
            }
            else{
              alert('Invalid response.  Voldemort does not like invalid responses.  Avada Kedavra!');
              alive++;
            }
        }
        else{
          alert('Invalid response.  Voldemort does not like invalid responses.  Avada Kedavra!');
          alive++;
        }
      break;

    default:
      alert('Invalid response.  Voldemort does not like invalid responses.  Avada Kedavra!');
      alive++;
      break;
  }
}

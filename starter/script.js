var counter = 2;
while(counter>=-1){

var name = prompt("Hello, what is your name?");
var selection = prompt("Hello "+ name + ". You are standing in a dark cave. You have a torch. What do you do? *Light torch*? *Walk forward*? Or *scream for help*? Please answer with the exact text between the *'s")
selection = selection.toLowerCase();

if (selection==="light torch"){
    var selection1 = prompt("You light your torch and see a cliff in front of you. What do you do next? *Walk left*? *Walk right*?");
    selection1 = selection1.toLowerCase();
    if(selection1==="walk left"){
      var selection3 = prompt("You turn and begin walking to your left with the cliff to your right, the torch light flickers. As you walk you see a faint light in the distance that grows as you approach it. You figure it must be the exit. What do you do? *Walk towards the exit*? *Run towards the exit*? ")
        selection3 = selection3.toLowerCase();
        if(selection3==="walk towards the exit"){
          var selection5 = prompt("You being the trek towards the exit but you hear a rumbling behind you. You turn to the source of the noise and all your fears are realized. Your bones shiver. You are not alone. Standing before you is a 9 foot tall cave troll. He doesnt like intruders. What do you do? *Attack him with torch*? Or *run to the exit*?")
          selection5 = selection5.toLowerCase();
          if(selection5==="run to the exit"){
            window.confirm("The cave troll lets out a heart stopping shriek. You turn to run but the shreik has paralyzed you. Your feet dont move like they should. You trip over a pebble and tumble off the cliff to your death. Be more careful next time. You have "+counter+" lives left.")
            counter--;
          }
          else{
            window.confirm("The cave troll lets out a ear bursting shriek. You take a deep breath, you are not phased. You have trained for this. With the skill of a Japanese samuri you swing the torch with lightning speed towards the trolls feet. The flames lick the trolls toes and it screams. Trolls hate fire. The troll leaps back and loses its balance. It slips on the edge of the cliff and falls to its death. Congratulations you have survived the cave.");
            counter = counter -10;
          }

        }
        else{
          window.confirm("Your mind is so filled with the joy of discovering the exit and the promise of a full life ahead of you once you get out of this god forsaken cave that you forget to put your left foot in front of your right. You lose balance and trip over your own feet, tumlbing off the cliff to your death. You have " + counter + " lives left.")
          counter--;
        }

    }
    else{
      var selection4 = prompt("You turn and begin walkting to your right, the cliff on your left. You are drawn to the edge,'a long fall, better be careful' you think to yourself. As you continue to walk you hear something. *Crunch...crunch*. Your greatest fear is realized, you are not alone. Someone, or something, is eating. Just as fast as you notice it, it notices you. A 9 foot tall cave troll drops the carcass it was munching on and charges you. You notice a rusty sword at your feet. What do you do? *Pick up the sword and fight*? Or *run*?")
      selection4 = selection4.toLowerCase();
      if(selection4==="run"){
        window.confirm("You turn and start to run but lose your balance. You trip over your own feet and tumble off the side of the cliff and fall to your death. How clumsy, you should have been more careful. You have " + counter + " lives left.");
        counter--;
      }
      else{
          var roll = parseInt(prompt("Pick a number between 0 and 6"));
          if(roll<3){
          window.confirm("You grab the sword and wield it with two hands. Its rusty but still as sharp as the day it was forged. Any fear you had quickly leaves you. You are calm and focused. You have trained for this. You do a few practice swings 'perfectly balanced' you think to yourself. The troll lets out a roar, you have disrupted his feast. He charges you and swings his massive fist at your head. You roll and adeplty dodge the beast's strike. You lunge forward as the troll is trying to recover but its too late. You have struck the beast through its heart. He drops to his knee and lets out one last breath. Congratulations you have survived the cave.")
          counter=counter-10;
        }
        else {
          window.confirm("You grab the sword slowly, you still have fear in your heart. The troll can sense it. He leaps forward and swings his large fist down on top of your head. You are crushed to death. You have "+counter+" lives left.")
          counter--;
        }


      }
    }
}
else if(selection==="walk forward"){
  window.confirm("You take a step forward and find that there is no ground beneath you. You fall forward off of a cliff to your death. You have "+ counter +" lives left.");
  counter--;

}
else if(selection==="scream for help"){
    var selection2 = prompt("You scream at the top of your lungs and hear your voice echo throughout the cave. You then hear a shriek from somewhere deep in the cave. What do you do next? *Walk towards the shriek*? Or *run from the shriek*?");
    selection2 = selection2.toLowerCase();
      if(selection2==="run from the shriek"){
        window.confirm("The shriek shakes you to the core. You are terrified. Your fight or flight instinct kicks in and you choose the latter. You turn to run but are so frozen with fear that you forget to move your legs. You lose your balance and roll off the edge of the cliff to your death. What a pity. You have " + counter +" lives left." );
        counter--;
      }
      else{
        window.confirm("You are truely courageous to walk towards the shriek because it came from a giant 9 foot cave troll who is upset that you are trespassing in his home. You see it the moment it sees you, you lock eyes and know only one of you will survive. You see something shimmering from the corner of you eye. A sword. The troll sees that you see the sword. The troll begins to charge as you make a move for the sword. He swings his giant fist towards you but you roll dodge it with skill picking up the sword mid roll. You gather yourself and lunge towards the troll. You strike him in the center of his gut. He gasps and takes one final breath. Congratulations you have survived the cave.");
        counter = counter -10;
      }
}
}

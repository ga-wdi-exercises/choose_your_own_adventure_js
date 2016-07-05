/* Pseudocode in this section:

intro alert:
Well, it's been a long week. Time to WINE ABOUT IT. But wait... before you grab the nearest option, let's do some soul searching so you can find the perfect pick.

first prompt:
Let's talk lifestyle choices. Are you feeling 'fancy' or are you feeling more 'thrifty' tonight?
fancy: Ok, well if we're being fancy, you'll need to class it up by shopping at Total Wine.
thrifty: We can't all live the high life. Head over to Trader Joe's where you won't be judged for keeping it under $7.

second prompt: Let's get the obvious out of the way: do you prefer 'red' or 'white'?
red: Alright, let's head over to the reds.
white: Ok, let's head to the fridge section to find a nice chilled white.

third prompt: Are you drinking 'alone' or expecting a 'crowd'? No judgment here..
>ENDPATH1 alone: If you lived with cats you would never be forced to drink alone, just saying. Grab the nearest bottle and get outta here, Netflix is waiting!
crowd: Party time! How many guests are coming over?
>ENDPATH2  if >=10:  Um, this is not a charity gala, tell those people to BYOW!
if <10, >4: Sounds fun! Get at least 3 bottles so everyone can enjoy.
if <=4: One bottle could work, but get 2 to be safe.

fourth prompt: Oh hold up, did your neighbors ever return that bottle opener you loaned them? 'yes' or 'no'?
yes: Phew. Your options are wide open.
>ENDPATH3 no: Welp. I don't see any twist-tops here. Looks like your night just ended.

fifth prompt:
The manager just stopped you to ask for some ID. Are you going to show your 'license' or create a 'diversion'?
license: Nothing to see here, just an over-21-adult doing adult wine things. You're good to go!
>ENDPATH4 diversion: DANGIT! You've been caught.. ditch the basket and shout "THIS ISN'T TACO BELL!! WHERE AM I?!?" and make a run for the door. Better luck next year, kid.

sixth prompt:
Hey, there's a display over here with the employee pick of the month, and it sounds perfect. Will you make a safe choice and get the 'display' wine, choose that 'flashy' label with all the French writing, or just get your 'usual'?
>ENDPATH5 display: Crowd favorite! But wait.. the employees love this wine so much that they all abandon their registers and throw down with you right there in the store! One thing leads to another, and it looks like you're sleeping in your car tonight.
>ENDPATH6 usual: Uh oh, your friends heard what you picked and are not excited to drink your usual for the millionth time. You'll enjoy your evening, but it looks like it'll be alone this time.
flashy: Way to be brave. Time to go home and enjoy!

seventh prompt, loop:
You definitely made the right choice, this wine is so delicious that you could probably finish a whole bottle by yourself. How many glasses have you had, anyway?
>ENDPATH8 if >10: Surely you lost count... Grab the advil and head to bed.
>ENDPATH7 if >=6: Good news is you found a new favorite. Bad news is you finished a whole bottle PLUS some, and your friends cut you off. Until next time!
if <6: You could get one last pour out of this bottle, go for it!
if <4: Ok you might be responsible for that spill on the carpet but go ahead, that bottle's not empty.
if <2: Party's just getting started, refill that cup!
*/

alert("Well, it's been a long week. Time to WINE ABOUT IT. But wait... before you grab the nearest option, let's do some soul searching so you can find the perfect pick.");

//first prompt:
var price = prompt("Let's talk lifestyle choices. Are you feeling 'fancy' or are you feeling more 'thrifty' tonight?");
if (price === 'fancy') {
  alert("Ok, well if we're being fancy, you'll need to class it up by shopping at Total Wine.");
}
else {
  alert("We can't all live the high life. Head over to Trader Joe's where you won't be judged for keeping it under $7.");
}

//second prompt:
var color = prompt("Let's get the obvious out of the way: do you prefer 'red' or 'white'?");
if (color === 'red') {
  alert("Alright, let's head over to the reds.");
}
else {
  alert("Ok, let's head to the fridge section to find a nice chilled white.");
}

// third prompt:
var guests = prompt("Are you drinking 'alone' or expecting a 'crowd'? No judgment here..");
// >ENDPATH1
if (guests === 'alone') {
  alert("If you lived with cats you would never be forced to drink alone, just saying. Grab the nearest bottle and get outta here, Netflix is waiting!");
}
else {
  var numGuests = parseInt(prompt("Party time! How many guests are coming over?"));
  //ENDPATH2
  if (numGuests >=10) {
    alert("Um, this is not a charity gala, tell those people to BYOW!");
  }
  else {
    if (numGuests >4) {
      alert("Sounds fun! Get at least 3 bottles so everyone can enjoy.");
    }
    else {
      alert("One bottle could work, but get two to be safe");
    }

    // fourth prompt:
    var cap = prompt("Oh hold up, did your neighbors ever return that bottle opener you loaned them? 'yes' or 'no'?");
    if (cap === 'yes') {
      alert("Phew, your options are wide open. You could get a twist-top but what fun is that? Be a civilized person and get a corked bottle.");

      // fifth prompt:
      var identification = prompt("The manager just stopped you to ask for some ID. Are you going to show your 'license' or create a 'diversion'?");
      if (identification === 'license') {
        alert("Nothing to see here, just an over-21-adult doing adult wine things. You're good to go!");

        // sixth prompt:
        var pick = prompt("Hey, there's a display over here with the employee pick of the month, and it sounds perfect. Will you make a safe choice and get the 'display' wine, choose that 'flashy' label with all the French writing, or just get your 'usual'?");
        // ENDPATH5
        if (pick === 'display') {
          alert("Crowd favorite! But wait.. the employees love this wine so much that they all abandon their registers and throw down with you right there in the store! One thing leads to another, and it looks like you're sleeping in your car tonight.");
        }
        // ENDPATH6
        else if (pick === 'usual') {
          alert("Uh oh, your friends heard what you picked and are not excited to drink your usual for the millionth time. You'll enjoy your evening, but it looks like it'll be alone this time.");
        }
        else {
          alert("Way to be brave. Time to go home and try it out");

          // seventh prompt, loop:
          var numGlasses = parseInt(prompt("You definitely made the right choice, this wine is so delicious that you could probably finish a whole bottle by yourself. How many glasses have you had, anyway?"));
          while(numGlasses < 6) {
            if (numGlasses < 2) {
              alert("Party's just getting started, refill that cup!");
            }
            else if (numGlasses < 4) {
              alert("Ok you might be responsible for that spill on the carpet but go ahead, that bottle's not empty.");
            }
            else {
              alert("You could get one last pour out of this bottle, go for it!");
            }
            numGlasses = parseInt(prompt("Wine night has been winding down, might want to check the supply levels. How many drinks have you had now?"));
          }

          //ENDPATH7
          alert("Good news is you found a new favorite. Bad news is you finished a whole bottle PLUS some, and your friends cut you off. Until next time!");
        }

      }
      // >ENDPATH4
      else {
        alert("DANGIT! You've been caught.. ditch the basket and shout- THIS ISN'T TACO BELL!! WHERE AM I?!? -and make a run for the door. Better luck next year, kid.");
      }

    }
    //ENDPATH3
    else {
      alert("Welp. I don't see any twist-tops here. Looks like your night just ended.");
    }
  }
}

console.log('This is the Fairy Tale Menagerie text adventure. Sorry for the mess!')

var age = prompt("This game is rated T, for mild violence and subpar humor. How old are you?");
if (age > 12){
  alert("Sounds good, but I warned you about the humor.")}
else {
  alert("Eh, it's probably fine. Don't tell your mom.")}

var name = prompt("You're feeling bored sitting around at home, so you decide to take a walk through the woods. Say, what's your name, anyway?")
if (name){
  alert(name + ", huh? I don't like that. \nI'm gonna call you... Goldilocks.")}


var questionOne = prompt("So, Goldilocks, you're walking on a trail through the woods when you come to a fork in the path. Do you take the [l]eft branch or the [r]ight branch?")
if (questionOne === "l"){
  alert("Left, huh? Okay, Goldilocks, sounds good. After a little more walking, you come to a cottage. Looks like nobody's home, so you slip inside.")

var questionOneTwo = prompt("You wander through to the kitchen, where three bowls of porridge are set up in front of three chairs. You start to feel hungry. Which bowl should you eat, the [l]eft, [m]iddle, or [r]ight?")
  if (questionOneTwo === "l"){
    alert("Yuck! The porridge is too cold. And this chair is so hard and uncomfortable - no way you're getting comfortable here.")
      var questionTwoOne = prompt("Good thing, too, because you hear the door open in the front of the house. Uh-oh! Do you [s]tick around to see who it is, or [r]un out the back?")
        if (questionTwoOne === "s"){
          alert("You decide to wait and see if you can apologize to the homeowners. Unluckily for you, the homeowners are the Bear family. Mama Bear in particular is very upset you ate her porridge, and her claws look awfully sharp...")
          alert("THE END")
        }
        else if (questionTwoOne === "r"){
          alert("You manage to sneak out the back door safely, but you hear some roaring inside as you leave. Guess they knew you were there, and weren't too happy about it.");
          alert("You romp through the forest awhile, trying to find your way back home, when you find another cottage in the woods. Jeez, how many cottages are here in these woods?");
          var questionTwoTwo = prompt("Anyway, it's a nice looking place, and you could use a snack cause the porridge was so bad. Do you want to knock on the door? [y/n]")
            if (questionTwoTwo === "y"){
              alert("You knock on the door, and a faint voice beckons you, 'Come in, dearie!' You enter to see a weird-looking old lady lying in bed, buried in blankets and... is that a beard?");
              alert("Nope. It was fur. And whiskers. And teeth. And she was actually a wolf! And she looks awfully hungry...")
              alert("THE END.")
            }
            else if (questionTwoTwo === "n"){
              alert("You've learned your lesson and decide not to go investigating cottages in the middle of the woods. Unfortunately, you spent too much time skulking around the forest after your break-in, and the Forest Police have caught up with you. Enjoy your ten years for forced entry and burgalry!")
              alert("THE END.")
            }

        }
    }
  else if (questionOneTwo === "m"){
    alert("Ouch! This porridge is too hot. And this chair is so big and plush that you sink deep into it - you're stuck!")
    alert("So stuck, in fact, that you can't budge when the Bear family who lives here arrives home. Turns out you ate Papa Bear's porridge, and slept in his chair. He doesn't look too happy to see you, and his claws are awfully sharp...")
    alert("THE END")}
  else if (questionOneTwo === "r"){
    alert("Mmmm! This porridge is perfect! And the chair is so warm and cozy and perfectly-sized. A nap seems in order, and you doze peacefully...")
    alert("...until you wake up to find the Bear family home. Turns out you ate Baby Bear's porridge, and slept in his chair. He doesn't look too happy to see you, and his claws are awfully sharp...")
    alert("THE END")}
  }


else if (questionOne === "r"){
  alert("Right, huh? Okay, let's head right.")
  alert("So you walk down the right-side path, until you come to a clearing with a nice-looking cottage. Smells good here too, almost like... gingerbread?")

  var questionThreeOne = prompt("You wander inside the cottage to find a creepy-looking old lady bent over a hot oven. This situation seems oddly ominous to you. Do you [r]un away, or [p]ush her into the oven?")
    if (questionThreeOne === "r"){
      alert("You sneak out without her noticing, and dash away as fast as you can. Unfortunately, in your mad dash to escape, you manage to get completely lost. That lady may have been creepy-looking, but she probably would have fed you. Good luck finding dinner now!")
      alert("THE END.")
    }
    else if (questionThreeOne === "p"){
      alert("You sneak up behind the witchy-looking lady and give her a solid push. She shrieks as she topples into the oven, and you slam the door shut behind her! Job well done, you think to yourself - until the forest police arrive.")
      alert("Turns out she is, or rather, was, the Mayor's wife. Well, you'll have plenty of time to think about what you should have done while you sit in jail! What did you think this was, a game?")
      alert("THE END.")
    }
}

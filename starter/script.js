// put code console.log("You are a dog. Your owner has gone down the street to visit a neighbor, and unwittingly left the door slightly ajar. Drifting through the opening are innumerable tantalizing scents and sounds -  squirrels, discarded food, bicycles, other dogs ... everything your canine heart could desire.");
var outDoor = prompt("Do you nudge the door open with your snout, or wait patiently for your owner to return? Please answer 'nudge' or 'wait.''");

if (outDoor === "nudge") {
  var newFriend = prompt("You tentatively nudge the door open, and the world is at your paws! There is no leash to restrain you. Out of the corner of you eye, you see a flash of movement across the street, drawing your attention ... What is it?");
  if (newFriend === "cat" || newFriend === "a cat") {
    console.log("Wow, you truly have supercanine senses. You were right, it IS a cat!");
  } else {
    console.log("You step onto the porch and take a few deep sniffs - it's not " + newFriend + ", it's a cat!");
  }
} else {
  console.log("Trembling with self-restraint, you stay exactly where you are. Unfortunately for you, a breeze blows towards you, strengthening the mesmerizing scents of the world outside. It also nudges the door slightly more open. You can no longer contain yourself, and dart out the door. Soon, you see a cat!");
}


var approachCat = prompt("Do you 1. approach the cat slowly; 2. run over at top speed; or 3. attack the cat? (Answer with a number.)");
if (parseInt(approachCat) === 1) {
  console.log("You're not very familiar with cats, so you choose to approach slowly. The cat watches you approach, and hops up to a low branch of a nearby tree when you come near, but doesn't seem afraid. Suddenly, it starts speaking to you - in dog!");
  var walkSlowEatBark = prompt("'This tree has magical powers,' the cat says, 'and I am its guardian. In reward for your cautious approach, I will share the magical powers of the tree with you. All you have to do is eat a piece of bark, and you'll be able to understand human speech. But you can never tell any other creature about it.' She offers you a piece of bark. Do you eat it?");
  if (walkSlowEatBark === "yes") {
    console.log("You run over to your owner right after eating the bark, and miraculously, you can understand everything she says! You are henceforth the best-behaved dog in the world. THE END");
  } else {
    console.log("You don't trust this cat. You run back to your house, and manage to sneak in before your owner even knows you're gone. THE END");
  }
} else if (parseInt(approachCat) === 2) {
  console.log("This cat looks friendly. You shoot out like lightning towards the cat! But as soon as you come close, it climbs to the very top of a nearby tree and hisses at you. You feel rejected, and go over to your owner, who is already your friend. She takes you home. THE END");
} else {
  console.log("This cat is obviously an evil creature! You bare your teeth and run after the cat, barking and growling ferociously. The cat scampers up a tree, but you continue to bark loudly at it. So loudly, in fact, that your owner notices you, and runs over.");
  var ownerApproach = prompt("Do you a. forget about the cat and go greet your owner, or b. continue barking ferociously?");

  if (ownerApproach === "a") {
    var tugBack = prompt("Your owner is saying something to you, but all you can make out is your name. She grabs you by the collar. Do you try to tug away from her? Yes or no?");
    if (tugBack === "yes") {
      console.log("You tug, but can't escape. And now your owner is yelling at you, too. You slink back to the house, tail between your legs. THE END"); // ending 1
    } else {
      console.log("You go with your owner back to the house, ending your adventure. But later on you get a belly rub, so it's not such a bad day. THE END"); // ending 2
    }
  } else {
    console.log("The cat hisses at you, and then says, 'If you don't stop barking now you'll regret it!!!!''");
    var goQuietly = prompt("'You speak dog????' you ask. The cat sighs. 'Your owner's nearly here. If you go quietly, I'll meet you in your backyard in five minutes and tell you the whole story.' Do you quiet down? Yes or no?");
    if (goQuietly === "yes") {
      console.log("Your owner grabs you by the collar, and brings you back to the house. You head straight into the backyard, and wait until the sun goes down. The cat never shows up! You knew she was up to no good. THE END");
    } else {
      console.log("Your owner is about five barks away, and you decide not to shut up until she's next to you.");
      for (var numBarks = 0; numBarks < 5; numBarks++) {
        if (numBarks < 1) {
          console.log("You bark.");
        } else {
          console.log("You bark again.");
      }
    }
      console.log("Right before your owner reaches you, the cat jumps on your back, claws outstretched. It stays just long enough for the claws to pierce your skin, then runs away. Your owner grabs your collar, and immediately takes you to the vet. You knew that cat was up to no good. THE END");
    }
  }
}
here!
// put code here!

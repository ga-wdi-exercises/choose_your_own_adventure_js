

var firstPrompt = prompt(
" you are a reporter for fox news and just learned that rainbows are made from unicorn farts. You hear there is a sighting at a near by rainbow and rush to the scene.  Standing before you is a unicorn, do you: \n a) approach the unicorn  b) stand there in shock and awe"
);

if (firstPrompt == "a") {
  var secondPrompt = prompt("You approach the unicorn and it charges towards you and impails you with its horn directly through your heart killing you instantly. \n congratulations, you are dead.")
} else {
  var secondPrompt = prompt("you now realize you're actually on acid and unicorns don't exist. You start to do a count down from 10 hoping your mind will come back to reality. \n Enter the number 10.  ")
}

if (secondPrompt == 10 ) {
  for(var i=10; i >=0; i--)
    console.log(i);
}
// next step
else {

}

console.log("Im done ith the loop")
var thirdprompt = prompt("you come out of the trance and need to make a decision: \n 1. go home 2. realize you are at home 3. look for the unicorn again")
var fourthprompt = prompt("It doesn't matter what you chose I need to turn in this homework so your adventure has ended.")

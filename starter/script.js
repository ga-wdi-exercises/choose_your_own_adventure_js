function spongeBob() {

  var question = prompt("You overslept and are late for your morning shift at the Krusty Krab, what do you do?\nRUSH to get ready or CALL your boss Mr. Krabs to tell him you're running late").toUpperCase();

  switch(question) {

    case 'RUSH':
      var question2a = prompt("You quickly put on your square pants and rushed to work but you forgot to leave the food out for your pet snail Gary, what do you do?\nRETURN to your home to get the food out or KEEP running to work").toUpperCase();
      var question3a = prompt("Which do you value more, your PET snail or your JOB?").toUpperCase();
      if (question2a === 'RETURN' && question3a === 'PET') {
        alert("Time is money for Mr. Krabs and since you ain't about it, you're fired!");
      } else if (question2a === 'KEEP' && question3a === 'JOB') {
        alert("Gary doesn't think you love him enough and ran away and joined a pack of stray pet snails");
      } else if ((question2a === 'RETURN' && question3a === 'JOB') || (question2a === 'KEEP' && question3a === 'PET')){
        alert("Your shift actually starts in the evening and you left the food out for Gary last night so you were worrying for nothing -_- ");
      } else {
        alert("one of your responses was not valid")
      }
    break;

    case 'CALL':
      var question2b = prompt("You call Mr. Krabs to tell him that you're late, he asks why. Do you LIE or tell the TRUTH").toUpperCase();
      var question3b = prompt("Are you a good liar? YES or NO").toUpperCase();
      if (question2b === 'LIE' && question3b === 'YES') {
        alert("Mr. Krabs believed your lie about fending off a nematode infestation and excused your tardiness");
      } else if (question2b === 'TRUTH') {
        alert("Mr. Krabs appreciates your honestly and will only punish you by not paying you for the day");
      } else if (question3b === 'NO'){
        alert("Mr. Krabs knows you're lying and he doesn't care what your reason is, HE NEEDS YOU TO MAKE HIM MONEY");
      } else {
        alert("ne of your responses was not valid");
      }
    break;

    default:
    alert("Please type a valid response");
  }
}

function plankton() {

  var question = prompt("You're plotting to steal the Krabby Patty formula again but you have your restaurant, The Chum Bucket, to run.\nDo you attempt to STEAL the formula again or are you going to try to MANAGE your own restaurant").toUpperCase();

  switch(question) {

    case 'STEAL':
      var question2a = prompt("You have three top-secret plan: do you choose PLAN A, PLAN Z, or PLAN E: The Most Evilest Evil Plan of All Time").toUpperCase();
      if (question2a === "PLAN E") {var question2a = prompt("So PLAN E is still in the work and you haven't come up with anything, so you'll just have to choose between PLAN A and PLAN Z for now").toUpperCase();}
      var question3a = prompt("The plan must be executed correctly to work, can you follow directions well? YES or NO").toUpperCase();
      if (question2a === 'PLAN A' && question3a === 'YES') {
        alert("You send a robotic Mr. Krabs in and successfully convinced SpongeBob to show you where the formula is!");
      } else if (question2a === 'PLAN Z' && question3a === 'YES') {
        alert("You were able to trick Mr. Krabs in giving you the formula by bribing him with fake gold doubloons!");
      } else if (question3a === 'NO'){
        alert("Things did not go according to plans cuz you can't follow directions. YA DONE GOOF UP");
      } else {
        alert("One of your responses was not valid")
      }
    break;

    case 'MANAGE':
      var question2b = prompt("Well you first need some employees, you have two possible candidate to choose from: PATRICK or SQUIDWARD").toUpperCase();
      var question3b = prompt("How much are you going to pay them? (enter an integer)");
      if (question2b === 'PATRICK') {
        alert("Patrick is so dumb that he doesn't care how much you pay him, he'll accept the job anyway");
      } else if (question2b === 'SQUIDWARD' && question3b < 9) {
        alert("Squidward thinks he deserves to be paid more than that, guess you're stuck with Patrick");
      } else if (question2b === 'SQUIDWARD' && question3b > 9){
        alert("Squidward begrudingly accepts your offer, at least you pay more than the Krusty Krabs");
      } else {
        alert("One of your responses was not valid")
      }
    break;

    default:
    alert("Please type a valid response");
  }
}

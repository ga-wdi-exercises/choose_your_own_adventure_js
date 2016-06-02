// put code here!
var userName = prompt("What is your name?");
console.log("Nice to meet you, " + userName);

console.log("A zombie apocalypse has taken place in the U.S. You are the only survivor "
+ "left in your city. What do you want to do? " +
"(a) stay and hide  " +
"(b) stand up and fight  " +
"(c) sneak away");

var choiceOne = prompt("Write the corresponding letter for the choice you picked:").toLowerCase();

switch (choiceOne) {
  case ('a'):
    console.log("You chose to stay and hide.");
    console.log("Where do you want to hide? (a) in the basement (b) in the pantry.")
    var hidingPlace = prompt("Write the corresponding letter for the choice you picked:").toLowerCase();
    if (hidingPlace === "a"){
      console.log("You survived: 1 month - zombies broke into your home and blocked" +
    "your path to the kitchen. You starved.");
    }
    else if (hidingPlace === "b"){
      console.log("You survived: 3 months. Smart idea to hide near provisions, but you dropped a can of soup," +
    "and attracted a swarm of zombies. They broke into the pantry and killed you.");
    }
    else {
      while ((hidingPlace != "a") || (hidingPlace != "b") )
        prompt("Sorry, your only options are (a) in the basement or (b) in the pantry. Try again.")
    }
    break;



  case ('b'):
    console.log("You chose to stand up and fight.");
    console.log("What weapon do you pick to fight with? " +
    "(a) a baseball bat (b) a kitchen knife (c) a gun");

    var weapon = prompt("Write the corresponding letter for the choice you picked:").toLowerCase();
    if (weapon === "a"){
      console.log("Nice, you survived: 1 year. The bat enabled you to fend off the walking dead" +
    " by aiming right for their heads. But, unfortunately, one day you were surrounded, and the bat just" +
    " wasn't a good enough weapon to kill 53 zombies at once.");
    }
    else if (weapon === "b"){
      console.log("You survived: 1 day. As you were stabbing the shoulder of a zombie, he bit you in the arm, and you turned.");
    }
    else if (weapon === "c"){
      console.log("You surived: 1 hour. You shot yourself on accident.");
    }
    break;



  case ('c'):
    console.log("You chose to sneak away. On the road, you run into a fellow traveler who says she is the cure " +
    "to the zombie infestation. She's been bit but she hasn't turned yet. She asks you to " +
    " help her get to a research center across the country. Do you decide to help her? " +
    "(a) no, you already have enough on your plate (b) yeah, why not");

    var decisionTime = prompt("Write the corresponding letter for the choice you picked:").toLowerCase();
    if (decisionTime === "a"){
      console.log("You survived: 5 years. Being on the move enabled you to be one step ahead of the zombies " +
      "for quite a bit of time. But as their numbers increased, so did the probability of your death. So you died.");
    }
    else if (decisionTime === "b"){
      console.log("You survived: forever. A little altruism goes a long way. Congrats, you helped saved humanity " +
      "by getting the girl to the research center. They found a cure and you were first to recieve the vaccination. You win.");
    }
    break;

}

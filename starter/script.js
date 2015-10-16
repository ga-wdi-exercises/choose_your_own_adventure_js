
confirm("Welcome to Where's Charlie?!");
var color = prompt("Pick a color. Gray or Blue")
if (color === "Gray")
{
  console.log("Yes! That's my favorite color too!");
} else {
  console.log ("Not my favorite, but I'll still let you play.");
}
console.log("That question has nothing to do with why you're here. I was just having a little fun.");
console.log("I need you to help me. Someone posted a Missing Persons flyer in my neighborhood for their pet stink bug named Charlie");
var userAnswer = prompt("Are you going to help me find Charlie? yes or no");
if(userAnswer === "yes")
{
  console.log("Thank you! I will give you 30% of the reward money when we find Charlie!");
  var direction = prompt("Let's start. Should we go towards the left or right? l or r ");
  if(direction === "l")
  {
    console.log("This block is kind of dangerous. I hope you can fight.");
    var fight = prompt("Oh no! We have to beat the garbage monsters to move forward. Do you want to fight? yes or no");
    if(fight === "yes")
    {
      console.log("Yeah! You Rock!");
      console.log("You beat the banana monsters! Look! He dropped a bag. Let's see what's in it.");
      var bag = prompt("Do you want to see what's in the bag? yes or no");
      if(bag === "yes")
      {
        console.log("Dude!! It's Charlie the stink bug!!");
        console.log("We're going to be rich!! I'm so happy! I'll give you 35% instead of 30% now! Whoohooo!!");
      } else {
        console.log("No worries! I appreciate you beating the monsters. I'll look in the bag.")
        console.log("Dude!! It's Charlie the stick bug!!");
        console.log("Since I'm the one that found Charlie, I can't give you 30% anymore, but I'll give you 20% for the fight.");
        console.log("Call me later. Bye!!");
      }
    } else {
      console.log("You have no heart. I will find him on my own. More money for me.");
    }
  } else {
    console.log("Ohh there's a Smoothie King down here. We must stop.");
    var drink = prompt("My treat. Do you like Banana or Strawberries? B or S");
    if(drink === "B")
    {
      console.log("There's something in your smoothie. Look!")
      var smoothie = prompt("Dude is that Charlie the stink bug? yes or no");
      if (smoothie === "yes")
      {
        console.log("Dude we're going to be rich!!");
        console.log("I'm so happy! I'll give you 35% instead of 30% now! Whoohooo!!");
      } else {
        console.log("Ummmm that is Charlie silly! Let me see!");
        console.log("Yes! I'm going to be rich.")
        console.log("I found Charlie. You were going to drink him. I'll call you later after I get the reward money. Bye!")
      }
    } else {
      var strawberry = prompt("How's your strawberry smoothie? great or nasty");
      if (strawberry === "great")
      {
        console.log("My banana smoothie is great too")
      } else {
        console.log("I'm sorry to hear that. I now feel like I wasted my money.")
      }
      console.log("Let's keep going. We need to find Charlie.");
      console.log("Oh boy! Here comes trouble. It's my GA Teacher.");
      var teacher = prompt("Hey Qadriyyah! If you and your friend want to get pass you have to answer this question. Do you know what an integer response is? yes or no");
      if (teacher === "yes")
      {
        console.log("I don't believe you. There wasn't one included in your Adventure homework. You need to get to Office Hours asap!");
      } else {
        console.log("Well you need to find out soon. Get to Office Hours or Google the answer.");
      }
      console.log("Phew! I'm stessed. Ok let's keep moving so I can get back to studying.");
      console.log("Hey I hear something");
      var noise = prompt("Do you hear that? yes or no");
      if (noise === "yes")
      {
        console.log("Let's go see what it is!");
      } else {
        console.log("You need a hearing aid. Follow me!");
      }
      console.log("OMG!! It's coming from that paper bag!");
      var bag = prompt("Are you going to get the bag? yes or no");
      if (bag === "yes")
      {
        console.log("Look it's moving!! Hurry!");
      } else {
        console.log("I'll just get it! You're no help!");
      }
      console.log("OMG!! It's Charlie the Stink Bug!!")
      console.log("We're going to be rich!! Let's go!!")
    }
  }
} else {
  console.log("You have no heart. I will find him on my own. More money for me.");
}

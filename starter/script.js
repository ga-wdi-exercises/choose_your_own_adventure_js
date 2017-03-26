// put code here!
// Don't finish your entire pack of gum!

// "Welcome to High School! What's your name?"
// Prompt Input Name
var name = prompt("Welcome to High School! What's your name?").toLowerCase();
// Hi + name + ! Here's a welcoming gift *hands you a 10 pack of gum*

// var input1 = ['straight','right','left','exit'];

// "Try not finish it all in one day! Time for a long day of classes. Which direction will you go? Straight, Left, Right, or Exit?"
var direction = prompt("Hi" + " " + name + "! Here's a welcoming gift *hands you a 10 pack of gum* Try not finish it all in one day! Time for a long day of classes. Which direction will you go? Straight, Left, Right, or Exit?").toLowerCase();

switch(direction) {
    case 'straight':
        var teacher = prompt("You run into a teacher who thinks you're tardy and is very upset. Do you 1: offer them some gum or 2: explain your way out?").toString();
        if (teacher === '1') {
          alert("Is that a bribe? That's detention and I'm confiscating that gum! GAME OVER")
        } else {
          alert("My mistake, I have a hard time distinguishing the bell from the ringing in my ears. Have a great day!")
        }
        break;
    default:
        prompt("No info")
}

// Straight
  // You run into a teacher who thinks you're tardy and is very upset. Do you 1: offer them some gum or 2: explain your way out?
    // 1: Offer a piece of gum so they get off your case
      // "Is that a bribe? That's detention and I'm confiscating that gum!"
        // Game over!!
    // 2: Explain your way out of the situation
      // "My mistake, I have a hard time distinguishing the bell from the ringing in my ears. Have a great day!"

// Left
  // You take the long way to class. You're feeling a little peckish from the walk so you eat a piece of gum. Someone sees it and asks for a piece. Do you 1: oblige or 2: refuse?"
    // 1: Sure, I still have 9 pieces left!
      // "Aww thanks!" you catch a whiff of their horrifying breath and your noble act lifts your mood for the entire day.
    // 2: Don't give them a piece. You only have 9 left!
      // "You're a jerk" the someone breathes hot stinky breath in your face, you pass out from the toxins and they steal your entire pack.
        // Game over!!

// Right
  // Your crush is walking towards you. They're wearing a t-shirt that says I HEART GUM. Do you want to 1: Offer them your entire pack or 2: Offer them a piece?
    // 1: Your crush really appreciates it... but you have no more gum left so
      // Game over!!
    // 2: Your crush really appreciates it but resents you for not sharing the rest.
// Exit
  // Now that you're playing hookie, your gum is pretty much safe. You've go two options of where to go: 7-11 or the park?
    // 7-11: Distraught and freshly out of gum, the sales clerk assumes you stole their last piece and takes it from you.
      // Game over!!
    // The Park: It's a great day outside! You eat a piece of gum and enjoy the sun.

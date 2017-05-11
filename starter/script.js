
//This is just for fun
myAudio = new Audio('SENTOKI.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();
//This game works by the way, but I tried nesting the game
//inside the event listener just so the audio tag could proc
//but it isn't for some reason.
//This will be the initial starting point.
    // $("button").click(function()){
    var optionSelected0 = prompt("Praymas: Hello there player. This is your chance to find out who you really are. Are you ready? Answer \"yes\", \"no\", \"maybe\".");
    if (optionSelected0 == "yes") {
        alert("Well I can tell you, but go get me a sandwhich first. Otherwise, you will never know the truth. PS. I like the steak sandwhiches from subway.");
    } else if (optionSelected0 == "no") {
        alert("Well. One less tubbie to deal with. Bye."); alert("THUMP!"); alert("You're stranded inside of a TV with a remote in your hand")
    } else if (optionSelected0 == "maybe") {
        alert("You've vanished in limbo unknowingly for the past 100 years with no hope of escaping");
    }  else if (optionSelected0 !== "no", "yes", "maybe")
        alert("You must answer yes, no, or maybe my friend.");

    var steak = prompt("So. You decided to go on the journey for the cheese steak sandwhich. You see 3 paths and one sign. \"Will you continue to help me my friend? Choose wisely.\" Answer \"Yes\" \"No\" \"Maybe\".");
        if (steak == "yes") {
        alert("The ground from the path you chose started disappearing. Ahead of you seems to be a formation of tiles forming some form of plains.");
    } else if (steak == "no") {
        alert("The world as you can see it starts bending. A new sign falls from the sky the was above say \"I hope you understood the movie Inception\" You start noticing that the world is slowly getting bent into a smaller cubed world.");
    } else if (steak == "maybe") {
        alert("ZIIIIIIIIP!"); alert("You been sucked in a world of what seems to be a cubed room that lasts forever with no way out. It seems like a maze with a bunch of text on the wall asking \"Why maybe?\" You have a timer of 5 minutes to find a way out before you're stuck here forever.");
    }  else if (steak !== "no", "yes", "maybe")
        alert("You must answer yes, no, or maybe my friend.");

        var tubbie = prompt("So you're now in a world full of teletubbies dancing for what seems to last forever. Are you going to say \"Screw it\" and join them? Answer \"yes\", \"no\", \"maybe\".");
        if (tubbie == "yes") {
        alert("You start noticing from the bottom up you've started transforming into a tubbie. Enjoy your stay here (:");
    } else if (tubbie == "no") {
        alert("You've escaped and entered a to a path branching into 3 paths."); alert("You seem to be still alive. For now.")
    } else if (tubbie == "maybe") {
        alert("You noticed that it has enraged all the tubbies transforming into a giant version of barney. They've come to destroy you and you cannot find a way to escape.");
    }  else if (tubbie !== "no", "yes", "maybe")
        alert("You must answer yes, no, or maybe my friend.");

            var limbo = prompt("You've fallen into a world of endless space. You see three signs. One floating above and below. You also then see theres one literally in front of you. Get either one from \"Below\" \"Above\" \"In Front\"")
        if (limbo == "In Front") {
        alert("The signs says \"Enjoy your stay here forever!\"");
    } else if (limbo == "Above") {
        alert("You grabbed the sign to read the texts. However you noticed that you appeared in a realm of what appears to be the deep sea on earth. However you start noticing some strange things.");
    } else if (limbo == "Below") {
        alert("");
    }  else if (limbo !== "no", "yes", "maybe")
        alert("You must answer yes, no, or maybe my friend.");

            var plains = prompt("\"yes\", \"no\", \"maybe\".");
        if (plains == "yes") {
        alert("");
    } else if (plains == "no") {
        alert("");
    } else if (plains == "maybe") {
        alert("");
    }  else if (plains !== "no", "yes", "maybe")
        alert("You must answer yes, no, or maybe my friend.");

// });
// When trying to have one line run from each function, its not. 


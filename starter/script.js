// put code here!

var choice5;

var name = prompt("Now Playing: The Matrix Re-Reloaded! Starring:","Enter your name");

alert("I would've stuck with Keanu Reeves, but I'm not the director, you are!");

alert("You wake up after a late night of haxing. Suddenly you notice that someone has taken control of your computer!");

alert("Follow the white rabbit, "+name+".");

alert("Then--a knock at the door! A white rabbit tattoo!");

var choice1 = prompt("Do you (f)ollow the white rabbit or (o)rder Dominos and watch the next season of The Hills?","Enter f or o");

if (choice1=="f") {
    alert("Wow do you always go to underground raves on Tuesday nights? Pretty badass/irresponsible.");
}

if (choice1=="o") {
    alert("Your intrusive friends browbeat you into submission (rightfully) and you go out anyway.");
}

alert("You're at the night club, which is playing Rob Zombie for some reason, because who in their right mind doesn't dance to Rob Zombie? (What?!)");

alert("Someone of the opposite gender sidles up behind you.");

alert("'Hello, "+name+",' the person says.");

alert("'How do you know that name?' you respond.");

alert("'I know a lot about you. I've been wanting to meet you for some time.'");

var choice2 = prompt("Do you (e)ngage or (g)et away from this admitted stalker?","Enter e or g");

if (choice2=="e") {
    alert("'Who are you?' you ask.");

    alert("'My name is Trinity.'");

    alert("'THE Trinity? The Trinity that cracked the Kansas City Chuckie Cheese?'");

    alert("'That was a long time ago,' they respond.");

    alert("'That was like two months ago!'");

    alert("'That sounds right.'");

    alert("A long, awkward pause drags on. 'I always thought you were the opposite gender.'");

    alert("Trinity muses on how you made an uncomfortable moment even more awkward. 'Most people of your gender do.'");

    alert("'That was you on my computer, wasn't it?'");

    alert("'Yes,' they say. 'I brought you here to warn you, "+name+".  You are in a lot of danger...'");

    alert("The next day, you're late for work. Maybe don't go clubbing on Tuesdays.");

    alert("You get a package at your desk. That's odd--you didn't order anything.");

    alert("You open it and pull out a cell phone from 1998. It looks hilarious now.");

    alert("Suddenly, the phone rings! It's AT&T.");

    var choice3 = prompt("'Are you (s)atisfied with your long distance coverage or would you like to (c)hange to AT&T?'", "Enter s or c");

    if (choice3 == "s") {
        alert("You hang up. Time is money, after all.");

        alert("Suddenly the phone rings again!!!!");

        alert("'Hello,' a deep and pleasing voice says.");

        alert("'Morpheus?!' you ask.");

        alert("'Wait, how on Earth did you guess that right away?'");

        alert("'I...I don't know. I answer every call that way. You know, just in case.'");

        alert("'OK...' Morpheus says. 'That's objectively weird. Anyway, I've been watching you, "+name+", and I want to meet you.'");

        alert("'LOL and you called me weird?'");

        alert("'LOL indeed, "+name+". But you have to listen to me. There is a break room at the end of the row of cubicles. Inside that break room is a quilt. I need you to jump out the window of the break room and use the quilt as a parachute.'");

        var choice4 = prompt("Do you (u)se the quilt as a parachute or (t)urn yourself in to the agents?", "Enter u or t");

        if (choice4 == "u") {
            alert("For a fleeting moment, you feel the quilt parachute working. Then reality sets in and you plummet 40 stories. You definitely have guts, though!");

            alert("MOVIE OVER!!!");
        }
        else {
            alert("You're escorted from the building by a couple suits. Despite being apprehended for badass computer haxin, everyone you work with assumes it's something filthy.");

            choice5 = "captured";
        }
    }
    else {
        alert("After thirty minutes on the phone, you now have unlimited calls to 28 countries and over 3000 foreign language cable channels. You are not good at saying no.");

        alert("Also, Morpheus called like 4 times but you missed every one talking to Chad from AT&T. So the agents picked you up. Idiot.");

        choice5 = "captured";
    }
    }
else {
    alert("'Umm, I think I left my shower light on, I have to go.'");

    alert("Feeling a bit mystified, you walk home. Only now Rob Zombie is stuck in your head.");

    alert("The next day, you're late for work. Maybe don't go clubbing on Tuesdays.");

    alert("You get a package at your desk. That's odd--you didn't order anything.");

    alert("You open it and pull out a cell phone from 1998. It looks hilarious now.");

    alert("Suddenly, the phone rings! It's AT&T.");

    var choice3 = prompt("'Are you (s)atisfied with your long distance coverage or would you like to (c)hange to AT&T?'", "Enter s or c");

    if (choice3 == "s") {
        alert("You hang up. Time is money, after all.");

        alert("'Hello, "+name+".'");

        alert("'Morpheus!'");

        alert("'Yes. Did you enjoy your talk with Trinity?'");

        alert("'Who?'");

        alert("'The person from the rave last night.'");

        alert("You struggle to remember. 'I didn't meet anyone last night.'");

        alert("A pause. 'Re--really?'");

        alert("'No, I left pretty early.'");

        alert("'So I guess I need to go over everything now?'");

        alert("You shrug. 'I guess. What's this about?'");

        alert("You hear a sigh through the phone. 'Do you have a pen or something?'");

        alert("You shuffle some papers and pretend to look around. 'No.'");

        alert("'Then just listen to me, "+name+". There is a break room at the end of the row of cubicles. Inside that break room is a quilt. I need you to jump out the window of the break room and use the quilt as a parachute.'");

        var choice4 = prompt("Do you (u)se the quilt as a parachute or (t)urn yourself in to the agents?", "Enter u or t");

        if (choice4 == "u") {
            alert("For a fleeting moment, you feel the quilt parachute working. Then reality sets in and you plummet 40 stories. You definitely have guts, though!");

            alert("MOVIE OVER!!!");
        }
        else {
            alert("You're escorted from the building by a couple suits. Despite being apprehended for badass computer haxin, everyone you work with assumes it's something filthy.");

            choice5 = "captured";
    }
    else {
        alert("After thirty minutes on the phone, you now have unlimited calls to 28 countries and over 3000 foreign language cable channels. You are not good at saying no.");

        alert("Also, Morpheus called like 4 times but you missed every one talking to Chad from AT&T.");

        alert("And the agents arrived almost twenty minutes ago and have been standing in your cubicle waiting for you to finish. Needless to say, they no longer consider you a threat.");

        alert("MOVIE OVER!!!");
    }

}

if (choice5 == "captured") {
    
}

// put code here!

var choice5;

var name = prompt("Now Playing: The Matrix Re-Reloaded! Starring:","Enter your name");

console.log("I would've stuck with Keanu Reeves, but I'm not the director, you are!");

console.log("You wake up after a late night of haxing. Suddenly you notice that someone has taken control of your computer!");

console.log("Follow the white rabbit, "+name+".");

console.log("Then--a knock at the door! A white rabbit tattoo!");

var choice1 = prompt("Do you (f)ollow the white rabbit or (o)rder Dominos and watch the next season of The Hills?","Enter f or o");
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
if (choice1=="f") {
    console.log("Wow do you always go to underground raves on Tuesday nights? Pretty badass/irresponsible.");
}

if (choice1=="o") {
    console.log("Your intrusive friends browbeat you into submission (rightfully) and you go out anyway.");
}

console.log("You're at the night club, which is playing Rob Zombie for some reason, because who in their right mind doesn't dance to Rob Zombie? (What?!)");

console.log("Someone of the opposite gender sidles up behind you.");

console.log("'Hello, "+name+",' the person says.");

console.log("'How do you know that name?' you respond.");

console.log("'I know a lot about you. I've been wanting to meet you for some time.'");

var choice2 = prompt("Do you (e)ngage or (g)et away from this admitted stalker?","Enter e or g");
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
if (choice2=="e") {
    console.log("'Who are you?' you ask.");

    console.log("'My name is Trinity.'");

    console.log("'THE Trinity? The Trinity that cracked the Kansas City Chuckie Cheese?'");

    console.log("'That was a long time ago,' they respond.");

    console.log("'That was like two months ago!'");

    console.log("'That sounds right.'");

    console.log("A long, awkward pause drags on. 'I always thought you were the opposite gender.'");

    console.log("Trinity muses on how you made an uncomfortable moment even more awkward. 'Most people of your gender do.'");

    console.log("'That was you on my computer, wasn't it?'");

    console.log("'Yes,' they say. 'I brought you here to warn you, "+name+".  You are in a lot of danger...'");

    console.log("The next day, you're late for work. Maybe don't go clubbing on Tuesdays.");

    console.log("You get a package at your desk. That's odd--you didn't order anything.");

    console.log("You open it and pull out a cell phone from 1998. It looks hilarious now.");

    console.log("Suddenly, the phone rings! It's AT&T.");

    var choice3 = prompt("'Are you (s)atisfied with your long distance coverage or would you like to (c)hange to AT&T?'", "Enter s or c");
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    if (choice3 == "s") {
        console.log("You hang up. Time is money, after all.");

        console.log("Suddenly the phone rings again!!!!");

        console.log("'Hello,' a deep and pleasing voice says.");

        console.log("'Morpheus?!' you ask.");

        console.log("'Wait, how on Earth did you guess that right away?'");

        console.log("'I...I don't know. I answer every call that way. You know, just in case.'");

        console.log("'OK...' Morpheus says. 'That's objectively weird. Anyway, I've been watching you, "+name+", and I want to meet you.'");

        console.log("'LOL and you called me weird?'");

        console.log("'LOL indeed, "+name+". But you have to listen to me. There is a break room at the end of the row of cubicles. Inside that break room is a quilt. I need you to jump out the window of the break room and use the quilt as a parachute.'");

        var choice4 = prompt("Do you (u)se the quilt as a parachute or (t)urn yourself in to the agents?", "Enter u or t");
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        if (choice4 == "u") {
            console.log("For a fleeting moment, you feel the quilt parachute working. Then reality sets in and you plummet 40 stories. You definitely have guts, though!");

            console.log("MOVIE OVER!!!");
        }
        else {
            console.log("You're escorted from the building by a couple suits. Despite being apprehended for badass computer haxin, everyone you work with assumes it's something filthy.");

            choice5 = "captured";
        }
    }
    else {
        console.log("After thirty minutes on the phone, you now have unlimited calls to 28 countries and over 3000 foreign language cable channels. You are not good at saying no.");

        console.log("Also, Morpheus called like 4 times but you missed every one talking to Chad from AT&T. So the agents picked you up. Idiot.");

        choice5 = "captured";
    }
    }
else {
    console.log("'Umm, I think I left my shower light on, I have to go.'");

    console.log("Feeling a bit mystified, you walk home. Only now Rob Zombie is stuck in your head.");

    console.log("The next day, you're late for work. Maybe don't go clubbing on Tuesdays.");

    console.log("You get a package at your desk. That's odd--you didn't order anything.");

    console.log("You open it and pull out a cell phone from 1998. It looks hilarious now.");

    console.log("Suddenly, the phone rings! It's AT&T.");

    var choice3 = prompt("'Are you (s)atisfied with your long distance coverage or would you like to (c)hange to AT&T?'", "Enter s or c");
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    if (choice3 == "s") {
        console.log("You hang up. Time is money, after all.");

        console.log("'Hello, "+name+".'");

        console.log("'Morpheus!'");

        console.log("'Yes. Did you enjoy your talk with Trinity?'");

        console.log("'Who?'");

        console.log("'The person from the rave last night.'");

        console.log("You struggle to remember. 'I didn't meet anyone last night.'");

        console.log("A pause. 'Re--really?'");

        console.log("'No, I left pretty early.'");

        console.log("'So I guess I need to go over everything now?'");

        console.log("You shrug. 'I guess. What's this about?'");

        console.log("You hear a sigh through the phone. 'Do you have a pen or something?'");

        console.log("You shuffle some papers and pretend to look around. 'No.'");

        console.log("'Then just listen to me, "+name+". There is a break room at the end of the row of cubicles. Inside that break room is a quilt. I need you to jump out the window of the break room and use the quilt as a parachute.'");

        var choice4 = prompt("Do you (u)se the quilt as a parachute or (t)urn yourself in to the agents?", "Enter u or t");
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        if (choice4 == "u") {
            console.log("For a fleeting moment, you feel the quilt parachute working. Then reality sets in and you plummet 40 stories. You definitely have guts, though!");

            console.log("MOVIE OVER!!!");
        }
        else {
            console.log("You're escorted from the building by a couple suits. Despite being apprehended for badass computer haxin, everyone you work with assumes it's something filthy.");

            choice5 = "captured";
        }
    }
    else {
        console.log("After thirty minutes on the phone, you now have unlimited calls to 28 countries and over 3000 foreign language cable channels. You are not good at saying no.");

        console.log("Also, Morpheus called like 4 times but you missed every one talking to Chad from AT&T.");

        console.log("And the agents arrived almost twenty minutes ago and have been standing in your cubicle waiting for you to finish. Needless to say, they no longer consider you a threat.");

        console.log("MOVIE OVER!!!");
    }

}

if (choice5 == "captured") {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    console.log("The man across from you looks suspiciously like the guy who played Elrond.");

    console.log("'As you can see, we've had our eye on you for some time, "+name+".'");

    console.log("'You are here because we need your help.'");

    console.log("'We know that you have been contacted by a certain individual.'");

    console.log("'All we are asking is your cooperation in bringing a known terrorist to justice.'");

    var choice6 = prompt("Do you (a)ccept or (r)eject the deal?", "Enter a or r");
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    if (choice6 == "a") {

        console.log("Wow. Way to go, narc!");

        console.log("MOVIE OVER!!!");
    }

    else {
        console.log("'Yeah.' you respond. 'Wow. That sounds like a real good deal. But I think I have a better one. How about I give you the finger and you give me my gosh darn phone call?!'");

        console.log("The agent sneers. 'You disappoint me, "+name+".'");

        console.log("Much later, someone who is clearly important asks you, 'Are you the One?'");

        var choice7 = prompt ("Well, (a)re you or are you (n)ot?");
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        if (choice7 == "a") {

            console.log("Wrong! You are overly confident. And thus you fail!");

            console.log("MOVIE OVER!!!");
        }

        else {
            console.log("Good answer! I mean, it's wrong, but...Nice.");

            var choice8 = prompt("So are you going to try to (s)ave Morpheus or (f)orget about him?");
            console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
            if (choice8 == "f") {

                console.log("That would not be very cinematic.");

                console.log("MOVIE OVER!!!");
            }
            else {
                console.log("Alright, now we're cooking.");

                console.log("FYI you end up saving the human race. Go ahead and add that to the ol' resume.");

                console.log("MOVIE OVER!!!...But a trilogy is born!");
            }
        }
    }
}

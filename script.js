/*
RICK AND MORTY CYOA

1. Enter Name

2. Who to hang with today? Rick, Morty, Jerry

Rick:
  3. What's the objective for today?
    -Troubleshoot your battery problems
      -You and rick are transported into the car battery microverse. A mad scientist in the battery microverse has invented a microverse to power his world. You enter the microverse's microverse... Where does it end?
    -Gamble some shmeckles at Blipz and Chitz
      You enter the Roy simulation game. To begin the game, what year do you want Roy to be born?
        <1900: Life was tough back then. You score 89,687, good enough for 162nd place. Rick laughs at your poor performace.
        1900 - 1988: You score 249,976, good enough for 7th place! Rick scores higher...
        1989: You score high enough for first place! Everyone loves you and you've earned Rick's respect.
        1990 - 1999: You score 249,976, good enough for 7th place! Rick scores higher...
        2000+: Roy is born too late for your sensibilities, kids these days... Game over before you reach 8th grade.

Morty:
  -It's Saturday after a long school week and Morty wants to unwind. What to do?
    3. -Hang out with some friends at the mall
      THERES NO TIME FOR THAT MORTY. YOU GOTTA HELP
        -Help Rick
          -Grab a screwdriver, Rick shoots the Screwdriver just in time to defeat the floobiewoop. You earn 500 shmeckles for your help.
        -Dont help Rick
          -Game Over

      -See if Rick wants to watch some interdimensional cable on TV
       Score! what are we watching today?
        -Two Brothers: The Movie
          FINALLY RELEASED ON TV:
          Two brothers. In a van. And then a meteor hit. And they ran as fast as they could. From giant cat-monsters. And then a giant tornado came. And that's when things got knocked into twelfth gear...
            A Mexican...armada shows up. With weapons made from to- tomatoes. And you better betch'ur bottom dollar that these two brothers know how to handle business.
            In! 'Alien...Invasion Tomato Monster Mexican Armada Brothers...Who Are Just Regular Brothers Running...in a Van from an...Asteroid and All Sorts of Things: The Movie'.
            Hold on! There's more. Old women are comin'! And they're also in the movie and they're gonna come...and cross...attack...these two brothers. But let's get back to the brothers because they're- they have a strong bond! You don't wanna know about it here, but I'll tell you one thing.
            The Moon. It comes crashing into Earth! And whaddya do then? It's two brothers and I- and...and they're gonna...it's called 'Two Brothers' ...'Two Brothers'...it's just called 'Two Brothers'!
        -How They Do It
          This week's episode: The Plumbus.
          Make sure you add enough fleeb.
        -Gazorpazorpfield
          Man, Gazorpazorpfield sure was pissed off in this episode.

Jerry:
-Wow, really? You picked the wrong conceptual horse, here. Ok, how many jobs can you help Jerry apply to?
  for each number listed, each job application will be denied:
  for (var i = 1, i <= jobsApplied; i++) {
  console.log("Job application: "+i+" STATUS: DENIED")
}



*/

var userName = prompt("Welcome to the Rick & Morty CYOA! Enter your name to begin:");
var hang1 = prompt("Hello, "+userName+". Who would you like to hang with today? (R) Rick, (M) Morty, (J) Jerry")
var hang = hang1.toUpperCase()

//Code for Rick outcome below
if (hang == "R") {
    var rickChoice1 = prompt("It's a slow summer day, Rick wants to know if you want to help him (F) fix the spaceship battery or (B) spend the day gambling shmeckles at Blips and Chitz.")
    var rickChoice = rickChoice1.toUpperCase()
//Fix battery
    if (rickChoice == "F") {console.log("You and rick are transported into the car battery microverse. A mad scientist in the battery microverse has invented a microverse to power his world. You enter the microverse's microverse... After countless Inception-style levels, you resolve the battery issue. Rick awards you 200 shmeckles.")
    }
//Blips and Chitz
    else if (rickChoice == "B") {
        var roy1 = prompt("You enter the Roy simulation game. To begin the game, what year do you want Roy to be born?")
        var roy = parseInt(roy1)
        if (roy===1989) {console.log("You score high enough for first place! Everyone at Blips and Chitz loves you and you've earned Rick's respect. +1,000,000 Shmeckles.")}
        else if (roy <=1900) {console.log("Life was tough back then. You score 89,687, good enough for 162nd place. Rick laughs at your poor performace.")}
        else if (roy >= 2000) {console.log("Roy is born too late for your sensibilities, kids these days... Game over before you reach 8th grade. Rick tries to cheer you up with some ice cream.")}
        else if (1900 < roy < 1989) {console.log("You score 249,976, good enough for 17th place! Rick scores higher... You had an ok day, I guess.")}
        else if (1989 < roy < 1999) {console.log("You score 249,976, good enough for 17th place! Rick scores higher... You had an ok day, I guess.")}
    }
//Invalid Rick choice:
    else {console.log("You have not selected a valid input... GAME OVER.")}
}

//Hang with Morty
else if (hang == "M") {
    var mortyChoice1 = prompt("It's Saturday after a long school week and Morty wants to unwind. How do Morty and "+userName+" unwind? (T) See if Rick wants to watch interdimensional cable, (M) waste time at the mall where Morty's friends are")
    var mortyChoice = mortyChoice1.toUpperCase()

//Watch TV
    if (mortyChoice == "T") {
        var tv1 = prompt("Rick: Score! What are we watching today? (T) Two Brothers: The Movie, (H) How They Do It, (G) Gazorpazorpfield")
        var tv = tv1.toUpperCase()
        if (tv=="T") {console.log("FINALLY RELEASED ON TV Two brothers. In a van. And then a meteor hit. And they ran as fast as they could. From giant cat-monsters. And then a giant tornado came. And that's when things got knocked into twelfth gear...A Mexican...armada shows up. With weapons made from to- tomatoes. And you better betch'ur bottom dollar that these two brothers know how to handle business. In! 'Alien...Invasion Tomato Monster Mexican Armada Brothers...Who Are Just Regular Brothers Running...in a Van from an...Asteroid and All Sorts of Things: The Movie'. Hold on! There's more. Old women are comin'! And they're also in the movie and they're gonna come...and cross...attack...these two brothers. But let's get back to the brothers because they're- they have a strong bond! You don't wanna know about it here, but I'll tell you one thing. The Moon. It comes crashing into Earth! And whaddya do then? It's two brothers and I- and...and they're gonna...it's called 'Two Brothers' ...'Two Brothers'...it's just called 'Two Brothers'! " +userName+" had a chill day.")}
        else if (tv=="H") {console.log("Today's episode, the plumbus. Rick always wanted to know how those were made. " +userName+" had a chill day.")}
        else if (tv=="G") {console.log("Morty: Jeez, Rick, Gazorpazorpfield sure was pissed off today. " +userName+" had a chill day.")}
        }
//go to Mall 
    else if (mortyChoice == "M") {
            var rick1 = prompt("Rick storms in and says: THERE'S NO TIME FOR THAT RIGHT NOW MORTY & "+userName.toUpperCase()+"! YOU GOTTA HELP ME RIGHT NOW. (H) Help Rick, (D) Don't help")
            var rick = rick1.toUpperCase()
            //Help Rick
            if (rick == "H") {console.log("You grab a screwdriver nearby and toss it to Rick. He quickly grabs an accelerator he has laying around to shoot the screwdriver at the giant floobiedip that was lunging. It dies! " +userName+" helped save the day!")}
            //Don't help Rick
            else {console.log("Rick is left without help, Morty and "+userName+" never see Rick again. Game over.")}
        }
//Invalid Morty choice
    else {console.log("You have not selected a valid input... GAME OVER.")}
}

//Hang with Jerry, why would you do that?
else if (hang == "J") {
    var jerry1 = prompt("Wow, really? Ok, but you really backed the wrong conceptual horse on this one... Jerry's wife, Beth, insists he stops bringing everyone down all day and finally get a job. How many jobs does "+userName+" help Jerry apply to today?")
    var jerry = parseInt(jerry1)
    for (var i = 1; i <= jerry; i++) {console.log(userName + " helped Jerry apply to job "+i+". Status: DENIED.")}
}

else {console.log("You have not selected a valid input... GAME OVER.")}

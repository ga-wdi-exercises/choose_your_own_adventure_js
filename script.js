// Declare variables.
var username, choice;

// Prompt user for his/her name.
username = prompt( "What is your name?" );
console.log( "Nice to meet you, " + username + "." );

// Prompt user which year he/she wants to go to.
while ( true ) {
  choice = prompt( "What year would you like to go to? (YYYY)" );
  choice = Number( choice );
  if ( choice ) {
    break;
  } else {
    alert( "Invalid input" );
  }
}

if ( choice >= 2015 ) {
  console.log( "I see you're a fan of Back to the Future 2." );
  choice = prompt( "Would you rather deal with Biff, or Griff? (B: Biff / G: Griff)" );
  if ( choice.toUpperCase() === "B" ) {
    console.log( "Hmm, interesting. Biff is angry and has a cane." );
    choice = prompt( "Do you stand and fight, or run away like a coward? (S: Stand / R: Run )" );
    if ( choice.toUpperCase() === "S" ) {
      console.log( "Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure." );
    } else {
      console.log( "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice." );
    }
  } else if ( choice.toUpperCase() === "G" ) {
    console.log( "Griff is asking you if you are in, or out." );
    choice = prompt( " What do you say? (I: In / O: Out)" );
    if ( choice.toUpperCase() === "I" ) {
      console.log( "Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you." );
    } else {
      console.log( "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure." );
    }
  }
} else if ( choice >= 1985 ) { // 1985-2014
  console.log( "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015." );
  choice = prompt( "What name would you like to go by until then?" );
  if ( choice.toUpperCase() === "Calvin Klein" ) {
    console.log( "Welcome to the future, Calvin Klein." );
  } else {
    console.log( "Welcome to the future, Old Navy." );
  }
} else if ( choice >= 1955 ) { // 1955-1984
  console.log( "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance." );
  choice = prompt( "What do you do? (Y: Yes / N: No )" );
  if ( choice.toUpperCase() === "Y" ) {
    console.log( "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955." );
  } else if ( choice.toUpperCase() === "Y" ) {
    console.log( "Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist." );
  } else {
    console.log( "Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time." );
  }
} else {
  console.log( "I see you're a fan of Back to the Future 3. You've run out of nitroglycerin to get back to your own time." );
  choice = prompt( "How do you power the Time Machine? (H: Horses / M: Moonshire / T: Train)" );
  if ( choice.toUpperCase() === "H" ) {
    console.log( "Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it." );
  } else if ( choice.toUpperCase() === "H" ) {
    console.log( "You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855." );
  } else {
    console.log( "Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment." );
    choice = prompt( "What do you do? (T: Take her / L: Leave her)" );
    if ( choice.toUpperCase() === "T" ) {
      console.log( "Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her." );
    } else {
      console.log( "Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed." );
    }
  }
}

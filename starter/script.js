var answerStart = prompt("You're on a walk. You're trying to make it interesting. Give me a whole number.");
parseInt(answerStart);
var answerStartEven;
if((answerStart%2)===0){
  answerStartEven = true;
}
else {
  answerStartEven = false;
}
if(answerStartEven===true){
  var answerLeft = prompt("You see a cute dog sitting up ahead, do you pet it? (type yes/no)");
  if(answerLeft==="yes"){
    var answerLeftYes = prompt("The dog is cute, but isn't friendly, and it bites you. Do you call for help, run away, or fight the dog? (type call/run/fight)");
    if(answerLeftYes==="call"){
      prompt("'Help!' you yell. And yell. And yell. Finally, you attract someone's attention. Unfortunently, the someone is just an old, frail lady who can't help you. YOU LOSE");
    }
    else if (answerLeftYes==="run") {
      prompt("You run away as fast as you can... but it's still not fast enough. YOU LOSE");
    }
    else if (answerLeftYes==="fight") {
      prompt("You've decided to fight, but then realize that you don't know how. Punching an animal seems morally wrong... kicking doesn't seem much better... While you're still figuring out how you will approach the fight, the dog sees an opportunity and takes it. YOU LOSE");
    }
    else {
      prompt("You're not very good at following directions. :/ YOU LOSE");
    }
  }
  else if (answerLeft==="no") {
    var answerLeftNo = prompt("The dog, which had been looking at you, sees a squirrel and runs off after it. You see something glimmmer in the spot where the dog had been sitting. Do you inspect it or continue walking? (type inspect/walk)");
    if(answerLeftNo==="inspect"){
      prompt("You decide to inspect the spot. You discover a metal music box. You crank the handle, and listen to the first few notes. The dog is also listening, and upon hearing the music box, the dog runs back, and attacks you. YOU LOSE");

    }
    else if (answerLeftNo==="walk") {
      prompt("You have a perfectly normal day. Which is kind of boring. YOU LOSE");
    }
    else {
      prompt("You're not very good at following directions. :/ YOU LOSE");
    }
  }
  else {
    prompt("You're not very good at following directions. :/ YOU LOSE");
  }
}
else if (answerStartEven===false) {
  var answerRight = prompt("You pass an old lady who asks you to help her move her grocieries into her home. Do you help her? (type yes/no)");
  if(answerRight==="yes"){
    var answerRightYes = prompt("You've helped her move in all 30 cans of tomato sauce. You're very curious why she bought so many. Does she help run a soup kitchen? Or does she need a stockpile because she can't get to the supermarket very often? Seems like an intrusive question. Do you ask her about it? (type yes/no)");
    if(answerRightYes==="yes"){
      prompt("You're doing her a favor, so you figure you can ask her a question. 'Why do you have so many cans of tomato sauce?' you ask. The old lady looks at you stunned. She responds 'You ask too many questions.' Her reaction catches you off guard, and you blush and look down at your shoes, trying to think of what to say. You never get to say anything and your shoes are the last thing you see. YOU LOSE");
    }
    else if (answerRightYes==="no") {
      prompt("You keep your curiosity to yourself, and start stacking the cans in the pantry. You accidentally drop one of the cans, and when the tin breaks open, you're shocked at what you find. Inside the can was not tomato sauce, but an ear. It looks like a human ear. Best to stay calm and not let the old lady onto your revelations. You check that the old lady hasn't seen you discover this (she hasn't) and sweep the ear and can into a corner of the pantry. You shoot your a text to the police to come to the address. As you are saying goodbye to the old lady the cops arrive, taking you both into custody. You quickly clear your innocence, and the police thank you for your work. YOU WIN");
    }
    else {
      prompt("You're not very good at following directions. :/ YOU LOSE");
    }
  }
  else if (answerRight==="no") {
    var answerRightNo = prompt("You're in a rush, and you can't afford to spend time helping her. You apologize and say no. You're still running late to the meeting, but you realize that you left your papers at home. Do you go back and retrieve them? (type yes/no)");
    if(answerRightNo==="yes"){
      prompt("You run back home to get the notes and then run back to get to the meeting. You arrive very late. You look like an idiot. YOU LOSE");
    }
    else if (answerRightNo==="no") {
      prompt("You arrive at your meeting without the documents. You look like an idiot. YOU LOSE");
    }
    else {
      prompt("You're not very good at following directions. :/ YOU LOSE");
    }
  }
  else {
    prompt("You're not very good at following directions. :/ YOU LOSE");
  }
}
else {
  prompt("You're not very good at following directions. :/ YOU LOSE");
}



var start = "You have a lot of homework but there is a tech event you would like to attend.";

console.log(start);

var question1='Do you want to do your homework ("homework") or attend the event ("attend event")';

var choice1=prompt(question1);

console.log(choice1);

if (choice1=='homework') {

  var outcome1='While doing your homework you stumble across the problem. Luckily for you office hours are still going on so you can get help if you want to go back to school.';

  var question2='Do you want to go back to school ("help") or try to figure it out on your own ("DIY")?';

} else {

  var outcome1='The event was fun and you made a new contact. However, now you are already really tired and can barely concentrate much less remember or learn anything but are hesitant to go to bed before finishing because you do not have the best track record of waking up early to finish work.';

  var question2="Do you want to robotically finish it now ('homework') or go to bed and try to wake up early('bed')";

}

console.log(outcome1);

var choice2 = prompt(question2);

console.log(choice2);

if (choice2=='help') {

  var outcome2= 'Congrats you have finished your homework early and your teacher is very impressed with your perseverance.';

  var question3='The rest of the evening is yours. How would you like to spend it?';

} else if (choice2=='DIY' || choice2=='homework') {

  var outcome2='You are really stuck and have hardly accomplished anything but are really tired. You could go to bed now and try again with a fresh head tomorrow but are worried you will not wake up in time to finish everything.';

  var question3="Would you like to finish everything now ('homework') or get some rest ('bed')?";

} else {

  var outcome2=('You are in the middle of an amazing dream and still so tired and have a long day ahead of you.');

  var question3="Do you want to wake up and finish your homework? ('y' or 'n')";

}

console.log(outcome2);

var choice3=prompt(question3);

console.log(choice3);

if (choice2=='help') {

  var outcome3= 'You have a wonderful evening '+choice3+' and get to class early.';

} else if (choice1=='homework' && choice3=='homework') {

  var outcome3='You finish your homework but you are very exhausted and feel antisocial.';

} else if (choice1=='homework' && choice3=='bed') {

  var outcome3='You oversleep. Congratu-fucking-lations you did not get to meet anybody AND you did not finish your work.';

} else if (choice1=='attend event'&&choice3=='homework') {

  var outcome3= "You did everything CONGRATS!!";

} else if (choice3=='y') {

  var outcome3='You manage to do some of it but it is a lot more difficult than you expected so do not have time to complete everything. WHOOPS!';

} else if (choice2=='homework' && choice3=='bed') {

  var outcome3='Morning did not go as planned. At least you did some of it...?';

}

else {

  var outcome3='You are a piece of shit and did not even attempt to get anything done. Hope your one contact pans out...';

}

console.log(outcome3);

// put code here!

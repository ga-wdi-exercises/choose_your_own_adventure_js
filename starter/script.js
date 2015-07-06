// Game of Thrones
alert(' [You finally stumble at the gates of the keep, bloodied and tired. A voice calls over the wall.]')
var house = prompt(' "WHO GOES THERE? What house are you from?" House Targaryen (T), Lannister (L) or Stark (S)?" ');

var sex = null;
sex = prompt(' "We cannot see you from here, are you male or female?" [Enter m or f]');

while (sex != 'm' && sex != 'f'){
  alert(' "We cannot see you from here, are you male or female?"');
  sex = prompt('[Unnaccepted response - please enter m or f]');
}

if (house === 't') {
  //House Targaryen
  if (sex === 'm'){
    alert('"Ah, Lord Viserys, forgive us - we\'ve been expecting your arrival!"');
  } else {
    alert('"Ah, Lady Daenerys, forgive us - we\'ve been expecting your arrival!"');
  }
} else if (house === 'l') {
  //House Lannister
  if (sex === 'm'){
    alert('"Ah, Lord Jamie, forgive us - we\'ve been expecting your arrival!"');
  } else {
    alert('"Ah, Lady Cersei, forgive us - we\'ve been expecting your arrival!"');
  }
}
else {
  //House Stark
  if (sex === 'm'){
    alert('"Ah, Lord Robert, forgive us - we\'ve been expecting your arrival!"');
  } else {
    alert('"Ah, Lady Sansa, forgive us - we\'ve been expecting your arrival!"');
  }
}

alert("[The gates keep swing open, to reveal a small battalion of men left to defend the keep. How many do you see?]");
var battalionSize = prompt("Number of troops:");

var familyHeirloom = "my father's Valeryian steel";
if (house.toUpperCase() === 'T') {
  familyHeirloom = "my dragon eggs";
}else if (house.toUpperCase() === 'L') {
  familyHeirloom = "my family's fortunes";
}

alert('You appeal to the commander: "I need '+ Math.floor(parseInt(battalionSize/2)) +' of your best men. We must track down the survivors of the raid and retrieve '+ familyHeirloom + '! Please!"');

if (house.toUpperCase() === 'T') {
  //House Targaryen
  alert('[The gates close behind you, it appears that your wishes will not be granted...]');
  alert('"Your family never learned when its time in power was done," sneers the commander.');

  // Viserys
  if (sex === 'm'){
    alert('[ You realize that the books totally mentioned a "mother of dragons", and it\'s starting to make sense that you were never going to sit on the Iron Throne. "DAMN YOU, GEORGE R.R. MARTIN", you cry out as the soldiers bring about your demise.]');
  }
  // Daenerys
  else {
    alert('Just as the soldiers begin to close in on you, a blazing inferno streaks across the sky. Your dragon, Drogon (creative name, right?) swoops in, crushing half of the men and quickly burning the rest with quick blasts of fire. The end.');
    alert('Yep, just like that. You prepared for 5 seasons to cross to Westeros, for this. Bravo.');
  }

} else {

  //House Stark or Lannister
  alert('[The gates close behind you, it appears that your wishes will not be granted...]');
  alert('"Your family never learned when its time in power was done," sneers the commander.');

  // Lannister
  if (house.toUpperCase() === 'L'){
    alert('"And your family never learned to repay its debts," you slyly reply. It was smart to pay those soldiers in advance, and your Lannister instincts have save you once again. That commander will regret trying to turn on your house...');
  }
  // Stark
  else {
    alert('"What you forget, is that you are in the North, Commander," you slyly reply. Your men quickly surround the traitor, before allowing your Direwolf a tasty meal. Wouldn\'t the show have been more satisfying for the viewers if it all worked out this way?');
  }

}

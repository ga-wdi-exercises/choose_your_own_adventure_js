//
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }


var name = prompt(`What's your name?`);
var day = prompt(`Welcome to DisneyWorld, ${name}! What day of the week is today?`);
console.log(day);
if (day == 'Sunday' || day == 'Saturday'){
  alert(`Bummer, lines are always longer on weekends!`)
  } else {
    alert(`Hey! Somebody got the day off. Weekday lines are shorter lines!`)
  };


var a = prompt(`Do you want to go to the Star Wars section or be lame? S/L`);
if (a == 's') {
  var b= prompt(`Do you want to ride the ride or watch the show? R/S`);
    if (b == 'r') {
      var f = prompt(`How many time will you ride? #`);
        if (f>10) {
          alert(`Wow. You must have gone all the way to the Outer Rim. Hope you enjoyed your visit!`);
        } else {
          alert(`Guess you had fun. And look- you still have time to get a churro before the park closes!
          Hope you enjoyed your visit`);
        }
    } else {
      var c = prompt(`The show is looking for volunteer jedi. Do you want all those years of practicing in your bathrobe to go to waste? Y/N`);
        if (c == 'n') {
          alert(`Whoops! Turns out park security isn't as impressed with your sweet moves. You are politely but firmly escorted from the park. Hope you enjoyed your visit`);
        } else {
          alert(`You watch the show. The force isn't strong with those kids`); //Possible loop
        }
      }
} else {
      var i = prompt(`Do you get in line for Space Mountain or wander the park? S/W`);
      if (i == 's') {
        var j = prompt(`The line is awfully long. Do you want to hang in or bail? H/B`);
          if (j == 'h') {
            alert(`That was so worth it. Hope you enjoyed your visit`);
          } else {
            alert(`Looks like there's no line for Its a Small World. Let's try that.
            That was both terrifying and boring. Hope you enjoyed your visit`);
          }
      } else {
        var m = prompt(`You're wandering the pack, and you see Princess Jasmine. What do you do? propose/photo`);
        if (m === 'propose') {
          alert(`How inappropriate! She slaps you and security escorts you out. Hope you enjoyed your visit`);
        } else {
          alert(`You ask if you can take a picture with her. You get a wonderful memento of the day. Hope you enjoyed your visit`);
        }
      }
}

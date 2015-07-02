// put code here!

console.log(" What is your drink? ");

var myFunc = function(){
  console.log("***** ***** ***** ***** ***** ***** *****")

}

console.log("Hello everyone! What season of year is now?");
myFunc();
var answer = prompt("Spring, Summer, Fall or Winter?	(Please enter '1', '2', '3' or '4' according to variants.)");

//1 - Spring
if(parseInt(answer) == 1){
  console.log("So, this is spring now. Getting warmer and nicer outside. What time you usually wake up? Are you early bird or night owl?");
  myFunc();
  var birdOwl1 = prompt("Early bird or Night owl 	(Please enter 'b' or 'o' according to variants.)");
  if(birdOwl1 == 'b'){
    console.log("some text for spring bird "); 
    myFunc();
    }
    else if(birdOwl1 == 'o'){
    console.log("Celery French 75 Cocktails Recipe here is for you! ");
    console.log("some text for spring owl");
    myFunc();
    } else {
    	console.log("You didn't answer a question. No drink for you!");
    }
  }
  //2 - Summer
  else if (parseInt(answer) == 2){
  console.log("So, this is summer now. GHot and humid outside. What time you usually wake up? Are you early bird or night owl?");
  myFunc();
  var birdOwl2 = prompt("Early bird or Night owl 	(Please enter 'b' or 'o' according to variants.)");
  if(birdOwl2 == 'b'){
    console.log("some text for summer bird"); 
    myFunc();
    }
    else if(birdOwl2 == 'o'){
    console.log("some text for summer owl");
    myFunc();
    } else {
    	console.log("You didn't answer a question. No drink for you! (Refresh the page and take survey again.)");
    }
  }
    //3 - Fall
if(parseInt(answer) == 3){
  console.log("So, this is fall now. Getting colder and rainy outside. What time you usually wake up? Are you early bird or night owl?");
  myFunc();
  var birdOwl3 = prompt("Early bird or Night owl 	(Please enter 'b' or 'o' according to variants.)");
  if(birdOwl3 == 'b'){
    console.log("some text for fall bird"); 
    myFunc();
    }
    else if(birdOwl3 == 'o'){
    console.log("some text for fall owl");
    myFunc()
    } else {
    	console.log("You didn't answer a question. No drink for you!");
    }
  }
  //2 - Winter
  else if (parseInt(answer) == 2){
  console.log("So, this is winter now. Snow and cold outside. What time you usually wake up? Are you early bird or night owl?");
  myFunc();
  var birdOwl4 = prompt("Early bird or Night owl 	(Please enter 'b' or 'o' according to variants.)");
  if(birdOwl4 == 'b'){
    console.log("some text for winter bird") ;
    myFunc();
    }
    else if(birdOwl4 == 'o'){
    console.log("some text for winter owl");
    myFunc();
    } else {
    	console.log("You didn't answer a question. No drink for you! (Refresh the page and take survey again.)");
    }
  }
   
console.log("JS connected")

//thoughts about this: should I use jquery or really stick with vanilla?
// could use a combo.
//whats the learning objective here?


// Rules and contents
// Any Path that the user goes down must ask the user at least 3 questions
// must have a total of seven destinations
// Ending Zones:
// 1) Niflheim: The World of Fog and Mist
// 2) Muspelheim: The land of fire
// 3) Asgard: Home of the gods
// 4) Midgard: Home of the humans (earth)
// 5) Jotunheim: Home of the Giants
// 6) Vanaheim: Home of the Vanir
// 7) Alfheim: Home of the light elves
// 8) Svartalfheim: Home of the Dwarves
// 9) Helheim: Home of the dishonorable dead

// one potential ending:
// “For you I’ve become the most subtle creature of them all: a civilized evil, genteel and seductive. An evil you endure because you need it’s 
//service- even though that very endurance plucks loose the underpinnings of your morality. An evil that causes you to question the definition of your identity, that blurs the line between dark and light until you’re no longer certain 
//which is which, or how the two are different- That’s what you fear most, priest.”


// -------------------------------------

 //the script below will be used to input text back onto 
 //the page, what we wana do is apend the info with next in the 
 //chain but keep the previous directions down the tree will 
 //need to "some text to enter"/ replace it with the return value of a 
 // function that selects the next possible path. -->

// ------function below for above-----
// 



function insertText () {
    document.getElementById('td1').innerHTML = "Some text to enter";
}

// function that on press of enter or buttons submits example / go/ back/ restart/ the users input
// what are my paramaters and what operation/s do i want to run? 


// set event listeners for the 3 buttons and a keypress of enter

$(document).ready(funct(){

})

// var adventurer = {
// 	name:(nametextentered) => var nametext => nametext.toString();
// 	optionOne: (options),
// 	optiontwo: response two,
// 	optionthree: response three,
// 	optionfour: response four,
// 	optionfive: response one,
// 	optionsix: response one,
// 	optionseven: response one


// }

function gameRunThrough(returnistrue){// returnistrue is the result of a click on the button to start the game might not be necesaary
	// if answer from question 1 is equal to 
	//

}

// function Pathuser(namestr){
// 	this.name = namestr;
// 	this.age = '';
// 	this.location = checkOnEarth(){
// 		console.log("got here");

// 	}
// 	this.sex = '';

// } 
var practiceUser = new Pathuser(namePrompt);

var namePrompt = prompt("Hello, please state your name for the record?");
console.log(namePrompt);
var userAge = promt("How old are you?");
console.log(userAge);
var userLocation = promt("Are you on Earth?");

console.log(user.location);
var gender = promt("Are you male or female");


// Show the info on the user if complete
//
//
// function showProps(obj, objName) {
//   var result = "";
//   for (var i in obj) {
//     // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//     if (obj.hasOwnProperty(i)) {
//       result += objName + "." + i + " = " + obj[i] + "\n";
//     }
//   }
//   return result;
// }
// function initializeUser(name, age, location, sex){
// 	user.name = name;
// 	user.age = age;
// 	user.location = location;
// 	user.sex = sex;
// }






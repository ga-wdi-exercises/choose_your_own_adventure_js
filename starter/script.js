// put code here!
//Adding Functions
function yourMission() {
  var prisoner = prompt("Hello prisoner.  You're trapped in an 8ft by 8ft by 8ft box.  Choose from the following items to free yourself: No.2 pencil (p), Chainsaw (c) or a Spoon (s).");
  if (prisoner === "c"){
    alert("You're a smart prisoner, you'll be free in no time!");
    free();
  }
  else if (prisoner === "p"){
    alert("What are we doing, writing our way out?")
    pencil();
  }
  else {
    alert("You've watched too much 'Shawshank Redemption'!")
  }
}

//Free is the function that's invoked if the prisoner chooses the Chainsaw
function free(){
  var sideOfBox = prompt("Which side of the box are you using the chainsaw on first? (l)Left, (r)Right, (f)Front, (b)Back, (c)Ceiling, (t)Floor");
  if (sideOfBox === "f") {
    alert("Wow, this works?")
  }
  else if (sideOfBox === "l") {
    alert("To the front")
  }
  else {
    alert("Seriously?")
  }
}

//Pencil function is invoked if the prisoner selects the No.2 Pencil
function pencil() {
  var lead = prompt("Now how exactly do you plan to escape with a No. 2 pencil?  (0)Write, (1)Draw, (2)Scrape, (3)Poke, (4)Self mutilate");
  switch (lead) {
     case "0":
         alert("Let's write to your captor, genuis!");
         break;
     case "1":
         alert("Can you draw a door?");
         break;
     case "2":
         alert("Maybe try scraping one of the corners.");
         scrape(); //teddy bear
         break;
     case "3":
         alert("What type of material is the box made of?");
         break;
     case "4":
         alert("Are you sure you really want to harm yourself?");
         break;
       }
   }
   //Scrape function
   function scrape() {
     var numOfScrapes = prompt("How many scrapes would it take to set yourself free?  If you pick a number closes to the correct answer, you're free to go!");
     if (numOfScrapes < 10000) {
       alert("We're sorry, you're stuck here!");
     }
     else {
       alert("You're free to go!");
     }
   }

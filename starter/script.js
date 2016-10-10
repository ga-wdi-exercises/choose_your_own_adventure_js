// put code here!
function pizzaAdventure() {
  var you = prompt("Hello! it's late and you're hungry. You need to find the quickest way to Vinnie's Pizza shop before close! Good luck! Choose a starting point: a) bus, b) bike, or c) subway");  if (you === "c"){
    alert("That's a good start!");
    start();
    }
    else if (you === "a"){
     alert("Sorry, it's a friday night...you definitely hit traffic")
     taxi();
   }
   else {
     alert("Maybe try one of the other options!")
   }
 }

//choosing the subway!
 function start(){
   var trainLine = prompt("There are two lines that go towards the restaurant: a) M line, which is shorter but delayed. and b) L line, which is longer, or c) F train, which is out of the way");
   if (trainLine === "b") {
     alert("Good move with the L! the M line is backed up 45 minutes! you have 25 minutes after your stop")
   }
   else if (trainLine === "a") {
     alert("err..you're stuck! too many delays, now you only have 15 minutes to spare after you get off")
   }
   else {
     alert("you have about 10 minutes, but you have to hurry!! you're far!")
   }
 }

 //if choosing bus
 function move() {
   var busStop = prompt("Now that your off at your stop, what next? remember how much time you have! a) 10 minute walk, but you have to go through a danger neighborhood. b) ask for a ride. c) run! the longer, but safer way");
   switch (lead) {
      case "a":
          alert("Er bad decision. You get mugged. it's new york, dont do that.");
          break;
      case "b":
          alert("Sorry, you can't find a ride!");
          break;
      case "c":
          alert("run! good call. Sweaty, but You get there!");
          run();
          break;
        }
    }
    //choosing to run
    function run() {
      var running = prompt("You're gonna get there and 2-3 minutes before close! Do you a) call and place order, if it takes a bit longer, or b) just head there as fast as possible");
      if (running === "Call") {
        alert("Nice! they had the pizza ready for you, quick and easy!");
        Call();
      }
      else {
        alert("Sorry, They packed up and were ready for close. Go home and settle for cereal");
      }
    }

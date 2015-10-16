var buffer = function(){
  console.log("*******************************")
}

console.log("You want to travel to a deserted island...")
buffer()
var pathInput = prompt("You can either take a plane or a helicopter..(Please enter 'p' or 'h')")

if(pathInput == "p"){
  console.log("You take the plane and everything is going well, in fact - you're ahead of scuedule. You hit some very bad turbulance and the plane crashes; you hit your head during the crash and it's all bloody now.")
  buffer()
  var responsePlaneCrash = prompt("You wounder what you want to do ... and decide to\n('b') - bandage yourself up with the left over medical supplies you could find in the cock pit.\n('w') - take a rest and wait until you feel better\n('d') - do nothing.")
  if(responsePlaneCrash== 'b'){
    console.log("You crawl to the cockpit, find the medical supplies, bandage up your bloddy head, and keep going - you want the damn treasure...blood dries; leaving the plane you see a man who has come for the same thing but he's obviously been on the island for many years and looks .")
    var rabidManResponse= prompt("He asks a question, 'How many more miles to the treasure you're looking for?'...\n('any number') - Confidently you\n('a') - you tell him it's 40 miles from where you stand")
    if(rabidManResponse== 'a'){
      console.log("The rabid man charges at you and eats you alive.... he's hungry and there's nothing to eat on the island, he can't help it.")
      buffer()
    }
    else {
      while(rabidManResponse < 100){
        var rabidManResponse = prompt("That's no where near how far it is")
      }
      console.log("The rabid dude shreeks, 'Wow " + rabidManResponse + " you must have been studying this place for years!' You tell him to wait there while you go to the bathroom in the woods (he's stupid). You continue on your journey and finally get to....Burger King, isn't that place golden?'" )
      buffer()
    }
  }
  else if(responseToRabidMan == 'w'){
    console.log("You thing the best thing to do is rest and wait to start feeling better?'")
    buffer()
    var WaitingAround = prompt("Still a little out of it from the crash, you bandage up your head as well as you can but you start feeling woosy....\n(s) - .. All the blood rushes away from your head, starving you of oxygen and you die quickly in a slow manner\n('f') - you fight through the woozy feeling start crawling and slowly work your way to you feet safely.")
    if(WaitingAround == 's'){
      console.log("You're dead!")
      buffer()
    

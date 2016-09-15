// put code here!
var adventure = prompt("What is your name, soldier?");
console.log(adventure);
var Unit = prompt("what is your rank \n Please select from the following menu: \n
\t enter E1 for Airman-Basic \n \t enter E2 for Airman \n \t enter E3 for A1C \n \t Enter E4 for NCO");
console.log(Unit);
var count = 0;
var bodyCount=0;
function myFunction()
{
  var x = document.createElement("INPUT");
  x.setAttribute("type", "number");
  x.setAttribute("value", "12345");
  document.body.appendChild(x);
}
// function shoot()
// {
//   var add = 0;
//   add ++;
// }
if (Unit == 'E1') {
    alert('Fresh meat huh? Well you picked a hell of a time to enlist. Dooms day has begun.');

  }
else if (Unit == 'E2') {
  alert(
    ('Your new to this... Just out of bmt. Hahaha go home. Youre not ready for this!'));
  var fightOrFlight = prompt('are you going to hold your commitment to support and defend or will you run to another unit?');
  console.log('A. Im ready! Ill stay and fight!!! \n B. my ASVAB was a 97, I can surely support and defend elsewhere.');
  if (fightOrFlight == 'A'||'a')
  {
    alert('Congratualtions! You honored your commitment to these US armed forces in support and defense of the constition against the alien enemies \n
    Unfortunately your unquestioned valor led to your death. The Earth was scortched under the insurmountable pressure to advance combat technologies so suddenly.');
  }
  else if (fightOrFlight == 'B'|| 'b') {
    alert('Congrats! You honored your commitment to these US armed forces in support and defense of international law. Your unquestioned valor and courage \n
    may have saved the Earth from sure destruction. You were placed in the Intel unit that uncovered the single alien vulnerability.');
  }
}

else if (Unit == 'E3') {
  alert(
  ('Youre not new to this huh? I need you to prove your skills. press the button below to shoot the target. Youll need to land 5 shots to successfully enter this unit.'));
  var skills = 0;
  function shoot()
  {
    while(shots<5)
    {
      shots += 1;
      skills +=1;
    }
      document.getElementById("shots").innerHTML = shoot;
    if (shots == 4)
    {
      alert('we dont need any more over confident pricks. Youve been shot in the head.')
    }
    else
    {
      alert('Youve beat the game.')
    }
  }
else if (Unit == 'E4') {
    alert(
      ('Youre no stranger to war. How many bodies are on that M6 of yours?'));
      myFunction();
      parseInt(x);
      var ex = x.toString();
  }
else if (isNan(Unit)) {
  alert("WRONG maggot! Try that again");
  count ++;}
else {
  alert("sorry we've fucked up");
}

//confirm('I am ready to play any game you have')
var hunger = prompt("What level of Hunger am I? 1-5 1 being the lowest and five is the hightest")
if(hunger < 5)
{
  console.log("You will feast on onions tonight")
}
else {
  console.log("Humans will eat your skin")
}

 var hungry = prompt("Let's eat! Are you super hungry (YES or NO)?").toUpperCase();
     var resturant = prompt("Did you get a sandwhich or a sub?").toUpperCase();
     if(hungry === 'YES' || resturant === 'YES') {
       console.log("You ate way too much and now must sleep for 10 years.");
     } else {
       console.log("You're still hungry and must feast more!!!");
     }
     var pasta = prompt("If you are still hungry eat more!(Yes or NO)?").toUpperCase();
     if(pasta === 'YES' || resutrant === 'YES') {
       console.log("No more food now you must pay up")
     } else {
       console.log("Fine we will accept late payments this one time");
     } put code here!

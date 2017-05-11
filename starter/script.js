$(document).ready(function(){

  var submit= $("#submit");
  submit.on("click",startgame);

  function startgame(){
    var playername=$("input").val();
    console.log("Hi " + playername + "game started");
    $("body").html("")
    var choice = prompt("Hi "+playername+" please enter 1 to play maths question or enter 2 to play English!!!");
    playerchoice(choice)
  }

  function playerchoice(decision){
    if (decision==1)
    {
      console.log("Maths selected");
      mathsQuestion();
    }
    else if (decision==2)
    {
      console.log("English selected");
      nextLetterQuestion();
    }
    else {
      console.log("Wrong entry");
      alert("Please enter valid value");
      startgame();
    }
  }
  function nextLetterQuestion(){
    for (i=0;i<10;i++)
    {
      if (i==0)
      {
        var answer=prompt("what the next alphabet next to G");
      }
      else{
        answer=prompt("what the next alphabet next to" + answer);
      }
    }
    alert("Hahahah, I have no time to check your answer, but I hope you are not bad.lol");
  }
  function mathsQuestion(){
    var level= parseInt(prompt("Please enter the level you by entering 1 for easy 2 for meduim or 3 for hard"));
    switch(level){
      case 1:
      easymaths();
      break;
      case 2:
      meduimmaths();
      break;
      case 3:
      hardmaths();
      break;
      default:
      alert("please enter valid value (1 or 2 or 3) only!!!");
      mathsQuestion();
    }
    function easymaths(){
      var answer=prompt("What is the value of 5*2?")
      if (answer==10){
        alert("You are good , please choose another level!!!");
        mathsQuestion();
      }
      else{
        alert("You are  wrong, please try again!!!");
        easymaths();
      }
    }
    function meduimmaths(){
      var answer=prompt("What is the value of 0.5+25/2?")
      if (answer==13){
        alert("You are good , please choose another level!!!");
        mathsQuestion();
      }
      else{
        alert("You are  wrong, please try again!!!");
        meduimmaths();
      }
    }
    function hardmaths(){
      var answer=parseInt(prompt("What is the value of 0.5+25/2-5?"))
      if (answer==8){
        alert("You are good in Maths, please test you alphabet skill also!!!");
        nextLetterQuestion();
      }
      else{
        alert("You are  wrong, please try again!!!");
        hardmaths();
      }
    }

}
})

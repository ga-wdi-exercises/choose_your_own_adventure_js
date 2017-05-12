// put code here!
var pathOne = ["Question 1", "Question 2", "Question 3"];
var pathTwo = ["Question 4", "Question 5", "Question 6"];

var firstQuestion = ["Answer 1", "Answer 2", "Answer 3"];
var secondQuestion = ["Answer 4", "Answer 5", "Answer 6"];
var thirdQuestion = ["Answer 7", "Answer 8", "Answer 9"];

//this is for the first question: ****************************************************
function listOfAnswers(elm) {
  switch (elm.id) {
    case "ans_2":
    case "ans_6":
    case "ans_7":
      alert ("Congratulations! You have reached to Mordor.");
      break;
    default:
      alert ("Wrong destination. You must return back!");
      break;
  }
};

function listFirstAnswers(){
  var innerElement = "";
  for (i = 0; i < firstQuestion.length; i++)
  {
    innerElement = innerElement + "<li><a id=ans_" + (i + 1) + " href='#' onClick=listOfAnswers(this)>" + firstQuestion[i] + "</a></li>";
  }
  document.getElementById('main#1').innerHTML = innerElement;
};

function listSecondAnswers(){
  var innerElement = "";
  for (i = 0; i < secondQuestion.length; i++)
  {
    innerElement = innerElement + "<li><a id=ans_" + (i + 4) + " href='#' onClick=listOfAnswers(this)>" + secondQuestion[i] + "</a></li>";
  }
  document.getElementById('main#1').innerHTML = innerElement;
};

function listThirdAnswers(){
  var innerElement = "";
  for (i = 0; i < thirdQuestion.length; i++)
  {
    innerElement = innerElement + "<li><a id=ans_" + (i + 7) + " href='#' onClick=listOfAnswers(this)>" + thirdQuestion[i] + "</a></li>";
  }
  document.getElementById('main#1').innerHTML = innerElement;
};

function listOfQuestions (elm){
  switch(elm.id){
    case "quest_1":
      listFirstAnswers();
      break;
    case "quest_2":
      listSecondAnswers();
      break;
    case "quest_3":
      listThirdAnswers();
      break;
    case "quest_4":
      listFourthAnswers();
      break;
    case "quest_5":
      listFifthAnswers();
      break;
    case "quest_6":
      listSixthAnswers();
      break;
    default:
      break;
  }
};

function listOfPathOne() {
  var innerElement = '';
  for(i=0; i < pathOne.length; i++) {
    innerElement = innerElement + "<li><a id=quest_" + (i + 1) + " href='#' onClick=listOfQuestions(this)>" + pathOne[i] + "</a></li>";
  }
  document.getElementById('main#1').innerHTML = innerElement;
};

function listOfPathTwo() {
  var innerElement = '';
  for(i=0; i < pathTwo.length; i++) {
    innerElement = innerElement + "<li><a id=quest_" + (i + 1) + " href='#' onClick=listOfQuestions(this)>" + pathTwo[i] + "</a></li>";
  }
  document.getElementById('main#1').innerHTML = innerElement;
};

//this is for the second question:**********************************************************************

function listSecondAnswers(){
  var innerElement = "";
  for (i = 0; i < secondQuestion.length; i++)
  {
    innerElement = innerElement + "<li><a id=ans_" + (i + 4) + " href='#' onClick=listOfAnswers(this)>" + secondQuestion[i] + "</a></li>";
  }
  document.getElementById('main#1').innerHTML = innerElement;
};

function listOfQuestions(elm){
  switch(elm.id){
    case "quest_1":
      listFirstAnswers();
      break;
    case "quest_2":
      listSecondAnswers();
      break;
    case "quest_3":
      listThirdAnswers();
      break;
    default:
      break;
  }
};

function listOfPath() {
  var innerElement = '';
  for(i=0; i < pathOne.length; i++) {
    innerElement = innerElement + "<li><a id=quest_" + (i + 1) + " href='#' onClick=listOfQuestions(this)>" + pathOne[i] + "</a></li>";
  }
  document.getElementById('main#1').innerHTML = innerElement;
};
//this is for the third question:**********************************************************************

function listThirdAnswers(){
  var innerElement = "";
  for (i = 0; i < secondQuestion.length; i++)
  {
    innerElement = innerElement + "<li><a id=ans_" + (i + 7) + " href='#' onClick=listOfAnswers(this)>" + thirdQuestion[i] + "</a></li>";
  }
  document.getElementById('main#1').innerHTML = innerElement;
};

function listOfQuestions(elm){
  switch(elm.id){
    case "quest_1":
      listFirstAnswers();
      break;
    case "quest_2":
      listSecondAnswers();
      break;
    case "quest_3":
      listThirdAnswers();
      break;
    default:
      break;
  }
};

function listOfPath() {
  var innerElement = '';
  for(i=0; i < pathOne.length; i++) {
    innerElement = innerElement + "<li><a id=quest_" + (i + 1) + " href='#' onClick=listOfQuestions(this)>" + pathOne[i] + "</a></li>";
  }
  document.getElementById('main#1').innerHTML = innerElement;
};

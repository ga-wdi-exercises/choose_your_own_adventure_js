$(document).ready(function() {
  console.log("Hangman Game");
});

var btnEnterYerWord =           $("#btnEnterYerWord");
var textInputPlayerOnesWord =   $("#textInputPlayerOnesWord");
var playerOnesWordInput;
var playerOnesWordSplitArray;
var btnPlayerTwosGuess =        $("#btnPlayerTwosGuess");
var textInputPlayerTwosGuess =  $("#textInputPlayerTwosGuess");

btnEnterYerWord.on('click', function (event) {
  event.preventDefault();
                              console.log("in click handler btnEnterYerWord");
                              console.log(textInputPlayerOnesWord.val());
  playerOnesWordInput = textInputPlayerOnesWord.val();
                              console.log("heres playerOnesWord:" + playerOnesWordInput);
  // playerOnesWordSplitArray = playerOnesWordInput.split(/(?!$)/);     //this works: //"overpopulation".split(/(?!$)/)
  playerOnesWordSplitArray = playerOnesWordInput.split('');     //this works: //"overpopulation".split(/(?!$)/)
                              console.log("heres playerOnesWordSplitArray:" + playerOnesWordSplitArray);
  fillOutVannaWhitesWall();
});

function fillOutVannaWhitesWall() {                       //console.log('filling in Vanna');
  playerOnesWordCssClass = $("#playerOnesWord");
  for (i=0; i < playerOnesWordSplitArray.length; i++){
    var thisLetter = playerOnesWordSplitArray[i];         //console.log('thisLetter:' + thisLetter);
    var div = $('<div id="div   ' + i + ' class="aLetter" >  ' + thisLetter + '  </div>');    //console.log('were on div: ' + i);
    playerOnesWordCssClass.append(div);
  }
}




btnPlayerTwosGuess.on('click', function (event) {
  event.preventDefault();
                              console.log(textInputPlayerTwosGuess.val());
  playerTwosGuess = textInputPlayerTwosGuess.val();
  comparo();
});
function comparo() {                                //console.log('filling in Vanna');
  //^^ dont use /////// maybe... addClass('playerTwosGuess')//////////////
  for (i=0; i < playerOnesWordSplitArray.length; i++){
    console.log('playerTwosGuess: ' + playerTwosGuess);
                              console.log( 'thisWord: ' + playerOnesWordInput);
                              console.log( 'thisGuess:' + playerTwosGuess);

    if ($.inArray(playerTwosGuess, playerOnesWordSplitArray) !== -1){
                              console.log( 'thisGuess:   ' + playerTwosGuess + '   is in thisWord:  ' + playerOnesWordInput);
      $('#playerTwosGuess').append('+');    //console.log('were on div: ' + i);
    }
    else {
                              console.log( 'suckah' );
    }

  }
}

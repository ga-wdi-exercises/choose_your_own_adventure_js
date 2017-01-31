$(document).ready(function() {
  console.log("Hangman Game");
});

var btnWord = $("#btnWord");
var boxWord = $("#boxWord");
var word;
var arrWord;
var btnGuess = $("#btnGuess");
var boxGuess = $("#boxGuess");

btnWord.on('click', function(event) {
  event.preventDefault();
  console.log("in click handler btnWord");
  console.log(boxWord.val());
  word = boxWord.val();
  console.log("heres playerOnesWord:" + word);
  // word = word.split(/(?!$)/);     //this works: //"overpopulation".split(/(?!$)/)
  arrWord = word.split(''); //this works: //"overpopulation".split(/(?!$)/)
  console.log("heres word:" + word);
  vannaWhite();
});

function vannaWhite() {
  console.log('filling in Vanna');
  // dom = $("#playerOnesWord");
  // dom = ('#playerOnesWord');
  for (i = 0; i < word.length; i++) {
    letter = word[i];
    console.log('letter:' + letter);
    console.log('div + i: ' + 'div' + i);
    div = $('<div id="div' + i + ' class="guess" style="color: white;">  ' + letter + '  </div>'); //console.log('were on div: ' + i);
    $('main').append(div);
  }
}


btnGuess.on('click', function(event) {
  event.preventDefault();
  console.log(boxGuess.val());
  guess = boxGuess.val();
  comparo();
});

function comparo() { //console.log('filling in Vanna');
  //^^ dont use /////// maybe... addClass('guess')//////////////
  for (i = 0; i < word.length; i++) {
    console.log('guess: ' + guess);
    console.log('thisWord: ' + word);
    console.log('thisGuess:' + guess);

    if ($.inArray(guess, word) !== -1) {
      console.log('thisGuess:   ' + guess + '   is in thisWord:  ' + word);
      $('.guess').append('+');
    } else {
      console.log('suckah');
    }

  }
}

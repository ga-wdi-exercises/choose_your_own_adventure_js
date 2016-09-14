// put code here!
$input = $('#user-input');
$submit = $('#submit');
$output = $('#output');
$submit.on('click', pressEnter);

var whereAmI;

function pressEnter(e) {
  e.preventDefault();
  text = $input.val();
  $input.val('');
  adventure.continue(text);
}

var adventure = {
  player: {},
  start: function(input){
    adventure.player.name = input;
    display("Hi, " + input + ". Would you like to play a game? (y/n)")
  }
}

function display(text) {
  $output.html(text);
}

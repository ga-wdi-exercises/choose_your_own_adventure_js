//Greet player
var name = prompt("What is your name?");
alert("Hello " + name +".");

var event = prompt("You've been invited to three events: a party, a happy hour and a coding meetup. Which do you choose? (P, H, M)");

if(event === "P"){
  alert("Parties are awesome!")

  var someoneKnown = prompt("You arrive at the party and see someone you know. Is it your Ex, an old Roommate, or a Boss? (E, R, F)")
      if (someoneKnown === "E"){
        alert("You walk up to your ex and say 'Hi', but blank on the name. Who were your exes?")

          var myExes = ["Chris", "Jamie", "Leslie", "Cameron"];

          for (var i = 0; i < myExes.length; i++){
            alert(myExes[i]);
          }
      }
      else if (someoneKnown === "R") {
        alert("You walk up to your old Roommate and reminisce about days drinking and partying.")
      }
      else {
        alert("You see your Boss and quietly try to escape the back door.")
      }

} else if(event === "H"){
  alert("Happy hours are awesome! Let's get drunk!")

  var pickupLine = prompt("You arrive at the happy hour and see someone really cute. Which pickup line do you use: 1. 'I think you must be suffering from a lack of vitamin me.' 2. 'That's a nice shirt. Can I talk you out of it?' 3. 'If you were a transformer, you'd be Optimus Fine.' (1, 2, 3)")
      if (pickupLine === "1"){
        var drinks = prompt("Cute person laughs and offers to buy you a drink. How many do they buy you? (1, 3, 15)")
          if (drinks === "1"){
            alert("One drink is plenty. You're driving home.")
          }
          else if (drinks === "3") {
            alert("3 is a bit much. You walk home.")
          }
          else {
            alert("You spend the night in a booth in the bar.")
          }
      }
      else if (pickupLine === "2") {
        alert("Cute person ignores you and talks to their friend.")
      }
      else {
        alert("Cute person ends up being a huge transformers fan and you spend the evening talking about them.")
      }


} else {
    alert("Gotta get your coding on!")

    var lang = prompt("You arrive at the coding meetup and see there are two to choose from, the Ruby group or the Python. Which do you choose? (R, P)")
      if (lang === "R"){
        alert("Ruby! You have a night of Ruby fun.")

      }
      else {
        alert("Python! You have a night of Python fun.")
      }

}

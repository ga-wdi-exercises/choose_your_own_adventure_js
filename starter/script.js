// put code here!
//
// function startGame() {
//   var playerName = prompt("Enter name");
//   var getAge= prompt("Hello " + playerName + ". What is your age?");
// }

var newText =[];
var sortingHat = document.getElementById("bubbleText");

function playGame(){
  captureData();
  runsQuestions();
}

function captureData() {
        var inputText = document.getElementById('id_of_input').value;
        if (inputText !==""){
          newText.splice(0, 1, inputText);
          // console.log(newText); to ensure the input is constantly updating the array with new data
          document.getElementById("id_of_input").value = "";
          }
        else {
          alert("Please submit a valid response.");
        }
}

function runsQuestions() {
      sortingHat.innerHTML = "Great! Hello " + newText + ". Evil Lord Voldemort has come back to power. Will you help me find and destroy some of the horcruxes? (<strong>yes</strong> or <strong>no</strong>)";

      if (newText == "yes") {
        sortingHat.innerHTML = "Thank you for your help. Let’s travel back in time to learn more about Lord Voldemort’s childhood to see if we find clues. He was born in 1926. What year would you like to begin looking?"
          if (newText > 2016) {
            sortingHat.innerHTML = "Welcome to the future, but we need to travel BACK in time. Please choose a date in the past."
            // run function again
          }

          else if ((newText < 2016) && (newText > 1945)){
            sortingHat.innerHTML = "−	You have run into Lord Voldemort himself! Would you like to fight or run?"
              if (newText=="fight") {
              sortingHat.innerHTML = "Wow, you are brave. You weren’t able to kill Lord Voldemort before we destroy all the horcruxes, but you did kill his precious snake, Nagini. Turns out she was a horcrux. Success!"
            }
              if (newText == "run"){
                sortingHat.innerHTML = "You aren’t fast enough are caught! Voldemort uses the Killing Curse! You did not survive."
            }
          }

          else if ((newText <= 1945) && (newText >= 1936)){

            sortingHat.innerHTML = "Voldemort is a student at Hogwarts. You follow him under a cloak of invisibility and discover he has hidden a black leather diary in the Room of Requirement. Do you want to destroy or read the diary?"
              if (newText == "destroy") {
                sortingHat.innerHTML = "Fantastic job, one horcrux has been destroyed! Thank you for your help."
              }
              if (newText == "read") {
                sortingHat.innerHTML = "Oh no…  the diary has used its magical influence to re-open the Chamber of Secrets, and you were eaten by Salazar Slytherin's Basilisk."
              }
          }

          else if ((newText < 1936) && (newText > 1926)) {
            sortingHat.innerHTML = "Voldemort is only a little boy, before he has gained a knowledge of magic… you could try and stop him now, before he ever grows old enough to become the monster that he is. What would you like to do? Kill him now or allow him to live?"
              if (newText == "kill"){
                sortingHat.innerHTML = "Oh-no, you have meddled with the past and broken the rules of time travel! You have changed the course of time too drastically that you cease to exist."
              }
            if (newText == "live") {
              sortingHat.innerHTML = "As easy as it would have been, you made the right choice. The good news is that we discovered valuable information to help us in our quest!"
            }
          }

          else {
            sortingHat.innerHTML = "Woah! We’ve traveled too far back in time! Voldemort has not yet been born, let’s choose a different year."
            // run function again
          }
      }

      else if (newText == "no") {
        sortingHat.innerHTML = "That’s too bad. Lord Voldemort’s wrath is powerful and I am not sure I’ll be able to stop him by myself.  I suggest you go into hiding! Where would you like to hide?"
        // --> grabs the input data, then changes innerHTML again with a message aying you were found by Voldemort in [LOCATION] and killed. Game ends.
      }
    }

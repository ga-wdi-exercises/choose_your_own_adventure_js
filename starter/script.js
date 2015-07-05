// put code here!
/*# Choose Your Own Adventure!

## Rules

- <strong>Goal</strong> Using what you know about data types, variables, operators, conditional blocks, and accepting user input, create a
text-based game that allows the user to arrive at different "destinations" based on the inputs they type.

- Any path the user goes down must ask them at least 3 questions(more if you want!)
- There must be a minimum of 7 total destinations the user could arrive at based on their responses.(again more if you want!)
- For at least 1(also can be more!) of the questions asked, there must be more then 2 possible user responses
- Adventure must contain at least one integer response and one string response
- Adventure must contain at least one functional loop in the code base

*hint* you may need `parseInt()` and `toString()`
*/

//Global Variables

//Default Response to Invalid Responses
var notValid = function () {alert("That's not an option. Try again!")}

//Used in "Neither" & "Tom" Branches
var stLouisLoop = function () {while (brothelChoice != "yes" && brothelChoice != "no"){
var brothelChoice = prompt("Huh, well while you're here might as well take a visit to the brothel? (Yes/No)");
brothelChoice = brothelChoice.toLowerCase();
  if (brothelChoice === "yes") {
    alert("Bad idea...you contract an STI and die a painful death.")}
  else if (brothelChoice === "no") {
    alert("Good idea. Unfortunately, the law was just one day behind you. You get arrested, tried, and found guilty of murder. You were hanged")}
  else {notValid()}}}

//Backstory
alert("Welcome to the head of the Oregon Trail - Saint Louis, Missouri. It's 1846. Back East you were framed for the murder of your old boss -\
Fat Cat McGee - a prominent New York businessman with connections to the mob. Talk about poor life choices! Hopefully, you'll do a better job.\
 With no other options, you've fled West with the hopes of re-establishing yourself in California. You see a sign for a salon. You enter.");

//In Salon
var drinkChoice = prompt("Bartender: What'd you have?");
drinkChoice = drinkChoice.toLowerCase();
  if (drinkChoice === "moonshine") {
    alert("Bartender: Good choice! Here's some of Uncle Jethro moonshine.");
  }
  else {
    alert("We don't have any of that fancy " + drinkChoice + " here! Here's some Uncle Jethro moonshine.")
  };
var name = prompt("Bartender: You're not from around here, are you? What's your name?");
alert("Bartender: Pleasure to meet you " + name + ". So you're looking to West, huh? Well it's your lucky day! There are\
two parties here leaving tomorrow on the Oregon Trail. Go talk to either George or Tom.")

//B
while (partyChoice !="george" && partyChoice !="tom" && partyChoice !="neither"){
var partyChoice = prompt("You look around. George seems like a nice fellow. Somebody who you'd like to invite to dinner with the family.\
Tom looks rather rough around the edges, but you like the cut of his jib. Who do you talk to? (George/Tom/Neither).");
partyChoice = partyChoice.toLowerCase();

//FIRST MAIN BRANCH [St Louis Loop]
if (partyChoice === "neither") {
  stLouisLoop()};

//Second MAIN BRANCH [Bank Robber]
if (partyChoice === "tom") {
  while (tomChoice != "yes" && tomChoice != "no"){
    var tomChoice = prompt("You walk over to Tom to introduce yourself. He recognizes you from the wanted posters. Oh no! Do you run? (Yes/No)");
    tomChoice = tomChoice.toLowerCase();
    if (tomChoice === "yes") {
      alert("Phew, that was close!");
      stLouisLoop()}
    else if (tomChoice === "no") {
        while (tomProposal != "yes" && tomProposal != "no"){
          var tomProposal = prompt("Tom: Name's Tom Brannon. It's always good to meet a fellow professional. I'm a stage coach robber. First of it's kind!\
          Interested in joining my gang? (Yes/No)");
          tomProposal = tomProposal.toLowerCase();
            if (tomProposal === "no") {
              alert("Unfortunately, this is the wild, wild west! Being a straight arrow doesn't mean much. He shoots you in the back. Can't leave loose ends,\
              now, can we? You're dead!")}
            else if (tomProposal === "yes") {
              alert("You two successfully rob a stage coach. Y'all go on a string of successful robberies becoming known as the " + name + " and Bannon gang.\
              After several years, the law catches up with you. You're sentenced to death. On the positive side, 170 years later a movie is made about your life.\
              Leonardo DiCaprio is cast as you. After decades of being passed over, Leo finally wins that Academy Award.")
            }
            else {
              notValid()}}}
    else {notValid()}}}

//Third MAIN BRANCH [Donner Party]
if (partyChoice === "george") {
  while (riverChoice != "ford" && riverChoice != "ferry" && riverChoice != "wait") {
    var riverChoice = prompt("You meet George. He's a family man. He tells you his last name is Donner. You set out the next morning with the Donner Party.\
    A few weeks in you all come across a mighty river. The current looks strong! What do you do? (Ford/Wait/Ferry)");
    riverChoice = riverChoice.toLowerCase();
        if (riverChoice === "ford") {
          alert("Bad idea. Your party's oxen are swept away. You survive, but you have to return to St. Louis to regroup. Unfortunately, you're caught by federal\
          marshals. You're tried, found guilty, and hanged...")}
        else if (riverChoice === "ferry") {
          alert("You pay a ferryman to get the entire Donner Party across. Huh, that costs money....money which you needed to spend on food later.\
          When you were running low of supplies, instead of buying food, the Party pushes on....you get caught in a blizzard in the Sierra\
          Nevada Mountains. Your compatriots eat you. Oh well.")}
        else if (riverChoice === "wait") {
          while (huntChoice != "yes" && huntChoice != "no"){
            var huntChoice = prompt("Smart move. After three days, the water level lowers enough to ford safetly. Now your party is running low on food.\
            Good thing you brought a rifle. You sneak up on a herd of buffalo. You have them in your sights...do you take a shot? (Yes/No)")
            huntChoice = huntChoice.toLowerCase();
              if (huntChoice === "no") {
                alert("All thanks to your inaction, the Donner Party has a Wikipedia page. When you all arrive in the Sierra Nevada with food, people\
                 resort to cannibalism. You get eaten. Good job " + name + ".")}
              else if (huntChoice === "yes") {
                var randomNumber = Math.floor(Math.random()*10)
                  if (randomNumber <= 1) {
                      alert("Oh no...your shot scared the buffalo! They stampede and kill your entire party. Woops!")}
                  else {
                      var boilTime = prompt("Good shot! Now you have food...but you're running low on water. You get to a somewhat dubious, dirty spring.\
                      How many minutes do you boil the water for?");
                          if (boilTime <= 15) {
                          alert("Oh crap...literally! You all contract disentery and die slow, painful deaths.")}
                                        else if (boilTime > 15) {
                                            while (cannibalismChoice != "yes" && cannibalismChoice != "no") {
                                            var cannibalismChoice = prompt("Better to be safe than sorry! Unfortunately, winter is setting in. Your party gets stuck in the\
                                            Sierra Nevada. Food stocks run out. Do you resort to cannibalism? (Yes/No)");
                                            cannibalismChoice = cannibalismChoice.toLowerCase();
                                                if (cannibalismChoice === "no") {
                                                  alert("You snooze, you loose! You die from starvation.")}
                                                else if (cannibalismChoice == "yes") {
                                                  alert("You're pretty twisted! But you survive through the winter. You make it to California safe,\
                                                  albeit not mentally sound. Congratulations " + name + "!")}
                                                else {notValid()}}
                                              }}}

              else {notValid()}}}
        else {notValid()}}}}

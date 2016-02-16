//Mythical Beauty War

//Goal is to get all the makeup, hair, and clothing neccessities for the Princess. And bring
// them back so that she can go to THE red carpet event.

//Items to get:
//Elf workers gift = heels/shoes
//Unicorn Rainbow throwup = lip sticks
//Medusa hair = necklace
//Dragon scales = dress
//Fairy dust = shimmer and highlights
//Mermaid hair = extentions or weave//Phoenix ashes = smokey eyes

//First I need something to hold items: a dictionary/key:value pair.
var backPack = {'Unicorn Rainbow Lipstick':0, 'Mermaid Weave':0, 'Dragon Scale Dress': 0,
  'Medusa necklace':0, 'Stilletoes by ELF': 0, 'Mermaid Weave': 0, 'Fairy Face Shimmer': 0}

//The story begins.
alert("The Millinnial Princess Pink Apple Everly Reignbeau \naka Princess PEAR of MacEphora Lusha Brown Land \nis getting ready for her first Golden Carpet event. \n\nShe has summoned you to her chambers.\n");

//Get name from user
var userName = prompt("Princess Pear: 'What is your name great warrior?'" , "Type Name.");

//Princess Pear's Mission
alert("Princess PEAR: \n'Oh," + " "+ userName + " " + "all the things I have are so common, the other Princesses will surely have the same thing on. I need you to find me the rarest of the rare things that will make my beauty stand out above all the others. \n\nWill you help?'");
var firstReply = prompt("Will you help the princess? \n\nType 'Y' for 'Yes, gladly, where do I start' \nOR 'N' for 'No, unless you fill my pockets with gold' \nOR 'B' for 'But, your beauty outshines the others, you could wear a trashbag.'");

//How will user began journey?
while(firstReply === " "){
  if ((firstReply === 'y') || (firstReply === 'Y')){
    alert("Oh, thank you, " + " "+ userName + " " + "you are as wonderful as they say you are! \n\nYou must first go to the elves in the basement, I hear they make the finest shoes.");
  }else if ((firstReply === 'n') || (firstReply === 'N')) {
      alert("Fine, " + " "+ userName + ", " + "you heathenous scoundrel! I'll pay. \n\nNow go to the elves in the basement, I hear they make the finest shoes. ");
  }else if ((firstReply === 'b') || (firstReply === "B")) {
      alert("Gross! " + " "+ userName + " " + "I would rather die! \n\nPlease just go to the elves in the basement, I hear they make the finest shoes.");
  }else {
      firstReply = " "
      var firstReply = ("What did you say," + " "+ userName + ", " + "Speak up.");
  }
} //Loop is not working!!! :-(
/*Researched how I might fix this. Stackoverflow suggestion was to check if value is truthy.
You can just check if the variable has a truthy value or not. That means

if( value ) {
}
will evaluate to true if value is not:

null
undefined
NaN
empty string ("")
0
false

Lets see if this helps.*/


//Elves in the basement
alert("You arrive in the deepest darkest parts of the castles basement. \nYou reach a door the says Elf Made, a very popular brand in the kingdom.");
alert("You open the door and see thousands of elves working hard, making shoes. \nYou clear your throat and ask for the finest pair of shoes for Princess PEAR.");
alert("One elf steps forward and says: 'We are tired and cannot take on anymore orders. \nThe princesses from around the world trapped us here and we have been slaving away ever since. \nHowever, if you free us, we will make one last pair for Princess PEAR' ");

//Will you help Elves?
var helpElves = prompt("Will you help the elves? \nType 'Y' for 'Yes, of course. \nOR 'N' for No, and choose to kill all but one, who you will force to make the shoes ");

//Paths based on answers to elves
if ((helpElves === 'y') || (helpElves === 'Y')){
  alert("The elves: 'Thank you, Thank you.' You have saved the elves. \nThe elves quickly make a magical translucent 6 inch stilletoe that takes on the color of garments around it.");
  alert("You gain an item: *Stilletoes by ELF* \n\nBecause of your kindness, the elves tell you about Yum Yum forest and how Unicorns might help.");
  //Add item to backpack.
  backPack['Stilletoes by ELF'] = 1

  //Next destination is Yum Yum Forest
  alert("You arrive at Yum Yum Forrest. Suddenly you spot a dashing black unicorn with a dazzling blue hued horn. \nThe Unicorn sees you, and in shock, throws up rainbows.");
  alert("The Unicorn:'Please don't kill me. Here take this rainbow lipstick instead, I'm sure a pretty lady would love it. \n\n The Unicorn offers you his upchuck.");
  var freeUnicorn = prompt("Choose: 'Y' for 'Yes, Princess PEAR would love this. \n OR 'N' for 'No' and try to capture the unicorn to sell its horn and steal the lipstick.");

      if ((freeUnicorn === 'y') || (freeUnicorn === 'Y')){
        alert("The Unicorn is happy and gallops away into the forest. \nYou collect *Unicorn Rainbow Lipstick*");
        backPack['Unicorn Rainbow Lipstick'] = 1
        alert("You wonder the forest until you happen upon a party of Fairies. They invite you to dance.");
      }else if (((freeUnicorn === 'n') || (freeUnicorn === 'N'))) {
        alert("Unicorn kicks you with front hooves, knocking you out, and burries lipstick so it can't be used.");
        alert("You wake to shimmering Fairies hovering above you. It is a party. They invite you to party with them.");
      }
}else if ((helpElves === 'n') || (helpElves === 'N')) {
  alert("Horrible chose," + " "+ userNamer +". " + " You have angered all the elves with your evil plan. \nThey band together, create a portal and fling you into it.");
  alert("You awake to a lavishly designed candle lit bedroom. \nNervously, you race to the nearest door, open it, but find a deep chamber fill with stone statues of men.");
  alert("You are in MEDUSA's Lair!!!, sucks for you. \n\nYou are quick on your toes, and blow out the candles as you hear foot steps approaching.");
  alert("The light from the hall illuminates a snaked haired lady. She is exhales in annoyance at the dark room and heads for the nearest candle to light.");
  var fightMedusa = prompt("You quickly blow out her flame. What will you do next? \nChoose: 'S' for 'Sneak away before she catches you' \nOR 'U' for 'Use your cunning ways to seduce her, have one night stand, steal Medusa Hair for a necklace and sneak out before she wakes.'");

  //Paths to Medusa choice
  if ((fightMedusa === 'y') || (fightMedusa === 'Y')){
    alert("You quietly sneak past medusa, forfeiting any possible items you could get from her. \nBut you are safe. ");
    alert("You find yourself safe and sound outside of Medusa's lair and after a time, you come upon a party of Fairies.");
  }else if ((fightMedusa === 'n') || (fightMedusa === 'N')){
    alert("Some hot R-rated stuff happens and relaxing cuddling finishes off the night. While Medusa is sleeping, you rip out a snake strand and dash out of her lair.");
    alert("You collect *Medusa necklace* for Princess PEAR.");
    backPack['Medusa necklace'] = 1
    alert("You find yourself safe and sound outside of Medusa's lair and after a time, you come upon a party of Fairies.");
  }
}



                      //All at Fairies
//Fairies are sweet and loving, healing users wounds and offering tea and cookies.
//User eats and parties with them all night and the Fairy king makes user honorary guest.
//You notice all their meals appear with fairy dust which would be nice for Princess Pear
//Choose: (A)sk for a bit for the princess *Gains Fairy Face Shimmer*
      //The Fairy King is pleased and tells you the secret of Dragon scales. You travel
      //Firey cove.
//OR: Get the frairies (d)runk and steal it. *Gains Fairy Face Shimmer*
      //The king discovers your deed as you are leaving and curses you to Firey Cove.

                    //All at Firey Cove with Dragons.
//You are scared as you walk amongst dozens of sleeping Dragons.
//Choose: Change your mind and exit as quickly and stealthily as possible.
      //At the end of the Cove is a watery OASIS
//OR: Use a bit of your fiary dust to blind them all. Skinning one of the smaller Dragons
//and exiting as possible. *Gaind Dragon Scale dress*
      //At the end of the Cove is a watery OASIS

                    //All At Mermaid Watery Oasis
//There are mermaids everywhere, singing and combing their hair.
//They see you and all fawn and dote on you. They are not allowed to be around humans
//but have been lacking excitement.
//You tell them of your journey and all its excitement.
//They are so enamored with you and excited by your travels, they offer to let you pick
//a treasure you have yet to gain.
    //Choose: Gain *(D)ragon Scale Dress.*
    //OR: Gain *(M)edusa necklace*
    //OR: Gain *(U)nicorn Rainbow Lipstick*
//User chooses a gift. As you thank the mermaid and prepare to leave you are drawn back to their
//beauty. They don't want you to leave.
      //Choose: You lie and say you will come back after your mission.
            //Mermaids believe you and give you some of their hair to remember them by.
            //Gain *Mermaid Weave*
            //At the end of the beach is a dying Phoenix.
      //OR: You stay, have weird mermaid orgy and leave while they are still cuddling and entangled in each other
            //You make it to the end of the beach were you see a dying Phoenix

                  //All at Phoenix
//The Phoenix is kind and will grant you a wish before you die because he likes the company.
//But first you must guess which door numbered 1 -20 will take you home.
//20 doors appear. The Phoenix is happy you will be staying with him a while. He grins.
//Choose: A number until you guess the right door.

//Once user guesses correct door, Phoenix dies. *Gain Phoenix Smokey Eye Kit.*

                //All At home.
//You are now home. It is one hour before Princess Pear has to leave. She is in a panic,
//When you arrive.
//She asks you what you brought.
//User empties scachel.
//IF you have 6-7 items = Glory and the Princess' hand in marriage.
//IF you have 3-5 items = Land to grow a family and no more missions
//IF you have 2 or less = Banished back to Medusa's layer.

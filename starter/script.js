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
  'Medusa necklace':0, 'Stilletoes by ELF': 0, 'SmokeyEye by PHOENIX': 0, 'Fairy Face Shimmer': 0}

function noAnswerLoop(reply){
  while(reply === ""){
    var reply = prompt("You must make a choice, " + userName);
  }
  return reply;
};


//The story begins.
alert("The Millinnial Princess Pink Apple Everly Reignbeau \naka Princess PEAR of MacEphora Lusha Brown Land \nis getting ready for her first Golden Carpet event. \n\nShe has summoned you to her chambers.\n");

//Get name from user
var userName = prompt("Princess Pear: 'What is your name great warrior?'" , "Type Name.");

//Princess Pear's Mission
//If I console.log(firstReply); I do get whatever I put in. So the error is in the loop.
alert("Princess PEAR: \n'Oh," + " "+ userName + " " + "all the things I have are so common, the other Princesses will surely have the same thing on. I need you to find me the rarest of the rare things that will make my beauty stand out above all the others. \n\nWill you help?'");
var firstReply = prompt("Will you help the princess? \n\nType 'Y' for 'Yes, gladly, where do I start' \nOR 'N' for 'No, unless you fill my pockets with gold' \nOR 'B' for 'But, your beauty outshines the others, you could wear a trashbag.'");

//How will user began journey?

firstReply = noAnswerLoop(firstReply);


if ((firstReply === 'y') || (firstReply === 'Y')){
  alert("Oh, thank you, " + " "+ userName + " " + "you are as wonderful as they say you are! \n\nYou must first go to the elves in the basement, I hear they make the finest shoes.");
}else if ((firstReply === 'n') || (firstReply === 'N')) {
    alert("Fine, " + " "+ userName + ", " + "you heathenous scoundrel! I'll pay. \n\nNow go to the elves in the basement, I hear they make the finest shoes. ");
}else if ((firstReply === 'b') || (firstReply === "B")) {
    alert("Gross! " + " "+ userName + " " + "I would rather die! \n\nPlease just go to the elves in the basement, I hear they make the finest shoes.");
}else{
    alert("Silly goose I'll take that as a yes \n\nNow go to the elves in the basement, I hear they make the finest shoes.");
};


//Elves in the basement
alert("You arrive in the deepest darkest parts of the castles basement. \nYou reach a door the says Elf Made, a very popular brand in the kingdom.");
alert("You open the door and see thousands of elves working hard, making shoes. \nYou clear your throat and ask for the finest pair of shoes for Princess PEAR.");
alert("One elf steps forward and says: 'We are tired and cannot take on anymore orders. \nThe princesses from around the world trapped us here and we have been slaving away ever since. \nHowever, if you free us, we will make one last pair for Princess PEAR' ");

//Will you help Elves?
var helpElves = prompt("Will you help the elves? \nType 'Y' for 'Yes, of course. \nOR 'N' for No, and choose to kill all but one, who you will force to make the shoes ");
helpElves = noAnswerLoop(helpElves);

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
}else{
  alert("Horrible choice," + " "+ userName +". " + " You should have said yes. You have angered all the elves with your evil plan. \nThey band together, create a portal and fling you into it.");
  alert("You awake to a lavishly designed candle lit bedroom. \nNervously, you race to the nearest door, open it, but find a deep chamber fill with stone statues of men.");
  alert("You are in MEDUSA's Lair!!!, sucks for you. \n\nYou are quick on your toes, and blow out the candles as you hear foot steps approaching.");
  alert("The light from the hall illuminates a snaked haired lady. She exhales in annoyance at the dark room and heads for the nearest candle to light.");
  var fightMedusa = prompt("You quickly blow out her flame. What will you do next? \nChoose: 'S' for 'Sneak away before she catches you' \nOR 'U' for 'Use your cunning ways to seduce her, have one night stand, steal Medusa Hair for a necklace and sneak out before she wakes.'");
  fightMedusa = noAnswerLoop(fightMedusa);
  //Paths to Medusa choice
  if ((fightMedusa === 's') || (fightMedusa === 'S')){
    alert("You quietly sneak past medusa, forfeiting any possible items you could get from her. \nBut you are safe. ");
    alert("You find yourself safe and sound outside of Medusa's lair and after a time, you come upon a party of Fairies.");
  }else if ((fightMedusa === 'u') || (fightMedusa === 'U')){
    alert("Some hot R-rated stuff happens and relaxing cuddling finishes off the night. While Medusa is sleeping, you rip out a snake strand and dash out of her lair.");
    alert("You collect *Medusa necklace* for Princess PEAR.");
    backPack['Medusa necklace'] = 1
    alert("You find yourself safe and sound outside of Medusa's lair and after a time, you come upon a party of Fairies.");
  }
}



                      //All paths lead to Fairies
alert("The Fairies are sweet and loving, healing your wounds and offering you tea and cookies.");
alert("The Fairy Queen makes you the honorary guest. You eat and party with the Fairies all night long.")
alert("You notice all the fairies meals appear out of thin air with a little fairy dust. \nYou think to yourself that this dust would be nice for Princess PEAR");

//Get answer to Fairy dust problem.
var fairyDust = prompt("How do you get some fairy dust? Choose: 'P' for 'Politely ask for a bit of dust for your princess,  \nOR 'G' for 'Get the frairies drunk and steal it. '");
fairyDust = noAnswerLoop(fairyDust);

//Go down next path based on answer
if((fairyDust === 'p') || (fairyDust === 'P')){
    alert("The Fairy Queen is pleased and gives you a small pounch of *Fairy Face Shimmer*.");
    backPack['Fairy Face Shimmer'] = 1;
    alert("She also tells you the secrets of the Fiery Cove and how dragon scales make for great garments and armor.");
}else if((fairyDust === 'g') || (fairyDust === 'G')){
    alert("You swipe some fairy dust from a drunk fairy and make for your exit.");
    backPack['Fairy Face Shimmer'] = 1;
    alert("The Fairy Queen discovers your deed as you are sneaking away and curses you to the dreadful Firey Cove. Firey Cove is filled with dozens of dragons!!!");
}else{
    alert("You didn't make a decision soon enough and could not acquire the fairy dust. \nHowever, The Fairy Queen does give you a map to navigate Fiery Cove, for the princesses dress. \nAll the fiaries disappear with the sunrise.");
};


                    //All at Firey Cove with Dragons.
alert("It is morning and you have found yourself in Fiery Cove. Not a nice place to be, as all around you are sleeping fire breathing dragons. Yikes!!");
alert("You think to yourself: 'Is this really worth it. The fairies said dragon scales make for the best of the best clothing, but \nThe princes has thousands of dresses, right?'");

var burntButt = prompt("Choose: 'Y' for 'Yes, she is worth every burnt body part you might incur. \nOR 'N' for 'No, Princess PEAR needs to start believing in upcycling and remake an old dress into something new.' ");
burntButt = noAnswerLoop(burntButt);

if((burntButt === 'y') || (burntButt === 'Y')){
    alert("You think fast, take a bit of your fairy dust and blind all the Dragons.");
    alert("The dragons began to wake and grow angry at their new found blindness.");
    alert("You run through the cove and as you exit through the other end, you sword fight with a smaller dragon. \nYou are nimble, and kill it quickly in its blinded state, and skin it, taking as many scales as your sachel can hold.");
    alert("You gain *Dragon Scale Dress*");
    backPack['Dragon Scale Dress'] = 1;
    alert("Upon exiting the cove, you arrive at a sunkissed, rainbow filled watery OASIS");
}else {
    alert("You quietly move through the dragons, ducking behind rocks at the slightest thought that one might be waking.");
    alert("You successfully make it out of Fiery Cove alive without a scratch.");
    alert("You think: 'Princess PEAR may not have a dress, but that wasn't the most important item anyway...hopefully.'");
    alert("Upon exiting the cove, you arrive at a sunkissed, rainbow filled watery OASIS");
}

                    //All At Mermaid Watery Oasis
alert("You've heard of this place. It has no name but it is filled with...!!!! ");
alert("A gorgeous merperson leaps out of the water, just as you were about to think 'MERMAID!'");
alert("You look around the oasis and there are merpeople surfacing everywhere to bath in the sun");
alert("They see you and swim to the waters edge, inviting you in for a swim.");
alert("One of the Mermaids speaks: 'Hi, I'm Coachellanna, we are not allowed to be around humans, and usually our king kills them on site. But he is not here, and you are so Gorgeous.'")
alert("You tell them of your travels. \nThey are so enamored with you and excited by your stories. \nCoachellanna: We love all that is you. Please choose a gift as token of our appreciation and affection.");
alert("Two other merbeings come up beside Coachellanna, and each hold out a clam.\nChoose: Choose: Gain *(D)ragon Scale Dress.* \nOR: Gain *(M)edusa necklace*, \nOR: Gain *(U)nicorn Rainbow Lipstick*")


var mermaidGift = prompt("Choose a clam: Pick '1', '2', or '3'.");
mermaidGift = noAnswerLoop(mermaidGift);

if((mermaidGift === '1') || (mermaidGift === 1)){
    alert("Thank you, I'll choose this one.")
    backPack['Dragon Scale Dress'] += 1;
}else if((mermaidGift === '2') || (mermaidGift === 2)){
    alert("Thank you, I'll choose this one.")
    backPack['Medusa necklace'] += 1;
}else if((mermaidGift === '3') || (mermaidGift === 3)){
    alert("Thank you, I'll choose this one.")
    backPack['Unicorn Rainbow Lipstick'] += 1;
}else{
    alert("By not picking an option the mermaids decide to suprise you with *Dragon Scale dress*");
    backPack['Dragon Scale Dress'] += 1;
};

alert("After sunbathing for a time, you realize you need to go. \nAs you gather your things, the mermaids pull you back into the water.");
alert("This isn't good. What will you do?");

var trappedFish = prompt("Choose: 'L' for 'Lie, and say you will come back after your mission \nOR 'S' for 'Stay, have weird mermaid orgy and leave while mermaids are still cuddling and entangled in each other.'");
trappedFish = noAnswerLoop(trappedFish);

if((trappedFish === 'l') || (trappedFish === 'L')){
    alert("You lie to the merpeople. But they believe you and give you locks of their hair so you won't forget to return.")
    alert("You gain *Mermaid Weave* ");
    backPack['Mermaid Weave'] += 1;
}else {
    alert("That fun. You didn't gain any treasure...well not the treasure Princess PEAR would want anyway. Ha!")

                  //All at Phoenix
alert("You have been walking along the Oasis' sandy beach for a while when you spot a sickly looking enormous bird.");
alert("You walk up to the bird and it smiles. \nBird:'I am a Phoenix. My name is Hashtag Lolly, but you can call me Hash for short.'");
alert("I am so happy you are here to keep me company in my final hours. In fact, if you guess the number tattooed on my neck, \nI will tell you the dsecret to glamour and sassyness which any admirer would love.");

var guessNum = prompt("This will be easy, so you agree to Hash's game.", "Pick a number between 1 and 20.");
guessNum = noAnswerLoop(guessNum);

var hashNum = Math.floor((Math.random() * 20) +1);

if(guessNum === hashNum){
  alert("Thank you for keeping an old Phoenix company. \nThe secret is to take my ashes for the perfect smokey eye eyeshadow.");
  alert("Hash dies leaving behind his dust. You gain *SmokeyEye by PHOENIX*.");
  backPack['SmokeyEye by PHOENIX'] = 1;
}

//Once user guesses correct door, Phoenix dies. *Gain Phoenix Smokey Eye Kit.*

                //All At home.
//You are now home. It is one hour before Princess Pear has to leave. She is in a panic,
//When you arrive.
//She asks you what you brought.
//User empties scachel.
//IF you have 6-7 items = Glory and the Princess' hand in marriage.
//IF you have 3-5 items = Land to grow a family and no more missions
//IF you have 2 or less = Banished back to Medusa's layer.

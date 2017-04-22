console.log("Quest for the Lunar Sword!");
console.log("by Will Hawkins");
console.log(" ");
console.log("Instructions:");
console.log("When presented with a question and asked for a response, input the Letter that corresponds with the provided action you'd like to take.");
console.log(" ");
console.log("Fun Fact:");
console.log("There are 31 Possible Paths that you could explore on this Quest. So I encourage you to have fun and try out different choices!");

//Opening Question ***DONE***
alert("Welcome to the Quest for the Lunar Sword! You're about to have a lot of fun today, but let's start with some basics. When presented with a question and asked for a response, input the Letter that corresponds with the provided action you'd like to take. There are 31 different paths you can take through this adventure, so get ready! Here we go!!!!!");
alert("Hello there traveler! Welcome to the Harlot's Ankle, the finest Tavern in all the land. My name's LuAnn, proprietor of this here respectable establishment. We get a lot of different visitors from all over the world. Dwarves! Trolls! Slightly shorter Dwarves! I've seen them all. But my eyesight's not as good as it once was. Pardon the bluntness but...")
var who = prompt("What exactly are you? [A: An Elf, B: Your Chef, C: Wearing a Red Shirt]");

//WHILE LOOP IN CASE THEY CAN'T READ INSTRUCTIONS ***DONE***
while (who != "a" && who != "A" && who !="b" && who !="B" && who !="c" && who !="C") {
  alert("You're not really good at listening to authority, are you? Type the LETTER corresponding to the answer of your choice!");
  who = prompt("Now, what race are you? [A: An Elf, B: Your Chef, C: Just a Guy Wearing a Red Shirt ]");
};

//FIRST RESPONSES!!!!! ***DONE***
if (who == "a" || who == "A") {
  alert("An Elf! Ha, of course! We don't see your kind so much anymore, but you're always welcome here. EVERYONE'S welcome here! We do get some interesting characters, though, like that old man in the blue robe over there. You see him? He certainly sees you. He's been staring you down since you came in and.. hush! He's coming this way...");
  alert("I am USIDORE, Wizard of the 12th Realm of Ephysiyies, Master of Light and Shadow, Manipulator of Magical Delights, Devourer of Chaos, Champion of the Great Halls of Terr'akkas. The elves know me as Fi’ang Yalok. The dwarves know me as Zoenen Hoogstandjes. And I am also known in the Northeast as Gaismunenas Meistar... And I need your help!");
  alert("The Dark Lord is gathering his forces, preparing to strike out at the free world. I’ve come to this tavern after hearing that the Lunar Sword is in a temple hidden deep within the nearby forest. For reasons of plot convenience, I cannot enter there. Please. I need you to retrieve the sword for me.");
  var elf = prompt("Will you help Usidore on his Quest? [A: Yes, B: No]");
} else if (who == "b" || who == "B") {
  alert("Oh. Yes. Of course. I recognize you now. What was I thinking? Well, could you check in on that elderly man in the corner? The one wearing the blue robe. I think he must be hungry. He's been staring at you ever since you walked over here and... oh, wait, he's coming over now...");
  alert("I am USIDORE, Wizard of the 12th Realm of Ephysiyies, Master of Light and Shadow, Manipulator of Magical Delights, Devourer of Chaos, Champion of the Great Halls of Terr'akkas. The elves know me as Fi’ang Yalok. The dwarves know me as Zoenen Hoogstandjes. And I am also known in the Northeast as Gaismunenas Meistar... And I need your help!");
  alert("The Dark Lord is gathering his forces, preparing to strike out at the free world. I’ve come to this tavern after hearing that the Lunar Sword is in a temple hidden deep within the nearby forest. For reasons of plot convenience, I cannot enter there. Please. I need you to retrieve the sword for me.");
  var chef = prompt("Will you help Usidore on his Quest? [A: Yes, B: No]");
} else if (who == "c" || who == "C") {
  alert("Ok, well that didn't really answer my question, but... well, we all have secrets to keep I guess. Like that old man in the blue robe over there. You see him? He certainly sees you. He's been staring you down since you came in and.. hush! He's coming this way...");
  alert("I am USIDORE, Wizard of the 12th Realm of Ephysiyies, Master of Light and Shadow, Manipulator of Magical Delights, Devourer of Chaos, Champion of the Great Halls of Terr'akkas. The elves know me as Fi’ang Yalok. The dwarves know me as Zoenen Hoogstandjes. And I am also known in the Northeast as Gaismunenas Meistar... And I need your help!");
  alert("The Dark Lord is gathering his forces, preparing to strike out at the free world. I’ve come to this tavern after hearing that the Lunar Sword is in a temple hidden deep within the nearby forest. For reasons of plot convenience, I cannot enter there. Please. I need you to retrieve the sword for me.");
  var red = prompt("Will you help Usidore on his Quest? [A: Yes, B: No]");
};

//ELF ***DONE***
if (elf == "a" || elf == "A") {
  alert("Thank you, my fine friend. I knew I could count on you. Head into the Forest and follow the dirt path. It will take you straight to the hidden Temple of the Moon. Doesn't really sound that hidden to me, but I'm not about to look a gift horse in the mouth. Now go!");
  alert("Walking out of the Harlot's Ankle, you notice a solitary Flower growing in the center of the road. Strangely, you are drawn to it.");
  var elfYes = prompt("What do you do about the Flower? [A: Pluck, B: Stomp, C: Talk]");
} else if (elf == "b" || elf == "B") {
  alert("*POOF*")
  alert("You are now a Chipmunk!");
  alert("I'm sorry friend, but I cannot take no for an answer. Aid me in this. Fetch me the Lunar Sword. And you shall be a Chipmunk no more!!!!");
  alert("*BANG*")
  alert("Usidore the Blue has vanished. With no other option but to do the Wizard's bidding, you scamper out of the Harlot's Ankle and into the world.");
  alert("Outside of the tavern, you see a single Flower growing in the middle of the road, looming above your small frame. Strangely, you are drawn to it.")
  var chipmunk = prompt("What do you do about the Flower? [A: Attack It, B: Ignore It]");
};

//ELF YES ***DONE***
if (elfYes == "a" || elfYes == "A") {
  alert("What a stunning specimen of nature's beauty. It makes you feel at home and reminds you of what you're fighting for. You pluck the Flower and take it with you as you venture into the forest.");
  alert("Walking along the path, you're approached by a band of Thieves. The largest calls out to you.");
  alert("Doesn't look like you're from around here, Elf. Well let me explain how this works. There's a toll on this here path. 100 gold pieces per person. Well, at least that's the normal price. But considering it's peak hours right now, we'll actually need 200 coins from you.");
  var elfYesPluck = prompt("How much do you pay the Bandits? [A: 0, B: 100, or B: 200]");
} else if (elfYes == "b" || elfYes == "B") {
  alert("You stomp on the Flower, crushing it, and then continue toward the forest.");
  alert("But turning around, you look back at the carnage you created. Why did you do that? What came over you? Why did you destroy nature? That was very un-Elflike. Tears stream down your cheeks. You flee back into the Harlot's Ankle to drink your sorrows away.");
  alert("You Lose");
} else if (elfYes == "c" || elfYes == "C") {
  alert("Using your magical Elf powers, you commune with nature. The Flower communes right back.");
  alert("Oh hey. Thanks for stopping to talk to me. My name's Bruce! You have no idea how frustrating it is to have so many people walking by me day after and never a single one stopping to ask me how my day has been. It's unfathomably rude! But not you. You're so nice. You know, I like you! In fact, let me share a little something with you. It's a secret shared by us plants. In the forest, there's a shortcut to the Temple of the Moon. All you'll need to do is...");
  alert("Thanks to Bruce's advice, you make it to the Temple of the Moon before you even know it. Using your impeccable Elf skills, you navigate the labyrinth within the Temple and find...");
  alert("A monstrous Gorilla guarding the Lunar Sword.");
  var elfYesTalk = prompt("What do you do about the Gorilla? [A: Fight, B: Ask for the Sword]");
};

//ELF YES PLUCK ***DONE***
if (elfYesPluck == "a" || elfYesPluck == "A" || elfYesPluck == 0) {
  alert("You are an elf of Quen’lor’im’dris. You will not be extorted by anyone! If they want pay, they shall be paid… in arrows!");
  alert("You pull out your bow, firing a barrage of shafts into the chests of every bandit, and then continue on toward the Temple of the Moon.");
  alert("Using your impeccable Elf skills, you navigate the labyrinth within the Temple and find a monstrous Gorilla guarding the Lunar Sword.");
  var elfYesPluck0 = prompt("What do you do about the Gorilla? [A: Use Flower, B: Use Money, C: Fight, D: Ask for the Sword]");
} else if (elfYesPluck == "b" || elfYesPluck == "B" || elfYesPluck == 100) {
  alert("These fiends! It’s not peak hours for at least 2 more tolls of the bell! The toll is 100 gold pieces right now. No more! You walk up to the largest thief and place 100 gold coins in his hand.");
  alert("However, you were so busy looking through your purse that you didn’t notice another bandit sneaking behind you and burying his dagger in your back.");
  alert("Even Elves can die.");
  alert("You Lose");
} else if (elfYesPluck == "c" || elfYesPluck == "C" || elfYesPluck == 200) {
  alert("Unfair though it may be, you decide you have more important things to do than fight with these thieves. The fate of the world is in your hands. You toss your entire purse (conveniently filled with exactly 200 gold pieces) at the largest thief. Then, while they’re distracted you bolt into the trees and continue toward the temple.");
  alert("Using your impeccable Elf skills, you navigate the labyrinth within the Temple and find a monstrous Gorilla guarding the Lunar Sword.");
  var elfYesPluck200 = prompt("What do you do about the Gorilla? [A: Use Flower, B: Fight, C: Ask for the Sword]");
};

//ELF YES TALK ***DONE***
if (elfYesTalk == "a" || elfYesTalk == "A") {
  alert("You pull out your bow. This Gorilla is no match for your elven prowess!");
  alert("Except it is.");
  alert("The Gorilla grabs the Lunar Sword and before you can fire a volley of arrows, hurls the Blade into your chest.");
  alert("As the life slips from your body, you cannot help but wonder what you might have done differently. But more importantly you wonder...");
  alert("What was a Gorilla doing here in the first place?");
  alert("You Lose");
} else if (elfYesTalk == "b" || elfYesTalk == "B") {
  alert("Oh wow! You Speak Gorilla? That's so cool! I mean, your accent's a little off and the grammar's a little broken, but you did really well! You should be proud of yourself.");
  alert("So you wanted this old thing? Oh yeah, that's totally fine. Go ahead. I'm not really using it for anything. Good luck with everything! You should come back some time when you're in the area again. We'll do tea.");
  alert("Having made a new friend, you leave the Temple of the Moon, Lunar Sword in hand, and head back toward the Harlot's Ankle.");
  alert("CONGRATULATIONS!!! YOU AND USIDORE HAVE SAVED THE FREE WORLD!!!!");
};

//ELF YES PLUCK 0 ***DONE***
if (elfYesPluck0 == "a" || elfYesPluck0 == "A") {
  alert("Of course. The Flower! You knew there was a reason it seemed so significant when you stumbled upon it.");
  alert("You throw the Flower at the Gorilla as hard as you can.");
  alert("Nothing happens.");
  alert("It's just a flower.");
  alert("Why did you think that would work?");
  alert("The Gorilla kills you.");
  alert("Like, real dead.");
  alert("It probably didn't need to be as brutal as it was...");
  alert("But you threw a Flower at it.");
  alert("So, like...");
  alert("You kinda had it coming...");
  alert("...");
  alert("You Lose");
} else if (elfYesPluck0 == "b" || elfYesPluck0 == "B") {
  alert("You attempt to bribe the Gorilla, throwing your purse toward it.");
  alert("Gorillas, however, don't have much use for money.");
  alert("Gorillas don't really have an economy.");
  alert("But they do have fists...");
  alert("Which this Gorilla uses to kill you.")
  alert("You Lose");
} else if (elfYesPluck0 == "c" || elfYesPluck0 == "C") {
  alert("You pull out your bow. This Gorilla is no match for your elven prowess!");
  alert("Except it is.");
  alert("The Gorilla grabs the Lunar Sword and before you can fire a volley of arrows, hurls the Blade into your chest.");
  alert("As the life slips from your body, you cannot help but wonder what you might have done differently. But more importantly you wonder...");
  alert("What was a Gorilla doing here in the first place?");
  alert("You Lose");
} else if (elfYesPluck0 == "d" || elfYesPluck0 == "D") {
  alert("Oh wow! You Speak Gorilla? That's so cool! I mean, your accent's a little off and the grammar's a little broken, but you did really well! You should be proud of yourself.");
  alert("So you wanted this old thing? Oh yeah, that's totally fine. Go ahead. I'm not really using it for anything. Good luck with everything! You should come back some time when you're in the area again. We'll do tea.");
  alert("Having made a new friend, you leave the Temple of the Moon, Lunar Sword in hand, and head back toward the Harlot's Ankle.");
  alert("CONGRATULATIONS!!! YOU AND USIDORE HAVE SAVED THE FREE WORLD!!!!");
};

//ELF YES PLUCK 200 ***DONE***
if (elfYesPluck200 == "a" || elfYesPluck200 == "A") {
  alert("Of course. The Flower! You knew there was a reason it seemed so significant when you stumbled upon it.");
  alert("You throw the Flower at the Gorilla as hard as you can.");
  alert("Nothing happens.");
  alert("It's just a flower.");
  alert("Why did you think that would work?");
  alert("The Gorilla kills you.");
  alert("Like, real dead.");
  alert("It probably didn't need to be as brutal as it was...");
  alert("But you threw a Flower at it.");
  alert("So, like...");
  alert("You kinda had it coming...");
  alert("...");
  alert("You Lose");
} else if (elfYesPluck200 == "b" || elfYesPluck200 == "B") {
  alert("You pull out your bow. This Gorilla is no match for your elven prowess!");
  alert("Except it is.");
  alert("The Gorilla grabs the Lunar Sword and before you can fire a volley of arrows, hurls the Blade into your chest.");
  alert("As the life slips from your body, you cannot help but wonder what you might have done differently. But more importantly you wonder...");
  alert("What was a Gorilla doing here in the first place?");
  alert("You Lose");
} else if (elfYesPluck200 == "c" || elfYesPluck200 == "C") {
  alert("Oh wow! You Speak Gorilla? That's so cool! I mean, your accent's a little off and the grammar's a little broken, but you did really well! You should be proud of yourself.");
  alert("So you wanted this old thing? Oh yeah, that's totally fine. Go ahead. I'm not really using it for anything. Good luck with everything! You should come back some time when you're in the area again. We'll do tea.");
  alert("Having made a new friend, you leave the Temple of the Moon, Lunar Sword in hand, and head back toward the Harlot's Ankle.");
  alert("CONGRATULATIONS!!! YOU AND USIDORE HAVE SAVED THE FREE WORLD!!!!");
};

//CHEF ***DONE***
if (chef == "a" || chef == "A") {
  alert("Thank you, my fine friend. I knew I could count on you. Head into the Forest and follow the dirt path. It will take you straight to the hidden Temple of the Moon. Doesn't really sound that hidden to me, but I'm not about to look a gift horse in the mouth. Now go!");
  alert("Walking out of the Harlot's Ankle, you notice a solitary Flower growing in the center of the road. Strangely, you are drawn to it.");
  var chefYes = prompt("What do you do about the Flower? [A: Pluck, B: Stomp]");
} else if (chef == "b" || chef == "B") {
  alert("*POOF*")
  alert("You are now a Chipmunk!");
  alert("I'm sorry friend, but I cannot take no for an answer. Aid me in this. Fetch me the Lunar Sword. And you shall be a Chipmunk no more!!!!");
  alert("*BANG*")
  alert("Usidore the Blue has vanished. With no other option but to do the Wizard's bidding, you scamper out of the Harlot's Ankle and into the world.");
  alert("Outside of the tavern, you see a single Flower growing in the middle of the road, looming above your small frame. Strangely, you are drawn to it.")
  var chipmunk = prompt("What do you do about the Flower? [A: Attack It, B: Ignore It]");
};

//CHEF YES ***DONE***
if (chefYes == "a" || chefYes == "A") {
  alert("This Flower looks to be Kingspice, a particularly rare and delicious flower. Good thing you've had all of that culinary training or you'd never recognize it. You pluck the flower and take it with you as you head into the forest.");
  alert("Walking along the path, you're approached by a band of Thieves. The largest calls out to you.");
  alert("You know the drill, buddy. The toll on this here path is 100 gold pieces per person. Normally. But considering it's peak hours right now, we'll actually need 200 coins from you.");
  var chefYesPluck = prompt("How much do you pay the Bandits? [A: 0, B: 100, C: 200]");
} else if (chefYes == "b" || chefYes == "B") {
  alert("You hate Flowers. So you go out of your way to crush this one. After all, it's not like you could have walked around it or anything.");
  alert("...");
  alert("Well, anyway...");
  alert("You head into the forest. Walking along the path, you're approached by a band of Thieves. The largest calls out to you.")
  alert("You know the drill, buddy. The toll on this here path is 100 gold pieces per person. Normally. But considering it's peak hours right now, we'll actually need 200 coins from you.");
  var chefYesStomp = prompt("How much do you pay the Bandits? [A: 0, B: 100, C: 200]");
};

//CHEF YES PLUCK ***DONE***
if (chefYesPluck == "a" || chefYesPluck == "A" || chefYesPluck == 0) {
  alert("You didn’t go to Culinary School to get taking advantage of like this! You charge at the bandits, wielding your mighty Cleaver. The bandits are wielding Swords, though.");
  alert("A lot of them.");
  alert("It was a nice try, but you're dead.");
  alert("So dead.");
  alert("You Lose");
} else if (chefYesPluck == "b" || chefYesPluck == "B" || chefYesPluck == 100) {
  alert("These fiends! It’s not peak hours for at least 2 more tolls of the bell! The toll is 100 gold pieces right now. No more! You walk up to the largest thief and place 100 gold coins in his hand.");
  alert("However, you were so busy looking through your purse that you didn’t notice another bandit sneaking behind you and burying his dagger in your back.");
  alert("You Lose");
} else if (chefYesPluck == "c" || chefYesPluck == "C" || chefYesPluck == 200) {
  alert("Unfair though it may be, you decide you have more important things to do than fight with these thieves. The fate of the world is in your hands. You toss your entire purse (conveniently filled with exactly 200 gold pieces) at the largest thief. Then, while they’re distracted you bolt into the trees and continue toward the temple.");
  alert("After navigating the labyrinth hidden deep within the temple, find a monstrous Gorilla guarding the Lunar Sword.");
  var chefYesPluck200 = prompt("What do you do about the Gorilla? [A: Cook, B: Fight]");
};

//CHEF YES STOMP ***DONE***
if (chefYesStomp == "a" || chefYesStomp == "A" || chefYesStomp == 0) {
  alert("You didn’t go to Culinary School to get taking advantage of like this! You charge at the bandits, wielding your mighty Cleaver. The bandits are wielding Swords, though.");
  alert("A lot of them.");
  alert("It was a nice try, but you're dead.");
  alert("So dead.");
  alert("You Lose");
} else if (chefYesStomp == "b" || chefYesStomp == "B" || chefYesStomp == 100) {
  alert("These fiends! It’s not peak hours for at least 2 more tolls of the bell! The toll is 100 gold pieces right now. No more! You walk up to the largest thief and place 100 gold coins in his hand.");
  alert("However, you were so busy looking through your purse that you didn’t notice another bandit sneaking behind you and burying his dagger in your back.");
  alert("You Lose");
} else if (chefYesStomp == "c" || chefYesStomp == "C" || chefYesStomp == 200) {
  alert("Unfair though it may be, you decide you have more important things to do than fight with these thieves. The fate of the world is in your hands. You toss your entire purse (conveniently filled with exactly 200 gold pieces) at the largest thief. Then, while they’re distracted you bolt into the trees and continue toward the temple.");
  alert("After navigating the labyrinth hidden deep within the temple, find a monstrous Gorilla guarding the Lunar Sword.");
  var chefYesStomp200 = prompt("What do you do about the Gorilla? [A: Cook, B: Fight]");
};

//CHEF YES PLUCK 200 ***DONE***
if (chefYesPluck200 == "a" || chefYesPluck200 == "A") {
  alert("Using your extensive culinary training, you whip up a quick cooking fire out of nothing but some already lit torches on the walls. You pull some mysterious meat out of your bag and roast up a delicious offering for the Gorilla.");
  alert("Before you hand it over though, you add the piece de resistance! You grind up the Flower you plucked earlier and sprinkle the bits on the meal.");
  alert("This is the Gorilla's first experience with cooked food. It's so overwhelmed with flavor that it gives you the Lunar Sword as repayment for the meal.");
  alert("With proof that you are truly the best chef ever, you take the Lunar Sword and head back toward the Harlot's Ankle.");
  alert("CONGRATULATIONS!!! YOU AND USIDORE HAVE SAVED THE FREE WORLD!!!!");
} else if (chefYesPluck200 == "b" || chefYesPluck200 == "B") {
  alert("You attack the Gorilla, which is foolish, since it's a Gorilla. And you're just a Chef. But hey, you chose this path and it's too late to turn back now.");
  alert("Unsurprisingly, the Gorilla kills you. I wish I could make this more interesting, but let's be honest... you saw this coming.")
  alert("You Lose");
};

//CHEF YES STOMP 200 ***DONE***
if (chefYesStomp200 == "a" || chefYesStomp200 == "A") {
  alert("Using your extensive culinary training, you whip up a quick cooking fire out of nothing but some already lit torches on the walls. You pull some mysterious meat out of your bag and roast up a delicious offering for the Gorilla.");
  alert("Something is missing though. Your dish is lacking spice. If only there were something you could have found during your journey that could have brought the flavor.");
  alert("Furious over your lackluster meal, the Gorilla eats you.");
  alert("It sucks.");
  alert("You Lose");
} else if (chefYesStomp200 == "b" || chefYesStomp200 == "B") {
  alert("You attack the Gorilla, which is foolish, since it's a Gorilla. And you're just a Chef. But hey, you chose this path and it's too late to turn back now.");
  alert("Unsurprisingly, the Gorilla kills you. I wish I could make this more interesting, but let's be honest... you saw this coming.")
  alert("You Lose");
};

//RED ***DONE***
if (red == "a" || red == "A") {
  alert("Thank you, my fine friend. I knew I could count on you. Head into the Forest and follow the dirt path. It will take you straight to the hidden Temple of the Moon. Doesn't really sound that hidden to me, but I'm not about to look a gift horse in the mouth. Now go!");
  alert("Walking out of the Harlot's Ankle, you notice a solitary Flower growing in the center of the road. Strangely, you are drawn to it.");
  var redYes = prompt("What do you do about the Flower? [A: Pluck, B: Stomp]");
} else if (red == "b" || red == "B") {
  alert("*POOF*")
  alert("You are now a Chipmunk!");
  alert("I'm sorry friend, but I cannot take no for an answer. Aid me in this. Fetch me the Lunar Sword. And you shall be a Chipmunk no more!!!!");
  alert("*BANG*")
  alert("Usidore the Blue has vanished. With no other option but to do the Wizard's bidding, you scamper out of the Harlot's Ankle and into the world.");
  alert("Outside of the tavern, you see a single Flower growing in the middle of the road, looming above your small frame. Strangely, you are drawn to it.")
  var chipmunk = prompt("What do you do about the Flower? [A: Attack It, B: Ignore It]");
};

//RED YES ***DONE***
if (redYes == "a" || redYes == "A") {
  alert("You carefully reach down and pluck the Flower.");
  alert("Unfortunately, you weren't careful enough. Its thorns prick your thumb, which becomes infected, and you promptly die.");
  alert("You Lose");
} else if (redYes == "b" || redYes == "B") {
  alert("You viciously stomp on the flower, grinding it into the dirt.");
  alert("However, its thorns pierce your boot, cutting into your foot... which becomes infected and kills you.");
  alert("You Lose");
};

//CHIPMUNK ***DONE***
switch (chipmunk) {
  case "a":
    alert("Filled with furry fury, you fling your face forward toward the flower. Teeth gnashing, claws slashing, you shred your prey to tiny bits. Having calmed your rage over your rodent fate, you head into the forest, determined to fetch the Lunar Sword.");
    alert("Scurrying across the forest floor, you notice a band of Thieves on the road ahead of you. They haven't yet noticed you. They probably wouldn't care even if they did, though. After all, you are a Chipmunk.");
    var chipmunkAttack = prompt("What do you do about the Bandits? [A: Attack Them, B: Ignore Them]");
    break;
  case "A":
    alert("Filled with furry fury, you fling your face forward toward the flower. Teeth gnashing, claws slashing, you shred your prey to tiny bits. Having calmed your rage over your rodent fate, you head into the forest, determined to fetch the Lunar Sword.");
    alert("Scurrying across the forest floor, you notice a band of Thieves on the road ahead of you. They haven't yet noticed you. They probably wouldn't care even if they did, though. After all, you are a Chipmunk.");
    var chipmunkAttack = prompt("What do you do about the Bandits? [A: Attack Them, B: Ignore Them]");
    break;
  case "b":
    alert("You have no time for this flower! You've been a Chipmunk for a scant 5 minutes and already you're growing tired of it. You charge adorably into the forest, determined to fetch the Lunar Sword.");
    alert("Scurrying across the forest floor, you notice a band of Thieves on the road ahead of you. They haven't yet noticed you. They probably wouldn't care even if they did, though. After all, you are a Chipmunk.");
    var chipmunkIgnore = prompt("What do you do about the Bandits? [A: Attack Them, B: Ignore Them]");
    break;
  case "B":
    alert("You have no time for this flower! You've been a Chipmunk for a scant 5 minutes and already you're growing tired of it. You charge adorably into the forest, determined to fetch the Lunar Sword.");
    alert("Scurrying across the forest floor, you notice a band of Thieves on the road ahead of you. They haven't yet noticed you. They probably wouldn't care even if they did, though. After all, you are a Chipmunk.");
    var chipmunkIgnore = prompt("What do you do about the Bandits? [A: Attack Them, B: Ignore Them]");
    break;
};

//CHIPMUNK ATTACK ***DONE***
switch (chipmunkAttack) {
  case "a":
    alert("Darting from tree to tree, you get closer to the Bandits while they remain rapt in conversation. Suddenly, spring from the trees, you go straight for the throat!");
    alert("When the dust settles...");
    alert("You continue toward the Temple of the Moon, leaving in your wake a sea of corpses.");
    alert("Your long journey almost over, you finally reach the temple. Deep within, after navigating the underground labyrinth, you find yourself face to furry face with a large, furious Gorilla. Behind it, you see the Lunar Blade, ready to be taken.");
    var chipmunkAttackAttack = prompt("What do you do about the Gorilla? [A: Attack It, B: Talk to It]");
    break;
  case "A":
    alert("Darting from tree to tree, you get closer to the Bandits while they remain rapt in conversation. Suddenly, spring from the trees, you go straight for the throat!");
    alert("When the dust settles...");
    alert("You continue toward the Temple of the Moon, leaving in your wake a sea of corpses.");
    alert("Your long journey almost over, you finally reach the temple. Deep within, after navigating the underground labyrinth, you find yourself face to furry face with a large, furious Gorilla. Behind it, you see the Lunar Blade, ready to be taken.");
    var chipmunkAttackAttack = prompt("What do you do about the Gorilla? [A: Attack It, B: Talk to It]");
    break;
  case "b":
    alert("Since they haven't noticed you, you take advantage of your size to sneak by the Bandits and continue on your quest.");
    alert("Your long journey almost over, you finally reach the temple. Deep within, after navigating the underground labyrinth, you find yourself face to furry face with a large, furious Gorilla. Behind it, you see the Lunar Blade, ready to be taken.");
    var chipmunkAttackIgnore = prompt("What do you do about the Gorilla? [A: Attack It, B: Talk to It]");
    break;
  case "B":
    alert("Since they haven't noticed you, you take advantage of your size to sneak by the Bandits and continue on your quest.");
    alert("Your long journey almost over, you finally reach the temple. Deep within, after navigating the underground labyrinth, you find yourself face to furry face with a large, furious Gorilla. Behind it, you see the Lunar Blade, ready to be taken.");
    var chipmunkAttackIgnore = prompt("What do you do about the Gorilla? [A: Attack It, B: Talk to It]");
    break;
};

//CHIPMUNK IGNORE ***DONE***
switch (chipmunkIgnore) {
  case "a":
    alert("Darting from tree to tree, you get closer to the Bandits while they remain rapt in conversation. Suddenly, spring from the trees, you go straight for the throat!");
    alert("When the dust settles...");
    alert("You continue toward the Temple of the Moon, leaving in your wake a sea of corpses.");
    alert("Your long journey almost over, you finally reach the temple. Deep within, after navigating the underground labyrinth, you find yourself face to furry face with a large, furious Gorilla. Behind it, you see the Lunar Blade, ready to be taken.");
    var chipmunkIgnoreAttack = prompt("What do you do about the Gorilla? [A: Attack It, B: Talk to It]");
    break;
  case "A":
    alert("Darting from tree to tree, you get closer to the Bandits while they remain rapt in conversation. Suddenly, spring from the trees, you go straight for the throat!");
    alert("When the dust settles...");
    alert("You continue toward the Temple of the Moon, leaving in your wake a sea of corpses.");
    alert("Your long journey almost over, you finally reach the temple. Deep within, after navigating the underground labyrinth, you find yourself face to furry face with a large, furious Gorilla. Behind it, you see the Lunar Blade, ready to be taken.");
    var chipmunkIgnoreAttack = prompt("What do you do about the Gorilla? [A: Attack It, B: Talk to It]");
    break;
  case "b":
    alert("Since they haven't noticed you, you take advantage of your size to sneak by the Bandits and continue on your quest.");
    alert("Your long journey almost over, you finally reach the temple. Deep within, after navigating the underground labyrinth, you find yourself face to furry face with a large, furious Gorilla. Behind it, you see the Lunar Blade, ready to be taken.");
    var chipmunkIgnoreIgnore = prompt("What do you do about the Gorilla? [A: Attack It, B: Talk to It]");
    break;
  case "B":
    alert("Since they haven't noticed you, you take advantage of your size to sneak by the Bandits and continue on your quest.");
    alert("Your long journey almost over, you finally reach the temple. Deep within, after navigating the underground labyrinth, you find yourself face to furry face with a large, furious Gorilla. Behind it, you see the Lunar Blade, ready to be taken.");
    var chipmunkIgnoreIgnore = prompt("What do you do about the Gorilla? [A: Attack It, B: Talk to It]");
    break;
};

//CHIPMUNK ATTACK ATTACK ***DONE***
switch (chipmunkAttackAttack) {
  case "a":
    alert("Every moment of this journey has led to this.");
    alert("You vanguished the mighty Flower.");
    alert("You slaughtered the vile Bandits.");
    alert("You are a seasoned veteran.");
    alert("An expierenced warrior.");
    alert("A tiny, fuzzy killer.");
    alert("The Gorilla falls to the floor, defeated, and you place your tiny paw on the hilt of the sword.");
    alert("CONGRATULATIONS!!! YOU AND USIDORE HAVE SAVED THE FREE WORLD!!!!");
    alert("Yay!");
    break;
  case "A":
    alert("Every moment of this journey has led to this.");
    alert("You vanguished the mighty Flower.");
    alert("You slaughtered the vile Bandits.");
    alert("You are a seasoned veteran. An expierenced warrior. A tiny, fuzzy killer.");
    alert("The Gorilla falls to the floor, defeated, and you place your tiny paw on the hilt of the sword.");
    alert("CONGRATULATIONS!!! YOU AND USIDORE HAVE SAVED THE FREE WORLD!!!!");
    alert("Yay!");
    break;
  case "b":
    alert("You try to reason with the Gorilla. You tell it about your childhood, first love, marriage. You tell it about the family you have back home, the children who are waiting for you. You tell the Gorilla about the spell placed on you by Usidore the Blue. You tell the Gorilla that the Dark Lord wishes to conquer the world and that the Lunar Sword is the only way to stop him.");
    alert("The Gorilla slams his fist down onto you, crushing you instantly.");
    alert("Gorillas and Chipmunks don't speak the same language, dumb-dumb.");
    alert("You Lose");
    break;
  case "B":
    alert("You try to reason with the Gorilla. You tell it about your childhood, first love, marriage. You tell it about the family you have back home, the children who are waiting for you. You tell the Gorilla about the spell placed on you by Usidore the Blue. You tell the Gorilla that the Dark Lord wishes to conquer the world and that the Lunar Sword is the only way to stop him.");
    alert("The Gorilla slams his fist down onto you, crushing you instantly.");
    alert("Gorillas and Chipmunks don't speak the same language, dumb-dumb.");
    alert("You Lose");
    break;
};

//CHIPMUNK ATTACK IGNORE ***DONE***
switch (chipmunkAttackIgnore) {
  case "a":
    alert("You attacked a Gorilla? As a Chipmunk?! What are you doing? You barely have any experience fighting as a Chipmunk!");
    alert("You're dead.");
    alert("Obviously.");
    alert("You Lose");
    break;
  case "A":
    alert("You attacked a Gorilla? As a Chipmunk?! What are you doing? You barely have any experience fighting as a Chipmunk!");
    alert("You're dead.");
    alert("Obviously.");
    alert("You Lose");
    break;
  case "b":
    alert("You try to reason with the Gorilla. You tell it about your childhood, first love, marriage. You tell it about the family you have back home, the children who are waiting for you. You tell the Gorilla about the spell placed on you by Usidore the Blue. You tell the Gorilla that the Dark Lord wishes to conquer the world and that the Lunar Sword is the only way to stop him.");
    alert("The Gorilla slams his fist down onto you, crushing you instantly.");
    alert("Gorillas and Chipmunks don't speak the same language, dumb-dumb.");
    alert("You Lose");
    break;
  case "B":
    alert("You try to reason with the Gorilla. You tell it about your childhood, first love, marriage. You tell it about the family you have back home, the children who are waiting for you. You tell the Gorilla about the spell placed on you by Usidore the Blue. You tell the Gorilla that the Dark Lord wishes to conquer the world and that the Lunar Sword is the only way to stop him.");
    alert("The Gorilla slams his fist down onto you, crushing you instantly.");
    alert("Gorillas and Chipmunks don't speak the same language, dumb-dumb.");
    alert("You Lose");
    break;
};

//CHIPMUNK IGNORE ATTACK ***DONE***
switch (chipmunkIgnoreAttack) {
  case "a":
    alert("You attacked a Gorilla? As a Chipmunk?! What are you doing? You barely have any experience fighting as a Chipmunk!");
    alert("You're dead.");
    alert("Obviously.");
    alert("You Lose");
    break;
  case "A":
    alert("You attacked a Gorilla? As a Chipmunk?! What are you doing? You barely have any experience fighting as a Chipmunk!");
    alert("You're dead.");
    alert("Obviously.");
    alert("You Lose");
    break;
  case "b":
    alert("You try to reason with the Gorilla. You tell it about your childhood, first love, marriage. You tell it about the family you have back home, the children who are waiting for you. You tell the Gorilla about the spell placed on you by Usidore the Blue. You tell the Gorilla that the Dark Lord wishes to conquer the world and that the Lunar Sword is the only way to stop him.");
    alert("The Gorilla slams his fist down onto you, crushing you instantly.");
    alert("Gorillas and Chipmunks don't speak the same language, dumb-dumb.");
    alert("You Lose");
    break;
  case "B":
    alert("You try to reason with the Gorilla. You tell it about your childhood, first love, marriage. You tell it about the family you have back home, the children who are waiting for you. You tell the Gorilla about the spell placed on you by Usidore the Blue. You tell the Gorilla that the Dark Lord wishes to conquer the world and that the Lunar Sword is the only way to stop him.");
    alert("The Gorilla slams his fist down onto you, crushing you instantly.");
    alert("Gorillas and Chipmunks don't speak the same language, dumb-dumb.");
    alert("You Lose");
    break;
};

//CHIPMUNK IGNORE IGNORE ***DONE***
switch (chipmunkIgnoreIgnore) {
  case "a":
    alert("You attacked a Gorilla? As a Chipmunk?! What are you doing? You barely have any experience fighting as a Chipmunk!");
    alert("You're dead.");
    alert("Obviously.");
    alert("You Lose");
    break;
  case "A":
    alert("You attacked a Gorilla? As a Chipmunk?! What are you doing? You barely have any experience fighting as a Chipmunk!");
    alert("You're dead.");
    alert("Obviously.");
    alert("You Lose");
    break;
  case "b":
    alert("You try to reason with the Gorilla. You tell it about your childhood, first love, marriage. You tell it about the family you have back home, the children who are waiting for you. You tell the Gorilla about the spell placed on you by Usidore the Blue. You tell the Gorilla that the Dark Lord wishes to conquer the world and that the Lunar Sword is the only way to stop him.");
    alert("The Gorilla slams his fist down onto you, crushing you instantly.");
    alert("Gorillas and Chipmunks don't speak the same language, dumb-dumb.");
    alert("You Lose");
    break;
  case "B":
    alert("You try to reason with the Gorilla. You tell it about your childhood, first love, marriage. You tell it about the family you have back home, the children who are waiting for you. You tell the Gorilla about the spell placed on you by Usidore the Blue. You tell the Gorilla that the Dark Lord wishes to conquer the world and that the Lunar Sword is the only way to stop him.");
    alert("The Gorilla slams his fist down onto you, crushing you instantly.");
    alert("Gorillas and Chipmunks don't speak the same language, dumb-dumb.");
    alert("You Lose");
    break;
};

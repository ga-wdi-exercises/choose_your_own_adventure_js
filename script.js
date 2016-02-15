//First Prompt to Pick a Number>Character
var start_number = prompt("Good morrow, my fair adventurer. Please pick a number 1 through 4 (i.e. 1, 2, 3, or 4):");
//1->Hermia
if (start_number === "1") {
  var hermia_intro = prompt("You are Hermia. You are in love with Lysander, but your father insists that you marry Demetrius. Demetrius is attractive, but a jack-ass. Lysander has a heart of gold. Your father threatens you with three options: \n-Marry Demetrius (M)\n-Face death (D)\n-Become a nun (N).\nAfter you father leaves, Lysander pleads that you run away with him and elope (R).\nWhat is your choice (M, D, N, R)?");
} if (hermia_intro === "R") { //RUN AWAY
        var hermia_run = prompt("RUN AWAY WITH LYSANDER.\nGood choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead! After a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Do you stay in the forest (F) or return home (H)?");
            if (hermia_run === "F") {
                var hermia_forest = prompt("FOREST\nLysander and you have a fairy-filled wedding and live in peace with nature for the rest of your days. Congratulations!");
            } else if (hermia_run === "H") {
                var hermia_home = prompt("HOME\nNow that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!");
            }
    } else if (hermia_intro === "M") { //MARRY DEMETRIUS
        var hermia_marry = prompt("MARRY DEMETRIUS.\nYou are truly Daddy's little girl. You marry Demetrius, but you have an unhappy life. Do you want to change your previous answer (Y/N)?");
            if (hermia_marry === "Y") {
                var hermia_yes = prompt("Good choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead! After a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Now that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!");
            } else if (hermia_marry === "N") {
                var hermia_marry_no = prompt("You have a comfortable, but unhappy life. Lysander throws rocks at your window, but it's too late.");
            }
    } else if (hermia_intro === "D") { //DEATH
        var hermia_die = prompt("DEATH.\nYou have been reading too much Romeo and Juliet. You are put to death, and your father is very sad. Do you want to change your previous answer (Y/N)?");
            if (hermia_die === "Y") {
                var hermia_yes = prompt("Good choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead! After a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Now that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!");
            } else if (hermia_die === "N") {
                var hermia_die_no = prompt("Okay, well unfortunately you are still dead then.");
        }
    } else if (hermia_intro === "N") { //NUN
        var hermia_nun = prompt("NUN.\nYou are banished to a temple and you are only allowed to sleep, eat, and worship Artemis for the rest of your days. Do you want to change your previous answer (Y/N)?")
            if (hermia_nun === "Y") {
                var hermia_yes = prompt("Good choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead! After a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Now that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!");
            } else if (hermia_nun === "N") {
                var hermia_nun_no = prompt("Have fun worshipping Artemis for the rest of your days.");
        }
    }
//2->Helena
} else if (start_number === "2") {
  console.log('Helena');
//3->Lysander
} else if (start_number === "3") {
  console.log('Lysander');
//4->Demetrius
} else if (start_number === "4") {
  console.log('Demetrius');
//Other numbers.
} else {
  //console.log('Not valid number');
  var start_number = prompt("Good morrow, my fair adventurer. Please pick a number 1 through 4 (i.e. 1, 2, 3, or 4):");
  //HOW DO I MAKE THIS A LOOP?
}

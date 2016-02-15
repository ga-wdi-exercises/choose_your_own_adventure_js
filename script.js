//First Prompt to Pick a Number>Character
var start_number = prompt("Good morrow, my fair midsummer adventurer. Please pick a number 1 through 4 (i.e. 1, 2, 3, or 4):");

//1->Hermia
if (start_number === "1") {
  var hermia_intro = prompt("You are Hermia!\nYou are in love with Lysander, but your father insists that you marry Demetrius. Demetrius is attractive, but a jack-ass. Lysander has a heart of gold. Your father threatens you with three options: \n-Marry Demetrius (M).\n-Face Death (D).\n-Become a Nun (N).\nAfter you father leaves, Lysander pleads that you run away with him and elope (R).\nWhat is your choice (M, D, N, R)?");
    if (hermia_intro === "R" || hermia_intro === "r") { //RUN AWAY
        var hermia_run = prompt("RUN AWAY WITH LYSANDER.\nGood choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead! After a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Do you stay in the forest (F) or return home (H)?");
            if (hermia_run === "F" || hermia_run === "f") {
                var hermia_forest = prompt("FOREST\nLysander and you have a fairy-filled wedding and live in peace with nature for the rest of your days. Congratulations!");
            } else if (hermia_run === "H" || hermia_run === "h") {
                var hermia_home = prompt("HOME\nNow that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!");
            }
    } else if (hermia_intro === "M" || hermia_intro === "m") { //MARRY DEMETRIUS
        var hermia_marry = prompt("MARRY DEMETRIUS.\nYou are truly Daddy's little girl. You marry Demetrius, but you have an unhappy life. Do you want to change your previous answer (Y/N)?");
            if (hermia_marry === "Y" || hermia_marry === "y") {
                var hermia_yes = prompt("Good choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead!\nAfter a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Now that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!");
            } else if (hermia_marry === "N" || hermia_marry === "n") {
                var hermia_marry_no = prompt("You have a comfortable, but unhappy life. Lysander throws rocks at your window, but it's too late.");
            }
    } else if (hermia_intro === "D" || hermia_intro === "d") { //DEATH
        var hermia_die = prompt("DEATH.\nYou have been reading too much Romeo and Juliet. You are put to death, and your father is very sad. Do you want to change your previous answer (Y/N)?");
            if (hermia_die === "Y" || hermia_die === "y") {
                var hermia_yes = prompt("Good choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead!\nAfter a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Now that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!");
            } else if (hermia_die === "N" || hermia_die === "n") {
                var hermia_die_no = prompt("Okay, well unfortunately you are still dead then.");
        }
    } else if (hermia_intro === "N" || hermia_intro === "n") { //NUN
        var hermia_nun = prompt("NUN.\nYou are banished to a temple and you are only allowed to sleep, eat, and worship Artemis for the rest of your days. Do you want to change your previous answer (Y/N)?")
            if (hermia_nun === "Y" || hermia_nun === "y") {
                var hermia_yes = prompt("Good choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead!\nAfter a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Now that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!");
            } else if (hermia_nun === "N" || hermia_nun === "n") {
                var hermia_nun_no = prompt("Have fun worshipping Artemis for the rest of your days.");
        }
    }
//2->Helena
} else if (start_number === "2") {
  //console.log('Helena');
  var helena_intro = prompt("You are Helena!\nYou are pretty awkward and you are desperately in love with Demetrius. Unfortunately, Demetrius has his sights set on Hermia. Hermia loves Lysander, but her father is forcing her to marry Demetrius. Oy!\nYou overhear Hermia and Lysander's plans to run away and elope. Do you:\n-Tell Demetrius of their impending elopement (T).\n-Or stay quiet (S)?");
    if (helena_intro === "T" || helena_intro === "t") {
        var helena_tell = prompt("TELL DEMETRIUS\nGood choice. Demetrius goes after the pair of lovers, and you follow him into the forest. At first Demetrius still refuses to consider your love, but then a fairy enchants him and he loves you!\nHowever, the fairy also accidentally enchants Lysander and the two boys are fighting over your love. You are unaware that this is the working of fairies and you think they are mocking you. Furthermore, Hermia is mad at you for stealing Lysander.\nDo you run away (R) or fight back (F)?");
            if (helena_tell === "R" || helena_tell === "r") {
                var helena_run = prompt("RUN AWAY\nThe woods are filled with vines and thickets, and it gets very dark. You become too weary to carry on and you fall asleep.\nHowever, you magically wake up in Demetrius' loving arms! Lysander has been disenchanted and loves Hermia again. The four of you return home, have a joint wedding, and live happily ever after. Congratulations!");
            } else if (helena_tell === "F" || helena_tell === "f") {
                var helena_fight = prompt("FIGHT BACK\nAfter a hilarious quarrel among the four lovers, you all become too weary and fall asleep.\nHowever, you magically wake up in Demetrius' loving arms! Lysander has been disenchanted and loves Hermia again. The four of you return home, have a joint wedding, and live happily ever after. Congratulations!");
            }
    } else if (helena_intro === "S" || helena_intro === "s") {
        var helena_stay = prompt("STAY QUIET\nHermia and Lysander are caught by the police, and Hermia is forced to marry Demetrius. Do you want to change your previous answer (Y/N)?");
            if (helena_stay === "Y" || helena_stay === "y") {
                var helena_yes = prompt("Good choice. Demetrius goes after the pair of lovers, and you follow him into the forest. At first Demetrius still refuses to consider your love, but then a fairy enchants him and he loves you!\nHowever, the fairy also accidentally enchants Lysander and the two boys are fighting over your love. You are unaware that this is the working of fairies and you think they are mocking you. Furthermore, Hermia is mad at you for stealing Lysander.\nAfter a hilarious quarrel among the four lovers, you all become too weary and fall asleep. However, you magically wake up in Demetrius' loving arms! Lysander has been disenchanted and loves Hermia again.\nThe four of you return home, have a joint wedding, and live happily ever after. Congratulations!");
        } else if (helena_stay === "N" || helena_stay === "n") {
                var helena_no = prompt("You remain alone and sad for the rest of your life.");
        }
    }

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

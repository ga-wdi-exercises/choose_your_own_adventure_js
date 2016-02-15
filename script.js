var start_number = prompt("Good morrow, my fair adventurer. Please pick a number 1 through 4 (i.e. 1, 2, 3, or 4):");

if (start_number === "1") {
  var hermia_intro = prompt("You are Hermia. You are in love with Lysander, but your father insists that you marry Demetrius. Demetrius is attractive, but a jack-ass. Lysander has a heart of gold. Your father threatens that if you do not marry Demetrius (M), you must either face death (D) or become a nun (N). Lysander pleads that you run away with him and elope (R). What is your choice (M, D, N, R)?");
    if (hermia_intro === "R") {
      var hermia_run = prompt ("RUN AWAY WITH LYSANDER. Good choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead! After a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Do you stay in the forest (F) or return home (H)?");
    }
} else if (start_number === "2") {
  console.log('Helena');
} else if (start_number === "3") {
  console.log('Lysander');
} else if (start_number === "4") {
  console.log('Demetrius');
} else {
  console.log('Not valid number');
}

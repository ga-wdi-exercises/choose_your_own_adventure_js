# Choose Your Own Adventure!

Using what you know about data types, variables, operators, conditional blocks, and accepting user input, create a text-based game that allows the user to arrive at different "destinations" based on the inputs they type.

### Rules
* Any path the user goes down must ask them at least **three** questions.
* There must be a minimum of **seven** total destinations the user could arrive at based on their responses.
* For **at least one** of the questions asked, there must be **more than two possible user responses**.
* Your code must contain **at least one loop**.
* Your code must make use of **both string and number user inputs**.
> **Hint:** You may need `parseInt()` and `toString()`

# Midsummer Night's Dream

* Good morrow, my fair adventurer. Please pick a number `1` through `4` (i.e. `1`, `2`, `3`, or `4`): **(1/2/3/4)**
    * `1`
      * You are Hermia. You are in love with Lysander, but your father insists that you marry Demetrius. Demetrius is attractive, but a jack-ass. Lysander has a heart of gold. Your father threatens you with three options: \n-Marry Demetrius (M)\n-Face death (D)\n-Become a nun (N).\nAfter your father leaves, Lysander pleads that you run away with him and elope (R).\nWhat is your choice (M, D, N, R)?  **(M/D/N/R)**
          * `M`arry Demetrius
              * You are truly Daddy's little girl. You marry Demetrius, but you have an unhappy life. Do you want to change your previous answer (Y/N)? **(Y/N)**
                  * `Y`es
                      * Good choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead! After a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Now that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!
                  * `N`o
                      * You have a comfortable, but unhappy life. Lysander throws rocks at your window, but it's too late.
          * `D`eath
              * You have been reading too much Romeo and Juliet. You are put to death, and your father is very sad. Do you want to change your previous answer (Y/N)? **(Y/N)**
                  * `Y`es
                      * Good choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead! After a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Now that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!
                  * `N`o
                      * Okay, well unfortunately you are still dead then.
          * `N`un
              *  You are banished to a temple and you are only allowed to sleep, eat, and worship Artemis for the rest of your days. Do you want to change your previous answer (Y/N)? **(Y/N)**
                  * `Y`es
                      * Good choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead! After a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Now that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!
                  * `N`o
                      * Have fun worshipping Artemis for the rest of your days.
          * `R`un away with Lysander
              * Good choice. Lysander and you enter a forest enchanted by fairy creatures. Helena and Demetrius have followed you into the forest as well. Lysander and Demetrius have been put under a fairy spell, and they are now both in love with Helena instead! After a hilarious quarrel, the fairies disenchant Lysander and he loves you again. Plus, Demetrius still loves Helena! Do you stay in the forest (F) or return home (H)? **(F/H)**
                  * `F`orest
                      * Lysander and you have a fairy-filled wedding and live in peace with nature for the rest of your days. Congratulations!
                  * `H`ome
                      * Now that Demetrius loves Helena, you are successfully able to convince your father to let you marry Lysander. Lysander and you have a beautiful wedding and live happily ever after. Congratulations!

    * `2`
      * You are Helena. You are pretty awkward and you are desperately in love with Demetrius. Unfortunately, Demetrius has his sights set on Hermia. Hermia loves Lysander, but her father is forcing her to marry Demetrius. Oy! You overhear Hermia and Lysander's plans to run away and elope. Do you tell Demetrius of their impending elopement (`T`) or stay quiet (`S`)? **(T/S)**
          * `T`ell Demetrius
              * Good choice. Demetrius goes after the pair of lovers, and you follow him into the forest. At first Demetrius still refuses to consider your love, but then a fairy enchants him and he loves you! However, the fairy also accidentally enchants Lysander and the two boys are fighting over your love. You are unaware that this is the working of fairies and you think they are mocking you. Furthermore, Hermia is mad at you for stealing Lysander. Do you run away (`R`) or fight back (`F`)? **(R/F)**
                  * `R`un away
                      * The woods are filled with vines and thickets, and it gets very dark. You become too weary to carry on and you fall asleep. However, you magically wake up in Demetrius' loving arms! Lysander has been disenchanted and loves Hermia again. The four of you return home, have a joint wedding, and live happily ever after. Congratulations!
                  * `F`ight back
                      * After a hilarious quarrel among the four lovers, you all become too weary and fall asleep. However, you magically wake up in Demetrius' loving arms! Lysander has been disenchanted and loves Hermia again. The four of you return home, have a joint wedding, and live happily ever after. Congratulations!
          * `S`tay quiet`
              * Hermia and Lysander are caught by the police, and Hermia is forced to marry Demetrius. Do you want to change your previous answer? **(Y/N)**
                  * `Y`es
                      * Good choice. Demetrius goes after the pair of lovers, and you follow him into the forest. At first Demetrius still refuses to consider your love, but then a fairy enchants him and he loves you! However, the fairy also accidentally enchants Lysander and the two boys are fighting over your love. You are unaware that this is the working of fairies and you think they are mocking you. Furthermore, Hermia is mad at you for stealing Lysander. After a hilarious quarrel among the four lovers, you all become too weary and fall asleep. However, you magically wake up in Demetrius' loving arms! Lysander has been disenchanted and loves Hermia again. The four of you return home, have a joint wedding, and live happily ever after. Congratulations!
                  * `N`o
                      * You remain alone for the rest of your life.

    * `3`
      * You are Lysander. Insert description of character here. **(E/D)**
          * `E`lope with Hermia
          * `D`uel Demetrius
              * Do you want to change your previous answer? **(Y/N)**
                  * `Y`es
                  * `N`o
                      * Demetrius kills you in a duel. Ouch.

    * `4`
      * You are Demetrius. Insert description of character here. **(F/B)**
          * `F`ollow Hermia
          * `B`achelor
              * I forgot to mention that you are poor and that marrying into Hermia's family will bring you riches. Do you want to change your previous answer? **(Y/N)**
                  * `Y`es
                  * `N`o
                      * That annoying Helena follows you around, and you remain poor and alone for the rest of your days.

    * `0` OR `< 4`
      * Please pick either `1`, `2`, `3`, or `4`. **(Loops back to previous command)**

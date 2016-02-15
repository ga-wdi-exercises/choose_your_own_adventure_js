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
    * `1` You are Hermia. Insert description of character here. **(M/D/C/R)**
          * `M`arry Demetrius
              * You are truly Daddy's little girl. You marry Demetrius, but you have an unhappy life. Do you want to change your previous answer? **(Y/N)**
                  * `Y`es.
                  * `N`o.
                      * You have a comfortable, but unhappy life. Lysander throws rocks at your window, but it's too late.
          * `D`eath
              * You have been reading too much Romeo and Juliet. You are put to death, and your father is very sad. Do you want to change your previous answer? **(Y/N)**
                  * `Y`es.
                  * `N`o.
                      * Okay, well unfortunately you are still dead then.
          * `C`hastity
              *  Do you want to change your previous answer? **(Y/N)**
                  * `Y`es.
                  * `N`o.
                      * Have fun worshipping Artemis for the rest of your days.
          * `R`un away with Lysander
              * Good choice. Insert plot here.
    * `2` You are Helena. Insert description of character here. **(T/S)**
          * `T`ell Demetrius
          * `S`tay quiet`
              * Hermia and Lysander are caught by the police, and Hermia is forced to marry Demetrius. Do you want to change your previous answer? **(Y/N)**
                  * `Y`es.
                  * `N`o.
                      * You remain alone for the rest of your life.
    * `3` You are Lysander. Insert description of character here. **(E/D)**
          * `E`lope with Hermia
          * `D`uel Demetrius
              * Do you want to change your previous answer? **(Y/N)**
                  * `Y`es.
                  * `N`o.
                      * Demetrius kills you in a duel. Ouch.
    * `4` You are Demetrius. Insert description of character here. **(F/B)**
          * `F`ollow Hermia
          * `B`achelor
              * I forgot to mention that you are poor and that marrying into Hermia's family will bring you riches. Do you want to change your previous answer? **(Y/N)**
                  * `Y`es.
                  * `N`o.
                      * You remain poor and alone for the rest of your days.
    * `0` OR `< 4` Please pick either `1`, `2`, `3`, or `4`. **(Loops back to previous command)**

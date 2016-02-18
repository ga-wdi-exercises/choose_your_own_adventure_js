console.log("Long, long ago in a galaxy far, far away... ")
function CharacterSelect() {
  var characterSelect = prompt ("Welcome to Star Wars: The Adventure Game! Would you like to play as (L)uke Skywalker, (H)an Solo or Lando (C)arlissian? L/H/C? (case sensitive)")
    if (characterSelect  == 'L') {
      console.log("Luke Skywalker  - You're on the forest moon of Endor with Han Solo and Leia. Your mission is to disrupt the Death Stars defense power grid. However, your arrival has caught the attention of 2 storm troopers who race off on their Speeder Bikes to alert the base.")
      var giveChase = prompt ("Do you give chase and stop them? Y/N (case sensitive)");
        if (giveChase == 'Y') {
          console.log("You chase down the stormtroopers and stop them from alerting the base of your presence. Good decision! But wait... It's a TRAP! Darth Vador has used the stormtroopers to lure you away and capture you. He now takes you to the Death Star and presents you to the emperor.")
          var challenge = prompt ("Do you (A) Challenge the emperor to a showdown with the fate of the empire as the prize? or (B) Attempt to reach Darth Vador's sensitive side and convince him to side with his only son and turn against his old master? A/B (case sensitive)");
            if (challenge == 'A') {
              console.log("Bad call there Sparkie! The emperor mops the floor with you. Although Han Solo and Lando are successful in their respected missions, the emperor springs his surprise attack on the rebellion and decimates them once and for all. Nice going there!")
            }
            else if (challenge == 'B') {
              console.log("All you need is love to reach your estranged dad, Darth Vador and you do so successfully. Upon realizing what a bad father figure he'd become, he decides to switch sides and help you defeat his old master, the emperor. Upon discarding the old geezers carcass down an unnecessarily placed bottomless pit, your dad takes you out for ice-cream and you play catch down on Endor as the rest of you cronies celebrate the demise of the emperor and his evil rule. The Star Wars universe salutes you!");
            }
          }
        }
        else if (giveChase == 'N') {
          console.log("You chose to ignore the stormtroopers and they alert the base of your presence. The mission is a failure and the rebellion is decimated by the Death Star. Nice going there!")
        }
    if (characterSelect == 'H') {
      console.log("You're on the forest moon of Endor with Luke & Leia. Your mission is to disrupt the Death Stars defense power grid. As Luke & Leia speed off into the woods chasing the storm troopers that have stumbled into your encampment, you can either storm the power grid facility and take it using your meager attempt at 'Shock & Awe', or sneak around the lackadaisical guards and take them by surprise?")
      var sneak = prompt ("(A) storm the power grid facility and take it using your meager attempt at 'Shock & Awe', or (B) sneak around the lackadaisical guards and take them by surprise? A/B (case sensitive)");
        if (sneak == 'A') {
          console.log("Bad call there Sparkie! The guards alert the base and you're easily defeated and captured. Lando's attack fails and the Millennium Falcon is destroyed. The rebellion is over and you spend the rest of your days as a chew toy for Jabba the Hutt's pet lizard. Nice going there!")
        }
        else if (sneak == 'B') {
          console.log("You successfully sneak around and take the bewildered guards by surprise. You're able to easily capture the rest of the unassuming guards and engineers and you proceed to destroy the defense grid allowing for Lando to successfully launch his offensive and destroy the Death Star. The emperor is defeated and Leia looks up at you with her longing eyes and asks what your next move is.")
          var marriage = prompt ("Do you (A) profess your undying love for Leia and marry her? Or, do you (B) tell her that with your new found fame and popularity, it would be ridiculous for you to settle for one woman and fly off in the Millennium Falcon to explore the galaxy and 'sow your royal oats'? A/B (case sensitive)");
            if (marriage == 'A') {
              console.log("Upon marrying Leia, your love bears fruit in at least 1 son, who later turns evil and kills you.. where you fall into a yet again unnecessarily placed endless pit. But at least there will be 3 more movies thanks to your romantic decision making. The Star Wars universe salutes you!")
            }
            else if (marriage == 'B') {
              console.log("Since Poppa was a Rolling Stone, you proceed to roam the galaxy and pick up on endless women by dropping the destruction of not just one, but TWO Death Stars! But as in all things in life, your allure fades and you die a miserable, lonely death upon realizing your player ways has cost the galaxy of at least 3 more Star Wars sagas! Because without the birth of Kylo Ren, there is no episode 7, 8 or 9. Nice going there!")
            }
        }
    }
    if (characterSelect == 'C') {
      console.log("You're flying the Millennium Falcon and your mission is to lead the final assault on the newly minted Death Star 2.0. You are hoping that Han Solo, Luke & Leia are able to destroy the defense grid, forcing the Death Star's shields to drop and make it vulnerable to your onslaught. Han Solo and the gang have not signaled success in their mission yet and your armada is approaching the Death Star's coordinates.")
      var cautiousAttack = prompt ("Do you (A) throw caution to the wind and attack the Death Star with your entire force, without signal from the ground team? or (B) Cautiously await the signal from your trusted compadres before committing to an attack. Or do you deviously choose mysterious option (C)? A/B/C (case sensitive)");
        if (cautiousAttack == 'A') {
          console.log("Bad call there Sparkie! Your armada of ships are no match for the Death Star's defense grid. They easily make mince meat of your armada and proceed to decimate the rebellion once and for all. The Millennium is destroyed and and you are captured cowering in an escape pod. Nice going there!")
        }
        else if (cautiousAttack == 'B') {
          console.log("As one well-versed in the teachings of Sun Tsu, you patiently await the right moment to strike and it pays off! You will now forever be know as the General who destroyed Death Star 2.0 in the biggest battle this side of the galaxy! Once Han Solo decides to marry Leia and live the married life, you are free to roam the galaxy and revel in your new-found fame and fortune. You are forever referred to as the Most Interesting Man in the Galaxy. The Star Wars universe salutes you!")
        }
        else if (cautiousAttack == 'C') {
          console.log("Alas, your true nature is exposed! You have chosen to abandon the rebellion and join forces with the emperor. Clearly this has been your plan all along. You have crippled the rebellion and led them to their demise. Upon decimating the rebellion, the emperor rewards your loyalty by taking you on as his new apprentice. You take on the name, Darth Benedict and rule beside the emperor for millennia. Well... at least until Darth Vador gets uneasy with you stealing his shine and he 'accidentally' pushes you into.. you guessed it, an unnecessarily placed bottomless pit and you fall to your untimely death. Nice going there!")
        }
    }
  }

CharacterSelect()

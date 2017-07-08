## Pseudo-coded Example

What is your name?
* `Jessa`

Hello, `Jessa`. Do you prefer action, horror, romance, or thriller? Enter: **[a/h/r/t]**
* `a`
    * Great choice! Would you like to battle monsters with a sword, or with arrows **[s/a]**
        * `s`word
            * You chose to be a soul reaper! You have been assigned a Zanpakuto (sword weapon). Great timing, too! A hollow has appeared before you. Now hurry up and name your Zanpakuto before it's too late! Choose one!
            [Z]angetsu (Slaying Moon)
            [S]enbonzakura (Thousand Cherry Blossoms)
            [K]azeshini (Wind of Death) **[]**
                * `Z`
                    * You pull Zangetsu from it's place on your back and began slicing away at the monster. Soon, you realize the monster is so strong so you have to use your swords shikai power! Your sword transforms from a large curved blade, to a long, slim blade. Don't worry! This means all your spiritual power has compressed and focused into the blade. With lightening fast speed, you slice the monster in a thousand different directions, killing it. The monster didn't even know what hit him! Great job!
                * `S`
                    * You removed Senbonzakura from it's sheath and began slicing away at the monster. Soon, you realize the monster is so strong so you have to use your swords shikai power! You call out it's power "chire" (scatter) and out comes thousands of razor sharp cherry blossoms which surround the monster and dissintegrate it into tiny pieces to small to see with the human eye. Great job!
                * `K`
                    * You remove Kazeshini from it's sheath and begin slicing away at the monster. Soon, you realize the monster is so strong so you have to use your swords shikai power! You call out it's power "kare" (reap) and your sword turns into a kusarigama (a chain-sickle). You swing Kazeshini in circles above your head, and with expert precision, whip it forward to completely entangle and immobilize the monster. You rush forward and strike the monster, killing it. Great job!

        * `a`rrows
            * You chose to be a Quincy! Oh, look, a hollow has appeared. Quick! Kill it! How many arrows do you have?

                * `> random num`
                    * With lightening fast speed, you shot at the monster until it died. You killed it. Great job!
                * `< random num`
                    * You did not have enough arrows and got eaten by a hollow. Goodbye :()
* `h`
    * Oh no! There is a horde of man eating giants chasing you. Where do you make your escape, the city or forest? **[c/f]**
        * `c`
            * You entered into the city. Quick! You need a place to hide. Where do you go?
              * `U`nderground
                * You managed to find safe passage into the secret undergound passages in the city. Eventually the monster became distracted and you left safely! You're saved!
              * `H`ouse
                * Everyone's doors were locked and no one would let you in! You got eaten by a giant :(.
        * `f`
            * You entered into the forest and climbed to the top of a very tall tree. After hours of watching the giants try to reach you, a mysterious flying stranger came out of no where and killed them all. You're saved!
* `r`
    * Would you like to be Sawako (the female) or Kazehaya (the male)? **[s/k]**
        * `s`awako
            *
        * `k`azehaya
            *
* `t`
    * I see you like thrills. Good or evil? **(g/e)**
        * `G`ood
            * You have been tasked to find a mass serial killer who has somehow been killing people with heart attacks! They could be anywhere. Where could they be?
            [J]apan
            [U]nited States
            [A]ustrailia
            [Use random method that determines which country is the right choice]
              * true
                * You narrow down the possible locations and air a special message only in ${city}. You successfully fool the killer to believe it's a worldwide newscast! The killer gives himself away by killing someone on the newscast. Now who is the culprit?
                [L]ight
                [O]scar
                [M]isa
                  * `L`
                    * You found him! You die, but not before passing on your theories to your protege who takes down the killer :( You are a hero!
                  * `M`
                    * You failed! The killer gets away and rules the world! You die!
                  * `O`
                    * you failed! The killer gets away and rules the world! You die!
             * false
               * You narrow down the possible locations and air a special message only in [country], hoping to fool the killer to believe it's a worldwide newscast! Nothing happens, your plan fails and the killer gets away and rules the world.
            B.
        * `E`vil
            * You find a notebook that if you right anyones name in, they will die in less than 60 seconds. After years of attempting to conquer the world you are defeated by your long time enemy L. You finally die when a death god writes your name in to the notebook you found.

var input = ''

 function startGame () {
   while (input.toLowerCase() !== 'n') {
     input = prompt('What is your name?')

     var name = input

        input = prompt(`Hello, ${name}. You are about to embark on an epic adventure! Choose your starter pokemon wisely! Pick a starter:\n\n[B]Bulbasaur\n[C]Charmander\n[S]Squirtle\n[P]Pikachu\n\n(Brackets indicate choice so enter [B/C/S/P])`).toLowerCase()


     var choice = input

     switch (choice) {
       case 'b':
         bulbasaurPath()
         break
       case 'c':
         charmanderPath()
         break
       case 's':
         squirtlePath()
         break
      case 'p':
           pikachuPath()
           break
       default:
         alertWrongChoice()
     }
     input = prompt('You finished the game! Play again?\n[Y]es\n[N]o')
   }

   alertEnd()
 }

 /** I choose Bulbasor **/
 function bulbasaurPath () {

   input = prompt('Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker green patches. It has red eyes with white pupils and scleras and pointed, ear-like structures on top of its head. Its snout is short and blunt, and it has a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth.Want to battle Squirtle or Charmander?\n\n[S]Squirtle\n[C]Charmander').toLowerCase()

   if (input === 's') {
     battleSquirtle1()
   } else if (input === 'c') {
     battleCharmander1()
   }
 }

 function battleSquirtle1 () {
   input = prompt('Squirtle is a small Pokémon that resembles a light blue turtle. It is weak against leaf attacks, what will you do?\n\n[T]Tackle\n[V]Vine While \n[G]Growl').toLowerCase()

   if (input === 'v') {
     alert('Great work young trainer! Vine whip is super effective against water types!')
   } else if (input === 't') {
     alert('Good try but tackle didnt quite do the deed, Squirtle used skullbash and knocked you out.')
   } else if (input === 'g') {
     alert('Squirtle laughed at your pitiful growl.')
   } else {
     alertWrongChoice()
   }
 }
 function battleCharmander1 () {
   input = prompt('Fire burns at the tip of this Pokémons slender tail, and has blazed there since Charmanders birth. It is strong against leaf pokemon, what will you do?\n\n[s]Tackle\n[V]Vine Whip \n[g]Growl').toLowerCase()

   if (input === 'v') {
     alert('Chamander shot an ember at you! Hurry you are on fire head to the pokemon center stat!')
   } else if (input === 't') {
     alert('Good try but tackle didnt quite do the deed, Squirtle used skullbash and knocked you out.')
   } else if (input === 'g') {
     alert('Charmanders laughed at your pitiful growl.')
   } else {
     alertWrongChoice()
   }
 }
 /** I choose Charmander **/
 function charmanderPath () {

   input = prompt('Charmander is a bipedal, reptilian Pokémon with a primarily orange body. Its underside from the chest down and soles are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. Charmander has blue eyes. Its arms and legs are short with four fingers and three clawed toes. A fire burns at the tip of this Pokémons slender tail, and has blazed there since Charmanders birth. The flame can be used as an indication of Charmanders health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged.Want to battle Squirtle or Bulbasaur?\n\n[s]Squirtle\n[b]Bulbasaur').toLowerCase()

   if (input === 's') {
     battleSquirtle2()
   } else if (input === 'b') {
     battleBulbasaur2()
   }
 }

 function battleSquirtle2 () {
   input = prompt('Squirtle is a small Pokémon that resembles a light blue turtle. It is strong agasint fire, what will you do?\n\n[t]Tackle\n[s]Scratch \n[e]Ember').toLowerCase()

   if (input === 's') {
     alert('Squirtle hid in his shell, pretty sure he is taking a nap')
   } else if (input === 't') {
     alert('Ouch, that looked like it hurt. How is your head doing?')
   } else if (input === 'e') {
     alert('Squirtle laughed at your pitiful ember and soaked you with water.')
   } else {
     alertWrongChoice()
   }
 }
 function battleBulbasaur2 () {
   input = prompt('Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker green patches. It is weak against leaf pokemon, what will you do?\n\n[t]Tackle\n[s]Scratch \n[e]Ember').toLowerCase()
   if (input === 's') {
     alert('Bulbasaur isnt phased by your tiny claws')
   } else if (input === 't') {
     alert('Ouch, that looked like it hurt. How is your head doing?')
   } else if (input === 'e') {
     alert('Bulbasaur is on fire!')
   } else {
     alertWrongChoice()
   }
  }
  /** I choose Squirtle **/
  function squirtlePath () {

    input = prompt(' It has large eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves.Want to battle Squirtle or Bulbasaur?\n\n[c]Charmander\n[b]Bulbasaur').toLowerCase()

    if (input === 'c') {
      battleCharmander3()
    } else if (input === 'b') {
      battleBulbasaur3()
    }
  }

  function battleCharmander3 () {
    input = prompt('Fire burns at the tip of this Pokémons slender tail, and has blazed there since Charmanders birth. It is strong against leaf pokemon, what will you do?\n\n[t]Tackle\n[b]Bubble Beam \n[g]Growl').toLowerCase()

    if (input === 't') {
      alert('Charmanders is an agile beast and doged your attack')
    } else if (input === 'b') {
      alert('Charmanders down for the count!')
    } else if (input === 'g') {
      alert('Charmanders laughed at your pitiful growl.')
    } else {
      alertWrongChoice()
    }
  }
  function battleBulbasaur3 () {
    input = prompt('Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker green patches. It is weak against leaf pokemon, what will you do?\n\n[t]Tackle\n[s]Scratch \n[g]Ember\n[p]throwPokeball').toLowerCase()
    if (input === 't') {
      alert('Bulbasaur caught you mid tackle and is whipping you back and forth')
    } else if (input === 'b') {
      alert('Bulbasaur down for the count!')
    } else if (input === 'g') {
      alert('Bulbasaur laughed at your pitiful growl.')
    } else if (input === 'p') {
    throwPokeball ()
      } else {
      alertWrongChoice()
    }
  }
  function pikachuPath () {
    input = prompt('You can get pikachu! But wait do you have enough ketchup? Pikachu really loves ketchup  (Enter a number)').toLowerCase()
       var num

     try {
       num = parseInt(input)
     } catch (e) {
       alertWrongChoice()
       return
     }

     var random = Math.floor(Math.random() * 10)

     if (num >= random) {
       alert('Wow you really lucked out, thats exactly how many you needed.')
     } else {
       alert(`That really isnt enough for the electric rodent, better run hes going to shock you. (you needed ${random}) ketchup bottles. I guess you are not going to be a pokemon master. :(`)
     }
   }
 function alertWrongChoice () {
   alert('You entered an incorrect choice! Please try again.')
 }

 function alertEnd () {
   alert('The End. Refresh to play again')
 }


startGame()

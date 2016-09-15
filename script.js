var x = prompt("You wake up and realize you're at Hogwarts. Congrats! The Sorting Hat Let's you decide what House you'll be in. GRYFFINDOR, HUFFELFPUFF, SLYTHERIN, or RAVENCLAW? ").toLowerCase();
if (x == 'gryffindor'){
  var y = prompt('Congrats on being unimaginative. You walk to your table and and see The WEASLEY Twins, HARRY and the gang, and an EMPTY seat all the way at the end of the table. Where will you sit?')
    if(y == 'weasley'){
      alert('You sit betwen Fred and George only to be fed a candy that makes you throw up in front of the whole school and you\'re so embarrassed that you immediately drop out...')
    }
    else if( y == 'harry') {
      var steps = parseInt(prompt('You sit next to Harry and immediately become friends with him. Bed time comes and you need to take you\'re favorite number in steps before you can go to sleep. How many steps do you take?'))
        if(steps < 5){
          alert('you take your steps, get in bed, and you continue life at Hogwarts as a normal wizard')
        }
        else if (steps < 100 ){
          for(var i = 0; i <100; i++)
          prompt('you find Draco moving up to the bedroom and you stop him saving Harry\'s life! There\'s a party for you and they need to order drinks. there are' + ' ' + i + 'students in Gryffindor.')

        }
        else if (steps < Infinity){
          alert('You\'re expelled for annoying the students with your constant walking. You should probably seek professional help for this.' )
        }

    }
    else if(y == 'empty'){
      alert('you sit by yourself and everyone thinks you\'re weird and you go through your time at Hogwarts with no friends...')
    }
}

else if(x == 'huffelpuff'){
  alert('good choice. Everyone is nice to you and you go through your time at hogwarts living happily ever after')
}
else if (x == 'ravenclaw'){
  alert('Good choice but you basically live out the rest of you time at Hogwarts pretty averagely')
}
else if(x == 'slytherin'){
  var x = prompt('You walk towards the Slytherin table and sit across form Draco Malfoy. Later that night he suggests you come with him, Crabbe, and Goyle to play a prank on Harry. Do you GO, STAY, or SLEEP?').toLowerCase();
    if(x == 'go'){
      var y = prompt('You arrive in the Gryffindor commons and Draco hands you a vile. He wants you to put it in Harry\'s drink, do you? Y/N').toLowerCase()
      if(y == 'y'){
        alert('You pour the contents of the vile into Harry\'s drink. The next day you find out Harry was poisoned and is dead. Good job...murdere')
      }
      else if(y == 'n'){
        alert('You refuse. Draco is angry and uses the killing curse on you. You may be dead but at least you didn\'t kill Harry')
      }
    }
    else if(x == 'stay'){
      alert('You stay and make friends with the other Slytherin kids. School is fun and you are happy.')
    }
    else if(x == 'sleep'){
      alert('You go to sleep. You make other friends in Slytherin kids. School is fun and you are happy.')
    }
}

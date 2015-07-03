// put code here!
var name = prompt ("what is your name")
console.log('Hello '+ name)

//First Question

var firstQuestion = prompt ('do you want to go the show tonight');
  if (firstQuestion === 'yes') {
    console.log('my man - i knew you were cool!')

    //yes

    var secondQuestion = prompt ('how do you want to get there?  Plane, train or automobile?')
      if (secondQuestion == 'plane') {
        console.log('i like the way you think, rockstar')

//planeQuestion

          var planeQuestion = prompt ('we are going to arrive in fashion, but only have time to grab one... which is it - booze or women');

          if (planeQuestion == 'women') {
            console.log ('Rock n Roll')
            var ladiesFirst = prompt ('how many lovely ladies do you know that we can bring?');
//ending 3
            if (ladiesFirst <= 0) {
              console.log('sorry, bro');
              alert ('weak dude, good thing i know a few... i think ill have them take your place on the plane actually');
              }

            else if (ladiesFirst == 1){
              console.log('i guess we will share?')
//ending 4
              alert ('your friend steals your girl and you end up alone and sad at the end of the night')
            }
//ending 5
            else if (ladiesFirst >= 2 && ladiesFirst < 10) {
              console.log('this is going to be a great night!');
              alert ('The Disco Biscuits play a great show and everybody has a really good time')
            }
//ending best
          else {
            console.log('you are the fucking man');
            alert ('The Disco Biscuits blow the roof off of the venue and you and your friends get invited back stage where you begin a life long firendship with the guitar player John "The Barber" Gutwillg... Also everybody gets laid')
          }

          }
//boozeFirst
          else if (planeQuestion === 'booze') {
            console.log('who needs women when you have the bottle, right?');
            alert ('you drink too much on the plane pass out and miss the show... Next time might wanna take it easy on the sauce.')
          }

          //   else {
          //   console.log('not an option bro');
          //   alert ('didnt quite get that')
          //   var planeQuestion = prompt ('we are going to arrive in fashion, but only have time to grab one... which is it - booze or women');
          // }

      }

//train


      else if (secondQuestion == 'train') {
        console.log('i take it you mean metro, sounds good');
        var drinks = prompt ('how many drinks do you want to sneak on the metro?')
          if (drinks >= 10) {
            console.log ('that might be tricky')
            alert ('the metro police catch you and you spend the night in the drunk tank and miss the show')
          }
//another ending
          else if (drinks <= 0) {
            console.log('weak dude');
            alert ('you have a safe and sober evening')
          }
//ending
          else {
            console.log('sounds fair, guess we wont rack up much of a bar tab')
            alert ('you have a safe, fun and reasonably priced evening')
          }
      }

//carLoop
      else if (secondQuestion == 'automobile') {
        console.log('someone is going to have to be the DD');
        var ddPrompt = prompt ('well that sucks, are you ok with being the DD?')
          while (ddPrompt != 'yes') {
            alert ('thats not safe');
            var ddPrompt = prompt ('well that sucks, are you ok with being the DD?')
          }
          console.log('parking is gonna be a bitch');
          alert ('you have a safe and sober evening, but get a speeding ticket on your way home')
      }


    //ending 2

      else {
        console.log('Thats not an option');
        alert ('you are already rambling - your night is over ' + name)
      }

  //ending 1

  }
  else {
    console.log(name+' i thought you were cool');
    alert ('your night is over before it even started ' + name)
  }

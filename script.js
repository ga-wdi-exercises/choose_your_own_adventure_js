
function info (){
  this.name = null
  this.ssn = null;
}
this.name = prompt('Please enter your full name')

while (!this.name.includes(' ') ) {
    this.name = prompt('Thats not actually a full name.  Enter your FULL name to continue')
}

var option = prompt('You hear a scream! Turn around to see a leatherclad with a knife standing over a woman tied to a St. Andrews cross!  You can run like a coward or fight the man to free your wife.  enter a random number to see what you would do ' )

if (option % 2 === 0)
{
  var option2 = prompt('You ran outside like a coward!  After checking the front door to make sure the man with the knife didnt follow out of The Crucible, you look at the street sign to get your bearings:  Youre on the corner of V St. and 5th St. Northeast DC.  You can call an uber, walk north, or walk south.  Type north, south, or uber to make your next decision:')

  if(option2 === 'north')
  {
    var option3 = prompt('You walk north and see a mcdonalds, type 1 to walk in, type 2 to walk past')

    if(option3 % 2 === 1)
    {
        var option4 = prompt('Enter your mcdonalds order')
        var option42 = prompt('Oh No! you must have left your wallet at The Crucible! press any key to walk back outside')
        var option43 = prompt('As you walk out of the mcdonalds, a homeless man asks you for money.  After telling him you dont have a wallet, he pulls a knife on you. Press 1 to fight or 2 to run')

        if(option43 % 2 === 1)
        {
          var option5 = prompt('you fight him, but you lose because he has a knife and you dont. dial 911 to call an ambulance')

          if(option5 === '911'){
            this.ssn = prompt('The ambulance arrives and you are safe.  All you need to do is enter in your Social Security Number so they can process your insurance')

            while(this.ssn.length != 9 )
            {
              this.ssn = prompt('that is not a valid SSN. Please enter a proper nine digit social security number to recieve medical attention')
            }
          }
        }
        else{
          var option5 = prompt('you run, but trip and he catches you.  you try to stop him but he overpowers you.  dial 911 to call an ambulance')

          if(option5 === '911'){
            this.ssn = prompt('The ambulance arrives and you are safe.  All you need to do is enter in your Social Security Number so they can process your insurance')

            while(this.ssn.length != 9 )
            {
              this.ssn = prompt('that is not a valid SSN. Please enter a proper nine digit social security number to recieve medical attention')
            }
          }
          else{
            var fin = prompt('You didnt dial 911 correctly and you died')
          }

        }
    }
    else
    {
      var option3 = prompt(' you walk by the mcdonalds but you are mugged by a homelessman.  dial 911 to call an ambulance')

      if(option3 === '911'){
        this.ssn = prompt('The ambulance arrives and you are safe.  All you need to do is enter in your Social Security Number so they can process your insurance')

        while(this.ssn.length != 9 )
        {
          this.ssn = prompt('that is not a valid SSN. Please enter a proper nine digit social security number to recieve medical attention')
        }
      }
      else{
        var fin  = prompt('you didnt dial 911 correctly and have now died')
      }
    }
  }
  else if (option2 === 'south') {
    var option3 = prompt('You walk south and are hit by a car. dial 911 to call an ambulance')

    if(option3 === '911'){
      this.ssn = prompt('The ambulance arrives and you are safe.  All you need to do is enter in your Social Security Number so they can process your insurance')

      while(this.ssn.length != 9 )
      {
        this.ssn= prompt('that is not a valid SSN. Please enter a proper nine digit social security number to recieve medical attention')
      }
    }

  }
  else if (option2 === 'uber') {
    var option3 = prompt('You walk into the street to get your uber but you are hit by a car.  dial 911 to get an ambulance')

    if(option3=== '911'){
      this.ssn = prompt('The ambulance arrives and you are safe.  All you need to do is enter in your Social Security Number so they can process your insurance')

      while(this.ssn.length != 9 )
      {
        this.ssn = prompt('that is not a valid SSN. Please enter a proper nine digit social security number to recieve medical attention')
      }
    }
    else {
      var fin = prompt('You didnt dial 911 correctly and died.')
    }

  }

}
else if (option % 2 != 0) {
  var option2 = prompt('fought the man but were badly injured because he has a knife and you dont.  dial 911 to call an ambulance')

  if(option2 === '911')
  {
    this.ssn = prompt('the ambulance is here but they need your Social security number in order to process your insurance.  enter your SSN to save your life.')

    if(this.ssn.length === 9){
        var fin = prompt('You received medical care and are safe at home.  Good night!')
    }
    else{

      while(this.ssn.length != 9 )
      {
        this.ssn = prompt('that is not a valid SSN. Please enter a proper nine digit social security number to recieve medical attention')
      }
    }
  }
  else{
    var option3 = prompt('you didnt call 911 correctly and you died inside The Crucible.  your family will be glad to hear where it was you died.')
  }
}
while(1 === 1){
    var end = prompt('Thanks for playing')
}

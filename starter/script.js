//Name: Josue Rosales
//Date: july 9th
//Description: choose your own adventure game.



var primen =[ "the adventure is about to begin, click ok to continue","there are many paths that this game can take , click ok to continue"];

for(var i =0; i< primen.length ; i++)
{
  var item = primen[i].toString();
  alert(item);
}



var name = prompt ("What is your name?");



if(name!==null)
{
  var year = parseInt(prompt( `Nice to meet you, ${name}. You are in a time machine, and you can go to any year you want, enter the year? (YYYY))`));
}



if (year>=2015)
{
  var bg = prompt(`you are in a modern city, woudl like to to play Baseball or Go watch movies? (B/G)`);


  switch (bg)
  {
    case 'B':
    {
      var sr = prompt(`great, would you like to Seat or Run ? (S/R)`);
      if(sr==='S')
      {
        alert(`Let's seat`);
      }
      else if (sr==='R')
      {
        alert(`Let's go to Run`);
      }
      else
      {
        console.log('there is something wrong in the logic');
      }
      break;
    }

    case 'G':
    {
      var io= prompt(`Would you like to watch Incentive or Other (I/O)`);
      if(io==='I')
      {
        alert(`This is a Scary Movie`);
      }
      else if (io==='O')
      {
        alert(`there are many movies available`);
      }
      else
      {
        console.log('there is something wrong in the logic');
      }
      break;
    }

    default:
    {
      console.log('there is something wrong');
    }

  }//end of switch


}

// next years


else if ( year>=1985 && year <=2014)
{
  var namex = prompt(`Nothing good happens during this time, let's change your name, what would you like to be called?`);
  alert('Try not to bring any attention  ${namex}')
}


else if ( year >= 1955 && year <= 1984)
{
  var yns = prompt(`You have to change the way you act, you are in different time, do you want to be different  (Y/N/S)`);
  if(yns ==='Y')
  {
    alert(`great`);
  }
  else if(yns ==='N')
  {
    alert(`It is not a good thing to do `);
  }
  else if(yns ==='S')
  {
    alert(`ok keep the same behavior you had in the past , and see how it goes.`);
  }
  else
  {
    console.log('there is something wrong with the code');
  }
  //near year

}



else if (year<1955)
{
  var hmt = prompt(`Now we are in weird times, You want to ride a Horse, or climb Mountains, os just keep Traveling and exploring the place(H/M/T)`);

  if(hmt ==='H')
  {
    alert(`It is fun to ride in horses`);
  }
  else if(hmt ==='M')
  {
    alert(`uuhh,, there is a lot of fresh air here in the Mountains, like never before`);
  }
  else if(hmt =='T')
  {
    var tl = prompt(`it is great to keep exploring, do you wanna travel by Train or do you wanna do Leg work? (T/L)`);
    if(tl==='T')
    {
      alert(`The train is full, and smells bad, lets go grab some food before we leave.`)
    }
    else if ( tl ==='L')
    {
      alert(`I don't understand why would you wanna walk , you will only ge to know this place.`);
    }
    else
    {
      console.log("there is something wrong with logic ");
    }

  }
  else
  {
    console.log('there is something wrong with the code');
  }


}



else
{
  console.log("there is something with years.")
}

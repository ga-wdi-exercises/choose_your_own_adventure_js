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
  var year = parseInt(prompt( `Nice to meet you, ${name}. What year would you like to go to? (YYYY))`));
}



if (year>=2015)
{
  var bg = prompt(`I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)`);


  switch (bg)
  {
    case 'B':
    {
      var sr = prompt(`Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)`);
      if(sr==='S')
      {
        alert(`Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.`);
      }
      else if (sr==='R')
      {
        alert(`You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.`);
      }
      else
      {
        console.log('there is something wrong in the logic');
      }
      break;
    }

    case 'G':
    {
      var io= prompt(`Griff is asking you if you are in, or out. What do you say? (I/O)`);
      if(io==='I')
      {
        alert(`Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.`);
      }
      else if (io==='O')
      {
        alert(`Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.`);
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
  var namex = prompt(`Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?`);
  prompt(`Welcome to the future, ${namex}`);
}


else if ( year >= 1955 && year <= 1984)
{
  var yns = prompt(`I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)`);
  if(yns ==='Y')
  {
    alert(`Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.`);
  }
  else if(yns ==='N')
  {
    alert(`Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.`);
  }
  else if(yns ==='S')
  {
    alert(`Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.`);
  }
  else
  {
    console.log('there is something wrong with the code');
  }
  //near year

}



else if (year<1955)
{
  var hmt = prompt(`I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)`);

  if(hmt ==='H')
  {
    alert(`Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.`);
  }
  else if(hmt ==='M')
  {
    alert(`You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855`);
  }
  else if(hmt =='T')
  {
    var tl = prompt(`Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)`);
    if(tl==='T')
    {
      alert(`Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.`)
    }
    else if ( tl ==='L')
    {
      alert(`Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.`);
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

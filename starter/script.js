// put code here!
var name = prompt("What\'s your name?");
console.log(name);

var gender = prompt("Hi, " + name + ". You have the day off today!  This script is going to help decide what to do.  First, we have to ask: are you male or female? (M/F)");
//console.log(gender);
 //**(M/F)**

if (gender === 'F' || gender === 'f'){
  console.log("Do what you want to do today!")
  alert("Do what you want to do today!")
}
  else {
  //(gender === 'M' || gender === 'm')
    console.log("So, " + name + ", you're a guy.")

  var married = prompt("Are you married? (Y/N)");
  if (married == 'N' || married == 'n'){

  var fwb = prompt("Do you have a girlfriend? (Y/N)");
  // The life of a single man:
    if ((fwb == 'N' || fwb == 'n') && (married == 'N' || married == 'n')){
      console.log("Single guy!  Lucky.")
      var single = prompt("You\'re on your own today, " + name + "! Movies, food, video games, or all three? Or are you broke? (M,F,V,3,B)");
        if (single == 'M' || single == 'm'){
          console.log("Great!  Go to the cheap theater and spend $15 on popcorn for dinner.");
          alert("Great!  Go to the cheap theater and spend $15 on popcorn for dinner.");
        }
        else if (single == 'F' || single == 'f'){
          console.log("Great!  Stay home and order pizza delivery for $15.  Don\'t forget to tip, because bros help each other out!");
          alert("Great!  Stay home and order pizza delivery for $15.  Don\'t forget to tip, because bros help each other out!");
        }
        else if (single == 'V' || single == 'v'){
          console.log("Great!  Stay home, play games, and spend $15 on pizza for dinner.");
          alert("Great!  Stay home, play games, and spend $15 on pizza for dinner.");
        }
        else if (single == '3'){
          console.log("Great!  Dave & Buster\'s it is!");
          alert("Great!  Dave & Buster\'s it is!");
        }
        else {
          console.log("Stay home, play video games, and download a movie while you cook ramen noodles!");
          alert("Stay home, play video games, and download a movie while you cook ramen noodles!");
        }
      }
    }
  }
// Not a single guy.
    if (married == 'Y' || married == 'y' || fwb == 'Y' || fwb == 'y'){
      console.log("My condolences.  Good luck, bro.")
      var askHer = prompt("Ask her what she wants to do today.  Shopping, movie, dinner, or stay home? (S/M/D/H)");

    if (askHer == 'S' || askHer == 's'){
        var shop = prompt("Does she want to go to the mall or to Costco? (M/C)")
          if (shop == 'm' || shop == 'M'){
            console.log("Take her to Tysons Galleria.");
            alert("Take her to Tysons Galleria.");
          }
          else {
            console.log("Take her to Costco, buy some toilet paper, then continue to Tysons Galleria.");
            alert("Take her to Costco, buy some toilet paper, then continue to Tysons Galleria.");
          }
        }
       else if (askHer == 'M' || askHer == 'm'){
        var herMovie = prompt("Cool.  Does she want to see Fast & Furious 12 or the remake of The Notebook? (F/N)");
        if (herMovie == 'F' || herMovie == 'f'){
          console.log("Really?  Awesome!  Hurry before she changes her mind!");
          alert("Really?  Awesome!  Hurry before she changes her mind!");
        }
        else{
          console.log("Of course.  You get to demonstrate your sensitive side again.  Bring tissues!");
          alert("Of course.  You get to demonstrate your sensitive side again.  Bring tissues!");
        }
      }
       else if (askHer == 'D' || askHer == 'd'){
        console.log("Sounds good.  Take her to that nice Italian restaurant at Tysons Galleria!");
        alert("Sounds good.  Take her to that nice Italian restaurant at Tysons Galleria!");
      }
      else {
        console.log("Nice.  Order Chinese delivery, ring up The Notebook on Netflix, and you're good to go!");
        alert("Nice.  Order Chinese delivery, ring up The Notebook on Netflix, and you're good to go!");
      }
    }

    //else if (status == 'N' || status == 'n')










/*
(M)ale: Are you married? **(Y/N)**
* 'No'
  Do you have a girlfriend? **(Y/N)**
    * 'N'
      * 'N' >-
          You're on your own today, *(name)*.  Movies, video games, or
          food?  Or all three? Or are you broke? **(M,V,F,3,B)**
          (M)ovie: Great!  Go to the cheap theater and spend $15 on
                  popcorn for dinner.
          (V)ideo games:  Great!  Stay home, play games, and spend
                  $15 on pizza for dinner.
          (F)ood:  Great!  Order pizza delivery for $15.
          (3):  Great!  Dave & Buster's it is!  ...If you have $115 to blow. **(Y,N)**
            (Y)es: Party!
            (N)o:  Stay home, play video games, and buy pizza AND beer!
          (B)roke: Stay home, play video games, then download a movie while you
                  cook ramen noodles!
*/

// *(Yes):  Ask what she wants to do.  Shopping, movie, dinner, or stay home?
//         **(S,M,D,H)**
//         (S)hopping: Cool!  Do you want to go to the mall, or to Costco?  **(M,C)**
//             (M)all:  Go to Tyson's Galleria.
//             (C)ostco:  Go to Costco, get some toilet paper, then
//                       continue to Tyson's Galleria.
//         (M)ovie: Cool!  Do you want to see Fast & Furious 12 or The Notebook?
//         **(F/N)**
//           (F)ast & Furious: Really?  Awesome!
//           The (N)otebook: (*Name), you get to show your sensitive side. Bring tissues!

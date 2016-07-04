// put code here!
var userName = prompt("Welcome to the exciting and lucrative world of cookie baking. You'll be presented with a series of choices to guide your growth. Pay extra attention to the words in ALL CAPS! Let's start: what is your name?");
var choiceOne = prompt("Welcome to " + userName + "'s Bakery! Right now, you have 0 COOKIES. Would you like to BAKE more cookies? Or NOT?").toLowerCase();

if (choiceOne === "not") {
  alert("You bake no cookies! Your bakery has gone out of business. You lose. Why are you even playing this if you don't want to bake? Come back when you're feeling cooperative.");
}
else if (choiceOne === "bake") {
  alert("You bake a cookie! You have 1 COOKIE. This seems inefficient.")
  var choiceTwo = prompt("You need to speed up this process. You need to buy something to help! Would you like a CURSOR to help you generate COOKIES faster, or a nice GRANDMA to bake more cookies?").toLowerCase();

  var cursorCount = 0;

  while (choiceTwo === "cursor") {
    if (cursorCount < 10) {
      var choiceTwo = prompt("You add a CURSOR to your bakery! I'm unsure how it works, but COOKIES are appearing slightly faster. Would you like another CURSOR, or to try out a nice GRANDMA?").toLowerCase();
      cursorCount++;
    }
    else if (cursorCount >= 10 && cursorCount < 20) {
      var choiceTwo = prompt("Look. The game's not going to progress until you buy a GRANDMA. Quit screwing around and choose one.").toLowerCase();
      cursorCount++; }
    else {
      alert("Okay, fine! You have so many CURSORS you've baked a million cookies. You win! Game over. Come back when you're willing to actually make other choices.")
      break;
    }
  }
  if (choiceTwo === "grandma") {
    alert("Now you have a nice GRANDMA. Your cookies per second are significantly higher! Good choice.");
    var choiceThree = prompt("Now you're really cooking! It's time to take this bakery to the next level. You can afford one of three new cookie-generating buildings. Would you like to invest in a cookie FARM, a cookie MINE, or a cookie FACTORY?").toLowerCase();

    if (choiceThree === "farm") {
      var choiceFarm = prompt("You've opened a lovely cookie FARM. You're growing fields on fields of delicious cookies! How would you like to develop this farm further? Do you want to grow ORGANIC cookies, or make some real money with an INDUSTRIAL farm?").toLowerCase();

      if (choiceFarm === "organic") {
        alert("You make a nice living cranking out organic COOKIES. They're not that different from regular COOKIES, but you get to charge twice as much! Congratulations on your successful COOKIE business! YOU WIN!")
      }
      else if (choiceFarm === "industrial") {
        alert("You pump your COOKIES full of pesticides and modify the heck out of their genetics! Before you know it, you're churning out more COOKIES than you could have ever dreamed! Ethics, shmethics. You've become hecka profitable! YOU WIN!");
      }
      }
    else if (choiceThree === "mine") {
      var choiceMine = prompt("You've opened a COOKIE MINE! You and GRANDMA are chiseling COOKIES out of the very earth itself. But this COOKIE vein runs deeper than the two of you can handle! How would you like to progress this mine? Would you like to get more MINERS? Or would you like to FRACK this dough right into your waiting hands?").toLowerCase();

      if (choiceMine === "miners") {
        alert("You shove as many MINERS into this hole as you can possibly fit, and the sheer force of numbers has increased your yield dramatically! Sadly, a number of them eventually perish in a deadly chocolate cave-in. But hey! You made it out fine, and much richer in delicious baked goods. YOU WIN?");
      }
      else if (choiceMine === "frack") {
        alert("You pump boiling chocolate into the holes in the earth! I think? To be honest, I'm still not 100% on what FRACKing actually is. Let's just say you've unearthed 1,000,000,000 COOKIES. But at irreparable environmental damage! But hey, that's for future generations to worry about. YOU WIN?");
      }
    }
    else if (choiceThree === "factory") {
      var choiceFactory = prompt("You open up a COOKIE FACTORY. Dough and chocolate chips are assembled on a highly efficient bakery assembly line! But after a few years, profits have started to dip. You need to lower your overhead! Would you like to AUTOMATE your factory, our OUTSOURCE to a bakery in China?").toLowerCase();

      if (choiceFactory === "automate") {
        alert("You lay off your entire human workforce and replace them with sophisticated COOKIE-assembling machinery! Efficiency has never been higher! The local town that came to rely on COOKIE-related jobs to survive has plunged into a deep economic depression, but hey! Not your problem. YOU WIN!");
      }
      else if (choiceFactory === "outsource") {
        alert("Your COOKIES are now produced in a Chinese facility that works dirt cheap! It's astonishing how much it's able to keep prices down. And as long as you avoid thinking about the horrible human rights violations involved, you and all of the COOKIE-buying public can still sleep at night! YOU WIN!");
      }
    }
    else if (choiceThree === "grandma") {
      var grandmaNumber = parseInt(prompt("Another one? Well, I guess enough GRANDMAS could potentially match the efficiency of the other options. How many GRANDMAS would you like to purchase?"));

      alert(grandmaNumber);

      while (grandmaNumber < 1000){
        if (grandmaNumber < 100) {
          var moreGrandmas = parseInt(prompt("It's still not enough. To make this entirely GRANDMA-based production work, you need a lot. I mean...what could go wrong? How many GRANDMAS would you like to add?"));
          grandmaNumber = grandmaNumber + moreGrandmas;
        }
        else if (grandmaNumber < 1000){
          var moreGrandmas = parseInt(prompt("So close. The GRANDMAS say they must be more. They must be many. Just keep adding more."));
          grandmaNumber = grandmaNumber + moreGrandmas;
        }
      }

      if (grandmaNumber >= 1000) {
        alert("Too many");
        alert("The GRANDMAS have begun buying more GRANDMAS");
        alert("They won't stop baking. They bake everything. They bake everyone");
        alert("All has become dough. All has become chocolate chip");
        alert("i am cookie");
        alert("...");
        alert("You have ∞ cookies");
        alert("Y O U  W I N");
      }

    }
  }
  }

// put code here!
/*
Are you ready for the weekend?
yes/no
Yes = go out options (movie, bar, dinner)
No = stau home options (cook, clean, tv)
Each has specific options as last question

Bar - add loop for asking several times about number of beverage when over 4 - make sure they wnat ot drink that much
  decrease by 2 until their answer gets to 4
Bar = number input

Use prompts to get input
Output final message in window alert

Code does not work!!! And sorry my story is not that fun :(
*/


var questionOne =  true;
while (questionOne) {
  var questionOne=prompt("Are you ready for the weekend? Yes or No")
    if (questionOne === "Yes") {
      prompt("Do you want to go to a movie, dinner, or shopping?");
      determineActivity();
      questionOne === true;
    }else{
      prompt("Then we can stay home")
      stayHomeActivity();
      questionOne === false;
  }
}

function determineActivity () {
  var activity=prompt("Do you wnat to go to a movie, dinner, or get drinks?")
    if (activity == 'movie') {
      var movie = prompt("Beauty and the Beast, Boss Baby, or Guardians of the Galaxy 2?")
      switch (movie) {
        case 'Beauty and the Beast':
          window.alert('Best movie out right now!');
          break;

        case 'Guardians of the Galaxy 2':
          window.alert('I am baby Groot!');
          break;

        case 'Boss Baby':
          window.alert('That looks more like a kid movie');
          break;

        default:
          window.alert('I have not seen that yet. Sounds good to me!');
        }
  } else if (activity === 'shopping') {
      var shopping = prompt("Where? Tysons, Georgetown, or Outlets?");
      var shoppingLocation;
        switch (shoppingLocation){
          case Georgetown:
            window.alert('We have to go to Baked & Wired while we are there');
            break;

          case Tysons:
            window.alert('The traffic will be such a pain but we could take the new Silver Line!');
            break;

          case Outlets:
            window.alert('I love a good deal');
            break;

          default:
            window.alert('Good idea!');
          }

    } else if (activity = 'get drinks') {
      prompt("How many drinks we having? 1 to 10");
        var drinks;
          if (drinks > 4) {
            for(var i = 10; i > 4; i -=2){
              console.log("Are you sure?");
              window.alert("Are you sure?");
            }
          };
            window.alert("I hope you have Aleve and Gatorade for the next morning.");
          } else {
            window.alert("Let's party!");
          }


//STAY HOME
          function stayHomeActivity () {
            var activity=prompt("Do you want to clean, watch TV, or cook?")
              if (activity == 'clean') {

                switch (clean) {
                  case 'bathroom':
                    window.alert('Scrub a dub the tub!');
                    break;

                  case 'kitchen':
                    window.alert('Make me some pizza rolls while you are in there.');
                    break;

                  case 'bedroom':
                    window.alert('I will clean the bed aka nap');
                    break;

                  default:
                    window.alert('Cleaning on the weekend is zero percent fun!');
                }
              } else if (activity == 'watch a movie'){
                var watchTV = prompt("What are we watching? news, cartoons, sitcoms?");

                switch (watchTV) {
                  case 'news':
                  window.alert('Ugh! Its all about you-know-who!');
                    break;

                  case 'cartoons':
                    window.alert('Scooby Doo Please!');
                    break;

                  case 'sitcoms':
                    window.alert('The Goldbergs is MAGIC!');
                    break;

                  default:
                    window.alert('Sounds good to me!');
                }
              } else if (activity == 'cook'){
                var cook = prompt("What are we cooking? pizza, pizza rolls, lasagna?")

                switch (cook) {
                  case 'pizza':
                    window.alert('Noms!');
                    break;

                  case 'pizza rolls':
                    window.alert('Noms squared!');
                    break;

                  case 'lasagna':
                    window.alert('That is my fave');
                    break;

                  default:
                    window.alert('Sounds good to me!');
                  };
              }

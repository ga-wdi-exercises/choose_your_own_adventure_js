// put code here!
var outChoices = function(choice){
  var result;
  var museums = ['National Building Museum', 'National Portrait Gallery', 'Museum of Natural History', 'Freer Sackler Gallery', 'Newseum', 'National Gallery of Art'] ;
  var movies = ['The Martian', 'Everest', 'Sicario', 'War Room', 'Steve Jobs', 'The Walk'];
  var restaurants = ['Rose\'s Luxury', 'Petworth Citizen', 'Thai Crossing', 'Boundary Stone', 'Compass Rose', 'Sticky Rice'];
  var campgrounds =['Lake Fairfax', 'Cherry Hill Park', 'Cunningham Falls', 'Tree House Camp'];
  var trails = ['Rock Creek Park', 'Harper\'s Ferry', 'Billy Goat Trail', 'Great Falls', 'Shenandoah', 'Sugarloaf Mountain'];
  var parks = ['Rock Creek Park', 'The National Arboretum', 'Meridian Hill', 'Wolf Pen Creek', 'Lincoln Park', 'Kingman Island']
  switch (choice){
    case 'museum': result = museums[Math.floor(Math.random() * museums.length)]
    break;
    case 'movies': result = movies[Math.floor(Math.random() * movies.length)]
    break;
    case 'dinner': result = restaurants[Math.floor(Math.random() * restaurants.length)]
    break;
    case 'camp': result = campgrounds[Math.floor(Math.random() * campgrounds.length)]
    break;
    case 'hike': result = trails[Math.floor(Math.random() * trails.length)]
    break;
    case 'picnic': result = parks[Math.floor(Math.random() * parks.length)]
    break;
  }
  return result;
};

var out = function(){
  var rain = prompt('What is the chance of rain for the weekend?(enter number without %)');
  rain = parseInt(rain);
  if (rain > 40){
    var choice = prompt('Ah, too bad! Let\'s try to stay dry. Would you like to visit a museum, go to the movies or go out for dinner?(museum/movies/dinner)');
    console.log('Awesome! How about you check out ' + outChoices(choice)+' this weekend?');
  } else{
    choice = prompt('Perfect to be outside then! Would you like to hike, camp or picnic at the park?(hike/camp/picnic)')
    console.log('Cool! Enjoy the fall weather and ' + choice + ' at ' + outChoices(choice)+'.');
  }
};

var inside = function(){
  var truth = prompt('You\'re just going to watch Netflix all weekend, aren\'t you? (y/n)');
  if (truth == 'y'){
    console.log('OK, fair enough! I would recommend something but it won\'t matter!');
  } else {
    console.log('Right. Amazon Prime it is.');
  }
}

do{
    var weekend = prompt('Let\'s plan for the weekend! Would you like to go out or stay in?(in/out)');
    switch (weekend){
      case 'out': out()
      break;
      case 'in': inside()
      break;
    }
    var repeat = prompt('Would you like to repeat this?(y/n)');
  }while(repeat != 'n');



var response_1_1;
var response_2;

        function adventure() {

                var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
                document.getElementById("button_0").style.left = "15%";
                document.getElementById("button_0").style.top = "80%";

                var response_0=prompt("Lets play a travel game! I am 7ruth and what is your name?\n(Type in your first name)");

                var letter_position = alphabet.indexOf(response_0.charAt(0));

                      document.getElementById("button_0").style.visibility = "hidden";
                      document.getElementById("map").style.visibility = "visible";
                      document.getElementById("floating-panel").style.left = "40%";

                   if (letter_position%2===0) {


                      document.getElementById('address').value='Enter "wet" or "dry"';

                      document.getElementById('submit').addEventListener('click', function() {

                      });


                   } else {

                      document.getElementById('address').value='Enter "warm" or "cold"';

                   }
                 }





      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 36.964, lng: -122.015},
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        disableDefaultUI: true
      });

        var geocoder = new google.maps.Geocoder();

        var place_inputs =["warm","cold","dry","wet"];
        var place_outputs= ["Siena, Italy", "Zurich", "Winnipeg", "Fukuoka"]

        document.getElementById('submit').addEventListener('click', function() {

              response_1_1 = place_outputs[place_inputs.indexOf(document.getElementById('address').value)];


              geocodeAddress(geocoder, map);

              if (response_1_1!=="Siena, Italy" && response_1_1!=="Zurich") {

                    setTimeout(function() {response_2 = prompt('Does this look more like "Winnipeg" or "Fukuoka"?');

                        if (response_2==response_1_1) {
                                confirm("You are correct!");
                        } else {confirm("You are incorrect");
                          }
                          },3000);
              } else {

                    setTimeout(function() {response_2 = prompt('Does this look more like "Siena, Italy" or "Zurich"?');
                        if (response_2==response_1_1) {
                              confirm("You are correct!");
                        } else {confirm("You are incorrect");
              } },3000);
            }
          });


         function geocodeAddress(geocoder, resultsMap) {
           var address = response_1_1;
           geocoder.geocode({'address': address}, function(results, status) {
             if (status === google.maps.GeocoderStatus.OK) {
               resultsMap.setCenter(results[0].geometry.location);
              //  var marker = new google.maps.Marker({
              //    map: resultsMap,
              //    position: results[0].geometry.location
              //  });
             } else {
               alert('Geocode was not successful for the following reason: ' + status);
             }
           });
         }

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // // Create a marker for each place.
            // markers.push(new google.maps.Marker({
            //   map: map,
            //   icon: icon,
            //   title: place.name,
            //   position: place.geometry.location
            // }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }

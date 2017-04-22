// put code here!
//$("button").on("click", function(){
//    console.log($(this).html());
//  })



/*document.getElementsByClassName("myBtn").addEventListener("click", displayThis);

function displayThis() {
    document.getElementById("display").innerHTML = "Great Choice,let's go.";

    $(document).ready(function(){
        $("#myBtn").click(function(){
            $("#myBtn").hide();
        });
      });
}
*/


/*
var planet = $("button").on("click", function myFunction(){
  document.getElementsByClassName('button').innerHTML
  return ;
});
*/
var planet = prompt("please enter a planet")

  console.log(planet)

if (planet == "earth"){

      var year = prompt("Great choice, What year would you like to go to?");
      if (year>=2154){
        alert("Earth's resources have been depleted I suggest you should go to Pandora as an avatar")
      }else if (year<2154 && year >= 2017)
      {
        alert("Enjoy being on earth while you can!")
      }
      else{
        alert("you can't go back to the past unless you have a time machine!")
      }

}

if (planet == "pandora"){
        var type = prompt("great Choice, what kind would you like to be? a human, an avatar or a na'vi")
        var check = ["human", "Avatar", "na'vi" ];
        var text = " ";
        var i;

                   for(i = 0; i < check.length; i++){
                                  do{
                                      text = "You can survive this";
                                   }
                                   while(check == type);
                                  document.getElementById('survive').innerHTML = text;

                             }

                        }

if(planet != "earth" || "pandora"){

          switch (planet) {
                  case ("mercury"):
                        alert("your body can't survive this")
                  break;
                  case ("uranus"):
                      alert("your body can't survive this")
                        break;
                   case ("mars"):
                        alert("your body can't survive this")
                        break;
                   case ("venus"):
                          alert("your body can't survive this")
                        break;
                   case ("jupiter"):
                          alert("your body can't survive this")
                        break;
                   case ("saturn"):
                          alert("your body can't survive this")
                          break;
                   case ("neptune"):
                        alert("your body can't survive this")
                          break;

                         }


} 

var beginning = prompt("Welcome to KANYE CHEF!! The HOTTEST cooking show on the planet!\nI don't want to waste anymore time so what you plan to make me?\n(a)ppetizer\n(m)ain Dish\n(d)essert\n enter: either 'a' or 'm' or 'd'");
//choose appetizer
if (beginning === "a") {
  var appetizer = prompt("All day appetizer! What kind of appetizer you making? (b)ig one or (l)ittle one\ntype (b) or (l)");
    //chose big appetizer
    if (appetizer === "b") {
    var bigAppetizer = prompt("That's what I'm talking about. BIG APPETIZER FOR BIG YEEZY\nSo what you cooking?\n(s)hrimp\n(c)hicken Skewers\n(b)eef sliders\nPick (s)(c)or(b)");
      //chose chicken skewers or beef sliders
      if (bigAppetizer === "c" || bigAppetizer === "b") {
      alert("(PRESENT FOOD TO KANYE)\nThis taste terrible!!!! Get out my kitchen.");
      }

      //choose shrimp
      else if (bigAppetizer === "s") {
        var shrimpAppetizer = prompt("This shrimp is incredible!! what did you say your name was?\nEnter Name");
         alert(shrimpAppetizer + " " + "you my new personal chef!");
           }
        }
    //choose little appetizer
    else if (appetizer === "l") {
    alert("Naw you not making me a little appetizer!!!\nI want a big Appetizer!");
  }
}
  //choose Main Dish
  else if (beginning === "m") {
      var lunch = prompt("Main Dish! That's what I'm talking about! What you cooking?\n(s)teak\n(f)ish fillet\n(c)hicken");
      //Choose Steak
      if (lunch ==="s") {
        var steakMainDish = prompt("Steak! Good Choice! What temperature?")
      //Temperature under 140
      var temperature
      while (steakMainDish <= 145) {
        steakMainDish = prompt("MAN! That ain't even cooked! You trying to get me sick!\nPick something hotter\n Choose temperature")
    }
    //temperature over 140
      if (steakMainDish > 145 ) {
        var rightHeat = prompt("Little hot but that's all right! What kind of steak (r)ibeye or (f)ilet mignon")
        steakMainDish = temperature
      }
      //Choose ribeye
      if (rightHeat === "r"){
        var ribeye = alert("That's what I'm talking about! I was kidding before about that temperature thing, I'll eat a ribeye raw son! You my new chef!")
      }
      //choose filet mignon
      if (rightHeat === "f"){
        var filetMignon = alert("C'mon man you don't you don't the money to buy the Filet Mignon I like!")
        }}
      //choose fish fillet
      else if (lunch === "f"){
      var FishFilet = alert("WHAT SHE ORDER!?! hahahah... but seriously that's what she ordered, not me brah!")
        }
      //choose chicken
      else if (lunch === "c"){
      var chicken = prompt("Dayum, well I only get it barbequed so here are your choices\n(b)arbeque\n(b)arbeque")
        //choose barbeque
        if (chicken === "b"){
        var barbeque = alert("YA! I like it! New personal chef right here!")
        }}
    //choose dessert
    }
  else if (beginning === "d") {
      var dessert = prompt("I love me some sweets! What you making?\n(o)reos\n(c)upcake\n(p)ie\n choose (o) or (c) or (p)")
      //chose oreos
      if (dessert === "o"){
        var oreos = alert("Dude! I said COOK me something! Not buy it at the store")
      }
      //choose cupcake
      else if (dessert === "c"){
        var cupcakes = prompt("I can dig it! I love cupcakes! You making a\n(r)ed Velvet Cupcake\n(c)hocolate cupcake\nChoose (c) or (r)")
        //choose Red Velvet
        if (cupcakes = "r"){
          var redVelvet = alert("Red Velvet! That's what I'm talking about! But look man, I'll looking for a chef, not a baker")
        }
        //choose chocolate
        else if (cupcakes === "c"){
          var chocolate = alert("Chocolate!! YAY! That's good man! But ay, I want a chef, not a baker!")
        }
      }
      //choose pie
      else if (dessert === "p"){
        var pie = prompt("I like pie! I like pie! What you making (a)pple or (p)umpkin\nChoose (a) or (p)")
      if (pie === "a"){
        var applePie = prompt("Apple Pie! That's what up! How many pies you giving me?\nHow many slices you giving Kanye?")
        //Choose apple pie
        var slices
        while (applePie <= 7) {
          applePie = prompt("Yo! You GOT to give me more slices!")
      }
      //Slices over 7
        if (applePie > 7 ) {
          var rightHeat = alert("Ay! I can't be eating all this pie man! Get out of here!")
          applePie = pie
        }
        }
        //Choose pumpkin pie
        else if (pie === "p"){
          var pumpkingPie = alert("I don't even like pumpkin pie man! You don't have this job!")
        }
      }
    }

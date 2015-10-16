// put code here!
// var name = prompt('What is your name?');
//
// while(typeOf(name)!='string'){
//     var name = prompt('Please tell me your name.')
// }
//
// var fruit = prompt('Hello, ' + name '. You have just woken up in a very strange land, and you are quite hungry. There are trees nearby with an exotic fruit you have never seen. It could be poisonous. Do you eat the fruit or search for something more familiar to eat? (Y/N)')
//
// if (fruit='Y'){
//   var
// }
// elseif (fruit='N'){
//
// }

//Enter Cottage?

var cottage = prompt("While trying to escape your evil stepmother, you find yourself lost in the woods. After several hours you find a small cottage, but it appears to be abandoned. Do you enter to get some rest or continue on your way? (Enter/Continue)");

while(!(cottage.toLowerCase()==='enter'||cottage.toLowerCase()==='continue')){
  var cottage = prompt("Do you enter or continue on your way? (Enter/Continue)");
}

//Entered cottage.

if(cottage.toLowerCase()==='enter'){
  var clean = prompt("The cottage is full of dirty dishes and clutter when you go inside. Do you clean up or immediately find a place to sleep? (Clean/Sleep)");

  while(!(clean.toLowerCase()==='clean'||clean.toLowerCase()==='sleep')){
    var clean = prompt("Do you clean up or immediately find a place to sleep? (Clean/Sleep)");
  }

  if(clean.toLowerCase()==='clean'){
    var apple = prompt("After cleaning up the cottage, you fall asleeep only to be woken by seven dwarves a short while later. Luckily, they are thrilled that you haven cleaned up their cottage and they invite you to stay with them. Then one day an old woman comes by the cottage selling apples. She offers you a sample apple. Do you eat the apple? (Eat/Decline)")

    while (!(apple.toLowerCase()==='eat'||apple.toLowerCase()==='decline')){
      var apple = prompt("Do you eat the apple? (Eat/Decline)")
    }

    if(apple.toLowerCase() === 'eat'){
      alert("Unfortunately the apple was poisoned and you fall into a deep sleep. True love's first kiss is the only thing that can wake you.")
    }

    if(apple.toLowerCase() === 'decline'){
      alert("Luckily for you, you have chosen to turn down a poisoned apple. You spend the rest of your days living with the dwarves in their cottage where each evening is full of song and laughter.")
    }
  }
}

//Entered cottage and didn't clean or never entered. Steal bread?

if(cottage.toLowerCase()==='continue' || clean.toLowerCase()==='sleep'){
  var bread = prompt("As you walk you come across a friendly monkey named Abu who joins you on your journey. Eventually the two of you find your way out of the forest and happen upon a market where a baker is selling bread. You don't have any money to give him, but you are very hungry. You think about stealing a loaf of bread for yourself and one for Abu. How many loaves of bread do you steal? (0/1/2)");

  while(!(bread.toLowerCase()==='0' ||bread.toLowerCase()=== '1' ||bread.toLowerCase()=== '2')){
    var bread = prompt("How many loaves of bread do you steal? (0/1/2)");
  }

  if(bread==='0'){
    alert("Congratulations on your honesty! As you are lingering in the marketplace, you bump into an old woman who reveals herself as your fairy godmother. She conjures some formal attire for you so that you can attend a grand feast at the palace that evening.")
  }


  if(bread==='1'){
    alert("You got away with your bread, but Abu is sad that you didn't find more to eat!")
  }

  if(bread==='2'){
    var wish = prompt("It looks like you were a bit too greedy. You are caught by an evil sultan who forces you to go on a dangerous mission to retrieve a magic lamp from a cavern. Although you find the lamp, the cavern caves in blocking the onyl exit. Before long you find that a genie lives in the lamp and he grants you three wishes. You wish to get out of the cavern and you reserve your final wish for granting the genie his freedom. How do you use your second wish? You can get your own magic carpet, become a prince, or make it through WDI with your sanity intact. (Magic carpet/Prince/WDI)")

    while(!(wish.toLowerCase()==='magic carpet' || wish.toLowerCase()==='prince' || wish.toLowerCase()==='wdi')){
          var wish = prompt("How do you use your second wish? You can get your own magic carpet, become a prince, or make it through WDI with your sanity intact. (Magic carpet/Prince/WDI)")
    }

    if(wish.toLowerCase()==='magic carpet'){
      alert("Congratulations! You are the proud owner of a magic carpet. However, you will fail to make it through WDI.")
    }

    if(wish.toLowerCase()==='prince'){
      alert("Congratulations! You are now a wealthy prince. However, you will fail to make it through WDI.")
    }

    if(wish.toLowerCase()==='wdi'){
      alert("Congratulations! You will be succcessful in WDI. Who needs a magic carpet anyway.")
    }
  }
}

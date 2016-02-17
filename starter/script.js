// put code here!
var name = prompt ("What is your name?");
alert ("Hello," + " " + name + "." + " You are a professional chef and need to prepare a meal for Gordon Ramsey.");

meal ();

function meal () {
  var mealtype = prompt ("Are you going to make breakfast, lunch, dinner, or dessert?");
  if (mealtype === "breakfast") {
    breakfast ();
  } else if (mealtype === "lunch") {
    lunch ();
  } else if (mealtype === "dinner") {
    dinner ();
  } else if (mealtype === "dessert") {
    dessert ();
  }
};

function breakfast () {
  while (true) {
    var breakfastServed = prompt ("Will you serve an American or Japanese breakfast?");
    if (breakfastServed === "American") {
      alert ("Unfortunately, you suck at making American breakfasts. You run to McDonalds and get an sausage McMuffin with Cheese. Everybody loves breakfast from McDonalds. He's loving it.");
      break;
    } else if (breakfastServed === "Japanese") {
      alert ("You decide to make ramen. Chef Ramsay hates noodles and demands an American breakfast instead.");
    }
  }
};

function lunch () {
  var lunchServed = prompt ("Will you make a sandwich or salad?");
  if (lunchServed === "sandwich") {
    alert ("You make a delicious cubano sandwich. Chef Ramsey is delighted. Great job!");
  } else if (lunchServed === "salad") {
    alert ("Salads are your specialty! You make a wonderful cobb salad. However, Chef Ramsay likes sandwiches. You chose poorly.");
  }
};

function dinner () {
  var dinnerServed = prompt ("Will you serve steak or fish?");
  if (dinnerServed === "steak") {
    alert ("You grill a nice rib-eye well-done. But Chef Ramsay likes his steaks done medium-rare. You should be ashamed of yourself.");
  } else if (dinnerServed === "fish") {
    alert ("You grill a nice filet of tuna. Unbeknownst to you, the tuna was contaminated. Chef Ramsay gets severe food poisoning and sues you for all you have.");
  }
};

function dessert () {
  alert ("Chef Ramsay wants cookies. How many will you give him?");
  var dessertServed = parseInt(prompt ("How many cookies do you want to give Chef Ramsay?"));
  while (dessertServed <= 3) {
    alert ("Gordon ate cookie number " + dessertServed + ".")
    dessertServed += 1;
  }
  alert ("After eating 3 cookies, Chef Ramsay realizes that the cookies were store bought. He tears you a new one for thinking you could fool him.");
};

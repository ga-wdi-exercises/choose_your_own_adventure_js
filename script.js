// var choices = [1, 2, 3, 4, 5, 6];
//maybe change "choices" to "Prompts" and the oucomes of prompts are the parameteres for moving on

// var bluePill = false;
// var redPill = true;



var ready = prompt("Wake up, Neo. Are you ready?");

 if (ready != null) {
    confirm("Great. Follow the white rabbit");

  }
  else {
  confirm("..but you have to be, Neo. You are the One. The Matrix has you. Follow the white rabbit. 'Knock, Knock")
};

  var meetMorpheus = prompt("After a bit of trouble, you meet Morpheus." + " " + "Morpheus says: 'Welcome, Neo. Do you know who I am?''");

    if( meetMorpheus != null || "no" || "No") {
      confirm("Great. That makes this easier.")
    }

    else {
      confirm("In the Matrix and to the Agents I am an international criminal wanted for almost every cyber-crime in the books, if not more. However, I am not those things to you. I can be a trusted friend. I am a commander from Zion--more on that later.")
    };

var trust = prompt("Do you trust me? [type Yes or No]");

   if (trust === "Yes" || "yes") {
     confirm("Excellent. Lets Continue.")
   }

  else {
    confirm("Just listen to what I have to say.")
  }

  var searchYears = parseFloat(prompt("Morpheus says 'how many years have you been looking for the Matrix?'"));


    for (searchYears; searchYears < 5; searchYears++) {
        alert(searchYears + "years?" + "I've been looking for you my whole life!")
        }

        if  (seachYears > 6) {
  alert("We've been looking for you longer.");
  }
  else {
   alert("So be it, we've been looking for you for a VERY long time. ");
 }

var matrixIntro = prompt("Morpheus says: 'Lets continue. You have some choices to make'");

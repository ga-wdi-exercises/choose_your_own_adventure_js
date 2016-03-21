// Any path the user goes down must ask them at least three questions.
// There must be a minimum of seven total destinations the user could arrive at based on their responses.
// For at least one of the questions asked, there must be more than two possible user responses.
// Your code must contain at least one loop.
// Your code must make use of both string and number user inputs. > Hint: You may need parseInt() and toString()

//Question 1: Get user's first name
var userName = prompt("Please type your first name!");
//Attempt to weed out incorrect inputs- works for numbers but not for symbols!
if (isNaN(userName) === false){document.write("Oops, that's not a valid name! Refresh your browser and try again!")}
else {
    //Question 2: Prompt; Recipe or Workout plan
    var fitOrFood = prompt("Greetings, " + userName + "!\nType \[H\] to select a healthy smoothie recipe -or- type \[W\] for a workout plan")

    //Question 3a: Healthy Smoothie Recipe Options
    if (fitOrFood == "H" || fitOrFood == "h"){var recipeChoice = prompt("Great choice! Does anything look appealing? \nPlease type the number that corresponds with your choice.\n\[1\] Ginger Mango Chai\n\[2\] Green Strawberry\-Kiwi Lemonade\n\[3\] Chocolate\-Covered Cherry Smoothie\n\[4\] Minty Fresh Green Smoothie")
        if(Number(recipeChoice) === 1){document.write("<p  class=\"title\">" + "Ginger Mango Chai" + "<p>1 cup frozen mango<p> 1\/2 cup freshly brewed chai tea \(chilled\)<p>1 tsp freshly grated ginger<p>1 frozen banana<p>1\/4 cup coconut milk<p>1 tsp cinnamon<p  class=\"subtitle\">Blend ingredients in a high speed blender and enjoy!")}
        else if(Number(recipeChoice) === 2){document.write("<p  class=\"title\">" + "Green Strawberry\-Kiwi Lemonade" + "<p>1 kiwi \(peeled\)<p> 3\/4 cup frozen strawberries \(chilled\)<p>1\/2 cup frozen pineapple<p>1\/2 lemon \(peel and seeds removed\)<p>2 cups spinach<p  class=\"subtitle\">Blend ingredients in a high speed blender and enjoy!")}
        else if(Number(recipeChoice) === 3){document.write("<p  class=\"title\">" + "Chocolate\-Covered Cherry Smoothie" + "<p>1 cup almond milk \(or your favorite nut milk\)<p> 1 cup frozen cherries<p>1 tbsp cacao powder<p>3 cups spinach<p  class=\"subtitle\">Blend ingredients in a high speed blender and enjoy!")}
        else if(Number(recipeChoice) === 4){document.write("<p  class=\"title\">" + "Minty Fresh Green Smoothie" + "<p>2 cups coconut water<p> 3 stalks kale<p>1 green apple \(cored\)<p>1\/2 cucumber<p>1\/2 cup mint leaves<p>2 dates \(pitted\)<p  class=\"subtitle\">Blend ingredients in a high speed blender and enjoy!")}
        else{document.write("Oops, that's not a valid choice! Refresh your browser and try again!")}}

    //Question 3b: Workout Plans
    else if (fitOrFood == "W" || fitOrFood == "w"){
      //Question 3b; HIIT Track
      var workout = parseInt(prompt("Choose your workout style:\nPlease type the number that corresponds with your answer.\n\[1\] HIIT  \n\[2\] Yoga"));
        if(Number(workout) === 1){
          var hiitNameArray = userName.split("");
          var i=0;
          document.write("<p  class=\"title\">" + "Hey, "+ userName + "!" + "<p class=\"subtitle\">" + "Here's your customized workout, based on the letters in your name." + "<p>");
              while(i < hiitNameArray.length) {
                  if(hiitNameArray[i] === "A" || hiitNameArray[i] === "a"){document.write("50 jumping jacks")}
                  else if(hiitNameArray[i] === "B" || hiitNameArray[i] === "b"){document.write("45 sec plank")}
                  else if(hiitNameArray[i] === "C" || hiitNameArray[i] === "c"){document.write("20 burpees")}
                  else if(hiitNameArray[i] === "D" || hiitNameArray[i] === "d"){document.write("15 push ups")}
                  else if(hiitNameArray[i] === "E" || hiitNameArray[i] === "e"){document.write("40 squats")}
                  else if(hiitNameArray[i] === "F" || hiitNameArray[i] === "f"){document.write("30 crunches")}
                  else if(hiitNameArray[i] === "G" || hiitNameArray[i] === "g"){document.write("20 sumo squats")}
                  else if(hiitNameArray[i] === "H" || hiitNameArray[i] === "h"){document.write("20 alternating walking lunges")}
                  else if(hiitNameArray[i] === "I" || hiitNameArray[i] === "i"){document.write("30 sec side plank (per side)")}
                  else if(hiitNameArray[i] === "J" || hiitNameArray[i] === "j"){document.write("15 mountain climbers")}
                  else if(hiitNameArray[i] === "K" || hiitNameArray[i] === "k"){document.write("1 min forearm plank")}
                  else if(hiitNameArray[i] === "L" || hiitNameArray[i] === "l"){document.write("1 min high knees")}
                  else if(hiitNameArray[i] === "M" || hiitNameArray[i] === "m"){document.write("15 tuck jumps")}
                  else if(hiitNameArray[i] === "N" || hiitNameArray[i] === "n"){document.write("1 min arm circles")}
                  else if(hiitNameArray[i] === "O" || hiitNameArray[i] === "o"){document.write("1 min wall sit")}
                  else if(hiitNameArray[i] === "P" || hiitNameArray[i] === "p"){document.write("20 squats")}
                  else if(hiitNameArray[i] === "Q" || hiitNameArray[i] === "q"){document.write("30 jumping jacks")}
                  else if(hiitNameArray[i] === "R" || hiitNameArray[i] === "r"){document.write("25 star jumps")}
                  else if(hiitNameArray[i] === "S" || hiitNameArray[i] === "s"){document.write("30 bicycle crunches")}
                  else if(hiitNameArray[i] === "T" || hiitNameArray[i] === "t"){document.write("20 push ups")}
                  else if(hiitNameArray[i] === "U" || hiitNameArray[i] === "u"){document.write("1 min plank")}
                  else if(hiitNameArray[i] === "V" || hiitNameArray[i] === "v"){document.write("30 russian twists")}
                  else if(hiitNameArray[i] === "W" || hiitNameArray[i] === "w"){document.write("70 crunches")}
                  else if(hiitNameArray[i] === "X" || hiitNameArray[i] === "x"){document.write("20 plank jacks")}
                  else if(hiitNameArray[i] === "Y" || hiitNameArray[i] === "y"){document.write("20 leg lifts")}
                  else if(hiitNameArray[i] === "Z" || hiitNameArray[i] === "z"){document.write("15 burpees")}
                  document.write("<p>")
                  i++
            }
        }
        //Question 3b; Yoga Track
        else if (Number(workout) === 2) {
          var yogaStyle= prompt("Please rate your fitness level on a scale of 0-5");
            if(yogaStyle >= 0 && yogaStyle < 2){document.write("<p  class=\"title\">" + "Namaste, "+ userName + "!" + "<p class=\"subtitle\">" + "Here's your gentle yoga sequence. Please hold each pose for 10 breaths." + "<p>" + "Child's pose<p>Table pose<p>Cat/Cow pose<p>Legs-Up-the-Wall pose<p>Savasana")}
            else if (yogaStyle >= 2 && yogaStyle <= 5){document.write("<p  class=\"title\">" + "Namaste, "+ userName + "!" + "<p class=\"subtitle\">" + "Here is the classic Surya Namaskar Sequence." + "<p>" + "Mountain pose<p>Upward Salute<p>Standing Forward Bend<p>Half Standing Forward Bend<p>*step or jump back*<p>Four-Limbed Staff (Plank) Pose<p>Upward-Facing Dog Pose<p>Downward-Facing Dog Pose<p>*step or hop forward*<p>Half Standing Forward Bend<p>Standing Forward Bend<p>Upward Salute<p>Mountain Pose")}
            else {document.write("Oops, that's not a valid choice! Refresh your browser and try again!")}
        }
        //else statement question 3b
        else {document.write("Oops, that's not a valid choice! Refresh your browser and try again!")}
}
//else statement question 2
else {document.write("Oops, that's not a valid choice! Refresh your browser and try again!")}
}

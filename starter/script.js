//Question 1
var name= prompt('Hi, what is your name?'); //string response

console.log('Hi' +' '+ name);
var bloodSugar= prompt('Please check your blood sugar and enter the results');//integer response
//Loop

while(bloodSugar <60){
    console.log("Please eat something and visit us again in 15 minutes");
}
/*Blood Sugar Results  */

if (bloodSugar > 60 && bloodSugar < 140){
  console.log("Keep up the good work");
}
else if (bloodSugar >139 && bloodSugar < 400){
  console.log("Please schedule an appt with your doctor soon to discuss your diabetes");
}
else {
  console.log("Since your blood sugar is above 400, please call your doctor for further instructions")
}

//Question 2 Exercise
var myExercise= prompt('Do you exercise 0-2 times a week or 3-7 times a week?. Please enter either 0-2 or 3-7');

if (myExercise==='0-2'){
  console.log("Please make some time to exercise today for at least 10 minutes");
}
else if (myExercise==='3-7'){
  console.log("This is wonderful.  Keep this up");
}
else {
  console.log("Please enter either 0-2 or 3-7");
}
//Question 3 Diet
var myDiet= prompt('Do you follow a diabetic diet? Enter yes or no');

if (myDiet==='yes'){
  console.log("This is good.  Diet control is important for managing your blood sugar");
}
else if (myDiet==='no'){
  console.log("This area needs to be improved. What you eat directly affects your blood sugar");
}
else {
  console.log("Please either either yes or no");
}

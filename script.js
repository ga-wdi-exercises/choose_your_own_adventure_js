baker();

function baker() {
  console.log("You are at home in your apartment at 221B Baker Street. Watson is smoking a pipe while you read the papers. The peace is interrupted by a knock at the door. Through the door you hear Mrs. Hudson say there is a client waiting downstairs. Do you wish to Acknowledge Mrs. Hudson or Ignore her?");
  var choice = prompt("Choose A or I").toUpperCase();
  if (choice == "A") {
    client();
  }
  else if (choice == "I") {
    ignore();
  }
  else {
    console.log("Please start over and only input the prompts shown.");
  }
}

function client() {
  console.log("Mrs. Hudson lets in a distressed woman of some distinction. She tells you and Watson some dreary tale about a missing husband and says she suspects foul play. This is a run-of-the-mill case. Do you wish to Take the case or Decline it?");
  var choice = prompt("Choose T or D").toUpperCase();
  if (choice == "T") {
    solveClient();
  }
  else if (choice == "D") {
    afternoon();
  }
  else {
    console.log("Please start over and only input the prompts shown.");
  }
}

function afternoon() {
  console.log("You tell the woman your valuable time cannot be wasted on trifles and direct her to contact the police. Your afternoon is now free. Do you wish to take Morphine or Cocaine?");
  var choice = prompt("Choose M or C").toUpperCase();
  if (choice == "C") {
    console.log("You mix up a 7% solution of cocaine and take it intravenously. You spend the afternoon writing a 12,000-word paper on factoring Fermat numbers. When it is finished you throw it in the fire and begin practicing a scherzo on the violin. THE END");
  }
  else if (choice == "M") {
    console.log("Watson shakes his head disapprovingly while you spend the afternoon tripping balls in your memory palace. Good times. THE END");
  }
  else {
    console.log("Please start over and only input the prompts shown.");
  }
}

function solveClient() {
  console.log("You turn your powers of observation up to 11 for approximately five seconds. From her bootlaces, perfume, and frayed lapel you deduce her husband has run off with the scullery maid. Do you tell her Now or String her along?");
  var choice = prompt("Choose N or S").toUpperCase();
  if (choice == "N") {
    console.log("You explain that her husband has been unfaithful for the past two years and has run off to America. She pays you with her diamond brooch. On her way out she flutters her hand at Dr. Watson while mouthing the words, “Telegraph me.” THE END");
  }
  else if (choice == "S") {
    console.log("You explain that you will communicate by post within a fortnight and that your fee will be £80 plus expenses. You and Watson go out for a fancy supper and expense it. THE END");
  }
  else {
    console.log("Please start over and only input the prompts shown.");
  }
}

function ignore() {
  console.log("You pretend you are not at home and Mrs. Hudson goes away muttering. An hour later there is a heavy knock at the door which Watson reveals to be Inspector Lestrade. Lestrade tells you there has been an unusual murder of a political nature which has him stumped. Lestrade wants you to visit the crime scene but your brother Mycroft may be able to shed some light on the case. Do you wish to visit the Crime scene or visit Mycroft?");
  var choice = prompt("Choose C or M").toUpperCase();
  if (choice == "C") {
    crime();
  }
  else if (choice == "M") {
    mycroft();
  }
  else {
    console.log("Please start over and only input the prompts shown.");
  }
}

function mycroft() {
  console.log("You go to the Diogenes Club and meet Mycroft. Before he will help you he insists you guess the number of tobacconists on Fleet Street. What do you guess?");
  var choice = prompt("Enter your guess");
  var counter = 0;
  while (choice != 18) {
    console.log("Do try again.");
    counter += 1;
    if (counter == 3) {
      console.log("Perhaps you should try guessing 18.");
    }
    else {
      var choice = prompt("Enter your guess");
    }
  }
  console.log("Very good my boy. And as a reward I shall solve your case. In fact, I had already solved it and telegraphed Lestrade before you arrived. The murderer is the Prime Minister's valet, a triple agent double-crossing the Prussians. But as long as you are here, how about a game of whist? THE END");
}

function crime() {
  console.log("Lestrade takes you to 10 Downing Street. In a large office the body of the Secretary of the Navy lies on the floor having evidently been poisoned. He is clutching a letter. Do you wish to examine the Body, the Letter, or the mysterious Symbol smeared on the wall in blood?");
  var choice = prompt("Choose B, L, or S").toUpperCase();
  if (choice == "B") {
    console.log("You examine the body and from the tobacco stains under the fingernails you determine that the murderer is Lestrade himself. He probably has his reasons. You declare the case a suicide and return home in time for tea. THE END");
  }
  else if (choice == "L") {
    console.log("You read the letter and determine the 90-year-old Secretary was killed by a jealous lover. You declare that everyone should be so lucky and everyone has a hearty laugh. THE END");
  }
  else if (choice == "S") {
    console.log("The symbol is a blend of Rosicrucianism, Freemasonry, and eldritch necromancy. Rather than get into whatever that’s about you tell Lestrade that the symbol was painted by the Secretary himself to disguise his suicide. Time to go home. THE END");
  }
  else {
    console.log("Please start over and only input the prompts shown.");
  }
}

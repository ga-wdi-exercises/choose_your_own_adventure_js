//Start Adventure
function startAdventure() {
  var frodo = prompt("You have just recovered from being stabbed by Elbereth Gilthoniel, the leader of the NAZGUL!! A great council has just been organized that represents all the free peoples of Middle-earth and you are called to represent hobbits. After some discussion they conclude they must cast the ring into the fires of Mount Doom but no one will volunteer. What will you do? I WILL TAKE THE RING TO MORDOR!(m), Tell Gandolf to do it (g), Go back to the Shire (s)");
  if (frodo === "m") {
    alert("Wonderful!");
    mordor();
  }
  else if (frodo === "g") {
    alert("He is too powerful to hold the ring silly hobbit!!");
  }
  else if (frodo === "s") {
      alert("Typical Hobbit!");
  }
  else {
    alert("That's not an option!");
  }
}
//Mordor (m)
function mordor() {
  var frodoM = prompt("What path would you like to take to begin your journey? Through the Mines of Moria (1), Through the Misty Mountains (2), Keep going south(3)");
  switch (frodoM) {
    case "1":
      var mines = prompt("Which way now? Chamber of Mazarbul(1), Bridge of Khazadum (2)");
        if (mines === "1") {
          alert("You die to a cave troll.");
        }
        if (mines === "2") {
          alert("You run into a Balrog! Gandolf stays behind to save you.");
          free();
        }
    break;
    case "2":
      var snowstorm = prompt("There's a snowstorm! What do you want to do? Turn back(1), Keep going(2)");
        if (snowstorm === "1") {
          alert("Good idea!");
          mordor();
        }
        else if ( snowstorm === "2") {
          alert("You die to a snowstorm! Middle-earth is doomed.");
        }
    break;
    case "3":
      alert("You run into the ocean! All is lost.");
      break;
  }
}
//Free
function free() {
  var frodoDM = prompt("You are now at the Dead Marshes. Oh look! I think I see a face in the water. What do you do? Look at the creepy dead body(1), Keep going(2).");
  if (frodoDM === "1") {
    alert("You pass out and fall into the water and drown.");
  }
  else if (frodoDM === "2") {
    alert("Close one. You don't fall for the trap and make your way to the black gate");
    blackgate();
  }
}
//Black gate
function blackgate() {
  var frodoBG = prompt("You reach the black gate but there's a lot of people here! It might be risky to go this way. What do you want to do? Try to use your elf cloak to sneak through(c), Go up the long, steep stairs next to the tower of Cirith Ungol(s)");
  if (frodoBG === "c") {
    alert("You are spotted by the Eye of Sauron and captured! The ring has fallen into his hands.");
  }
  else if (frodoBG === "s") {
    alert("You make it up and stairs and past Shelob's lair. You throw the ring into the lava of Mount Doom. Middle-earth is now saved! HAZZAH!!");
  }
}

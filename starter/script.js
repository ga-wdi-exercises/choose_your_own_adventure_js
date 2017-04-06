alert("It is time to get a new companion! Let's go and get a new pet!");
var acquisition = prompt("Should we buy or adopt? \nType 'b' for 'buy'. \nType 'a' for adopt.");
if (acquisition === 'b') {
  var newPet = prompt("There are three kind of animals in this pet store: Fish, Guinea Pigs and Lizards. \nType 'f' for fish. \nType 'g' for guinea pigs. \nType 'l' for lizards");
  if (newPet === 'f') {
      alert("Fish are so cool! And they can be quite hipnotic!");
      var typeOfFish = prompt("What kind of fish? \nType 'f' for fresh water fish. \nType 's' for salt water fish.")
      if (typeOfFisf === 'f') {
        alert("Fresh water fish are much easier to mantain. Enjoy!")
      } else if (typeOfFish === 's') {
        alert("This are the most amazing pets. They take a lot of care. Enjoy!")
      }
    } else if (typeOfPet === 'g') {
      alert("Guinea pigs are so cute and fluffy! Don't squeeze it too hard!");
    } else if (typeOfPet === 'l') {
      alert("A lizard! They are just so scary!");
    }
  } else if (acquisition === 'a') {
  alert("It seems we have a good heart! Let's rescue a cute animal");
  var newPet = prompt("There are lots of dogs and cats in this animal rescue center. What should we adopt? \nType 'd' for dog. \nType 'c' for cat.");
  if (newPet === 'd') {
    var dogSize = prompt("Are we looking for a small breed or a large one? \nType 's' for small dog. \nType 'b' for a big dog");
    if (dogSize === 's') {
      alert("Be prepared for an energetic barking dog. Exciting!");
      for (var i = 0; i < 5; i++) {
        alert("Woof");
      }
    } else if (newPet === 'b') {
      alert("Great! Big dogs can be good guardians!");
    }
  } else if (newPet === 'c') {
    var catAge = prompt("How old we want the cat? \ntype 'k' for a kitten. \nType 'y' for young. \nType 'a' for adult.");
    switch (catAge) {
      case 'k':
        alert("Nobody can resist a fluffy kitten!");
        break;
      case 'y':
        alert("Still young, with a big future ahead!");
        break;
      case 'a':
        alert("Adult cats also deserve a lot of love!");
      }
    }
  }


// put code here!

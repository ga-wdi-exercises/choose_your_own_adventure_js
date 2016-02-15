// Time to play "Back to school"!
// Welcome Mr. Madison! What is your first name?
// * 'Patrick'
//   Well 'Patrick', your father is not pleased with your current life choices.
//   He is asking you to go back and repeat 1st through 12th grade.
//   If you succeed you will take over the family business. Do you accept? (Y/N)
//
//   * 'y'es, of course!
//     Great! Lets go!
    // 1st grade. Your first task is to draw a duck. What color do you make it? (Y/B)
    // * 'y'ellow.
    //   Your lack of creativity dissapoints Ms. Lippy. You fail 1st grade.
    // * 'b'lue.
      // Your creativity is rewarded! You pass 1st and 2nd grade!
      // You are now in 3rd grade. A classmate is having trouble reading aloud.
      // What do you do? (1/2/3)
      // * [1] Encourage him! He is trying the best he can.
      //   Your kindness helps you breeze through school.
      //   You eventually graduate with honors and take over the family business.
      //   Congrats!
      // * [2] Say nothing.
      //   You should not just let him struggle! Your father is not happy and refuses to give you the company.
      //   Game Over.
      // * [3] Make fun of him!
        // Thats not very nice! Ms. Vaughn kicks you out of class.
        // This encourages you to try harder! You go back to class and pass the final test!
        // You finish elementry and middle school. You are now in high school.
        // Your childhood nemesis Odoyle tries to stuff you in a locker. What do you do? (F/I)
        // * 'f'ight back.
        //   You try to punch him but you slip and break your leg. You are expelled for fighting.
        //   Game Over.
        // * 'i'gnore him.
        //   Odoyle is frustrated that he is not getting a reaction from you and he walks away.
        //   You go on to finish high school and your father gives you the company.
        //   Congrats!!

  // * 'n'o way! Im going to go get drunk by the pool.
  //   Ok, would you like a domestic lite or a heavy import? (D/I)
  //
  //   * 'd'omestic
  //     How many? (1/6)
  //     * num = usrInput
  //     Done! Youve had *num* beers. Would you like another? (Y/N)
  //
  //     * 'y'es.
  //       IF num is less than 4:
  //           (return to line 19)
  //       ELSE IF num is less than 8:
  //         You are feeling tipsy are you sure? (Y/N)
  //         * 'y'es.
  //           (return to line 19)
  //         * 'n'o.
  //           Enjoy your day basking in the sun!
  //       ELSE IF num is greater than or equal to 8:
  //         You are way too drunk! You get up stumbling and fall into the pool. You drown..
  //         Game Over.
  //
  //     * 'n'o.
  //       Enjoy your day basking in the sun!
  //       Game Over.
  //
  //   * 'i'mport
  //     How many? (1/6/12)
  //     * num = usrinput
  //     Done! Youve had *num* beers. Would you like another? (Y/N)
  //
  //     * 'y'es.
  //       IF num is less than 2:
  //           (return to line 19)
  //       ELSE IF num is less than 4:
  //         You are feeling tipsy are you sure? (Y/N)
  //         * 'y'es.
  //           (return to line 19)
  //         * 'n'o.
  //           Enjoy your day basking in the sun!
  //       ELSE IF num is greater than or equal to 4:
  //         You are way too drunk! You get up stumbling and fall into the pool. You drown..
  //         Game Over.
  //
  //     * 'n'o.
  //       Enjoy your day basking in the sun!
  //       Game Over.

var usrname = prompt("Time to play Back to School!\nWelcome Mr. Madison, what is your first name?");

var doYouAccept = prompt("Well " + usrname + ", your father is not pleased with your current life choices.\nHe is asking you to go back and repeat 1st through 12th grade.\nIf you succeed you will take over the family business.\nDo you accept? (Y/N)\n[Y]es, of course!\n[N]o way, I'm going to go get drunk by the pool!").toLowerCase();

switch (doYouAccept) {
  case "y":
    playGame();
    break;
  case "n":
    getDrunk();
    break;
  default:
    alert("That option is not valid.");
}

function playGame() {
  alert("Great! Let's go!");
  firstGrade();
}

function firstGrade() {
  var duckColor = prompt("1st grade. Your first task is to draw a duck. What color do you make it? (Y/B)\n[Y]ellow\n[B]lue").toLowerCase();

  switch (duckColor) {
    case "y":
      alert("Your lack of creativity dissapoints your teacher Ms. Lippy.\nYou fail 1st grade.");
      gameOver();
      break;
    case "b":
      thirdGrade();
      break;
    default:
      alert("That option is not valid.");
  }
}

function thirdGrade() {
  var makeFun = parseInt(prompt("Your creativity is rewarded! You pass 1st and 2nd grade!\nYou are now in 3rd grade. A classmate is having trouble reading aloud.\nWhat do you do? (1/2/3)\n[1]Encourage him! He is trying the best he can.\n[2]Say nothing.\n[3]Make fun of him!"));

  switch (makeFun) {
    case 1:
      alert("Your kindness helps you breeze through school. You eventually graduate with honors and take over the family business.\nCongrats!");
      gameOver();
      break;
    case 2:
      alert("You should not just let him struggle! Your father is not happy and refuses to give you the company.");
      gameOver();
      break;
    case 3:
      highSchool();
      break;
    default:
      alert("That option is not valid.");
  }
}

function highSchool() {
  var fightIgnore = prompt("That's not very nice! Ms. Vaughn kicks you out of class.\nThis encourages you to try harder! You go back to class and pass the final test!\nYou finish elementry and middle school. You are now in high school.\nYour childhood nemesis O'doyle tries to stuff you in a locker. What do you do? (F/I)\n[F]ight back\n[I]gnore him").toLowerCase();

  switch (fightIgnore) {
    case "f":
      alert("You try to punch him but you slip and break your leg. You are expelled for fighting.");
      gameOver();
      break;
    case "i":
      alert("O'doyle is frustrated that he is not getting a reaction from you and he walks away.\nYou go on to finish high school and your father gives you the company.\nCongrats!!");
      gameOver();
      break;
    default:
      alert("That option is not valid.");
  }
}

function getDrunk() {
  var beer = prompt("Ok, would you like a domestic lite or a heavy import? (D/I)\n[D]omestic lite\n[I]mport").toLowerCase();

  switch (beer) {
    case "d":
      howManyDomestic();
      break;
    case "i":
      howManyImport();
      break;
    default:
      alert("That option is not valid.");
  }
}

function howManyDomestic() {
  var num = parseInt(prompt("How many beers would you like?"));

  if (num > 24) {
    alert("That's way too many. You're dead.")
    gameOver();
  } else {
    for (var i = 1; i <= num; i++) {
      console.log("Glug glug glug... Down goes beer number " + i);
      if (i === 6) {
        alert("One 6-pack down. You're a champ.");
      } else if (i === 12) {
        alert("You're getting pretty drunk. You get up stumbling and fall into the pool. You drown...");
        break;
      }
    }
    gameOver();
  }
}

function howManyImport() {
  var num = parseInt(prompt("How many beers would you like?"));

  if (num > 12) {
    alert("That's way too many. You're dead.")
    gameOver();
  } else {
    for (var i = 1; i <= num; i++) {
      console.log("Glug glug glug... Down goes beer number " + i);
      if (i === 3) {
        alert("Whoa, slow down. Those are pretty strong.");
      } else if (i === 6) {
        alert("You're getting pretty drunk. You get up stumbling and fall into the pool. You drown...");
        break;
      }
    }
    gameOver();
  }
}

function gameOver() {
  alert("Game Over.");
}

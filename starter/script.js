// put code here!
//ask for name
//Welcome to Dark Souls username

//choose your class
//Knight, Theif, Pyromancer

//choose Knight   //choose Theif //choose Pyromancer
//What weapon would you like? Sword and Sheild, Axe, Nothing(MAN-UP)
  //Choose Sword and Sheild
    //Choose your path
      //Left
      //You enter a clearing
          //There is a chest in the middle of the clearing, what do you want to do.
            //Walk right up and open it.
              //Its a Mimik it gets up and round houses you in the face and You Died.

            //Stay as far away
              //You hug the wall and get to the other end of the clearing
                //You open the door at the other end of the clearing and enter a hall
                //with two doors and a hole in the middle
                  //Left Door
                    //Open the door and a dog jumps out and kills you. You Died.

                  //Right Door
                    //Open the door and a dog jumps out and kills you. You Died

                  //Fall Down hole
                    //You Take Fall Damage, and the Boss Battle begins
                      //Do you attack, roll to dodge, or try to run away..
                        //You attack
                          //You do a little damage but can't get out of the way fast enough
                          // and You Die.
                        //You Dodge
                        // You roll to the right twice and end up behind the Boss
                          //Do you wanna attack, roll, or run.
                            //attack
                              //You do enough damage to kill the boss and a Bonfire
                              //takes its bodys place
                                //You touch the Bonfire where it is safe... for a second
                                //a dog comes out of nowhere and kills you.

                        //Run away
                          //You try to run away and get hit and then You Died.
            //Do Nothing
              //Spear comes out of the wall and You Died.

      //Right
      //Fell off cliff. You Died.

      //Straight
      //Pitfall onto Spikes. You Died.


//code below
var userInputName = prompt("Welcome to Dark Souls. What is your name");
var response = prompt("Hello " + userInputName + "are you ready to play? (y/n)");
  while (response != "y") {
    response = prompt("Do you want to play?");
  }

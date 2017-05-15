/* I only have pseudocode for this, but i think it's very cool. The core of the
game is an associative array where each entry describes a game location. The index
of the array is a location name. Ther first entry might look like this:

{ "start" : description : "Which fictional world do you wish to travel to?",
choices : {A : "Middle Earth", B : "The Land", C : "Dune"}
    }

so, the game is a loop

while (location != "gameOverMan") {
  print locations[location[description]]
  print locations[locstion[choices]]
  get choice
}
you could add code to handle numeric inputs, too

I'm confident a lartge scalle version of thid would implement somethig like that,
if not use ab actuka database

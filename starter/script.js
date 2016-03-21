// put code here!
PROGRAM comandlineQuize:

OUTPUT: What is your name?

INPUT: Nice to meet you PLAYER!

OUTPUT:  “What is the first thing you do to make a copy of your home work repository from git hub?”
INPUT: user inputs the “answer"


STORE: the user’s input in the “answer variable”

IF answer = “fork”

THEN

		OUTPUT:  “You are correct!”

ELSE
		OUTPUT: “Try again”

UNTIL: answer =“fork”

OUTPUT:  What is the next step after forking in order to be able to create a new local git repo copied from a remote one?

INPUT: user inputs the “answer"
STORE: the user’s input in the “answer variable”

IF answer = “git clone <URL>”

THEN

		OUTPUT:  “You are correct!”

ELSE

                  OUTPUT: “Try again”

UNTIL: answer = “git clone <URL>”
OUTPUT:  What is the next step after cloning?

INPUT: user inputs the “answer”

STORE: the user’s input in the “answer variable”

IF answer = “git clone <URL>”

THEN

		OUTPUT:  “You are correct!”

ELSE

OUTPUT: “Try again”

UNTIL: answer = “git clone <URL>”


THEN

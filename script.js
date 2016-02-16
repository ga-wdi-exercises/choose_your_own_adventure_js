// This array is an array of "Nodes". Each node is an array of 6 items.
// The first is the text displayed when you reach the node, typically a question
// that will determine where the player moves in the game.
// the second, forth, and sixth entries are possible answers to the question.
// the third, fifth, and seventh entries are array addresses that bring the player
// to the indicated node.
// Special cases: If a node has less than three possible answers the address space
// for the non-answer should be a negative number, the answer text itself can be anything
// that's not null.  It doesn't matter much because it won't be desplayed to the user.
// If all answer address spaces are negative it will be considered an end game
// node.  In this case, the spot reserved for the third answer should be a link
// to an end game movie.
var nodes=[["you are Sterling Archer, world's greatest spy.  you arrive at work, who do you speak with first?"                                                                    ,"llana"         ,1  ,"mallory"                     ,2   ,"find the others"                                     ,3],
           ["you yell for Llana.  she walks over to you.  what do you do?"                                                                                                        ,"keep yelling"  ,4  ,"talk about your turtle neck" ,5   ,"END"                                                ,-1],
           ["you walk over to Mallory's office and see Sheryl, her secretary.  she informs you Mallory is in the armory.  What do you do?"                                        ,"talk to sheryl",6  ,"find mallory"                ,7   ,"END"                                                ,-1],
           ["you walk towards the offices, you see Cryil and hear Krieger in the safe room.  your phone begins to ring.  What do you do?"                                         ,"talk to cyril" ,8  ,"answer the phone"            ,9   ,"find krieger"                                       ,10],
           ["despite her repeated attempts to ignore you, you continue yelling her name. when she finally acknowledges you, you simply say DANGER ZONE..."                        ,"END"           ,-1 ,"END"                         ,-1  ,"https://www.youtube.com/watch?v=YhzIy-6lKyU#t=39s"  ,-1],
           ["who cares if she won't answer you.  you explain your tactleneck anyway..."                                                                                           ,"END"           ,-1 ,"END"                         ,-1  ,"https://www.youtube.com/watch?v=hnqNbz5ZZIM#t=1m24s",-1],
           ["Sheryl tells you she left her pet occelot alone at home.  You decide to go see babu, but first you need to stop by the pet store for a toy..."                       ,"END"           ,-1 ,"END"                         ,-1  ,"https://www.youtube.com/watch?v=YhzIy-6lKyU#t=1m48s",-1],
           ["you walk over to the armory and any mallory informs you of your next mission.  you grab a pistol and plot out your next mission..."                                  ,"END"           ,-1 ,"END"                         ,-1  ,"https://www.youtube.com/watch?v=YhzIy-6lKyU#t=1m34s",-1],
           ["cryil asks if you can teach him karate..."                                                                                                                           ,"END"           ,-1 ,"END"                         ,-1  ,"https://www.youtube.com/watch?v=YhzIy-6lKyU#t=12s"  ,-1],
           ["you answer your phone, it's ron.  he explains he's being chased down by the mob but won't say why.  you write off the cause of this chaos as the butterfly effect...","END"           ,-1 ,"END"                         ,-1  ,"https://www.youtube.com/watch?v=YhzIy-6lKyU#t=4m58s",-1],
           ["you see llana and kreiger, who inform you they've been locked out of the safe.  You don't think they can break in..."                                                ,"END"           ,-1 ,"END"                         ,-1  ,"https://www.youtube.com/watch?v=YhzIy-6lKyU#t=1m12s",-1]];

var curNode, endLink, eog;

//  Reads the input line, uses writeOut to display it, sends it to be parsed for
// for game actions, then sets the input line to blank.
function ProcIn(){
  var inputLine = document.getElementById("in");
  WriteOut(document.createTextNode("<" + inputLine.value));
  ParseIn(inputLine.value);
  inputLine.value = "";
}

// Displays text defined by outTxt.
// Text needs to be an object, so if this function recieves a string it will
// use the StrToObj function to convert it.
function WriteOut(outTxt){
  var out = document.getElementById("out");
  var line = document.createElement("p");
  if (typeof outTxt == "string"){ outTxt = StrToObj(outTxt);}
  line.appendChild(outTxt);
  out.appendChild(line);
}

// Initialize game variables, displays how to access help, then sets player in
// the starting node.
function StartUp(){
    eog = false;
    endLink = "https://www.youtube.com/watch?v=iJ4T9CQA0UM";
    WriteOut("Type HELP for a list of commands.");
    GotoNode(0);
}

// Reads the input text, removes any return character, converts it to lower case
// then calls the proper function based on current state of the game.
function ParseIn(txt){
  txt = txt.replace(/\r?\n|\r/g,"")
  txt = txt.toLowerCase();
  switch(txt) {
    case "help": DispHelp(); break;
    case "repeat": GotoNode(curNode); break;
    case "reset" : StartUp(); break;
    case "quit":
    case "exit":
      EndGame(); break;
    case "1":
    case nodes[curNode][1].charAt(0):
    case nodes[curNode][1]:
      if(!eog && nodes[curNode][2] > 0){GotoNode(nodes[curNode][2]);}
      else if (eog){StartUp();}
      else {WriteOut("Command not recognized.");}
      break;
    case "2":
    case nodes[curNode][3].charAt(0):
    case nodes[curNode][3]:
      if(!eog && nodes[curNode][4] > 0){GotoNode(nodes[curNode][4]);}
      else if (eog){EndGame();}
      else {WriteOut("Command not recognized.");}
      break;
    case "3":
    case nodes[curNode][5].charAt(0):
    case nodes[curNode][5]:
      if(!eog && nodes[curNode][6] > 0){GotoNode(nodes[curNode][6]);}
      else {WriteOut("Command not recognized.");}
      break;
    case "play again":
    case "p":
      if(eog){StartUp();}
      else {WriteOut("Command not recognized.");}
      break;
    case "watch video":
    case "w":
      if(eog){EndGame();}
      else {WriteOut("Command not recognized.");}
      break;
    default:
      WriteOut("Command not recognized.");
  }
}

// Converts strings to a textNode that will allow it to be added to an element
// on the HTML doc.
function StrToObj(txt){
  return(document.createTextNode(txt));
}

// Displays commands recognized by the parseIn function
function DispHelp(){
  WriteOut("-----");
  WriteOut("Valid commands are:");
  WriteOut("< repeat - Displays your current question and its possible answers.");
  WriteOut("< help   - Displays this help message.");
  WriteOut("< reset  - Restart the game at the first question.");
  WriteOut("< quit or < exit - Quits the game.")
  WriteOut("-----")
  WriteOut("You can choose to answer the question by either:")
  WriteOut("< #      - Entering the number next to the answer you wish to select.");
  WriteOut("< x      - Entering the first letter of the answer you wish to select.");
  WriteOut("< xxx... - Typing the entire answer you wish to select.");
  WriteOut("-----")
}

// Takes player to the node specified by node number.
// Then displays the node description and possible paths to take.
// Also determines if the player has reached the end of a tree and sets eog flag
// while displaying end game text and options.
function GotoNode(nodeNumber){
  var n = 1;
  var i;
  curNode = nodeNumber;
  WriteOut("-----");
  WriteOut(nodes[curNode][0]);
  WriteOut("-");

  // Displays possible paths to take.
  for (i = 2; i <= 6; i = i + 2){
    if (nodes[curNode][i] >= 0) {WriteOut( n + ") " + nodes[curNode][i-1]);}
    n++;
  }

  // If there are no valid child nodes, set/display end game data/info.
  if(nodes[curNode][2] < 0 && nodes[curNode][4] < 0 && nodes[curNode][6] < 0){
    eog = true;
    endLink = nodes[curNode][5];
    WriteOut("It's not so funny when I explain it...");
    WriteOut("You should probably just watch the video.");
    WriteOut("1) play again");
    WriteOut("2) watch video");
  }
}

// Called when the user ends the game, and redirects them to their victory youtube video
// ...or whatever url supplied.
function EndGame(){
  window.location.assign(endLink);
}

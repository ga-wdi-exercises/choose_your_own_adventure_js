
// ======= ======= ======= init ======= ======= ======= 
function init() { 
    // console.log("init");

    // prompt conditions:
    //   not null ("cancel" option)
    //   string is valid (A, B, C entered)
    //   number entry is valid

	// ======= variables =======
    var selectedScene, optionCharCount, optionPadding, inputIsValid, userEntry, randomizer, numberFlag;
	var sceneArray = [];
	var selectionArray = ["A", "B", "C"];
	var optionString = "";
	var nextOption = "";
	var promptText = "";
	var padString = ""
	var optionStringMax = 20;

	sceneArray = initScenes();
	var whichScene = "s0";

	// ======= load first scene =======
	getScene(whichScene);


	// ======= ======= ======= get Scene display ======= ======= ======= 
	function getScene(whichScene) { 
	    // console.log("getScene");

	    // == get scene object ==
		optionString = "\n ******* ******* ******* ******* ******* ******* ******* \n\n";
	    nextScene = getSceneObject(whichScene);

	    // == play game (if not cancelled by user) == 
	    if (nextScene != "cancel") {

	    	// == scene description ==
			optionString = optionString + nextScene.sceneTitle + "\n------- ------- -------\n" + nextScene.sceneText + "\n\n";

			// == scene options ==
			for (var i=0; i < nextScene.linkText.length; i++ ) {

				// == build scene text strings ==
				if (i == nextScene.linkText.length - 1) {
					optionString = optionString + nextScene.linkOptions[i].substring(0, 3) + ": " +  nextScene.linkText[i] + "\n\n";
				} else {
					optionString = optionString + nextScene.linkOptions[i].substring(0, 3) + ": " +  nextScene.linkText[i] + "\n";
				}
			}


			// ======= ======= ======= current scene display ======= ======= ======= 
			// ======= ======= ======= current scene display ======= ======= ======= 
			// ======= ======= ======= current scene display ======= ======= ======= 

			console.log(optionString);


			// ======= ======= ======= user input prompt ======= ======= ======= 
			// ======= ======= ======= user input prompt ======= ======= ======= 
			// ======= ======= ======= user input prompt ======= ======= ======= 

			promptText = "";
			for (var i=0; i < nextScene.linkOptions.length; i++ ) {
				promptText = promptText + nextScene.linkOptions[i] + "\n";
			}

			promptText = promptText + "\n------- ------- -------\n";

		    userEntry = prompt(promptText);

		    // == cancelling game == 
		    if (userEntry == null) {
			    console.log("\n///// You can reload the page if you'd like to play again. /////\n");

			// == scene selected == 
		    } else {

		    	// == convert number to string entry == 
		    	if (!isNaN(userEntry.charAt(0))) {
		    		numberFlag = true;

		    		// == remove % character if entered ==
		    		if(userEntry.indexOf('%') > -1) {
		    			userEntry = userEntry.replace('%','');
		    		}
		    		userEntry = parseInt(userEntry);
		    	}

		    	// == allow/fix lower-case single-letter entries ==
		    	if (userEntry.length == 1) {
		    		userEntry = userEntry.toUpperCase();
		    	}

			    // == input validation == 
			    inputIsValid = false;
			    for (var i=0; i < nextScene.linkOptions.length; i++ ) {

			    	// == numeric entry ==
			    	if (numberFlag) {
				    	nextSelectOption = nextScene.linkOptions[i].substring(0, 3);
			    		if(nextSelectOption.indexOf('%') > -1) {
			    			nextSelectOption = nextSelectOption.replace('%','');
			    		}

				    // == text entry ==
			    	} else {
				    	nextSelectOption = nextScene.linkOptions[i].charAt(0);
			    	}

			    	if (userEntry == nextSelectOption) {
			    		inputIsValid = true;
			    		whichScene = nextScene.linkKeys[i];

					    // == if randomized link ==
					    if (Array.isArray(whichScene)) {
					    	randomizer = Math.random();
					    	if (randomizer > 0.5) {
					    		whichScene = whichScene[0];
					    	} else {
					    		whichScene = whichScene[1];
					    	}
					    }
			    		break;
			    	}
			    }

			    // == check validity; try again == 
			    if (inputIsValid == false) {
			    	console.log("\n///// Uh oh... Check the options and try again! /////\n");
			    }

			    getScene(whichScene);
		    }
	    } else {
		    console.log("\n///// You can reload the page if you'd like to play again. /////\n");
	    }
	}

	// ======= ======= ======= get Scene object ======= ======= ======= 
	function getSceneObject(selectedSceneKey) { 
	    // console.log("getSceneObject");

	    if (selectedSceneKey == 's9000') {
	        if (confirm("\n///// You're at the pound!  Would you like to be a better pet this time? /////")) {
			    getScene("s0000");
			}
		}

	    // == find scene objedt via scene key value ==
	    for (var i = 0; i < sceneArray.length; i++) {
	    	nextSceneKey = sceneArray[i].sceneKey;
	        if (nextSceneKey == selectedSceneKey) {
	            return sceneArray[i];
	        }
	    }

	    // == scene not found ==
        console.log("\n///// Uh oh... Out of scenes! /////\n");

        // == end of game ==
        if (confirm("\n///// Out of scenes!  Would you like to start over? /////")) {
		    getScene("s0000");
		} else {
		    return "cancel";
		}
	}


	// ======= ======= ======= SCENE objects ======= ======= ======= 
	// ======= ======= ======= SCENE objects ======= ======= ======= 
	// ======= ======= ======= SCENE objects ======= ======= ======= 


	function initScenes() { 
	    console.log("initScenes");

	    var s0 = new Scene (
	        /* sceneKey:    */ "s0",
	        /* sceneTitle:  */ "Rat Cat Bash",
	        /* sceneText:   */ "The human is tapping away at his device -- what does he see in that thing? -- but there's a feast-ful of rats in the alley and you need an all-natural snack after all that pre-processed Purina. (There's never enough, anyway).  Time to motivate the human...",
	        /* linkKeys:    */ ["s3", "s1", "s7"], 
	        /* linkOptions: */ ["D   At the Door", "L   Near the Laptop", "C   Scratch the Couch"], 
	        /* linkText:    */ ["Wait patiently by the door", 
	        					"Sit real close to the laptop looking sweet and cuddly", 
	        					"Start scratching on the couch.  Works every time!"]);

	    var s3 = new Scene (
	        /* sceneKey:    */ "s3",
	        /* sceneTitle:  */ "At the Door",
	        /* sceneText:   */ "As usual the human is cursing at the device and ignores your needs.  Time to...",
	        /* linkKeys:    */ ["s7", "s13"], 
	        /* linkOptions: */ ["C   Scratch the Couch", "Y   Yowl loudly"], 
	        /* linkText:    */ ["Start scratching on the couch.  Works every time.", 
	        					"Yowl loudly non-stop till he opens the door."]);

	    var r9 = new Scene (
	        /* sceneKey:    */ "r9",
	        /* sceneTitle:  */ "Near the Laptop",
	        /* sceneText:   */ "Amazingly the human notices -- his device must be making him happy this time -- and he opens the door.  (You can taste that rat-a-liscious rib cage already!)",
	        /* linkKeys:    */ ["s15", "s16", "s17"], 
	        /* linkOptions: */ ["G   Garbage cans", "C   Enemy cats", "N   Nice lady"], 
	        /* linkText:    */ ["Head straight for the garbage cans.  Gotta hand it to those humans -- overflow makes hunting a lot easier", 
	        					"Scan for enemy cats.  There are some big and mean ones out here", 
	        					"See of that nice lady across the alley is around.  She's always good for a handout."]);

	    var s1 = new Scene (
	        /* sceneKey:    */ "s1",
	        /* sceneTitle:  */ "Near the Laptop",
	        /* sceneText:   */ "Sit real close to the laptop looking sweet and cuddly",
	        /* linkKeys:    */ ["s4", "s5", "s6"], 
	        /* linkOptions: */ ["C   Claws to the face", "R   Rest quietly", "S   Stare sweetly"], 
	        /* linkText:    */ ["Try the claws-to-the-face move -- works every time (but might make him mad.  But how much Claw?", 
	        					"Rest quietly next to the keyboard, one paw near the return key (also works but takes longer)", 
	        					"Better stare sweetly at him this time... Often takes too long but won't make him mad..."]);

	    var s4 = new Scene (
	        /* sceneKey:    */ "s4",
	        /* sceneTitle:  */ "Claws to the face",
	        /* sceneText:   */ "This can be tricky.  You need the right amount of claw.",
	        /* linkKeys:    */ ["s9", "s9", "s13", "s99"], 
	        /* linkOptions: */ ["25%", "50%", "75%", "100%"], 
	        /* linkText:    */ ["Best if he's cursing and glaring (anything more and he'll slap you away) but could be ignored if he's focusing and will delay the hunt", 
	        					"Good move if he's hard to read...", 
	        					"Risky but effective -- he'll make loud annoyance noises but guaranteed to pick you up and throw you out.  Embarassing but it gets the door opened...",
	        					"Only if you're suicidal"]);

	    var s5 = new Scene (
	        /* sceneKey:    */ "s5",
	        /* sceneTitle:  */ "Rest quietly",
	        /* sceneText:   */ "Resting sweetly takes a while, but there are options:",
	        /* linkKeys:    */ ["s0"], 
	        /* linkOptions: */ ["P   Paw pressure", "W   Watching and waiting", "T   Take a walk"], 
	        /* linkText:    */ ["A little paw pressure on the return key usually works.", 
	        					 "Watching and waiting.", 
	        					 "Taking a walk across the keys is what is needed."]);

	    var s6 = new Scene (
	        /* sceneKey:    */ "s6",
	        /* sceneTitle:  */ "Stare sweetly",
	        /* sceneText:   */ "Better stare sweetly at him this time... Often takes too long but won't make him mad...",
	        /* linkKeys:    */ ["s0"], 
	        /* linkOptions: */ ["0"], 
	        /* linkText:    */ ["0"]);

	    var s7 = new Scene (
	        /* sceneKey:    */ "s7",
	        /* sceneTitle:  */ "Scratch the Couch",
	        /* sceneText:   */ "Start scratching on the couch.  Works every time!",
	        /* linkKeys:    */ ["s13"], 
	        /* linkOptions: */ ["G   Go for it."], 
	        /* linkText:    */ ["Go for it."]);

	    var s8 = new Scene (
	        /* sceneKey:    */ "s8",
	        /* sceneTitle:  */ "",
	        /* sceneText:   */ "",
	        /* linkKeys:    */ ["s13"], 
	        /* linkOptions: */ ["0"], 
	        /* linkText:    */ ["0"]);

	    var s9 = new Scene (
	        /* sceneKey:    */ "s9",
	        /* sceneTitle:  */ "Door open!",
	        /* sceneText:   */ "Amazingly the human notices -- his device must be making him happy this time -- and he opens the door.  (You can taste that rat-a-liscious rib cage already!)",
	        /* linkKeys:    */ ["s15", "s16", "s17"], 
	        /* linkOptions: */ ["G   Garbage cans", "C   Enemy cats", "N   Nice lady"], 
	        /* linkText:    */ ["Head straight for the garbage cans.  Gotta hand it to those humans -- overflow makes hunting a lot easier", 
	        					"Scan for enemy cats.  There are some big and mean ones out here", 
	        					"See of that nice lady across the alley is around.  She's always good for a handout."]);

	    var s10 = new Scene (
	        /* sceneKey:    */ "s10",
	        /* sceneTitle:  */ "",
	        /* sceneText:   */ "",
	        /* linkKeys:    */ ["s14"], 
	        /* linkOptions: */ ["0"], 
	        /* linkText:    */ ["0"]);

	    var s11 = new Scene (
	        /* sceneKey:    */ "s11",
	        /* sceneTitle:  */ "",
	        /* sceneText:   */ "",
	        /* linkKeys:    */ ["s13"], 
	        /* linkOptions: */ ["0"], 
	        /* linkText:    */ ["0"]);

	    var s12 = new Scene (
	        /* sceneKey:    */ "s12",
	        /* sceneTitle:  */ "",
	        /* sceneText:   */ "",
	        /* linkKeys:    */ ["s13"], 
	        /* linkOptions: */ ["0"], 
	        /* linkText:    */ ["0"]);

	    var s13 = new Scene (
	        /* sceneKey:    */ "s13",
	        /* sceneTitle:  */ "Out at last",
	        /* sceneText:   */ "It worked!  Out at last.  Ahhh... the smell rodent everywhere!  Now...",
	        /* linkKeys:    */ ["s15", "s16", "s17"], 
	        /* linkOptions: */ ["G   Garbage cans", "C   Enemy cats", "N   Nice lady"], 
	        /* linkText:    */ ["Head straight for the garbage cans.  Gotta hand it to those humans -- overflow makes hunting a lot easier", 
	        					"Scan for enemy cats.  There are some big and mean ones out here", 
	        					"See of that nice lady across the alley is around.  She's always good for a handout."]);

	    var s15 = new Scene (
	        /* sceneKey:    */ "s15",
	        /* sceneTitle:  */ "Garbage cans",
	        /* sceneText:   */ "Ah, the menu...",
	        /* linkKeys:    */ ["s0", "s0", "s0"], 
	        /* linkOptions: */ [1, 2, 3], 
	        /* linkText:    */ ["Can #1.  Looks like an old carpet and some sheets", 
	        					"Can #2.  Foil from the barbeque, paper plates.  Rats love that stuff", 
	        					"Can #3.  Clean and closed.  Those people never help out..."]);

	    var s16 = new Scene (
	        /* sceneKey:    */ "s16",
	        /* sceneTitle:  */ "",
	        /* sceneText:   */ "",
	        /* linkKeys:    */ ["s22", "s23", "s24"], 
	        /* linkOptions: */ ["0", "0", "0"], 
	        /* linkText:    */ ["Check down the alley", 
	        					"Check up the alley", 
	        					"Forget about it...  The rats are running!"]);

	    var s17 = new Scene (
	        /* sceneKey:    */ "s17",
	        /* sceneTitle:  */ "Nice Lady",
	        /* sceneText:   */ "Uh oh...  she's not home.  Now what?",
	        /* linkKeys:    */ ["s00"], 
	        /* linkOptions: */ ["0"], 
	        /* linkText:    */ ["0"]);

	    var s99 = new Scene (
	        /* sceneKey:    */ "s99",
	        /* sceneTitle:  */ "Game over!",
	        /* sceneText:   */ "Game over!  You're at the pound...",
	        /* linkKeys:    */ ["s00"], 
	        /* linkOptions: */ ["Try Again?"], 
	        /* linkText:    */ ["Try Again?"]);

	    return sceneArray;
	}

	// ======= ======= ======= SCENE constructor ======= ======= ======= 
	// ======= ======= ======= SCENE constructor ======= ======= ======= 
	// ======= ======= ======= SCENE constructor ======= ======= ======= 

	function Scene (sceneKey, sceneTitle, sceneText, linkKeys, linkOptions, linkText) {
	    // console.log("Scene");

	    this.sceneKey = sceneKey;
	    this.sceneTitle = sceneTitle;
	    this.sceneText = sceneText;
	    this.linkKeys = linkKeys;
	    this.linkOptions = linkOptions;
	    this.linkText = linkText;

	    // store scene object 
	    sceneArray.push(this);

	}
}


// ======= ======= ======= ARCHIVE ======= ======= ======= 
// ======= ======= ======= ARCHIVE ======= ======= ======= 
// ======= ======= ======= ARCHIVE ======= ======= ======= 

				// == line up options ==
				// padString = "";
				// optionCharCount = nextScene.linkOptions[i].length;
				// optionPadding = optionStringMax - optionCharCount;

				// // == build pad spaces string ==
				// for (var j=0; j < optionPadding; j++ ) {
				// 	padString = padString + " ";
				// }

				// // == build scene text strings ==
				// if (i == nextScene.linkText.length - 1) {
				// 	optionString = optionString + nextScene.linkOptions[i].substring(0, 2) + ": " +  padString + nextScene.linkText[i] + "\n\n";
				// } else {
				// 	optionString = optionString + nextScene.linkOptions[i].substring(0, 2) + ": " +  padString + nextScene.linkText[i] + "\n";
				// }


    // var keysArray = [
    // 	["A", "B", "C"],
    // 	 [["A", "B", "C"], ["A", "B", "C"], ["A", "B", "C"]], 
    // 	 [[["A", "B", "C"], ["A", "B", "C"], ["A", "B", "C"]], 
    // 	  [["A", "B", "C"], ["A", "B", "C"], ["A", "B", "C"]], 
    // 	  [["A", "B", "C"], ["A", "B", "C"], ["A", "B", "C"]]]]

    // var keysArray = [
    // 	[["A", "B", "C"], ["A", "B", "C"], ["A", "B", "C"]], 
    // 	[["A", "B", "C"], ["A", "B", "C"], ["A", "B", "C"]], 
    // 	[["A", "B", "C"], ["A", "B", "C"], ["A", "B", "C"]]]




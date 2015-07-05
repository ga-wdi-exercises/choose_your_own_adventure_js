
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
	var whichScene = "s0000";

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

	    var s0000 = new Scene (
	        /* sceneKey:    */ "s0000",
	        /* sceneTitle:  */ "Rat Cat Bash",
	        /* sceneText:   */ "The human is tapping away at his device -- what does he see in that thing? -- but there's a feast-ful of rats in the alley and you need an all-natural snack after all that pre-processed Purina. (There's never enough, anyway).  Time to motivate the human...",
	        /* linkKeys:    */ [["r1000", "r2000"], "s2000", "s1000"], 
	        /* linkOptions: */ ["D   At the Door", "L   Near the Laptop", "C   Scratch the Couch"], 
	        /* linkText:    */ ["Wait patiently by the door", 
	        					"Sit real close to the laptop looking sweet and cuddly", 
	        					"Start scratching on the couch.  Works every time!"]);

	    var r1000 = new Scene (
	        /* sceneKey:    */ "r1000",
	        /* sceneTitle:  */ "Out at Last",
	        /* sceneText:   */ "Amazingly the human notices -- his device must be making him happy this time -- and he opens the door.  (You can taste that rataliscious rib cage already!)",
	        /* linkKeys:    */ ["s1100", "s1200", "s1300"], 
	        /* linkOptions: */ ["E   Enemy Cats", "G   Garbage Cans", "N   Neighbor Lady"], 
	        /* linkText:    */ ["Scan for enemy cats.  There are some big and mean ones out here.", "Head straight for the garbage cans.  Gotta hand it to those humans -- overflow makes hunting a lot easier", "See if that nice lady across the alley is around.  She's always good for a handout."]);

	    var r2000 = new Scene (
	        /* sceneKey:    */ "r2000",
	        /* sceneTitle:  */ "At the Door",
	        /* sceneText:   */ "As usual the human is cursing at the device and ignores your needs.  Time to...",
	        /* linkKeys:    */ ["s1000", "s2000", "s1000"], 
	        /* linkOptions: */ ["Y   Yowl", "L   Laptop", "C   Scratch the Couch"], 
	        /* linkText:    */ ["Yowl loudly non-stop until he gets off his ass and opens the door", "Sit real close to the laptop looking sweet and cuddly", "Start scratching on the couch.  Works every time!"]);

	    var s1000 = new Scene (
	        /* sceneKey:    */ "s1000",
	        /* sceneTitle:  */ "Out at Last",
	        /* sceneText:   */ "It worked!  Out at last.  Ahhh... the smell rodent everywhere!  Now...",
	        /* linkKeys:    */ ["s1100", "s1200", "s1300"], 
	        /* linkOptions: */ ["E   Enemy Cats", "G   Garbage Cans", "N   Neighbor Lady"], 
	        /* linkText:    */ ["Scan for enemy cats.  There are some big and mean ones out here.", "Head straight for the garbage cans.  Gotta hand it to those humans -- overflow makes hunting a lot easier", "See of that nice lady across the alley is around.  She's always good for a handout."]);

	    var s2000 = new Scene (
	        /* sceneKey:    */ "s2000",
	        /* sceneTitle:  */ "Near the Laptop",
	        /* sceneText:   */ "He doesn't notice.  The human keeps tapping...  Gonna be one of those nights.  Time to...",
	        /* linkKeys:    */ ["s2100", "s1000", "s1000"],
	        /* linkOptions: */ ["C   Claws", "K   Keyboard", "S   Stare Sweetly"], 
	        /* linkText:    */ ["Try the claws-to-the-face move -- works every time (but might make him mad)", "Rest sweetly next to the keyboard, one paw near the return key (also works but takes longer)", "Better stare sweetly at him this time... Often takes too long but won't make him mad..."]);

	    var s2100 = new Scene (
	        /* sceneKey:    */ "s2100",
	        /* sceneTitle:  */ "How much Claw?",
	        /* sceneText:   */ "This is always tricky -- how much claw?",
	        /* linkKeys:    */ ["s2110", "s2120", "s2130", "s9000"], 
	        /* linkOptions: */ ["25% ", "50% ", "75% ", "100% "], 
	        /* linkText:    */ ["Best if he's cursing and glaring (anything more and he'll slap you away) but could be ignored if he's focusing and will delay the hunt", "Good move if he's hard to read...", "75% Risky but effective -- he'll make loud annoyance noises but garenteed to pick you up and throw you out.  Embarassing but it gets the door opened...", "Only if you're suicidal..."]);

	    var s2110 = new Scene ( "s2110", "Keyboard", "text", ["s2210", "s2220", "s2230"], ["sdg", "dtdtdr", "setysty"], ["t2210", "t2220", "t2230"]);

	    var s2120 = new Scene ( "s2120", "Keyboard", "text", ["s2210", "s2220", "s2230"], ["sdg", "dtdtdr", "setysty"], ["t2210", "t2220", "t2230"]);

	    var s2130 = new Scene ( "s2130", "Keyboard", "text", ["s2210", "s2220", "s2230"], ["sdg", "dtdtdr", "setysty"], ["t2210", "t2220", "t2230"]);

	    var s9000 = new Scene ( "s2140", "Keyboard", "Game over!  You're at the pound...", ["s2210", "s2220", "s2230"], ["sdg", "dtdtdr", "setysty"], ["t2210", "t2220", "t2230"]);

	    var s2300 = new Scene (
	        /* sceneKey:    */ "s2300",
	        /* sceneTitle:  */ "title",
	        /* sceneText:   */ "Fail!  That device controls his brain sometimes.  Gotta make some noise...",
	        /* linkKeys:    */ ["s3100", "s3200", "s3300"], 
	        /* linkOptions: */ ["Y  Yowl", "L  Laptop", "S  Start sniffing around"],
	        /* linkText:    */ ["t3100", "t3200", "t3300"]);

	    var s1100 = new Scene (
	        /* sceneKey:    */ "s1100",
	        /* sceneTitle:  */ "purpose in life",
	        /* sceneText:   */ "Lorem ipsum dolor sitpertin aliquam tibique, debsae cu pri, aeque graece est ut.", 
	        /* linkKeys:    */ ["s1110", "s1120", "s1130"], 
	        /* linkOptions: */ ["dfg", "sdg", "dfgh"], 
	        /* linkText:    */ ["Lorem ipsum dolor sitpertest ut.", 
	        					"Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.", 
	        					"Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut."]);
	    var s1200 = new Scene (
	        /* sceneKey:    */ "s1200",
	        /* sceneTitle:  */ "anyone from anywhere",
	        /* sceneText:   */ "Lorem ipsum dolor sitpertin aliquam tibique, debsae cu pri, aeque graece est ut.", 
	        /* linkKeys:    */ ["s1210", "s1220", "s1230"], 
	        /* linkOptions: */ ["11", "22", "33"], 
	        /* linkText:    */ ["Lorem ipsum dolor sitpertest ut.", 
	        					"Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.", 
	        					"Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut."]);
	    var s1300 = new Scene (
	        /* sceneKey:    */ "s1300",
	        /* sceneTitle:  */ "on the wind over the forest",
	        /* sceneText:   */ "Lorem ipsum dolor sitpertin aliquam tibique, debsae cu pri, aeque graece est ut.", 
	        /* linkKeys:    */ ["s1310", "s1320", "s1330"], 
	        /* linkOptions: */ ["sdg", "dtdtdr", "setysty"], 
	        /* linkText:    */ ["Lorem ipsum dolor sitpertest ut.", 
	        					"Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.", 
	        					"Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut."]);

	    var s3000 = new Scene (
	        /* sceneKey:    */ "s3000",
	        /* sceneTitle:  */ "Scratch the Couch",
	        /* sceneText:   */ "This one always works.  Sure enough he's kicking you out.",
	        /* linkKeys:    */ ["s2100", "s1000", "s1000"],
	        /* linkOptions: */ ["C   Claws", "K   Keyboard", "S   Stare Sweetly"], 
	        /* linkText:    */ ["Try the claws-to-the-face move -- works every time (but might make him mad)", "Rest sweetly next to the keyboard, one paw near the return key (also works but takes longer)", "Better stare sweetly at him this time... Often takes too long but won't make him mad..."]);

	    var s3100 = new Scene ( "s3100", "title", "text", ["s3110", "s3120", "s3130"], ["sdg", "dtdtdr", "setysty"], ["t3110", "t3120", "t3130"]);
	    var s3200 = new Scene ( "s3200", "title", "text", ["s3210", "s3220", "s3230"], ["sdg", "dtdtdr", "setysty"], ["t3210", "t3220", "t3230"]);
	    var s3300 = new Scene ( "s3300", "title", "text", ["s3310", "s3320", "s3330"], ["sdg", "dtdtdr", "setysty"], ["t3310", "t3320", "t3330"]);

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





// ======= ======= ======= init ======= ======= ======= 
function init() { 
    // console.log("init");

    // prompt conditions:
    //   not null ("cancel" option)
    //   string is valid (A, B, C entered)
    //   number entry is valid

	// ======= variables =======
    var selectedScene, optionCharCount, optionPadding, inputIsValid, userEntry;
	var sceneArray = [];
	var selectionArray = ["A", "B", "C"];
	var optionString = "";
	var nextOption = "";
	var padString = ""
	var optionStringMax = 10;

	sceneArray = initScenes();
	var whichScene = "s0000";

	// ======= load first scene =======
	getScene(whichScene);


	// ======= ======= ======= get Scene display ======= ======= ======= 
	function getScene(whichScene) { 
	    // console.log("getScene");

	    // == get scene object ==
		optionString = "";
	    nextScene = getSceneObject(whichScene);

	    // == play game (if not cancelled by user) == 
	    if (nextScene != "cancel") {
			for (var i=0; i < nextScene.linkText.length; i++ ) {

				// == line up options ==
				padString = "";
				optionCharCount = nextScene.linkOptions[i].length;
				optionPadding = optionStringMax - optionCharCount;

				// == build pad spaces string ==
				for (var j=0; j < optionPadding; j++ ) {
					padString = padString + " ";
				}

				// == build scene text strings ==
				if (i == nextScene.linkText.length - 1) {
					optionString = optionString + nextScene.linkOptions[i] + ": " +  padString + nextScene.linkText[i] + "\n\n";
				} else {
					optionString = optionString + nextScene.linkOptions[i] + ": " +  padString + nextScene.linkText[i] + "\n";
				}
			}

			// == scene separator ==
			optionString = optionString + nextScene.sceneKey + " ******* ******* ******* ******* ******* ******* ******* "


			// ======= ======= ======= current scene display ======= ======= ======= 
			// ======= ======= ======= current scene display ======= ======= ======= 
			// ======= ======= ======= current scene display ======= ======= ======= 

			console.log(nextScene.sceneTitle + "\n" + nextScene.sceneText);
			console.log(optionString);


			// ======= ======= ======= user input prompt ======= ======= ======= 
			// ======= ======= ======= user input prompt ======= ======= ======= 
			// ======= ======= ======= user input prompt ======= ======= ======= 

		    userEntry = prompt(nextScene.sceneTitle + "\n------- ------- -------\n" + nextScene.sceneText);

		    // == cancelling game == 
		    if (userEntry == null) {
			    console.log("\n///// You can reload the page if you'd like to play again. /////\n");

			// == scene selected == 
		    } else {

		    	// == convert number to string entry == 
		    	if (!isNaN(userEntry)) {
		    		userEntry = parseInt(userEntry);
		    	}

		    	// == allow/fix lower-case single-letter entries ==
		    	if (userEntry.length == 1) {
		    		userEntry = userEntry.toUpperCase();
		    	}

			    // == input validation == 
			    inputIsValid = false;
			    for (var i=0; i < nextScene.linkOptions.length; i++ ) {
			    	nextSelectOption = nextScene.linkOptions[i];
			    	if (userEntry == nextSelectOption) {
			    		inputIsValid = true;
			    		whichScene = nextScene.linkKeys[i];
			    		break;
			    	}
			    }

			    // == input not valid; try again == 
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
	        /* sceneTitle:  */ "dank dark place",
	        /* sceneText:   */ "Lorem ipsum dolor the work sitpertin aliquam tibique the workers, debsae cu pri, aeque window est ut.", 
	        /* linkKeys:    */ ["s1000", "s2000", "s3000"], 
	        /* linkOptions: */ ["A", "S", "D"], 
	        /* linkText:    */ ["Lorem ipsum dolor sitpertest ut.", 
	        					"Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.", 
	        					"Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut."]);
	    var s1000 = new Scene ( "s1000", "title", "text", ["s1100", "s1200", "s1300"], ["11", "22", "33"], ["t1100", "t1200", "t1300"]);
	    var s2000 = new Scene ( "s2000", "title", "text", ["s2100", "s2200", "s2300"], ["sdg", "dtdtdr", "setysty"], ["t2100", "t2200", "t2300"]);
	    var s3000 = new Scene ( "s3000", "title", "text", ["s3100", "s3200", "s3300"], ["sdg", "dtdtdr", "setysty"], ["t3100", "t3200", "t3300"]);

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

	    var s2100 = new Scene ( "s2100", "title", "text", ["s2110", "s2120", "s2130"], ["sdg", "dtdtdr", "setysty"], ["t2110", "t2120", "t2130"]);
	    var s2200 = new Scene ( "s2200", "title", "text", ["s2210", "s2220", "s2230"], ["sdg", "dtdtdr", "setysty"], ["t2210", "t2220", "t2230"]);
	    var s2300 = new Scene ( "s2300", "title", "text", ["s2310", "s2320", "s2330"], ["sdg", "dtdtdr", "setysty"], ["t2310", "t2320", "t2330"]);
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




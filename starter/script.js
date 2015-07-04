
// ======= ======= ======= init ======= ======= ======= 
function init() { 
    // console.log("init");

    var selectedScene;
	var sceneArray = [];
	var selectionArray = ["A", "B", "C"];
	var optionString = "";
	var nextOption = "";

	sceneArray = initScenes();
	var whichScene = "s0000";

	getScene(whichScene);

	// ======= ======= ======= getScene ======= ======= ======= 
	function getScene(whichScene) { 
	    // console.log("getScene");

	    // ======= get scene object =======
		optionString = "";
	    nextScene = getSceneObject(whichScene);

	    // ======= play game of not cancelled by user =======
	    if (nextScene != "cancel") {
			for (var i=0; i < nextScene.linkText.length; i++ ) {
				nextSelection = selectionArray[i];
				if (i == nextScene.linkText.length - 1) {
					optionString = optionString + nextSelection + ": " +  nextScene.linkText[i] + "\n\n";
				} else {
					optionString = optionString + nextSelection + ": " +  nextScene.linkText[i] + "\n";
				}
			}
			optionString = optionString + "******* ******* ******* ******* ******* ******* ******* "


			// ======= ======= ======= current scene display ======= ======= ======= 
			// ======= ======= ======= current scene display ======= ======= ======= 
			// ======= ======= ======= current scene display ======= ======= ======= 

			console.log(nextScene.sceneTitle + "\n" + nextScene.sceneText);
			console.log(optionString);


			// ======= ======= ======= user input prompt ======= ======= ======= 
			// ======= ======= ======= user input prompt ======= ======= ======= 
			// ======= ======= ======= user input prompt ======= ======= ======= 

		    selectedScene = prompt(nextScene.sceneTitle + "\n------- ------- -------\n" + nextScene.sceneText);

		    // ======= canceling game =======
		    if (selectedScene == null) {
			    console.log("\n ///// You can reload the page if you'd like to play again. /////\n");

			// ======= scene selected =======
		    } else {
		    	selectedScene = selectedScene.toUpperCase();

			    // ======= input validation =======
			    inputIsValid = false;
			    for (var i=0; i < selectionArray.length; i++ ) {
			    	nextSelectOption = selectionArray[i];
			    	if (selectedScene == nextSelectOption) {
			    		inputIsValid = true;
			    	}
			    }

			    // ======= input not valid; try again =======
			    if (inputIsValid == false) {
			    	console.log("\n///// Uh oh... Make sure you entered A, B or C. /////\n");
			    	getScene(whichScene);

			    // ======= input ok; get next Scene =======
			    } else {
				    if (selectedScene === null) {
				        console.log("\n///// Uh oh... Nothing works? /////\n");
				    } else {
						switch(selectedScene) {
						    case "A":
						        whichScene = nextScene.linkKeys[0];
						        break;
						    case "B":
						        whichScene = nextScene.linkKeys[1];
						        break;
						    case "C":
						        whichScene = nextScene.linkKeys[2];
						        break;
						    default:
						        whichScene = "s0000";
						        console.log("///// Uh oh... The computer is lost; back to the begining! /////");
						}
					    getScene(whichScene);
				    }
			    }
		    }
	    } else {
		    console.log("\n///// You can reload the page if you'd like to play again. /////\n");
	    }
	}

	// ======= called by init() ======= ======= ======= ======= ======= ======= ======= 
	function getSceneObject(selectedSceneKey) { 
	    // console.log("getSceneObject");

	    for (var i = 0; i < sceneArray.length; i++) {
	    	nextSceneKey = sceneArray[i].sceneKey;
	        if (nextSceneKey == selectedSceneKey) {
	            return sceneArray[i];
	        }
	    }
        console.log("\n///// Uh oh... Out of scenes! /////\n");

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
	        /* sceneKey:   */ "s0000",
	        /* sceneTitle: */ "dank dark place",
	        /* sceneText:  */ "Lorem ipsum dolor the work sitpertin aliquam tibique the workers, debsae cu pri, aeque window est ut.", 
	        /* linkKeys:   */ ["s1000", "s2000", "s3000"], 
	        /* linkText:   */ ["Lorem ipsum dolor sitpertest ut.", 
	        					"Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.", 
	        					"Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut."], 
	        sceneArray
	    );
	    var s1000 = new Scene ( "s1000", "title", "text", ["s1100", "s1200", "s1300"], ["t1100", "t1200", "t1300"], sceneArray);
	    var s2000 = new Scene ( "s1000", "title", "text", ["s2100", "s2200", "s2300"], ["t2100", "t2200", "t2300"], sceneArray);
	    var s3000 = new Scene ( "s1000", "title", "text", ["s3100", "s3200", "s3300"], ["t3100", "t3200", "t3300"], sceneArray);

	    var s1100 = new Scene (
	        /* sceneKey:   */ "s1100",
	        /* sceneTitle: */ "purpose in life",
	        /* sceneText:  */ "Lorem ipsum dolor sitpertin aliquam tibique, debsae cu pri, aeque graece est ut.", 
	        /* linkKeys:   */ ["s1110", "s1120", "s1130"], 
	        /* linkText:   */ ["Lorem ipsum dolor sitpertest ut.", 
	        					"Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.", 
	        					"Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut."], 
	        sceneArray
	    );
	    var s1200 = new Scene (
	        /* sceneKey:   */ "s1200",
	        /* sceneTitle: */ "anyone from anywhere",
	        /* sceneText:  */ "Lorem ipsum dolor sitpertin aliquam tibique, debsae cu pri, aeque graece est ut.", 
	        /* linkKeys:   */ ["s1210", "s1220", "s1230"], 
	        /* linkText:   */ ["Lorem ipsum dolor sitpertest ut.", 
	        					"Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.", 
	        					"Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut."], 
	        sceneArray
	    );
	    var s1300 = new Scene (
	        /* sceneKey:   */ "s1300",
	        /* sceneTitle: */ "on the wind over the forest",
	        /* sceneText:  */ "Lorem ipsum dolor sitpertin aliquam tibique, debsae cu pri, aeque graece est ut.", 
	        /* linkKeys:   */ ["s1310", "s1320", "s1330"], 
	        /* linkText:   */ ["Lorem ipsum dolor sitpertest ut.", 
	        					"Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.", 
	        					"Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut."], 
	        sceneArray
	    );

	    var s2100 = new Scene ( "s2100", "title", "text", ["s2110", "s2120", "s2130"], ["t2110", "t2120", "t2130"], sceneArray);
	    var s2200 = new Scene ( "s2200", "title", "text", ["s2210", "s2220", "s2230"], ["t2210", "t2220", "t2230"], sceneArray);
	    var s2300 = new Scene ( "s2300", "title", "text", ["s2310", "s2320", "s2330"], ["t2310", "t2320", "t2330"], sceneArray);
	    var s3100 = new Scene ( "s3100", "title", "text", ["s3110", "s3120", "s3130"], ["t3110", "t3120", "t3130"], sceneArray);
	    var s3200 = new Scene ( "s3200", "title", "text", ["s3210", "s3220", "s3230"], ["t3210", "t3220", "t3230"], sceneArray);
	    var s3300 = new Scene ( "s3300", "title", "text", ["s3310", "s3320", "s3330"], ["t3310", "t3320", "t3330"], sceneArray);

		return sceneArray;
	}

	// ======= ======= ======= SCENE constructor ======= ======= ======= 
	// ======= ======= ======= SCENE constructor ======= ======= ======= 
	// ======= ======= ======= SCENE constructor ======= ======= ======= 

	function Scene (sceneKey, sceneTitle, sceneText, linkKeys, linkText, sceneArray) {
	    // console.log("Scene");

	    this.sceneKey = sceneKey;
	    this.sceneTitle = sceneTitle;
	    this.sceneText = sceneText;
	    this.linkKeys = linkKeys;
	    this.linkText = linkText;

	    // == build sceneArray / store scene object 
	    // this.sceneArray = sceneArray;
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




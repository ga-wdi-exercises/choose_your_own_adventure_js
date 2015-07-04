
// ======= ======= ======= init ======= ======= ======= 
function init() { 
    console.log("init");

    var selectedScene;
	var sceneArray = [];
	var optionString = '';
	var nextOption = '';

	sceneArray = initScenes();
	var whichScene = sceneArray[0];

	getScene(whichScene);

	// ======= ======= ======= getScene ======= ======= ======= 
	function getScene(whichScene) { 
	    console.log("getScene");
	    console.log("  whichScene: " + whichScene);

	    if (typeof(whichScene) == 'string') {
	    	whichScene = getNextScene(whichScene);
	    }

		for (var i=0; i < whichScene.linkText.length; i++ ) {
			if (i == whichScene.linkText.length - 1) {
				optionString = optionString + whichScene.linkKeys[i] + ': ' +  whichScene.linkText[i];
			} else {
				optionString = optionString + whichScene.linkKeys[i] + ': ' +  whichScene.linkText[i] + '\n';
			}
		}

		console.log(whichScene.sceneTitle + '\n' + whichScene.sceneText);
		console.log(optionString);

	    selectedScene = prompt(whichScene.sceneTitle + '\n' + whichScene.sceneText);
	    if (selectedScene === null) {
	        console.log("Uh oh... Nothing works?");
	    } else {
		    getScene(selectedScene);
	    }
	}

	// ======= called by init() ======= ======= ======= ======= ======= ======= ======= 
	function getNextScene(selectedSceneKey) { 
	    console.log("getNextScene");
	    console.log("  sceneArray: " + sceneArray);
	    console.log("  selectedSceneKey: " + selectedSceneKey);

	    for (var i = 0; i < sceneArray.length; i++) {
	    	nextSceneKey = sceneArray[i].sceneKey;
	    	console.log("  nextSceneKey: " + nextSceneKey);
	    	nextSceneKey = nextSceneKey.substring(1);
	    	console.log("  nextSceneKey: " + nextSceneKey);
	        if (nextSceneKey == selectedSceneKey) {
	            return sceneArray[i];
	        }
	    }
	}


	// ======= ======= ======= SCENE objects ======= ======= ======= 
	// ======= ======= ======= SCENE objects ======= ======= ======= 
	// ======= ======= ======= SCENE objects ======= ======= ======= 


	function initScenes() { 
	    console.log("initScenes");

	    var s1000 = new Scene (
	        /* sceneKey:   */ 1000,
	        /* sceneName:  */ 'opener',
	        /* sceneTitle: */ 'dank dark place',
	        /* sceneText:  */ 'Lorem ipsum dolor the work sitpertin aliquam tibique the workers, debsae cu pri, aeque window est ut.', 
	        /* linkKeys:   */ ['s1100', 's1200', 's1300'], 
	        /* linkText:   */ ['Lorem ipsum dolor sitpertest ut.', 
	        					'Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.', 
	        					'Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut.'], 
	        sceneArray
	    );
	    var s1100 = new Scene (
	        /* sceneKey:   */ 1100,
	        /* sceneName:  */ 'the work',
	        /* sceneTitle: */ 'purpose in life',
	        /* sceneText:  */ 'Lorem ipsum dolor sitpertin aliquam tibique, debsae cu pri, aeque graece est ut.', 
	        /* linkKeys:   */ ['s1110', 's1120', 's1130'], 
	        /* linkText:   */ ['Lorem ipsum dolor sitpertest ut.', 
	        					'Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.', 
	        					'Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut.'], 
	        sceneArray
	    );
	    var s1200 = new Scene (
	        /* sceneKey:   */ 1200,
	        /* sceneName:  */ 'the workers',
	        /* sceneTitle: */ 'anyone from anywhere',
	        /* sceneText:  */ 'Lorem ipsum dolor sitpertin aliquam tibique, debsae cu pri, aeque graece est ut.', 
	        /* linkKeys:   */ ['s1210', 's1220', 's1230'], 
	        /* linkText:   */ ['Lorem ipsum dolor sitpertest ut.', 
	        					'Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.', 
	        					'Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut.'], 
	        sceneArray
	    );
	    var s1300 = new Scene (
	        /* sceneKey:   */ 1300,
	        /* sceneName:  */ 'window',
	        /* sceneTitle: */ 'on the wind over the forest',
	        /* sceneText:  */ 'Lorem ipsum dolor sitpertin aliquam tibique, debsae cu pri, aeque graece est ut.', 
	        /* linkKeys:   */ ['s1310', 's1320', 's1330'], 
	        /* linkText:   */ ['Lorem ipsum dolor sitpertest ut.', 
	        					'Lorem ipsum dolor sitpertin aliquam tibique, debpertin aliquam tibsae cu pri, aequ.', 
	        					'Lorem ipin aliquam tibique, debsae cu pri, aeque graece r sitique, debsae cu pri, aeque graece est ut.'], 
	        sceneArray
	    );
		return sceneArray;
	}

	// ======= ======= ======= SCENE constructor ======= ======= ======= 
	// ======= ======= ======= SCENE constructor ======= ======= ======= 
	// ======= ======= ======= SCENE constructor ======= ======= ======= 

	function Scene (sceneKey, sceneName, sceneTitle, sceneText, linkKeys, linkText, sceneArray) {
	    console.log('Scene');

	    this.sceneKey = sceneKey;
	    this.sceneName = sceneName;
	    this.sceneTitle = sceneTitle;
	    this.sceneText = sceneText;
	    this.linkKeys = linkKeys;
	    this.linkText = linkText;

	    // == build sceneArray / store scene object 
	    this.sceneArray = sceneArray;
	    this.sceneArray.push(this);

	}
}



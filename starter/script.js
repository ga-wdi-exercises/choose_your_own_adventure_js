//Variables Making Life Easier
var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('box')
var answer;

//All the functions that make scenes dynamic and change the different div elements
function changeText(words) {
    text.innerHTML = words.replace();
};

function changeImage(img) {
    images.style.backgroundImage = "url(" + img + ")";
};

/*I wanted to talk about this one since I found it on a code pen and thought it was awesome. Basically it acceses our button box element and dynamically populates it based on the scenario it's accessing. The argument it takes is an Array structured like this [[],[]] where each inner array is a button. These have two properties. The first is the text of the button that will be what is shown to the user seen at buttonList[i][0]. The second is the actual function being run that gets input into the onClick link. A button will end up looking like this <button onClick="+position 1 of button object+">" +position 0 of button object + "</button>*/

function changeButtons(buttonList) {
    buttonBox.innerHTML = "";
    for (var i = 0; i < buttonList.length; i++) {
        buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
    };
}

//Tried to dynamically inject elements but realized they had to exist to use the onkeydown function I wanted to implement. Decided to hide and show based on the scene. And designed two scene change functions based on if I wanted an Input or buttons. Probably could have combined them all. Might refactor later.

function hideButtons(){
    document.getElementById("buttonBox").style.visibility = "hidden";
}

function showButtons(){
    document.getElementById("buttonBox").style.visibility = "visible";
}

function hideInput(){
    document.getElementById('box').style.visibility = "hidden";
}

function showInput(){
    document.getElementById('box').style.visibility = "visible";
}

//The Magic! Combines all our previous functions to change the scene we want (input or button layouts).

function changeScene(scenario) {
    changeImage(scenario.image)
    changeText(scenario.text)
    changeButtons(scenario.buttons)
    showButtons();
    hideInput();
};

function chageSceneInput(scenario){
    changeImage(scenario.image)
    changeText(scenario.text)
    hideButtons();
    showInput();
}


//Object with all of our scnarios that are accessed in the change scene functions. Very modular and can be expanded on later. Lol no jQuery.
scenario = {}
var scenario = {
    one: {
        image: "http://a.abcnews.com/images/Politics/GTY_AP_trump_sanders_clinton_as_160115_12x5_1600.jpg",
        text: "You're late to the event! But we don't have you down here in our records. Which campaign do you belong to again?\n",
        buttons: [["Hillary", "changeScene(scenario.two)"],["The Don", "changeScene(scenario.three)"],["Bernie", 'changeScene(scenario.four)']],
        input:[],
    },
    two: {
        image: "http://www.slate.com/content/dam/slate/articles/double_x/2015/11/151119_DX_Hillary-Myths.jpg.CROP.promo-mediumlarge.jpg",
        text: "Oh... your with Hillary..Well let's get started then. What do you want to do?",
        buttons: [["Scrub the email server", "changeScene(scenario.five)"],["Get a back rub from bill","changeScene(scenario.six)"]],
        input:[],
    },
    three: {
        image: "http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg",
        text: "Oh... you're with the Donald. Well...Where do we start then?",
        buttons: [["Take the Donald Pledge", "changeScene(scenario.nine)"],["Try to track down the Don's phone for him so he can tweet","chageSceneInput(scenario.ten)"]],
        input:[],
    },
    four: {
        image: "http://www.newyorker.com/wp-content/uploads/2015/07/Lepore-Bernie-Sanders-1200.jpg",
        text: "Oh...you're one of those...well let's get you hooked into the uh 'revolution' What do you want to do while you're here?",
        buttons: [["Take down the establishment!","changeScene(scenario.thirteen)"],["On second thought, an average donation of $27 might not be enough to affect the change we're talking about", "changeScene(scenario.fourteen)"]],
        input:[],
    },
    five: {
        image: "http://3ynk0w1orym5czc542xmo55k.wpengine.netdna-cdn.com/wp-content/uploads/2016/01/FBI.jpg",
        text: "WHEOWHEOWHEOWHEO You just took the fall for the email scandal. Consider your career in politics over.",
        buttons: [["Go Back to Start","changeScene(scenario.one)"]],
        input:[],
    },
    six:{
        image: "http://i.huffpost.com/gen/1439544/images/o-BILL-CLINTON-OBAMA-facebook.jpg",
        text: "Ha! That was a joke. Bill's a little busy cleaning up some Clinton Foundation loose ends. Let's get you started on some operations. Do you want to work on the Twitter account or the Reddit account?",
        buttons: [["Twitter", "chageSceneInput(scenario.seven)"],["Reddit","changeScene(scenario.eighteen)"]],
        input:[],
    },
    seven:{
        image: "http://urbanintellectuals.com/wp-content/uploads/2015/07/clinton-and-obama.jpg",
        text: "Nice! Just keep interacting with all of our bought followers to keep the activity up. How many more do you think we should buy from India to keep us trending?",
        buttons: [[ , ]],
        input:[],
    },
    eight:{
        image: "https://i.ytimg.com/vi/keWZk9-Z2gg/maxresdefault.jpg",
        text: "Looks like we didn't buy enough followers to stay relevant. The SS Hillary has sunk and you're out of the job.",
        buttons: [["Go Back to Start","changeScene(scenario.one)"]],
        input:[],
    },
    nine:{
        image: "http://ichef.bbci.co.uk/news/660/cpsprodpb/2233/production/_85355780_028844202-1.jpg",
        text: "Ohh boy. Now you've done it. This is how the Nazi's rose to power you know? Alright well now that you've pledged your undying loyalty what can you do for the campaign",
        buttons: [["Wait? Nazis? I might need to rethink this whole Trump thing", "changeScene(scenario.eleven)"], ["Let's go play off of people's fear and predjudices!!","changeScene(scenario.twelve)"]],
        input:[],
    },
    ten:{
        image: "http://s3.amazonaws.com/content.washingtonexaminer.biz/David%20Fitzsimmons.jpg",
        text: "No such luck on the phone, but you did find this interesting book for our Supreme Leader. Pick a joke from it and write it down for him to tweet later!",
        buttons: [],
        input:[],
        //need to figure out the onkeydown function for this one's design
    },
    eleven:{
        image: "http://www.thegamescabin.com/wp-content/uploads/2015/07/bright-future-ahead.jpg",
        text: "Way to use your brain citizen! Now get out there and make sure the US doesn't go and pull it's own Brexit!",
        buttons: [["Go Back to Start","changeScene(scenario.one)"]],
        input:[],
    },
    twelve:{
        image: "http://www.nannygoatsinpanties.com/wp-content/uploads/2016/03/trump-gold-brick-maga.jpg",
        text: "Now you've done it. Everyone besides 'the silent majority' is pissed off at you. Looks like you've sunk our chances at election by alienating the people you call 'Aliens.'",
        buttons: [["Go Back to Start","changeScene(scenario.one)"]],
        input:[],
    },
    thirteen:{
        image: "https://i.ytimg.com/vi/_dwIb9PwmhM/maxresdefault.jpg",
        text: "Whoa! Slow down there buckaroo! Do you even know what the establishment is? Do you have time? Let me give you a 3 hour reddit fuled fact dubious lecture on what you don't know",
        buttons: [["Ooooo...that's a little agressive...um sure I guess...", "changeScene(scenario.fifteen)"], ["Oh don't worry I know everything about the estblishment! Now let's go make sure we secure Larry Daivd as our Bernie joke writer!", "chageSceneInput(scenario.seventeen)"]],
        input:[],
    },
    fourteen:{
        image: "http://www.cartoonmovement.com/depot/cartoons/2011/10/18/a_portrait_of_capitalism__tjeerd_royaards.jpeg",
        text: "Capitalist..",
        buttons: [["Go Back to Start","changeScene(scenario.one)"]],
        input:[],
    },
    fifteen:{
        image: "https://lehollandaisvolant.net/tout/folio/img/Spongebob%20time%20cards/many%20hours%20later.jpg",
        text: "Many HOURS LATER",
        buttons: [["What Happened?!?!","changeScene(scenario.sixteen)"]],
        input:[],
    },
    sixteen:{
        image: "http://www.sbmania.net/pictures/1c/351.png",
        text: "Has the revolution happened yet?",
        buttons: [["Go Back to Start","changeScene(scenario.one)"]],
        input:[],
    },
    seventeen:{
        image: "https://pbs.twimg.com/profile_images/1229880667/hbo-curbyourenthusiasm-header.jpg",
        text: "You're now meeting with Larry David. You only get one shot at this so make sure you're funny. Tell him a joke and see if you can secure his funny for Bernie.",
        buttons: [],
        input:[],
    },
    eighteen:{
        image: "https://kenpire.files.wordpress.com/2015/02/le-reddit-soldier.jpg",
        text: "Oh No! The reddit army is on to you! Don't worry, it's just the Bernie Bros, Donald followers and their utter contempt for any candidate who isn't a man. Let's go back and see if we can find you a position that works.",
        buttons: [["Go Back to Start","changeScene(scenario.one)"]],
        input:[],
    },
    nineteen:{
        image: "http://www.thewrap.com/wp-content/uploads/2015/11/Larry-David-Heckling-Donald-Trump-on-SNL-340x300.jpg",
        text: "Your joke was not funny. You've been fire. Sorry about that =(",
        buttons: [["Go Back to Start","changeScene(scenario.one)"]],
        input:[],
    },
    twenty: {
        image: "http://a.abcnews.com/images/Politics/AP_hillary_clinton_jt_150919_12x5_1600.jpg",
        text: "You saved the campaign! Great Job! Our plan ala Silicon Valley worked!",
        buttons: [["Go Back to Start","changeScene(scenario.one)"]],
        input:[],
    },
    twentyone: {
        image: "https://nypdecider.files.wordpress.com/2015/11/larry-david-vs-donald-trump-snl.jpg?quality=90&strip=all&w=1200",
        text: "Your joke just saved the campaign!",
        buttons: [["Go Back to Start","changeScene(scenario.one)"]],
        input:[],
    }
};

//Starts our website at scene one
changeScene(scenario.one);

///Make the on keydown for each text and number a binary random number generator that would send you to one of two scenes instead of just one spot. THis is just a proof of concept.
input.onkeypress = function(event) {
    if (event.key == "Enter") {
        answer = input.value;
        if(!isNaN(answer)){
            parseInt(answer)
            if (answer < 10000) {
                changeScene(scenario.eight)
            }else{
                changeScene(scenario.twenty)
            }
        }else if(isNaN(answer)) {
            var funny = Math.floor(Math.random()+.5)
            if(funny===1){
                changeScene(scenario.nineteen)
            }else{
                changeScene(scenario.twentyone)
            }
        }
    }
};

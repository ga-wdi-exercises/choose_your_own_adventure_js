var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('box')
var candidate;

function changeText(words) {
    text.innerHTML = words.replace("your candidate", candidate);
};

function changeImage(img) {
    images.style.backgroundImage = "url(" + img + ")";
};

function changeButtons(buttonList) {
    buttonBox.innerHTML = "";
    for (var i = 0; i < buttonList.length; i++) {
        buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
    };
}

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
        buttons: [["Twitter", "chageSceneInput(scenario.seven)"],["Reddit","changeScene(scenario.eight)"]],
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
        text: "Ohh boy. Now you've done it. This is how the Nazi's rose to power you know? Alright well now that you've pledge your undying loyalty what can you do for the campaign",
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
        buttons: [],
        input:[],
    },
    thirteen:{
        image: "",
        text: "",
        buttons: [],
        input:[],
    },
    fourteen:{
        image: "",
        text: "",
        buttons: [],
        input:[],
    }
};
changeScene(scenario.one);

input.onkeypress = function(event) {
  if (event.key == "Enter") {
      changeScene(scenario.eight)
  }
};

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
        text: "Oh... your with the Donald. Well...Where do we start then?",
        buttons: [["Take the Donald Pledge", "changeScene(scenario.nine)"],["","changeScene(scenario.ten)"]],
        input:[],
    },
    four: {
        image: "http://www.newyorker.com/wp-content/uploads/2015/07/Lepore-Bernie-Sanders-1200.jpg",
        text: "Oh...you're one of those...",
        buttons: [],
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
        buttons: [],
        input:[],
    },
    nine:{
        image: "",
        text: "",
        buttons: [],
        input:[],
    },
    ten:{
        image: "",
        text: "",
        buttons: [],
        input:[],
    },
    eleven:{
        image: "",
        text: "",
        buttons: [],
        input:[],
    },
    twelve{
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

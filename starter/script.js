var name;
var input = document.getElementById('input');

input.onkeypress = function(event) {
  if (event.key == "Enter") {
    name = input.value;
    input.parentNode.removeChild(input)
    changeScreen(scenario.two)
  }
};

var text = document.getElementById("text");
function changeText(words) {
  text.innerHTML = words.replace("Your Candidate", campaign);
}

var images = document.getElementById("images");
function changeImage(img) {
  images.style.backgroundImage = "url(" + img + ")";
};

function changeScreen(s) {
  changeImage(s.image)
  changeText(s.text)
};

scenario = {}
var scenario = {
    one: {
        image: 'http://media.salon.com/2016/02/sanders_trump_hillary.jpg',
        text: "Welcome to the Campaign 2016 Edition!",
    },
    two: {
        image: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
        text: 'test'
    }
}

changeScreen(scenario.one)


//////WAT var buttonBox = document.getElementById('buttonBox');
// function changeButtons(buttonList) {
//   buttonBox.innerHTML = "";
//   for (var i = 0; i < buttonList.length; i++) {
//     buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
//   };
// };

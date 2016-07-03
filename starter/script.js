function start(){
    document.getElementById('campaign').style.backgroundImage = "url('http://static.lakana.com/media.fox26houston.com/photo/2015/12/28/You%20decide%20logo%20straight_1451322101303_667343_ver1.0.png')"
    confirm('Did you see your email?! You have offers to be the next Campaign Manager from all three candidates!');
}

function pictureChangePres() {
    var candidate = confirm("This is going to be hard! Pick who you want to work for so we can get to the campaign and figure our what's going on");
    if (candidate == true){
        document.getElementById('campaign').style.backgroundImage = "url('http://pixel.nymag.com/imgs/daily/intelligencer/2016/03/28/28-bernie-sanders-hillary-clinton-donald-trump.w750.h560.2x.jpg')"
    }
    var choice1 = setTimeout(function(){prompt("Who's it going to be?")}, 1000);
}

start();
pictureChangePres();

var questionsAnswers = [
    {
        "question":"You are in Kings Landing.  The city is buzzing with activity but smells… not good.  It’s time to see the world!  Where would you like to go next?",//first question, determines course.
        "answers":[
            {"title":"North to the RiverRun","response":1},
            {"title":"West to Casterly Rock","response":2},
            {"title":"South to Highgarden","response":3},
            {"title":"East across the Narrow Sea to Pentos","response":4}
            ]
    },
    {
        "question":"Welcome to RiverRun. The castle is under Siege!  There’s no place to stay here.  Where do we go next?",//
        "answers":[
            {"title":"South to Kings Landing","response":0},
            {"title":"North to Winterfell","response":5}
            ]
    },
    {
        "question":"You've made it to Casterly Rock. The Lanisters may poop gold but this place is a dump. Let’s move on to the rest of the Seven Kingdoms.",//
        "answers":[
            {"title":"North to Riverrun","response":1},
            {"title":"East to King’s Landing","response":0},
            {"title":"South to Highgarden","response":3},

            ]
    },
    {
        "question":"Highgarden is beautiful! But Queen Marjorie and Sir Loras are captive in Kings Landing! The army is on the move.  Where should we go?",
        "answers":[
            {"title":"Northeast to Kings Landing","response":0},
            {"title":"Northwest to Casterly Rock","response":2}
            ]
    },
    {
        "question":"You've made it to the freeland of Pentos! The salt air of the Narrow Sea is invigorating.  You can see all the way to the horizon in all directions.  Which way shall we go?",
        "answers":[
            {"title":"Continue to across the Narrow Sea","response":8},
            {"title":"I’m seasick.  Back to King’s Landing","response":0}
            ]
    },
    {
        "question":"The Wall...It’s awfully cold up here, but the Wall is amazing. How did men build such things?",
        "answers":[
            {"title":"Let’s go to the top an look around.","response":9},
            {"title":"Let’s get warm and head back to Winterfell and make a small detour in Moletown","response":5}
        ]
    },
    {
        "question":"That was dumb.  You really should have known better.  Now you’re dead.",
        "answers":[
            {"title":"Try Again!","response":0}
        ]
    },
    {
        "question":"Pirates ar boarding your ship!  What do we do?",
        "answers":[
            {"title":"Fight to the death!","response":7},
            {"title":"Beg for Mercy.","response":7}
        ]
    },
    {
        "question":"It's the top of the wall! And it’s awfully cold and windy up here.  Winter really is coming.  I hope we don’t….  Oh no!!  its the White Walkers!",
        "answers":[
            {"title":"North to the Wall!","response":6},
            {"title":"South to Riverun","response":0},
            {"title":"Lets take a peek in the dungeon first…","response":7}
        ]
    },
    {
        "question":"Finally, you've made it to Winterfell! But... Wait a sec….  Who’s the new Warden of the North?!",
        "answers":[
            {"title":"Fight them off!","response":7},
            {"title":"Jump for it and hope for the best!","response":7}
        ]
    }
    ];

    var currentLocation = 0;


    window.printCurrentLocation = function(){
        document.getElementById("question").innerHTML = questionsAnswers[currentLocation].question;
        var answers = "";
        for(var i=0, options = questionsAnswers[currentLocation].answers.length; i < options; i++){
            answers += "<p><button onclick='setLocation(" + questionsAnswers[currentLocation].answers[i].response+ ")'>"+ questionsAnswers[currentLocation].answers[i].title + "</button></p>";
        }
        document.getElementById("answers").innerHTML = answers;
    }

    window.setLocation = function(num) {
        currentLocation = num;
        window.printCurrentLocation();
    }

    window.printCurrentLocation();

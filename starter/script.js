var name = prompt("Welcome to Westeros, what is your name?");
var family = prompt("Are you of house Lannister or Stark?");
var money = 0;
var days = 1;

//Lannister story
if (family === 'Lannister') {
    console.log("Welcome "+name+" of House "+family+". You gain 300gold");
    money = 300;
    decision1L();
}
//Wanted to add pictures assigned to each function to help pick the choices but ran out of time..
function decision1L(){
    var choice1 = prompt("Where would you like to travel?")
    if (choice1 === 'Dorne'){
        days = days + 3;
        console.log("Upon arrival, you are rounded up by Dornish watchmen. They ask you where you are from. You answer proudly, "+name+" of house "+family+". The Dornish hate the Lannisters for killing the late queen Elia. You are immediately slain. You Die at day"+days+". Game Over");
        console.log("GAME OVER");
    }
    else if (choice1 === 'Kings Landing'){
        money = money + 100;
        days = days +1;
        console.log("You are welcome at Kings Landing. You offer to work guard for the knight on behalf of House "+family+". You gain 100gold. Currently at "+money+ "gold.");
        decision2L();
    }
    if (choice1 === 'Casterly Rock'){
        days = days +2;
        console.log("You are welcome home. A banker comes to you and ask if you would like to deposit some gold.. you have "+money+" gold.");
        var depositGold = prompt("How much gold would you like to deposit?");
        if (depositgold = NaN){
            depositGold = prompt("How much gold would you like to deposit (Please input a value)");
        }
        else if (parseInt(depositGold) > money){
            depositGold = prompt("How much gold would you like to deposit (Please input a value less than "+money);
        }
        else if (depositGold > 1){ //could have used != NaN
            money = money - parseInt(depositGold);
            "You deposited "+money+" gold. You currently have "+money+" gold."
            decision1L();
        }
}
}

    function decision2L(){
        console.log("Would you like to spend your gold? Currently at"+money);
        var choice2 = prompt("Where would you like to go? A) Varys pimp house. B) The Red Keep. C) Get some Mead");
        if (choice2 === 'A'){
            if (money < 1000){
                console.log("You do not have enough money. Currently at "+money);
                var repeatQ = prompt("Would you like to do more shifts at Kings Landing? Y/N");
                if (repeatQ === 'N'){
                    decision1L();
                }
                else if (repeatQ === 'Y'){
                    console.log("You work your days, dreaming of a night spent at Varys pleasure palace");
                }
                while(money < 1000){
                    console.log("still working..you gained 100g");
                    money += 100;
                    days += 1;
                    console.log("Currently at "+money+" gold. Day "+days);
                }
                if (money > 1000){
                console.log("You pay the money you have worked hard to earn but you die at the hands of a bald assasin. You die at "+days+" days.");
                console.log("GAME OVER");
            }
        }
    }

        if (choice2 === 'B'){
            console.log("You arent allowed here")
            decision1L();
        }
        else if (choice2 === 'C')
        console.log("You go into the Drowning Whore, a Lannister favored bar.")
        var choiceBar = prompt("1) Buy a round for yourself or 2) for EVERYONE?")
        if (choiceBar === '1'){
            money = money - 10;
            console.log("You spend 10gold. You currently have "+money+". You happily drink your mead");
            decision1L();
        }
        if (choiceBar === '2'){
            money = money - 100;
            console.log("You feel generous. You pay 100gold to buy rounds of meads for everyone at the bar. The patrons ask, what shall we sing?");
        }
        var choiceSong = prompt("1) The Rains of Castamere 2) The Bear and the Maiden Faire 3) The Dornishmans Wife");
        if (choiceSong === '1'){
            daysSong = days + 2;
            console.log("You begin to sing the words, your mates know the song well and sing along... 'And who are you, the proud lord said, that I must bow so low? Only a cat of a different coat, that's all the truth I know. In a coat of gold or a coat of red, a lion still has claws, And mine are long and sharp, my lord, as long and sharp as yours. And so he spoke, and so he spoke, that Lord of Castamere, But now the rains weep o'er his hall, with no one there to hear. Yes now the rains weep o'er his hall, and not a soul to hear.'");
            console.log("You get super drunk from all the free drinks, and pass out for 2 days");
            decision1L();
        }
        if (choiceSong === '2'){
            money = 0;
            days = days + 1;
            console.log("'From there, to here. From here! To there! All black and brown and covered in hair! He smelled that girl on the summer air! The bear! The bear! The maiden fair!....' You do not remember your night because you got too turnt, but in the process you lose your gold pouch.. You now have 0 money");
            decision1L();
        }
        if (choiceSong === '3'){
            console.log("'The Dornishman's wife was as fair as the sun, and her kisses were warmer than spring...'");
            console.log("A Man named Bronn stops you from singing, he says 'This song really is all about the ending.' and stabs you. You are gushing out blood as he takes your mead. You die at "+days);
            console.log("GAME OVER");
        }
    }

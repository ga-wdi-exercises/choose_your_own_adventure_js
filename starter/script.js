// put code here!
var start = 0;
var bought = [];
function mall(){
    var exit = 0;
    if(!start){
        console.log("Welcome to Pandemonium Mall!");
    }


    while (exit == 0){

        console.log("Select your destination:");
        console.log("1. Express");
        console.log("2. Banana Republic");
        console.log("3. Zara");
        console.log("4. Jumbo Bubble Tea");
        console.log("5. Starbucks");
        console.log("6. Willy Wonka's");
        console.log("7. Finish Line");
        console.log("0. Exit");

        var dest = prompt("Choose from the menu");
        if(dest == 1){
            bought.push(express());
        }else if(dest == 2){
            bought.push(banana());
        }else if(dest == 3){
            bought.push(zara());
        }else if(dest == 4){
            bought.push(bubble());
        }else if(dest == 5){
            bought.push(starbucks());
        }else if(dest == 6){
            bought.push(willy());
        }else if(dest == 7){
            bought.push(finish());
        }
        else{
            //exit
            exit = 1;
            console.log("Bye!  You bought: " + bought);
        }

    }

}
function express(){
    var buying = [];
    console.log("Welcome to Express!");
    console.log("Purchase from this list:");
    console.log("1. 1MX shirt");
    console.log("2. Chino pants");
    console.log("3. Producer pants");
    console.log("0. Nothing");

    var choose = prompt("Buy only one item from the menu");

    if(choose == 1){
        buying.push("1MX shirt");
    }else if(choose == 2){
        buying.push("Chino pants");
    }else if(choose == 3){
        buying.push("Producer pants");
    }
    return buying;

}
function banana(){
    var buying = [];
    console.log("Welcome to Banana Republic");
    console.log("Purchase from this list:");
    console.log("1. ZRX polo shirt");
    console.log("2. Leather belt");
    console.log("3. Teal necklace");
    console.log("0. Nothing");

    var choose = prompt("Buy only one item from the menu");

    if(choose == 1){
        buying.push("ZRX polo shirt");
    }else if(choose == 2){
        buying.push("Leather belt");
    }else if(choose == 3){
        buying.push("Teal necklace");
    }
    return buying;

}
function zara(){
    var buying = [];
    console.log("Welcome to Zara!");
    console.log("Purchase from this list:");
    console.log("1. Leather jacket");
    console.log("2. Zipper dress shirt");
    console.log("3. Skinny jeans");
    console.log("0. Nothing");

    var choose = prompt("Buy only one item from the menu");

    if(choose == 1){
        buying.push("Leather jacket");
    }else if(choose == 2){
        buying.push("Zipper dress shirt");
    }else if(choose == 3){
        buying.push("Skinny jeans");
    }
    return buying;

}
function bubble(){
    var buying = [];
    console.log("Welcome to Jumbo Bubble Tea!");
    console.log("Purchase from this list:");
    console.log("1. Green Tea");
    console.log("2. Milk Tea");
    console.log("3. Boba Tea");
    console.log("0. Nothing");

    var choose = prompt("Buy only one item from the menu");

    if(choose == 1){
        buying.push("Green Tea");
    }else if(choose == 2){
        buying.push("Milk Tea");
    }else if(choose == 3){
        buying.push("Boba Tea");
    }
    return buying;

}

function starbucks(){
    var buying = [];
    console.log("Welcome to Starbucks!");
    console.log("Purchase from this list:");
    console.log("1. Coffee");
    console.log("2. Ice coffee");
    console.log("3. Hot chocolate");
    console.log("0. Nothing");

    var choose = prompt("Buy only one item from the menu");

    if(choose == 1){
        buying.push("Coffee");
    }else if(choose == 2){
        buying.push("Ice coffee");
    }else if(choose == 3){
        buying.push("Hot chocolate");
    }
    return buying;

}
function willy(){
    var buying = [];
    console.log("Welcome to Willy Wonka's");
    console.log("Purchase from this list:");
    console.log("1. Taffy");
    console.log("2. Gummy worms");
    console.log("3. Lollipop");
    console.log("0. Nothing");

    var choose = prompt("Buy only one item from the menu");

    if(choose == 1){
        buying.push("Taffy");
    }else if(choose == 2){
        buying.push("Gummy worms");
    }else if(choose == 3){
        buying.push("Lollipop");
    }
    return buying;

}
function finish(){
    var buying = [];
    console.log("Welcome to the Finish Line!");
    console.log("Purchase from this list:");
    console.log("1. MJ shoes");
    console.log("2. Reebok shoes");
    console.log("3. Nike shoes");
    console.log("0. Nothing");

    var choose = prompt("Buy only one item from the menu");

    if(choose == 1){
        buying.push("MJ shoes");
    }else if(choose == 2){
        buying.push("Reebok shoes");
    }else if(choose == 3){
        buying.push("Nike shoes");
    }
    return buying;

}

mall();

var name = prompt("What is your name?");
var out = prompt("What's up " + name + "? After a long week at GA's WDI course, you deserve a night out on the town. Is your night SOBER, CASUAL, or WILD").toUpperCase();

switch (out) {
    case 'WILD':
        var drink = prompt("What are you drinking? (BEER, WINE, or TEQUILA)").toUpperCase();
        if (drink === "BEER") {
            prompt("Ahh a classic choice. Enjoy those hops responsibly. Don't do anything Miley Cyrus wouldn't do.");
        } else if (drink === "WINE") {
            prompt("You really have a taste for the finer things in life. Are you drinking the whole bottle though? Damn " + name + "!");
        } else if (drink === "TEQUILA") {
            prompt("Holy crap you are wasted! You got in a break-dance battle with a homeless person and called your ex 7 times. Tomorrow you will question everything.");
        } else {
            prompt("Please pick BEER, WINE, or TEQUILA");
        }
        break;
    case 'CASUAL':
        var drink = prompt("What are you drinking? (BEER, WINE, or TEQUILA)").toUpperCase();
        if (drink === "BEER") {
            prompt("Just a few beers huh? What are you some sort of craft-brew loving hipster? Do us all a favor and move to Brooklyn.");
        } else if (drink === "WINE") {
            prompt("Mmmmmm yes the cabernet pairs nicely with the lamb risotto. I taste subtle hints of oak, nutmeg, and coriander (WTF IS coriander BTW?).");
        } else if (drink === "TEQUILA") {
            prompt("You don't always drink tequila. But when you do, it's probably not Patron.");
        } else {
            prompt("Please pick BEER, WINE, or TEQUILA");
        }
        break;

        case 'SOBER':
        prompt("BOOOOOOOOO! Rethink your decision and restart this game");
            break;

    default:
        prompt("I didn't understand your choice. Hit Refresh and try again, this time picking SOBER, CASUAL, or WILD!");
}

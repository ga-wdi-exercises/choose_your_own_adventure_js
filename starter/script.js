var name = prompt("What is your name?");
var out = prompt("What's up " + name + "? Is your night SOBER, CASUAL, or WILD").toUpperCase();

switch (out) {
    case 'WILD':
        var drink = prompt("What are you drinking? (BEER, WINE, or TEQUILA)").toUpperCase();
        if (drink === "BEER") {
            prompt("Wild-Beer");
        } else if (drink === "WINE") {
            prompt("Wild-Wine");
        } else if (drink === "TEQUILA") {
            prompt("Wild-Tequila");
        } else {
            prompt("Please pick BEER, WINE, or TEQUILA");
        }
        break;
    case 'CASUAL':
        var drink = prompt("What are you drinking? (BEER, WINE, or TEQUILA)").toUpperCase();
        if (drink === "BEER") {
            prompt("Casual-Beer");
        } else if (drink === "WINE") {
            prompt("Casual-Wine");
        } else if (drink === "TEQUILA") {
            prompt("Casual-Tequila");
        } else {
            prompt("Please pick BEER, WINE, or TEQUILA");
        }
        break;

        case 'SOBER':
        prompt("BOOOOOOOOO! Rethink your decision and restart this game");
            break;

    default:
        prompt("I didn't understand your choice. Hit Run and try again, this time picking SOBER, CASUAL, or WILD!");
}

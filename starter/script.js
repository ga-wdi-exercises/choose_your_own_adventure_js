var start = prompt("Let's find out what we've learned in WDI since week1 ! Type Go to start!");

while (start == "Go") {

    if (start == "Go") {

        var student = prompt("Type:\nCLI\nCSS\nJavaScript\nChoose whatever you want to find out more!");

        if (student == "CLI") {
            var list = prompt("CLI? CLI including...\nTerminal\nDirectory\nPath\nCommand Syntax\nType one of the following lists.");
            switch (list) {
                case "Terminal":
                    alert("A program that takes commands, passes them to the operating system and returns any output or errors.");
                    break;
                case "Directory":
                    alert("Commonly known as folder. Which contains...\nRoot directory\nParents directory\nChildren directory");
                    break;
                case "Path":
                    alert("A path specifies the location of a particular file or folder in a file system.");
                    break;
                case "Command Syntax":
                    alert("Three parts:\nCommand\nOptions\nArguments");
                    break;
            }
        } else if (student == "CSS") {
            var list = prompt("CSS? CSS is Style Sheet of webpage which only contains just plain texts.\nFew example of CSS Sections...\nSelectors\nFlex-direction\nPositioning\nType one of the following lists.");
            switch (list) {
                case "Selectors":
                    alert("* : Any element\np{ } : Paragraph tag\n#myId{ } : ID tag\n.myClass{ } : Class tag\nAnd more...");
                    break;
                case "Flex-direction":
                    alert("row\ncolumn\nrow-reverse\ncolumn-reverse");
                    break;
                case "Positioning":
                    alert("Relative\nAbsolute\nFixed\nFloat");
                    break;
            }
        } else if (student == "JavaScript") {
            var list = prompt("JavaScript? JavasScript is a programming language used to make webpage funtioncal.\nJavaScript can do...\nType one of following lists for more information.\nChange\nHide\nShow");
            switch (list) {
                case "Change":
                    alert("Change HTML Content\nChange HTML Atrributes\nChange HTML Styles");
                    break;
                case "Hide":
                    alert("Hide HTML Elements");
                    break;
                case "Show":
                    alert("Show HTML Elements");
                    break;
            }
        }
    }

    var start = prompt("Type Go to go over again! or Type Stop!");
      if (start == "Stop") {
        var student = alert("Goodbye!");
            }
}

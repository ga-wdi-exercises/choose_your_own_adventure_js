var fs = require("fs")
var solution = fs.readFileSync("starter/script.js","utf8")
describe("Solution", function(){
  it("has no syntax errors", function(){
    eval(solution)
  })
  it("asks the user 3 questions", function(){
    var matches = solution.match(/prompt/g) || []
    expect(matches.length).toBeGreaterThan(2)
  })
  it("uses else if at least once", function(){
    var matches = solution.match(/else\ if/g) || []
    expect(matches.length).toBeGreaterThan(0)
  })
  it("contains at least one loop", function(){
    var matches = solution.match(/(while\ ?\(|for\ ?\()/g) || []
    expect(matches.length).toBeGreaterThan(0)
  })
  it("handles number inputs", function(){
    var matches = solution.match(/parseInt/g) || []
    expect(matches.length).toBeGreaterThan(0)
  })
})
var x = document.createElement("INPUT");
x.setAttribute("type", "text");

var message;
message = "x is equal to ";
document.write (message);
console.log("Hey, help yourself to anything in the fridge, just don't eat the last slice. Got it? (y/n)");

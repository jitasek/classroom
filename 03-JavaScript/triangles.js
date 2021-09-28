console.log("hello");

var side1 = -2;
var side2 = -10;
var side3 = 3;

// console.log ("side1 || side2 || side3");

if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    console.log("invalid side value");
} else {
    var expressionA = (side1 + side2) > side3;
    var expressionB = (side2 + side3) > side1;
    var expressionC = (side3 + side1) > side2;

    if (expressionA && expressionB && expressionC) {
        console.log ("it is possible to form a triangle");
    } else {
        console.log ("it is NOT possible to form a triangle");
    }
}
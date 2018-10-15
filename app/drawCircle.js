require("./babelSet.js");

function drawCircle(){
    let circle = require("./Circle.js");
    var ar = circle(2,3,4);
    console.log(ar.area);

    var Calc = require("./Calc.js");
    var c = new Calc();
    console.log(c.add(4,5));
}

drawCircle();
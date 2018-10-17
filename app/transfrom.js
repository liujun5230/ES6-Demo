function foo(){
    var es5Code = require("./Circle.js");
    var es6Code = require('babel-core')
        .transform(es5Code,{presets:['es2015']})
        .code;
    console.log(es6Code);
}
foo();
var p = Number(prompt("Enter Principle"));
var r = Number(prompt("Enter Rate"));
var t = Number(prompt("Enter Time"));

var a = p* Math.pow(1 + r/100, t);

var CI = a - p;
console.log(CI);
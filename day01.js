// var p = Number(prompt("Enter Principle"));
// var r = Number(prompt("Enter Rate"));
// var t = Number(prompt("Enter Time"));

// var a = p* Math.pow(1 + r/100, t);

// var CI = a - p;
// console.log(CI);

//herons formula
//s=a+b+c/2
//sqrt(s*(s-s)*(s-b)*(s-c))

// var a = Number(prompt("enter side a"));
// var b = Number(prompt ("enter side b"));
// var c= Number(prompt("enter side c"));
// 
// if (a+b>c || a+c>b||b+c>a){
    // var s=(a+b+c)/2;
    // console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
// } 
// else{
    // console.log("this is not a right angle traingle");
// }


var radius = Number(prompt("enter the radius"));
var pie= 3.14;
var area = 2*pie*radius;
console.log(area);
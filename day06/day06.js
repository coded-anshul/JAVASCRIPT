//do while
//let i = 1;
//do{
//    console.log(i);
//    i++;
//}while (i<=5);

//const { use } = require("react");

//ek na ek bar chalega loop 

//do{
//    console.log("hello");
//    var user = prompt("yes or no").toLowerCase;
//}while(user=="yes");

//guess the number game
//var num = Math.floor(Math.random()*100+1);
//var usernum=Math.floor(Number(prompt("enter the number")));
//do{
//    if (usernum<0 && usernum >100 || usernum ==NaN){
//        var usernum=Math.floor(Number(prompt("enter a valid num b/w 1 to 100")));
//
//    }
//    else if (usernum>num){
//        var usernum=Math.floor(Number(prompt("too high , try again")));
//
//    }
//    else if (usernum<num){
//        var usernum=Math.floor(Number(prompt("too low, try again")));
//    }
//    
//}while(usernum!==num)
//
//console.log("correct answer");

//sasta calculator


//do{
//    var num1= Number(prompt("enter the first number"));
//    var num2= Number(prompt("enter the second number"));
//    var operator=prompt("enter +,-,*,/");
//    
//    switch(operator){
//        case "+" : console.log(num1 + num2);
//        break
//        case "-" : console.log(num1-num2);
//        break
//        case "*" : console.log(num1 * num2) ;
//        break
//        case "/" : console.log(num1/num2);
//        break
//        default: console.log("bhund mai nimbu nichod ke pija");
//    }
//    var user=prompt("do you want to continue yes/no").toLowerCase();
//}while(user=="yes");


//entry control loop
//exit control loop

//nested loop

//process.stdout.write("*");
//process.stdout.write("*");
//process.stdout.write("*");
//process.stdout.write("*");
//process.stdout.write("*");
//
//
//console.log("*");
//console.log("*");
//console.log("*");
//


//for(i=1;i<=4;i++){
//    for(j=1;j<=6;j++){
//        process.stdout.write("*");
//    }
//    console.log();
//}

//for (i=1;i<=5;i++){
//    for(j=1;j<=i;j++){
//        process.stdout.write("*");
//    }
//    console.log();
//}
//


//for (i=5;i>=1;i--){
//    for(j=1;j<=i;j++){
//        console.log(j);
//    }
//    console.log();
//}

//for (i=1;i<=5;i++){
//    for(j=1;j<=i;j++){
//        process.stdout.write(j + "");
//    }
//    console.log();
//}

//for (i=5;i>=1;i--){
//    for(j=1;j<=i;j++){
//        console.log(i);
//    }
//    console.log();
//}


//var number = Number(prompt("enter the number "));
//
//for (i=1;i<=10;i++){
//    console.log(`${number}*${i}=`,number*i);
//}

var a = Number(prompt("enter the number "));
var b = Number(prompt("enter the number"));

console.log(Math.pow(a,b));
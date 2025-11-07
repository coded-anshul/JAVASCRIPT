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
var num = Math.floor(Math.random()*100+1);
var usernum=Math.floor(Number(prompt("enter the number")));
do{
    if (usernum<0 && usernum >100 || usernum ==NaN){
        var usernum=Math.floor(Number(prompt("enter a valid num b/w 1 to 100")));

    }
    else if (usernum>num){
        var usernum=Math.floor(Number(prompt("too high , try again")));

    }
    else if (usernum<num){
        var usernum=Math.floor(Number(prompt("too low, try again")));
    }
    
}while(usernum!==num)

console.log("correct answer");
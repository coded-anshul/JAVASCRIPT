//let a = parseInt(prompt("Enter first number (a): "));
//let b = parseInt(prompt("Enter second number (b): "));
//
//function gcd(a, b) {
//    while (b !== 0) {
//        let temp = b;
//        b = a % b;
//        a = temp;
//    }
//    return a;
//}
//
//let result = gcd(a, b);
//console.log("GCD / HCF is: " + result);
//alert("GCD / HCF is: " + result);

//var number = Number(prompt("enter the number"));
//
//
//var root= Math.sqrt(number)
//if (Number.isInteger(root)){
//    console.log("perfect square");
//}
//else{
//    console.log("not a perfect square");
//}
//


//var number = Number(prompt("enter the number"));
//var sum = 0;
//for (i=1;i<=number;i++){
//    if (number%i===0){
//        sum=sum+i;}   
//}
//if (sum>number){
//    console.log("abundant Number");
//}
//else{
//    console.log("not a abundant number");
//}


//var number= Number(prompt("enter the number"));
//var result="";
//var a=0;
//var b=1;
//for (i=1;i<=number;i++){
//    result+=a + " ";
//    let c= a+b;
//    a=b;
//    b=c;
//}
//console.log(result);


//var ask=prompt("ask circle , rectangle or triangle").toLowerCase();
//switch(ask){
//    case "circle":
//        var radius = parseInt(prompt("enter the radius"));
//        var area = 2*3.14*radius;
//        console.log(area);
//        break
//
//    case "rectangle":
//        var length = parseInt(prompt("enter the length"));
//        var breadth = parseInt(prompt("enter the breadth"));
//        var area = length*breadth;
//        console.log(area);
//        break
//
//    case "triangle":
//        var side=parseInt(prompt("enter the side"));
//        var area= (3/4)*side*side;
//        console.log(area);
//        break
//    default:
//        console.log("invalid input");
//}


//var months = Number(prompt("enter the month number"));
//var year = Number(prompt("enter the year"));
//
//if (months== 1 || months == 3 || months==5 || months ==7 || months == 8 || months == 10 || months == 12){
//    console.log("31 Days");
//}
//else if (months == 4 || months == 6 || months == 9 || months == 11){
//    console.log("30 Days");
//}
//else if (months==2){
//    if(year%4==0 && year%100 !=0 || year%400==0){
//        console.log("29 Days");}
//    else{
//        console.log("28 Days")
//    }
//}
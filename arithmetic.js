let a = 8;
let b = 6;
let c = 2;

let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

console.log("First arithmetic operation Result is:" + result1);
console.log("Second arithmetic operation Result is:" + result2);
console.log("Thired arithmetic operation Result is:" + result3);
console.log("fourth arithmetic operation Result is:" + result4);

let max = 0;
let min = 0;

//To find the Maximum Value among all the result
if ((result1 > result2) && (result1 > result3) && (result1 > result4))
    max = result1;
else if ((result2 > result3) && (result2 > result4))
    max = result2;
else if (result3 > result4)
    max = result3;
else
    max = result4;

console.log("Maximum among all the result: " + max);

//To find the Minimum Value among all the result
if ((result1 < result2) && (result1 < result3) && (result1 < result4))
    min = result1;
else if ((result2 < result3) && (result2 < result4))
    min = result2;
else if (result3 < result4)
    min = result3;
else
    min = result4;
console.log("Minimum among all the result: " + min);


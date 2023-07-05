/*
var a = 5;
var b = 5;
console.log(a==b);   // true
console.log("a is equal to b" + a==b);    // false
// a==b, then also output of 2nd line is showing false;
// It's not a bug but it's happening because one more operator '+' is being used here to concat;

console.log("a is equal to b -> " + (a==b));    // a is equal to b -> true

// Using ES6-
console.log(`a is equal to b -> ${a==b}`);     // a is equal to b -> true
// You don't need to use any '+' operator or start and close "" everytime, when we want to use a value, just use ${};

*/
/* Two types of Arithmetic Operators-
1. Prefix
2. Postfix

Prefix increment operator means the variable is incremented first and then the expression is evaluated using the new value of the variable;
Postfix increment operator means the expression is evaluated first using the original value of the variable and then the variable is incremented;

var x = 5;
console.log(++x);    // 6
console.log(x++);   // 6

var y = 5;
console.log(--y);    // 4
console.log(y--);   // 4
*/

var a = 4;
var b = 3;
console.log(a**b);      // 64 -> a^b, ** -> Exponentiation operator

// Swapping two Numbers-
/* 1-
var temp = a;
a = b;
b = temp;
console.log(a**b);    // 81

2. Without using the 3rd variable-
a = a+b;     // a = 4+3 = 7
b = a-b;     // b = 7-3 = 4
a = a-b;     // a = 7-4 = 3
console.log(a**b);    // 81
*/

// Difference between '==' and '==='.
var num1 = 5;
var num2 = '5';
console.log(num1==num2);    // true
console.log(num1===num2);    // false
// '==' only checks value of variables while '===' checks value as well as the data type(typeOf()) of variables;
// Operators

// Arithmatic Operator
// + - / * % **

console.log(1 + 2); // Addition --> 3
console.log("Bal" + "ram"); // String Concatenation --> "Balram"

console.log(10 - 5); // Substraction --> 5

console.log(10 / 5); // Devision --> 2

console.log(10 * 5); // Multiplication --> 50

console.log(12 % 2); // Modulos (remainder) --> 0

console.log(2 ** 3); // Power --> 8

// Comparison Operators
// == === != !== > < >= <=

console.log(5 == "5"); // Equal to (value) --> true

console.log(5 === "5"); // Equal to (value and type) --> false

console.log(5 != "6"); // Not Equal to (value) --> true

console.log(5 !== "5"); // Not Equal to (value and type) --> true

console.log(5 > 3); // Greater than --> true

console.log(3 < 5); // Less than --> true

console.log(5 >= 5); // Greater than or equal to --> true

console.log(3 <= 5); // Less than or equal to --> true

// Assignment Operators
// = += -= *= /= %=

let a = 10; // Assignment
a += 5;
console.log(a); // 15
a -= 3;
console.log(a); // 12   
a *= 2;
console.log(a); // 24
a /= 4;
console.log(a); // 6
a %= 5;
console.log(a); // 1

// Logical Operators
// && || !

console.log(true && false); // Logical AND --> false

console.log(true || false); // Logical OR --> true

console.log(!true); // Logical NOT --> false

// Unary Operators
// typeof + - ++ --

console.log(typeof 42); // "number"

console.log(typeof "Hello"); // "string"

console.log(+ "5"); // Converts string to number --> 5

console.log(- "5"); // Converts string to number and negates --> -5

let count = 0;
console.log(++count); // Pre-increment --> 1
console.log(count++); // Post-increment --> 1
console.log(count);   // 2

console.log(--count); // Pre-decrement --> 1
console.log(count--); // Post-decrement --> 1
console.log(count);   // 0

// Ternary Operator
// condition ? expr1 : expr2

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"
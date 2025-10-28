// var, let & const

var username = "Balaram";
console.log(username); // Balaram

/* 
var a;      //Declaration
let a;      
var a = 12; //Initialization
let a = 12;
const a = 12;
*/

// Var is window scoped
// var is function scoped
// var can be re-declared and updated

// let is block scoped
// let can be updated but not re-declared

// const is block scoped
// const cannot be updated or re-declared
// const must be initialized during declaration

// Global Scope
// Can be accessed from anywhere in the code

// Function Scoped
// Can be accessed only within the function

// Block Scoped
// Can be accessed only within the block { ... }

// Temporal Dead Zone
// Compiler Knows about the variable but it is not yet declared
// The time between entering scope and variable declaration

// Example of TDZ with let and const

//console.log(a); // ReferenceError: Cannot access 'a' before initialization

let a = 12;

// Example of TDZ with var - it is called hoisting

console.log(b); // undefined

var b = 12;


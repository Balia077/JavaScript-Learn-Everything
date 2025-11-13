// Q1: What is the diff between fnc declaration and expression in terms of hoisting?

// Ans -> Function declarations are fully hoisted — their name and body are available before execution.

//Function expressions are only partially hoisted because they are assigned to variables; only the variable is hoisted (initialized as undefined), not the function body, so the function isn’t available until the assignment line.

// Q2: Convert this function into an arrow function.

/* function multiply(a, b){
    return a * b;
} */

let multiply = (a, b)=>{
    return a * b;
}
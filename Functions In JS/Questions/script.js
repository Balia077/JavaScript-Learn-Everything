// Q1: What is the diff between fnc declaration and expression in terms of hoisting?

// Ans -> Function declarations are fully hoisted — their name and body are available before execution.

//Function expressions are only partially hoisted because they are assigned to variables; only the variable is hoisted (initialized as undefined), not the function body, so the function isn’t available until the assignment line.

// Q2: Convert this function into an arrow function.

/* function multiply(a, b){
    return a * b;
} */

let multiply = (a, b)=>{
    return a * b;
};

// Q3: Guess the output.

function sayHi(name = "Guest"){ // Default Parameter
    console.log("Hi", name);
}
sayHi();

// Ans => Hi Guest

// Q4: use rest parameter to accept any number of scores and return the total.

function abcd(...score){
    let total = 0;
   score.forEach(function(val){
    total += val;
   })
   return total;
}
console.log(abcd(1,2,3,4,5));

// Q5: fix this fnc using early return.

/* function checkAge(age){
    if(age < 18){
        console.log("Too young");
    }else{
        console.log("Allowed");
    }
} */

// Ans =>

    function checkAge(age){
        if(age < 18) return "Too young";
        return "Allowed";
    }

    console.log(checkAge(19));

    
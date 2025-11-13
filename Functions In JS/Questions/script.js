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

    /* console.log(checkAge(19)); */


// Q6: Pass a function into another function and execute it inside.

function suiii(val){
    val();
}
suiii(function(){
    console.log("suiii");
});

// Q7: Identify which is the higher order fnc.

[1,2,3].map(function(x){
    return x * 2;
});

// Ans => map is the high order function, because it accepts another function.

// Q8: It is pure function or Impure function? and why?

let a = 0;

function addTotal(num){
    a += num;
}

// Ans => It is an Impure function, because it changes the value of the external variable inside it.

// Q9: convert this function into a pure function.

/* let Total = 0;

function addToTotal(num){
    Total += num;
} */

//Ans =>

let Total = 0;

function addToTotal(num){
    let newTotal = Total;
    newTotal += num;
}

// Q10: Convert this normal function into an IIFE.

/* function init(){
    console.log("Initialized");
} */

// Ans =>

(function(){
    console.log("Initialized");
})();
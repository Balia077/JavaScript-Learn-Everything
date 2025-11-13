// Functions

// Declarations

function Balia(){

}

// function Expression

let fnc = function(){
 
}

// fat arrow Function

let func = () => {

};

// Parameters & Arguments

// Example

function dance(value){
    console.log(`${value} nach rha hai`);
}

dance("Ghoda"); //Argument
dance("Balia"); //Argument

// Default Parameters

function add(a, b = 5){ // b = 5 is default parameter
    console.log(a + b);
}
add(3); // 8
add(3,7); // 10

// Rest Operator

function abcd(...val){
    console.log(val);
}
abcd(1,2,3,4,5,6);

// return

function yoo(){
    return 7;
}

let val = yoo();
console.log(val);

// First Class Functions

// Functions ko values ki tarah treat kar sakte hai

// ex:-

function suii(val){
    val();
}
suii(function(){
    console.log("suiiiiiiiiiii");
});

// Higher Order Function

// HOF wo function hota hai jo ki return kare ek function ya fir accept ek function apne parameter me

function high(){
    return function(){
        console.log("Sherrrr");
    }
}
high()();

// Pure vs Impure functions

// aisa fnc jo ki bahar ki value ko na badle wo hai pure fnc

// ex:-


let a = 7;

function pure(){
    console.log("huihui");
}

// aisa fnc jo bahar ki value ko badal de wo hai impure fnc

function imPure(){
    a++;
}

// Closures -> ek fnc jo return kare ek aur fnc aur return hone wala fnc hamesha use karega parent fnc ka koi variable.

function parent(){
    let b = 12;
    return function(){
        console.log(b);
    }
}


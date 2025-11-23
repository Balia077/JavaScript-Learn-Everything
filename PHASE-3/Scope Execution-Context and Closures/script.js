//Scope -> scope hai ke aap apne created variables and functions kaha tak use kar sakte ho.

//functional scope -> function ke andar hi use ho sakti hai
//global scope -> pure code me kahi bhi use ho sakti hai
//block scope -> {} curly braces me hi use ho sakti hai

//agar aapka code kisi bhi {} ke andar nhi hai to aapka code global hai

function abcd(){
    var a = 12;     //var is functional scoped
}

console.log(a);  //script.js:11 Uncaught ReferenceError: a is not defined


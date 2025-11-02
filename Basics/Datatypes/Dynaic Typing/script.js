// Dynamic Typing in Jacascript
// Js me static typing nhi hai and yaha par hai dynamic typing jiska matlab hai aap data ko change kar skate ho kyuki yaha par dynamic data types hai

let a = 12;
a = "Balaram"; // yaha par mene number ko string me change kar diya
a = true; // yaha par mene string ko boolean me change kar diya
a = null; // yaha par mene boolean ko null me change kar diya

// typeof quirks 

console.log(typeof null); // ye null ko object batata hai jo ki ek bug hai javascript ka
console.log(typeof NaN); // ye NaN ko number batata hai jo ki sahi hai kyuki NaN ka matlab Not a Number hota hai lekin ye number type ka hi hota hai

// Type coercion
// Js me type coercion hota hai jiska matlab hai ki js apne aap hi data types ko convert kar deta hai jab aap different data types ke sath operations karte ho

console.log('5' + 10); // yaha par string aur number ko add karne par ye number ko string me convert kar deta hai aur output hota hai '510'
console.log('5' - 2); // yaha par string aur number ko subtract karne par ye string ko number me convert kar deta hai aur output hota hai 3
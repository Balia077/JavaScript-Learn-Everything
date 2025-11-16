// The DOM (Document Object Model)

// DOM Manipulation

// HTML se element select karna
// text badalna
// HTML badalna
// CSS badalna
// attributes
// event listeners

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

h1.textContent = "Hello Dost"   //Hello Dost
h2.innerHTML = "<i>Yoo</i>"
h3.innerText = "Suiii"

// Attribute Manipulation

//1. setAttribute()

let a = document.querySelector("a");
a.setAttribute("href", "https://google.com");

//2. getAttribute()

console.log(a.getAttribute("href"));

//3. removeAttribute()

a.removeAttribute("href");

//Dynamic DOM Manipulation

//Create Element
//append/prepend jaha bhi element chahiye waha

let h4 = document.createElement("h4");
h4.textContent = "Hello jii";
document.body.append(h4);       //Hello jii


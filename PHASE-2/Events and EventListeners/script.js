// Event & Event Handling

//Browser me page par koi bhi harkat karo event raise ho jayega

// Event matlab hota hai koi action hua
// Event Listener ka matlab hai aapne koi action ka reaction diya

// select the paragraph first
// add event listener

//Syntax:

/* element.addEventListener("event name", function(){

}) */

let p = document.querySelector("p");

p.addEventListener("click", function(){
    p.style.color = "green";
});

p.addEventListener("dblclick", function(){
    p.style.color = "red";
});


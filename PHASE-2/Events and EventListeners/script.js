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

// remove event listener

function dblclick(){
    p.style.color = "red";
}

p.addEventListener("dblclick", dblclick);       //added

p.removeEventListener("dblclick", dblclick);    //removed

//common events

//1. click
//2. input
//3. change
//4. submit
//5. mouseover
//6. keyup

//input

let inp = document.querySelector("input");
inp.addEventListener("input", function(val){
    console.log(val.data);
});


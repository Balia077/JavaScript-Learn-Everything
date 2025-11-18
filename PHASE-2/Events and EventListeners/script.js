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

//1. click✅
//2. input✅
//3. change✅
//4. submit✅
//5. mouseover✅
//6. keyup

//input

let inp = document.querySelector("input");
inp.addEventListener("input", function(val){
    if(val.data !== null){
        console.log(val.data);
    }
});

//change

let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function(dets){
    device.textContent = `${dets.target.value} Device Selected`;
});

//mouseover & mouseout

let box = document.querySelector("#box");

box.addEventListener("mouseover", ()=> {
    box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout", ()=> {
    box.style.backgroundColor = "red";
});

//Event bubling and capturing

//jispe event ayega agar uspar listener nhi hua to hamara event uske parent par listener dhundega aur aisa karte karte upar ki taraf move karega.

let ul = document.querySelector("ul");

ul.addEventListener("click", (dets)=>{
   dets.target.classList.toggle("lt");
});


// Timers & Intervals

//setTimeout

/* setTimeout(function(){
    console.log("hello world");
},5000);
 */
//setInterval

/* setInterval(function(){
    console.log("hello");
},1000); */

//clearTimeout
/* 
let tm = setTimeout(function(){
    console.log("hey");
}, 3000);

clearTimeout(tm); */


let st = setInterval(function(){
    console.log("hey");
}, 3000);

clearInterval(st);
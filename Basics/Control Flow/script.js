// if, else, else-if
// switch case
// early return pattern

/*
if(condition){
    // statement
}
*/

function getVal(val){
    if(val < 25) return 'F';
    else if(val < 50) return 'C';
    else if(val < 75) return 'B';
    else return 'A';
}

console.log(getVal(80)); // A
console.log(getVal(40)); // C
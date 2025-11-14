// Arrays

// Declaration

let marks = [10, 20, 30, 40, 50];

// Access

// marks[0]; 10

// Modify Array

marks[1] = 200;

// Array Methods

let arr = [1, 2, 3, 4, 5];

// push()

arr.push(7);    // [1, 2, 3, 4, 5, 7] -> 7 is added in last

// pop()

arr.pop();  //[1, 2, 3, 4, 5] -> 7 removed

// shift()

arr.shift();    //[2, 3, 4, 5] -> 1 removed

// unshift()

arr.unshift(0); //[0, 2, 3, 4, 5] -> 0 added in first

// splice()

arr.splice(1,2);   //[0, 4, 5] -> 2 & 3 removed

// slice()

let newarr = arr.slice(1,2);
console.log(newarr);    //[0, 4] -> it make a copy of the sellected array elements of the main array and make a new array, it does not make any changes in the main array.

// reverse()

let arr2 = [1,2,3,4,5];

arr2.reverse(); //[5,4,3,2,1] -> reverse the array

// sort()

let sr = arr2.sort(function(a,b){
    //return a - b; //sort in ascending order
    //return b - a;   //sort in descending order
});

// map()
// map sirf tab use karna hai jab aapko ek naya array banana hai pichle array ke data ke basis par.

let Arr = arr2.map(function(){
    //return 7;   //creates a blank array and returns 7 => [7,7,7,7,7]
});


//Q1: Create an array with 3 fruits and print the second fruit.

//let fruits = ["Apple", "Banana", "Avocado"];

//console.log(fruits[1]); //Banana

//Q2: Add "Mango" at the end and "Pineapple" at the beginning of this array:

let fruits = ["Apple", "Banana"];

fruits.push("Mango");
fruits.unshift("Pineapple");

console.log(fruits);    //["Pineapple", "Apple", "Banana", "Mango"]

//Q3: Replace "Banana" with "Kiwi" in this array:

let fruit = ["Apple", "Banana"];

fruit.pop();
fruit.push("Kiwi"); //["Apple", "Kiwi"]

//Q4: Insert "Red" and "Blue" at index 1 in this array:

let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");

// Q5: Extract only the middle 3 elements from this array:

let items = [1, 2, 3, 4, 5];
let newItems = items.slice(1, 4);
console.log(newItems);  //[2, 3, 4]

//Q6: Sort this array alphabetically and then reverse it:

let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort().reverse();
console.log(names);

//Q7: Use .map() to square each number:

let arr = [1,2,3,4];
let square = arr.map(function(val){
    return val * val;
});

console.log(square);    //[1, 4, 9, 16]

//Q8: use .filter() to keep numbers greater than 10.

let Arr = [5, 12, 8, 20, 3];

let va = Arr.filter(function(val){
    return val > 10;
});

console.log(va);

// Use .reduce() to find the sum of this array:

let red = [10, 20, 30];

let sum = red.reduce((accumulator, val) =>{
    return accumulator + val;
}, 0);

console.log(sum);   //60

//Q9: Use .find() to get the first number less than 10.

let fin = [12, 15, 3, 8, 20];

let yoo = fin.find((val)=>{
    return val < 10;
});

console.log(yoo);   //3

//Q10: Use .some() to check if any student has scored below 35:

let so = [45, 60, 28, 90];

let ans = so.some((val) => {
    return val < 35;
});

console.log(ans);   //true

//Q11: Use .every() to check if all numbers are even.

let eve = [2, 4, 6, 8, 10];

let even = eve.every((val) => {
    return val % 2 === 0;
});

console.log(even);  //true

//Q12: Destructure this array to get firstName and lastName.

let fullName = ["Balaram", "Das"];

let [firstName, lastName] = fullName;

console.log(firstName); //Balaram
console.log(lastName);  //Das

//Q13: Merge two arrays using spread operator.

let a = [1, 2];
let b = [3, 4];

let c = [...a, ...b];

console.log(c); //[1,2,3,4]

//Q14: Add "India" to the start of this array using spread:

let countries = ["USA", "UK"];

countries = ["India", ...countries];

//Q15: Clone this array properly (not by reference).

let Arrr = [1,2,3];
let Arrr2 = [...Arrr];

console.log(Arrr2);
// Ask the user a number and print whether each number from 1 to that number is even or odd

let value = Number(prompt("Enter a Number"));

if(value <= 0){
    console.log("Enter a Positive Number");
}
else{
    for(let i = 1; i <= value; i++){
        if(i % 2 === 0){
            console.log(i + " is Even");
        }
        else{
            console.log(i + " is Odd");
        }
    }
}
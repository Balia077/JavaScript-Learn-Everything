// Discount Calculator (HOF)

function discountCalc(discount){
    return function(price){
        return price - price * (discount / 100);
    }
}

let ten = discountCalc(10);
let twenty = discountCalc(20);

console.log(ten(200));
console.log(twenty(200));
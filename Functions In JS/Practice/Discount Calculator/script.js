// Discount Calculator (HOF)

function discountCalc(discount){
    return function(price){
        return price - price * (discount / 100);
    }
}

let discounter = discountCalc(10);
console.log(discounter(200));
//Counter

let count = 10;

let st = setInterval(function(){
    if(count >= 0){
        count--;
        console.log(count);
    }
    else{
        clearInterval(st);
    }
},1000);
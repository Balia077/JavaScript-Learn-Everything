// Objects

// Declaration

let obj = {
    name: "Balaram",
    age: 19,
};

// Access

console.log(obj.name);      //Balarma
console.log(obj['age']);    //19

// Nesting and deep access

// Nesting

const user = {
    name: "Balia",
    address: {
        city: "Jajpur",
        pin: 755043,
        location: {
            lat: 22.2,
            lng: 77.4,
        },
    },
};

// Deep access

console.log(user.address.location.lng);     //77.4

// Object destructuring

let {lat, lng} = user.address.location;
console.log(lat, lng);

// Looping

let ob = {
    name: "Balaram",
    age: 19,
    email: "test@test.com",
};

for(let key in ob){
    console.log(ob[key]);
}

// Object Copying

//Spread Operator

let obj2 = {...ob};
console.log(obj2);      //{name: 'Balaram', age: 19, email: 'test@test.com'}

// Deep clone

let Obj = {
    name: "balia",
    age: 19,
    email: "test@test.com",
    address: {
        city: "Jajpur",
    },
};

let Obj2 = JSON.parse(JSON.stringify(Obj));


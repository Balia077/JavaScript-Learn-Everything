// Local Storage, Session Storage & Cookies

// localStorage => aapke browser ke andar data store karta hai browser band hone ke baad bhi data wahi rehta hai.

// sessionStorage => aapke browser ke andar data store karta hai lekin jab browser band karte ho to data chala jata hai.

// Cookies => chhota data hota hai jo aapke browser me store hota hai aur har request ke sath server ko bheja jata hai. Cookies ka size limited hota hai aur ye expiration date ke sath aate hain.

// localStorage:-

// Set item in localStorage
localStorage.setItem("username", "balaram");

// Get item from localStorage
let val = localStorage.getItem("highScore");

// Remove item from localStorage
localStorage.removeItem("highScore");

// Clear all items from localStorage
localStorage.clear();

// sessionStorage:-

// Set item in sessionStorage
sessionStorage.setItem("sessionName", "balaramSession");

// Get item from sessionStorage
let sessionVal = sessionStorage.getItem("sessionName");

// Remove item from sessionStorage
sessionStorage.removeItem("sessionName");

// Clear all items from sessionStorage
sessionStorage.clear();

// Cookies:-

document.cookie = "name=balaram";
let cookies = document.cookie;
console.log(cookies);

// To delete a cookie, set its expiration date to a past date
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// Note: localStorage and sessionStorage store data as strings. If you want to store objects or arrays, you need to use JSON.stringify() to convert them to strings before storing, and JSON.parse() to convert them back when retrieving.

// Storing array in localStorage.
localStorage.setItem("friends", JSON.stringify(["suraj", "ashish", "sumit"]));

// Retrieving array from localStorage.
let friends = JSON.parse(localStorage.getItem("friends"));
console.log(friends); // Output: ["suraj", "ashish", "sumit"]


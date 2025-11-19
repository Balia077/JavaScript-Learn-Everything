let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", (dets)=>{
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    let isValid = true;

    if(!emailAns){
        document.querySelector("#emailError").textContent = "Email is Incorrect";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }
    
    if(!passwordAns){
        document.querySelector("#passwordError").textContent = "Password is Incorrect";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }

    if(isValid === true){
        document.querySelector("#resultMessage").textContent = "Everything is Correct";
    }
});
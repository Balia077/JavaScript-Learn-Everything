let addBtn = document.querySelector("#addBtn");
// Form Box
const formBox = document.querySelector("#formBox");

//Form
const form = document.querySelector("form");

// Inputs
const imageInput = formBox.querySelector("input[placeholder='https://example.com/photo.jpg']");
const fullNameInput = formBox.querySelector("input[placeholder='Enter full name']");
const homeTownInput = formBox.querySelector("input[placeholder='Enter home town']");
const purposeInput = formBox.querySelector("input[placeholder='Enter purpose']");

// All Radio Boxes
const categoryRadios = document.querySelectorAll("input[name='category']");

// Individual Radio Boxes
const emergencyBox = formBox.querySelector(".radio-box.emergency");
const importantBox = formBox.querySelector(".radio-box.important");
const urgentBox = formBox.querySelector(".radio-box.urgent");
const noRushBox = formBox.querySelector(".radio-box.norush");

// Buttons
const createBtn = formBox.querySelector(".create-btn");
const closeBtn = formBox.querySelector(".close-btn");

//CODE STARTS HERE

function saveToLocalStorage(obj){
    if(localStorage.getItem("tasks") === null){
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
    else{
        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
}

addBtn.addEventListener("click",function(){
    formBox.style.display = "initial";
});

closeBtn.addEventListener("click", function(){
    formBox.style.display = "none";
});

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    const imageUrl = imageInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();

    let selected = false;
    categoryRadios.forEach(function(cat){
        if(cat.checked){
            selected = cat.value;
        }
    });

    if(imageUrl === ""){
        alert("Please enter an image URL.");
        return;
    }
    if(fullName === ""){
        alert("Please enter full name.");
        return;
    }
     if(homeTown === ""){
        alert("Please enter your home town.");
        return;
    }
     if(purpose === ""){
        alert("Please enter your purpose.");
        return;
    }

    if(!selected){
        alert("Please select a category.");
        return;
    }

    saveToLocalStorage({
        imageUrl,
        fullName,
        homeTown,
        purpose,
        selected,
    });
});
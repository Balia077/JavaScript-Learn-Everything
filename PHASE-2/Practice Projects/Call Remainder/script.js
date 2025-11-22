let addBtn = document.querySelector("#addBtn");
// Form Box
const formBox = document.querySelector("#formBox");

// Inputs
const imageInput = formBox.querySelector("input[placeholder='https://example.com/photo.jpg']");
const fullNameInput = formBox.querySelector("input[placeholder='Enter full name']");
const homeTownInput = formBox.querySelector("input[placeholder='Enter home town']");
const purposeInput = formBox.querySelector("input[placeholder='Enter purpose']");

// Radio Boxes
const emergencyBox = formBox.querySelector(".radio-box.emergency");
const importantBox = formBox.querySelector(".radio-box.important");
const urgentBox = formBox.querySelector(".radio-box.urgent");
const noRushBox = formBox.querySelector(".radio-box.norush");

// Buttons
const createBtn = formBox.querySelector(".create-btn");
const closeBtn = formBox.querySelector(".close-btn");


addBtn.addEventListener("click",function(){
    formBox.style.display = "initial";
});

closeBtn.addEventListener("click", function(){
    formBox.style.display = "none";
});


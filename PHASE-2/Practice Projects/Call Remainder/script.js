let addBtn = document.querySelector("#addBtn");
let formBox = document.querySelector("#formBox");
let closeBtn = document.querySelector(".close-btn");

addBtn.addEventListener("click",function(){
    formBox.style.display = "initial";
});

closeBtn.addEventListener("click", function(){
    formBox.style.display = "none";
});
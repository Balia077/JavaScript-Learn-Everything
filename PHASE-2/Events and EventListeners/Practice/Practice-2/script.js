let btn = document.querySelector("#btn");
let fileInput = document.querySelector("#fileinput");

btn.addEventListener("click", ()=>{
    fileInput.click();
});

fileInput.addEventListener("change", (dets)=>{
    const file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
});
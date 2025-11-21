let download = document.querySelector("#download");
let controls = document.querySelector(".controls");
let pau = document.querySelector(".pau");
let can = document.querySelector(".can");
let stats = document.querySelector(".stats");
let dgb = document.querySelector(".dgb");
let perc = document.querySelector(".perc");
let pTrack = document.querySelector(".progress-track");
let pBar = document.querySelector(".progress-bar");
let sub = document.querySelector(".sub");
let h3 = document.querySelector(".h3");

let intervalId;
let count = 0;
let flag = true;
let seconds = 10;

download.addEventListener("click", function () {
    download.style.display = "none";
    controls.style.display = "flex";
    pTrack.style.display = "flex";
    stats.style.display = "flex";
    sub.style.display = "flex";
    startInt();
});

function startInt() {
    intervalId = setInterval(function () {
        if (count <= 99) {
            count++;
            pBar.style.width = `${count}%`;
            dgb.textContent = `${count} GB`;
            perc.textContent = `${count}%`;
        }
        else {
            controls.style.display = "none";
            h3.style.display = "flex"
            h3.style.color = "#6ee7b7";
            sub.style.display = "none";
        }
    }, (seconds * 1000) / 100);
}

pau.addEventListener("click", function () {
    if (flag === true) {
        clearInterval(intervalId);
        flag = false;
        pau.textContent = "Resume";
    }
    else {
        startInt();
        flag = true;
        pau.textContent = "Pause";
    }
});

can.addEventListener("click", function () {
    download.style.display = "flex";
    controls.style.display = "none";
    pTrack.style.display = "none";
    stats.style.display = "none";
    sub.style.display = "none";
    count = 0;
    clearInterval(intervalId);
    if(flag === true){
        pau.textContent = "Resume";
        flag = false;
    }
    else{
        pau.textContent = "Pause";
        flag = true;
    }
});

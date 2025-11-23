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

function saveToLocalStorage(obj) {
    if (localStorage.getItem("tasks") === null) {
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
    else {
        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
}

addBtn.addEventListener("click", function () {
    formBox.style.display = "initial";
});

closeBtn.addEventListener("click", function () {
    formBox.style.display = "none";
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const imageUrl = imageInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();

    let selected = false;
    categoryRadios.forEach(function (cat) {
        if (cat.checked) {
            selected = cat.value;
        }
    });

    if (imageUrl === "") {
        alert("Please enter an image URL.");
        return;
    }
    if (fullName === "") {
        alert("Please enter full name.");
        return;
    }
    if (homeTown === "") {
        alert("Please enter your home town.");
        return;
    }
    if (purpose === "") {
        alert("Please enter your purpose.");
        return;
    }

    if (!selected) {
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

    form.reset();
    formBox.style.display = "none";
});

function showCards() {
    let allTasks = JSON.parse(localStorage.getItem("tasks"));
    allTasks.forEach(function (task) {
        // Main card
        const card = document.createElement("div");
        card.className = "card";
        card.id = "cardBox";

        // Top section
        const topSection = document.createElement("div");
        topSection.className = "top-section";

        // Profile Image
        const img = document.createElement("img");
        img.className = "pfp";
        img.src = "https://images.unsplash.com/photo-1762936263573-af3e0d866980?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D";
        img.alt = "";

        // Name container
        const nameDivWrapper = document.createElement("div");
        const nameDiv = document.createElement("div");
        nameDiv.className = "name";
        nameDiv.textContent = "Full Name";

        // Append name
        nameDivWrapper.appendChild(nameDiv);

        // Append to top section
        topSection.appendChild(img);
        topSection.appendChild(nameDivWrapper);

        // Details section
        const details = document.createElement("div");
        details.className = "details";

        // Left details
        const leftDetails = document.createElement("div");

        const pHome = document.createElement("p");
        pHome.textContent = "Home town";

        const pBookings = document.createElement("p");
        pBookings.textContent = "Bookings";

        leftDetails.appendChild(pHome);
        leftDetails.appendChild(pBookings);

        // Right details
        const rightDetails = document.createElement("div");
        rightDetails.style.textAlign = "right";

        const pCity = document.createElement("p");
        pCity.textContent = "City";

        const pTimes = document.createElement("p");
        pTimes.textContent = "0 times";

        rightDetails.appendChild(pCity);
        rightDetails.appendChild(pTimes);

        // Add left + right to details
        details.appendChild(leftDetails);
        details.appendChild(rightDetails);

        // Actions section
        const actions = document.createElement("div");
        actions.className = "actions";

        // Call button
        const callBtn = document.createElement("button");
        callBtn.className = "call-btn";
        callBtn.textContent = "Call";

        // Message button
        const msgBtn = document.createElement("button");
        msgBtn.className = "msg-btn";
        msgBtn.textContent = "Message";

        // Append buttons
        actions.appendChild(callBtn);
        actions.appendChild(msgBtn);

        // Final assembly
        card.appendChild(topSection);
        card.appendChild(details);
        card.appendChild(actions);

        // Now you can append it anywhere:
        document.querySelector(".stack").appendChild(card);

    });
}

showCards();
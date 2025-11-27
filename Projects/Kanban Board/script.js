const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const tasks = document.querySelectorAll(".task");
let dragTask = null;

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        dragTask = task;
    });
});

function addDragEvents(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    })
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    column.addEventListener("drop", (e) => {
        e.preventDefault();
        column.appendChild(dragTask);
        column.classList.remove("hover-over");
    })
}



addDragEvents(todo);
addDragEvents(progress);
addDragEvents(done);

const toggleModalBtn = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal .bg");
const addTaskBtn = document.querySelector("#add-new-task");

toggleModalBtn.addEventListener("click", () => {
    modal.classList.toggle("active");
});

modalBg.addEventListener("click", () => {
    modal.classList.remove("active");
});

addTaskBtn.addEventListener("click", () => {
    const taskTitle = document.querySelector("#task-title-input").value;
    const taskDis = document.querySelector("#task-discription-input").value;
    
    const div = document.createElement("div");

    div.classList.add("task");
    div.setAttribute("draggable", "true");

    div.innerHTML = `
        <h2>${taskTitle}</h2>
        <p>${taskDis}</p>
        <button>Delete</button>
    `
    todo.appendChild(div);
    modal.classList.remove("active");
});
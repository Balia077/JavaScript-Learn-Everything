let tasksData = {};

const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const tasks = document.querySelectorAll(".task");
const columns = [todo, progress, done];
let dragTask = null;

function addTask(title, desc, column) {
    const div = document.createElement("div");

    div.classList.add("task")
    div.setAttribute("draggable", "true")

    div.innerHTML = `
        <h2>${title}</h2>
        <p>${desc}</p>
        <button>Delete</button>
    `
    column.appendChild(div)

    div.addEventListener("drag", (e) => {
        dragTask = div;
    })

    return div;
}

function updateTaskCount() {
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");
        tasksData[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector("h2").innerText,
                desc: t.querySelector("p").innerText
            }
        })
        localStorage.setItem("tasks", JSON.stringify(tasksData));
        count.innerText = tasks.length;
    })
}

if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));

    for (const col in data) {
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {
            addTask(task.title, task.desc, column);
        })
    }
    updateTaskCount();
}

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

        updateTaskCount();
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

    addTask(taskTitle, taskDis, todo);
    updateTaskCount();
    modal.classList.remove("active");
});
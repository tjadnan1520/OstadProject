// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
window.onload = () => {
    loadTasks();
};

// Add task event
addTaskBtn.onclick = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        saveTasks();
        taskInput.value = "";
    } else {
        alert("Task cannot be empty!");
    }
};

// Add task to DOM
function addTask(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    saveTasks();
}

// Edit task
function editTask(button) {
    const li = button.parentElement;
    const taskTextElement = li.querySelector(".task-text");
    const newTaskText = prompt("Edit your task", taskTextElement.textContent);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskTextElement.textContent = newTaskText;
        saveTasks();
    }
}

// Delete task
function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".task-text").forEach(task => {
        tasks.push(task.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskText => addTask(taskText));
}

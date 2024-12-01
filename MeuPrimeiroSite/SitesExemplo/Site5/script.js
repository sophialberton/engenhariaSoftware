document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        
        const listItem = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskSpan.classList.add("task-text");

        taskSpan.onclick = function() {
            taskSpan.classList.toggle("completed");
            saveTasks();
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
            saveTasks();
        };

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        saveTasks();
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function saveTasks() {
    const tasks = [];
    const taskItems = document.querySelectorAll("#taskList li");

    taskItems.forEach(item => {
        const taskText = item.querySelector(".task-text").textContent;
        const isCompleted = item.querySelector(".task-text").classList.contains("completed");
        tasks.push({ text: taskText, completed: isCompleted });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {
        const taskList = document.getElementById("taskList");
        savedTasks.forEach(task => {
            const listItem = document.createElement("li");

            const taskSpan = document.createElement("span");
            taskSpan.textContent = task.text;
            taskSpan.classList.add("task-text");

            if (task.completed) {
                taskSpan.classList.add("completed");
            }

            taskSpan.onclick = function() {
                taskSpan.classList.toggle("completed");
                saveTasks();
            };

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-btn");
            deleteButton.onclick = function() {
                taskList.removeChild(listItem);
                saveTasks();
            };

            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        });
    }
}



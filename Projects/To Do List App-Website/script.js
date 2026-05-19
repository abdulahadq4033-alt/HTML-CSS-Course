// LOADING FUNCTIONALITY
const loader = document.getElementById("loading-screen");
window.addEventListener("load", () => {
    loader.classList.add("fade-out");
    setTimeout(() => {
        loader.remove();
    }, 1000);
});

// TO DO LIST FUNCTIONALITY
const addBtn = document.getElementById("add-task-btn");
const clearBtn = document.getElementById("clear-task-btn");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
function addTask(){
    let task = input.value.trim();
    if(task !== ""){
        // Create a list item
        let li = document.createElement("li");
        // Create Checkbox
        let cb = document.createElement("input");
        cb.type = "checkbox";
        // When checkbox is checked, toggle completed class on list item
        cb.addEventListener("change", () => {
            li.classList.toggle("completed");
        });
        // Create a delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });
        // Adding elements to list item
        li.appendChild(cb);
        li.append(" " + task);
        li.appendChild(deleteBtn);
        // Adding a list item to task list
        taskList.appendChild(li);
        // Clear all
        input.value = "";
    }
}

// Adding a task using button
addBtn.addEventListener("click", addTask);
// press enter to add task
input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        addTask();
    }
});
clearBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
});
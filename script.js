const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (!taskText) {
        taskInput.focus();
        return;
    }

    const listItem = document.createElement("li");
    const taskLabel = document.createElement("span");
    taskLabel.className = "task-text";
    taskLabel.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${taskText}`);
    deleteButton.addEventListener("click", () => listItem.remove());

    listItem.append(taskLabel, deleteButton);
    taskList.appendChild(listItem);

    taskForm.reset();
    taskInput.focus();
});

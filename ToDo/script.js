const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keydown", function(event) {
    if(event.key === "Enter" && taskInput.value.trim() !== ""){
        addTask(taskInput.value.trim());
        taskInput.value = "";
    }
});

function addTask(taskText){
    const li = document.createElement("li");
    li.innerHTML =`
    <span>${taskText}</span>
    <div>
    <button class="edit-btn">Edit</button>
    <button class="complete-btn">Complete</button>
    <button class="delete-btn">Delete</button>
    </div>
    `;

    const completeButton = li.querySelector(".complete-btn");
    completeButton.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const editButton = li.querySelector(".edit-btn");
    editButton.addEventListener("click", () => {
        const newTaskText = prompt("Edit task:", taskText);
        if(newTaskText != null){
            taskText = newTaskText;
            li.querySelector("span").textContent = newTaskText;
        }
    });

    const deleteButton = li.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
        li.remove();
    });
    
    taskList.appendChild(li);
}
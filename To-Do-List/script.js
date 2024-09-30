document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-button" onclick="completeTask(this)">✔️</button>
        <button class="edit-button" onclick="editTask(this)">Edit</button>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function completeTask(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const taskText = span.textContent;
    
    const newTask = prompt('Edit your task:', taskText);
    if (newTask) {
        span.textContent = newTask;
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const tasks = [];

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push(taskText);
            updateTaskList();
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const taskIndex = event.target.dataset.index;
            tasks.splice(taskIndex, 1);
            updateTaskList();
        }
    });

    function updateTaskList() {
        taskList.innerHTML = ''; // Limpa a lista antes de recriar
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            const li = document.createElement('li');
            const span = document.createElement('span');
            const button = document.createElement('button');
            span.textContent = task;
            button.textContent = 'Remover';
            button.dataset.index = i;
            li.appendChild(span);
            li.appendChild(button);
            taskList.appendChild(li);
        }
    }
});

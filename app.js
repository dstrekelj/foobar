const taskApp = document.querySelectorAll('.js-task-app');

taskApp.forEach(function (app) {
    const taskForm = app.querySelector('.js-task-form');
    const taskList = app.querySelector('.js-task-list');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const input = event.target.querySelector('input');
        createTaskListItem(input.value);
        input.value = '';
    });

    function createTaskListItem(task) {
        const taskListItem = document.createElement('li');
        taskListItem.innerHTML = `<input type="checkbox"> <span>${task}</span> <button>X</button>`;

        const checkbox = taskListItem.querySelector('input');
        checkbox.addEventListener('change', function (event) {
            taskListItem.classList.toggle('done', event.target.checked);
        });

        const button = taskListItem.querySelector('button');
        button.addEventListener('click', function (event) {
            taskListItem.remove();
        });

        taskList.appendChild(taskListItem);
    }
});

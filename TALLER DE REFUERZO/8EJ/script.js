document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newTaskInput = document.getElementById('new-task');
        const taskText = newTaskInput.value.trim();

        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button onclick="editTask(this)">Editar</button>
                <button onclick="deleteTask(this)">Eliminar</button>
                <button onclick="toggleCompleteTask(this)">Completar</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    }

    window.editTask = function(button) {
        const taskItem = button.parentElement.parentElement;
        const taskText = taskItem.querySelector('span').innerText;

        Swal.fire({
            title: 'Editar Tarea',
            input: 'text',
            inputValue: taskText,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            inputValidator: (value) => {
                if (!value) {
                    return '¡El texto de la tarea no puede estar vacío!';
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                taskItem.querySelector('span').innerText = result.value;
            }//SRD
        });
    }

    window.deleteTask = function(button) {
        const taskItem = button.parentElement.parentElement;
        taskItem.remove();
    }

    window.toggleCompleteTask = function(button) {
        const taskItem = button.parentElement.parentElement;
        taskItem.classList.toggle('completed');
    }
});
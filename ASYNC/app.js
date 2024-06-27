function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetched user');
            resolve({ id: 1, name: 'Jane Doe' });
        }, 500);
    });
}

function fetchTodos(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetched todos');
            resolve([
                { id: 1, userId: userId, task: 'Task 1' },
                { id: 2, userId: userId, task: 'Task 2' }
            ]);
        }, 500);
    });
}

async function getUserDataAndTodos() {
    // 1. Obtener los datos del usuario
    const user = await fetchUser();

    // 2. Obtener las tareas del usuario
    const todos = await fetchTodos(user.id);

    // 3. Imprimir los datos del usuario y las tareas
    console.log('User:', user);
    console.log('Todos:', todos);
}

// Llamar a la función para obtener los datos y las tareas
getUserDataAndTodos();
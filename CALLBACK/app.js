function firstTask(callback) {
    console.log("Primera tarea completada.");
    callback();
}

function secondTask() {
    console.log("Segunda tarea completada.");
}

firstTask(secondTask);

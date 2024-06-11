function saludo(nombre) {
    console.log(`Hola, ${nombre}`);
}

function procesarEntradaUsuario(callback) {
    const nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre); //esto es un callback pasar un parametro a una funcion que se definio antes
}

procesarEntradaUsuario(saludo);

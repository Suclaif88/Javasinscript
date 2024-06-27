async function obtenerUsuario() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com');

        const usuario = await respuesta.json();

        console.log('datos del usuario:', usuario);

    }catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
    }
}

obtenerUsuario();
class Libro {
    constructor(nombre, autor) {
        this.nombre = nombre;
        this.autor = autor;
    }
}

class Biblioteca {
    constructor() {
        const librosGuardados = JSON.parse(localStorage.getItem('libros')) || [];
        this.libros = librosGuardados.map(libro => new Libro(libro.nombre, libro.autor));
        this.actualizarTabla();
    }

    agregarLibro(libro) {
        this.libros.push(libro);
        this.guardarEnLocalStorage();
        this.actualizarTabla();
    }

    eliminarLibro(index) {
        this.libros.splice(index, 1);
        this.guardarEnLocalStorage();
        this.actualizarTabla();
    }

    guardarEnLocalStorage() {
        localStorage.setItem('libros', JSON.stringify(this.libros));
    }

    actualizarTabla() {
        const tbody = document.querySelector('#tabla-libros tbody');
        tbody.innerHTML = '';
        this.libros.forEach((libro, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${libro.nombre}</td>
                <td>${libro.autor}</td>
                <td><button class="eliminar-btn" data-index="${index}">Eliminar</button></td>
            `;
            tbody.appendChild(row);
        });
        this.addDeleteEventListeners();
    }

    addDeleteEventListeners() {
        const botonesEliminar = document.querySelectorAll('.eliminar-btn');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                this.eliminarLibro(index);
            });
        });
    }
}

const biblioteca = new Biblioteca();

document.getElementById('libro-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const autor = document.getElementById('autor').value;

    if (nombre === '' || autor === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const libro = new Libro(nombre, autor);
    biblioteca.agregarLibro(libro);

    document.getElementById('libro-form').reset();
});

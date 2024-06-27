class Reserva {
    constructor(nombre, n_personas, fecha) {
        this.nombre = nombre;
        this.n_personas = n_personas;
        this.fecha = fecha;
    }
}

class Reservas {
    constructor() {
        const reservasGuardadas = JSON.parse(localStorage.getItem('reservas')) || [];
        this.reservas = reservasGuardadas.map(reserva => new Reserva(reserva.nombre, reserva.n_personas));
        this.actualizarTabla();
    }

    agregarReserva(reserva) {
        this.reservas.push(reserva);
        this.guardarEnLocalStorage();
        this.actualizarTabla();
    }

    eliminarReserva(index) {
        this.reservas.splice(index, 1);
        this.guardarEnLocalStorage();
        this.actualizarTabla();
    }

    guardarEnLocalStorage() {
        localStorage.setItem('reservas', JSON.stringify(this.reservas));
    }

    actualizarTabla() {
        const tbody = document.querySelector('#tabla-reservas tbody');
        tbody.innerHTML = '';
        this.reservas.forEach((reserva, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${reserva.nombre}</td>
                <td>${reserva.n_personas}</td>
                <td>${reserva.fecha}</td>
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
                this.eliminarReserva(index);
            });
        });
    }
}

const reservas = new Reservas();

document.getElementById('reserva-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const n_personas = document.getElementById('n_personas').value;
    const fecha = document.getElementById('fecha').value;

    if (nombre === '' || n_personas === '' || fecha === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const reserva = new Reserva(nombre, n_personas, fecha);
    reservas.agregarReserva(reserva);

    document.getElementById('reserva-form').reset();
});

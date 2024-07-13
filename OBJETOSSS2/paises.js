const prompt = require('prompt-sync')();

let baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
let baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];

function busquedaBaseDatos1(pais, Encontrado, busquedaBaseDatos2, NoEncontrado) {
    if (baseDatos1.includes(pais)) {
        Encontrado();
    } else {
        busquedaBaseDatos2(pais, Encontrado, NoEncontrado);
    }
}

function busquedaBaseDatos2(pais, Encontrado, NoEncontrado) {
    if (baseDatos2.includes(pais)) {
        Encontrado();
    } else {
        NoEncontrado();
    }
}

function Encontrado() {
    console.log('País encontrado');
}

function NoEncontrado() {
    console.log('Dato no encontrado');
}

let pais = prompt('¿Qué país desea buscar?: ');

busquedaBaseDatos1(pais, Encontrado, busquedaBaseDatos2, NoEncontrado);

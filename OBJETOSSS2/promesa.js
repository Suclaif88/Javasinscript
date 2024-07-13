const prompt = require('prompt-sync')();

let cadena = prompt('Ingrese una cadena: ');

new Promise((resolve, reject) => {
    let ultimoCaracter = cadena[cadena.length - 1].toLowerCase();

    const vocales = ['a', 'e', 'i', 'o', 'u'];

    if (vocales.includes(ultimoCaracter)) {
        resolve(ultimoCaracter);
    } else {
        reject('El caracter no es una vocal');
    }
})
.then((vocal) => {
    console.log(`La cadena termina en la vocal: ${vocal}`);
})

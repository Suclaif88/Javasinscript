const usuario = {
    nombre: "Carlos",
    edad: 30,
    direccion: {
        calle: "Calle Falsa",
        numero: 123,
        ciudad: "Springfield"
    },
    intereses: ["programación", "lectura", "ciclismo"]
};

let nombre = usuario.nombre
let ciudad = usuario.direccion.ciudad
let interes = usuario.intereses[0]



console.log(`Nombre: ${nombre}`)
console.log(`Ciudad: ${ciudad}`)
console.log(`Primer interes: ${interes}`)
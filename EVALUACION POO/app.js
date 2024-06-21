// Definición de una clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre; //this es el self de js
        this.edad = edad;
    }

    // Método
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear un objeto
const persona1 = new Persona('Juan', 30);
persona1.saludar(); // Hola, me llamo Juan y tengo 30 años.


//-----------HERENCIA-----------

// Clase base
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

// Clase derivada
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llama al constructor de la clase base
        this.raza = raza;
    }

    // Método sobreescrito
    hacerSonido() {
        console.log(`${this.nombre}, el ${this.raza}, ladra.`);
    }
}

const miPerro = new Perro('Max', 'Labrador');
miPerro.hacerSonido(); // Max, el Labrador, ladra.



//-----------ENCAPSULAMIENTO-----------

class CuentaBancaria {
    constructor(saldoInicial) {
        let saldo = saldoInicial; // Variable privada

        this.depositar = function (cantidad) {
            if (cantidad > 0) {
                saldo += cantidad;
                console.log(`Depositaste $${cantidad}. Saldo actual: $${saldo}.`);
            }
        };

        this.consultarSaldo = function () {
            console.log(`Saldo actual: $${saldo}.`);
        };
    }
}

const miCuenta = new CuentaBancaria(100);
miCuenta.consultarSaldo(); // Saldo actual: $100.
miCuenta.depositar(50); // Depositaste $50. Saldo actual: $150.
miCuenta.consultarSaldo(); // Saldo actual: $150.






// class CuentaBancaria {
//     // Declaración de un campo privado
//     #saldo;

//     constructor(saldoInicial) {
//         this.#saldo = saldoInicial; // Uso de un campo privado
//     }

//     // Métodos de la clase
//     depositar(cantidad) {
//         if (cantidad > 0) {
//             this.#saldo += cantidad;
//             console.log(`Depositaste $${cantidad}. Saldo actual: $${this.#saldo}.`);
//         }
//     }

//     consultarSaldo() {
//         console.log(`Saldo actual: $${this.#saldo}.`);
//     }
// }

// const miCuenta = new CuentaBancaria(100);
// miCuenta.consultarSaldo(); // Saldo actual: $100.
// miCuenta.depositar(50); // Depositaste $50. Saldo actual: $150.
// miCuenta.consultarSaldo(); // Saldo actual: $150.



//-----------POLIMORFISMO-----------

class Forma {
    area() {
        return 0;
    }
}

class Circulo extends Forma {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }
}

class Rectangulo extends Forma {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    area() {
        return this.ancho * this.alto;
    }
}

const formas = [
    new Circulo(10),
    new Rectangulo(5, 10)
];

formas.forEach(forma => {
    console.log(`Área: ${forma.area()}`);
});
// Área: 314.1592653589793 (para el círculo)
// Área: 50 (para el rectángulo)

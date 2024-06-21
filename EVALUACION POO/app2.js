class Vehiculo{
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrar_info(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
}

class Coche extends Vehiculo{
    constructor(marca, modelo, año, puertas){
        super(marca, modelo, año, puertas)
        this.puertas = puertas;
    }

    mostrar_info(){
        super.mostrar_info();
        console.log(`Puertas: ${this.puertas}`)
    }

    arranca_coche(){
        console.log("El coche arranca");
    }
}

const miCoche = new Coche('Toyota', 'Corolla', 2020, 4);
miCoche.mostrar_info();
miCoche.arranca_coche();
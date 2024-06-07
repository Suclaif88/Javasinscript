class Persona {
    constructor(){
       this.nombre  = prompt("Ingrese el nombre: ");
       this.edad = parseInt(prompt("Ingrese la edad: "));
    };

    presentarse(){
        console.log(`Hola ${this.nombre} tienes ${this.edad} años de edad`);
    }
}

// obj = new Persona()

// obj.presentarse()



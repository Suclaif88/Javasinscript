const estudiantes = [
    { nombre: "Ana", calificaciones: [90, 85, 88] },
    { nombre: "Luis", calificaciones: [78, 82, 80] },
    { nombre: "Carlos", calificaciones: [95, 92, 96] },
    { nombre: "Laura", calificaciones: [70, 75, 72] }
];

function agregarEstudiante(nombre, calificaciones) {
    estudiantes.push({ nombre, calificaciones });
}

function eliminarUltimoEstudiante() {
    return estudiantes.pop();
}

function obtenerNombresEstudiantes() {
    return estudiantes.map(est => est.nombre);
}

function estudiantesConPromedioMayorA(valor) {
    return estudiantes.filter(est => {
        const promedio = est.calificaciones.reduce((sum, cal) => sum + cal, 0) / est.calificaciones.length;
        return promedio > valor;
    });
}

function promedioGeneral() {
    const totalCalificaciones = estudiantes.reduce((sum, est) => sum.concat(est.calificaciones), []);
    const sumaTotal = totalCalificaciones.reduce((sum, cal) => sum + cal, 0);
    return sumaTotal / totalCalificaciones.length;
}

agregarEstudiante("María", [85, 87, 90]);
console.log("Estudiantes:", estudiantes);

const ultimoEstudianteEliminado = eliminarUltimoEstudiante();
console.log("Último estudiante eliminado:", ultimoEstudianteEliminado);

const nombresEstudiantes = obtenerNombresEstudiantes();
console.log("Nombres de estudiantes:", nombresEstudiantes);

const estudiantesDestacados = estudiantesConPromedioMayorA(85);
console.log("Estudiantes con promedio mayor a 85:", estudiantesDestacados);

const promedio = promedioGeneral();
console.log("Promedio general de calificaciones:", promedio);



/*

push(): Añade uno o más elementos al final del array.
pop(): Elimina el último elemento del array y lo devuelve.
shift(): Elimina el primer elemento del array y lo devuelve.
unshift(): Añade uno o más elementos al principio del array.
splice(): Cambia el contenido de un array eliminando, reemplazando o añadiendo nuevos elementos.
slice(): Devuelve una copia superficial de una porción del array.
map(): Crea un nuevo array con los resultados de llamar a una función para cada elemento del array.
filter(): Crea un nuevo array con todos los elementos que pasen una prueba definida en una función.
reduce(): Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor.

*/
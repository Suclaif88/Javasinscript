function registrarGasto() {
    let cantidad = parseFloat(prompt("Ingrese la cantidad gastada: "));
    let descripcion = prompt("Ingrese una breve descripcion del gasto: ");
    let gasto = {cantidad, descripcion}
    gastos.push(gasto);
    prompt("Gasto registrado correctamente");
}

function calcularTotalGastos(){
    let total = gastos.reduce((acumulador, gasto) => acumulador + gasto.cantidad, 0);
    prompt("El total de gastos es: " + total);
}

function mostrarResumenGastos(){
    let resumen = "";
    gastos.forEach(gasto => {
        resumen += "Gasto: " + gasto.cantidad + " Descripcion: " + gasto.descripcion + "\n";
    }
    prompt(resumen);
}

let gastos = [];

while (true) {
    console.log("Menu de opciones")
    console.log("1. Registrar Gasto")
    console.log("2. Calcular Total de Gastos")
    console.log("3. Mostrar Resumen de Gastos")
    let opcion = parseInt(prompt("Ingrese una opcion: "));
    switch (opcion) {
        case 1:
            registrarGasto();
            break;
        case 2:
            calcularTotalGastos();
            break;
        case 3:
            mostrarResumenGastos();
            break;
        default:
            console.log("Opcion no valida");
    }
}
let gastos = [];

function registrarGasto() {
    let cantidad = parseFloat(prompt("Ingrese la cantidad gastada: "));
    let descripcion = prompt("Ingrese una breve descripcion del gasto: ");
    let gasto = {cantidad, descripcion};
    gastos.push(gasto);
    alert("Gasto registrado correctamente");
}

function calcularTotalGastos(){
    let total = gastos.reduce((acumulador, gasto) => acumulador + gasto.cantidad, 0);
    alert("El total de gastos es: " + total);
}

function mostrarResumenGastos(){
    let resumen = "";
    gastos.forEach(gasto => {
        resumen += "Gasto: " + gasto.cantidad + " Descripcion: " + gasto.descripcion + "\n";
    });
    alert(resumen);
}

while (true) {
    let opcion = parseInt(prompt("Menu de opciones\n\n1. Registrar Gasto\n2. Calcular Total de Gastos\n3. Mostrar Resumen de Gastos\n\nIngrese una opcion: "));
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
            alert("Opcion no valida");
    }
}

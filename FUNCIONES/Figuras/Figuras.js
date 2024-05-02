function rectangulo(){
    let num1 = parseFloat(prompt("Ingrese la base: "));
    let num2 = parseFloat(prompt("Ingrese la altura: "));
    let area = num1 * num2;
    let perimetro = (num1 * 2) + (num2 * 2);
    return alert("El area es: " + area + "\n El perimetro es: " + perimetro);
}

function circulo(){
    let num1 = parseFloat(prompt("Ingrese el radio: "));
    let area = (num1 * num1) * Math.PI;
    let perimetro = (num1 * 2) * Math.PI;
    return alert("El area es: " + area + "\n El perimetro es: " + perimetro);
}

function triangulo(){
    let num1 = parseFloat(prompt("Ingrese la base: "));
    let num2 = parseFloat(prompt("Ingrese la altura: "));
    let num3 = parseFloat(prompt("Ingrese el lado 1: "));
    let num4 = parseFloat(prompt("Ingrese el lado 2: "));
    let area = (num1 * num2) / 2;
    let perimetro = num1 + num3 + num4;
    return alert("El area es: " + area + "\n El perimetro es: " + perimetro);
}

function cuadrado(){
    let num1 = parseFloat(prompt("Ingrese el lado: "));
    let area = num1 * num1;
    let perimetro = num1 * 4;
    return alert("El area es: " + area + "\n El perimetro es: " + perimetro);
}

let N3 = parseInt(prompt("INGRESE QUE DESEA CALCULAR: \n1.)RECTANGULO \n2.)CIRCULO \n3.)TRIANGULO \n4.)CUADRADO"));

switch (N3) {
    case 1:
        rectangulo();
        break;
    case 2:
        circulo();
        break;
    case 3:
        triangulo();
        break;
    case 4:
        cuadrado();
        break;
    default:
        alert("Opcion no valida");
}

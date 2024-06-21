// function guama(){
//     document.write("HOLA MUNDO");
// };

// guama();

// function Saludo(){
//     let s=prompt("INGRESE SU NOMBRE");
//     alert("bienvenido, "+ s);
// };

// Saludo();



 function SUMA(num1,num2){
    num3 = num1 + num2;
    return alert("La suma es: ",num3);
}

function RESTA(){
    let num1 = parseInt(prompt("Ingrese el primer numero: "));
    let num2 = parseInt(prompt("Ingrese el segundo numero: "));
    let resta = num1 - num2;
    return alert("La resta es: " + resta);
}

function MULT(){
    let num1 = parseInt(prompt("Ingrese el primer numero: "));
    let num2 = parseInt(prompt("Ingrese el segundo numero: "));
    let multiplicacion = num1 * num2;
    return alert("La multiplicacion es: " + multiplicacion);
}

function DIV(){
    let num1 = parseInt(prompt("Ingrese el primer numero: "));
    let num2 = parseInt(prompt("Ingrese el segundo numero: "));
    let division = num1 / num2;
    return alert("La division es: " + division);
}


let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let N3 = parseInt(prompt("INGRESE QUE DESEA HACER: \n1.)SUMA \n2.)RESTA \n3.)MULTIPLICACION \n4.)DIVICION"));

switch (N3) {
    case 1:
        SUMA(num1,num2);
        break;
    case 2:
        RESTA();
        break;
    case 3:
        MULT();
        break;
    case 4:
        DIV();
        break;
    default:
        alert("Opcion no valida");
}

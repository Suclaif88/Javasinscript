function celafas(){
    let far = (9/5) * temp + 32;
    alert("los fahrenheit de " + temp + " Celsius son: " + far);
}
function celakel(){
    let kel = temp + 273.15;
    alert("los kelvin de " + temp + " Celsius son: " + kel);
}

function faracel(){
    let cel = ((temp-32)/1.8);
    alert("los celsius de " + temp + " fahrenheit son: " + cel);
}
function farakel(){
    let kel = ((temp-32)/1.8) + 273.15;
    alert("los kelvin de " + temp + " fahrenheit son: " + kel);
}

function kelacel(){
    let cel = temp - 273.15;
    alert("los celsius de " + temp + " kelvin son: " + cel);
}
function kelafar(){
    let far = ((temp - 273.15)*1.8) + 32;
    alert("los fahrenheit de " + temp + " kelvin son: " + far);
}

let temp = parseFloat(prompt("Ingrese la Temperatura"))
let ACC = parseInt(prompt("INGRESE EL TIPO DE TEMPERATURA INICIAL: \n1.)Celsius \n2.)Farenhei \n3.)Kelvin"));

switch (ACC) {
    case 1:
        celafas();
        celakel();
        break;
    case 2:
        faracel();
        farakel();
    break;
    case 3:
        kelacel();
        kelafar();
        break;
    default:
        alert("Opcion no valida");
}
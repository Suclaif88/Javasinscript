let numero  = 5

alert("JUEGO DE ADIVINAR EL NUMERO (IF)")

let numero2 = prompt("INGRESE EL NUMERO:")

if(numero == numero2){
    alert("GANASTE")
}
else{
    alert("PERDISTE")
    }


alert("JUEGO DE CUAL ES EL MAYOR (SWITCH)")

let numero3 = prompt("INGRESE EL PRIMER NUMERO:")
let numero4 = prompt("INGRESE EL SEGUNDO NUMERO:")

switch(true){
    case numero3 == numero4:
        alert("LOS NUMEROS SON IGUALES")
        break;
    case numero3 > numero4:
        alert("EL PRIMER NUMERO ES MAYOR")
        break;
    case numero3 < numero4:
        alert("EL SEGUNDO NUMERO ES MAYOR")
        break;
    default:
        alert("ERROR")
}
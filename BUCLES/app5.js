let N1, N2

N1 = parseInt(prompt("Ingrese el primer numero: "));
N2 = parseInt(prompt("Ingrese el segundo numero: "));

if (N1 > N2) {
    alert("El numero mayor es: " + N1);
} 

else if (N2 > N1) {
    alert("El numero mayor es: " + N2);

} 

else {
    alert("Los numeros son iguales");
}
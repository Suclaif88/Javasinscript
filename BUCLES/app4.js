let N

N = parseInt(prompt("Ingrese la temperatura: "));

if (N >= 30) {
    alert("Hace calor");
} 
else if(N > 30 && N >= 20) {
    alert("El clima es agradable");
}
else{
    alert("Hace frio");
}
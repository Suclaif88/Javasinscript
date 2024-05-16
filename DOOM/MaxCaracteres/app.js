document.getElementById("texto").addEventListener("keyup", caracter);

function caracter(){
    let cant = document.getElementById("texto").value.lenght;
    let disponible = 20 - parseInt(cant);
    document.getElementById("disponible").innerHTML = disponible;
    if(disponible < 0){
        document.getElementById("disponible").style.color = "red";
        alert("NO HAY SUFICIENTES CARACTERES");
    }else{
        document.getElementById("disponible").style.color = "black";
    }
    if(disponible == 20){
        document.getElementById("disponible").style.color = "black";
    }

}
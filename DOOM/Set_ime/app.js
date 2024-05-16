let elemntoAlarma = document.getElementById("textoalarma");

function comenzarTiempo(){
    let tiempo = document.getElementById("tiempo").value;
    setTimeout(cambiarTexto, tiempo)
}

function cambiarTexto(){
    elemntoAlarma.textContent = "Encendido"
    elemntoAlarma.style.color = "red"
    Swal.fire({
        icon: 'warning',
        title: 'AY MI APA',
        text: 'Despiertese'
    });
}
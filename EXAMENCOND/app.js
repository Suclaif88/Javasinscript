function subirImagen() {
    let objetlist = document.getElementById("list");
    var fileInput = document.getElementById("arc");
    var file = fileInput.files[0];
    var imageUrl = URL.createObjectURL(file);
    var img = document.createElement("img");
    img.src = imageUrl;
    objetlist.appendChild(img);

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Eliminar";
    deleteButton.className = "buttonBO";
    deleteButton.onclick = function() {
        borrar(img);
        borrar(deleteButton)
    };
    objetlist.appendChild(deleteButton);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Foto subida con exito",
        showConfirmButton: false,
        timer: 1500
      });
}

function borrar(element){
    element.parentNode.removeChild(element);
}

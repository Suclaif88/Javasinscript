function aggItem() {
    const itemInput = document.getElementById('itemInput');//se obtiene el id de el input donde se ingresa el texto y se guarda en una variable
    const itemList = document.getElementById('itemList');//se obtiene el id de el el elemento lista donde se añadita el texto y se guarda en una variable

    
    const itemText = itemInput.value.trim();// Obtiene el texto del campo de entrada y elimina los espacios en blanco al inicio y al final
    //obtener el valor del input y guardarlo en una variable
    //trim() es un metodo de string y elimina los espacios en blanco
    
    // verificar si el campo de entrada está vacío
    if (itemText === '') {
        // Si el campo está vacío, muestra una alerta
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo no puede estar vacío'
        });
        return; // salir de la función sin agregar el ítem a la lista
    }

    // crear un nuevo elemento de lista ('li') 
    const listItem = document.createElement('li');
    listItem.textContent = itemText; // y le asigna el texto del ítem

    listItem.onclick = function() {
        eliminarItem(listItem);//se le pasa el item a eliminar
    }; //agregamos a cada item una funcion onclick

    // agrega el nuevo ítem a la lista que previamente guardamos su id
    itemList.appendChild(listItem);

    // mostrar un mensaje de confirmación
    Swal.fire({
        icon: 'success',
        title: 'Agregado',
        text: 'El ítem se ha agregado correctamente'
    });

    itemInput.value = ''; // limpia el campo de entrada
    itemInput.focus(); //pone el foco en el campo osea el "cursor"
}

function eliminarItem(item) {
    // mostrar una alerta de confirmación antes de eliminar el ítem
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            item.remove();//hacer remove del item
            // mostrar una alerta de éxito
            Swal.fire(
                'Eliminado!',
                'El ítem ha sido eliminado.',
                'success'
            );
        }
    });
}
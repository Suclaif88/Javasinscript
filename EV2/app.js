class ItemManager {
    constructor(inputId, listId) {
        this.itemInput = document.getElementById(inputId);
        this.itemList = document.getElementById(listId);
        this.init();
    }

    init() {
        // Se puede añadir cualquier inicialización adicional aquí
    }

    agregarItem() {
        let itemText = this.itemInput.value.trim();
        
        if (itemText === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El campo no puede estar vacío'
            });
            return;
        }

        let listItem = document.createElement('li');
        listItem.textContent = itemText;

        listItem.onclick = () => {
            this.eliminarItem(listItem);
        };

        this.itemList.appendChild(listItem);

        Swal.fire({
            icon: 'success',
            title: 'Agregado',
            text: 'El ítem se ha agregado correctamente'
        });

        this.itemInput.value = '';
    }

    eliminarItem(item) {
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
                item.remove();
                Swal.fire(
                    'Eliminado!',
                    'El ítem ha sido eliminado.',
                    'success'
                );
            }
        });
    }
}

// Inicializar el manejador de ítems
document.addEventListener('DOMContentLoaded', () => {
    const itemManager = new ItemManager('itemInput', 'itemList');

    document.getElementById('addItemButton').addEventListener('click', () => {
        itemManager.agregarItem();
    });
});

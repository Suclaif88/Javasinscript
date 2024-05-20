document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('inputElement');
    const addButton = document.getElementById('addButton');
    const itemList = document.getElementById('itemList');
    const hoverDiv = document.getElementById('hoverDiv');
    const keyPressed = document.getElementById('keyPressed');
    const resizeMessage = document.getElementById('resizeMessage');

    addButton.addEventListener('click', function () {
        const text = inputElement.value.trim();
        if (text !== '') {
            addItemToList(text);
            inputElement.value = '';
        }
    });

    function addItemToList(text) {
        const li = document.createElement('li');
        li.textContent = text;

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit');
        editButton.addEventListener('click', function () {
            const newText = prompt('Editar el elemento:', li.textContent);
            if (newText !== null && newText.trim() !== '') {
                li.firstChild.textContent = newText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function () {
            itemList.removeChild(li);
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        itemList.appendChild(li);
    }

    hoverDiv.addEventListener('mouseover', function () {
        hoverDiv.style.backgroundColor = '#d3d3d3';
        hoverDiv.textContent = '¡Gracias por pasar el ratón!';
    });

    hoverDiv.addEventListener('mouseout', function () {
        hoverDiv.style.backgroundColor = '#e3e3e3';
        hoverDiv.textContent = 'Pasa el ratón por aquí';
    });

    document.addEventListener('keydown', function (event) {
        keyPressed.textContent = `Tecla presionada: ${event.key}`;
    });

    window.addEventListener('resize', function () {
        resizeMessage.textContent = `Tamaño de la ventana: ${window.innerWidth} x ${window.innerHeight}`;
    });

    // Evento load
    window.addEventListener('load', function () {
        alert('¡La página ha cargado completamente!');
    });
});

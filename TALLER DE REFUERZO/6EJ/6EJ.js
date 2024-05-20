document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('inputElement');
    const addButton = document.getElementById('addButton');
    const itemList = document.getElementById('itemList');

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
});
